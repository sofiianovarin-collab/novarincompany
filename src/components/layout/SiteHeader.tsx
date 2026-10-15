import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerItems, itemHref } from "../../config/navigation";
import { site } from "../../config/site";
import "./SiteHeader.css";

export function SiteHeader() {
  const preview = site.launchStatus === "preview";
  const { pathname } = useLocation();
  const items = headerItems(preview);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 1 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = panel?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle?.focus();
      }
      if (event.key !== "Tab" || !panel) return;
      const nodes = panel.querySelectorAll<HTMLElement>("a, button");
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeAndRestore() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <>
    <div ref={sentinelRef} className="header-sentinel" aria-hidden="true" />
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="header-bar">
        <Link
          className="brand-lockup"
          to="/"
          aria-label={site.name}
          onClick={() => setOpen(false)}
        >
          <span className="brand-lockup__visual">
            <img
              className="brand-lockup__mark"
              src={site.brandMark}
              alt=""
              width={48}
              height={48}
              decoding="async"
            />
            <span className="brand-lockup__name">
              <img
                className="brand-lockup__wordmark"
                src={site.brandWordmark}
                alt=""
                width={931}
                height={103}
                decoding="async"
              />
              <span className="brand-lockup__tagline">{site.tagline}</span>
            </span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <NavControl
                  itemId={item.id}
                  label={item.label}
                  href={itemHref(item)}
                  current={item.availability === "page" && pathname === item.futurePath}
                />
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-bars" aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          className="mobile-nav is-shown"
          role="dialog"
          aria-modal="true"
          aria-label="Primary"
        >
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <NavControl
                  itemId={item.id}
                  label={item.label}
                  href={itemHref(item)}
                  current={item.availability === "page" && pathname === item.futurePath}
                  onNavigate={closeAndRestore}
                />
              </li>
            ))}
          </ul>
          <button className="menu-close" type="button" onClick={closeAndRestore}>
            Close menu
          </button>
        </div>
      ) : null}
    </header>
    </>
  );
}

function NavControl({
  itemId,
  label,
  href,
  current = false,
  onNavigate,
}: {
  itemId: string;
  label: string;
  href?: string;
  current?: boolean;
  onNavigate?: () => void;
}) {
  if (!href) {
    return (
      <span className="nav-planned" aria-disabled="true">
        {label}
        <span className="visually-hidden"> Planned page</span>
      </span>
    );
  }

  const className = [
    itemId === "contact" ? "nav-contact" : "nav-link",
    current ? "nav-current" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      className={className}
      to={href}
      aria-current={current ? "page" : undefined}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}
