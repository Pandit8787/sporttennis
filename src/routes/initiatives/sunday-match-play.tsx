import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Flame,
  MapPin,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const heroImage = "/centre-gallery/img_8064.jpg";
const matchAction1 = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const matchAction2 = "/centre-gallery/whatsapp-20260813-171844-3.jpg";
const punjabiBaghProGroupImage = "/centre-gallery/img_8064.jpg";

export const Route = createFileRoute("/initiatives/sunday-match-play")({
  head: () => ({
    meta: [
      { title: "Sunday Match Play Initiative | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Weekly Sunday Match Play program by Sports Life Tennis Academy. Structured competitive matches across Delhi for players with certified coach debriefs.",
      },
      { property: "og:title", content: "Sunday Match Play — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Practice builds technique; matches build competitors. Weekly tournament-style match play across Delhi.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/initiatives/sunday-match-play" },
    ],
    links: [{ rel: "canonical", href: "/initiatives/sunday-match-play" }],
  }),
  component: SundayMatchPlay,
});

function SundayMatchPlay() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Signature Initiative"
        title="Sunday Match Play"
        body="Practice builds technique; matches build competitors. A structured weekly competitive platform designed to bridge the gap between weekday drills and tournament victory."
        image={heroImage}
      />

      {/* Problem vs Solution Section */}
      <Section>
        <SectionHeading
          eyebrow="The Missing Link"
          title="Why Practice Alone Isn't Enough"
          body="Many players spend hundreds of hours rallying during weekday training, yet struggle under pressure in district or state tournaments."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* The Problem */}
          <div className="card-elevated border-destructive/30 bg-destructive/5 p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="size-6" />
              <span className="font-bold uppercase tracking-wider text-xs">The Problem</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-foreground">The Tournament Gap</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Without regular, simulated match exposure, players develop technical strokes but struggle to handle:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <span className="text-destructive font-bold">✕</span>
                <span>Anxiety and tight swings on crucial break points</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive font-bold">✕</span>
                <span>Poor shot selection when trailing or fatigued</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive font-bold">✕</span>
                <span>Lack of experience against varied styles and high-pressure situations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive font-bold">✕</span>
                <span>Unforced errors during third-set tiebreaks</span>
              </li>
            </ul>
          </div>

          {/* Our Solution */}
          <div className="card-elevated border-neon/40 bg-neon/5 p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-2 text-neon">
              <Sparkles className="size-6" />
              <span className="font-bold uppercase tracking-wider text-xs">Our Solution</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-foreground">Structured Sunday Match Play</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A weekly tournament-simulated initiative ensuring every athlete receives competitive pressure in an encouraging, coach-supervised environment:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              <li className="flex items-center gap-2">
                <span className="text-neon font-bold">✓</span>
                <span>Challenging, level-appropriate competitive match play</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon font-bold">✓</span>
                <span>Multiple short-format matches (high competitive volume)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon font-bold">✓</span>
                <span>Instant on-court coach debriefs between matches</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon font-bold">✓</span>
                <span>Multi-surface adaptability (Synthetic, Clay & Grass courts)</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Featured Photo: Professional Players at Punjabi Bagh Club */}
      <Section className="bg-surface/30">
        <div className="max-w-5xl mx-auto space-y-6">
          <SectionHeading
            align="center"
            eyebrow="On-Court Action"
            title="Professional Players at Punjabi Bagh Club"
            body="Competitive intensity and structured match play in action across our premier Delhi facilities."
          />
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={punjabiBaghProGroupImage}
              alt="Professional players training and competing at Punjabi Bagh Club"
              className="w-full h-[400px] sm:h-[500px] object-cover object-center"
            />
          </div>
        </div>
      </Section>

      {/* Pillars of Growth */}
      <Section>
        <SectionHeading
          eyebrow="Pillars of Growth"
          title="Why Regular Match Play Accelerates Development"
          body="Core competitive competencies built through weekly match exposure."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Flame,
              title: "Mental Toughness & Composure",
              desc: "Learn to stay calm under pressure, execute high-percentage second serves, and fight back from deficit situations.",
            },
            {
              icon: Target,
              title: "Tactical Shot Selection",
              desc: "Move past mechanical hitting into strategic point construction—changing pace, depth, and court angles intelligently.",
            },
            {
              icon: Swords,
              title: "Opponent Style Adaptability",
              desc: "Gain exposure against different playing styles, defenders, net rushers, and big servers before official tournaments.",
            },
            {
              icon: Trophy,
              title: "Tournament Composure",
              desc: "Eliminate match-day nervousness by normalizing competitive pressure every single weekend.",
            },
            {
              icon: Users,
              title: "Coach Feedback & Debriefs",
              desc: "Immediate tactical feedback after each match allows players to identify areas for improvement in upcoming weekday training.",
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.06}>
              <div className="card-elevated h-full p-6 sm:p-7 border border-border bg-surface rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
                    <item.icon className="size-5" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      
    </>
  );
}
