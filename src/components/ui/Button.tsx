import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../icons/Icons";
import "./Button.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
};

export function Button({ href, children, variant = "primary", showArrow = false }: ButtonProps) {
  const className = `button button-${variant}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowIcon className="button-arrow" /> : null}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link className={className} to={href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={href}>
      {content}
    </a>
  );
}
