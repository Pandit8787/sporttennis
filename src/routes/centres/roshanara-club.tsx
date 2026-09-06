import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import { ChevronLeft, ChevronRight, Maximize2, X, CheckCircle2, Trophy, Sparkles } from "lucide-react";

const heroImage = "/centres/roshanara/roshanara-slide-1.jpg";

interface CentreSlide {
  src: string;
  title: string;
  subtitle?: string;
  badge: string;
  description: string;
  features: string[];
}

const roshanaraSlides: CentreSlide[] = [
  {
    src: "/centres/roshanara/roshanara-slide-1.jpg",
    title: "Tournament-Standard Clay Court",
    subtitle: "Endurance & Tactical Play",
    badge: "Red Clay Court",
    description: "Designed for high-intensity training sessions that cultivate patience, slide footwork, endurance, and strategic rally construction.",
    features: ["Natural Clay Surface", "Optimal Ball Bounce", "Slide & Recovery Training"],
  },
  {
    src: "/centres/roshanara/roshanara-slide-2.jpg",
    title: "High-Performance Synthetic Arena",
    subtitle: "Fast-Paced Championship Play",
    badge: "Synthetic Court",
    description: "Multi-layered synthetic courts providing true ball bounce and optimal pace for sharp technique drills and competitive match-play.",
    features: ["4 Championship Courts", "Night Floodlights", "Speed & Shot Precision"],
  },
  {
    src: "/centres/roshanara/roshanara-slide-3.jpg",
    title: "Championship Natural Grass Courts",
    subtitle: "Rare Grand-Slam Heritage",
    badge: "Grass Court",
    description: "One of Delhi's rare genuine grass court facilities offering low-bounce, quick reaction times, and classic serve-and-volley mastery.",
    features: ["3 Natural Grass Courts", "Heritage Tennis Feel", "Quick Reflex Footwork"],
  },
];

export const Route = createFileRoute("/centres/roshanara-club")({
  head: () => ({
    meta: [
      { title: "Roshanara Club — 9 Courts (Synthetic, Clay & Grass) | Sports Life" },
      {
        name: "description",
        content:
          "Sports Life Tennis Academy at Roshanara Club, North Delhi. 4 Professional Synthetic Courts, 2 Professional Clay Courts, and 3 Grass Courts.",
      },
      { property: "og:title", content: "Roshanara Club — Sports Life Tennis Academy" },
      { property: "og:url", content: "/centres/roshanara-club" },
    ],
    links: [{ rel: "canonical", href: "/centres/roshanara-club" }],
  }),
  component: Roshanara,
});

