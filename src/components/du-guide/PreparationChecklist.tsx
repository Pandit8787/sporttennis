import { useState, useEffect } from "react";
import { CheckSquare, Square, RotateCcw, CheckCircle2, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ChecklistItem {
  id: string;
  text: string;
  category: "Academic & CUET" | "Certificates" | "Tennis & Trials" | "CSAS Process";
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: "item-1", text: "Understand target DU programmes", category: "Academic & CUET" },
  { id: "item-2", text: "Check CUET subject requirements for targeted courses", category: "Academic & CUET" },
  { id: "item-3", text: "Plan CUET preparation alongside tennis schedule", category: "Academic & CUET" },
  { id: "item-4", text: "Track eligible sports certificates", category: "Certificates" },
  { id: "item-5", text: "Identify highest-value certificate (Cat B / C / D)", category: "Certificates" },
  { id: "item-6", text: "Check certificate validity period (1 May 2023 → 30 April 2026)", category: "Certificates" },
  { id: "item-7", text: "Maintain regular tournament participation", category: "Tennis & Trials" },
  { id: "item-8", text: "Track AITA Men's/Women's & U-18 ranking for seeding advantage", category: "Tennis & Trials" },
  { id: "item-9", text: "Practice short-format matches (first-to-4 or pro-set drills)", category: "Tennis & Trials" },
  { id: "item-10", text: "Practice match-pressure situations & clutch serving", category: "Tennis & Trials" },
  { id: "item-11", text: "Prepare original certificates and school/federation attestations", category: "CSAS Process" },
  { id: "item-12", text: "Complete CSAS registration correctly with CUET Application Number", category: "CSAS Process" },
  { id: "item-13", text: "Fill programme and college preferences carefully", category: "CSAS Process" },
  { id: "item-14", text: "Prepare for DU tennis trials (reporting, verification & match play)", category: "Tennis & Trials" },
];

const STORAGE_KEY = "sports_life_du_checklist_state_v1";

export function PreparationChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch {
      // Ignore local storage read errors
    }
  }, []);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore local storage write errors
      }
      return updated;
    });
  };

  const handleReset = () => {
    setCheckedItems({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const handleSelectAll = () => {
    const allChecked = CHECKLIST_ITEMS.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setCheckedItems(allChecked);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allChecked));
    } catch {
      // Ignore
    }
  };

  const completedCount = CHECKLIST_ITEMS.filter((item) => checkedItems[item.id]).length;
  const totalCount = CHECKLIST_ITEMS.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="my-8 overflow-hidden rounded-3xl border border-border/80 bg-surface/90 p-6 sm:p-8 shadow-xl">
      {/* Header & Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-5">
        <div>
          <span className="inline-block rounded-full bg-neon/15 px-3 py-0.5 text-xs font-black uppercase tracking-wider text-neon">
            Interactive Roadmap
          </span>
          <h3 className="mt-2 font-display text-xl sm:text-2xl font-black text-foreground">
            DU Sports Quota Preparation Checklist
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Track your progress across academic requirements, certificate verification, and tennis trial preparation.
          </p>
        </div>

        {/* Progress Display */}
        <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-black text-foreground">
              {completedCount}
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              of {totalCount} Completed ({percentage}%)
            </span>
          </div>
          <div className="w-48 sm:w-56">
            <Progress value={percentage} className="h-2.5 bg-surface-2" />
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between py-3 border-b border-border/50 text-xs">
        <span className="font-semibold text-muted-foreground">
          Click any step to mark as completed:
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSelectAll}
            className="text-neon hover:underline font-bold cursor-pointer"
          >
            Mark All
          </button>
          <span className="text-border">|</span>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium cursor-pointer"
          >
            <RotateCcw className="size-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Checklist items list */}
      <div className="grid gap-2.5 sm:grid-cols-2 pt-4">
        {CHECKLIST_ITEMS.map((item, idx) => {
          const isDone = Boolean(checkedItems[item.id]);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              className={`group flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all cursor-pointer ${
                isDone
                  ? "border-emerald-500/40 bg-emerald-500/10 text-foreground"
                  : "border-border/70 bg-surface hover:border-neon/40 hover:bg-surface-2/40"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckSquare className="size-5 text-emerald-500" />
                ) : (
                  <Square className="size-5 text-muted-foreground group-hover:text-neon" />
                )}
              </div>
              <div className="flex-1">
                <span
                  className={`text-xs sm:text-sm font-semibold transition-all ${
                    isDone ? "line-through text-foreground/60" : "text-foreground"
                  }`}
                >
                  {item.text}
                </span>
                <span className="block text-[10px] text-muted-foreground mt-0.5 font-medium">
                  {item.category}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Completion Trophy Card when 100% */}
      {percentage === 100 && (
        <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/15 p-4 text-center text-sm font-bold text-foreground flex items-center justify-center gap-2">
          <Award className="size-5 text-emerald-500 animate-bounce" />
          <span>All 14 preparation steps checked! You are primed for the DU Sports Quota process.</span>
        </div>
      )}
    </div>
  );
}
