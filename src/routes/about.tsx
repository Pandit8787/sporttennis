import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  ExternalLink,
  Flame,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const founderImage = "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg";
const courtsImage = "/centre-gallery/punjabi-bagh-club-gallery-1.jpg";
const communityImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sports Life Tennis Academy Delhi" },
      {
        name: "description",
        content:
          "Learn about Sports Life Tennis Academy: our story, founder Abhiney Kumar, vision & mission, core values, and why families across Delhi choose our 27 multi-surface courts.",
      },
      { property: "og:title", content: "About Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Building the future of Indian tennis: coaching, community, and long-term player development across Delhi.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const SUBPAGES = [
  {
    title: "Our Story & Why Sports Life",
    to: "/about/our-story",
    tag: "The Journey & Advantage",
    desc: `Our Story & Why SportsLife
Built from a passion for tennis, designed to build players.
From our first court to a growing tennis community, SportsLife brings together expert coaching, world- class facilities and a structured development journey for every player.`,
    icon: Sparkles,
    badgeColor: "text-neon bg-neon/10 border-neon/30",
  },
{
  title: "Meet the Founder",
    to: "/about/meet-founder",
      tag: "Leadership",
        desc: "Abhiney Kumar — International Coach, professional player, 20+ years on court, Spain coaching experience (Jofre Porta & JC Ferrero Academy), and SAI/Khelo India induction protocol contributor.",
          icon: GraduationCap,
            badgeColor: "text-electric bg-electric/10 border-electric/30",
  },
{
  title: "Our Vision, Mission & Values",
    to: "/about/our-vision-mission",
      tag: "Guiding Purpose & Culture",
        desc: "Building India's most trusted tennis ecosystem through structured development and core values.",
          icon: Target,
            badgeColor: "text-neon bg-neon/10 border-neon/30",
  },
];

