import { GraduationCap, Award, Trophy } from "lucide-react";

export function WeightageSection() {
  const parts = [
    {
      percentage: "25%",
      title: "CUET (UG) Score",
      subtitle: "Academic Component",
      desc: "",
      icon: GraduationCap,
      color: "from-blue-500/20 via-blue-500/5 to-transparent",
      borderColor: "border-blue-500/30 hover:border-blue-500/60",
      accent: "text-blue-500",
    },
    {
      percentage: "25%",
      title: "Sports Certificates",
      subtitle: "Prior Achievements",
      desc: "",
      icon: Award,
      color: "from-amber-500/20 via-amber-500/5 to-transparent",
      borderColor: "border-amber-500/30 hover:border-amber-500/60",
      accent: "text-amber-500",
    },
    {
      percentage: "50%",
      title: "DU Tennis Trial",
      subtitle: "On-Court Performance",
      desc: "",
      icon: Trophy,
      color: "from-emerald-500/25 via-emerald-500/10 to-transparent",
      borderColor: "border-emerald-500/40 hover:border-emerald-500/70 ring-1 ring-emerald-500/20",
      accent: "text-emerald-500",
    },
  ];

  return (
    <div className="space-y-8 my-8">
      {/* 3 Component Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {parts.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className={`relative overflow-hidden rounded-3xl border bg-surface/90 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-md bg-linear-to-b ${p.color} ${p.borderColor}`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-2xl bg-surface/90 shadow-xs ${p.accent}`}>
                  <Icon className="size-6" />
                </div>
              </div>

              <div className="mt-6">
                <div className={`font-display text-4xl sm:text-5xl font-black tracking-tight ${p.accent}`}>
                  {p.percentage}
                </div>
                <h3 className="mt-2 text-xl font-black text-foreground">{p.title}</h3>
                <p className="text-xs font-semibold text-muted-foreground tracking-wide uppercase mt-0.5">
                  {p.subtitle}
                </p>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
