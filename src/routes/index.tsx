import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/academy-gallery/hero-chatgpt-063244-20260813.png";
import courtsImg from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM.jpeg";
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
const video1 = "/videos/academy-highlight-1.mp4";
const video2 = "/videos/academy-highlight-2.mp4";
const video3 = "/videos/academy-highlight-3.mp4";
import {
  ACADEMY,
  COACHES,
  FACILITIES,
  PROGRAMS,
  STATS,
  WHY_US,
} from "@/lib/site-data";
import { ShuttleIcon } from "@/components/site/brand";
import { CtaLink } from "@/components/site/layout";
import { Counter, Reveal } from "@/components/site/motion-primitives";
import {
  CtaBanner,
  FaqSection,
  Section,
  SectionHeading,
} from "@/components/site/sections";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flame,
  Globe2,
  MapPin,
  Pause,
  Play,
  Sparkles,
  Star,
  Trophy,
  Users2,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sports Life Tennis Academy — Train With Purpose | Delhi" },
      {
        name: "description",
        content:
          "Sports Life Tennis Academy offers structured tennis coaching across Delhi at Roshanara Club, Major Dhyan Chand Complex & Punjabi Bagh Club. 25 courts, 26+ coaches, and regular match play.",
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
function TypewriterText({ text, delay = 0, speed = 40, className }: { text: string; delay?: number; speed?: number; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed]);
  return <span className={className}>{displayed}</span>;
}

