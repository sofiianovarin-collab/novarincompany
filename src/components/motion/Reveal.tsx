import type { CSSProperties, ElementType, ReactNode } from "react";
import { motion } from "../../config/motion";
import { useReveal } from "../../hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Index within a visible group. Delay is capped. */
  index?: number;
};

export function Reveal({ children, className, as: Tag = "div", index = 0 }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const delay = Math.min(index * motion.staggerMs, motion.staggerCapMs);
  const style = delay > 0 ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;
  const classes = ["reveal", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}
