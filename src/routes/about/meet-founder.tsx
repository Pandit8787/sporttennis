import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Maximize2,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";

const heroImage = "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg";
const headshotImage = "/abhiney-kumar-headshot.jpg";
const barcelonaImage = "/founder-gallery/abhiney-at-barcelona-tennis-academy.jpg";
const jofreImage = "/founder-gallery/abhiney-with-jofre-porta.jpg";
const ferreroImage = "/founder-gallery/abhiney-at-jc-ferrero-1.jpg";
const courtsImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const startingPhoto = "/founder-gallery/starting-playing-photo.jpg";

interface AcademyHighlight {
  title: string;
  subtitle: string;
  location: string;
  badge: string;
  image: string;
  alt: string;
}

const europeanAcademies: AcademyHighlight[] = [
  {
    title: "",
    subtitle: "",
    location: "",
    badge: "",
    image: "/founder-gallery/elite-tennis-academy-barcelona.jpg",
    alt: "",
  },
  {
    title: "",
    subtitle: "",
    location: "",
    badge: "",
    image: "/founder-gallery/abhiney-global-agent-tennis-academy-madrid.jpg",
    alt: "",
  },
  {
    title: "",
    subtitle: "",
    location: "",
    badge: "",
    image: "/founder-gallery/abhiney-with-karen-khachanov-world-no-8.jpg",
    alt: "",
  },
  {
    title: "",
    subtitle: "",
    location: "",
    badge: "",
    image: "/founder-gallery/abhiney-with-jofre-porta.jpg",
    alt: "",
  },
  {
    title: "",
    subtitle: "",
    location: "",
    badge: "",
    image: "/founder-gallery/abhiney-at-jc-ferrero-1.jpg",
    alt: "",
  },
  {
    title: "",
    subtitle: "",
    location: "",
    badge: "",
    image: "/founder-gallery/abhiney-at-barcelona-tennis-academy.jpg",
    alt: "",
  },
];

interface StorySlide {
  src: string;
  title: string;
  category?: string;
  year?: string;
  desc?: string;
  position?: string;
}

const competitiveEraSlides: StorySlide[] = [
  {
    src: "/founder-gallery/cs7-winner-2016.jpg",
    title: "CS-7 Tournament Winner",
    year: "2016",
    category: "AITA Championship Series",
    desc: "",
    position: "object-top",
  },
  {
    src: "/founder-gallery/inter-college-winner.jpg",
    title: "Inter-College Champion",
    year: "2017–18",
    category: "Delhi University",
    desc: ".",
    position: "object-top",
  },
  {
    src: "/founder-gallery/vilas-tennis-academy-mallorca.jpg",
    title: "Vilas Tennis Academy",
    year: "2016",
    category: "Mallorca, Spain",
    desc: "",
    position: "object-center",
  },
  {
    src: "/founder-gallery/tournament-winner-2019.jpg",
    title: "Aahvaan Champion",
    year: "2019–20",
    category: "Men's Lawn Tennis 1st Position",
    desc: "",
    position: "object-top",
  },
];

const spainStintSlides: StorySlide[] = [
  {
    src: "/founder-gallery/jofre-porta-academy-group.jpg",
    title: "Global Tennis Team — Jofre Porta Academy",
    year: "",
    category: "Mallorca, Spain",
    desc: "",
    position: "object-center",
  },
  {
    src: "/founder-gallery/abhiney-with-karen-khachanov-atp.jpg",
    title: "With Karen Khachanov (Former ATP World No. 8)",
    year: "",
    category: "ATP Pro Circuit Exposure",
    desc: "",
    position: "object-top",
  },
  {
    src: "/founder-gallery/spain-training-dsc1528.jpg",
    title: "High-Performance Technical Coaching",
    year: "",
    category: "European Methods",
    desc: "",
    position: "object-center",
  },
  {
    src: "/founder-gallery/spain-stint-img20230401.jpg",
    title: "Junior Champions & Mentorship",
    year: "",
    category: "European Youth Circuit",
    desc: "",
    position: "object-top",
  },
];

