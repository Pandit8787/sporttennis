import { type ReactNode } from "react";
import { AlertCircle, Award, CheckCircle, Info, Sparkles, ShieldAlert } from "lucide-react";

export type BadgeType =
  | "OFFICIAL DU GUIDELINE"
  | "SPORTS LIFE INSIGHT"
  | "2026 OBSERVATION"
  | "NOT OFFICIAL DU MARKS"
  | "GOAL HIGHLIGHT";

interface InsightCardProps {
  badge: BadgeType;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function InsightCard({ badge, title, children, className = "" }: InsightCardProps) {
  const badgeConfig = {
    "OFFICIAL DU GUIDELINE": {
      container: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50",
      badgeClass: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      icon: <CheckCircle className="size-3.5" />,
      accentColor: "text-emerald-600 dark:text-emerald-400",
    },
    "SPORTS LIFE INSIGHT": {
      container: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50",
      badgeClass: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
      icon: <Sparkles className="size-3.5" />,
      accentColor: "text-blue-600 dark:text-blue-400",
    },
    "2026 OBSERVATION": {
      container: "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50",
      badgeClass: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
      icon: <Info className="size-3.5" />,
      accentColor: "text-amber-600 dark:text-amber-400",
    },
    "NOT OFFICIAL DU MARKS": {
      container: "border-rose-500/40 bg-rose-500/5 hover:border-rose-500/60",
      badgeClass: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30",
      icon: <ShieldAlert className="size-3.5" />,
      accentColor: "text-rose-600 dark:text-rose-400",
    },
    "GOAL HIGHLIGHT": {
      container: "border-neon/40 bg-neon/10 hover:border-neon/60",
      badgeClass: "bg-neon/20 text-foreground border-neon/40 font-bold",
      icon: <Award className="size-3.5 text-neon" />,
      accentColor: "text-neon",
    },
  }[badge];

  return (
    <div
      className={`relative my-4 overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-300 shadow-sm backdrop-blur-xs ${badgeConfig.container} ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ${badgeConfig.badgeClass}`}
        >
          {badgeConfig.icon}
          {badge}
        </span>
      </div>

      {title && (
        <h4 className="font-display text-lg font-bold text-foreground mb-2">
          {title}
        </h4>
      )}

      <div className="text-sm sm:text-base leading-relaxed text-foreground/85 space-y-2">
        {children}
      </div>
    </div>
  );
}
