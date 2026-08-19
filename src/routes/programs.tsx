import { createFileRoute } from "@tanstack/react-router";
import { PROGRAMS } from "@/lib/site-data";
import { CtaLink } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion-primitives";
import { CtaBanner, PageHero, Section, SectionHeading } from "@/components/site/sections";
import { CheckCircle2, Sparkles, Trophy } from "lucide-react";

const heroImg = "/centre-gallery/whatsapp-20260813-171744-1.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Tennis Programs — Toddlers to Advanced & Performance | Sports Life" },
      {
        name: "description",
        content:
          "Structured player-first tennis programs: Toddlers (4–6 Yrs), Beginners, Semi-Intermediate, Intermediate, Advanced & Performance, and Adult Tennis across Delhi.",
      },
      { property: "og:title", content: "Coaching Programs — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "From a child holding a racquet for the first time to competitive athletes striving for tournament excellence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/programs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Structured Player Development"
        body="At Sports Life Tennis Academy, we believe every player learns and develops at their own pace. Our programs are carefully designed to provide the right coaching, environment and challenges at every stage of development."
        image={heroImg}
      />

      <Section>
        <SectionHeading
          eyebrow="Our Programs"
          title="Designed for Long-Term Athlete Success"
          body="From a child holding a racquet for the very first time to competitive athletes striving for excellence, every program follows a structured development pathway focused on long-term success."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="card-elevated flex h-full flex-col justify-between p-7 sm:p-8 border border-border/80 bg-surface">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-neon/10 border border-neon/30 px-3 py-1 font-display text-[10px] font-black uppercase tracking-wider text-neon">
                      {p.level}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">{p.duration}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                    {p.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-foreground/85 font-medium">
                        <CheckCircle2 className="size-3.5 text-neon shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {p.perfectFor && (
                    <div className="mt-4 rounded-xl bg-surface-2/70 border border-border/60 p-3 text-xs">
                      <span className="font-bold text-foreground">Perfect for: </span>
                      <span className="text-muted-foreground">{p.perfectFor}</span>
                    </div>
                  )}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-border/80 pt-4">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {p.slug === "sunday-match-play" ? "Weekly League" : "Regular Program"}
                  </span>
                  <CtaLink to="/contact" variant="neon" className="px-4 py-2 text-[11px]">
                    Book Trial
                  </CtaLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Development Stages"
          title="How Our Coaching Pathway Works"
          body="Clear progression stages ensuring players continuously build technique, match intelligence, and confidence."
          align="center"
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Assessment & Placement",
              desc: "A first session where coaches assess age, hand-eye coordination, movement, and individual goals.",
            },
            {
              step: "02",
              title: "Foundation & Consistency",
              desc: "Developing stroke biomechanics, grips, footwork, and structured point play.",
            },
            {
              step: "03",
              title: "Sunday Match Play",
              desc: "Applying skills in regular competitive match play to build tactical composure and resilience.",
            },
            {
              step: "04",
              title: "Tournament & Long-term Growth",
              desc: "Dedicated tournament preparation, tactical planning, fitness conditioning, and player pathway guidance.",
            },
          ].map((s, i) => (
            <Reveal key={s.step} delay={i * 0.07}>
              <li className="card-elevated h-full p-6 sm:p-7 border border-border bg-surface flex flex-col justify-between">
                <div>
                  <span className="font-display text-4xl font-black text-neon/40">{s.step}</span>
                  <h4 className="mt-3 text-lg font-bold text-foreground">{s.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaBanner
        title="Begin Your Tennis Journey"
        body="Experience our player-first coaching in person. Book a free skill assessment session across Roshanara Club, Major Dhyan Chand Complex & Punjabi Bagh Club."
      />
    </>
  );
}
