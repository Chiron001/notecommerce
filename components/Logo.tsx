type LogoProps = {
  className?: string;
};

/** Icon-only mark: a simple rounded square with an "N" glyph. */
export function LogoMark({ className }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg gradient-cta font-display font-extrabold text-white ${className ?? ""}`}
      aria-hidden="true"
    >
      N
    </span>
  );
}

/** Full lockup: icon mark + wordmark. Text follows currentColor. */
export function LogoFull({ className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <span
        className="inline-flex h-[1.7em] w-[1.7em] shrink-0 items-center justify-center rounded-md gradient-cta font-display text-[0.85em] font-extrabold text-white"
        aria-hidden="true"
      >
        N
      </span>
      <span className="font-display text-[1em] font-extrabold leading-none whitespace-nowrap">
        Not<span className="font-medium opacity-70">Ecommerce</span>
      </span>
    </span>
  );
}
