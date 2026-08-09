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
    try {
      const me = await fetch("/api/auth/me");
      if (me.ok) {
        const data = await me.json();
        setUser(data.user);
        const teamsRes = await fetch("/api/teams");
        if (teamsRes.ok) {
          const teamsData = await teamsRes.json();
          setTeams(teamsData.teams);
        } else {
          setTeams([]);
          setMessage("Unable to load teams. Try refreshing the page.");
        }
      } else {
        setUser(null);
        setTeams([]);
      }
    } catch {
      setUser(null);
      setTeams([]);
      setMessage("Network error while loading your workspace.");
    }
    setLoading(false);
  }



  useEffect(() => {
    let cancelled = false;

    async function loadSession() {
      try {
        const me = await fetch("/api/auth/me");
        if (cancelled) return;

        if (me.ok) {
          const data = await me.json();
          setUser(data.user);
          const teamsRes = await fetch("/api/teams");
          if (!cancelled && teamsRes.ok) {
            const teamsData = await teamsRes.json();
            setTeams(teamsData.teams);
          } else if (!cancelled) {
            setTeams([]);
          }
        } else {
          setUser(null);
          setTeams([]);
        }
      } catch {
        if (!cancelled) {
          setUser(null);
          setTeams([]);
          setMessage("Network error while loading your workspace.");
        }
      }

      if (!cancelled) {
        setLoading(false);
      }
    }

    void loadSession();

    return () => {
      cancelled = true;
    };
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



    let response: Response;
    try {
      response = await fetch("/api/auth", {
        method: mode === "signup" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      setMessage("Network error. Check your connection and try again.");
      return;
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      setMessage(error.error ?? "Authentication failed");
      return;
    }



    await refreshSession();

    setMessage(mode === "signup" ? "Account created successfully." : "Logged in successfully.");

  }



  async function handleCreateTeam(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();

    setMessage(null);



    let response: Response;
    try {
      response = await fetch("/api/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: teamName }),
      });
    } catch {
      setMessage("Network error. Check your connection and try again.");
      return;
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      setMessage(error.error ?? "Unable to create team");
      return;
    }



    setTeamName("");

    await refreshSession();

    setMessage("Team workspace created. Share the learner link below with your cohort.");

  }



  async function handleDemoLesson() {
    try {
      const response = await fetch("/api/events/demo-lesson", { method: "POST" });
      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        setMessage(error.error ?? "Unable to start demo lesson. Sign in and try again.");
        return;
      }
      window.open(LEARNING_APP_URL, "_blank", "noopener,noreferrer");
    } catch {
      setMessage("Network error while starting the demo lesson.");
    }
  }



  async function handleLogout() {

    await fetch("/api/auth/logout", { method: "POST" });

    setUser(null);

    setTeams([]);

    setMessage("Logged out.");

  }



  if (loading) {

    return (

      <div className="mx-auto max-w-3xl px-4 py-16 text-center text-[var(--muted)]">

        Loading workspace...

      </div>

    );

  }



  return (

    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">

      <p className="section-label">Production app</p>

      <h1 className="mt-2 text-3xl font-bold tracking-tight">Operator workspace</h1>

      <p className="mt-3 text-[var(--muted)]">

        Sign up as a bootcamp operator, create a team workspace, and launch learners into Agent Git

        Lab. Qualified venture users complete team setup or start the demo lesson.

      </p>



      {message ? (

        <p

          className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-3 text-sm"

          role="status"

        >

          {message}

        </p>

      ) : null}



      {!user ? (

        <section className="card mt-8">

          <h2 className="text-lg font-semibold">Account access</h2>

          <div className="mt-4 flex gap-2">

            <button

              type="button"

              onClick={() => setMode("signup")}

              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${

                mode === "signup"

                  ? "bg-[var(--accent)] text-white"

                  : "border border-[var(--border)] text-[var(--muted)]"

              }`}

            >

              Sign up

            </button>

            <button

              type="button"

              onClick={() => setMode("login")}

              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${

                mode === "login"

                  ? "bg-[var(--accent)] text-white"

                  : "border border-[var(--border)] text-[var(--muted)]"

              }`}

            >

              Log in

            </button>

          </div>

          <form onSubmit={handleAuth} className="mt-5 space-y-3">

            {mode === "signup" ? (

              <div>

                <label htmlFor="name" className="mb-1 block text-sm font-medium">

                  Full name

                </label>

                <input

                  id="name"

                  name="name"

                  required

                  placeholder="Program director name"

                  className="input-field"

                />

              </div>

            ) : null}

            <div>

              <label htmlFor="email" className="mb-1 block text-sm font-medium">

                Work email

              </label>

              <input

                id="email"

                name="email"

                type="email"

                required

                placeholder="you@bootcamp.com"

                className="input-field"

              />

            </div>

            <div>

              <label htmlFor="password" className="mb-1 block text-sm font-medium">

                Password

              </label>

              <input

                id="password"

                name="password"

                type="password"

                required

                minLength={8}

                placeholder="Minimum 8 characters"

                className="input-field"

              />

            </div>

            <button type="submit" className="btn-primary mt-2">

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

                <p className="font-medium">

                  {user.name} · {user.email}

                </p>

              </div>

              <button type="button" onClick={handleLogout} className="btn-secondary px-4 py-1.5 text-sm">

                Log out

              </button>

            </div>

          </section>



          <section className="card mt-4">

            <h2 className="text-lg font-semibold">Create team workspace</h2>

            <p className="mt-1 text-sm text-[var(--muted)]">

              Each workspace represents one bootcamp or cohort program.

            </p>

            <form onSubmit={handleCreateTeam} className="mt-4 flex flex-col gap-3 sm:flex-row">

              <input

                value={teamName}

                onChange={(event) => setTeamName(event.target.value)}

                required

                placeholder="Bootcamp or cohort name"

                className="input-field flex-1"

                aria-label="Team workspace name"

              />

              <button type="submit" className="btn-primary shrink-0">

                Create team

              </button>

            </form>

          </section>



          <section className="card mt-4">

            <h2 className="text-lg font-semibold">Your teams</h2>

            {teams.length === 0 ? (

              <p className="mt-2 text-sm text-[var(--muted)]">

                No teams yet. Create a workspace to qualify for venture metrics.

              </p>

            ) : (

              <ul className="mt-4 space-y-3">

                {teams.map((team) => (

                  <li key={team.id} className="rounded-lg border border-[var(--border)] p-4">

                    <p className="font-medium">{team.name}</p>

                    <p className="mt-1 text-sm text-[var(--muted)]">

                      Slug: {team.slug} · Plan: {team.plan}

                    </p>

                    <p className="mt-2 text-sm">

                      Learner launch:{" "}

                      <Link

                        href={`${LEARNING_APP_URL}/learn`}

                        className="font-medium text-[var(--accent)] underline decoration-[var(--border)] underline-offset-2"

                        target="_blank"

                      >

                        Open Agent Git Lab

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

              Starting the demo lesson records a qualified venture action and opens the learner app

              in a new tab.

            </p>

            <button type="button" onClick={handleDemoLesson} className="btn-secondary mt-4 text-sm">

              Start demo lesson

            </button>

          </section>



          <section className="card mt-4">

            <h2 className="text-lg font-semibold">Metrics snapshot</h2>

            <p className="mt-2 text-sm text-[var(--muted)]">

              Public JSON endpoint for cohort submission reviewers:

            </p>

            <Link

              href="/api/metrics"

              className="mt-2 inline-block font-mono text-sm text-[var(--accent)] underline decoration-[var(--border)] underline-offset-2"

            >

              /api/metrics

            </Link>

          </section>

        </>

      )}

    </div>

  );

}


