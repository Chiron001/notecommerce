export const PILLAR_ACCENT_STYLES: Record<
  string,
  { bar: string; text: string; chip: string; tint: string; icon: string }
> = {
  emerald: {
    bar: "bg-emerald-500",
    text: "text-emerald-600",
    chip: "bg-emerald-500/10",
    tint: "from-emerald-50 to-teal-50/40 dark:from-emerald-500/15 dark:to-transparent",
    icon: "bg-emerald-500 shadow-emerald-500/30",
  },
  amber: {
    bar: "bg-amber-500",
    text: "text-amber-600",
    chip: "bg-amber-500/10",
    tint: "from-amber-50 to-orange-50/40 dark:from-amber-500/15 dark:to-transparent",
    icon: "bg-amber-500 shadow-amber-500/30",
  },
  violet: {
    bar: "bg-violet-500",
    text: "text-violet-600",
    chip: "bg-violet-500/10",
    tint: "from-violet-50 to-fuchsia-50/40 dark:from-violet-500/15 dark:to-transparent",
    icon: "bg-violet-500 shadow-violet-500/30",
  },
  indigo: {
    bar: "bg-indigo-600",
    text: "text-indigo-600",
    chip: "bg-indigo-600/10",
    tint: "from-blue-50 to-sky-50/40 dark:from-indigo-500/15 dark:to-transparent",
    icon: "bg-indigo-600 shadow-indigo-600/30",
  },
};