function AboutPage() {
  const location = useLocation();

  if (location.pathname !== "/about") {
    return <Outlet />;
  }

  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="About Sports Life"
        title="Building the Future of Indian Tennis"
        body="Coaching excellence, multi-surface infrastructure, and player-first athlete development across Delhi's premier sports clubs."
        image={heroImage}
        removeFog
      />

      {/* Explore Sub-pages Navigation Grid */}
      <Section className="py-12 lg:py-16">
        <SectionHeading
          eyebrow="Explore About Us"
          title="Discover Our Academy"
          body="Dive into our origins, coaching leadership, organizational mission, and core values."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUBPAGES.map((sub, i) => (
            <Reveal key={sub.title} delay={i * 0.06}>
              <a
                href={sub.to}
                className="card-elevated group flex h-full flex-col justify-between p-6 sm:p-7 transition-all hover:border-neon/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-neon/15 text-neon group-hover:bg-neon group-hover:text-white transition-colors">
                      <sub.icon className="size-5" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${sub.badgeColor}`}
                    >
                      {sub.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground group-hover:text-neon transition-colors">
                    {sub.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {sub.desc}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4 flex items-center justify-between text-xs font-bold text-neon">
                  <span>Learn more</span>
                  <ExternalLink className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Key Numbers Summary */}
      <Section className="bg-surface/30">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={3} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Flagship Centres</p>
            <p className="text-xs text-muted-foreground mt-1">Roshanara, Dhyan Chand & Punjabi Bagh</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={25} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Professional Courts</p>
            <p className="text-xs text-muted-foreground mt-1">12 Synthetic · 10 Clay · 3 Grass</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={20} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Years Experience</p>
            <p className="text-xs text-muted-foreground mt-1">Competitive play & Spanish coaching</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={100} suffix="%" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Player-First Philosophy</p>
            <p className="text-xs text-muted-foreground mt-1">Long-term athletic development</p>
          </div>
        </div>
      </Section>

      {/* Our Story Summary */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Our Story"
              title="Born From a Simple Belief"
              body="Every player deserves access to quality coaching, the right opportunities, and an inspiring environment."
            />
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/85">
              <p>
                Our founder's journey began at age 4 and evolved through competitive tennis and
                international coaching experience in Spain. In 2024, Sports Life Tennis Academy was
                founded at Roshanara Club to place players at the center of everything—developing
                complete athletes and responsible individuals.
              </p>
              <p>
                Today, Sports Life operates across Roshanara Club, Major Dhyan Chand Sports Complex,
                and Punjabi Bagh Club with 25 courts and a passionate team of certified coaches.
              </p>
              <div className="pt-2">
                <a
                  href="/about/our-story"
                  className="inline-flex items-center gap-2 font-bold text-neon text-sm hover:underline"
                >
                  Read the full story <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={founderImage}
                alt="Founder Abhiney Kumar coaching in Spain"
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={communityImage}
                alt="Sports Life tennis community"
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission Overview */}
      <Section className="bg-surface/30">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-elevated p-8">
            <div className="flex size-12 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
              <Target className="size-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-neon">Our Vision</span>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              Building India's Most Trusted Tennis Ecosystem
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To create an environment where every player—from beginner to national competitor—has
              the opportunity to learn, grow, compete, and achieve their highest potential as both
              athletes and responsible leaders.
            </p>
            <div className="mt-6 border-t border-border pt-4">
              <a
                href="/about/our-vision-mission"
                className="text-xs font-bold text-neon hover:underline"
              >
                Explore Vision & Mission →
              </a>
            </div>
          </div>

          <div className="card-elevated p-8">
            <div className="flex size-12 items-center justify-center rounded-xl bg-electric/15 text-electric mb-4">
              <Compass className="size-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-electric">Our Mission</span>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              Structured Guidance & Holistic Development
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Providing professional coaching that goes beyond strokes. Developing technically
              sound, tactically smart, physically resilient, and disciplined athletes prepared for
              success on and off court.
            </p>
            <div className="mt-6 border-t border-border pt-4">
              <a
                href="/about/our-vision-mission"
                className="text-xs font-bold text-electric hover:underline"
              >
                Explore Vision & Mission →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values Summary */}
      <Section>
        <SectionHeading
          eyebrow="Core Values"
          title="Principles That Guide Us"
          body="Lived daily by our coaches and players across all 3 Delhi centres."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Excellence",
              desc: "World-class coaching standards, 27 tournament courts, and pristine facilities.",
              icon: Trophy,
            },
            {
              title: "Integrity",
              desc: "Honest feedback, transparent progress reports, and fair play always.",
              icon: ShieldCheck,
            },
            {
              title: "Player First",
              desc: "Individualized development roadmaps centered around long-term growth.",
              icon: HeartHandshake,
            },
            {
              title: "Discipline",
              desc: "Structured practice routines, punctuality, and competitive composure.",
              icon: Zap,
            },
            {
              title: "Continuous Learning",
              desc: "Ongoing coach education, international masterclasses, and modern methods.",
              icon: Lightbulb,
            },
            {
              title: "Community",
              desc: "A welcoming, supportive environment connecting players, parents, and coaches.",
              icon: Users,
            },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="card-elevated flex h-full flex-col justify-between p-6">
                <div>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-neon/15 text-neon mb-3">
                    <v.icon className="size-5" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">{v.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/about/our-vision-mission"
            className="inline-flex items-center gap-1.5 font-bold text-neon text-sm hover:underline"
          >
            <span>Learn more about our core values</span>
            <span>→</span>
          </a>
        </div>
      </Section>

      {/* Facilities Banner */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={courtsImage}
              alt="Multi-surface tennis courts in Delhi"
              className="h-80 w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <span className="eyebrow">
              <MapPin className="size-3.5" />
              Our Infrastructure
            </span>
            <h3 className="text-3xl font-extrabold text-foreground">
              25 Courts Across Delhi
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sports Life provides players with rare multi-surface training on Synthetic, Clay, and
              Grass courts across Roshanara Club, Major Dhyan Chand Sports Complex, and Punjabi Bagh
              Club.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="size-4 text-neon" />
                <span><strong>Roshanara Club:</strong> 4 Synthetic, 2 Clay, 3 Grass</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="size-4 text-neon" />
                <span><strong>Major Dhyan Chand:</strong> 6 Synthetic, 7 Clay</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="size-4 text-neon" />
                <span><strong>Punjabi Bagh Club:</strong> 4 Synthetic, 1 Clay</span>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="/about/our-story"
                className="inline-flex items-center gap-1.5 font-bold text-neon text-sm hover:underline"
              >
                <span>Discover why families choose Sports Life</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}

    </>
  );
}
