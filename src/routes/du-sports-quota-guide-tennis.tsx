import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import {
  GraduationCap,
  Award,
  Trophy,
  ExternalLink,
  ChevronUp,
  ShieldAlert,
  HelpCircle,
  Sparkles,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  Clock,
  ArrowRight,
  BookOpen,
  Target,
  Zap,
  Info,
} from "lucide-react";

// Components
import { InsightCard } from "@/components/du-guide/InsightCard";
import { WeightageSection } from "@/components/du-guide/WeightageCard";
import { CategoryCards } from "@/components/du-guide/CategoryCard";
import { ProcessTimeline } from "@/components/du-guide/ProcessTimeline";
import { CertificateTable } from "@/components/du-guide/CertificateTable";
import { TrialChart } from "@/components/du-guide/TrialChart";
import { PreparationChecklist } from "@/components/du-guide/PreparationChecklist";
import { FAQAccordion } from "@/components/du-guide/FAQAccordion";
import { EnquiryForm } from "@/components/du-guide/EnquiryForm";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";

export const Route = createFileRoute("/du-sports-quota-guide-tennis")({
  head: () => ({
    meta: [
      {
        title: "DU Sports Quota Guide for Tennis Players | Sports Life Tennis Academy",
      },
      {
        name: "description",
        content:
          "Understand Delhi University Sports Quota admissions for tennis players, including CUET weightage, sports certificate evaluation, CSM, certificate validity and DU tennis trial preparation.",
      },
      {
        property: "og:title",
        content: "DU Sports Quota Guide for Tennis Players — Sports Life",
      },
      {
        property: "og:description",
        content:
          "A complete guide to DU sports quota admissions, CUET weightage, sports certificates, and tennis trials by Sports Life Tennis Academy.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/du-sports-quota-guide-tennis" },
    ],
    links: [{ rel: "canonical", href: "/du-sports-quota-guide-tennis" }],
  }),
  component: DUSportsQuotaGuidePage,
});

// Table of contents sections for sticky navigation
const TOC_ITEMS = [
  { id: "overview", label: "01. Introduction" },
  { id: "selection-process", label: "02. Selection & CSM" },
  { id: "cuet-academic", label: "03. CUET (25%)" },
  { id: "admission-flow", label: "04. CUET to CSAS Flow" },
  { id: "certificate-evaluation", label: "05. Certificates (25%)" },
  { id: "certificate-categories", label: "06. Categories A-D" },
  { id: "certificate-validity", label: "07. Validity Period" },
  { id: "tennis-trials", label: "08. Trials (50%)" },
  { id: "trial-day", label: "09. Trial Day Process" },
  { id: "trial-format", label: "10. Draw & Duration" },
  { id: "trial-marks-analysis", label: "11. Trial Marks Analysis" },
  { id: "trial-preparation", label: "12. Strategy & Preparation" },
  { id: "key-insights", label: "13. Reality Check" },
  { id: "checklist", label: "14. Preparation Checklist" },
  { id: "enquire", label: "15. Book Consultation" },
  { id: "why-sports-life", label: "16. Why Sports Life" },
  { id: "faqs", label: "17. FAQs" },
  { id: "disclaimer", label: "18. Sources & Disclaimer" },
];

