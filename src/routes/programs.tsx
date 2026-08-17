import { createFileRoute } from "@tanstack/react-router";
const shuttleImg =
  "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1920&q=80";
import { PROGRAMS } from "@/lib/site-data";
import { CtaLink } from "@/components/site/layout";
import { Reveal } from "@/components/site/motion-primitives";
import { CtaBanner, PageHero, Section, SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Tennis Programs — From Toddlers to High Performance" },
      {
        name: "description",
        content:
          "Structured tennis programs for toddlers, beginners, intermediate players, advanced competitors, adults and performance athletes.",
      },
      { property: "og:title", content: "Coaching Programs at Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Structured pathways from a first grip lesson to a full-time residential elite squad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/programs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: PROGRAMS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
            description: p.summary,
          })),
        }),
      },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="A structured pathway for every stage"
        body="Choose the program that fits your age, experience and goals. Every player follows a development path designed for long-term growth, including weekly coaching and structured match-play opportunities."
        image={shuttleImg}
      />

      <Section>
        <SectionHeading
          eyebrow="Our Player Development Programs"
          title="A Structured Pathway for Every Stage of the Tennis Journey"
          body="At Sports Life Tennis Academy, we believe every player learns and develops at their own pace. Our programs are carefully designed to provide the right coaching, environment and challenges at every stage of development. From a child holding a racquet for the very first time to competitive athletes striving for excellence, every program follows a structured development pathway focused on long-term success."
        />

        <div className="mt-8 space-y-6 text-foreground/80">
          <div>
            <h4 className="text-xl font-semibold">Toddlers Tennis (4–6 Years)</h4>
            <p className="mt-2 text-sm">Building a Love for Tennis Through Fun & Movement. Our Toddlers Program introduces young children to tennis through engaging activities that develop coordination, balance, agility, and confidence in a fun and supportive environment. Perfect for: Children aged 4–6 years.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Beginners Program</h4>
            <p className="mt-2 text-sm">The Perfect First Step Into Tennis. Designed for players with little or no previous experience, this program focuses on developing the fundamental techniques, correct grip, footwork, coordination, and basic rallying skills while making learning enjoyable. Perfect for: Children and adults starting their tennis journey.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Semi-Intermediate Program</h4>
            <p className="mt-2 text-sm">Building Confidence & Consistency. As players become comfortable with the fundamentals, this program focuses on improving consistency, movement, shot selection, and match awareness while introducing more structured training and point play. Perfect for: Players with basic tennis knowledge looking to improve their game.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Intermediate Program</h4>
            <p className="mt-2 text-sm">Taking Your Game to the Next Level. This program develops advanced technical skills, tactical understanding, match strategy, physical conditioning, and competitive confidence through structured coaching and regular match play. Perfect for: Players preparing for competitive tennis.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Advanced & Performance</h4>
            <p className="mt-2 text-sm">Preparing Competitive Players for Success. Our Advanced Program and Performance Batch focus on high-intensity training, tournament preparation, tactical planning, match analysis and long-term athlete development. Perfect for competitive players aiming for district, state, national and international competition.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Adult Tennis Program</h4>
            <p className="mt-2 text-sm">It's Never Too Late to Start Playing. Whether you're picking up a racquet for the first time, returning to tennis after years away, or looking to improve your game, our Adult Tennis Program provides a welcoming and professional environment for players of all abilities. Perfect for: Beginners, recreational players, and competitive adults.</p>
          </div>

          <p className="mt-4 text-sm">Not sure which program is the best fit? Our coaching team will assess your age, experience, playing level, and goals before recommending the most suitable program, ensuring every player begins their journey in the right environment. Book a Trial Session and take the first step towards achieving your tennis goals.</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="card-elevated flex h-full flex-col p-8 lg:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="font-display text-xs tracking-[0.2em] text-neon uppercase">
                      {p.level}
                    </span>
                    <h2 className="mt-3 text-3xl lg:text-4xl">{p.name}</h2>
                  </div>
                  <span className="font-display text-lg whitespace-nowrap text-gradient">
                    {p.price}
                  </span>
                </div>

                <p className="mt-5 text-muted-foreground">{p.summary}</p>

                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-neon" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <span className="text-sm text-muted-foreground">{p.duration}</span>
                  <CtaLink to="/contact" variant="ghost" className="px-5 py-2.5">
                    Enquire
                  </CtaLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="How joining works"
          title="How joining works"
          align="center"
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Free trial",
              b: "A first session where a coach understands your experience level, goals and preferred schedule.",
            },
            {
              t: "Program recommendation",
              b: "We match you to the right program based on age, skill level and development goals.",
            },
            {
              t: "Structured onboarding",
              b: "Your session plan, training rhythm and match-play opportunities are set up for steady progress.",
            },
            { t: "Regular progression", b: "Training begins and continues with consistent coaching, reviews and competitive support." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 0.07}>
              <li className="card-elevated h-full p-7">
                <span className="font-display text-4xl text-electric/40">0{i + 1}</span>
                <h3 className="mt-3 text-xl">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaBanner
        title="Not sure which program is right?"
        body="Book a trial session and our coaches will recommend the best fit for your age, level and goals."
      />
    </>
  );
}
