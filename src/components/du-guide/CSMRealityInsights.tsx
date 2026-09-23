import { Sparkles, Trophy, Award, GraduationCap, AlertCircle } from "lucide-react";


export function CSMRealityInsights() {
  return (
    <div className="space-y-10">
      {/* ─── SPORTS LIFE KEY INSIGHTS ───────────────────────────── */}
      <div className="space-y-6">
        {/* Section badge + heading */}
        <div className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-neon/15 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-neon">
            <Sparkles className="size-3.5" />
            Sports Life Key Insights
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground">
            Understanding the Reality
          </h3>
        </div>

        {/* Intro text */}
        <div className="text-sm sm:text-base text-foreground/85 leading-relaxed space-y-3 max-w-4xl">
          <p>
            After studying the 2026 DU tennis sports trials and analysing the overall Sports Quota admission structure, we noticed an important pattern that every tennis player and parent should understand.
          </p>
          <p>
            A common misconception is that because the sports trial carries 50% weightage, the trial is almost the only factor that matters.
          </p>
          <p className="font-bold text-foreground text-base sm:text-lg">
            The reality is different.
          </p>
          <p>
            The final Combined Sports Merit (CSM) is built through three components — CUET, Sports Certificates and Sports Trial. All three can have a meaningful impact on a candidate's final merit.
          </p>
        </div>

        {/* 3 insight cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {/* Card 1 — Trial */}
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6 space-y-3 shadow-sm hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Trophy className="size-5" />
              <span className="text-xs font-black uppercase tracking-wider">Trial Score Reality</span>
            </div>
            <h4 className="font-display text-lg font-black text-foreground leading-snug">
              The Trial Score Gap Is Not Always Huge
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              From our analysis of the 2026 DU tennis trial results, we observed that the difference in trial scores between players who exited in the early rounds and players who progressed much further was{" "}
              <strong>not always as large as many candidates might expect.</strong>
            </p>
          </div>

          {/* Card 2 — Certificates */}
          <div className="rounded-3xl border border-amber-500/30 bg-amber-500/5 p-6 space-y-3 shadow-sm hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Award className="size-5" />
              <span className="text-xs font-black uppercase tracking-wider">Certificate Impact</span>
            </div>
            <h4 className="font-display text-lg font-black text-foreground leading-snug">
              Certificates Can Make a Substantial Difference
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              When we looked at the sports certificate component, we found that the difference in marks between different levels of achievement can be{" "}
              <strong>substantial.</strong> Your certificate category and the level of competition you have achieved can therefore create a significant difference in your overall CSM.
            </p>
          </div>

          {/* Card 3 — CUET */}
          <div className="rounded-3xl border border-blue-500/30 bg-blue-500/5 p-6 space-y-3 shadow-sm hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <GraduationCap className="size-5" />
              <span className="text-xs font-black uppercase tracking-wider">CUET Matters Too</span>
            </div>
            <h4 className="font-display text-lg font-black text-foreground leading-snug">
              CUET Adds Further Weight to Your Merit
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The CUET component also matters. Since the Programme-Specific CUET score contributes to the final CSM, differences in academic scores can further affect a candidate's overall merit.
            </p>
          </div>
        </div>

        {/* Reality statement banner */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-neon/40 bg-linear-to-br from-neon/15 via-surface/95 to-blue-500/10 p-8 sm:p-10 shadow-xl">
          {/* Top label */}
          <span className="inline-block rounded-full bg-neon/20 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-neon mb-4">
            The Reality Behind DU Sports Quota
          </span>

          {/* Big statement */}
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-tight">
            "50% Sports Trial does not mean{" "}
            <span className="text-neon">50% of your preparation.</span>"
          </p>

          <p className="mt-4 text-sm sm:text-base text-foreground/85 leading-relaxed max-w-3xl">
            A player cannot afford to focus only on the trial and ignore the other components.
            Think of your DU Sports Quota profile as three parts:
          </p>

          {/* CUET + Certificates + Trial pill row */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-2xl border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 font-display font-black text-blue-600 dark:text-blue-400 text-sm sm:text-base">
              <GraduationCap className="size-4" />
              CUET
            </div>
            <span className="text-xl font-black text-muted-foreground">+</span>
            <div className="flex items-center gap-2 rounded-2xl border border-amber-500/40 bg-amber-500/10 px-5 py-2.5 font-display font-black text-amber-600 dark:text-amber-400 text-sm sm:text-base">
              <Award className="size-4" />
              Sports Certificates
            </div>
            <span className="text-xl font-black text-muted-foreground">+</span>
            <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 font-display font-black text-emerald-600 dark:text-emerald-400 text-sm sm:text-base">
              <Trophy className="size-4" />
              Sports Trial
            </div>
          </div>

          {/* Closing paragraph + quote */}
          <div className="mt-6 space-y-4 text-sm sm:text-base text-foreground/85 leading-relaxed border-t border-border/40 pt-6">
            <p>
              Your tennis development, tournament planning and certificate profile need to be built well in advance. Your CUET preparation needs to be planned alongside your tennis journey. And when the admission season arrives, you need to be ready to perform in the sports trial.
            </p>

            <div className="flex items-start gap-3 rounded-2xl bg-surface/80 border border-neon/25 p-5">
              <AlertCircle className="size-5 text-neon shrink-0 mt-0.5" />
              <p className="font-display font-black text-base sm:text-lg text-foreground leading-snug">
                "This is why we believe that DU Sports Quota preparation should begin well before the admission year — not just a few days before the trial."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
