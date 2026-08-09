"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { LEARNING_APP_URL } from "@/lib/venture";

type User = { id: string; email: string; name: string };
type Team = { id: string; name: string; slug: string; plan: string };

export default function ProductAppPage() {
  const [user, setUser] = useState<User | null>(null);
  const [teams, setTeams] = useState<Team[]>([]);
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [teamName, setTeamName] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function refreshSession() {
    const me = await fetch("/api/auth/me");
    if (me.ok) {
      const data = await me.json();
      setUser(data.user);
      const teamsRes = await fetch("/api/teams");
      if (teamsRes.ok) {
        const teamsData = await teamsRes.json();
        setTeams(teamsData.teams);
      }
    } else {
      setUser(null);
      setTeams([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    void refreshSession();
  }, []);

  async function handleAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    const form = new FormData(event.currentTarget);
    const payload = {
      email: String(form.get("email") ?? ""),
      name: String(form.get("name") ?? "Operator"),
      password: String(form.get("password") ?? ""),
    };

    const response = await fetch("/api/auth", {
      method: mode === "signup" ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      setMessage(error.error ?? "Authentication failed");
      return;
    }

    await refreshSession();
    setMessage(mode === "signup" ? "Account created." : "Logged in.");
  }

  async function handleCreateTeam(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    const response = await fetch("/api/teams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: teamName }),
    });

    if (!response.ok) {
      const error = await response.json();
      setMessage(error.error ?? "Unable to create team");
      return;
    }

    setTeamName("");
    await refreshSession();
    setMessage("Team workspace created. Share the learner link below.");
  }

  async function handleDemoLesson() {
    await fetch("/api/events/demo-lesson", { method: "POST" });
    window.open(LEARNING_APP_URL, "_blank", "noopener,noreferrer");
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setTeams([]);
    setMessage("Logged out.");
  }

  if (loading) {
    return <div className="mx-auto max-w-3xl px-4 py-12 text-[var(--muted)]">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">Production app</h1>
      <p className="mt-2 text-[var(--muted)]">
        Sign up as a bootcamp operator, create a team workspace, and launch learners into Agent Git
        Lab. Qualified venture users complete team setup or start the demo lesson.
      </p>

      {message ? <p className="mt-4 rounded-lg bg-[var(--accent-soft)] px-4 py-2 text-sm">{message}</p> : null}

      {!user ? (
        <section className="card mt-8">
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`rounded-full px-4 py-1 text-sm ${mode === "signup" ? "bg-[var(--accent)] text-white" : "border border-[var(--border)]"}`}
            >
              Sign up
            </button>
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`rounded-full px-4 py-1 text-sm ${mode === "login" ? "bg-[var(--accent)] text-white" : "border border-[var(--border)]"}`}
            >
              Log in
            </button>
          </div>
          <form onSubmit={handleAuth} className="space-y-3">
            {mode === "signup" ? (
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-[var(--border)] px-3 py-2"
              />
            ) : null}
            <input
              name="email"
              type="email"
              required
              placeholder="Work email"
              className="w-full rounded-lg border border-[var(--border)] px-3 py-2"
            />
            <input
              name="password"
              type="password"
              required
              minLength={8}
              placeholder="Password (8+ characters)"
              className="w-full rounded-lg border border-[var(--border)] px-3 py-2"
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--accent)] px-5 py-2 font-medium text-white"
            >
              {mode === "signup" ? "Create account" : "Log in"}
            </button>
          </form>
        </section>
      ) : (
        <>
          <section className="card mt-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-[var(--muted)]">Signed in as</p>
                <p className="font-medium">{user.name} · {user.email}</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-[var(--border)] px-4 py-1 text-sm"
              >
                Log out
              </button>
            </div>
          </section>

          <section className="card mt-4">
            <h2 className="text-lg font-semibold">Create team workspace</h2>
            <form onSubmit={handleCreateTeam} className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                value={teamName}
                onChange={(event) => setTeamName(event.target.value)}
                required
                placeholder="Bootcamp or cohort name"
                className="flex-1 rounded-lg border border-[var(--border)] px-3 py-2"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--accent)] px-5 py-2 font-medium text-white"
              >
                Create team
              </button>
            </form>
          </section>

          <section className="card mt-4">
            <h2 className="text-lg font-semibold">Your teams</h2>
            {teams.length === 0 ? (
              <p className="mt-2 text-sm text-[var(--muted)]">No teams yet. Create one to qualify venture metrics.</p>
            ) : (
              <ul className="mt-3 space-y-3">
                {teams.map((team) => (
                  <li key={team.id} className="rounded-lg border border-[var(--border)] p-3">
                    <p className="font-medium">{team.name}</p>
                    <p className="text-sm text-[var(--muted)]">Slug: {team.slug} · Plan: {team.plan}</p>
                    <p className="mt-2 text-sm">
                      Learner launch:{" "}
                      <Link
                        href={`${LEARNING_APP_URL}/learn`}
                        className="text-[var(--accent)] underline"
                        target="_blank"
                      >
                        Agent Git Lab path
                      </Link>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="card mt-4">
            <h2 className="text-lg font-semibold">Demo lesson</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Starting the demo lesson records a qualified venture action and opens the learner app.
            </p>
            <button
              type="button"
              onClick={handleDemoLesson}
              className="mt-3 rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium"
            >
              Start demo lesson
            </button>
          </section>

          <section className="card mt-4">
            <h2 className="text-lg font-semibold">Metrics snapshot</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Public endpoint for cohort submission:{" "}
              <Link href="/api/metrics" className="text-[var(--accent)] underline">
                /api/metrics
              </Link>
            </p>
          </section>
        </>
      )}
    </div>
  );
}
