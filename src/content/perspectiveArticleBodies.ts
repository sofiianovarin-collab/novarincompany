/** Section continuations for the four payments-series articles (intro preserved separately). */

export const perspectiveSectionContinuations = {
  "real-business-need": [
    "Start with a specific task and a specific user. A merchant collecting sales, a finance team paying suppliers and a worker receiving income may require different products. Ask what each customer needs to know before, during and after the transaction. Then examine whether the proposed service improves that complete experience.",
    "Describe the payer's instruction and the recipient's access to funds separately. Include onboarding, funding, conversion, status updates and exception handling. A journey map is useful when it makes responsibilities visible, particularly at the point where one provider hands work to another.",
    "Treat the choice of payment rail as a question to test. Compare the proposed route with the customer's actual alternatives, including availability, cost and operational effort. The relevant improvement should be something the customer can experience, rather than an architectural claim that never reaches the user.",
    "Ask who pays for conversion, liquidity, processing and customer support. Consider what happens when a transfer requires manual intervention or cannot be completed as expected. A clear explanation should distinguish the advertised charge from the work and dependencies needed to provide the service.",
    "Define what a successful customer relationship would look like after the first transaction. Repeated use, understandable support requests and a willingness to pay can become useful areas of investigation. The task is to gather evidence about the product's value without confusing a trial or an incentive-driven visit with a durable relationship.",
  ],
  "payment-to-payout": [
    "Follow the proposed route from its initial funding source to the recipient's usable balance. Identify changes in asset, provider and responsibility along the way. An accurate map should also show what the customer sees, not only what happens inside the infrastructure.",
    "For each participant, ask which service is promised, what information is exchanged and who handles an exception. Avoid treating a partner logo as an explanation of responsibility. The operational question is whether the arrangement can be understood, supported and reconciled in practice.",
    "State which event each status message describes. A system may report an instruction, a transfer or a final payout at different points in the journey. The user-facing explanation should make clear which event has been confirmed and which steps remain unresolved.",
    "Consider delayed instructions, incomplete information, duplicate requests and disagreement between records. Ask how an operator detects the issue, preserves a clear audit trail and communicates with the affected customer. Recovery planning should identify the next action and its owner rather than assume that another provider will resolve everything.",
    "Before extending the service, examine which existing dependencies would be carried into the new route and which would change. Review provider concentration, funding requirements and support coverage. Expansion is a separate operating decision, not simply another destination added to a website.",
  ],
  "one-corridor-built-well": [
    "Define an initial sender, recipient and recurring task. Keep the first proposition narrow enough to describe plainly and test in practice. A focused starting point is not a permanent limit; it is a way to understand which assumptions matter before multiplying them across more markets.",
    "Ask customers how they complete the task today, what they pay and where they encounter friction. Distinguish complaints about price from problems involving access, predictability or administrative effort. The comparison should reflect their real workflow rather than an idealized competitor chosen for a presentation.",
    "Identify the providers, funding arrangements and responsibilities required for the route. Note where the company has a contractual relationship, where it relies on another party's service and where qualified review remains necessary. Do not treat a planned integration as a completed operating capability.",
    "Define what the pilot is intended to establish before expanding activity. Questions might concern onboarding, recipient experience, exception handling or transaction economics. Record what happened and what remains uncertain; a pilot is useful when its findings can change the product or the next decision.",
    "Compare the next route with what has already been learned. Ask which capabilities can be reused and which assumptions must be tested again. The aim is not expansion for its own sake, but a reasoned decision about whether the team can deliver another useful service with understandable economics and responsibilities.",
  ],
  "small-teams-clear-responsibilities": [
    "List the decisions and recurring tasks the company needs to handle, then identify who owns each one. Product, engineering, financial operations and support may overlap in a small team. The important point is that ownership remains clear rather than being assumed from a job title.",
    "Describe how an issue moves from discovery to action. Who can approve a change, who needs to be consulted and who communicates with the customer? A practical escalation path should reflect the people and capabilities actually available, including what happens when the usual owner is absent.",
    "An advisor can inform a decision without becoming responsible for daily execution. Make the scope of outside involvement explicit and identify the internal owner of the outcome. This distinction helps keep a useful professional relationship from being mistaken for an operating capability the company has not established.",
    "Ask what work is delaying progress or creating repeated risk. Consider whether the answer is a clearer process, an external specialist or another employee. The hiring rationale should connect a real responsibility to the next stage of the business, rather than simply adding a senior-sounding title.",
    "Agree which introductions, discussions or reviews would be useful and who will do the work that follows. Distinguish an offer to help from a promised outcome. A constructive relationship makes priorities explicit and leaves room to reassess them as the company's needs and available evidence change.",
  ],
} as const;

export type PerspectiveContinuationId = keyof typeof perspectiveSectionContinuations;
