import { useId, useState, type ReactNode } from "react";
import { DisclosurePanel } from "../motion/DisclosurePanel";

export function ScopeDisclosure({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="experience-disclosure">
      <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)}>
        {label}
        <span aria-hidden="true">{open ? "–" : "+"}</span>
      </button>
      <DisclosurePanel id={panelId} open={open}>
        <div className="experience-disclosure-body">{children}</div>
      </DisclosurePanel>
    </div>
  );
}