const nationalSystemSlides: StorySlide[] = [
  {
    src: "/founder-gallery/working-with-sai.jpg",
    title: "Working With Sports Authority of India",
    year: "SAI / Khelo India",
    category: "National System",
    desc: "",
    position: "object-top",
  },
  {
    src: "/founder-gallery/khelo-india-sai-img20240202.jpg",
    title: "Working with Sports Authority of India-Khelo India",
    year: "2024",
    category: "Induction Protocol",
    desc: "",
    position: "object-top",
  },
];

const foundingPurposeSlides: StorySlide[] = [
  {
    src: "/founder-gallery/founding-purpose-img7701.jpg",
    title: "Roshanara Club Tennis Courts",
    year: "",
    category: "",
    desc: "",
    position: "object-center",
  },
  {
    src: "/founder-gallery/founding-purpose-img8427.jpg",
    title: "Academy Court Atmosphere & High Standards",
    year: "",
    category: "Academy Training Facility",
    desc: "",
    position: "object-center",
  },
];

const philosophySlides: StorySlide[] = [
  {
    src: "/founder-gallery/philosophy-img20240929.jpg",
    title: "Player-First Mentorship on Court",
    year: "",
    category: "Sports Life Philosophy",
    desc: "",
    position: "object-[center_25%]",
  },
  {
    src: "/founder-gallery/philosophy-img4272.jpg",
    title: "",
    year: "",
    category: "",
    desc: "",
    position: "object-center",
  },
];

