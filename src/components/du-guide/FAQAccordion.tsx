import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ShieldAlert } from "lucide-react";

export const DU_FAQS = [
  {
    id: "faq-1",
    question: "1. What is the DU Sports Supernumerary Quota?",
    answer:
      "The DU Sports Supernumerary Quota is a in Delhi University undergraduate admissions for accomplished sports performers. Supernumerary means these seats are created over and above the regular sanctioned intake of colleges, providing a dedicated pathway for competitive athletes to gain admission based on their sports achievements and trials.",
  },
  {
    id: "faq-2",
    question: "2. What is the Combined Sports Merit (CSM)?",
    answer:
      "Combined Sports Merit (CSM) is the composite final score used by Delhi University to prepare the merit rank list for sports quota admissions. It aggregates 25% CUET Score + 25% Sports Certificate Marks + 50% Sports Trial Marks into a single 100% index.",
  },
  {
    id: "faq-3",
    question: "3. How much weightage does CUET carry?",
    answer:
      "CUET carries 25% weightage in the Combined Sports Merit (CSM) score for Categories B, C, and D. Delhi University considers the highest Programme-Specific CUET percentage score corresponding to the undergraduate course applied for.",
  },
  {
    id: "faq-4",
    question: "4. How much weightage do sports certificates carry?",
    answer:
      "Sports certificates carry 25% weightage in the Combined Sports Merit (CSM) score. Certificates are evaluated on a maximum scale of 200 marks depending on the competition level (Category B, C, or D) and the position secured (1st, 2nd, 3rd, or participation where applicable).",
  },
  {
    id: "faq-5",
    question: "5. How much weightage does the tennis trial carry?",
    answer:
      "The DU tennis sports trial carries 50% weightage in the Combined Sports Merit (CSM) score. Evaluated out of a maximum score of 400 marks, trials assess the player's live on-court competitive ability, match play, tactical decision making, and shot execution.",
  },
  {
    id: "faq-6",
    question: "6. How many sports certificates can a candidate upload?",
    answer:
      "Candidates can upload a maximum of three (3) sports certificates on the CSAS portal under the sports supernumerary quota application.",
  },
  {
    id: "faq-7",
    question: "7. Which sports certificate is considered for CSM?",
    answer:
      "Only the single certificate having the highest evaluated marks among the uploaded certificates is considered for preparation of the CSM score. Marks are not cumulative.",
  },
  {
    id: "faq-8",
    question: "8. How long are sports certificates valid?",
    answer:
      "Only sports certificates from the preceding three (3) years are considered. For the 2026–27 admission cycle, the eligible validity window is from 1 May 2023 to 30 April 2026. Any certificate dated before 1 May 2023 is invalid.",
  },
  {
    id: "faq-9",
    question: "9. What is the difference between CUET and CSAS?",
    answer:
      "CUET (UG) is the national entrance examination conducted by the National Testing Agency (NTA) to test academic aptitude. CSAS (Common Seat Allocation System) is Delhi University's dedicated admission and counselling portal where candidates select courses, upload sports certificates, register for trials, and receive college seat allocations.",
  },
  {
    id: "faq-10",
    question: "10. How is the tennis trial conducted?",
    answer:
      "The DU tennis trial is conducted on-court by the University Sports Admission Committee. Based on 2026 trial observations, candidates undergo document verification, draws are prepared (typically 32 or 64 player draws), and players compete in short-format tournament matches over 2–3 days to evaluate technical and match-play competency.",
  },
  {
    id: "faq-11",
    question: "11. What is the role of AITA ranking?",
    answer:
      "Based on Sports Life's observation of trials, AITA (All India Tennis Association) Men's or Women's ranking is generally utilized to determine seeding in the trial tournament draw. Having a verified AITA ranking provides protection from facing top competitors in the early preliminary rounds.",
  },
  {
    id: "faq-12",
    question: "12. Are the Sports Life 2026 trial marks official DU marks?",
    answer:
      "No. The trial marks shown in this guide are Sports Life's observational analysis and are not official DU marks. The actual marks awarded in the DU sports trials are determined solely by the Sports Admission Committee of the University of Delhi.",
    isCrucial: true,
  },
];

export function FAQAccordion() {
  return (
    <div className="my-8 overflow-hidden rounded-3xl border border-border/80 bg-surface/90 p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-2 mb-6">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-neon/15 text-neon">
          <HelpCircle className="size-5" />
        </div>
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-black text-foreground">
            Frequently Asked Questions
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Everything players and parents need to know about the DU Sports Quota.
          </p>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {DU_FAQS.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className={`rounded-2xl border px-4 sm:px-5 transition-all ${faq.isCrucial
                ? "border-rose-500/30 bg-rose-500/5"
                : "border-border/70 bg-surface hover:border-neon/40"
              }`}
          >
            <AccordionTrigger className="text-left font-display text-sm sm:text-base font-bold text-foreground hover:text-neon py-4 cursor-pointer hover:no-underline">
              <span className="flex items-center gap-2">
                {faq.isCrucial && (
                  <ShieldAlert className="size-4 text-rose-500 shrink-0" />
                )}
                <span>{faq.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm leading-relaxed text-foreground/85 pb-4">
              <p>{faq.answer}</p>
              {faq.isCrucial && (
                <div className="mt-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-2.5 text-xs text-rose-600 dark:text-rose-400 font-semibold">
                  Note: Official score sheets and trial marks are confidential DU internal records.
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
