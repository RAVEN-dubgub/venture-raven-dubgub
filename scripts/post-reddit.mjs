/**
 * Post promotion to Reddit via OAuth (script app).
 * Run: npm run post:reddit [-- --dry-run]
 */
import { pathToFileURL } from "node:url";
import { loadEnv } from "./lib/load-env.mjs";
import { REDDIT_BODY, REDDIT_TITLE } from "./lib/social-copy.mjs";

loadEnv();

const USER_AGENT = "venture-raven-dubgub/1.0 (user acquisition pilot; by RAVEN-dubgub)";

const SETUP = `
Reddit credentials not configured.

Setup (about 5 minutes):
1. Log in at reddit.com -> Settings -> Apps (https://www.reddit.com/prefs/apps)
2. Create app: type "script", name e.g. venture-raven-push
3. Copy client id (under app name) and secret
4. Add to .env:
   REDDIT_CLIENT_ID="..."
   REDDIT_CLIENT_SECRET="..."
   REDDIT_USERNAME="your_reddit_username"
   REDDIT_PASSWORD="your_reddit_password"
   REDDIT_SUBREDDIT="learnprogramming"

Optional: REDDIT_REFRESH_TOKEN instead of password after first auth.

See docs/SOCIAL-AUTOMATION.md for rules and rate limits.
`.trim();

export function getRedditConfig() {
  const clientId = process.env.REDDIT_CLIENT_ID?.trim();
  const clientSecret = process.env.REDDIT_CLIENT_SECRET?.trim();
  const username = process.env.REDDIT_USERNAME?.trim();
  const password = process.env.REDDIT_PASSWORD?.trim();
  const refreshToken = process.env.REDDIT_REFRESH_TOKEN?.trim();
  const subreddit = (process.env.REDDIT_SUBREDDIT?.trim() || "learnprogramming").replace(/^r\//, "");

  const hasCreds = Boolean(clientId && clientSecret && username && (password || refreshToken));
  return { clientId, clientSecret, username, password, refreshToken, subreddit, hasCreds };
}

async function getAccessToken(config) {
  const auth = Buffer.from(`${config.clientId}:${config.clientSecret}`).toString("base64");
  const params = new URLSearchParams();
  if (config.refreshToken) {
    params.set("grant_type", "refresh_token");
    params.set("refresh_token", config.refreshToken);
  } else {
    params.set("grant_type", "password");
    params.set("username", config.username);
    params.set("password", config.password);
  }

  const res = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": USER_AGENT,
    },
    body: params.toString(),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Reddit OAuth failed (${res.status}): ${body.slice(0, 300)}`);
  }

  const data = await res.json();
  if (!data.access_token) {
    throw new Error("Reddit OAuth response missing access_token");
  }
  return data.access_token;
}

export async function postReddit({ dryRun = false, subreddit: subOverride } = {}) {
  const config = getRedditConfig();
  const subreddit = (subOverride || config.subreddit || "learnprogramming").replace(/^r\//, "");

  if (!config.hasCreds) {
    if (dryRun) {
      console.log("[dry-run] Reddit creds not set. Would post to r/" + subreddit);
      console.log(`Title: ${REDDIT_TITLE}`);
      console.log(`Body:\n${REDDIT_BODY}`);
      return { ok: true, dryRun: true, skipped: true, reason: "missing_creds", subreddit };
    }
    return { ok: false, skipped: true, reason: "missing_creds", message: SETUP };
  }

  if (dryRun) {
    console.log(`[dry-run] Would post to r/${subreddit}`);
    console.log(`Title: ${REDDIT_TITLE}`);
    console.log(`Body:\n${REDDIT_BODY}`);
    return { ok: true, dryRun: true, subreddit };
  }

  const token = await getAccessToken(config);
  const form = new URLSearchParams({
    kind: "self",
    sr: subreddit,
    title: REDDIT_TITLE,
    text: REDDIT_BODY,
    nsfw: "false",
    spoiler: "false",
  });

  const res = await fetch("https://oauth.reddit.com/api/submit", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": USER_AGENT,
    },
    body: form.toString(),
  });

  const data = await res.json();
  if (!res.ok || data.json?.errors?.length) {
    const err = data.json?.errors?.[0] || data.message || res.statusText;
    throw new Error(`Reddit submit failed: ${JSON.stringify(err)}`);
  }

  const url = data.json?.data?.url;
  console.log(`Posted to r/${subreddit}${url ? `: ${url}` : ""}.`);
  return { ok: true, subreddit, url };
}

function isDryRun(argv) {
  return argv.includes("--dry-run");
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dryRun = isDryRun(process.argv);
  postReddit({ dryRun })
    .then((result) => {
      if (result.skipped) {
        console.warn(result.message);
        process.exit(0);
      }
      if (!result.ok) process.exit(1);
    })
    .catch((err) => {
      console.error(err.message || err);
      process.exit(1);
    });
}