function ChapterImageSlider({
  slides,
  interval = 5000,
  className = "",
  viewportHeightClass = "h-[380px] sm:h-[450px] lg:h-[500px]",
}: {
  slides: StorySlide[];
  interval?: number;
  className?: string;
  viewportHeightClass?: string;
}) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => {
    setActive((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setActive((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (isPaused || lightboxOpen || slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((curr) => (curr + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isPaused, lightboxOpen, slides.length, interval, active]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, slides.length]);

  const currentSlide = slides[active] ?? slides[0]!;

  return (
    <>
      <div
        className={`overflow-hidden rounded-2xl border border-border/80 bg-surface-2/40 shadow-xl transition-all duration-300 hover:border-neon/40 ${className}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider Viewport - Ambient Photo Canvas (Zero black bars + 100% full uncropped images) */}
        <div className={`relative ${viewportHeightClass} w-full overflow-hidden bg-surface-2 group/slider`}>
          {/* Dynamic Ambient Blurred Backdrop: Fills entire box with vivid image colors, eliminating black sidebars */}
          {slides.map((slide, i) => (
            <img
              key={`bg-${i}`}
              src={slide.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover scale-125 pointer-events-none transition-opacity duration-700 ease-in-out"
              style={{
                opacity: i === active ? 0.75 : 0,
                filter: "blur(32px) saturate(1.45) brightness(0.82)",
              }}
            />
          ))}

          {/* Subtle soft tint over ambient backdrop for depth and elegance */}
          <div className="pointer-events-none absolute inset-0 bg-black/20 backdrop-blur-xs" />

          {/* Foreground Sharp Uncropped Image: 100% complete photo, never cropped or cut off */}
          {slides.map((slide, i) => (
            <div
              key={`fg-${i}`}
              className="absolute inset-0 size-full flex items-center justify-center p-2.5 sm:p-4 transition-opacity duration-700 ease-in-out cursor-pointer z-10"
              onClick={() => setLightboxOpen(true)}
              style={{
                opacity: i === active ? 1 : 0,
                zIndex: i === active ? 10 : 0,
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <img
                src={slide.src}
                alt={slide.title}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="max-h-full max-w-full object-contain rounded-xl shadow-2xl drop-shadow-[0_16px_36px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover/slider:scale-[1.01]"
              />
            </div>
          ))}

          {/* Soft gradient vignette for clean contrast with buttons */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 z-15" />

          {/* Zoom / Fullscreen Button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="View full image"
            title="Click to view full photo"
            className="absolute top-3 left-3 z-20 flex size-8 sm:size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:bg-neon hover:text-black hover:border-neon transition-all duration-200 shadow-md cursor-pointer"
          >
            <Maximize2 className="size-3.5 sm:size-4" />
          </button>

          {/* Navigation Arrows (for multi-image sliders) */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:bg-neon hover:text-black hover:border-neon transition-all duration-200 shadow-xl cursor-pointer"
              >
                <ChevronLeft className="size-4 sm:size-5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:bg-neon hover:text-black hover:border-neon transition-all duration-200 shadow-xl cursor-pointer"
              >
                <ChevronRight className="size-4 sm:size-5" />
              </button>
            </>
          )}

          {/* Counter Badge */}
          <div className="absolute top-3 right-3 z-20 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white/90 border border-white/20 shadow-md">
            {slides.length > 1 ? `${active + 1} / ${slides.length}` : "Photo Archive"}
          </div>
        </div>

        {/* Caption & Indicator Bar */}
        <div className="border-t border-border/80 bg-surface/95 backdrop-blur-md p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {currentSlide.category && (
                  <span className="text-xs font-bold uppercase tracking-wider text-neon">
                    {currentSlide.category}
                  </span>
                )}
                {currentSlide.year && (
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-border text-muted-foreground">
                    {currentSlide.year}
                  </span>
                )}
              </div>
              <h4 className="text-base font-bold text-foreground leading-snug">
                {currentSlide.title}
              </h4>
              {currentSlide.desc && (
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {currentSlide.desc}
                </p>
              )}
            </div>

            {/* Dot Indicators (for multi-image sliders) */}
            {slides.length > 1 && (
              <div className="flex items-center gap-1.5 self-center sm:self-auto shrink-0 pt-1 sm:pt-0">
                {slides.map((slide, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                    onClick={() => setActive(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${i === active
                      ? "h-2 w-7 bg-neon shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                      : "h-2 w-2 bg-white/30 hover:bg-white/60"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="size-5" />
            </button>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-black/70 text-white border border-white/20 hover:bg-neon hover:text-black transition-all cursor-pointer shadow-xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-black/70 text-white border border-white/20 hover:bg-neon hover:text-black transition-all cursor-pointer shadow-xl"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}

            {/* Full Image Box */}
            <div className="max-h-[75vh] max-w-full overflow-hidden rounded-2xl border border-white/15 bg-black/80 shadow-2xl flex items-center justify-center">
              <img
                src={currentSlide.src}
                alt={currentSlide.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center max-w-lg px-4">
              {currentSlide.category && (
                <div className="inline-flex items-center gap-1.5 rounded-full bg-neon/15 px-3 py-1 text-xs font-semibold text-neon border border-neon/30 mb-2">
                  <span>{currentSlide.category}</span>
                  {currentSlide.year && <span>• {currentSlide.year}</span>}
                </div>
              )}
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {currentSlide.title}
              </h3>
              {currentSlide.desc && (
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentSlide.desc}
                </p>
              )}
              {slides.length > 1 && (
                <p className="text-[11px] text-zinc-400 mt-2 font-medium">
                  {active + 1} of {slides.length} • Use ← → keys to navigate
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const Route = createFileRoute("/about/meet-founder")({
  head: () => ({
    meta: [
      { title: "Meet the Founder — Abhiney Kumar | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Learn about Abhiney Kumar, Founder & Head Coach of Sports Life Tennis Academy. From a childhood passion for tennis to building a player-first academy focused on long-term athlete development.",
      },
      { property: "og:title", content: "Meet the Founder — Abhiney Kumar" },
      {
        property: "og:description",
        content:
          "From a childhood passion for tennis to building a player-first academy focused on long-term athlete development.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about/meet-founder" },
    ],
    links: [{ rel: "canonical", href: "/about/meet-founder" }],
  }),
  component: MeetFounderPage,
});

function MeetFounderPage() {
  const [activeAcademyModal, setActiveAcademyModal] = useState<number | null>(null);
  const activeAcademy = activeAcademyModal !== null ? europeanAcademies[activeAcademyModal] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeAcademyModal === null) return;
      if (e.key === "Escape") setActiveAcademyModal(null);
      if (e.key === "ArrowLeft") {
        setActiveAcademyModal((prev) =>
          prev !== null ? (prev === 0 ? europeanAcademies.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setActiveAcademyModal((prev) =>
          prev !== null ? (prev === europeanAcademies.length - 1 ? 0 : prev + 1) : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeAcademyModal]);

  return (
    <>
      {/* Hero */}
      <PageHero
        title=""
        image={heroImage}
        removeFog
      />

      {/* Profile Overview */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-border bg-surface p-3 shadow-xl">
                <img
                  src={headshotImage}
                  alt="Abhiney Kumar — Founder , Sports Life Tennis Academy"
                  className="aspect-4/5 w-full rounded-2xl object-cover object-top"
                />
                <div className="mt-4 rounded-xl bg-linear-to-r from-neon/15 via-electric/10 to-transparent p-4">
                  <p className="font-display text-lg font-bold text-foreground">Abhiney Kumar</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neon">
                    Founder  · Sports Life Tennis Academy
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-surface border border-border px-2.5 py-1 text-muted-foreground font-medium">
                      20+ Years Experience
                    </span>
                    <span className="rounded-full bg-surface border border-border px-2.5 py-1 text-muted-foreground font-medium">
                      Spain Coaching Exposure
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
              eyebrow="Meet the Founder"
              title="Abhiney Kumar"
              body="Founder , Sports Life Tennis Academy"
            />
            <div className="space-y-4 text-base leading-relaxed text-foreground/85 lg:text-lg">
              <p className="font-medium text-foreground">
                From a childhood passion for tennis to building a player-first academy focused on
                long-term athlete development.
              </p>
              <div className="rounded-2xl border border-neon/30 bg-neon/5 p-6">
                <p className="font-serif italic text-base sm:text-lg text-foreground leading-relaxed">
                  “I believe tennis can change lives because it changed mine. My journey began
                  because a cricket academy said ‘No.’ That unexpected rejection led me to the sport
                  that would eventually become my profession, my passion, and the foundation of Sports
                  Life. Today, my purpose is simple: To make sure that every player who walks into
                  Sports Life finds the opportunity, guidance, and support they need to build their
                  own journey — regardless of where they start.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Detailed Journey Narrative */}
      <Section className="bg-surface/30 py-16 sm:py-24">
        <SectionHeading
          eyebrow="The Story"
          title="The Journey of Abhiney Kumar"
          body="From a childhood passion for tennis to building a player-first academy focused on long-term athlete development across Delhi."
        />

        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Chapter 1: The Beginning */}
          <div className="card-elevated p-6 sm:p-8 lg:p-10 border border-border bg-surface/90 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-300 hover:border-border/90">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 lg:col-span-7">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neon bg-neon/10 px-3 py-1 rounded-full border border-neon/20">

                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Every Journey Begins With a Single Moment
                </h3>
                <p className="text-base leading-relaxed text-foreground/85">
                  For me, that moment came when I was just four or five years old. My father was a huge
                  cricket fan and naturally wanted me to become a cricketer. I was excited about cricket
                  too, so one day he took me to a cricket academy to enrol me. The coaches told him I was
                  too young to join.
                </p>
                <p className="text-base leading-relaxed text-foreground/85">
                  As we were leaving, we noticed a group of players practising on the nearby tennis
                  courts. My father became curious about the sport and spoke to one of the tennis
                  coaches. The coach welcomed me and said I could start learning tennis immediately. That
                  unexpected conversation changed my life. What began as an alternative to cricket soon
                  became my greatest passion.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-2 border border-border text-xs text-muted-foreground">
                    <Sparkles className="size-3.5 text-neon" />
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="group relative overflow-hidden rounded-2xl border border-border/80 bg-surface-2/60 p-3 shadow-xl transition-all duration-300 hover:border-neon/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
                  <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden rounded-xl bg-surface-2">
                    <img
                      src={startingPhoto}
                      alt="Young Abhiney Kumar playing tennis on clay court - where the journey began"
                      className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="pt-3.5 px-1 flex items-center justify-between gap-2 border-t border-border/60 mt-2">
                    <div>
                      <p className="text-xs font-bold text-foreground">The First Serve</p>
                      <p className="text-[11px] text-muted-foreground"></p>
                    </div>
                    <span className="text-[10px] font-semibold text-neon uppercase tracking-wider bg-neon/10 px-2 py-0.5 rounded-full border border-neon/20">

                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 2: Competitive Era (Side-by-Side) */}
          <div className="card-elevated p-6 sm:p-8 lg:p-10 border border-border bg-surface/90 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-300 hover:border-border/90">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neon bg-neon/10 px-3 py-1 rounded-full border border-neon/20">

                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  16 Years On The Court
                </h3>
                <p className="text-base leading-relaxed text-foreground/85">
                  Over the next 16 years, tennis became much more than a sport. It became my teacher, my
                  discipline, and my way of life. I competed professionally, participated in AITA
                  tournaments, represented my college in numerous competitions, and experienced the
                  victories, defeats, pressure, and uncertainty that come with competitive tennis.
                </p>
                <p className="text-base leading-relaxed text-foreground/85">
                  Every match taught me something. Winning taught me confidence. Losing taught me
                  humility. Competition taught me how to deal with pressure, setbacks, and expectations.
                  These experiences later became an important part of how I understood player development.
                </p>
                <p className="text-base leading-relaxed text-foreground/85">
                  In 2016, I travelled to <strong>Vilas Tennis Academy</strong> in Mallorca, Spain,
                  where I experienced an international tennis training environment for the first time.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-surface-2 border border-border text-foreground font-medium flex items-center gap-1.5">

                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-2 border border-border text-foreground font-medium flex items-center gap-1.5">

                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-2 border border-border text-foreground font-medium flex items-center gap-1.5">

                  </span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ChapterImageSlider slides={competitiveEraSlides} />
              </div>
            </div>
          </div>

          {/* Chapter 3: A Turning Point (Feature Callout Card) */}
          <div className="relative overflow-hidden rounded-3xl border border-neon/30 bg-gradient-to-br from-surface via-surface-2/90 to-surface p-8 sm:p-10 shadow-xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-neon/10 blur-3xl pointer-events-none" />
            <div className="relative space-y-4 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neon bg-neon/10 px-3 py-1 rounded-full border border-neon/20">

                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                A Turning Point
              </h3>
              <p className="text-base leading-relaxed text-foreground/85">
                In 2020, the COVID-19 pandemic changed the direction of my playing career. My family
                faced serious financial difficulties, and continuing professional tennis was no longer
                financially possible. Stepping away from the sport I loved was one of the hardest
                decisions I had to make.
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                For more than two years, my focus shifted towards supporting my family and rebuilding
                our financial stability. Those years taught me resilience, responsibility, patience,
                and the importance of continuing to move forward when circumstances are difficult.
              </p>
              <div className="pt-2 border-l-2 border-neon pl-4 mt-4">
                <p className="font-serif italic text-base text-foreground/90 leading-relaxed">
                  “Adversity on and off the court builds the mental stamina required to mentor athletes through their own toughest setbacks.”
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 4: Spain Stints (Alternating: Slider Left, Text Right) */}
          <div className="card-elevated p-6 sm:p-8 lg:p-10 border border-border bg-surface/90 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-300 hover:border-border/90">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="order-2 lg:order-1 lg:col-span-7">
                <ChapterImageSlider slides={spainStintSlides} />
              </div>

              <div className="order-1 lg:order-2 space-y-4 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neon bg-neon/10 px-3 py-1 rounded-full border border-neon/20">

                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Learning Beyond India
                </h3>
                <p className="text-base leading-relaxed text-foreground/85">
                  In 2023, tennis gave me another opportunity. I had the opportunity to work in <strong>Jofre Porta Academy</strong> in Mallorca, Spain. Working within his coaching environment became one of the most valuable learning experiences of my career. I gained deeper exposure to player development, technical and tactical coaching, tournament planning, long-term development, and the systems required to develop players consistently over time.
                </p>
                <p className="text-base leading-relaxed text-foreground/85">
                  I later continued my learning journey at the <strong>J.C. Ferrero Tennis Academy</strong> in Villena, Spain.
                </p>
                <p className="text-base leading-relaxed text-foreground/85">
                  During my time in Spain, I also met Indian players and parents who were training and
                  competing internationally. Their experiences made me realise that many challenges faced
                  by Indian tennis players go far beyond coaching. Tournament planning, match exposure,
                  travel, accommodation, access to quality facilities, financial constraints, and
                  long-term guidance can all have a significant impact on a player's journey. Those
                  conversations changed the way I looked at tennis.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-surface-2 border border-border text-foreground font-medium flex items-center gap-1.5">

                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-2 border border-border text-foreground font-medium flex items-center gap-1.5">

                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-2 border border-border text-foreground font-medium flex items-center gap-1.5">

                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 5: National System (Text Left, Image Showcase Right) */}
          <div className="card-elevated p-6 sm:p-8 lg:p-10 border border-border bg-surface/90 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-300 hover:border-border/90">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neon bg-neon/10 px-3 py-1 rounded-full border border-neon/20">

                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  From Player To Coach
                </h3>
                <p className="text-base leading-relaxed text-foreground/85">
                  After returning to India, I had the opportunity to work with the <strong>Sports Authority of India (SAI)</strong> under the <strong>Khelo India Talent Search and Development Program</strong>, where I contributed to the development of the induction protocol for tennis players entering the Khelo India Scheme.
                </p>
                <p className="text-base leading-relaxed text-foreground/85">
                  This experience gave me a broader perspective on player development and strengthened a
                  belief that had been developing throughout my journey: Indian tennis needs strong
                  systems alongside talented players. Players need more than coaching. They need the right
                  environment, regular competition, structured development, guidance, opportunities, and
                  people who understand the journey they are trying to build.
                </p>
                <div className="pt-2">
                  <div className="p-3.5 rounded-xl bg-surface-2/80 border border-border/80 space-y-1">






                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ChapterImageSlider slides={nationalSystemSlides} />
              </div>
            </div>
          </div>

          {/* Chapter 6: Why Sports Life Exists (Alternating: Slider Left, Text Right) */}
          <div className="card-elevated p-6 sm:p-8 lg:p-10 border border-border bg-surface/90 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-300 hover:border-border/90">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="order-2 lg:order-1 lg:col-span-7">
                <ChapterImageSlider slides={foundingPurposeSlides} />
              </div>

              <div className="order-1 lg:order-2 space-y-4 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neon bg-neon/10 px-3 py-1 rounded-full border border-neon/20">

                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Why Sports Life Exists
                </h3>
                <p className="text-base leading-relaxed text-foreground/85">
                  That belief eventually led to the creation of <strong>Sports Life Tennis Academy</strong>. Sports Life began its journey in 2024 at DDA Roshanara Club with a simple vision — to create more than just a place where players learn tennis. We wanted to build an environment where players could develop as complete athletes and individuals.
                </p>
                <p className="text-base leading-relaxed text-foreground/85">
                  Today, more than 300 players train with Sports Life every month, supported by a growing
                  team of professional coaches committed to structured, player-first development. Sports
                  Life has continued to grow across Delhi, with centres at Roshanara Club, Major Dhyan
                  Chand Sports Complex, and Punjabi Bagh Club.
                </p>
                <div className="rounded-xl border border-neon/30 bg-neon/10 p-4">

                </div>

              </div>
            </div>
          </div>

          {/* Chapter 7: The Sports Life Philosophy (Text Left, Image Showcase Right) */}
          <div className="card-elevated p-6 sm:p-8 lg:p-10 border border-border bg-surface/90 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-300 hover:border-border/90">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neon bg-neon/10 px-3 py-1 rounded-full border border-neon/20">

                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  The Sports Life Philosophy
                </h3>
                <p className="text-base leading-relaxed text-foreground/85">
                  I believe every player has a different starting point, different goals, and a different pathway.
                </p>
                <p className="text-base leading-relaxed text-foreground/85">
                  For one player, success may mean learning the fundamentals. For another, it may mean
                  competing at national tournaments. For someone else, it may mean preparing for
                  university admissions, pursuing international opportunities, or building a career
                  within tennis.
                </p>
                <p className="text-base leading-relaxed text-foreground/85 font-medium text-foreground">
                  The pathway is different for everyone. Our responsibility is to understand that journey
                  and help build the right pathway. That is what player-first development means to me.
                </p>

              </div>

              <div className="lg:col-span-7">
                <ChapterImageSlider slides={philosophySlides} />
              </div>
            </div>
          </div>

          {/* Chapter 8: Looking Ahead */}
          <div className="card-elevated p-6 sm:p-8 lg:p-10 border border-border bg-surface/90 backdrop-blur-sm shadow-xl rounded-3xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neon bg-neon/10 px-3 py-1 rounded-full border border-neon/20">
                Chapter 08 · Future Roadmap
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Looking Ahead
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
                Sports Life is expanding beyond traditional court coaching. Our vision is to empower athletes with an all-inclusive tennis ecosystem:
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-2">
              {[
                { title: "Structured Development", desc: "Long-term progression models tailored to each age and capability." },
                { title: "Competitive Match Play", desc: "Weekly internal league matches and simulation under pressure." },
                { title: "Tournament Support", desc: "Strategic planning, ranking guidance, and on-tour mentorship." },
                { title: "Athletic Conditioning", desc: "Tennis-specific fitness, agility, speed, and injury prevention." },
                { title: "Educational Guidance", desc: "Balancing school, academic milestones, and athletic training." },
                { title: "Career Pathways", desc: "Guiding players toward college tennis scholarships and coaching." },
                { title: "Ecosystem Connect", desc: "Access to international academies, certified scouts, and mentors." },
                { title: "Character & Discipline", desc: "Building sportsmanship, mental grit, and lifelong positive habits." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-surface-2/60 border border-border/80 hover:border-neon/40 transition-all duration-200"
                >
                  <CheckCircle2 className="size-5 text-neon mb-2" />
                  <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Qualifications & Certifications */}
      <Section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Credentials"
          title="Qualifications & Certifications"
          body="Official credentials and international training certifications earned across premier tennis institutions."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Diploma — J.C. Ferrero Tennis Academy",
              desc: "J.C. Ferrero Tennis Academy (Equelite), Spain — High performance player development and technical coaching.",
              icon: Globe2,
            },
            {
              title: "NIS Certified Coach",
              desc: "National Institute of Sports qualification in sports coaching and physical conditioning.",
              icon: GraduationCap,
            },
            {
              title: "PTR Certified Coach",
              desc: "Professional Tennis Registry international coach certification and modern stroke development.",
              icon: Award,
            },
            {
              title: "AITA / ITF Certified Coach",
              desc: "All India Tennis Association & International Tennis Federation professional credentials.",
              icon: ShieldCheck,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card-elevated flex flex-col justify-between p-6 transition-all duration-300 hover:border-neon/50 border border-border bg-surface rounded-2xl hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
                <item.icon className="size-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base leading-snug">{item.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* International Learning Highlights */}
      <Section className="bg-surface/30 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Spain Training"
          title="Learning From the World of Tennis"
          body="Global exposure gained across world-renowned European academies."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {europeanAcademies.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveAcademyModal(idx)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-neon/50 hover:shadow-[0_12px_32px_rgba(16,185,129,0.18)] cursor-pointer"
            >
              {/* Uniform 3:4 aspect ratio image container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-2">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

                {/* Top Location / Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-neon border border-neon/30 backdrop-blur-md shadow-sm">
                  <MapPin className="size-3 text-neon" />
                  <span>{item.badge}</span>
                </div>

                {/* Top Right Zoom Icon */}
                <div className="absolute top-3.5 right-3.5 z-10 flex size-8 items-center justify-center rounded-full bg-black/60 text-white/80 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <Maximize2 className="size-3.5 text-neon" />
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-8 bg-gradient-to-t from-black/95 via-black/75 to-transparent">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neon/90 mb-1 flex items-center gap-1.5">
                    <Globe2 className="size-3" />
                    <span>{item.location}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-neon transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-300/90 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Click any card to view in high resolution with full academy details.
        </p>
      </Section>

      {/* Academy Lightbox Modal */}
      {activeAcademyModal !== null && activeAcademy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveAcademyModal(null)}
        >
          <div
            className="relative max-w-2xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveAcademyModal(null)}
              className="absolute -top-12 right-0 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="size-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setActiveAcademyModal((prev) =>
                  prev !== null ? (prev === 0 ? europeanAcademies.length - 1 : prev - 1) : null
                )
              }
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-black/70 text-white border border-white/20 hover:bg-neon hover:text-black transition-all cursor-pointer shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={() =>
                setActiveAcademyModal((prev) =>
                  prev !== null ? (prev === europeanAcademies.length - 1 ? 0 : prev + 1) : null
                )
              }
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-black/70 text-white border border-white/20 hover:bg-neon hover:text-black transition-all cursor-pointer shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Image Box */}
            <div className="max-h-[70vh] max-w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl flex items-center justify-center">
              <img
                src={activeAcademy.image}
                alt={activeAcademy.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center max-w-lg px-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-neon/15 px-3 py-1 text-xs font-semibold text-neon border border-neon/30 mb-2">
                <MapPin className="size-3 text-neon" />
                <span>{activeAcademy.location}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {activeAcademy.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {activeAcademy.subtitle}
              </p>
              <p className="text-[11px] text-zinc-400 mt-2 font-medium">
                {activeAcademyModal + 1} of {europeanAcademies.length} • Use ← → keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}



    </>
  );
}
