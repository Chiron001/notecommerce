const PALETTE = ["#0b4a82", "#16a37a", "#e58a2a", "#6d5bf0", "#c2410c", "#0f766e"];

function colorFor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
}

/**
 * Honest fallback for a person we don't have a real photo of: a colored
 * initials badge, never a stock or generated face standing in for a real one.
 */
export default function InitialsAvatar({
  name,
  className = "h-11 w-11 text-sm",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-display font-bold text-white ${className}`}
      style={{ backgroundColor: colorFor(name) }}
      aria-hidden="true"
    >
      {initialsFor(name)}
    </span>
  );
}
