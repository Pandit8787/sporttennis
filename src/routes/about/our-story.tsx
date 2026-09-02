import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import {
  Award,
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Quote,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const heroImage = "/about/img_0670.jpg";
const founderSpainImage = "/about/img_0804.jpg";
const roshanaraCourtsImage = "/about/img_8064.jpg";
const communityImage = "/about/whatsapp_image_aug7.jpg";

const coachingImage = "/founder-gallery/abhiney-at-jofre-porta-academy-1.jpg";
const playerDevelopmentImage = "/centre-gallery/whatsapp-20260813-171844-3.jpg";
const matchPlayImage = "/centre-gallery/whatsapp-20260813-171744-2.jpg";
const facilitiesImage = "/centre-gallery/punjabi-bagh-club-gallery-1.jpg";

export const Route = createFileRoute("/about/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story & Why Sports Life | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Discover the journey that shaped Sports Life and what sets our academy apart—expert international coaching, player-first pathways, and a supportive community.",
      },
      { property: "og:title", content: "Our Story & Why Sports Life" },
      {
        property: "og:description",
        content:
          "The journey from a childhood passion to 25 courts across Delhi, and the advantages that make Sports Life a premier development ecosystem.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about/our-story" },
    ],
    links: [{ rel: "canonical", href: "/about/our-story" }],
  }),
  component: OurStoryAndWhyUsPage,
});

function OurStoryAndWhyUsPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        image={heroImage}
        removeFog={true}
      />

      {/* Main Story Narrative */}
      <Section>
        <SectionHeading
          title="Born From Purpose & Passion"
          body="How a vision to transform tennis coaching in India became a thriving reality."
        />

        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85 lg:text-lg">
          <div className="rounded-2xl border border-neon/30 bg-linear-to-r from-neon/10 via-neon/5 to-transparent p-6 sm:p-8">
            <p className="font-display text-lg font-bold text-foreground sm:text-xl lg:text-2xl leading-snug">
              “Every great journey begins with a purpose. Sports Life Tennis Academy was born from a
              simple belief—that every player deserves access to quality coaching, the right
              opportunities, and an environment that inspires growth.”
            </p>
          </div>
          <div className="mt-6">
            <img
              src="/about/major_dhyanchand_group_photo.jpg"
              alt="Opening ceremony"
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </div>

          <p>
            Our founder's journey in tennis began at the age of four and evolved through years of
            competitive tennis, international coaching experience in Spain, and working with
            players at different stages of development. Along the way, one thing became clear: many
            talented players had the passion and potential to succeed but often lacked access to
            structured guidance, consistent match play, quality facilities, and longterm player
            development.
          </p>

          <p>
            Inspired by these experiences, Sports Life Tennis Academy was established in 2024 at
            DDA Roshanara Club with a vision of creating more than just a tennis academy. Our goal
            was to build an organization that places players at the centre of everything it
            does—where coaching goes beyond technique and focuses on developing complete athletes
            and responsible individuals.
          </p>

          <p>
            Driven by this vision, Sports Life has continued to grow and now proudly operates
            across <strong>Roshanara Club</strong>, <strong>Major Dhyan Chand Sports Complex</strong>,
            and <strong>Punjabi Bagh Club</strong>, providing players with access to 12 synthetic
            courts, 10 clay courts, and 3 grass courts. More importantly, we have built a team of
            passionate coaches who share the same commitment to excellence, integrity, and
            player-first development.
          </p>

          <p>
            Today, more than 300 players train with Sports Life every month, supported by a growing
            team of professional coaches committed to delivering structured, player-first
            development.
          </p>
        </div>
      </Section>

      {/* Story Milestones & Timeline Cards */}
      <Section className="bg-surface/30">
        <SectionHeading
          title="Chapters in Our Journey"
          body="The defining moments that shaped our philosophy, infrastructure, and community."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-neon/15 text-neon mb-5">
                  <Sparkles className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-neon">Chapter 01</span>
                <h3 className="mt-2 text-2xl font-bold text-foreground">Early Passion</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Beginning at age four, our founder embarked on years of rigorous competitive play,
                  discovering firsthand the dedication, discipline, and guidance required to excel in
                  tennis.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-foreground/70">
                Age 4 · Childhood passion to competitive tennis
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-electric/15 text-electric mb-5">
                  <Compass className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-neon">Chapter 02</span>
                <h3 className="mt-2 text-2xl font-bold text-foreground">International Coaching</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Gaining international coaching experience in Spain revealed the critical gap back
                  home: many talented players possessed passion but lacked structured player
                  pathways, regular match play, and holistic athletic development.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-foreground/70">
                Spain Experience · Modern European methodologies
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-neon/15 text-neon mb-5">
                  <Trophy className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-neon">Chapter 03</span>
                <h3 className="mt-2 text-2xl font-bold text-foreground">Established in 2024</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Sports Life Tennis Academy was founded at the historic Roshanara Club with a
                  player-first mission—creating an organization focused on building complete
                  athletes and responsible individuals.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-foreground/70">
                2024 · Founded at Roshanara Club, Delhi
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Visual Feature: Founder Background & Infrastructure */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl leading-tight">
              Where High-Performance Standards Meet Player-First Care
            </h2>
            <div className="mt-6">
              <img
                src="/about/whatsapp_image_aug7.jpg"
                alt="High performance and player-first care"
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl border border-border object-cover"
              />
            </div>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <p>
                From high-performance coaching environments in Spain to leading sports venues across
                Delhi, the Sports Life philosophy is built around one core belief: <em>When players
                  receive structured guidance, consistent match play, quality facilities, and genuine
                  mentorship, they are given the foundation to reach their full potential.</em>
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={founderSpainImage}
                  alt="Head coach explaining players and training drills"
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={roshanaraCourtsImage}
                  alt="Roshanara Club tennis courts"
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 pt-0 sm:pt-6">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={communityImage}
                  alt="Sports Life tennis community and players"
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="font-display text-sm font-bold uppercase tracking-wider text-neon">
                  300+ Players Training Every Month
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Supported by a growing team of professional coaches committed to structured,
                  player-first development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Sports Life Advantage - Why Us Merged section */}
      <Section className="bg-surface/30">
        <SectionHeading
          title="The Sports Life Advantage"
          body="In Delhi, there are many places to hit tennis balls. But Sports Life is built as a complete development ecosystem where every player is guided with intention, care, and international standards."
        />

        <div className="mt-12 space-y-24">

          {/* Feature 1: Expert Coaching */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg bg-surface">
              <img
                src={coachingImage}
                alt="Expert tennis coaching team"
                className="h-[440px] sm:h-[480px] lg:h-[500px] w-full object-cover object-[center_22%] transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon uppercase tracking-wider">
                <GraduationCap className="size-3.5" />

              </div>
              <h3 className="text-3xl font-extrabold text-foreground">Expert, Certified Coaching Team</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our coaching team isn't just experienced—they bring international certifications,
                European training philosophies, and years of national-level competitive play to every
                court session.
              </p>
              <div className="rounded-2xl border border-border bg-surface p-4 space-y-2">
                {[
                  "International coaching certifications and Spanish academy experience",
                  "NIS, PTR, and AITA-ITF accredited coaches",
                  "Proven track record of developing top state and national junior players",
                  "Continuous professional coach education in modern biomechanics",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="size-4 shrink-0 text-neon mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2: Player-Centered Development */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-4 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-electric/15 px-3 py-1 text-xs font-bold text-electric uppercase tracking-wider">
                <Compass className="size-3.5" />

              </div>
              <h3 className="text-3xl font-extrabold text-foreground">Player-Centered Development</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We never use a rigid, one-size-fits-all formula. Every player receives an individualized
                coaching roadmap tailored to their physical maturation, style of play, learning pace,
                and aspirations.
              </p>
              <div className="space-y-2.5 pt-2">
                {[
                  "Customized training plans based on individual player goals",
                  "Focus on long-term athletic durability and biomechanical efficiency",
                  "Periodic skill evaluations and honest, structured parent feedback",
                  "Mental resilience and point-construction strategies",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="size-4 shrink-0 text-electric mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg order-1 lg:order-2">
              <img
                src={playerDevelopmentImage}
                alt="Player-centered development session"
                className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Feature 3: Regular Match Play */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <img
                src={matchPlayImage}
                alt="Sunday match play sessions"
                className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon uppercase tracking-wider">
                <Trophy className="size-3.5" />

              </div>
              <h3 className="text-3xl font-extrabold text-foreground">Weekly Sunday Match Play</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Practice alone doesn't build tournament grit. Our signature Sunday Match Play initiative
                provides structured competitive exposure under actual match conditions with umpire
                protocols, ranking tracking, and coach analysis.
              </p>
              <div className="rounded-2xl border border-border bg-surface p-4 space-y-2">
                {[
                  "Weekly competitive match play across all age groups and skill brackets",
                  "Simulated pressure scenarios to sharpen decision-making",
                  "Pre-match mental prep and post-match tactical review",
                  "Clear benchmarking of progress against peers across Delhi",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="size-4 shrink-0 text-neon mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* Facilities/Courts overview */}
      <Section>
        <SectionHeading
          title="Facilities Across 3 Delhi Centres"
          body="Access to 25 courts with synthetic, clay, and grass surfaces for comprehensive athletic development."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card-elevated p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
              <MapPin className="size-5" />
            </div>
            <h4 className="font-bold text-lg text-foreground">Roshanara Club</h4>
            <p className="text-xs font-semibold text-neon mt-1">North Delhi · Flagship</p>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              4 Synthetic Courts · 2 Clay Courts · 3 Grass Courts (9 Total). Historic heritage venue offering all 3 major tennis surfaces.
            </p>
          </div>

          <div className="card-elevated p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-electric/15 text-electric mb-4">
              <MapPin className="size-5" />
            </div>
            <h4 className="font-bold text-lg text-foreground">Major Dhyan Chand Complex</h4>
            <p className="text-xs font-semibold text-electric mt-1">Ashok Vihar · North-West Delhi</p>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              4 Synthetic Courts · 2 Clay Courts (6 Total). Dedicated player development hub with structured coaching.
            </p>
          </div>

          <div className="card-elevated p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
              <MapPin className="size-5" />
            </div>
            <h4 className="font-bold text-lg text-foreground">Punjabi Bagh Club</h4>
            <p className="text-xs font-semibold text-neon mt-1">West Delhi · Ring Road</p>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              6 Clay Courts · 4 Synthetic Courts (10 Total). Premier sports club infrastructure with thriving adult and junior programs.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-lg">
          <img
            src={facilitiesImage}
            alt="Sports Life tennis facilities in Delhi"
            className="h-72 w-full object-cover"
          />
        </div>
      </Section>

      {/* Numbers / Stats Summary */}
      <Section className="bg-surface/30">
        <SectionHeading
          title="The Results Speak for Themselves"
          body="Real numbers reflecting our dedication to Delhi's tennis community."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={3} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Premier Centres</p>
            <p className="text-xs text-muted-foreground mt-1">Across Delhi</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={25} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Courts</p>
            <p className="text-xs text-muted-foreground mt-1">Synthetic, clay, and grass</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={2024} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Year Established</p>
            <p className="text-xs text-muted-foreground mt-1">Founded at Roshanara Club</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={100} suffix="%" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Player-First Commitment</p>
            <p className="text-xs text-muted-foreground mt-1">Dedicated to long-term development</p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          title="What Players & Parents Say"
          body="Feedback from families who have experienced the Sports Life difference."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              quote:
                "Sports Life transformed my child's approach to tennis. The technical coaching is professional, the atmosphere is disciplined, and the coaches genuinely care about every kid's development.",
              name: "Parent of 12-year-old Junior Player",
              location: "Roshanara Club Centre",
            },
            {
              quote:
                "I've trained at multiple tennis academies in Delhi, but the structured match play and video analysis at Sports Life are unmatched. My tactical awareness has improved tremendously.",
              name: "Competitive Junior Player (Age 15)",
              location: "Major Dhyan Chand Centre",
            },
            {
              quote:
                "The multi-surface exposure—switching between clay, synthetic, and grass—has made my son far more adaptable and confident in tournament pressure situations.",
              name: "Parent of 14-year-old State Player",
              location: "Roshanara & Punjabi Bagh Centres",
            },
            {
              quote:
                "Joining the adult program at Sports Life was the best fitness and recreational decision I've made. Great drills, high energy, and wonderful community of players.",
              name: "Adult Program Player",
              location: "Punjabi Bagh Club Centre",
            },
          ].map((item, i) => (
            <div key={i} className="card-elevated p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <Quote className="size-8 text-neon/30 mb-4" />
                <p className="text-sm sm:text-base leading-relaxed text-foreground/90 italic">
                  “{item.quote}”
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-bold text-sm text-foreground">{item.name}</p>
                <p className="text-xs text-neon mt-0.5">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to action */}

    </>
  );
}
