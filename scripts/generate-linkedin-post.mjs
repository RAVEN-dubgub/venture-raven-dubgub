/**
 * Generate LinkedIn OG-style card at public/linkedin-post.png (1200×627)
 * Run: node scripts/generate-linkedin-post.mjs
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "public", "linkedin-post.png");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 627px;
    overflow: hidden;
    font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
    background: #0a0c0a;
    color: #e8ece8;
    position: relative;
  }
  .grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(198,255,0,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(198,255,0,0.06) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .vignette {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 30% 40%, rgba(0,168,255,0.12) 0%, transparent 55%),
                radial-gradient(ellipse at 80% 70%, rgba(168,18,2,0.18) 0%, transparent 50%),
                linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 60%);
  }
  .scanlines {
    position: absolute; inset: 0; opacity: 0.04;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px);
    pointer-events: none;
  }
  .frame {
    position: absolute; inset: 28px;
    border: 2px solid rgba(198,255,0,0.35);
    border-radius: 4px;
  }
  .content {
    position: relative; z-index: 1;
    display: flex; flex-direction: column; justify-content: center;
    height: 100%; padding: 72px 96px;
  }
  .mark {
    display: inline-flex; align-items: center; gap: 16px;
    margin-bottom: 36px;
  }
  .mark-box {
    width: 56px; height: 56px;
    border: 2px solid rgba(198,255,0,0.5);
    display: flex; align-items: center; justify-content: center;
    font-family: "Cascadia Code", "Consolas", monospace;
    font-size: 13px; font-weight: 700; color: #c6ff00;
    letter-spacing: -0.5px;
  }
  .mark-label {
    font-family: "Cascadia Code", "Consolas", monospace;
    font-size: 14px; color: #00a8ff; letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  h1 {
    font-size: 64px; font-weight: 700; letter-spacing: -0.03em;
    line-height: 1.05; color: #f4f5f1;
    margin-bottom: 20px;
  }
  h1 span { color: #c6ff00; }
  .subtitle {
    font-size: 28px; font-weight: 400; color: #9aab9f;
    margin-bottom: 48px; max-width: 720px; line-height: 1.35;
  }
  .url {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: "Cascadia Code", "Consolas", monospace;
    font-size: 22px; color: #00a8ff;
    background: rgba(0,168,255,0.08);
    border: 1px solid rgba(0,168,255,0.25);
    padding: 12px 24px; border-radius: 6px;
  }
  .url::before {
    content: ">";
    color: #c6ff00; font-weight: 700;
  }
  .accent-bar {
    position: absolute; bottom: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #c6ff00 0%, #00a8ff 50%, #a81202 100%);
  }
  .corner {
    position: absolute; width: 24px; height: 24px;
    border-color: #c6ff00; border-style: solid; opacity: 0.6;
  }
  .corner-tl { top: 28px; left: 28px; border-width: 3px 0 0 3px; }
  .corner-br { bottom: 28px; right: 28px; border-width: 0 3px 3px 0; }
</style>
</head>
<body>
  <div class="grid"></div>
  <div class="vignette"></div>
  <div class="scanlines"></div>
  <div class="frame"></div>
  <div class="corner corner-tl"></div>
  <div class="corner corner-br"></div>
  <div class="content">
    <div class="mark">
      <div class="mark-box">//AGL</div>
      <span class="mark-label">B2B cohort portal</span>
    </div>
    <h1>Agent Git Lab <span>Teams</span></h1>
    <p class="subtitle">Bootcamp Git onboarding portal</p>
    <div class="url">venture-raven-dubgub.vercel.app/app</div>
  </div>
  <div class="accent-bar"></div>
</body>
</html>`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 627, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle0" });
const buffer = await page.screenshot({ type: "png", fullPage: false });
await browser.close();

writeFileSync(outPath, buffer);
console.log(`Wrote ${outPath}`);
