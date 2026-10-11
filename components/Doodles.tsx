type Props = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.15,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Heart({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      {...base}
    >
      <path d="M16 27 C13 24 4 17 4 10 C4 5 10 3 14 8 L16 11 L19 7 C23 3 29 6 28 12 C27 18 21 23 16 27Z" />
      <path d="M8 8 C9 6 11 6 13 8" strokeWidth="0.8" />
    </svg>
  );
}

export function Leaf({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 50 90"
      className={className}
      aria-hidden="true"
      {...base}
    >
      <path d="M24 87 C25 66 23 44 28 8" />
      <path d="M25 68 C12 65 5 54 7 42 C20 44 27 54 25 68Z" />
      <path d="M25 68 C38 61 43 50 39 39 C27 44 23 54 25 68Z" />
      <path d="M26 47 C15 43 12 32 15 23 C25 28 29 37 26 47Z" />
      <path d="M27 33 C37 29 40 19 36 11 C28 16 25 24 27 33Z" />
      <path d="M25 68 L10 45 M25 62 L36 43 M26 43 L18 28 M27 30 L35 16" strokeWidth="0.8" />
    </svg>
  );
}

export function Sparkle({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      aria-hidden="true"
      {...base}
    >
      <path d="M11 51 L29 8" />
      <path d="M24 54 L48 19" />
      <path d="M35 43 L54 32" />
      <path d="M29 8 L27 19" strokeWidth="0.8" />
      <path d="M48 19 L39 24" strokeWidth="0.8" />
    </svg>
  );
}