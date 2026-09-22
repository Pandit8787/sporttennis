import { Check, X, Award, ShieldAlert, BarChart3 } from "lucide-react";

export function CertificateTable() {
  const data = [
    {
      position: "1st Position (Winner / Gold)",
      catB: 200,
      catC: 120,
      catD: 60,
      badge: "Winner",
    },
    {
      position: "2nd Position (Runner-up / Silver)",
      catB: 180,
      catC: 100,
      catD: 40,
      badge: "Runner-Up",
    },
    {
      position: "3rd Position",
      catB: 160,
      catC: 80,
      catD: 20,
      badge: "3rd Place",
    },
    {
      position: "Participation Only",
      catB: 140,
      catC: "Not Eligible",
      catD: "Not Eligible",
      badge: "Participation",
    },
  ];

  const SCALE_MAX = 200;

  const categories = [
    {
      key: "catB" as const,
      label: "Category B",
      sublabel: "National · Max 200",
      color: "bg-emerald-500",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      key: "catC" as const,
      label: "Category C",
      sublabel: "State / Board · Max 120",
      color: "bg-blue-500",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      key: "catD" as const,
      label: "Category D",
      sublabel: "District / Zonal · Max 60",
      color: "bg-amber-500",
      textColor: "text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <div className="my-8 space-y-6">
      {/* Key facts row */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-border/80 bg-surface/80 p-4">
          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Weightage</span>
          <p className="text-xl font-black text-foreground mt-1">25% of CSM</p>
          <p className="text-xs text-muted-foreground mt-0.5">Calculated towards merit</p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-surface/80 p-4">
          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Max Uploads</span>
          <p className="text-xl font-black text-foreground mt-1">Up to 3 Certificates</p>
          <p className="text-xs text-muted-foreground mt-0.5">Upload top 3 achievements</p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-surface/80 p-4">
          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Scoring Rule</span>
          <p className="text-xl font-black text-foreground mt-1">Highest 1 Considered</p>
          <p className="text-xs text-muted-foreground mt-0.5">Marks are not cumulative</p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-surface/80 p-4">
          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Max Benchmark</span>
          <p className="text-xl font-black text-emerald-500 mt-1">200 Marks Base</p>
          <p className="text-xs text-muted-foreground mt-0.5">Evaluation scale</p>
        </div>
      </div>

      {/* ─── CHART ─────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-md">
        {/* Chart header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-surface-2/60 px-6 py-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-neon" />
            <h3 className="font-display text-base font-black text-foreground uppercase tracking-wide">
              Certificate Marks — Visual Comparison
            </h3>
          </div>
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
            {categories.map((cat) => (
              <span key={cat.key} className="flex items-center gap-1.5">
                <span className={`inline-block size-2.5 rounded-full ${cat.color}`} />
                <span className={cat.textColor}>{cat.label}</span>
                <span className="text-muted-foreground font-normal">({cat.sublabel})</span>
              </span>
            ))}
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2.5 rounded-full bg-rose-400/60" />
              <span className="text-rose-500">Not Eligible</span>
            </span>
          </div>
        </div>

        {/* Chart body */}
        <div className="divide-y divide-border/40 px-6 py-2">
          {data.map((row, rowIdx) => (
            <div key={row.position} className="py-5 space-y-3">
              {/* Row label */}
              <div className="flex items-center gap-2">
                <Award className="size-4 text-neon shrink-0" />
                <span className="text-sm font-black text-foreground">{row.position}</span>
              </div>

              {/* Bars */}
              <div className="space-y-2.5">
                {categories.map((cat) => {
                  const rawVal = row[cat.key];
                  const isEligible = typeof rawVal === "number";
                  const pct = isEligible ? Math.round(((rawVal as number) / SCALE_MAX) * 100) : 0;

                  return (
                    <div key={cat.key} className="flex items-center gap-3">
                      {/* Category label */}
                      <span className={`w-24 shrink-0 text-[11px] font-black uppercase tracking-wide ${cat.textColor}`}>
                        {cat.label}
                      </span>

                      {/* Bar track */}
                      <div className="relative flex-1 h-8 rounded-xl bg-surface-2/80 border border-border/50 overflow-hidden">
                        {isEligible ? (
                          <div
                            className={`h-full rounded-xl ${cat.color} opacity-85 transition-all duration-700 ease-out`}
                            style={{
                              width: `${pct}%`,
                              animationDelay: `${rowIdx * 100}ms`,
                            }}
                          />
                        ) : (
                          <div
                            className="h-full w-[15%] rounded-xl opacity-40"
                            style={{
                              background:
                                "repeating-linear-gradient(45deg,#f87171,#f87171 4px,transparent 4px,transparent 10px)",
                            }}
                          />
                        )}

                        {/* Value label on top of bar */}
                        {isEligible ? (
                          <span className="absolute inset-0 flex items-center px-3 text-xs font-black text-white drop-shadow-sm">
                            {rawVal} marks
                          </span>
                        ) : (
                          <span className="absolute inset-0 flex items-center px-3 text-xs font-bold text-rose-500">
                            Not Eligible
                          </span>
                        )}
                      </div>

                      {/* Numeric ratio badge */}
                      <span
                        className={`w-20 shrink-0 text-right text-xs font-black ${
                          isEligible ? cat.textColor : "text-rose-400"
                        }`}
                      >
                        {isEligible ? `${rawVal} / ${SCALE_MAX}` : "—"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Scale footer */}
        <div className="border-t border-border/40 bg-surface-2/40 px-6 py-3 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="font-semibold">0</span>
          <div className="flex-1 mx-4 relative h-1 rounded-full bg-border/60">
            {[50, 100, 150, 200].map((tick) => (
              <span
                key={tick}
                className="absolute -top-3.5 -translate-x-1/2 text-[10px] font-bold text-muted-foreground/70"
                style={{ left: `${(tick / SCALE_MAX) * 100}%` }}
              >
                {tick}
              </span>
            ))}
          </div>
          <span className="font-semibold">200 marks (max)</span>
        </div>
      </div>

      {/* Critical Note on Participation */}
      <div className="rounded-2xl border border-border/80 bg-surface-2/40 p-4 text-xs sm:text-sm text-foreground/85 flex items-start gap-3">
        <ShieldAlert className="size-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-foreground">Critical Participation Rule:</p>
          <p className="mt-1 text-muted-foreground leading-relaxed">
            Participation certificates are only evaluated for <strong>Category B</strong> (National Level, giving 140 marks). For <strong>Categories C and D</strong>, participation alone is <em>Not Eligible</em>; candidates must have secured 1st, 2nd, or 3rd position to earn certificate marks.
          </p>
        </div>
      </div>
    </div>
  );
}
