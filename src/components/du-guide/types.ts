export interface ChecklistItem {
  id: string;
  label: string;
  detail?: string;
  category: "academic" | "certificate" | "tennis" | "process";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export interface CertificateCategoryData {
  id: string;
  category: "A" | "B" | "C" | "D";
  title: string;
  level: string;
  maxMarks: number | string;
  badge: string;
  badgeVariant: "emerald" | "blue" | "amber" | "purple";
  description: string;
  competitions: string[];
  note?: string;
}

export interface TrialMarkData {
  round: string;
  marks: number;
  label: string;
}
