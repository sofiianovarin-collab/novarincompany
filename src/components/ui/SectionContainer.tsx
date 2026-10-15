import type { ReactNode } from "react";
import "./SectionContainer.css";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContainer({ children, className }: SectionContainerProps) {
  const classes = className ? `section-container ${className}` : "section-container";
  return <div className={classes}>{children}</div>;
}
