import { useEffect, useRef } from "react";
import { contactGuidance } from "../../content/contact";
import "./ContactGuidance.css";

export function ContactGuidance() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const userToggled = useRef(false);

  useEffect(() => {
    const details = detailsRef.current;
    const media = window.matchMedia("(min-width: 900px)");
    const sync = () => {
      if (!details) return;
      if (media.matches) details.open = true;
      else if (!userToggled.current) details.open = false;
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <details
      ref={detailsRef}
      className="contact-guidance"
      onToggle={(event) => {
        if (window.matchMedia("(max-width: 899px)").matches) {
          userToggled.current = event.currentTarget.open;
        }
      }}
    >
      <summary>{contactGuidance.mobileSummary}</summary>
      <div className="contact-guidance-body">
        <h3>{contactGuidance.title}</h3>
        <p>{contactGuidance.body}</p>
        <ol>
          {contactGuidance.steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="contact-safety">
          <strong>{contactGuidance.safetyTitle}</strong>
          <p>{contactGuidance.safetyBody}</p>
        </div>
      </div>
    </details>
  );
}
