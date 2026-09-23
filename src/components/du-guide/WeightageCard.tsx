import { GraduationCap, Award, Trophy, Plus, Equal } from "lucide-react";


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

      {/* CSM Formula Card */}
      <div className="relative overflow-hidden rounded-3xl border border-neon/30 bg-linear-to-r from-neon/15 via-surface/90 to-blue-500/15 p-6 sm:p-8 shadow-xl text-center">
        <span className="inline-block rounded-full bg-neon/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-neon mb-3">
          Combined Sports Merit (CSM) Formula
        </span>

        <h3 className="text-2xl sm:text-3xl font-black text-foreground">
          Combined Sports Merit (CSM)
        </h3>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-display font-black">
          <div className="flex items-center gap-2 rounded-2xl border border-blue-500/30 bg-surface/90 px-4 py-3 shadow-xs">
            <span className="text-2xl sm:text-3xl text-blue-500">25%</span>
            <span className="text-xs sm:text-sm text-foreground/90 uppercase tracking-wider">CUET</span>
          </div>

          <div className="flex size-8 items-center justify-center rounded-full bg-surface border border-border text-muted-foreground">
            <Plus className="size-4" />
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-amber-500/30 bg-surface/90 px-4 py-3 shadow-xs">
            <span className="text-2xl sm:text-3xl text-amber-500">25%</span>
            <span className="text-xs sm:text-sm text-foreground/90 uppercase tracking-wider">Certificates</span>
          </div>

          <div className="flex size-8 items-center justify-center rounded-full bg-surface border border-border text-muted-foreground">
            <Plus className="size-4" />
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-surface/90 px-4 py-3 shadow-xs ring-1 ring-emerald-500/20">
            <span className="text-2xl sm:text-3xl text-emerald-500">50%</span>
            <span className="text-xs sm:text-sm text-foreground/90 uppercase tracking-wider">Sports Trial</span>
          </div>

          <div className="flex size-8 items-center justify-center rounded-full bg-surface border border-border text-muted-foreground">
            <Equal className="size-4" />
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-neon/50 bg-neon/15 px-5 py-3 shadow-md">
            <span className="text-2xl sm:text-3xl text-foreground font-black">100%</span>
            <span className="text-xs sm:text-sm text-neon font-black uppercase tracking-wider">Final CSM</span>
          </div>
        </div>

        <div className="mt-6 max-w-3xl mx-auto rounded-2xl bg-surface/80 p-4 border border-border/60 text-xs sm:text-sm text-foreground/85 leading-relaxed">
          <p className="font-semibold text-foreground">
            "The final merit score is determined by the combined contribution of all three components."
          </p>
          <p className="mt-2 text-muted-foreground text-xs">
            Combined Sports Merit (CSM) is used for merit ranking, and admissions are allocated according to Delhi University's seat allocation process, candidate's programme and college preferences, and the availability of sports quota seats.
          </p>
        </div>
      </div>
    </div>
  );
}
