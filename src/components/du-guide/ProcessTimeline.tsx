import { ArrowDown, CheckCircle, FileText, Layers, Trophy, School } from "lucide-react";
import { InsightCard } from "./InsightCard";

export function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Appear for CUET with the subjects required for your intended DU programme.",
      authority: "",
      desc: "",
      icon: FileText,

      badgeColor: "bg-blue-500/15 text-blue-600 border-blue-500/30",
    },
    {
      number: "02",
      title: "CUET (UG) Results",
      authority: "",
      desc: "Receive your CUET scorecard and results from NTA. Your CUET Application Number is required for the next stage.",
      icon: CheckCircle,

      badgeColor: "bg-blue-500/15 text-blue-600 border-blue-500/30",
    },
    {
      number: "03",
      title: "DU CSAS (UG)-2026 Portal Registration",

      desc: "Register on Delhi University's Common Seat Allocation System (CSAS) portal using CUET Application Number.",
      icon: School,

      badgeColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    },
    {
      number: "04",
      title: "Select Programme & College Preferences",

      desc: "Select preferred courses and colleges.",
      icon: Layers,

      badgeColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    },
    {
      number: "05",
      title: "Apply Under Sports Supernumerary Quota",

      desc: "Opt for Sports Supernumerary Quota (Tennis). Upload maximum up to three valid sports certificates",
      icon: FileText,

      badgeColor: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    },
    {
      number: "06",
      title: "DU Tennis Trials & Seat Allocation",

      desc: "Appear for physical on-court trials (evaluated out of 400 marks). CSM score is computed (25% CUET + 25% Certificates + 50% Trial), followed by seat allocation rounds.",
      icon: Trophy,

      badgeColor: "bg-neon/20 text-foreground border-neon/40",
    },
  ];

  return (
    <div className="my-8 space-y-6">
      <div className="relative border-l-2 border-border/80 pl-6 sm:pl-8 ml-3 sm:ml-6 space-y-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="relative group">
              {/* Timeline Pin Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 flex size-7 sm:size-8 items-center justify-center rounded-full border-2 border-surface bg-neon text-white font-black text-xs shadow-md transition-transform group-hover:scale-110">
                {idx + 1}
              </div>

              {/* Step Card */}
              <div className="rounded-2xl border border-border/70 bg-surface/90 p-5 sm:p-6 shadow-sm transition-all hover:border-neon/40 hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">

                  {step.authority && (
                    <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                      <Icon className="size-3.5" />
                      {step.authority}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg sm:text-xl font-black text-foreground">
                  {step.title}
                </h3>

                {step.desc && (
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    {step.desc}
                  </p>
                )}
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden sm:flex items-center justify-center my-1 text-muted-foreground/50">
                  <ArrowDown className="size-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Distinction clarification */}
      <div className="grid gap-4 sm:grid-cols-2 mt-6">
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5">
          <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm uppercase tracking-wider">
            CUET (UG) = NTA Examination
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
            CUET (UG)-2026 is conducted independently by the National Testing Agency (NTA). Appearing for CUET alone does NOT automatically submit your application to Delhi University.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-sm uppercase tracking-wider">
            CSAS (UG) = DU Admission Portal
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
            CSAS (UG) is conducted directly by Delhi University. Your CUET Application Number is strictly required to register on CSAS and apply under the Sports Quota.
          </p>
        </div>
      </div>

      {/* Sports Life Insight */}
      <InsightCard badge="SPORTS LIFE INSIGHT" title="Strategic Academic Planning Starts Early">
        <p>
          “For a tennis player targeting Delhi University, CUET should not be treated as just a formality. Tennis preparation may be the primary focus, but academic planning starts much earlier. A solid CUET percentage secures a reliable 25% foundation in your Combined Sports Merit score before you even step onto the court for trials.”
        </p>
      </InsightCard>
    </div>
  );
}
