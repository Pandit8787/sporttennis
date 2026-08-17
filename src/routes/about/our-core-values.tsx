import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Heart,
  HeartHandshake,
  Lightbulb,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171845-1.jpg";
const excellenceImage = "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg";
const integrityImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";
const playerFirstImage = "/centre-gallery/whatsapp-20260813-171744-2.jpg";
const disciplineImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const learningImage = "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg";

export const Route = createFileRoute("/about/our-core-values")({
  head: () => ({
    meta: [
      { title: "Our Core Values | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "The core values that guide everything we do at Sports Life Tennis Academy—excellence, integrity, player-first, discipline, and continuous learning.",
      },
      { property: "og:title", content: "Our Core Values — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Principles that guide our coaches, players, and programs across all 3 Delhi centres.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about/our-core-values" },
    ],
    links: [{ rel: "canonical", href: "/about/our-core-values" }],
  }),
  component: OurCoreValuesPage,
});

function OurCoreValuesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Core Values"
        title="Principles That Guide Everything"
        body="The foundation of our culture, coaching methodology, and commitment to every player and family."
        image={heroImage}
      />

      {/* Intro */}
      <Section>
        <SectionHeading
          eyebrow="Our Guiding North Star"
          title="Values Lived Daily On & Off Court"
          body="Our core values define who we are and shape every training session, coaching decision, and community interaction."
        />

        <div className="mt-6 text-base leading-relaxed text-foreground/85 lg:text-lg">
          <p>
            At Sports Life Tennis Academy, our values are not just words on a wall—they are lived
            daily by our coaches, reflected in our player development pathways, and demonstrated
            through our actions. They ensure every athlete is nurtured in an environment of respect,
            relentless growth, and integrity.
          </p>
        </div>
      </Section>

      {/* Value 1: Excellence */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={excellenceImage}
              alt="Excellence in tennis coaching standards"
              className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon uppercase tracking-wider">
              <Trophy className="size-3.5" />
              Value 01
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">Excellence</h3>
            <p className="text-base font-semibold text-neon">
              We strive for excellence in everything we do
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Excellence is not an accident—it is a continuous habit. We maintain the highest
              standards across coaching methodology, facility infrastructure, court maintenance, and
              athlete feedback. We never settle for "good enough."
            </p>
            <ul className="space-y-2 pt-2 text-sm text-foreground/85">
              {[
                "Certified, internationally experienced coaching staff",
                "Meticulously maintained synthetic, clay, and grass courts",
                "Structured lesson plans with clear measurable outcomes",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-neon font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Value 2: Integrity */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-electric/15 px-3 py-1 text-xs font-bold text-electric uppercase tracking-wider">
              <ShieldCheck className="size-3.5" />
              Value 02
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">Integrity</h3>
            <p className="text-base font-semibold text-electric">
              Honesty, transparency, and accountability in everything
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Integrity means doing the right thing, especially when no one is watching. We believe
              in transparent communication with parents, objective evaluations of player progress,
              and fair treatment of every student on our courts.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-foreground/85">
              {[
                "Honest, realistic assessments of player capabilities and tournament readiness",
                "Transparent program pathways and tournament advisory",
                "Accountability for coaching decisions and commitments",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-electric font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg order-1 lg:order-2">
            <img
              src={integrityImage}
              alt="Integrity and fair coaching"
              className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </Section>

      {/* Value 3: Player First */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={playerFirstImage}
              alt="Player first development approach"
              className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon uppercase tracking-wider">
              <Heart className="size-3.5" />
              Value 03
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">Player First</h3>
            <p className="text-base font-semibold text-neon">
              Every decision starts with what is best for the player
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We don't fit players into rigid formulas. We design customized coaching plans based on
              each player's unique mechanics, personality, schedule, and aspirations. Long-term
              growth always takes priority over quick, unsustainable shortcuts.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-foreground/85">
              {[
                "Tailored coaching plans based on age, level, and individual biomechanics",
                "Focus on long-term athletic longevity and injury prevention",
                "Personalized match scheduling and post-match video debriefs",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-neon font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Value 4: Discipline */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-electric/15 px-3 py-1 text-xs font-bold text-electric uppercase tracking-wider">
              <Zap className="size-3.5" />
              Value 04
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">Discipline</h3>
            <p className="text-base font-semibold text-electric">
              Consistent effort and strong habits build champions
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Discipline is the bridge between goals and accomplishment. We instill punctuality,
              court etiquette, focused practice routines, and mental resilience so players build
              habits that serve them for life.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-foreground/85">
              {[
                "Punctuality and structured warm-up/cool-down rituals",
                "High-intensity drills requiring total concentration",
                "Respect for umpires, opponents, coaches, and court equipment",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-electric font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg order-1 lg:order-2">
            <img
              src={disciplineImage}
              alt="Discipline on the tennis court"
              className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </Section>

      {/* Value 5: Continuous Learning */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={learningImage}
              alt="Continuous learning and coach education in Spain"
              className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon uppercase tracking-wider">
              <Lightbulb className="size-3.5" />
              Value 05
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">Continuous Learning</h3>
            <p className="text-base font-semibold text-neon">
              We embrace innovation and ongoing development
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Modern tennis evolves constantly. We continuously invest in coach education, global
              masterclasses, sports science, video analytics, and new training methodologies to ensure
              our players always have a competitive edge.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-foreground/85">
              {[
                "Regular coach workshops and certification upgrades",
                "Global Learning Initiatives with international tennis experts",
                "Incorporating modern tactical trends and physical conditioning",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-neon font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Values Summary Grid */}
      <Section>
        <SectionHeading
          eyebrow="Summary"
          title="Our Values in Action"
          body="How these core values translate into everyday standards across our academy."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Excellence",
              desc: "World-class coaching standards, 27 tournament courts, and pristine facilities.",
            },
            {
              title: "Integrity",
              desc: "Honest feedback, transparent progress reports, and fair play always.",
            },
            {
              title: "Player First",
              desc: "Individualized development roadmaps centered around long-term growth.",
            },
            {
              title: "Discipline",
              desc: "Structured practice routines, punctuality, and competitive composure.",
            },
            {
              title: "Continuous Learning",
              desc: "Ongoing coach education, international masterclasses, and modern methods.",
            },
            {
              title: "Respect & Community",
              desc: "Mutual respect between players, parents, and coaches fostering a tight-knit family.",
            },
          ].map((item, i) => (
            <div key={i} className="card-elevated p-6">
              <span className="text-xs font-bold text-neon uppercase tracking-wider">Pillar {i + 1}</span>
              <h4 className="mt-2 text-lg font-bold text-foreground">{item.title}</h4>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Experience Our Values Firsthand"
        body="Join a community dedicated to excellence, integrity, and your child's long-term tennis growth."
      />
    </>
  );
}
