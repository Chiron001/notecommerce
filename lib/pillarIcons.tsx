import { createElement } from "react";
import { BarChart3, PieChart, Radar, Rocket, Store, Target, Users, type LucideIcon, type LucideProps } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "economics-profitability": PieChart,
  "ecommerce-platforms": Store,
  "customer-retention": Users,
  "performance-marketing": Target,
  "brand-growth-strategy": Rocket,
  "market-intelligence": Radar,
};

/** The icon for a practice area, looked up by pillar slug. */
export function PillarIcon({ slug, ...props }: { slug: string } & LucideProps) {
  return createElement(ICONS[slug] ?? BarChart3, props);
}
