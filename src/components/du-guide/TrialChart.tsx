import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ShieldAlert, Trophy, Info } from "lucide-react";

interface TrialMarkEntry {
  round: string;
  marks: number;
  maxMarks: number;
  percentage: number;
  highlight?: boolean;
}

const TRIAL_DATA: TrialMarkEntry[] = [
  { round: "Round of 32", marks: 300, maxMarks: 400, percentage: 75 },
  { round: "Round of 16", marks: 310, maxMarks: 400, percentage: 77.5 },
  { round: "Quarter Final", marks: 340, maxMarks: 400, percentage: 85 },
  { round: "Semi Final", marks: 350, maxMarks: 400, percentage: 87.5 },
  { round: "Finalist", marks: 360, maxMarks: 400, percentage: 90 },
  { round: "Winner", marks: 370, maxMarks: 400, percentage: 92.5, highlight: true },
];

export function TrialChart() {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data: TrialMarkEntry = payload[0].payload;
      return (
        <div className="rounded-2xl border border-border/80 bg-surface/95 p-3.5 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase">
            <Trophy className="size-3.5 text-neon" />
            <span>{data.round}</span>
          </div>
          <p className="mt-1 font-display text-xl font-black text-foreground">
            {data.marks} <span className="text-xs text-muted-foreground font-normal">/ 400 Marks</span>
          </p>
          <p className="text-xs text-emerald-500 font-semibold mt-0.5">
            {data.percentage}% Trial Score Benchmark
          </p>
          <span className="mt-1.5 block text-[10px] text-rose-500 font-medium">
            *Sports Life Reference Analysis Only
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="my-8 space-y-6">
      <div className="overflow-hidden rounded-3xl border border-border/80 bg-surface/90 p-6 sm:p-8 shadow-lg">
        {/* Header with Title and Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-5">
          <div>


            <h3 className="mt-3 font-display text-xl sm:text-2xl font-black text-foreground">
              Tennis Trial Marks Analysis — Out of 400
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Estimated trial marks distribution based on round progression during 2026 DU tennis trials.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground bg-surface-2/60 px-3.5 py-2 rounded-2xl border border-border/70 shrink-0">
            <span>Scale:</span>
            <span className="text-foreground font-black">0 – 400 Marks</span>
          </div>
        </div>

        {/* Recharts Bar Chart Container */}
        <div className="mt-6 h-72 sm:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={TRIAL_DATA}
              margin={{ top: 20, right: 10, left: -20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} vertical={false} />
              <XAxis
                dataKey="round"
                tick={{ fontSize: 11, fill: "currentColor" }}
                interval={0}
                tickLine={false}
                axisLine={{ stroke: "rgba(128,128,128,0.2)" }}
              />
              <YAxis
                domain={[260, 400]}
                tick={{ fontSize: 11, fill: "currentColor" }}
                tickLine={false}
                axisLine={{ stroke: "rgba(128,128,128,0.2)" }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(34, 197, 94, 0.06)" }} />
              <Bar dataKey="marks" radius={[8, 8, 0, 0]} maxBarSize={55}>
                {TRIAL_DATA.map((entry) => (
                  <Cell
                    key={entry.round}
                    fill={entry.highlight ? "#22c55e" : "#3b82f6"}
                    opacity={entry.highlight ? 1 : 0.85}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend / Quick Numbers Pill Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2 border-t border-border/60">
          {TRIAL_DATA.map((item) => (
            <div
              key={item.round}
              className={`rounded-xl border p-2.5 text-center transition-all ${item.highlight
                  ? "border-emerald-500/40 bg-emerald-500/10"
                  : "border-border/70 bg-surface-2/40"
                }`}
            >
              <div className="text-[10px] uppercase font-bold text-muted-foreground truncate">
                {item.round}
              </div>
              <div
                className={`font-display text-base font-black mt-0.5 ${item.highlight ? "text-emerald-500" : "text-foreground"
                  }`}
              >
                {item.marks}{" "}
                <span className="text-[10px] text-muted-foreground font-normal">/400</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandated Disclaimers */}
        <div className="mt-6 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 text-xs text-foreground/80 space-y-1.5 leading-relaxed">
          <p className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
            <Info className="size-4 shrink-0" />
            Important Clarification Regarding Trial Marks:
          </p>
          <p>
            “These marks are not official DU trial marks. They are Sports Life's reference analysis based on observations and discussions with players who participated in the 2026 DU tennis trials.”
          </p>
          <p className="text-muted-foreground">
            “The actual marks awarded in the DU sports trials are determined solely by the Sports Admission Committee of the University of Delhi.”
          </p>
        </div>
      </div>
    </div>
  );
}
