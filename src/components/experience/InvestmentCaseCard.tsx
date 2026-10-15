import type { PublicInvestmentCase } from "../../../shared/experience/cases";

export function InvestmentCaseCard({ item }: { item: PublicInvestmentCase }) {
  return (
    <article className="case-card">
      <div className="case-card-meta">
        <h3>{item.title}</h3>
        {item.anonymous ? <p>Company name withheld</p> : null}
        {item.sector ? <p>{item.sector}</p> : null}
        {item.period ? <p>{item.period}</p> : null}
      </div>
      <div className="case-card-body">
        <h4>Business context</h4>
        <p>{item.businessContext}</p>
        <h4>Our role</h4>
        <p>{item.investmentRole}</p>
        {item.involvement ? (
          <>
            <h4>Our involvement</h4>
            <p>{item.involvement}</p>
          </>
        ) : null}
        {item.outcome ? (
          <>
            <h4>Documented outcome</h4>
            <p>{item.outcome}</p>
          </>
        ) : null}
      </div>
    </article>
  );
}
