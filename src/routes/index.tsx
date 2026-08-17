import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/academy-gallery/hero-chatgpt-063244-20260813.png";
import courtsImg from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM.jpeg";
import trainingImg from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.21 PM.jpeg";
import trophyImg from "@/assets/trophy.jpg";
import academyGallery1 from "@/assets/academy-gallery/abhiney-jofre-porta-20260813.jpg";
import academyGallery2 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.21 PM.jpeg";
import academyGallery3 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.21 PM (1).jpeg";
import academyGallery4 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM.jpeg";
import academyGallery5 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM (1).jpeg";
import academyGallery6 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM (2).jpeg";
import academyGallery7 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM (3).jpeg";
import academyGallery8 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.23 PM.jpeg";
import academyGallery9 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.23 PM (1).jpeg";
import academyGallery10 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.23 PM (2).jpeg";
import academyGallery11 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.23 PM (3).jpeg";
import academyGallery12 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.24 PM.jpeg";
import academyGallery13 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.24 PM (1).jpeg";
import academyGallery14 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.24 PM (2).jpeg";
import academyGallery15 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.25 PM.jpeg";
import video1 from "@/assets/videos/whatsapp-video-1.mp4";
import video2 from "@/assets/videos/whatsapp-video-2.mp4";
import {
  ACADEMY,
  BLOGS,
  COACHES,
  FACILITIES,
  PROGRAMS,
  STATS,
  TRANSFORMATIONS,
  WHY_US,
} from "@/lib/site-data";
import { ShuttleIcon } from "@/components/site/brand";
import { CtaLink } from "@/components/site/layout";
import { Counter, Reveal } from "@/components/site/motion-primitives";
import {
  CtaBanner,
  FaqSection,
  Newsletter,
  Section,
  SectionHeading,
  TestimonialsSlider,
} from "@/components/site/sections";
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Globe2,
  GraduationCap,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sports Life Tennis Academy — Train With Purpose | Delhi" },
      {
        name: "description",
        content:
          "Sports Life Tennis Academy offers professional, structured tennis coaching across Delhi at Roshanara Club, Major Dhyan Chand Complex & Punjabi Bagh Club. 27 courts, certified coaches, and regular match play.",
      },
      { property: "og:title", content: "Sports Life Tennis Academy — Train With Purpose" },
      {
        property: "og:description",
        content:
          "Player-first tennis coaching across Delhi from toddlers and beginners to national-level competitors. Book your free trial session today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: ACADEMY.name,
          description: ACADEMY.tagline,
          telephone: ACADEMY.phone,
          email: ACADEMY.email,
          address: { "@type": "PostalAddress", streetAddress: ACADEMY.address },
        }),
      },
    ],
  }),
  component: HomePage,
});

