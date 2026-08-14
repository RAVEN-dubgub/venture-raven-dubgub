#!/usr/bin/env node
// QA smoke runner for venture-raven — loads APP_URL N times, reports pass/fail.
// Usage: APP_URL=https://... QA_MODE=true QA_DRY_RUN=false npm run qa -- --runs=25
import puppeteer from 'puppeteer';

const APP_URL = process.env.APP_URL;
const RUNS = parseInt((process.argv.find((a) => a.startsWith('--runs=')) || '').split('=')[1] || '1', 10);
const STRICT = (process.env.QA_MODE ?? 'true').toLowerCase() !== 'false';
const IGNORED = new Set((process.env.QA_IGNORE_STATUS ?? '401,403').split(',').map(Number));

if (!APP_URL) { console.error('ERROR: APP_URL is not set. Example: APP_URL=https://my-app.com npm run qa -- --runs=25'); process.exit(1); }
if (process.env.QA_DRY_RUN === 'true') { console.log(`DRY RUN: would run ${RUNS}x against ${APP_URL}`); process.exit(0); }

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
let passed = 0;

for (let i = 1; i <= RUNS; i++) {
  const page = await browser.newPage();
  const problems = [];
  page.on('console', (m) => { if (m.type() === 'error' && !/failed to load resource/i.test(m.text())) problems.push('console: ' + m.text().slice(0, 150)); });
  page.on('pageerror', (e) => problems.push('pageerror: ' + e.message.slice(0, 150)));
  page.on('requestfailed', (r) => { if (!/favicon|analytics|sentry/i.test(r.url())) problems.push('req failed: ' + r.url().slice(0, 120)); });
  page.on('response', (r) => { const s = r.status(); if (s >= 400 && !IGNORED.has(s)) problems.push(`HTTP ${s}: ${r.url().slice(0, 120)}`); });

  const resp = await page.goto(APP_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 3000)); // let the app hydrate
  const ok = resp && resp.status() >= 200 && resp.status() < 400 && (!STRICT || problems.length === 0);

  if (ok) { passed++; console.log(`[qa] PASS  run ${i}/${RUNS}  HTTP ${resp.status()}`); }
  else { console.log(`[qa] FAIL  run ${i}/${RUNS}  HTTP ${resp ? resp.status() : 'n/a'}` + (problems.length ? '  — ' + problems[0] : '')); }
  await page.close();
}

await browser.close();
console.log(`\n[qa] RESULT: ${passed}/${RUNS} passed (${APP_URL})`);
process.exit(passed === RUNS ? 0 : 1);
