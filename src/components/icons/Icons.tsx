type IconProps = {
  className?: string;
};

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="16" cy="16" rx="5" ry="11" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 16h22M7.5 10.5h17M7.5 21.5h17" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <path d="M16 6.5 27 12 16 17.5 5 12 16 6.5Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 16.5 16 21.5 25 16.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 21 16 26 25 21" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <circle cx="12" cy="11" r="3.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20.5" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6.5 23.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M17.2 18.8c1.6-.4 3.2.1 4.3 1.4 1 1.2 1.4 2.6 1.5 3.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <path
        d="M9 22.5c7.5 1 13-3 15.5-11.5-8 .2-13 3.2-15.5 11.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M12 20c2.2-2.4 4.6-4 8-5.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <path d="M16 5.5 25.5 9v7.2c0 5.4-3.8 8.8-9.5 10.8-5.7-2-9.5-5.4-9.5-10.8V9L16 5.5Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function BarsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <path d="M7 22.5V16M16 22.5V11M25 22.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function CoinsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <ellipse cx="16" cy="11" rx="8" ry="3.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 11v5.2c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V11" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 16.2v5.2c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-5.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 12" aria-hidden="true" fill="none">
      <path d="M0 6h18M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M14.7 10.3 21.4 3h-1.6l-5.8 6.4L9.3 3H3.6l7 10.1L3.6 21h1.6l6.2-6.8 4.9 6.8h5.7l-7.3-10.7Zm-2.2 2.4-.7-1-5.7-7.8h2.4l4.6 6.3.7 1 6 8.2h-2.4l-4.9-6.7Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7.2 12 13l8-5.8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.7 3.4A1.7 1.7 0 1 0 4.7 6.8 1.7 1.7 0 0 0 4.7 3.4ZM3.2 8.4h3V20.6h-3V8.4Zm5.1 0h2.9v1.7h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v7.4h-3v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5v6.7h-3V8.4Z" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M19.5 19.5 26 26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const icons = {
  globe: GlobeIcon,
  layers: LayersIcon,
  people: PeopleIcon,
  leaf: LeafIcon,
  coins: CoinsIcon,
  shield: ShieldIcon,
  target: TargetIcon,
  bars: BarsIcon,
};

export type IconName = keyof typeof icons;

export function LineIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
