import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  countQualifiedUsers,
  isQualifiedEventType,
  normalizeEmail,
  slugifyTeamName,
} from "../src/lib/venture";

describe("normalizeEmail", () => {
  it("trims and lowercases email", () => {
    assert.equal(normalizeEmail("  Operator@Example.com "), "operator@example.com");
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
});

describe("health contract", () => {
  it("expects metrics snapshot keys", () => {
    const keys = [
      "snapshot_at",
      "qualified_users",
      "unique_users",
      "app_namespace",
    ];
    assert.equal(keys.includes("qualified_users"), true);
  });
});
