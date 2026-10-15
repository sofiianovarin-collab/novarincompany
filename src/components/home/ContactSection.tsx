import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { contact } from "../../content/home";
import { isPrivacyPublished } from "../../content/privacy";
import { isFormEnabled, site } from "../../config/site";
import { useReveal } from "../../hooks/useReveal";
import { SectionContainer } from "../ui/SectionContainer";
import "./ContactSection.css";

type FormValues = {
  fullName: string;
  email: string;
  company: string;
  website: string;
  building: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  fullName: "",
  email: "",
  company: "",
  website: "",
  building: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (values.fullName.trim().length > contact.fields.fullName.maxLength) {
    errors.fullName = `Full name must be ${contact.fields.fullName.maxLength} characters or fewer.`;
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.company.trim()) {
    errors.company = "Company or project is required.";
  } else if (values.company.trim().length > contact.fields.company.maxLength) {
    errors.company = `Company or project must be ${contact.fields.company.maxLength} characters or fewer.`;
  }

  if (values.website.trim()) {
    try {
      const url = new URL(values.website.trim());
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        errors.website = "Enter a valid website URL, including https://.";
      }
    } catch {
      errors.website = "Enter a valid website URL, including https://.";
    }
  }

  if (!values.building.trim()) {
    errors.building = "Tell us what you are building.";
  } else if (values.building.trim().length > contact.fields.building.maxLength) {
    errors.building = `Please use ${contact.fields.building.maxLength} characters or fewer.`;
  }

  return errors;
}

export function ContactSection() {
  const enabled = isFormEnabled();
  const sectionRef = useReveal<HTMLElement>();
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function blur(field: keyof FormValues) {
    const next = validate(values);
    setErrors((current) => ({ ...current, [field]: next[field] }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (!enabled || Object.keys(next).length > 0 || !site.formEndpoint) {
      setStatus(Object.keys(next).length > 0 ? "error" : "idle");
      return;
    }

    const response = await fetch(site.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("sent");
    setValues(emptyValues);
  }

  return (
    <section ref={sectionRef} className="contact reveal" id={contact.id} aria-labelledby="contact-title">
      <SectionContainer>
        <div className="contact-layout">
          <div>
            <h2 id="contact-title">{contact.title}</h2>
            <p className="contact-lead">{contact.description}</p>
            <p className="contact-note">
              {contact.privacyNote}{" "}
              {__NOVARIN_PREVIEW__ && !isPrivacyPublished() ? (
                <Link to="/privacy">Privacy Notice (Preview)</Link>
              ) : null}
              {isPrivacyPublished() ? <Link to="/privacy">Privacy Notice</Link> : null}
            </p>
          </div>
          <form
            className="contact-form"
            noValidate
            onSubmit={onSubmit}
            onKeyDown={(event) => {
              if (!enabled && event.key === "Enter" && !(event.target instanceof HTMLTextAreaElement)) {
                event.preventDefault();
              }
            }}
          >
            <p className="preview-notice" role="status">
              {enabled ? "Submissions are sent to the configured endpoint." : contact.previewNotice}
            </p>
            <Field
              id="full-name"
              label={contact.fields.fullName.label}
              required
              maxLength={contact.fields.fullName.maxLength}
              value={values.fullName}
              error={errors.fullName}
              autoComplete="name"
              onChange={(value) => update("fullName", value)}
              onBlur={() => blur("fullName")}
            />
            <Field
              id="email"
              label={contact.fields.email.label}
              type="email"
              required
              maxLength={contact.fields.email.maxLength}
              value={values.email}
              error={errors.email}
              autoComplete="email"
              onChange={(value) => update("email", value)}
              onBlur={() => blur("email")}
            />
            <Field
              id="company"
              label={contact.fields.company.label}
              required
              maxLength={contact.fields.company.maxLength}
              value={values.company}
              error={errors.company}
              autoComplete="organization"
              onChange={(value) => update("company", value)}
              onBlur={() => blur("company")}
            />
            <Field
              id="website"
              label={contact.fields.website.label}
              type="url"
              maxLength={contact.fields.website.maxLength}
              value={values.website}
              error={errors.website}
              autoComplete="url"
              onChange={(value) => update("website", value)}
              onBlur={() => blur("website")}
            />
            <Field
              id="building"
              label={contact.fields.building.label}
              required
              multiline
              maxLength={contact.fields.building.maxLength}
              value={values.building}
              error={errors.building}
              onChange={(value) => update("building", value)}
              onBlur={() => blur("building")}
            />
            <button className="submit-button" type="submit" disabled={!enabled}>
              {contact.submitLabel}
            </button>
            {status === "error" && enabled ? (
              <p className="form-status" role="alert">
                The introduction could not be sent. Please try again later.
              </p>
            ) : null}
            {status === "sent" ? (
              <p className="form-status" role="status">
                Your introduction has been sent.
              </p>
            ) : null}
          </form>
        </div>
      </SectionContainer>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  required = false,
  multiline = false,
  maxLength,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  maxLength: number;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: id,
    value,
    maxLength,
    required,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    onBlur,
  };

  return (
    <div className={`field${multiline ? " field-wide" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required ? <span className="visually-hidden"> required</span> : null}
      </label>
      {multiline ? (
        <textarea
          {...shared}
          rows={4}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          {...shared}
          type={type}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error ? (
        <p id={errorId} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
