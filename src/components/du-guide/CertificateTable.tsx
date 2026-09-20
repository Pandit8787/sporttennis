import { Check, X, Award, ShieldAlert } from "lucide-react";

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
      position: "3rd Position (Semi-Finalist / Bronze)",
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

      {/* Desktop Table View (Hidden on very small screens) */}
      <div className="hidden md:block overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/80 bg-surface-2/60">
              <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-muted-foreground">
                Position / Achievement
              </th>
              <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Category B <span className="font-normal block text-[11px] text-muted-foreground">(National Level · Max 200)</span>
              </th>
              <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Category C <span className="font-normal block text-[11px] text-muted-foreground">(State / Board · Max 120)</span>
              </th>
              <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Category D <span className="font-normal block text-[11px] text-muted-foreground">(District / Zonal · Max 60)</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {data.map((row) => (
              <tr key={row.position} className="transition-colors hover:bg-surface-2/30">
                <td className="p-4 sm:p-5 font-bold text-foreground text-sm flex items-center gap-2">
                  <Award className="size-4 text-neon shrink-0" />
                  <span>{row.position}</span>
                </td>
                <td className="p-4 sm:p-5 font-display text-base font-extrabold text-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-1 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Check className="size-3.5" />
                    {row.catB} Marks
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-display text-base font-extrabold">
                  {typeof row.catC === "number" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 px-3 py-1 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      <Check className="size-3.5" />
                      {row.catC} Marks
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-500 border border-rose-500/20">
                      <X className="size-3.5" />
                      {row.catC}
                    </span>
                  )}
                </td>
                <td className="p-4 sm:p-5 font-display text-base font-extrabold">
                  {typeof row.catD === "number" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-3 py-1 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      <Check className="size-3.5" />
                      {row.catD} Marks
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-500 border border-rose-500/20">
                      <X className="size-3.5" />
                      {row.catD}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-Optimized Card Breakdown */}
      <div className="grid gap-4 md:hidden">
        {data.map((row) => (
          <div
            key={row.position}
            className="rounded-2xl border border-border/80 bg-surface p-4 shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-2">
              <span className="font-bold text-sm text-foreground flex items-center gap-2">
                <Award className="size-4 text-neon shrink-0" />
                {row.position}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2">
                <span className="block text-[10px] uppercase font-bold text-emerald-600">Cat B</span>
                <span className="font-display font-black text-sm text-foreground mt-0.5 block">
                  {row.catB}
                </span>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-2">
                <span className="block text-[10px] uppercase font-bold text-blue-600">Cat C</span>
                <span className="font-display font-black text-xs text-foreground mt-0.5 block">
                  {row.catC}
                </span>
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-2">
                <span className="block text-[10px] uppercase font-bold text-amber-600">Cat D</span>
                <span className="font-display font-black text-xs text-foreground mt-0.5 block">
                  {row.catD}
                </span>
              </div>
            </div>
          </div>
        ))}
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
