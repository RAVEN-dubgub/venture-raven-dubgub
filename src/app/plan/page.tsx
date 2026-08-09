import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business plan",
};

function markdownToHtml(markdown: string) {
  const lines = markdown.split("\n");
  const parts: string[] = [];
  let listOpen = false;

  function closeList() {
    if (listOpen) {
      parts.push("</ul>");
      listOpen = false;
    }
  }

  for (const line of lines) {
    if (line.startsWith("# ")) {
      closeList();
      parts.push(`<h1>${line.slice(2)}</h1>`);
      continue;
    }
    if (line.startsWith("## ")) {
      closeList();
      parts.push(`<h2>${line.slice(3)}</h2>`);
      continue;
    }
    if (line.startsWith("- ")) {
      if (!listOpen) {
        parts.push("<ul>");
        listOpen = true;
      }
      parts.push(`<li>${line.slice(2)}</li>`);
      continue;
    }
    if (line.trim() === "") {
      closeList();
      continue;
    }
    closeList();
    parts.push(`<p>${line}</p>`);
  }

  closeList();
  return parts.join("\n");
}

export default async function BusinessPlanPage() {
  const filePath = path.join(process.cwd(), "docs", "business-plan.md");
  const markdown = await readFile(filePath, "utf8");
  const html = markdownToHtml(markdown);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="section-label">Venture documentation</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Business plan</h1>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Full plan for reviewers and investors. Export to PDF as docs/business-plan.pdf before
        submission.
      </p>
      <article className="prose-doc card mt-6" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
