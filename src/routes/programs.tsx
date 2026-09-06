import { createFileRoute } from "@tanstack/react-router";
import { PROGRAMS } from "@/lib/site-data";
import { CtaLink } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion-primitives";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
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
        removeFog
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
                  <h3 className="text-2xl font-bold text-foreground">
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


                    </div>
                  )}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-border/80 pt-4">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {p.slug === ""}
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




    </>
  );
}
