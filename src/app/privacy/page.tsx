import type { Metadata } from "next";
import { FOUNDER_DISPLAY_NAME, FOUNDER_GITHUB } from "@/lib/venture";

export const metadata: Metadata = {
  title: "Privacy policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <article className="prose-doc card">
        <h1>Privacy policy</h1>
        <p>Last updated: August 9, 2026</p>
        <h2>Overview</h2>
        <p>
          Agent Git Lab Teams (&quot;we&quot;, &quot;the service&quot;) is operated by {FOUNDER_DISPLAY_NAME} (
          {FOUNDER_GITHUB}) as part of the Hult Cohort Developer Program Phase 2 venture submission.
          This policy describes how we collect, use, and retain data for bootcamp operators and
          learners using the connected products.
        </p>
        <h2>What we collect</h2>
        <p>We store the minimum data required to operate the service:</p>
        <ul>
          <li>Account email, display name, and hashed password for operator authentication</li>
          <li>Team workspace name, slug, and plan tier</li>
          <li>Product events (team created, demo lesson started) for qualified usage metrics</li>
          <li>Session tokens stored in httpOnly cookies</li>
        </ul>
        <h2>How we use data</h2>
        <p>
          Data is used to authenticate operators, provision team workspaces, launch learners into
          Agent Git Lab, and report cohort metrics via the public /api/metrics endpoint. We do not
          sell personal data or share it with third parties for advertising.
        </p>
        <h2>Data storage</h2>
        <p>
          Production data is stored in a managed PostgreSQL database (Neon) hosted in the United
          States. Application hosting runs on Vercel.
        </p>
        <h2>Retention and deletion</h2>
        <p>
          Account and workspace data is retained while the workspace is active. To request account
          or data deletion, contact {FOUNDER_DISPLAY_NAME} on GitHub ({FOUNDER_GITHUB.replace("@", "")}).
        </p>
        <h2>Contact</h2>
        <p>
          {FOUNDER_DISPLAY_NAME} · GitHub: {FOUNDER_GITHUB}
        </p>
      </article>
    </div>
  );
}
