import { useLayoutEffect, useRef, type ReactNode } from "react";
import { motion } from "../../config/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type DisclosurePanelProps = {
  id: string;
  open: boolean;
  children: ReactNode;
  className?: string;
};

export function DisclosurePanel({ id, open, children, className }: DisclosurePanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const openRef = useRef(open);

  useLayoutEffect(() => {
    openRef.current = open;
    const panel = ref.current;
    if (!panel) return;

    const finishOpen = () => {
      panel.hidden = false;
      panel.style.height = "auto";
      panel.style.overflow = "visible";
      panel.classList.add("is-open");
      panel.classList.remove("is-animating");
    };

    const finishClosed = () => {
      const active = document.activeElement;
      if (active instanceof HTMLElement && panel.contains(active)) {
        document.querySelector<HTMLElement>(`[aria-controls="${CSS.escape(id)}"]`)?.focus();
      }
      panel.hidden = true;
      panel.style.height = "";
      panel.style.overflow = "";
      panel.classList.remove("is-open", "is-animating");
    };

    panel.getAnimations().forEach((animation) => animation.cancel());

    if (reduced) {
      if (open) finishOpen();
      else finishClosed();
      return;
    }

    const start = panel.hidden ? 0 : panel.getBoundingClientRect().height;
    panel.hidden = false;
    panel.classList.add("is-animating");
    panel.classList.remove("is-open");
    panel.style.overflow = "hidden";
    panel.style.height = "auto";
    const end = open ? panel.scrollHeight : 0;
    panel.style.height = `${start}px`;

    if (Math.abs(start - end) < 1) {
      if (open) finishOpen();
      else finishClosed();
      return;
    }

    const animation = panel.animate([{ height: `${start}px` }, { height: `${end}px` }], {
      duration: motion.disclosureMs,
      easing: motion.easeInterface,
    });
    const inner = panel.firstElementChild;
    if (inner instanceof HTMLElement) {
      inner.animate([{ opacity: open ? 0.45 : 1 }, { opacity: open ? 1 : 0 }], {
        duration: motion.disclosureMs,
        easing: motion.easeInterface,
      });
    }

    animation.onfinish = () => {
      if (openRef.current) finishOpen();
      else finishClosed();
    };

    return () => {
      animation.onfinish = null;
      animation.cancel();
    };
  }, [open, reduced, id]);

  useLayoutEffect(() => {
    const onResize = () => {
      const panel = ref.current;
      if (!panel || panel.hidden || !panel.classList.contains("is-open")) return;
      panel.style.height = "auto";
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div ref={ref} id={id} hidden className={["disclosure-panel", className].filter(Boolean).join(" ")}>
      <div className="disclosure-inner">{children}</div>
    </div>
  );
}