function DUSportsQuotaGuidePage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll Progress and Active TOC Spy
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setShowBackToTop(currentScroll > 400);

      // Section spy
      const sections = TOC_ITEMS.map((item) => document.getElementById(item.id)).filter(
        Boolean
      ) as HTMLElement[];

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Scroll Progress Bar at the top of viewport */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-border/40 pointer-events-none">
        <div
          className="h-full bg-linear-to-r from-neon via-emerald-500 to-teal-400 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <PageHero
        eyebrow="DU Sports Supernumerary Quota"
        title="DU Sports Quota Guide for Tennis Players"
        body=""
        image={heroImage}
        imagePos="object-[center_35%]"
        removeFog
      />

      {/* Independent Educational Intro Banner */}
      <div className="border-b border-border/80 bg-surface-2/70 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed max-w-4xl">
            <strong className="text-foreground">Independent Educational Resource: </strong>
            This guide by Sports Life Tennis Academy is designed to help tennis players and parents understand the Delhi University Sports Supernumerary Quota admission process.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider">
              2026–27 Admission Cycle
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Quick-Jump Navigation Bar spanning full width */}
      <div className="sticky top-[68px] sm:top-[76px] z-30 border-b border-border/80 bg-surface/95 backdrop-blur-xl shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 py-2.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0 pr-3 border-r border-border/70 hidden md:flex">
            <BookOpen className="size-4 text-neon" />
            <span className="text-xs font-black uppercase tracking-wider text-foreground">
              Guide Navigation
            </span>
          </div>

          <nav className="flex items-center gap-1.5 shrink-0 overflow-x-auto py-1">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-all ${activeSection === item.id
                  ? "bg-neon text-white font-black shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="shrink-0 pl-2 hidden lg:block">
            <a
              href="#enquire"
              className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-neon to-emerald-500 text-white px-4 py-1 text-xs font-black uppercase tracking-wider shadow-xs hover:scale-105 transition-all"
            >
              <span>Guidance Session</span>
              <ArrowRight className="size-3" />
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1 — INTRODUCTION */}
      <Section id="overview" className="scroll-mt-36 border-b border-border/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
                Section 01
              </span>
              <span className="text-xs text-muted-foreground font-semibold">
                Introduction & Overview
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              Understanding DU Sports Quota Admissions
            </h1>

            <div className="text-sm sm:text-base leading-relaxed text-foreground/85 space-y-4">
              <p>
                Every year, talented tennis players apply for admission to Delhi University through the Sports Supernumerary Quota. Many candidates have represented their schools, states and national-level tournaments, but students and parents often have questions about how the DU sports quota selection process works.
              </p>
              <p>
                Sports Life created this guide to make the DU sports quota admission process easier to understand for tennis players and parents.
              </p>
              <p>
                This guide is based on the <strong>University of Delhi CSAS (UG) 2026–27 Sports Supernumerary Quota guidelines</strong>, along with Sports Life’s observation and analysis of the <strong>2026 DU tennis trials</strong>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            {/* Common Questions Card */}
            <div className="rounded-3xl border border-border/80 bg-surface/90 p-6 shadow-md space-y-3">
              <h3 className="font-display text-base font-black text-foreground uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="size-4 text-neon" />
                <span>Common Questions Asked by Players & Parents</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/85">
                <li className="flex items-start gap-2">
                  <span className="text-neon font-black">•</span>
                  <span>How much weightage does CUET carry?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon font-black">•</span>
                  <span>How are sports certificates evaluated?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon font-black">•</span>
                  <span>How are the tennis trials conducted?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon font-black">•</span>
                  <span>What is the Combined Sports Merit (CSM) score?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon font-black">•</span>
                  <span>How are seats allocated under the sports quota?</span>
                </li>
              </ul>
            </div>

            {/* Highlighted Goal Card */}
            <InsightCard badge="GOAL HIGHLIGHT" title="Sports Life Guide Objective">
              <p className="font-semibold text-foreground text-sm sm:text-base leading-relaxed">
                “Goal: Clear, accurate and practical information to help players understand the process, prepare strategically and make informed decisions.”
              </p>
            </InsightCard>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — HOW DU SPORTS QUOTA SELECTION WORKS */}
      <Section id="selection-process" className="scroll-mt-36 bg-surface/40 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 02
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Selection Framework & Merit Composition
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            How the DU Sports Quota Selection Process Works
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-foreground/85 max-w-4xl">
            Admission through the Delhi University Sports Supernumerary Quota is strictly based on the <strong>Combined Sports Merit (CSM)</strong> score. Instead of evaluating candidates on a single examination or athletic pedigree alone, Delhi University calculates a composite merit ranking across three required pillars:
          </p>

          {/* 3-Part Weightage Cards and CSM Formula */}
          <WeightageSection />
        </div>
      </Section>

      {/* SECTION 3 — CUET (UG) ACADEMIC COMPONENT */}
      <Section id="cuet-academic" className="scroll-mt-36 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-500/15 text-blue-600 px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 03
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              25% Weightage
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            CUET (UG) — The Academic Component
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
                CUET (UG) is an important part of the Delhi University admission process. For the 2026–27 academic session, candidates seeking admission to undergraduate programmes at Delhi University must appear for CUET (UG)-2026 and subsequently apply through the CSAS (UG)-2026 portal.
              </p>

              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5 shadow-xs">
                <p className="font-bold text-foreground sm:text-lg leading-snug">
                  “For candidates applying under Sports Supernumerary Quota Categories B, C and D, the highest Programme-Specific CUET percentage score contributes 25% to the Combined Sports Merit (CSM).”
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-surface p-5 sm:p-6 shadow-xs space-y-2">
                <h4 className="font-display text-lg font-black text-foreground">
                  What is Programme-Specific CUET Score?
                </h4>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  “Your CUET score is not simply treated as one common score for every DU course. Different undergraduate programmes may have different Language, Domain-Specific and General Test requirements. DU calculates a Programme-Specific CUET Score based on the subjects required for the programme applied for.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-3xl border border-border/80 bg-surface p-6 sm:p-7 shadow-xs space-y-3">
                <h4 className="font-display text-xl font-black text-foreground">
                  Why CUET Subject Selection Matters
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-foreground/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-neon shrink-0 mt-0.5" />
                    <span>Candidates must appear in CUET in subjects in which they have passed Class XII.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-neon shrink-0 mt-0.5" />
                    <span>Candidates must also meet the specific subject requirements of their intended DU programme.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-neon shrink-0 mt-0.5" />
                    <span>Missing a mandatory subject required for a programme may affect eligibility.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-neon shrink-0 mt-0.5" />
                    <span>Students should understand their target programme before selecting CUET subjects.</span>
                  </li>
                </ul>
              </div>

              {/* Checklist UI for CUET */}
              <div className="rounded-2xl border border-border/80 bg-surface-2/40 p-5">
                <h5 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  CUET Subject Readiness Checklist:
                </h5>
                <div className="grid grid-cols-2 gap-2.5 text-xs font-bold text-foreground">
                  <div className="flex items-center gap-2 rounded-xl bg-surface p-3 border border-border/60">
                    <CheckCircle2 className="size-4 text-neon shrink-0" />
                    <span>Target DU programmes</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-surface p-3 border border-border/60">
                    <CheckCircle2 className="size-4 text-neon shrink-0" />
                    <span>Programme eligibility</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-surface p-3 border border-border/60">
                    <CheckCircle2 className="size-4 text-neon shrink-0" />
                    <span>Required CUET subjects</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-surface p-3 border border-border/60">
                    <CheckCircle2 className="size-4 text-neon shrink-0" />
                    <span>Class XII compatibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — CUET TO CSAS ADMISSION FLOW */}
      <Section id="admission-flow" className="scroll-mt-36 bg-surface/30 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 04
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Step-by-Step Flow
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            CUET and CSAS — Don't Confuse the Two
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-foreground/85 max-w-4xl">
            A frequent confusion among applicants is treating CUET and CSAS as the same portal. In reality, they are two separate stages handled by different bodies:
          </p>

          {/* 6-Step Admission Timeline */}
          <ProcessTimeline />
        </div>
      </Section>

      {/* SECTION 5 — SPORTS CERTIFICATE EVALUATION */}
      <Section id="certificate-evaluation" className="scroll-mt-36 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-amber-500/15 text-amber-600 px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 05
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              25% Weightage
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Sports Certificate Evaluation — 25% Weightage
          </h2>

          <div className="text-sm sm:text-base leading-relaxed text-foreground/85 space-y-3">
            <p>
              Sports certificates contribute <strong>25% of the Combined Sports Merit (CSM) score</strong>. The evaluation is carried out strictly based on the highest level of competition and the position secured.
            </p>
          </div>

          {/* Responsive Certificate Marks Table */}
          <CertificateTable />
        </div>
      </Section>

      {/* SECTION 6 — CERTIFICATE CATEGORIES */}
      <Section id="certificate-categories" className="scroll-mt-36 bg-surface/30 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 06
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Hierarchy & Levels
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Understanding the Certificate Categories
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-foreground/85 max-w-4xl">
            Delhi University classifies sports certificates into four distinct tiers (Categories A, B, C, and D), ranging from international representation down to recognized district clusters.
          </p>

          {/* 4 Category Cards */}
          <CategoryCards />
        </div>
      </Section>

      {/* SECTION 7 — CERTIFICATE VALIDITY */}
      <Section id="certificate-validity" className="scroll-mt-36 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-rose-500/15 text-rose-600 px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 07
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Strict 3-Year Validity Window
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Sports Certificate Validity
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-4">
            <div className="lg:col-span-7">
              {/* Highlighted Warning/Info Card */}
              <div className="rounded-3xl border-2 border-amber-500/40 bg-amber-500/10 p-6 sm:p-8 space-y-4 shadow-md">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-display font-black text-lg sm:text-xl">
                  <AlertTriangle className="size-6 shrink-0" />
                  <span>Strict Preceding 3-Year Validity Window</span>
                </div>

                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  “Only sports certificates from the preceding three years are considered for evaluation under the DU sports quota.”
                </p>

                <div className="rounded-2xl bg-surface p-4 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Eligible Certificate Period for 2026–27 Admission Cycle:
                    </span>
                    <p className="font-display text-xl sm:text-2xl font-black text-foreground mt-1">
                      1 May 2023 <span className="text-neon">→</span> 30 April 2026
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="rounded-full bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30 px-3 py-1 text-xs font-bold">
                      Strict Cut-off
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-foreground/80 font-semibold">
                  “Certificates outside this validity period are not considered for preparation of the Combined Sports Merit (CSM) score.”
                </p>
                <p className="text-xs sm:text-sm text-foreground/80">
                  “For Categories B, C and D, the highest evaluated sports certificate is considered for the CSM score.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <InsightCard badge="SPORTS LIFE INSIGHT" title="Audit Your Certificate Profile Early">
                <p>
                  “Identifying your highest eligible certificate is one of the first steps in evaluating your DU sports quota profile. Do not wait until the CSAS portal opens in June. Audit tournament dates, certificate stamps, organizing federation credentials, and category levels months in advance.”
                </p>
              </InsightCard>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 8 & 9 — DU TENNIS SPORTS TRIAL & TRIAL DAY PROCESS */}
      <Section id="tennis-trials" className="scroll-mt-36 bg-surface/30 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/15 text-emerald-600 px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 08 & 09
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              50% Weightage · The Major Decider
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            DU Tennis Sports Trial — 50% Weightage
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-sm sm:text-base leading-relaxed text-foreground/85 space-y-3">
              <p className="text-lg font-bold text-foreground">
                “The DU tennis sports trial contributes 50% of the Combined Sports Merit (CSM) score and is evaluated on a maximum score of 400 marks.”
              </p>
              <p>
                “For tennis (dual sports), the trial is conducted by the Sports Admission Committee of the University, and candidates are assessed on their trial performance.”
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 flex items-start gap-3">
                <ShieldAlert className="size-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs text-foreground/80">
                  <strong className="text-foreground">Official Notice Regarding Observation Data: </strong>
                  The trial day workflow and marks analyses below are labeled as{" "}
                  <span className="font-bold text-amber-600 dark:text-amber-400">“Sports Life Observation — 2026 Trials”</span>. They represent Sports Life’s observational research and are NOT official DU rules.
                </div>
              </div>
            </div>
          </div>

          {/* Trial Day 3 Steps */}
          <div id="trial-day" className="scroll-mt-36 pt-4">
            <h3 className="font-display text-2xl font-black text-foreground mb-4">
              What Actually Happens on the Trial Day?
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-border/80 bg-surface p-6 shadow-sm hover:border-neon/40 transition-all">
                <span className="font-display text-3xl font-black text-neon">STEP 1</span>
                <h4 className="mt-3 font-display text-lg font-black text-foreground">
                  Player Reporting & Verification
                </h4>
                <p className="mt-2 text-xs text-foreground/80 leading-relaxed">
                  Candidates report in proper tennis kit with original certificates, CUET scorecard, CSAS registration slips, and photo IDs for physical verification.
                </p>
              </div>

              <div className="rounded-3xl border border-border/80 bg-surface p-6 shadow-sm hover:border-neon/40 transition-all">
                <span className="font-display text-3xl font-black text-neon">STEP 2</span>
                <h4 className="mt-3 font-display text-lg font-black text-foreground">
                  Preparation of Tournament Draw
                </h4>
                <p className="mt-2 text-xs text-foreground/80 leading-relaxed">
                  “Once the reporting process is completed, the tournament draw is prepared by the committee,” seeding top-ranked players and finalizing match schedules.
                </p>
              </div>

              <div className="rounded-3xl border border-border/80 bg-surface p-6 shadow-sm hover:border-neon/40 transition-all">
                <span className="font-display text-3xl font-black text-neon">STEP 3</span>
                <h4 className="mt-3 font-display text-lg font-black text-foreground">
                  Trial Match Play
                </h4>
                <p className="mt-2 text-xs text-foreground/80 leading-relaxed">
                  Commencement of live competitive trial matches. Candidates play knock-out rounds observed directly by appointed committee evaluators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 10 & 11 — DRAW SIZE, SEEDING & DURATION */}
      <Section id="trial-format" className="scroll-mt-36 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 10 & 11
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Draw Format & Schedule
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Draw Size & Seeding */}
            <div className="rounded-3xl border border-border/80 bg-surface p-7 sm:p-8 space-y-4 shadow-sm">
              <span className="inline-block rounded-full bg-neon/15 px-3 py-0.5 text-xs font-black uppercase tracking-wider text-neon">
                Draw Format & Seeding
              </span>
              <h3 className="font-display text-2xl font-black text-foreground">
                Draw Size and Seeding Rules
              </h3>
              <div className="text-sm text-foreground/85 space-y-3 leading-relaxed">
                <p>
                  “Based on Sports Life's observation of the 2026 trials, the draw was generally prepared in a <strong>32-player or 64-player format</strong> depending on the number of candidates.”
                </p>
                <p>
                  “Seeding is generally based on the player's <strong>AITA Men's/Women's ranking</strong>.”
                </p>
                <p>
                  “If a player does not have a current Men's or Women's ranking, the <strong>AITA Under-18 ranking</strong> may be considered for seeding purposes, while Men's/Women's AITA ranking receives first preference.”
                </p>
              </div>
              <div className="rounded-xl bg-surface-2/60 p-3 text-xs text-muted-foreground border border-border/60">
                *This represents Sports Life's observation and should not be treated as an official DU rule.
              </div>
            </div>

            {/* Duration of the Tennis Trial */}
            <div className="rounded-3xl border border-border/80 bg-surface p-7 sm:p-8 space-y-4 shadow-sm">
              <span className="inline-block rounded-full bg-neon/15 px-3 py-0.5 text-xs font-black uppercase tracking-wider text-neon">
                Trial Duration
              </span>
              <h3 className="font-display text-2xl font-black text-foreground">
                Duration of the Tennis Trial
              </h3>
              <div className="text-sm text-foreground/85 space-y-3 leading-relaxed">
                <p>
                  “Based on Sports Life's observation of the 2026 trials, the tennis trial was generally conducted over <strong>2–3 days</strong> depending on the size of the draw and number of participants.”
                </p>
                <p>
                  “Players progress through successive rounds, and their performance during the trial is evaluated by the committee.”
                </p>
                <p>
                  Players must manage stamina, hydration, and mental composure across consecutive high-stakes match days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 12 — 2026 TENNIS TRIAL MARKS ANALYSIS */}
      <Section id="trial-marks-analysis" className="scroll-mt-36 bg-surface/30 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-rose-500/15 text-rose-600 px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 12
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Observational Reference Analysis
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            2026 Tennis Trial Marks — Sports Life Analysis
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-foreground/85 max-w-4xl">
            Below is Sports Life’s reference analysis of estimated trial marks progression mapped out of 400 marks.
          </p>

          {/* Responsive Bar Chart */}
          <TrialChart />
        </div>
      </Section>

      {/* SECTION 13 — SPORTS TRIAL PREPARATION INSIGHTS */}
      <Section id="trial-preparation" className="scroll-mt-36 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 13
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Tactical Coaching Strategies
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Sports Life Trial Preparation Insights
          </h2>

          <div className="grid gap-8 md:grid-cols-2 my-6">
            {/* Card 1: Improve Your AITA Ranking */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-7 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Trophy className="size-5" />
                <span className="text-xs font-black uppercase tracking-wider">Strategy 01</span>
              </div>
              <h3 className="font-display text-2xl font-black text-foreground">
                Improve Your AITA Ranking
              </h3>
              <p className="text-sm text-foreground/85 leading-relaxed">
                “A better AITA Men's or Women's ranking can improve the chances of receiving a favourable seeding in the draw. Seeded players may avoid facing stronger competitors in the opening rounds.”
              </p>
              <p className="text-xs text-muted-foreground">
                Compete consistently in national circuit tournaments to build points well before Delhi University trial registrations commence.
              </p>
            </div>

            {/* Card 2: Prepare for Short-Format Match Play */}
            <div className="rounded-3xl border border-blue-500/30 bg-blue-500/5 p-7 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Zap className="size-5" />
                <span className="text-xs font-black uppercase tracking-wider">Strategy 02</span>
              </div>
              <h3 className="font-display text-2xl font-black text-foreground">
                Prepare for Short-Format Match Play
              </h3>
              <p className="text-sm text-foreground/85 leading-relaxed">
                “DU sports trials may involve short-format competitive matches where there is limited time to recover from a slow start.”
              </p>

              <div>
                <span className="text-xs font-black text-foreground uppercase tracking-wider block mb-2">
                  Preparation Suggestions:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/85">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-neon" />
                    <span>Practice short-format matches</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-neon" />
                    <span>Play different playing styles</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-neon" />
                    <span>Simulate match pressure</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-neon" />
                    <span>Focus on first-serve consistency</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-neon" />
                    <span>Aggressive return positioning</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-neon" />
                    <span>Fast tactical decision-making</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <span className="inline-block rounded-full bg-surface-2 px-4 py-1 text-xs font-extrabold text-muted-foreground border border-border/70">
              Label: Sports Life Experience / Observation
            </span>
          </div>
        </div>
      </Section>

      {/* SECTION 14 — KEY INSIGHTS: UNDERSTANDING THE REALITY */}
      <Section id="key-insights" className="scroll-mt-36 bg-surface/30 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 14
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Core Reality Check
            </span>
          </div>

          {/* Bold Visual Statement */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-neon/40 bg-linear-to-r from-neon/20 via-surface/95 to-neon/10 p-8 sm:p-14 text-center shadow-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-neon">
              Strategic Truth
            </span>
            <p className="mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight">
              “50% Sports Trial does not mean 50% of your preparation.”
            </p>

            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-foreground/85 leading-relaxed">
              The final Combined Sports Merit (CSM) is built through all three components:
            </p>

            <div className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-surface/90 px-6 py-3 border border-border shadow-sm text-sm sm:text-lg font-black font-display text-foreground">
              <span className="text-blue-500">CUET</span>
              <span>+</span>
              <span className="text-amber-500">Sports Certificates</span>
              <span>+</span>
              <span className="text-emerald-500">Sports Trial</span>
            </div>

            <div className="mt-6 max-w-4xl mx-auto text-xs sm:text-sm text-foreground/80 space-y-3 text-left bg-surface/80 p-6 rounded-2xl border border-border/60">
              <p>
                “Your tennis development, tournament planning and certificate profile need to be built well in advance. CUET preparation needs to be planned alongside your tennis journey. When the admission season arrives, you need to be ready to perform in the sports trial.”
              </p>
              <p className="font-black text-neon text-sm sm:text-base">
                “Prepare for the complete DU Sports Quota journey — not just the trial.”
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 15 — INTERACTIVE PREPARATION CHECKLIST */}
      <Section id="checklist" className="scroll-mt-36 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 15
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Personal Progress Tracker
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            DU Sports Quota Preparation Checklist
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-foreground/85 max-w-4xl">
            Review this 14-item checklist to evaluate your current readiness. You can tick or untick items as you complete your preparations.
          </p>

          <PreparationChecklist />
        </div>
      </Section>

      {/* SECTION 16 — CTA & CONSULTATION ENQUIRY FORM */}
      <Section id="enquire" className="scroll-mt-36 bg-surface/30 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 16
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Personalized Guidance
            </span>
          </div>

          {/* Consultation Form Component */}
          <EnquiryForm />
        </div>
      </Section>

      {/* SECTION 17 — WHY SPORTS LIFE IS SHARING THIS GUIDE */}
      <Section id="why-sports-life" className="scroll-mt-36 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 17
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Our Mission
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Why Sports Life Is Sharing This Guide
          </h2>

          <div className="rounded-3xl border border-border/80 bg-surface p-7 sm:p-10 space-y-4 shadow-sm text-sm sm:text-base text-foreground/85 leading-relaxed max-w-5xl">
            <p>
              “Our purpose in creating this guide is not simply to explain the rules. We want players and parents to understand the reality behind the numbers so they can make better decisions about their preparation.”
            </p>
            <p>
              “At Sports Life, our aim is to provide players and parents with clear, practical and honest information so that they can approach the DU Sports Quota process with better preparation and fewer avoidable mistakes.”
            </p>
            <div className="pt-3">
              <div className="inline-block rounded-2xl bg-linear-to-r from-neon/15 via-neon/5 to-transparent border border-neon/30 p-5 font-display font-black text-lg sm:text-xl text-foreground">
                “Plan early. Understand the system. Prepare every component.”
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQS SECTION */}
      <Section id="faqs" className="scroll-mt-36 bg-surface/30 border-b border-border/60">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neon/15 text-neon px-3 py-0.5 text-xs font-black uppercase tracking-wider">
              Section 18
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Common Questions Answered
            </span>
          </div>

          {/* 12 Accordion FAQs */}
          <FAQAccordion />
        </div>
      </Section>

      {/* SECTION 19 — DISCLAIMER & OFFICIAL SOURCES */}
      <Section id="disclaimer" className="scroll-mt-36">
        <div className="space-y-8">
          {/* Professional Disclaimer Box */}
          <div className="rounded-3xl border-2 border-border/80 bg-surface-2/60 p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-foreground font-display font-black text-base uppercase tracking-wider">
              <ShieldAlert className="size-5 text-amber-500" />
              <span>Important Disclaimer</span>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground space-y-2 leading-relaxed">
              <p>
                “This guide has been prepared by Sports Life Tennis Academy for educational and informational purposes only. The information provided is intended to help tennis players and parents better understand the Delhi University Sports Supernumerary Quota admission process.”
              </p>
              <p>
                “Admission policies, eligibility criteria, weightage, sports certificate evaluation, trial procedures and seat allocation are governed solely by the University of Delhi and may change from time to time.”
              </p>
              <p>
                “The trial marks analysis, score illustrations and examples presented in this guide are intended for explanatory purposes and should not be treated as official DU score sheets or guaranteed future benchmarks.”
              </p>
            </div>
          </div>

          {/* Official Sources Links */}
          <div className="rounded-3xl border border-border/80 bg-surface p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-neon/15 text-neon p-1">
                <CheckCircle2 className="size-4" />
              </span>
              <h3 className="font-display text-xl font-black text-foreground">
                Official Sources & Portals
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">
              Always refer to official University of Delhi notifications and bulletins for binding admission updates:
            </p>

            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <a
                href="https://admission.uod.ac.in/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between rounded-2xl border border-border/70 bg-surface-2/40 p-5 transition-all hover:border-neon hover:bg-neon/5 shadow-xs"
              >
                <div>
                  <span className="block text-xs sm:text-sm font-black text-foreground group-hover:text-neon transition-colors">
                    DU Admission Portal
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    admission.uod.ac.in
                  </span>
                </div>
                <ExternalLink className="size-4 text-muted-foreground group-hover:text-neon transition-colors shrink-0" />
              </a>

              <a
                href="https://admission.uod.ac.in/userfiles/downloads/UG-CSAS_26062026.pdf/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between rounded-2xl border border-border/70 bg-surface-2/40 p-5 transition-all hover:border-neon hover:bg-neon/5 shadow-xs"
              >
                <div>
                  <span className="block text-xs sm:text-sm font-black text-foreground group-hover:text-neon transition-colors">
                    DU CSAS UG Guidelines
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Official CSAS PDF Bulletin
                  </span>
                </div>
                <ExternalLink className="size-4 text-muted-foreground group-hover:text-neon transition-colors shrink-0" />
              </a>

              <a
                href="https://www.du.ac.in/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between rounded-2xl border border-border/70 bg-surface-2/40 p-5 transition-all hover:border-neon hover:bg-neon/5 shadow-xs"
              >
                <div>
                  <span className="block text-xs sm:text-sm font-black text-foreground group-hover:text-neon transition-colors">
                    University of Delhi
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    du.ac.in Main Website
                  </span>
                </div>
                <ExternalLink className="size-4 text-muted-foreground group-hover:text-neon transition-colors shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full bg-neon text-white shadow-xl hover:bg-neon/90 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronUp className="size-5" />
        </button>
      )}
    </div>
  );
}