function CentreImageSlider({ slides }: { slides: CentreSlide[] }) {
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
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, lightboxOpen, slides.length]);

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
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-2xl transition-all duration-300 hover:border-neon/40"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full Image Slider Viewport - Pure Photos Only, No Side Text */}
        <div className="relative h-[450px] sm:h-[550px] md:h-[620px] lg:h-[680px] w-full overflow-hidden bg-black/40 flex items-center justify-center group/slider">
          {slides.map((slide, i) => (
            <div
              key={`fg-${slide.src}-${i}`}
              className="absolute inset-0 size-full flex items-center justify-center transition-opacity duration-700 ease-in-out cursor-pointer z-10"
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
                className="size-full object-cover transition-transform duration-700 group-hover/slider:scale-[1.02]"
              />
            </div>
          ))}

          {/* Vignette Gradients for controls clarity */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-15" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent z-15" />

          {/* Zoom Button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="View full image in lightbox"
            title="Click to view full photo"
            className="absolute top-4 left-4 z-20 flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:bg-neon hover:text-black hover:border-neon transition-all duration-200 shadow-lg cursor-pointer"
          >
            <Maximize2 className="size-4" />
          </button>

          {/* Counter Badge */}
          <div className="absolute top-4 right-4 z-20 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white/90 border border-white/20 shadow-md">
            {active + 1} / {slides.length}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex size-11 sm:size-12 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-md border border-white/20 hover:bg-neon hover:text-black hover:border-neon transition-all duration-200 shadow-xl cursor-pointer"
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex size-11 sm:size-12 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-md border border-white/20 hover:bg-neon hover:text-black hover:border-neon transition-all duration-200 shadow-xl cursor-pointer"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Bottom Dot & Thumbnail Indicators */}
          <div className="absolute bottom-4 inset-x-0 z-20 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${i === active
                    ? "w-8 h-2.5 bg-neon shadow-lg shadow-neon/40"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-50 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            <X className="size-6" />
          </button>

          {/* Prev button in lightbox */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-neon hover:text-black transition-all cursor-pointer"
          >
            <ChevronLeft className="size-7" />
          </button>

          {/* Next button in lightbox */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-neon hover:text-black transition-all cursor-pointer"
          >
            <ChevronRight className="size-7" />
          </button>

          {/* Lightbox full uncropped image */}
          <div
            className="relative max-h-[88vh] max-w-[92vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSlide.src}
              alt={currentSlide.title}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-white/90">{currentSlide.title}</p>
              <p className="text-xs text-white/60">{active + 1} of {slides.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Roshanara() {
  return (
    <>
      <PageHero
        eyebrow="North Delhi · Established 2024"
        title="Roshanara Club"
        body="Located in the heart of North Delhi, Roshanara Club is one of the city's most historic and prestigious sports venues. In 2024, Sports Life began its journey here with a vision to create a player-first environment combining professional coaching with exceptional facilities."
        image={heroImage}
        removeFog
      />

      <Section>
        <SectionHeading
          eyebrow="Flagship Centre"
          title="Where Tradition Meets Excellence"
          body="Located in the heart of North Delhi, Roshanara Club is one of the city’s most historic and prestigious sports venues. In 2024, Sports Life began its journey here with a vision to create a player-first environment that combines professional coaching with exceptional facilities."
        />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            Renowned for its rich sporting heritage and outstanding tennis facilities, the club has been home to generations of passionate athletes and continues to be one of Delhi’s most respected destinations for tennis.
          </p>
          <p>
            Today, Roshanara Club stands as the flagship centre of Sports Life, reflecting our commitment to excellence, professionalism, and long-term player development. Whether you are stepping onto the court for the very first time or preparing for national-level competition, Roshanara Club provides an inspiring environment where players are encouraged to learn, compete, and reach their full potential.
          </p>
        </div>
      </Section>

      {/* Middle Interactive Photo Showcase Slider */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Roshanara Club Showcase"
          title="Life on Court at Roshanara"
          body=""
        />

        <div className="mt-10">
          <CentreImageSlider slides={roshanaraSlides} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Multi-Surface Infrastructure"
          title="Training Across All Three Major Tennis Surfaces"
          body="One of the greatest strengths of Roshanara Club is its exceptional tennis infrastructure. The centre provides players with the rare opportunity to train on all three major tennis court surfaces, helping them become more complete and adaptable athletes."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "4 Synthetic Courts",
              body: "",
            },
            {
              title: "2 Clay Courts",
              body: "",
            },
            {
              title: "3 Grass Courts",
              body: "",
            },
          ].map((surface) => (
            <div key={surface.title} className="card-elevated rounded-2xl border border-border bg-surface p-6 shadow-md">

              <h3 className="text-xl font-bold text-foreground">{surface.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{surface.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Training across multiple surfaces prepares players for competitions at every level while developing a deeper understanding of the game.
        </p>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Facilities Summary"
          title="Facilities at Roshanara Club"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "4 Synthetic Tennis Courts",
            "2 Clay Courts",
            "3 Grass Courts",
            "Structured Coaching Programs",
            "Experienced Coaching Team",
            "High Performance Training",
            "Weekly Sunday Match Play Opportunities",
            "Tournament Preparation",
            "Fitness & Athletic Development",
          ].map((facility) => (
            <div key={facility} className="rounded-2xl border border-border bg-surface p-4 text-sm font-medium text-foreground/85">
              • {facility}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Location" title="Find Us at DDA Roshanara Club" />
        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Roshanara Club location map"
            src="https://www.google.com/maps?q=DDA+Roshanara+Club,+Shakti+Nagar,+Delhi+110007&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
