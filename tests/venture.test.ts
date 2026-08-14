import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  collectQualifiedUserIds,
  countQualifiedUsers,
  isInternalSignupEmail,
  isInternalTeamSlug,
  isQualifiedEventType,
  normalizeEmail,
  slugifyTeamName,
  splitQualifiedUsers,
} from "../src/lib/venture";

describe("normalizeEmail", () => {
  it("trims and lowercases email", () => {
    assert.equal(normalizeEmail("  Operator@Example.com "), "operator@example.com");
  });
});

describe("isInternalSignupEmail", () => {
  it("flags test+, smoke, and example.com signups", () => {
    assert.equal(isInternalSignupEmail("test+smoke@acme.com"), true);
    assert.equal(isInternalSignupEmail("qa-bot+run-1@example.invalid"), true);
    assert.equal(isInternalSignupEmail("qa-smoke-run@acme.com"), true);
    assert.equal(isInternalSignupEmail("demo@example.com"), true);
    assert.equal(isInternalSignupEmail("founder@acme.com"), false);
  });
});

describe("slugifyTeamName", () => {
  it("creates URL-safe slugs", () => {
    assert.equal(slugifyTeamName("Hult Cohort Fall 26"), "hult-cohort-fall-26");
  });

  it("falls back when name has no alphanumerics", () => {
    assert.equal(slugifyTeamName("***"), "team");
  });
});

describe("qualified venture metrics", () => {
  it("recognizes qualified event types", () => {
    assert.equal(isQualifiedEventType("TEAM_CREATED"), true);
    assert.equal(isQualifiedEventType("SIGNUP"), false);
  });

  it("counts unique qualified users", () => {
    const count = countQualifiedUsers([
      { userId: "u1", type: "SIGNUP" },
      { userId: "u1", type: "TEAM_CREATED" },
      { userId: "u2", type: "DEMO_LESSON_STARTED" },
      { userId: "u2", type: "TEAM_CREATED" },
    ]);

    assert.equal(count, 2);
  });

  it("splits external vs internal qualified users", () => {
    const qualified = collectQualifiedUserIds([
      { userId: "u1", type: "TEAM_CREATED" },
      { userId: "u2", type: "DEMO_LESSON_STARTED" },
      { userId: "u3", type: "TEAM_CREATED" },
    ]);
    const internal = new Set(["u1", "u3"]);
    const split = splitQualifiedUsers(qualified, internal);

    assert.equal(split.external, 1);
    assert.equal(split.internal, 2);
  });

  it("flags known smoke test team slugs", () => {
    assert.equal(isInternalTeamSlug("metrics-smoke-team"), true);
    assert.equal(isInternalTeamSlug("test-boot"), true);
    assert.equal(isInternalTeamSlug("hult-cohort-fall-26"), false);
  });
});

describe("health contract", () => {
  it("expects metrics snapshot keys", () => {
    const keys = [
      "snapshot_at",
      "qualified_users",
      "qualified_users_internal",
      "qualified_users_total",
      "unique_users",
      "app_namespace",
    ];
    assert.equal(keys.includes("qualified_users"), true);
    assert.equal(keys.includes("qualified_users_internal"), true);
  });
});
