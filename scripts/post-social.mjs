/**
 * Combined Discord + Reddit promotion runner.
 * Run: npm run post:social [-- --dry-run]
 * Skips channels with missing env (never crashes).
 */
import { loadEnv } from "./lib/load-env.mjs";
import { postDiscord } from "./post-discord.mjs";
import { postReddit } from "./post-reddit.mjs";

loadEnv();

function isDryRun(argv) {
  return argv.includes("--dry-run");
}

async function main() {
  const dryRun = isDryRun(process.argv);
  if (dryRun) {
    console.log("Dry-run mode: nothing will be posted.\n");
  }

  console.log("=== Discord ===");
  const discord = await postDiscord({ dryRun });
  if (discord.skipped && !dryRun) {
    console.warn(discord.message);
  }

  console.log("\n=== Reddit ===");
  const reddit = await postReddit({ dryRun });
  if (reddit.skipped && !dryRun) {
    console.warn(reddit.message);
  }

  const anyPosted = (discord.ok && !discord.skipped) || (reddit.ok && !reddit.skipped);
  const anyConfigured = !discord.skipped || !reddit.skipped;

  console.log("\n--- Summary ---");
  if (dryRun) {
    console.log("Dry-run complete. Re-run without --dry-run to post.");
  } else if (anyPosted) {
    console.log("Done. Check Discord channel and Reddit post.");
  } else if (!anyConfigured) {
    console.log("No channels configured. Set env vars in .env (see docs/SOCIAL-AUTOMATION.md).");
  } else {
    console.log("Finished with skips only.");
  }

  console.log("\nInvestor email stays manual: docs/investor-emails/ (no Gmail API).");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
