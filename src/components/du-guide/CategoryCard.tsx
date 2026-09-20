import { Globe2, Trophy, Medal, MapPin, CheckCircle2, Zap } from "lucide-react";
import type { CertificateCategoryData } from "./types";

export const CATEGORIES_DATA: CertificateCategoryData[] = [
  {
    id: "cat-a",
    category: "A",
    title: "Category A — International Level",
    level: "Represented India at International Competitions",
    maxMarks: "Direct Admission Eligible*",
    badge: "Trial Exemption Eligible*",
    badgeVariant: "purple",
    description:
      "Candidates who have represented India in premier international sports competitions recognized by the Ministry of Youth Affairs and Sports (MYAS) / IOA.",
    competitions: [
      "Olympic Games",
      "World Championships",
      "World Cup",
      "Commonwealth Games",
      "Asian Games",
      "Asian Senior Championships",
      "South Asian Games",
      "Paralympic Games",
    ],
    note: "Subject to applicable DU admission criteria, Category A candidates may be eligible for direct admission without appearing for a sports trial.",
  },
  {
    id: "cat-b",
    category: "B",
    title: "Category B — National Level",
    level: "National Games & Recognized National Championships",
    maxMarks: "Maximum 200 Marks",
    badge: "Max 200 Marks",
    badgeVariant: "emerald",
    description:
      "Highest standard of domestic national competitions recognized by national sports federations (AITA / IOA / SGFI / MYAS).",
    competitions: [
      "National Games",
      "Federation Cup",
      "Senior National Championships",
      "National Championships / Inter-Zonal Nationals",
      "National School Games (SGFI)",
      "Khelo India Youth Games",
      "Junior Nationals",
      "Other recognized national-level championships",
    ],
    note: "1st Position: 200 | 2nd: 180 | 3rd: 160 | Participation: 140 marks.",
  },
  {
    id: "cat-c",
    category: "C",
    title: "Category C — State / Recognized Board Nationals",
    level: "State Championships & School Board Nationals",
    maxMarks: "Maximum 120 Marks",
    badge: "Max 120 Marks",
    badgeVariant: "blue",
    description:
      "Competitive state championships and national tournaments organized by recognized school boards and educational councils.",
    competitions: [
      "State Championships",
      "Inter-District Championships",
      "CBSE Nationals",
      "KVS Nationals",
      "IPSC Nationals",
      "DAV Nationals",
      "NVS Nationals",
      "Vidya Bharati Nationals & CISCE Nationals",
    ],
    note: "1st Position: 120 | 2nd: 100 | 3rd: 80 | Participation: Not Eligible.",
  },
  {
    id: "cat-d",
    category: "D",
    title: "Category D — District / Zonal / Regional Level",
    level: "District Championships & Regional School Clusters",
    maxMarks: "Maximum 60 Marks",
    badge: "Max 60 Marks",
    badgeVariant: "amber",
    description:
      "Recognized district-level competitions, zonal events, and regional school clusters.",
    competitions: [
      "District Championships",
      "Zonal Competitions",
      "CBSE Clusters",
      "KVS / NVS Regional Competitions",
      "DAV / Vidya Bharati Zonal Competitions",
      "CISCE Regional Competitions",
      "Other recognized district or regional tournaments",
    ],
    note: "1st Position: 60 | 2nd: 40 | 3rd: 20 | Participation: Not Eligible.",
  },
];

export function CategoryCards() {
  const getIcon = (cat: string) => {
    switch (cat) {
      case "A":
        return <Globe2 className="size-6 text-purple-500" />;
      case "B":
        return <Trophy className="size-6 text-emerald-500" />;
      case "C":
        return <Medal className="size-6 text-blue-500" />;
      case "D":
        return <MapPin className="size-6 text-amber-500" />;
      default:
        return <Zap className="size-6 text-neon" />;
    }
  };

  const getStyle = (cat: string) => {
    switch (cat) {
      case "A":
        return {
          border: "border-purple-500/30 hover:border-purple-500/60",
          bg: "bg-linear-to-b from-purple-500/10 via-surface/90 to-surface",
          badge: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
        };
      case "B":
        return {
          border: "border-emerald-500/30 hover:border-emerald-500/60",
          bg: "bg-linear-to-b from-emerald-500/10 via-surface/90 to-surface",
          badge: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
        };
      case "C":
        return {
          border: "border-blue-500/30 hover:border-blue-500/60",
          bg: "bg-linear-to-b from-blue-500/10 via-surface/90 to-surface",
          badge: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
        };
      case "D":
        return {
          border: "border-amber-500/30 hover:border-amber-500/60",
          bg: "bg-linear-to-b from-amber-500/10 via-surface/90 to-surface",
          badge: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
        };
      default:
        return {
          border: "border-border",
          bg: "bg-surface",
          badge: "bg-secondary text-foreground",
        };
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 my-8">
      {CATEGORIES_DATA.map((cat) => {
        const style = getStyle(cat.category);
        return (
          <div
            key={cat.id}
            className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 sm:p-7 shadow-md transition-all duration-300 hover:-translate-y-1 ${style.border} ${style.bg}`}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-black uppercase tracking-wider ${style.badge}`}
                >
                  {cat.badge}
                </span>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-surface border border-border/80 shadow-xs">
                  {getIcon(cat.category)}
                </div>
              </div>

              <h3 className="mt-4 font-display text-xl sm:text-2xl font-black text-foreground">
                {cat.title}
              </h3>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
                {cat.level}
              </p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                {cat.description}
              </p>

              <div className="mt-5">
                <h4 className="text-xs font-black uppercase tracking-wider text-foreground/70 mb-2">
                  Eligible Competitions Include:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/85">
                  {cat.competitions.map((comp) => (
                    <li key={comp} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-neon shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {cat.note && (
              <div className="mt-6 rounded-xl border border-border/60 bg-surface/80 p-3 text-xs text-muted-foreground">
                <strong className="text-foreground">Key Note: </strong>
                {cat.note}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