function Hero() {
  const images = [
    "/hero-slider/banner-1.jpg",
    "/hero-slider/banner-2.jpg",
    "/hero-slider/banner-3.jpg",
    "/hero-slider/banner-4.jpg",
    "/hero-slider/banner-5.jpg"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex items-center min-h-[60svh] lg:min-h-[85svh] w-full overflow-hidden bg-black mt-[72px] sm:mt-[80px]">
      {/* Background Images */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Banner ${i + 1}`}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-1000 ${i === index ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
        />
      ))}

      {/* Subtle overlay for text legibility, no fog */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 py-16 lg:py-24 lg:px-8">
        <h1
          className="max-w-5xl text-[clamp(2.4rem,7.5vw,6.5rem)] leading-[0.9] font-black uppercase text-white text-left"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
        >
          <TypewriterText text="Welcome to" delay={300} speed={40} className="block text-[clamp(1.5rem,4vw,3rem)]" />
          <TypewriterText text="Sports Life" delay={1000} speed={50} className="block text-white drop-shadow-lg" />
          <TypewriterText text="Tennis Academy" delay={1700} speed={50} className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl" />
        </h1>

        <p
          className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
        >
          <TypewriterText text="" delay={2600} speed={25} />
        </p>

        {/* Stats Grid */}
        <Reveal delay={6}>
          <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 max-w-3xl">
            {[
              { value: "25", label: "Tennis Courts" },
              { value: "3", label: "Centres" },
              { value: "300+", label: "Players / Month" },
              { value: "1000+", label: "Trained Till Now" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md p-3.5 sm:p-4 text-center shadow-lg"
              >
                <p className="font-display text-2xl sm:text-3xl font-black bg-gradient-to-b from-white to-neon bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
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
    "25 Multi-Surface Courts in Delhi",
    "12 Synthetic · 10 Clay · 3 Grass Courts",
    "26+ Dedicated Coaches",
    "300+ Active Monthly Players",
    "1000+ Players Trained Till Now",
    "Weekly Sunday Match Play League",
    "Global Learning: Jofre Porta & Vishnu Vardhan",
    "Toddlers to Advanced & Performance Squads",
    "100% Player-Centred Development",
    "Major Dhyan Chand Sports Complex",
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
      area: "North Delhi · Shakti Nagar",
      courts: "9 Courts (4 Synthetic · 2 Clay · 3 Grass)",
      image: "/centre-gallery/whatsapp-20260813-171744-1.jpg",
      summary: "Where the Sports Life journey began in 2024. Multi-surface training with 4 synthetic, 2 clay, and 3 grass courts.",
    },
    {
      name: "Major Dhyan Chand Sports Complex",
      slug: "major-dhyan-chand-sports-complex",
      area: "Ashok Vihar · North-West Delhi",
      courts: "6 Courts (4 Synthetic · 2 Clay)",
      image: "/centre-gallery/whatsapp-20260813-171844-2.jpg",
      summary: "Expanded in 2026 to bring structured coaching and player-first structured training with 4 synthetic and 2 clay courts.",
    },
    {
      name: "Punjabi Bagh Club",
      slug: "punjabi-bagh-club",
      area: "West Delhi · Ring Road",
      courts: "10 Courts (6 Clay · 4 Synthetic)",
      image: "/centre-gallery/punjabi-bagh-img4616.jpg",
      summary: "Premier West Delhi tennis destination featuring 6 clay and 4 synthetic courts with active junior, adult and Sunday match play batches.",
    },
  ] as const;

  return (
    <Section className="bg-surface/30">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeading
          eyebrow="Delhi Infrastructure"
          title="3 Premier Centres 25 Courts"
          body="Train across all three major surfaces—Synthetic, Clay, and Grass—with certified coaching across North, West, and Central Delhi."
        />
        <CtaLink to="/centres" variant="ghost">
          All Centres
        </CtaLink>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {centresData.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.1}>
            <div className="card-elevated group flex flex-col h-full overflow-hidden border border-border/80 bg-surface rounded-3xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
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
    "Founder & Head Coach, Sports Life Tennis Academy",
    "20+ Years On The Court & Competitive Tennis",
    "International Coaching Experience in Spain (Jofre Porta Academy & JC Ferrero Academy)",
    "Contributed to SAI Induction Protocol for Tennis (Khelo India Scheme)",
  ];

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Vision & Leadership"
            title="Founded on Passion, Experience & Player-First Values"
            body="Sports Life was founded by Abhiney Kumar with a singular vision: to build an organization where every athlete receives structured guidance, regular competition, and long-term development."
          />

          <div className="mt-8 rounded-2xl bg-surface-2/60 border border-border/80 p-6 backdrop-blur-sm">
            <p className="font-serif italic text-base sm:text-lg text-foreground/90 leading-relaxed">
              “Every great journey begins with a purpose. Along my path in Spain and competitive tennis, I saw talented players who had passion but lacked structured match play and long-term development. Sports Life was built to fill that gap.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="size-2 rounded-full bg-neon" />
              <p className="font-display text-xs font-extrabold tracking-wider uppercase text-foreground">
                Abhiney Kumar · Founder
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
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-2xl aspect-[3/4] max-h-[580px]">
              <img
                src="/abhiney-with-jofre-porta.webp"
                alt="Abhiney Kumar with Jofre Porta - Spain Tennis Methodology"
                loading="lazy"
                decoding="async"
                className="size-full object-cover object-top"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  if (el.src !== "/abhiney-with-jofre-porta.jpg") {
                    el.src = "/abhiney-with-jofre-porta.jpg";
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-neon px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                  Founder & Spain Mentorship
                </span>
                <h3 className="mt-2 text-2xl font-black">Abhiney Kumar with Jofre Porta</h3>
                <p className="text-xs text-white/90 mt-1">
                  Global Tennis Team (Spain) · Spanish Methodology & Player Development
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
                <p className="text-xs text-muted-foreground">Mentored by Jofre Porta (Coach of Moya & Nadal)</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          ACADEMY PLAYERS SLIDESHOW                         */
/* -------------------------------------------------------------------------- */
function PlayersSlideshow() {
  const slides = [
    { image: "/players-slideshow/1000266508.jpg", title: "Group Training Session", subtitle: "Academy players on court at Roshanara Club" },
    { image: "/players-slideshow/img_8433.jpg", title: "Centre Action Shots", subtitle: "High-intensity drills across Delhi centres" },
    { image: "/about/founder-with-players.jpg", title: "Founder With Players", subtitle: "Abhiney Kumar training players on court" },
    { image: "/players-slideshow/img_0808.mp4", title: "Match Play Highlights", subtitle: "Real match rally and competitive play", isVideo: true },
    { image: "/gallery/img_8054.jpg", title: "Junior Player Development", subtitle: "Building juniors from ground-up with modern drills" },
    { image: "/gallery/img_8058.jpg", title: "Squad Practice", subtitle: "Group and paired rally discipline on synthetic courts" },
    { image: "/gallery/img_8059.jpg", title: "Technical Stroke Work", subtitle: "Precision-driven technique and consistency drills" },
    { image: "/gallery/img_8076.jpg", title: "Coach Interaction", subtitle: "Close guidance from certified coaches mid-session" },
    { image: "/gallery/img_9415.jpg", title: "Court Coverage Training", subtitle: "Endurance, movement and recovery drills" },
    { image: "/gallery/img_9420.jpg", title: "Academy Atmosphere", subtitle: "The Sports Life tennis family in action" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const goPrev = () => setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % slides.length);

  const active = slides[activeIndex]!;

  if (!active) return null;

  return (
    <Section className="bg-surface/30">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="Academy Players"
          title="Academy Highlights"
          body="High-quality action shots, training sessions, and group moments with Sports Life Tennis Academy players across all three Delhi centres."
        />
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="grid size-10 place-items-center rounded-full border border-border bg-surface text-foreground hover:bg-neon hover:text-white hover:border-neon transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="grid size-10 place-items-center rounded-full border border-border bg-surface text-foreground hover:bg-neon hover:text-white hover:border-neon transition-colors"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-black shadow-2xl">
        <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9] xl:aspect-[16/9] overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.85)_0%,#0a0a0a_70%,#000_100%)]">
          {/* Radial ambient glow on background */}
          <div className="pointer-events-none absolute -inset-0 z-10 opacity-60 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(circle_at_85%_75%,rgba(56,189,248,0.22),transparent_55%)]" />
          {active.isVideo ? (
            <video
              key={active.image}
              src={active.image}
              title={active.title}
              className="size-full object-contain animate-fade-slow"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={active.image} type="video/mp4" />
            </video>
          ) : (
            <img
              key={active.image}
              src={active.image}
              alt={active.title}
              loading="lazy"
              decoding="async"
              className="size-full object-contain animate-fade-slow"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = "none";
              }}
            />
          )}
          {/* Bottom gradient for title legibility */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
          {/* Title & subtitle */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 z-20">
            <div className="flex items-center gap-3 mb-3">
              <span className="rounded-full bg-neon px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                Academy Players · Slide {activeIndex + 1} / {slides.length}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white drop-shadow-lg max-w-3xl">
              {active.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/85 max-w-2xl">{active.subtitle}</p>
          </div>
          {/* Frame counter top-right */}
          <div className="absolute top-5 right-5 z-20 rounded-xl border border-white/15 bg-black/55 backdrop-blur px-3 py-1.5 font-mono text-[11px] font-bold tracking-widest text-white">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="mx-1 text-white/40">/</span>
            {String(slides.length).padStart(2, "0")}
          </div>
        </div>
        {/* Dots */}
        <div className="flex items-center justify-between border-t border-border bg-background/80 px-5 py-3.5 backdrop-blur">
          <div className="flex gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.title + i}
                type="button"
                aria-label={`Go to player slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === activeIndex ? "w-10 bg-neon" : "w-3 bg-border hover:bg-neon/60"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         HIGH INTENSITY TRAINING VIDEOS                     */
/* -------------------------------------------------------------------------- */
function HighIntensityTraining() {
  const items = [
    { src: video1 },
    { src: video2 },
    { src: video3 },
  ];
  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="On Court Intensity"
          title="Academy Highlights"
          body=""
        />
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted-foreground">
          <Dumbbell className="size-4 text-neon" />
          <span>3 Training Clips</span>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((v, i) => (
          <Reveal key={v.src} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-black shadow-xl">
              <div className="absolute left-3 top-3 z-20 flex items-center gap-2">
                <span className="rounded-full bg-black/65 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-wider text-white font-bold border border-white/10">
                  Clip {i + 1}
                </span>
                <span className="rounded-full bg-neon/15 border border-neon/30 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-neon">
                  <span className="flex items-center gap-1">
                    <Flame className="size-3" />
                  </span>
                </span>
              </div>
              <div className="aspect-[9/16] sm:aspect-[4/5] overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.92)_0%,#0a0a0a_65%,#000_100%)]">
                <video
                  src={v.src}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain transition duration-500"
                >
                  <source src={v.src} type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                <p className="font-bold text-white text-sm drop-shadow-md"></p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                       MEET OUR TEAM / TEAM INTRODUCTION                    */
/* -------------------------------------------------------------------------- */
function TeamIntroduction() {
  const teamPreview = [
    { name: "Abhiney Kumar", role: "Founder & Head Coach", image: "/abhiney-kumar-headshot.jpg" },
    { name: "Rahul Singh", role: "Head Coach", image: "/rahul-singh.jpg" },
    { name: "Mukul Singh", role: "Head Coach", image: "/mukul-singh.jpg" },
    { name: "Samriti Punyani", role: "Head Coach", image: "/samriti-punyani.jpg" },
    { name: "Rahul", role: "Senior Coach", image: "/coaches/rahul.jpg" },
    { name: "Ashish", role: "Senior Coach", image: "/coaches/ashish.jpg" },
    { name: "Vishal", role: "Senior Coach", image: "/coaches/vishal.jpg" },
    { name: "Rupesh", role: "Senior Coach", image: "/coaches/rupesh.jpg" },
  ];

  return (
    <Section className="bg-surface/30">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="Coaching Family"
          title="Meet Our Team · 26+ Certified Coaches"
          body="Led by four experienced Head Coaches, every Sports Life coach is hand-picked, trained in modern methods, and deeply committed to player-first development."
        />
        <CtaLink to="/team" variant="ghost">
          See Full Team
        </CtaLink>
      </div>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {teamPreview.map((coach, idx) => (
          <Reveal key={coach.name} delay={idx * 0.05}>
            <Link to="/team" className="group block text-center focus:outline-none">
              <div className="card-elevated rounded-2xl overflow-hidden border border-border/80 bg-surface hover:border-neon/40 transition-colors">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-3">
                  <p className="font-black text-[13px] text-foreground truncate">{coach.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{coach.role}</p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border/80 bg-surface p-5">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl bg-neon/15 text-neon">
              <Users2 className="size-5.5" />
            </div>
            <div>
              <p className="font-display text-3xl font-black text-foreground">26+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Certified Coaches</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border/80 bg-surface p-5">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl bg-electric/15 text-electric">
              <Trophy className="size-5.5" />
            </div>
            <div>
              <p className="font-display text-3xl font-black text-foreground">20+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Years Founder Experience</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border/80 bg-surface p-5">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl bg-amber-500/15 text-amber-400">
              <Globe2 className="size-5.5" />
            </div>
            <div>
              <p className="font-display text-3xl font-black text-foreground">Spain</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">International Methodology</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            NEW — PLAYER SPOTLIGHT                          */
/* -------------------------------------------------------------------------- */
function PlayerSpotlight() {
  const players = [
    {
      name: "Ishaan Verma",
      age: "16 yrs",
      achievement: "National U-17 Semifinalist",
      journey: "District round-of-32 → National semifinalist in 14 months under Sports Life performance pathway.",
      image: "/players-slideshow/img_8433.jpg",
      badge: "High Performance",
    },
    {
      name: "Sara Qureshi",
      age: "19 yrs",
      achievement: "State Doubles Champion",
      journey: "Returned after 3 years off court. Adults program + strength work restored match sharpness for title run.",
      image: "/about/founder-with-players.jpg",
      badge: "Adult & Returning",
    },
    {
      name: "Aditya Rane",
      age: "14 yrs",
      achievement: "Full Season · Zero Missed Matches",
      journey: "Recurring ankle issues resolved through guided conditioning and match-appropriate rehab protocols.",
      image: "/players-slideshow/1000266508.jpg",
      badge: "Athletic Development",
    },
  ];
  return (
    <Section className="bg-surface/30">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="Rising Stars"
          title="Player Spotlight — Success Stories From The Academy"
          body="Selected Sports Life Tennis Academy players who have trained through our structured pathways and achieved measurable results in match play, rankings and confidence."
        />
        <CtaLink to="/testimonials" variant="ghost">
          More Player Stories
        </CtaLink>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {players.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <article className="card-elevated group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-surface">
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.achievement}`}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.opacity = "0.4";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-neon px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                  {p.badge}
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] text-neon font-bold uppercase tracking-wider">{p.age}</p>
                  <h3 className="mt-1 text-2xl font-black drop-shadow-md">{p.name}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-neon/10 border border-neon/30 px-3 py-1.5 text-xs font-black text-neon">
                    <Trophy className="size-3.5" /> {p.achievement}
                  </div>
                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{p.journey}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
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
      <HighIntensityTraining />

      {/* Community Feedback / Google Review Spotlight */}
      <Section>
        <div className="card-elevated rounded-3xl border border-neon/30 bg-linear-to-r from-neon/10 via-surface to-surface p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-1.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 font-display text-sm font-bold text-foreground">5.0 / 5.0 Rating</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Loved by Delhi's Tennis Community
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Read verified Google reviews and Instagram video testimonials from parents, juniors, and adult players about our player-first coaching.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <CtaLink to="/testimonials" variant="neon">
              View All Testimonials
            </CtaLink>
            <CtaLink to="/contact" variant="ghost">
              Book Free Trial
            </CtaLink>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
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
