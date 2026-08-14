# Reddit setup (Joshua, ~5 minutes)

Automated posts for **Agent Git Lab Teams** via `npm run post:reddit`. Copy matches Discord: self-serve steps, no DM needed, RAVEN only.

**Signup URL:** https://venture-raven-dubgub.vercel.app/app

---

## 1. Create a Reddit script app

1. Log in at [reddit.com](https://www.reddit.com) with the account you will post from.
2. Open **User Settings** (avatar menu, top right) → **Apps** tab, or go directly to [reddit.com/prefs/apps](https://www.reddit.com/prefs/apps).
3. Scroll to **developed applications** and click **create another app...** (or **create app** if you have none).
4. Fill in the form:
   - **Name:** `venture-raven-push` (or any label you like)
   - **App type:** select **script**
   - **Description:** optional (e.g. `Venture user-acquisition pilot`)
   - **About URL:** leave blank or `https://venture-raven-dubgub.vercel.app`
   - **Redirect URI:** `http://localhost:8080` (required by Reddit; unused for script apps)
5. Click **create app**.
6. On the new app card:
   - **Client ID** = the short string under the app name (looks like random letters/numbers)
   - **Secret** = labeled **secret** (click reveal if hidden)

---

## 2. Add credentials to `.env`

In `venture-raven-dubgub`, copy `.env.example` to `.env` if you have not already. Add:

```env
REDDIT_CLIENT_ID="paste_client_id_here"
REDDIT_CLIENT_SECRET="paste_secret_here"
REDDIT_USERNAME="your_reddit_username"
REDDIT_PASSWORD="your_reddit_password"
REDDIT_SUBREDDIT="codingbootcamp"
```

| Variable | What to paste |
|----------|----------------|
| `REDDIT_CLIENT_ID` | Client ID from step 6 |
| `REDDIT_CLIENT_SECRET` | Secret from step 6 |
| `REDDIT_USERNAME` | Reddit login username (not display name) |
| `REDDIT_PASSWORD` | Reddit account password |
| `REDDIT_SUBREDDIT` | Target subreddit **without** `r/` (default: `codingbootcamp`) |

**Optional:** After first successful auth, you may store `REDDIT_REFRESH_TOKEN` and remove `REDDIT_PASSWORD` from `.env`. The script supports either password or refresh token.

**Do not commit `.env`.** It is gitignored.

---

## 3. Pick a subreddit (read rules first)

| Subreddit | Good for | Rules note |
|-----------|----------|------------|
| [r/codingbootcamp](https://www.reddit.com/r/codingbootcamp/) | **Primary** — bootcamp operators and alumni | Student project + honest feedback OK if you disclose affiliation. One link. Reply in thread. |
| [r/SideProject](https://www.reddit.com/r/SideProject/) | **Backup** — build-in-public / roast my UX | Story-first posts; engage every comment. Copy in `USER-PUSH.md`. |
| [r/learnprogramming](https://www.reddit.com/r/learnprogramming/) | **Avoid** for this campaign | Aug 2026 post removed by AutoModerator. See `docs/REDDIT-POST-REMOVED.md`. Do not repost without mod approval. |

Set `REDDIT_SUBREDDIT` to the subreddit name only (e.g. `codingbootcamp`).

**One post per subreddit.** Do not cross-post identical copy. Reply honestly in comments.

---

## 4. Dry-run (no credentials needed)

From the project folder:

```powershell
cd C:\Users\wolfs\OneDrive\Documents\Cursor\venture-raven-dubgub
npm run post:reddit -- --dry-run
```

This prints the title and body that would be posted. Safe to run without Reddit creds.

---

## 5. Live post

After `.env` is filled:

```powershell
npm run post:reddit
```

Or post to both Discord and Reddit (skips channels missing env):

```powershell
npm run post:social
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `Reddit OAuth failed (401)` | Wrong username/password, or 2FA enabled (use app password or refresh token flow) |
| Submit errors / rate limit | New or low-karma account; wait and try manually, or comment in existing threads |
| Subreddit removed post | Re-read subreddit rules; adjust title or ask mods |
| `ENOENT` on npm | Run commands from `venture-raven-dubgub`, not workspace root |

More detail: `docs/SOCIAL-AUTOMATION.md`

---

## After posting

Check qualified users:

```bash
curl -s https://venture-raven-dubgub.vercel.app/api/metrics
```

Target: `"qualified_users": 25` or higher before Wed Aug 19, 2026 17:00 ET.
