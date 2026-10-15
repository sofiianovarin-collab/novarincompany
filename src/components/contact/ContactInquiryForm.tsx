import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { contactFormCopy, contactGuidance, inquiryTypes, productStages } from "../../content/contact";
import { isPrivacyPublished } from "../../content/privacy";
import { emptyInquiry, inquiryPayload, validateInquiry } from "../../content/inquiryValidation";
import type { InquiryErrors, InquiryType, InquiryValues } from "../../types/contact";
import "./ContactInquiryForm.css";

export function ContactInquiryForm() {
  const baseId = useId();
  const [type, setType] = useState<InquiryType>("founder");
  const [values, setValues] = useState<InquiryValues>(emptyInquiry);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [mode, setMode] = useState<"disabled" | "sandbox" | "live">("disabled");
  const [phase, setPhase] = useState<"idle" | "sending" | "accepted" | "rejected" | "uncertain" | "limited" | "unavailable">("idle");
  const statusRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const help = inquiryTypes.find((item) => item.value === type)?.help;
  const companyLabel =
    type === "partnership" ? "Organization" : type === "general" ? "Organization" : "Company or project";
  const companyRequired = type !== "general";
  const messageLabel =
    type === "partnership"
      ? "What would you like to explore?"
      : type === "general"
        ? "How can we help?"
        : "What are you building?";
  const messagePlaceholder =
    type === "partnership"
      ? "Describe your organization, the proposed collaboration and your next priority."
      : type === "general"
        ? "Share your question and any useful, non-confidential context."
        : contactFormCopy.founderMessagePlaceholder;

  function update(field: keyof InquiryValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function check(field: keyof InquiryValues) {
    const next = validateInquiry(type, values);
    setErrors((current) => {
      const copy = { ...current };
      if (next[field]) copy[field] = next[field];
      else delete copy[field];
      return copy;
    });
  }

  useEffect(() => {
    let cancelled = false;
    fetch("/api/contact")
      .then((response) => (response.ok ? response.json() : null))
      .then((body: { mode?: string } | null) => {
        if (cancelled || !body) return;
        if (body.mode === "sandbox" || body.mode === "live") setMode(body.mode);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  const fieldOrder: (keyof InquiryValues)[] = ["name", "email", "company", "website", "stage", "focus", "markets", "message"];

  function focusFirst(next: InquiryErrors) {
    const key = fieldOrder.find((field) => next[field]);
    if (!key || !formRef.current) return;
    formRef.current.querySelector<HTMLElement>(`#${CSS.escape(baseId)}-${key}`)?.focus();
  }

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (mode === "disabled" || phase === "sending") return;
    const next = validateInquiry(type, values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setPhase("idle");
      focusFirst(next);
      return;
    }
    setPhase("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inquiryPayload(type, values)),
      });
      const body = (await response.json()) as {
        outcome?: string;
        fields?: Record<string, string>;
      };
      if (body.outcome === "accepted") {
        setPhase("accepted");
        statusRef.current?.focus();
        return;
      }
      if (body.outcome === "rate-limited") {
        setPhase("limited");
        return;
      }
      if (body.outcome === "uncertain") {
        setPhase("uncertain");
        return;
      }
      if (body.fields) {
        const mapped = validateInquiry(type, values);
        setErrors(mapped);
        setPhase("idle");
        focusFirst(mapped);
        return;
      }
      if (response.status === 503) {
        setPhase("unavailable");
        setMode("disabled");
        return;
      }
      setPhase("rejected");
    } catch {
      setPhase("uncertain");
    }
  }

  function changeType(nextType: InquiryType) {
    setType(nextType);
    const next = validateInquiry(nextType, values);
    setErrors((current) => {
      const kept: InquiryErrors = {};
      for (const key of Object.keys(current) as (keyof InquiryValues)[]) {
        if (next[key]) kept[key] = next[key];
      }
      return kept;
    });
  }

  return (
    <form
      ref={formRef}
      className="inquiry-form"
      id="inquiry"
      noValidate
      onSubmit={(event) => {
        void submitInquiry(event);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" && event.target instanceof HTMLTextAreaElement) return;
        if (event.key === "Enter") event.preventDefault();
      }}
    >
      <fieldset className="inquiry-types">
        <legend>What would you like to discuss?</legend>
        <div className="inquiry-type-options">
          {inquiryTypes.map((item) => (
            <label key={item.value} className={type === item.value ? "is-selected" : undefined}>
              <input
                type="radio"
                name="inquiry-type"
                value={item.value}
                checked={type === item.value}
                onChange={() => changeType(item.value)}
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>
      {help ? <p className="inquiry-help">{help}</p> : null}
      <p className="inquiry-required-note">Fields marked * are required.</p>
      <div className="inquiry-grid">
        <Field
          id={`${baseId}-name`}
          label="Full name"
          required
          value={values.name}
          placeholder="Your full name"
          maxLength={120}
          autoComplete="name"
          error={errors.name}
          onChange={(value) => update("name", value)}
          onBlur={() => check("name")}
        />
        <Field
          id={`${baseId}-email`}
          label="Email"
          required
          type="email"
          value={values.email}
          placeholder="Your email address"
          autoComplete="email"
          error={errors.email}
          onChange={(value) => update("email", value)}
          onBlur={() => check("email")}
        />
        <Field
          id={`${baseId}-company`}
          label={companyLabel}
          required={companyRequired}
          value={values.company}
          placeholder={type === "founder" ? "Company or project name" : "Organization name"}
          maxLength={160}
          autoComplete="organization"
          error={errors.company}
          onChange={(value) => update("company", value)}
          onBlur={() => check("company")}
        />
        <Field
          id={`${baseId}-website`}
          label="Website"
          value={values.website}
          placeholder="https://"
          type="url"
          autoComplete="url"
          error={errors.website}
          onChange={(value) => update("website", value)}
          onBlur={() => check("website")}
        />
        {type === "founder" ? (
          <label className="inquiry-field" htmlFor={`${baseId}-stage`}>
            Product stage <span>(optional)</span>
            <select
              id={`${baseId}-stage`}
              value={values.stage}
              onChange={(event) => update("stage", event.target.value)}
            >
              <option value="">Select your stage</option>
              {productStages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </label>
        ) : null}
        {type === "partnership" ? (
          <Field
            id={`${baseId}-focus`}
            label="Partnership focus"
            value={values.focus}
            placeholder="What kind of collaboration?"
            maxLength={200}
            error={errors.focus}
            onChange={(value) => update("focus", value)}
            onBlur={() => check("focus")}
          />
        ) : null}
        {type !== "general" ? (
          <Field
            id={`${baseId}-markets`}
            label="Markets you serve"
            value={values.markets}
            placeholder="Countries or regions"
            maxLength={200}
            error={errors.markets}
            onChange={(value) => update("markets", value)}
            onBlur={() => check("markets")}
          />
        ) : null}
        <label className="inquiry-field inquiry-message" htmlFor={`${baseId}-message`}>
          {messageLabel} <abbr title="required">*</abbr>
          <textarea
            id={`${baseId}-message`}
            value={values.message}
            placeholder={messagePlaceholder}
            maxLength={2000}
            rows={6}
            required
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={`${baseId}-message-hint`}
            onChange={(event) => update("message", event.target.value)}
            onBlur={() => check("message")}
          />
          <span id={`${baseId}-message-hint`} className="inquiry-hint">
            A brief, non-confidential introduction is enough.
          </span>
          <span className="inquiry-count">{values.message.length} / 2,000</span>
          {errors.message ? <span className="inquiry-error">{errors.message}</span> : null}
        </label>
      </div>
      <p className="inquiry-safety">{contactGuidance.safetyBody}</p>
      <div className="inquiry-submit">
        {mode === "sandbox" ? (
          <p className="inquiry-test-banner">Test environment — use sample details only. No external email will be sent.</p>
        ) : null}
        <p ref={statusRef} tabIndex={-1} role="status">
          {mode === "disabled" ? <span>Online inquiries are not open yet.</span> : null}
          {phase === "sending" ? "Sending inquiry..." : null}
          {phase === "accepted" && mode === "sandbox"
            ? "Test inquiry received by the local test service. No external email was sent."
            : null}
          {phase === "accepted" && mode === "live" ? "Your inquiry has been submitted for delivery." : null}
          {phase === "idle" && Object.keys(errors).length > 0 ? "Please check the highlighted fields." : null}
          {phase === "limited" ? "Too many attempts. Please wait before trying again." : null}
          {phase === "rejected" ? "We couldn't submit your inquiry. Please try again." : null}
          {phase === "uncertain"
            ? "We couldn't confirm whether your inquiry was submitted. Please wait before trying again."
            : null}
          {phase === "unavailable" ? "Online inquiries are temporarily unavailable." : null}
          {__NOVARIN_PREVIEW__ && !isPrivacyPublished() ? (
            <Link to="/privacy">Privacy Notice (Preview)</Link>
          ) : null}
          {isPrivacyPublished() ? <Link to="/privacy">Privacy Notice</Link> : null}
        </p>
        {phase === "accepted" ? (
          <button
            type="button"
            onClick={() => {
              setValues(emptyInquiry);
              setErrors({});
              setPhase("idle");
            }}
          >
            Send another inquiry
          </button>
        ) : (
          <button type="submit" disabled={mode === "disabled" || phase === "sending"}>
            {phase === "sending" ? "Sending inquiry..." : mode === "sandbox" ? "Send test inquiry" : "Send inquiry"}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  required = false,
  type = "text",
  placeholder,
  maxLength,
  autoComplete,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  autoComplete?: string;
  error?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <label className="inquiry-field" htmlFor={id}>
      {label} {required ? <abbr title="required">*</abbr> : <span>(optional)</span>}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
      />
      {error ? (
        <span id={errorId} className="inquiry-error">
          {error}
        </span>
      ) : null}
    </label>
  );
}
