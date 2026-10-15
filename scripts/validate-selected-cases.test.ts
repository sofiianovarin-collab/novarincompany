import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { publishedInvestmentCases, type InvestmentCaseRecord } from "../shared/experience/cases.ts";

function record(partial: Partial<InvestmentCaseRecord>): InvestmentCaseRecord {
  return {
    id: "case",
    order: 1,
    revision: "r1",
    approvedRevision: "r1",
    publicationApproved: true,
    completed: true,
    attribution: "novarin",
    investingEntity: "Novarin Capital",
    presentation: "named",
    publicTitle: "Approved title",
    privateIdentity: "Private Co",
    sector: "Payments",
    period: "2024",
    businessContext: "Serves local merchants.",
    investmentRole: "Completed a minority investment.",
    involvement: null,
    outcome: null,
    internalNote: "Owner recollection, not independently verified.",
    ...partial,
  };
}

describe("selected investment cases", () => {
  it("publishes qualifying cases in order and keeps the selection limited", () => {
    const one = publishedInvestmentCases([record({ id: "a" })]);
    assert.equal(one.length, 1);
    const three = publishedInvestmentCases([
      record({ id: "a", order: 1 }),
      record({ id: "b", order: 2, publicTitle: "Second" }),
      record({ id: "c", order: 3, publicTitle: "Third" }),
    ]);
    assert.deepEqual(three.map((item) => item.id), ["a", "b", "c"]);
  });

  it("returns nothing when no case qualifies", () => {
    assert.deepEqual(publishedInvestmentCases([]), []);
    assert.deepEqual(publishedInvestmentCases([record({ publicationApproved: false })]), []);
  });

  it("omits missing optional fields and hides a private identity on an anonymous case", () => {
    const [item] = publishedInvestmentCases([
      record({
        presentation: "anonymous",
        publicTitle: "A payments business",
        sector: "  ",
        period: null,
        involvement: null,
        outcome: null,
        privateIdentity: "Hidden Name Ltd",
      }),
    ]);
    assert.equal(item.anonymous, true);
    assert.equal(item.sector, null);
    assert.equal(item.period, null);
    assert.equal(item.involvement, null);
    assert.equal(item.outcome, null);
    assert.equal(JSON.stringify(item).includes("Hidden Name"), false);
    assert.equal(JSON.stringify(item).includes("Owner recollection"), false);
  });

  it("rejects a previous employer and an uncompleted investment", () => {
    assert.equal(publishedInvestmentCases([record({ attribution: "previous-employer" })]).length, 0);
    assert.equal(publishedInvestmentCases([record({ completed: false })]).length, 0);
    assert.equal(publishedInvestmentCases([record({ completed: null })]).length, 0);
    assert.equal(publishedInvestmentCases([record({ attribution: "named-entity", investingEntity: null })]).length, 0);
  });

  it("does not keep approval after the revision changes", () => {
    assert.equal(publishedInvestmentCases([record({ revision: "r2", approvedRevision: "r1" })]).length, 0);
  });
});
