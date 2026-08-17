import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const heroImage = "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg";
const headshotImage = "/abhiney-kumar-headshot.jpg";
const nadalImage = "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg";
const khachanovImage = "/founder-gallery/abhiney-with-karen-khachanov.jpg";
const jofreImage = "/founder-gallery/abhiney-with-jofre-porta.jpg";
const courtsImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";

export const Route = createFileRoute("/about/meet-founder")({
  head: () => ({
    meta: [
      { title: "Meet the Founder — Abhiney Kumar | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Learn about Abhiney Kumar, International Tennis Coach, certified trainer, and founder of Sports Life Tennis Academy in Delhi.",
      },
      { property: "og:title", content: "Meet the Founder — Abhiney Kumar" },
      {
        property: "og:description",
        content:
          "Over 16 years of competitive tennis and international coaching in Spain, driving a player-first tennis ecosystem.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about/meet-founder" },
    ],
    links: [{ rel: "canonical", href: "/about/meet-founder" }],
  }),
  component: MeetFounderPage,
});

function MeetFounderPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Founder & Head Coach"
        title="Abhiney Kumar"
        body="International Tennis Coach, certified trainer, and passionate advocate for player-first athlete development in India."
        image={heroImage}
      />

      {/* Profile Overview */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-border bg-surface p-3 shadow-xl">
                <img
                  src={headshotImage}
                  alt="Abhiney Kumar — Founder of Sports Life Tennis Academy"
                  className="aspect-4/5 w-full rounded-2xl object-cover object-top"
                />
                <div className="mt-4 rounded-xl bg-linear-to-r from-neon/15 via-electric/10 to-transparent p-4">
                  <p className="font-display text-lg font-bold text-foreground">Abhiney Kumar</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neon">
                    Founder & Head Coach · Sports Life
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-surface border border-border px-2.5 py-1 text-muted-foreground font-medium">
                      16+ Years Experience
                    </span>
                    <span className="rounded-full bg-surface border border-border px-2.5 py-1 text-muted-foreground font-medium">
                      International Coach
                    </span>
                    <span className="rounded-full bg-surface border border-border px-2.5 py-1 text-muted-foreground font-medium">
                      NIS · PTR · AITA-ITF
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <SectionHeading
              eyebrow="Who is Abhiney Kumar?"
              title="A Lifelong Commitment to the Sport"
            />
            <div className="space-y-4 text-base leading-relaxed text-foreground/85 lg:text-lg">
              <p>
                Abhiney Kumar is an International Tennis Coach, certified trainer, and the Founder
                of Sports Life Tennis Academy. With over 16 years of competitive tennis experience
                and extensive international coaching exposure in Spain, he has dedicated his career
                to developing not just better tennis players, but better individuals.
              </p>
              <p>
                His journey in tennis started at age 4, when he first picked up a racket. What began
                as a childhood passion evolved into a lifelong commitment to the sport—as a player,
                as an observer, and ultimately, as a coach who believes deeply in the power of
                structured development and player-first coaching.
              </p>
              <div className="rounded-2xl border border-neon/30 bg-neon/5 p-5 text-sm sm:text-base text-foreground/90 font-medium">
                “Every decision we make starts with one fundamental question: What is best for this
                player's long-term growth?”
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* His Journey */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="The Background"
          title="From Competitive Player to Global Coach"
          body="How diverse experiences across India and Europe shaped Abhiney's coaching philosophy."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-neon/15 text-neon mb-5">
                  <Trophy className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">From Player to Coach</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Abhiney's competitive playing career gave him firsthand insights into what young
                  athletes truly need—not just technical instruction, but discipline, mental
                  resilience, tactical intelligence, and consistent tournament exposure.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-neon">
                Competitive Insight
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-electric/15 text-electric mb-5">
                  <Globe2 className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">International Exposure</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  His training and coaching stints in Spain at world-class academies (including Rafa
                  Nadal Academy, JC Ferrero Equelite, and Jofre Porta) exposed him to modern European
                  methodologies, biomechanics, and structured player pathways.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-electric">
                European Methodology
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-neon/15 text-neon mb-5">
                  <Sparkles className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Bridging the Gap</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Returning to India, he identified that many talented players had enormous passion
                  but lacked structured pathways, multi-surface facilities, and long-term planning.
                  This inspired the founding of Sports Life Tennis Academy in 2024.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-neon">
                The Sports Life Vision
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Photo Highlights from Spain & Professional Circles */}
      <Section>
        <SectionHeading
          eyebrow="Global Experience"
          title="International Experience & Mentorship"
          body="Insights gathered from world-renowned tennis coaches and top-ranked ATP tour professionals."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={nadalImage}
              alt="Abhiney Kumar at Rafa Nadal Tennis Academy"
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4">
              <p className="font-semibold text-foreground text-sm">Rafa Nadal Tennis Academy</p>
              <p className="text-xs text-muted-foreground mt-1">
                Studying high-intensity Spanish clay court drills and physical conditioning systems.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={jofreImage}
              alt="Abhiney Kumar with Jofre Porta"
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4">
              <p className="font-semibold text-foreground text-sm">With Jofre Porta</p>
              <p className="text-xs text-muted-foreground mt-1">
                Mentorship from legendary coach who trained world No. 1 players in Spain.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={khachanovImage}
              alt="Abhiney Kumar with Karen Khachanov"
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4">
              <p className="font-semibold text-foreground text-sm">With Karen Khachanov</p>
              <p className="text-xs text-muted-foreground mt-1">
                Engaging with former ATP World No. 8 and Olympic silver medalist.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications & Credentials */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Accreditations"
          body="Rigorous professional credentials ensuring the highest coaching standards."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Diploma — J.C. Ferrero Academy",
              desc: "Diploma from J.C. Ferrero Tennis Academy (Equelite), Spain.",
              icon: Globe2,
            },
            {
              title: "NIS Certified Coach",
              desc: "National Institute of Sports qualification in sports coaching.",
              icon: GraduationCap,
            },
            {
              title: "PTR Certified Coach",
              desc: "Professional Tennis Registry international coach certification.",
              icon: Award,
            },
            {
              title: "AITA-ITF Certified Coach",
              desc: "All India Tennis Association & International Tennis Federation credentials.",
              icon: ShieldCheck,
            },
            {
              title: "16+ Years Experience",
              desc: "Over a decade and a half of competitive playing and high-performance coaching.",
              icon: Medal,
            },
            {
              title: "SAI Khelo India Contributor",
              desc: "Contributed to the tennis talent induction protocol for Khelo India.",
              icon: BookOpen,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card-elevated flex items-start gap-4 p-5 transition-all hover:border-neon/50"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-neon/15 text-neon">
                <item.icon className="size-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base">{item.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground mt-1.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Player-First Coaching */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Philosophy"
              title="Why Player-First Coaching?"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                For Abhiney, the player is never secondary. Every training session, every coaching
                decision, and every opportunity created at Sports Life is filtered through one
                question: <strong className="text-foreground">What is best for this player's long-term growth?</strong>
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "Personalized coaching plans tailored to each player's individual goals and stage.",
                  "Focus on sustainable, consistent development rather than temporary short-term shortcuts.",
                  "Building confidence, resilience, and character alongside crisp technical strokes.",
                  "Creating regular competitive match play opportunities across multiple court surfaces.",
                  "Listening to player and parent feedback to continuously adapt training routines.",
                  "Treating every player with utmost respect and actively believing in their potential.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-neon mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground/85">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <img
                src={courtsImage}
                alt="Tennis training at Sports Life"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="rounded-2xl border border-neon/30 bg-surface p-6">
              <p className="font-display text-sm font-bold uppercase tracking-wider text-neon">
                Abhiney's Vision for Indian Tennis
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                “We don't simply aim to produce tournament winners. We aim to build self-confident,
                disciplined, and resilient individuals who carry the spirit of tennis into every
                walk of life.”
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Meet Abhiney & The Team"
        body="Experience our player-first coaching approach firsthand with a free skill assessment and centre tour."
      />
    </>
  );
}
