import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import { Award, Compass, HeartHandshake, MapPin, Sparkles, Trophy, Users } from "lucide-react";

const heroImage = "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg";
const founderSpainImage = "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg";
const roshanaraCourtsImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const communityImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";

export const Route = createFileRoute("/about/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — The Journey That Shaped Sports Life | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Discover the story of Sports Life Tennis Academy — born from a belief that every player deserves quality coaching, structured guidance, and an inspiring environment.",
      },
      { property: "og:title", content: "Our Story — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "The journey that shaped Sports Life: from international coaching in Spain to 27 professional courts across Delhi.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about/our-story" },
    ],
    links: [{ rel: "canonical", href: "/about/our-story" }],
  }),
  component: OurStoryPage,
});

function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="Our Story"
        title="The Journey That Shaped Sports Life"
        body="From a childhood passion and international coaching experience in Spain to building one of Delhi's most dedicated player-first tennis academies."
        image={heroImage}
      />

      {/* Main Story Narrative */}
      <Section>
        <SectionHeading
          eyebrow="Our Story"
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

          <p>
            Our founder's journey in tennis began at the age of four and evolved through years of
            competitive tennis, international coaching experience in Spain, and working with
            players at different stages of development. Along the way, one thing became clear: many
            talented players had the passion and potential to succeed but often lacked access to
            structured guidance, consistent match play, quality facilities, and long-term player
            development.
          </p>

          <p>
            Inspired by these experiences, Sports Life Tennis Academy was established in 2024 at
            Roshanara Club with a vision of creating more than just a tennis academy. Our goal was
            to build an organization that places players at the centre of everything it does—where
            coaching goes beyond technique and focuses on developing complete athletes and
            responsible individuals.
          </p>

          <p>
            Driven by this vision, Sports Life has continued to grow and now proudly operates
            across <strong>Roshanara Club</strong>, <strong>Major Dhyan Chand Sports Complex</strong>,
            and <strong>Punjabi Bagh Club</strong>, providing players with access to 14 professional
            synthetic courts, 10 clay courts, and 3 grass courts. More importantly, we have built a
            team of passionate coaches who share the same commitment to excellence, integrity, and
            player-first development.
          </p>

          <p>
            Today, Sports Life is more than a place to learn tennis. It is a growing community where
            players, parents, and coaches come together with a shared purpose—to learn, compete,
            grow, and contribute to the future of Indian tennis. As we continue to expand, our
            mission remains unchanged: to create opportunities, inspire dreams, and empower every
            player to achieve their highest potential. Our story is still being written, and every
            player who joins Sports Life becomes a part of it.
          </p>
        </div>
      </Section>

      {/* Story Milestones & Timeline Cards */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Key Milestones"
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
                  home: many talented players possessed passion but lacked structured player pathways,
                  regular match play, and holistic athletic development.
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

          <Reveal delay={0.2}>
            <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-electric/15 text-electric mb-5">
                  <MapPin className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-neon">Chapter 04</span>
                <h3 className="mt-2 text-2xl font-bold text-foreground">3 Premier Centres</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Rapid expansion across Roshanara Club, Major Dhyan Chand Sports Complex, and
                  Punjabi Bagh Club now provides athletes access to 14 synthetic, 10 clay, and 3 grass
                  courts.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-foreground/70">
                27 Courts · Multi-surface training environment
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-neon/15 text-neon mb-5">
                  <HeartHandshake className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-neon">Chapter 05</span>
                <h3 className="mt-2 text-2xl font-bold text-foreground">Passionate Coaching</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We assembled an exceptional team of certified, passionate coaches sharing an
                  unwavering commitment to excellence, integrity, and putting the player first at
                  every stage of development.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-foreground/70">
                Certified Coaches · NIS · PTR · AITA-ITF
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-electric/15 text-electric mb-5">
                  <Users className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-neon">Chapter 06</span>
                <h3 className="mt-2 text-2xl font-bold text-foreground">A Thriving Community</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Today, Sports Life brings players, parents, and coaches together with a shared
                  purpose—to learn, compete, grow, and contribute meaningfully to the future of Indian
                  tennis.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-foreground/70">
                Ongoing · Every player is part of the story
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Visual Feature: Founder Background & Infrastructure */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="eyebrow">
              <Award className="size-3.5" />
              The Foundation of Our Vision
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl leading-tight">
              Where World-Class Standards Meet Player-First Care
            </h2>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <p>
                From Spain's high-performance academies to Delhi's premier sports venues, the Sports
                Life philosophy is anchored in one core belief: <em>when players receive structured
                guidance, consistent match play, and genuine mentorship, there is no ceiling to what
                they can achieve.</em>
              </p>
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="font-display text-2xl font-bold text-neon">14</p>
                  <p className="text-xs font-medium text-foreground">Synthetic Courts</p>
                  <p className="text-xs text-muted-foreground mt-1">For technical precision and fast-paced drills</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="font-display text-2xl font-bold text-neon">10</p>
                  <p className="text-xs font-medium text-foreground">Clay Courts</p>
                  <p className="text-xs text-muted-foreground mt-1">For endurance, sliding, and point construction</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="font-display text-2xl font-bold text-neon">3</p>
                  <p className="text-xs font-medium text-foreground">Grass Courts</p>
                  <p className="text-xs text-muted-foreground mt-1">For quick reflexes and versatile footwork</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="font-display text-2xl font-bold text-neon">3</p>
                  <p className="text-xs font-medium text-foreground">Centres in Delhi</p>
                  <p className="text-xs text-muted-foreground mt-1">Roshanara, Dhyan Chand & Punjabi Bagh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={founderSpainImage}
                  alt="Founder coaching & international exposure"
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
                  alt="Sports Life tennis community"
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="font-display text-sm font-bold uppercase tracking-wider text-neon">
                  Our Unchanged Mission
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To create opportunities, inspire dreams, and empower every player to achieve their
                  highest potential on and off the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Numbers / Stats Summary */}
      <Section className="bg-surface/30">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={3} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Premier Centres</p>
            <p className="text-xs text-muted-foreground mt-1">Across North, West & Central Delhi</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={27} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Professional Courts</p>
            <p className="text-xs text-muted-foreground mt-1">Synthetic, clay, and grass surfaces</p>
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

      {/* Call to action */}
      <CtaBanner
        title="Be Part of Our Story"
        body="Join the Sports Life community. Book a centre tour and a free assessment session with our coaching team today."
      />
    </>
  );
}
