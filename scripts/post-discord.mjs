/**
 * Post promotion message to Discord via webhook.
 * Run: npm run post:discord
 * Env: DISCORD_WEBHOOK_URL
 */
import { pathToFileURL } from "node:url";
import { loadEnv } from "./lib/load-env.mjs";
import { DISCORD_MESSAGE } from "./lib/social-copy.mjs";

loadEnv();

const SETUP = `
Discord webhook not configured.

Setup (about 2 minutes):
1. Open your Discord server
2. Server Settings -> Integrations -> Webhooks -> New Webhook
3. Name it (e.g. RAVEN venture push), pick a channel, copy Webhook URL
4. Add to .env: DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."

See docs/SOCIAL-AUTOMATION.md for details.
`.trim();

export function getDiscordWebhookUrl() {
  return process.env.DISCORD_WEBHOOK_URL?.trim() || "";
}

export async function postDiscord({ dryRun = false } = {}) {
  const webhookUrl = getDiscordWebhookUrl();
  if (!webhookUrl) {
    if (dryRun) {
      console.log("[dry-run] DISCORD_WEBHOOK_URL not set. Would post this message:");
      console.log(DISCORD_MESSAGE);
      return { ok: true, dryRun: true, skipped: true, reason: "missing_webhook" };
    }
    return { ok: false, skipped: true, reason: "missing_webhook", message: SETUP };
  }

  if (dryRun) {
    console.log("[dry-run] Would post to Discord webhook:");
    console.log(DISCORD_MESSAGE);
    return { ok: true, dryRun: true };
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: DISCORD_MESSAGE }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Discord webhook failed (${res.status}): ${body.slice(0, 300)}`);
  }

  console.log("Posted to Discord.");
  return { ok: true };
}

function isDryRun(argv) {
  return argv.includes("--dry-run");
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dryRun = isDryRun(process.argv);
  postDiscord({ dryRun })
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
