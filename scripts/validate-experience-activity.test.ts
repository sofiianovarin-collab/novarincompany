import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  countNovarinActivity,
  countsAreConsistent,
  formatCount,
  isApprovedCount,
  monthlyUniqueFromDaily,
  sameActivityScope,
  type QualifyingParticipation,
} from "../shared/experience/activity.ts";

const base = {
  entityId: "novarin-vehicle",
  employer: "novarin" as const,
  status: "completed" as const,
  exited: false,
};

function row(partial: Partial<QualifyingParticipation> & Pick<QualifyingParticipation, "participationId" | "businessId" | "kind">): QualifyingParticipation {
  return { ...base, ...partial };
}

describe("experience activity counts", () => {
  it("counts two businesses, three participations and one follow-on", () => {
    const counts = countNovarinActivity(
      [
        row({ participationId: "p1", businessId: "a", kind: "initial" }),
        row({ participationId: "p2", businessId: "b", kind: "initial" }),
        row({ participationId: "p3", businessId: "a", kind: "follow-on" }),
      ],
      "novarin-vehicle",
    );
    assert.deepEqual(counts, { companiesBacked: 2, investmentsCompleted: 3, followOnInvestments: 1 });
    assert.equal(countsAreConsistent(counts), true);
  });

  it("counts one participation once when several transfer rows repeat it", () => {
    const counts = countNovarinActivity(
      [
        row({ participationId: "p1", businessId: "a", kind: "initial" }),
        row({ participationId: "p1", businessId: "a", kind: "initial" }),
        row({ participationId: "p1", businessId: "a", kind: "initial" }),
      ],
      "novarin-vehicle",
    );
    assert.equal(counts.investmentsCompleted, 1);
  });

  it("ignores cancelled intentions, tests, previous employers and other vehicles", () => {
    const counts = countNovarinActivity(
      [
        row({ participationId: "p1", businessId: "a", kind: "initial" }),
        row({ participationId: "p2", businessId: "b", kind: "initial", status: "cancelled" }),
        row({ participationId: "p3", businessId: "c", kind: "initial", status: "intention" }),
        row({ participationId: "p4", businessId: "d", kind: "initial", status: "test" }),
        row({ participationId: "p5", businessId: "e", kind: "initial", employer: "previous" }),
        row({ participationId: "p6", businessId: "f", kind: "initial", entityId: "other-vehicle" }),
      ],
      "novarin-vehicle",
    );
    assert.deepEqual(counts, { companiesBacked: 1, investmentsCompleted: 1, followOnInvestments: 0 });
  });

  it("keeps a completed investment after a later exit", () => {
    const counts = countNovarinActivity(
      [row({ participationId: "p1", businessId: "a", kind: "initial", exited: true })],
      "novarin-vehicle",
    );
    assert.equal(counts.companiesBacked, 1);
  });

  it("keeps null distinct from an approved zero", () => {
    assert.equal(formatCount(null), "—");
    assert.equal(formatCount(0), "0");
    assert.equal(
      isApprovedCount({
        revision: "r1",
        approvedRevision: "r1",
        publicationApproved: true,
        value: 0,
        reportingEntity: "Novarin vehicle",
        periodLabel: "Cumulative",
        asOf: "2026-01-31",
        methodologyVersion: "count-1",
      }),
      true,
    );
    assert.equal(
      isApprovedCount({
        revision: "r2",
        approvedRevision: "r1",
        publicationApproved: true,
        value: 0,
        reportingEntity: "Novarin vehicle",
        periodLabel: "Cumulative",
        asOf: "2026-01-31",
        methodologyVersion: "count-1",
      }),
      false,
    );
  });

  it("does not treat daily user rows as a monthly unique total", () => {
    assert.equal(
      monthlyUniqueFromDaily([
        { day: "2026-01-01", totalUsers: 10 },
        { day: "2026-01-02", totalUsers: 12 },
      ]),
      null,
    );
  });

  it("checks scope equality only across the supplied snapshots", () => {
    assert.equal(
      sameActivityScope([
        { reportingEntity: "A", periodLabel: "All", asOf: "2026-01-31", methodologyVersion: "1" },
        { reportingEntity: "A", periodLabel: "All", asOf: "2026-01-31", methodologyVersion: "1" },
      ]),
      true,
    );
    assert.equal(
      sameActivityScope([
        { reportingEntity: "A", periodLabel: "All", asOf: "2026-01-31", methodologyVersion: "1" },
        { reportingEntity: "B", periodLabel: "All", asOf: "2026-01-31", methodologyVersion: "1" },
      ]),
      false,
    );
  });
});
