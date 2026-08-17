import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import {
  AlertCircle,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Flame,
  Layers,
  MapPin,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171744-2.jpg";
const matchAction1 = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const matchAction2 = "/centre-gallery/whatsapp-20260813-171844-3.jpg";
const courtsSurfaceImage = "/centre-gallery/punjabi-bagh-club-gallery-1.jpg";

export const Route = createFileRoute("/initiatives/sunday-match-play")({
  head: () => ({
    meta: [
      { title: "Sunday Match Play Initiative | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Weekly Sunday Match Play program by Sports Life Tennis Academy. Structured, rating-based competitive matches across Delhi for juniors and adults with certified coach debriefs.",
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
        body="Practice builds technique; matches build competitors. A structured weekly competitive platform designed to bridge the gap between training and tournament victory."
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
          <div className="card-elevated border-destructive/30 bg-destructive/5 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="size-6" />
              <span className="font-bold uppercase tracking-wider text-xs">The Problem</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-foreground">The Tournament Gap</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Without regular, simulated match exposure, players develop technical strokes but fail
              to handle:
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
                <span>Lack of experience against varied styles (pushers, aggressive baseliners)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive font-bold">✕</span>
                <span>Unforced errors during third-set tiebreaks</span>
              </li>
            </ul>
          </div>

          {/* Our Solution */}
          <div className="card-elevated border-neon/40 bg-neon/5 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-neon">
              <Sparkles className="size-6" />
              <span className="font-bold uppercase tracking-wider text-xs">Our Solution</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-foreground">Structured Sunday Match Play</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A weekly tournament-simulated initiative ensuring every athlete receives competitive
              pressure in an encouraging, coach-supervised environment:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              <li className="flex items-center gap-2">
                <span className="text-neon font-bold">✓</span>
                <span>Rating & skill-based grouping (equal, challenging opponents)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon font-bold">✓</span>
                <span>Multiple short-format matches (fast-paced competitive volume)</span>
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

      {/* Why Match Play Matters */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Pillars of Growth"
          title="Why Regular Match Play Accelerates Development"
          body="5 core competitive competencies built through weekly match exposure."
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
              desc: "Gain exposure against left-handers, slice defenders, net rushers, and big servers before official AITA events.",
            },
            {
              icon: Zap,
              title: "Match Fitness & Movement",
              desc: "Develop split-step habits, recovery footwork, and cardiovascular endurance that practice alone cannot replicate.",
            },
            {
              icon: Trophy,
              title: "Clear Rating Benchmarking",
              desc: "Track weekly wins, tiebreak conversions, and developmental progress with structured coach feedback cards.",
            },
            {
              icon: Users,
              title: "Positive Competitive Culture",
              desc: "Foster sportsmanship, umpire etiquette, and healthy peer camaraderie in a vibrant academy community.",
            },
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
                    <item.icon className="size-5" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Step-by-Step: How It Works */}
      <Section>
        <SectionHeading
          eyebrow="Step by Step"
          title="How Sunday Match Play Works"
          body="A seamless weekly workflow ensuring every registered athlete gets optimal match practice."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Register Online",
              desc: "Complete the weekly registration form indicating your age category, current level, and preferred centre.",
              icon: Calendar,
            },
            {
              step: "02",
              title: "Skill Grouping",
              desc: "Our coaching committee reviews player profiles and matches players with evenly matched opponents.",
              icon: Layers,
            },
            {
              step: "03",
              title: "Compete On Court",
              desc: "Play 2 to 4 competitive short-format or full pro-set matches under proper tennis rules and scoring.",
              icon: Swords,
            },
            {
              step: "04",
              title: "Coach Feedback",
              desc: "Receive actionable tactical and mental notes from Head Coaches to focus on during next week's training.",
              icon: MessageSquareQuote,
            },
          ].map((s, i) => (
            <div key={i} className="card-elevated p-6 flex flex-col justify-between">
              <div>
                <span className="font-display text-3xl font-extrabold text-neon/40">{s.step}</span>
                <h4 className="mt-3 font-bold text-lg text-foreground">{s.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-5 border-t border-border pt-3">
                <span className="text-[11px] font-semibold text-neon uppercase tracking-wider">Phase {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Venues & Surfaces Showcase */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Multi-Surface Advantage"
              title="Held Across 3 Premier Centres"
              body="Players experience different bounce heights, speeds, and footwork requirements across synthetic, clay, and grass courts."
            />

            <div className="space-y-3">
              <div className="rounded-xl border border-border bg-surface p-4 flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-neon mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">Roshanara Club (North Delhi)</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    4 Synthetic Courts · 2 Clay Courts · 3 Grass Courts. Matches across all 3 surfaces.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-electric mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">Major Dhyan Chand Complex (Ashok Vihar)</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    6 Synthetic Courts · 7 Clay Courts. High-intensity competitive draw matches.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-neon mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">Punjabi Bagh Club (West Delhi)</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    4 Synthetic Courts · 1 Clay Court. Junior & Adult Sunday competitive rotations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={matchAction1}
                alt="Match play action"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={matchAction2}
                alt="Sunday match play group"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Program Details Box */}
      <Section>
        <div className="rounded-3xl border border-neon/30 bg-surface p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neon">Who Can Join</span>
              <h3 className="mt-2 text-2xl font-bold text-foreground">Open to All Players</h3>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Open to Sports Life Academy enrolled students as well as guest players from other
                academies across Delhi NCR seeking quality match practice.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neon">Age Brackets</span>
              <h3 className="mt-2 text-2xl font-bold text-foreground">Structured Groups</h3>
              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                <li>• Under-10 & Under-12 (Orange/Green/Yellow Ball)</li>
                <li>• Under-14 & Under-16 Junior Circuit</li>
                <li>• High-Performance / AITA Tournament Squad</li>
                <li>• Adult & Senior Weekend Competitive Batch</li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neon">Schedule & Venue</span>
              <h3 className="mt-2 text-2xl font-bold text-foreground">Every Sunday</h3>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Morning & Evening slots allocated according to category. Reporting schedules sent
                24 hours prior to match day.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Register for This Sunday's Match Play"
        body="Reserve your match slot. Experience real tournament conditions with certified coaching feedback."
      />
    </>
  );
}
