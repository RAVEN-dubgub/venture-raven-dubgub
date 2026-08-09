/**
 * Export submission PDFs to docs/
 * Run: node scripts/export-pdfs.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { mdToPdf } from "md-to-pdf";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const docs = join(root, "docs");

const mdPdfConfig = {
  dest: "",
  pdf_options: {
    format: "Letter",
    margin: { top: "0.75in", right: "0.75in", bottom: "0.75in", left: "0.75in" },
    printBackground: true,
  },
  stylesheet: join(__dirname, "pdf-styles.css"),
};

async function exportMarkdownPdf(sourceName, destName) {
  const source = join(docs, sourceName);
  const dest = join(docs, destName);
  await mdToPdf({ path: source }, { ...mdPdfConfig, dest });
  console.log(`Wrote ${dest}`);
}

function buildPitchDeckHtml() {
  const slides = [
    {
      tag: "Vision",
      title: "Agent Git Lab Teams",
      body: "Team onboarding for bootcamps that need Git and GitHub fluency without rebuilding PM, comms, and learning tooling from scratch.",
    },
    {
      tag: "Market pain",
      title: "Problem",
      body: "Operators juggle Discord, Notion, and one-off Git workshops. Learners lose the first two weeks to tooling setup and stall before their first meaningful pull request.",
    },
    {
      tag: "Product",
      title: "Solution",
      body: "A team portal plus Agent Git Lab learner paths. Operators create a workspace, share a launch link, and track qualified learner actions from one place.",
    },
    {
      tag: "How it works",
      title: "Product demo",
      body: "Sign up, create a cohort workspace, and launch learners into guided Git lessons. Qualified actions feed a public metrics snapshot for operators and investors.",
    },
    {
      tag: "Opportunity",
      title: "Market",
      body: "Coding bootcamps, university cohort programs, and internal academies training agent-first developers. SAM ~$780M in North America and Europe cohort-based programs.",
    },
    {
      tag: "Positioning",
      title: "Competition",
      body: "GitHub Education bundles, Codecademy for Teams, and custom LMS stacks. Our wedge: cohort-native workflows, agent-assisted lesson paths, and a production stack already live.",
    },
    {
      tag: "Revenue",
      title: "Business model",
      body: "Starter $49/month per cohort (≤30 seats). Pro $149/month (≤120 seats, analytics export, priority support). Annual prepay: two months free.",
    },
    {
      tag: "Proof",
      title: "Traction",
      body: "RAVEN shipped the Hult cohort stack in production: PM, comms, showcase, and the Agent Git Lab learner app. Venture metrics run in a separate namespace.",
    },
    {
      tag: "GTM",
      title: "Go-to-market",
      body: "Founder-led outreach to bootcamp directors, demo days, and GitHub Education partners. Target: three pilot operators in Q4 2026.",
    },
    {
      tag: "Ask",
      title: "Team and ask",
      body: "RAVEN (@raven-dubgub): full-stack builder, cohort PM/comms/showcase/learning apps shipped solo with agent workflows. Seeking angel intros and $250k pre-seed to hire the first customer success lead.",
    },
  ];

  const slideHtml = slides
    .map(
      (slide, index) => `
    <section class="slide">
      <header>
        <span class="tag">${slide.tag}</span>
        <span class="num">${String(index + 1).padStart(2, "0")} / ${slides.length}</span>
      </header>
      <h1>${slide.title}</h1>
      <p>${slide.body}</p>
      <footer>RAVEN · @raven-dubgub · venture-raven-dubgub.vercel.app</footer>
    </section>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Agent Git Lab Teams - Pitch Deck</title>
  <style>
    @page { size: 16in 9in; margin: 0; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: "Segoe UI", system-ui, sans-serif; color: #111827; }
    .slide {
      width: 16in; height: 9in; padding: 0.9in 1.1in;
      page-break-after: always; display: flex; flex-direction: column;
      background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
    }
    header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; }
    .tag { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #6366f1; font-weight: 700; }
    .num { font-size: 12px; color: #6b7280; }
    h1 { font-size: 42px; line-height: 1.1; margin: 0 0 1rem; max-width: 12in; }
    p { font-size: 22px; line-height: 1.45; color: #374151; max-width: 11.5in; flex: 1; }
    footer { font-size: 12px; color: #9ca3af; margin-top: auto; }
  </style>
</head>
<body>${slideHtml}</body>
</html>`;
}

async function exportPitchDeckPdf() {
  const htmlPath = join(docs, ".pitch-deck-export.html");
  const dest = join(docs, "pitch-deck.pdf");
  writeFileSync(htmlPath, buildPitchDeckHtml(), "utf8");

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath.replace(/\\/g, "/")}`, { waitUntil: "networkidle0" });
  await page.pdf({
    path: dest,
    width: "16in",
    height: "9in",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await browser.close();
  console.log(`Wrote ${dest}`);
}

async function main() {
  await exportMarkdownPdf("one-pager.md", "one-pager.pdf");
  await exportMarkdownPdf("business-plan.md", "business-plan.pdf");
  await exportPitchDeckPdf();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
