import { readFile } from "node:fs/promises";
import path from "node:path";

function markdownToHtml(markdown: string) {
  return markdown
    .split("\n")
    .map((line) => {
      if (line.startsWith("# ")) {
        return `<h1>${line.slice(2)}</h1>`;
      }
      if (line.startsWith("## ")) {
        return `<h2>${line.slice(3)}</h2>`;
      }
      if (line.startsWith("- ")) {
        return `<li>${line.slice(2)}</li>`;
      }
      if (line.trim() === "") {
        return "";
      }
      return `<p>${line}</p>`;
    })
    .join("\n");
}

export default async function BusinessPlanPage() {
  const filePath = path.join(process.cwd(), "docs", "business-plan.md");
  const markdown = await readFile(filePath, "utf8");
  const html = markdownToHtml(markdown);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm text-[var(--muted)]">Draft · export PDF to docs/business-plan.pdf before submission</p>
      <article
        className="prose-doc card mt-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