/* -------------------------------------------------------------------------- */
/*                                HERO SECTION                                */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <div className="relative flex min-h-[85svh] lg:min-h-[100svh] items-center overflow-hidden pt-20">
      {/* Background Image & Ambient Gradients */}
      <img
        src={heroImg}
        alt="Tennis player preparing for serve on professional court"
        width={1920}
        height={1280}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-center opacity-85 saturate-[1.18] contrast-[1.08]"
      />
      {/* Refined Overlays for Crisp Text Legibility */}
      <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/75 to-background/30" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" />
      <div className="grid-lines absolute inset-0 opacity-15 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:py-24 lg:px-8">
        {/* Eyebrow badge without background */}
        <span
          className="eyebrow text-white block text-center lg:text-left text-xs sm:text-sm font-bold tracking-[0.24em] uppercase"
          style={{ textShadow: "0 4px 14px rgba(0,0,0,0.6)" }}
        >
          Delhi · Est. 2024 · 3 Centres · 27 Courts
        </span>

        {/* Hero Title */}
        <h1
          className="mt-6 max-w-5xl text-[clamp(2.5rem,8vw,6.8rem)] leading-[0.9] font-black uppercase text-white text-center lg:text-left"
          style={{ textShadow: "0 10px 35px rgba(0,0,0,0.7)" }}
        >
          Train With
          <br />
          <span className="text-white drop-shadow-lg" style={{ textShadow: "0 8px 24px rgba(0,0,0,0.75)" }}>
            Purpose
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p
          className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl text-white/95 font-medium leading-relaxed mx-auto lg:mx-0 text-center lg:text-left"
          style={{ textShadow: "0 4px 16px rgba(0,0,0,0.6)" }}
        >
          Sports Life Tennis Academy is a player-first academy offering structured coaching across Delhi—from toddlers picking up their first racquet to high-performance athletes competing nationally.
        </p>

        {/* Action Buttons */}
        <Reveal delay={0.25}>
          <div className="mt-9 flex flex-wrap items-center gap-3.5 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-neon via-emerald-500 to-teal-500 px-7 py-3.5 font-display text-xs font-black uppercase tracking-wider text-white shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_10px_35px_rgba(34,197,94,0.55)] hover:scale-105 transition-all"
            >
              <span>Book Free Trial</span>
              <span>→</span>
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
            >
              Explore Programs
            </Link>
            <Link
              to="/about/our-story"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md px-5 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white hover:bg-black/35 transition-all"
            >
              Our Story
            </Link>
          </div>
        </Reveal>

        {/* Quick Venue Badge Links */}
        <div className="mt-8 flex flex-wrap items-center gap-2 justify-center lg:justify-start text-xs text-white/90">
          <span className="font-semibold text-neon uppercase tracking-wider text-[11px] mr-1">Centres:</span>
          <Link
            to="/centres/roshanara-club"
            className="inline-flex items-center gap-1 rounded-full bg-black/40 border border-white/15 px-3 py-1 text-white hover:border-neon hover:text-neon transition-colors"
          >
            <MapPin className="size-3 text-neon" /> Roshanara Club
          </Link>
          <Link
            to="/centres/major-dhyan-chand-sports-complex"
            className="inline-flex items-center gap-1 rounded-full bg-black/40 border border-white/15 px-3 py-1 text-white hover:border-neon hover:text-neon transition-colors"
          >
            <MapPin className="size-3 text-neon" /> Dhyan Chand Complex
          </Link>
          <Link
            to="/centres/punjabi-bagh-club"
            className="inline-flex items-center gap-1 rounded-full bg-black/40 border border-white/15 px-3 py-1 text-white hover:border-neon hover:text-neon transition-colors"
          >
            <MapPin className="size-3 text-neon" /> Punjabi Bagh Club
          </Link>
        </div>

        {/* Stats Grid */}
        <Reveal delay={0.45}>
          <dl className="mt-12 grid max-w-4xl grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 p-5 sm:p-6 shadow-2xl">
            {STATS.map((s) => (
              <div key={s.label} className="border-l border-white/15 pl-3 sm:pl-4 first:border-l-0">
                <dt
                  className="font-display text-2xl font-black sm:text-3xl lg:text-4xl text-white"
                  style={{ textShadow: "0 4px 14px rgba(0,0,0,0.6)" }}
                >
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd
                  className="mt-1 text-[10px] tracking-[0.16em] text-white/80 uppercase sm:text-xs font-semibold"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               MARQUEE TICKER                               */
/* -------------------------------------------------------------------------- */
function Marquee() {
  const items = [
    "27 Multi-Surface Courts in Delhi",
    "Synthetic · Clay · Grass Surfaces",
    "Spain-Inspired Coaching Methodology",
    "Weekly Sunday Match Play League",
    "Toddlers to Elite Performance Squads",
    "Delhi University Sports Quota Guidance",
    "Certified NIS, PTR & ITF Coaches",
    "100% Player-Centred Development",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-surface/60 py-4.5 backdrop-blur-md">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-8 font-display text-xs sm:text-sm font-extrabold tracking-[0.22em] text-foreground/80 uppercase"
          >
            {t}
            <ShuttleIcon className="size-3.5 text-neon" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          3 CENTRES DELHI NETWORK                           */
/* -------------------------------------------------------------------------- */
function CentresSpotlight() {
  const centresData = [
    {
      name: "Roshanara Club",
      slug: "roshanara-club",
      area: "North Delhi · Kamla Nagar",
      courts: "9 Courts (4 Synthetic · 2 Clay · 3 Grass)",
      tag: "Flagship Founding Centre",
      image: "/centre-gallery/whatsapp-20260813-171844-1.jpg",
      summary: "Where the Sports Life journey began in 2024. A historic premier club with full multi-surface training facilities.",
    },
    {
      name: "Major Dhyan Chand Complex",
      slug: "major-dhyan-chand-sports-complex",
      area: "Central Delhi · India Gate",
      courts: "14 Courts (6 Synthetic · 8 Clay)",
      tag: "National Tournament Hub",
      image: "/centre-gallery/whatsapp-20260813-171844-2.jpg",
      summary: "Delhi's largest central tennis facility. High-energy squads, tournament match play, and performance training.",
    },
    {
      name: "Punjabi Bagh Club",
      slug: "punjabi-bagh-club",
      area: "West Delhi · Ring Road",
      courts: "4 Floodlit Synthetic Courts",
      tag: "West Delhi Coaching Academy",
      image: "/centre-gallery/whatsapp-20260813-171845-1.jpg",
      summary: "Premier West Delhi tennis destination with modern floodlit hard courts for juniors, adults, and competitive squads.",
    },
  ] as const;

  return (
    <Section className="bg-surface/30">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeading
          eyebrow="Delhi Infrastructure"
          title="3 Premier Centres. 27 Courts."
          body="Train across all three major surfaces—Synthetic, Clay, and Grass—with certified coaching across North, Central, and West Delhi."
        />
        <CtaLink to="/centres" variant="ghost">
          All Centres
        </CtaLink>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {centresData.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.1}>
            <div className="card-elevated group flex flex-col h-full overflow-hidden border border-border/80 bg-surface">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-neon px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                  {c.tag}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-semibold text-neon flex items-center gap-1">
                    <MapPin className="size-3" /> {c.area}
                  </p>
                  <h3 className="text-xl font-bold mt-0.5">{c.name}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between grow">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-surface-2 px-3 py-1.5 text-xs font-bold text-foreground border border-border/60">
                    <Trophy className="size-3.5 text-neon" />
                    <span>{c.courts}</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <Link
                    to={`/centres/${c.slug}`}
                    className="font-display text-xs font-bold uppercase tracking-wider text-neon hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Centre Details</span>
                    <span>→</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-full bg-neon/10 hover:bg-neon hover:text-white px-3 py-1 text-xs font-semibold text-neon transition-colors"
                  >
                    Book Trial
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         FOUNDER SPOTLIGHT (ABHINEY)                        */
/* -------------------------------------------------------------------------- */
function FounderSpotlight() {
  const credentials = [
    "International Tennis Coach & NIS Qualified",
    "16+ Years Competitive Playing & Coaching",
    "Spain Coaching Exposure (Rafa Nadal Academy, Ferrero Academy, Jofre Porta)",
    "Contributed to Developing National & State Ranked Players",
  ];

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Vision & Leadership"
            title="Founded on Passion, Experience & Player-First Values"
            body="Sports Life was founded by Abhiney Kumar with a singular vision: to build an organization where every athlete receives structured guidance, regular competition, and world-class developmental opportunities."
          />

          <div className="mt-8 rounded-2xl bg-surface-2/60 border border-border/80 p-6 backdrop-blur-sm">
            <p className="font-serif italic text-base sm:text-lg text-foreground/90 leading-relaxed">
              “Every great journey begins with a purpose. Along my path in Spain and competitive tennis, I saw talented players who had passion but lacked structured match play and long-term development. Sports Life was built to fill that gap.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="size-2 rounded-full bg-neon" />
              <p className="font-display text-xs font-extrabold tracking-wider uppercase text-foreground">
                Abhiney Kumar · Founder & Head Coach
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {credentials.map((cred) => (
              <div key={cred} className="flex items-start gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="size-4.5 text-neon shrink-0 mt-0.5" />
                <span>{cred}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaLink to="/about/meet-founder" variant="neon">
              Meet The Founder
            </CtaLink>
            <CtaLink to="/about/our-story" variant="ghost">
              The Sports Life Story
            </CtaLink>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-2xl">
              <img
                src="/abhiney-kumar-headshot.jpg"
                alt="Abhiney Kumar - Founder of Sports Life Tennis Academy"
                loading="lazy"
                decoding="async"
                className="size-full object-cover object-top max-h-[560px]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-neon px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Head Coach & Founder
                </span>
                <h3 className="mt-2 text-2xl font-black">Abhiney Kumar</h3>
                <p className="text-xs text-white/80 mt-1">
                  PTR · NIS · ITF Certified · Spain Coaching Exposure
                </p>
              </div>
            </div>

            {/* Float Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-2xl bg-surface/95 border border-border p-4 shadow-xl backdrop-blur-md">
              <div className="grid size-12 place-items-center rounded-xl bg-neon/15 text-neon">
                <Globe2 className="size-6" />
              </div>
              <div>
                <p className="font-display text-xs font-extrabold text-foreground uppercase tracking-wider">
                  Spain Methodology
                </p>
                <p className="text-xs text-muted-foreground">European drills & match sense</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            PROGRAMS DEVELOPMENT                            */
/* -------------------------------------------------------------------------- */
function ProgramsSection() {
  return (
    <Section className="bg-surface/30">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeading
          eyebrow="Coaching Programs"
          title="Pick Your Stage. We Build Your Game."
          body="Age-appropriate, structured tennis curriculum for toddlers, beginners, competitive tournament players, adults, and weekend match play."
        />
        <CtaLink to="/programs" variant="ghost">
          View All Programs
        </CtaLink>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <article className="card-elevated group flex h-full flex-col justify-between p-7 border border-border/80 bg-surface">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-neon/10 border border-neon/30 px-3 py-1 font-display text-[10px] font-black uppercase tracking-wider text-neon">
                    {p.level}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">{p.duration}</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold group-hover:text-neon transition-colors">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                  {p.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                      <div className="size-1.5 rounded-full bg-neon" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-border/80 pt-4">
                <Link
                  to="/programs"
                  className="font-display text-xs font-bold uppercase tracking-wider text-neon hover:underline"
                >
                  Explore Program →
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full bg-neon px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-emerald-600 transition-colors"
                >
                  Book Trial
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                        SIGNATURE INITIATIVES SECTION                       */
/* -------------------------------------------------------------------------- */
function InitiativesSection() {
  const initiatives = [
    {
      title: "Sunday Match Play League",
      to: "/initiatives/sunday-match-play",
      tag: "Weekly Competition",
      icon: <Trophy className="size-5 text-neon" />,
      image: "/centre-gallery/whatsapp-20260813-171844-3.jpg",
      imagePos: "object-[center_60%]",
      body: "Level-based competitive match exposure every Sunday with structured refereeing, UTR-style rankings, and match analysis.",
    },
    {
      title: "Global Learning Initiatives",
      to: "/initiatives/global-learning",
      tag: "Spain Masterclasses",
      icon: <Globe2 className="size-5 text-neon" />,
      image: "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg",
      imagePos: "object-[center_20%]",
      body: "International tennis exposure bringing European training methodologies, high-performance masterclasses, and player exchange programs.",
    },
    {
      title: "DU Sports Quota Guidance",
      to: "/initiatives",
      tag: "University Mentorship",
      icon: <GraduationCap className="size-5 text-neon" />,
      image: "/centre-gallery/whatsapp-20260813-171745-1.jpg",
      imagePos: "object-[center_35%]",
      body: "Specialized fitness, tactical prep, and trial certification mentoring for student-athletes seeking Delhi University sports quota admissions.",
    },
  ];

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeading
          eyebrow="Beyond The Court"
          title="Sports Life Initiatives"
          body="We believe in creating real pathways—through competitive match play leagues, international academy masterclasses, and university sports career guidance."
        />
        <CtaLink to="/initiatives" variant="ghost">
          All Initiatives
        </CtaLink>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {initiatives.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="card-elevated group flex flex-col h-full overflow-hidden border border-border bg-surface">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className={`size-full object-cover ${item.imagePos ?? "object-center"} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-neon">
                  {item.tag}
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <div className="p-6 flex flex-col justify-between grow">
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    to={item.to}
                    className="font-display text-xs font-bold uppercase tracking-wider text-neon hover:underline inline-flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </Link>
                  <div className="rounded-full p-2 bg-neon/10 text-neon">{item.icon}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             GALLERY CAROUSEL                               */
/* -------------------------------------------------------------------------- */
function GalleryCarousel() {
  const slides = [
    { image: academyGallery1, title: "International Masterclass", subtitle: "Founder Abhiney Kumar with Spanish coaching legend Jofre Porta" },
    { image: academyGallery2, title: "Roshanara Club Tennis Courts", subtitle: "Multi-surface training on synthetic, clay and grass courts in Delhi" },
    { image: academyGallery3, title: "Junior Squad Drills", subtitle: "Building strong footwork, stroke biomechanics and court positioning" },
    { image: academyGallery4, title: "Sunday Match Play League", subtitle: "Competitive match play exposure for juniors and adult athletes" },
    { image: academyGallery5, title: "Daily Practice Intensity", subtitle: "Consistency, high-energy rallies, and discipline on court" },
    { image: academyGallery6, title: "Spain-Inspired Methodology", subtitle: "Tactical decision making, endurance and clay court movement" },
    { image: academyGallery7, title: "Major Dhyan Chand Complex", subtitle: "14 courts at Central Delhi's premier tennis tournament venue" },
    { image: academyGallery8, title: "Young Champion Progress", subtitle: "From red ball fun to full tournament readiness" },
    { image: academyGallery9, title: "Technical Stroke Analysis", subtitle: "High-speed racket head acceleration and grip fundamentals" },
    { image: academyGallery10, title: "Punjabi Bagh Club Hub", subtitle: "Floodlit evening sessions for adults, juniors and competitive squads" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <Section className="bg-surface/30">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Academy In Action"
            title="Every Session Built To Inspire Excellence"
            body="Step onto our courts across Delhi. Experience the energy, coaching precision, and player camaraderie that defines Sports Life Tennis Academy."
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border/80 bg-surface p-5">
              <p className="font-display text-3xl font-black text-neon">27 Courts</p>
              <p className="text-xs text-muted-foreground mt-1 font-semibold uppercase tracking-wider">
                Multi-Surface Network
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-surface p-5">
              <p className="font-display text-3xl font-black text-neon">12+ Coaches</p>
              <p className="text-xs text-muted-foreground mt-1 font-semibold uppercase tracking-wider">
                Certified Mentors
              </p>
            </div>
          </div>
          <div className="mt-8">
            <CtaLink to="/gallery" variant="ghost">
              View Full Gallery
            </CtaLink>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
            <img
              key={slides[activeIndex]?.image}
              src={slides[activeIndex]?.image}
              alt={slides[activeIndex]?.title ?? ""}
              loading="lazy"
              decoding="async"
              className="size-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <span className="rounded-full bg-neon px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                Featured Moment
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                {slides[activeIndex]?.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/85">
                {slides[activeIndex]?.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border bg-background/80 px-5 py-3.5 backdrop-blur">
            <div className="flex gap-1.5">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-6 bg-neon" : "w-2 bg-border hover:bg-neon/60"
                  }`}
                />
              ))}
            </div>
            <div className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
              {activeIndex + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               MAIN HOMEPAGE                                */
/* -------------------------------------------------------------------------- */
function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <CentresSpotlight />
      <FounderSpotlight />
      <ProgramsSection />
      <InitiativesSection />
      <GalleryCarousel />

      {/* Video Highlights Section */}
      <Section>
        <div className="mx-auto max-w-5xl space-y-8 text-center">
          <SectionHeading
            align="center"
            eyebrow="Video Highlights"
            title="Real Training Moments On Court"
            body="Watch how our coaches bring intensity, footwork drills, and tactical rally discipline to every session across our Delhi centres."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[video1, video2, "/videos/img_1954.mov"].map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border bg-black shadow-xl"
              >
                <div className="absolute left-3 top-3 z-10 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-wider text-white font-bold border border-white/10">
                  Highlight {index + 1}
                </div>
                <div className="aspect-[9/16] sm:aspect-[4/5] overflow-hidden bg-black">
                  <video
                    src={src}
                    controls
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="The Sports Life Difference"
          title="Details Other Academies Skip"
          body="We go beyond generic ball-feeding. Here is why parents and competitive athletes trust Sports Life Tennis Academy."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <article className="card-elevated h-full p-7 border border-border bg-surface">
                <span className="font-display text-sm font-black text-neon">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Facilities Breakdown */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
              <img
                src={courtsImg}
                alt="Tennis court facilities at Sports Life"
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                className="h-[440px] w-full object-cover lg:h-[520px]"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Infrastructure"
              title="Built For The Way Championship Tennis Is Played"
              body="Train with the variety and court standards needed to excel in national and international tournaments."
            />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {FACILITIES.slice(0, 4).map((f) => (
                <li key={f.name} className="flex items-start justify-between gap-6 py-4.5">
                  <div>
                    <h3 className="text-base font-bold text-foreground">{f.name}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{f.body}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-surface-2 px-3 py-1 text-[10px] tracking-wider text-neon uppercase font-bold">
                    {f.tag}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaLink to="/facilities" variant="ghost">
                Explore Facilities
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface/30">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Player & Parent Voices"
            title="Real Words From Our Tennis Community"
            body="Read how structured coaching and regular match play have transformed the game of our junior athletes and adults."
          />
          <CtaLink to="/testimonials" variant="ghost">
            All Reviews
          </CtaLink>
        </div>
        <div className="mt-12">
          <TestimonialsSlider />
        </div>
      </Section>

      {/* Coaching Team Grid */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Coaches"
            title="Experienced Mentors. Zero Autopilot."
            body="Led by Founder Abhiney Kumar and certified coaches with national playing credentials and player-first mentorship."
          />
          <CtaLink to="/team" variant="ghost">
            Meet Entire Team
          </CtaLink>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COACHES.slice(0, 4).map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <article className="card-elevated group h-full overflow-hidden border border-border bg-surface flex flex-col justify-between">
                {c.image ? (
                  <div className="h-72 w-full overflow-hidden bg-surface-2/60 flex items-center justify-center p-2">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="grid h-72 place-items-center bg-[image:var(--gradient-electric)] text-4xl font-black text-primary-foreground">
                    {c.initials}
                  </div>
                )}
                <div className="p-5 grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{c.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-neon">{c.role}</p>
                    <p className="mt-2.5 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {c.bio}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-foreground/80">{c.cert}</span>
                    {c.name === "Abhiney Kumar" ? (
                      <Link
                        to="/about/meet-founder"
                        className="text-xs font-bold text-neon hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>Details</span>
                        <span>→</span>
                      </Link>
                    ) : (
                      <Link
                        to="/team/$slug"
                        params={{
                          slug:
                            c.name === "Rahul Singh"
                              ? "rahul-singh"
                              : c.name === "Mukul Singh"
                              ? "mukul-singh"
                              : "samriti-punyani",
                        }}
                        className="text-xs font-bold text-neon hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>Details</span>
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-surface/30">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            body="Here are answers to the most common questions from parents and players before joining their first session."
          />
          <div>
            <FaqSection />
          </div>
        </div>
      </Section>

      {/* Final Conversion Banner */}
      <CtaBanner />
    </>
  );
}

export default HomePage;
