# Social automation (Discord + Reddit)

Automated user-acquisition posts for **Agent Git Lab Teams**. Copy source: `docs/USER-PUSH.md` (RAVEN only, no real name, no em dashes).

**Signup URL:** https://venture-raven-dubgub.vercel.app/app

**Investor email is separate and manual only.** See `docs/investor-emails/README.md`. This doc does not cover Gmail or cold outreach automation.

---

## Quick commands

```bash
# Preview without posting
npm run post:social -- --dry-run

# Post to configured channels only (skips missing env with setup hints)
npm run post:social

# Individual channels
npm run post:discord
npm run post:reddit -- --dry-run
```

Copy `.env.example` to `.env` and fill in the vars you need.

---

## Where to run commands (avoid ENOENT)

npm looks for `package.json` in the **current working directory**. The Cursor workspace root is not a Node project:

| Location | Has `package.json`? |
|----------|------------------------|
| `C:\Users\wolfs\OneDrive\Documents\Cursor` | **No**, `npm run post:social` → `ENOENT` (missing `package.json`) |
| `C:\Users\wolfs\OneDrive\Documents\Cursor\venture-raven-dubgub` | **Yes**, run all `npm run post:*` here |

**From workspace root** (`Documents\Cursor`):

```powershell
cd venture-raven-dubgub
npm run post:social -- --dry-run
```

One line:

```powershell
cd C:\Users\wolfs\OneDrive\Documents\Cursor\venture-raven-dubgub; npm run post:social -- --dry-run
```

**From anywhere** (launchers `cd` into `venture-raven-dubgub` automatically):

```powershell
C:\Users\wolfs\OneDrive\Documents\Cursor\venture-raven-dubgub\post-social.ps1 --dry-run
```

```cmd
C:\Users\wolfs\OneDrive\Documents\Cursor\venture-raven-dubgub\post-social.bat --dry-run
```



---

## Discord webhook (~2 minutes)

1. Open your Discord server (bootcamp / dev community you are allowed to post in).
2. **Server Settings** → **Integrations** → **Webhooks** → **New Webhook**.
3. Name it (e.g. `RAVEN venture push`), pick the target channel, **Copy Webhook URL**.
4. Add to `.env`:

```env
DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."
```

5. Test:

```bash
npm run post:discord -- --dry-run
npm run post:discord
```

**Notes**

- Webhooks post as the webhook name/avatar you set in Discord.
- One webhook = one channel. Create another webhook for a second server.
- Do not commit the webhook URL (treat it like a password).
- **If the webhook URL leaks:** Regenerating is optional unless you see abuse. Discord has no API to rotate webhooks without a bot token. To regenerate: Server Settings → Integrations → Webhooks → edit your webhook → **Regenerate**, then update `DISCORD_WEBHOOK_URL` in `.env`. Skip this if the URL is only in your local `.env` and you accept the risk.

---

## Reddit script app (~5 minutes)

1. Log in at [reddit.com/prefs/apps](https://www.reddit.com/prefs/apps).
2. **Create another app** (or create app):
   - **Type:** script
   - **Name:** e.g. `venture-raven-push`
   - **Redirect URI:** `http://localhost:8080` (required but unused for script apps)
3. Copy **client id** (string under the app name) and **secret**.
4. Add to `.env`:

```env
REDDIT_CLIENT_ID="your_client_id"
REDDIT_CLIENT_SECRET="your_secret"
REDDIT_USERNAME="your_reddit_username"
REDDIT_PASSWORD="your_reddit_password"
REDDIT_SUBREDDIT="codingbootcamp"
```

`REDDIT_SUBREDDIT` defaults to `codingbootcamp` if omitted. Safer copy variants (SideProject, webdev) are in `USER-PUSH.md`. **Do not use r/learnprogramming** without reading `docs/REDDIT-POST-REMOVED.md`.

Optional: after first successful auth, store `REDDIT_REFRESH_TOKEN` and remove password from `.env`.

5. Test:

```bash
npm run post:reddit -- --dry-run
npm run post:reddit
```

### Reddit rules and rate limits

- **Read each subreddit's rules** before posting. Many ban self-promotion or require specific flair.
- **Do not spam.** One thoughtful post per subreddit; engage in comments honestly.
- Reddit rate-limits new accounts and low-karma accounts. If submit fails, wait and try manually.
- **Do not** automate signups or inflate metrics (see `USER-PUSH.md` "Do not" section).
- Script apps are for personal use on your account only.

---

## Combined runner

`npm run post:social` runs Discord (if `DISCORD_WEBHOOK_URL` is set) and Reddit (if Reddit creds are set).

- Missing env → prints setup instructions, **does not crash**.
- Pass `--dry-run` to print what would be posted.

---

## GitHub Actions (optional, manual only)

Workflow: `.github/workflows/social-post.yml`

- Trigger: **workflow_dispatch** only (no cron; you click Run workflow in GitHub).
- Requires repository secrets (Settings → Secrets and variables → Actions):

| Secret | Required for |
|--------|----------------|
| `DISCORD_WEBHOOK_URL` | Discord post |
| `REDDIT_CLIENT_ID` | Reddit post |
| `REDDIT_CLIENT_SECRET` | Reddit post |
| `REDDIT_USERNAME` | Reddit post |
| `REDDIT_PASSWORD` or `REDDIT_REFRESH_TOKEN` | Reddit post |
| `REDDIT_SUBREDDIT` | Optional (default `codingbootcamp`) |

Omit secrets for channels you do not want. The workflow skips missing channels like the local script.

---

## After posting

Check qualified users:

```bash
curl -s https://venture-raven-dubgub.vercel.app/api/metrics
```

Target: `"qualified_users": 25` or higher before Wed Aug 19, 2026 17:00 ET.

---

## What stays manual

| Channel | Path |
|---------|------|
| Investor cold email | `docs/investor-emails/READY-TO-SEND.md` + Gmail (Joshua sends) |
| LinkedIn, HN, Indie Hackers, DMs | Copy from `docs/USER-PUSH-NO-REDDIT.md` (Reddit blocked; skip until karma) |
| Twitter/X, Slack DMs | Copy from `docs/USER-PUSH-NO-REDDIT.md` |

No Gmail OAuth or email API in this repo until Joshua sets that up separately.
