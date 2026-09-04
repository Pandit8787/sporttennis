import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Activity,
  Award,
  CheckCircle2,
  Compass,
  Dumbbell,
  Eye,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  BookOpen,
  Heart,
  Lightbulb,
  Scale,
  Shield,
  Zap,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";
const visionActionImage = "/about/tennis-ecosystem-20250425.jpg";
const developmentImage = "/centre-gallery/whatsapp-20260813-171844-3.jpg";
const courtsImage = "/centre-gallery/whatsapp-20260813-171745-1.jpg";

// Core values images
const excellenceImage = "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg";
const integrityImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";
const playerFirstImage = "/centre-gallery/whatsapp-20260813-171744-2.jpg";
const disciplineImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const learningImage = "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg";

export const Route = createFileRoute("/about/our-vision-mission")({
  head: () => ({
    meta: [
      { title: "Our Vision, Mission & Values | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Understanding the vision, mission, and core values that drive Sports Life Tennis Academy's commitment to holistic player development across Delhi.",
      },
      { property: "og:title", content: "Our Vision, Mission & Values — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Building India's most trusted and player-focused tennis ecosystem across multiple court surfaces.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about/our-vision-mission" },
    ],
    links: [{ rel: "canonical", href: "/about/our-vision-mission" }],
  }),
  component: OurVisionMissionPage,
});

function OurVisionMissionPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Vision, Mission & Values"
        title="What Drives Us Forward"
        body="Building India's most trusted and respected tennis organization through structured coaching, core values, and holistic player development."
        image={heroImage}
        removeFog
      />

      {/* Vision Statement */}
      <Section>
        <SectionHeading
          eyebrow="Our Vision"
          title="Building India's Most Trusted Tennis Ecosystem"
          body="Empowering every player to learn, grow, compete, and achieve their highest potential on and off the court."
        />

        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85 lg:text-lg">
          <div className="rounded-2xl border border-neon/30 bg-linear-to-r from-neon/10 via-neon/5 to-transparent p-6 sm:p-8">
            <p className="font-display text-lg font-bold text-foreground sm:text-xl lg:text-2xl leading-snug">
              “At Sports Life, our vision is to build one of India's most trusted and respected tennis
              organizations by creating an environment where every player has the opportunity to learn,
              grow, compete, and achieve their highest potential.”
            </p>
          </div>

          <p>
            We believe that tennis is not just about developing better athletes—it is about
            developing better individuals. Through discipline, resilience, respect, and continuous
            learning, we aim to help every player become stronger both on and off the court.
          </p>

          <p>
            Our vision extends far beyond traditional coaching. We aspire to create a complete
            tennis ecosystem that supports players throughout their journey—from their very first
            tennis lesson to competing at the national and international level. We are committed to
            creating meaningful opportunities through professional coaching, structured player
            development, regular match play, tournament support, fitness training, coach education,
            sports quota guidance, and partnerships that strengthen the future of Indian tennis.
          </p>
        </div>
      </Section>

      {/* Vision in Action */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Vision in Action"
              title="A Complete Tennis Ecosystem"
            />
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              We envision Sports Life as a dynamic collaborative platform where athletes, parents,
              coaches, and institutions come together with one clear purpose: helping the next
              generation thrive.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Players Discover Their Potential",
                  desc: "Clear development pathways tailored to each individual's abilities and aspirations.",
                },
                {
                  title: "Coaches Guide With Integrity",
                  desc: "A team sharing an unwavering commitment to player-first values and modern methodology.",
                },
                {
                  title: "Parents Find Transparent Support",
                  desc: "Honest feedback, regular progress updates, and transparent tournament planning.",
                },
                {
                  title: "Community & Institutional Partnerships",
                  desc: "Collaborations with schools, universities, DU sports quota guidance, and international coaches.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neon/15 font-bold text-xs text-neon">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-border shadow-2xl bg-surface group">
              <div className="aspect-[3/4] w-full overflow-hidden bg-muted/20">
                <img
                  src={visionActionImage}
                  alt="A complete tennis ecosystem in action at Sports Life"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-neon">
                Not Just Champions, But Better Leaders
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Our success is measured by the confidence, character, and discipline our players build.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section>
        <SectionHeading
          eyebrow="Our Mission"
          title="Structured Guidance & Holistic Development"
          body="Empowering players with technical excellence, tactical IQ, physical strength, and mental resilience."
        />

        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85 lg:text-lg">
          <p>
            Our mission is to create an environment where every player has the opportunity to
            discover their potential, develop their skills, and achieve their goals through
            structured coaching and holistic player development.
          </p>
          <p>
            We are committed to providing professional tennis coaching that goes beyond teaching
            strokes and techniques. Our approach focuses on developing technically sound,
            tactically intelligent, physically strong, mentally resilient, and disciplined athletes
            who are prepared for success both on and off the court.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Professional Coaching",
              desc: "Certified coaching team for all age groups and skill levels, from toddlers to elite athletes.",
            },
            {
              icon: Compass,
              title: "Structured Pathways",
              desc: "Personalized development milestones aligned with each player's unique goals and growth pace.",
            },
            {
              icon: Trophy,
              title: "Competitive Match Play",
              desc: "Weekly Sunday match play and tournament simulation to build match IQ and competitive grit.",
            },
            {
              icon: Dumbbell,
              title: "Fitness & S&C Training",
              desc: "Comprehensive athletic conditioning, agility drills, injury prevention, and physical stamina.",
            },
            {
              icon: Target,
              title: "Tournament Support",
              desc: "Strategic tournament scheduling, draw analysis, pre-match routines, and post-match debriefs.",
            },
            {
              icon: HeartHandshake,
              title: "Supportive Environment",
              desc: "A positive, safe, and motivating community where players are encouraged to challenge themselves.",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
                    <item.icon className="size-6" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground mt-2">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CORE VALUES MERGED SECTION */}
      
      {/* Intro */}
      <Section className="bg-surface/30">
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
      <Section>
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
      <Section className="bg-surface/30">
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
      <Section>
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
      <Section className="bg-surface/30">
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
      <Section>
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

      {/* Promise & Belief */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={developmentImage}
              alt="Structured training at Sports Life"
              className="h-80 w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="Our Promise"
              title="Our Commitment to Every Player"
            />
            <div className="rounded-2xl border border-neon/30 bg-surface p-6 space-y-3">
              <p className="font-semibold text-foreground text-sm">
                Every player who joins Sports Life receives:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Unwavering commitment to long-term athletic and personal growth",
                  "Knowledge, guidance, and mentorship from certified coaches",
                  "Honest, transparent feedback and actionable improvement roadmaps",
                  "Regular competitive exposure across multiple court surfaces",
                  "A supportive community that celebrates effort and character",
                  "The belief that you can achieve far more than you ever imagined",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-neon mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-linear-to-r from-neon/10 to-transparent p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-neon">
                The Guiding Principle
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                “When players are given the right guidance, opportunities, and environment, they can
                achieve far more than they ever imagined.”
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      
    </>
  );
}
