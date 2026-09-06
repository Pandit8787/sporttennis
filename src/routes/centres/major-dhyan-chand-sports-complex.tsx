import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

const heroImage = "/centres/major-dhyan-chand/mdcsc-slide-1.jpg";

interface CentreSlide {
  src: string;
  title: string;
}

const mdcscSlides: CentreSlide[] = [
  {
    src: "/centres/major-dhyan-chand/mdcsc-slide-1.jpg",
    title: "On-Court Action at Major Dhyan Chand",
  },
  {
    src: "/centres/major-dhyan-chand/mdcsc-slide-2.jpg",
    title: "Player Development & Tennis Training Sessions",
  },
];

export const Route = createFileRoute("/centres/major-dhyan-chand-sports-complex")({
  head: () => ({
    meta: [
      { title: "Major Dhyan Chand Sports Complex — 6 Courts (Synthetic & Clay) | Sports Life" },
      {
        name: "description",
        content:
          "Sports Life Tennis Academy at Major Dhyan Chand Sports Complex, Ashok Vihar. 4 Professional Synthetic Courts and 2 Clay Courts.",
      },
      { property: "og:title", content: "Major Dhyan Chand Sports Complex — Sports Life Tennis Academy" },
      { property: "og:url", content: "/centres/major-dhyan-chand-sports-complex" },
    ],
    links: [{ rel: "canonical", href: "/centres/major-dhyan-chand-sports-complex" }],
  }),
  component: MDCSC,
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

          {/* Bottom Dot Indicators */}
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

function MDCSC() {
  return (
    <>
      <PageHero
        eyebrow="Ashok Vihar · Expansion 2026"
        title="Major Dhyan Chand Sports Complex"
        body="In 2026, Sports Life Tennis Academy expanded to the Major Dhyan Chand Sports Complex with the vision of providing aspiring players access to professional coaching in a modern sporting environment."
        image={heroImage}
        removeFog
      />

      <Section>
        <SectionHeading
          eyebrow="Structured Player Development"
          title="Major Dhyan Chand Sports Complex"
          body="In 2026, Sports Life Tennis Academy expanded to the Major Dhyan Chand Sports Complex with the vision of providing aspiring players access to professional coaching in a modern sporting environment. Today, the centre serves as a hub for structured player development, combining professional coaching, and a player-first philosophy."
        />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            The Major Dhyan Chand Sports Complex offers excellent tennis infrastructure with 4
            synthetic courts and 2 clay courts, allowing players to train on multiple
            court surfaces and develop a complete all-round game.
          </p>
          <p>
            Whether you're beginning your tennis journey or preparing for competitive tournaments,
            Major Dhyan Chand Sports Complex provides the perfect setting to learn, improve and
            achieve your goals through structured player pathways and dedicated mentorship.
          </p>
        </div>
      </Section>

      {/* Middle Interactive Photo Showcase Slider */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Gallery"
          title="On-Court Action at Major Dhyan Chand"
          body=""
        />

        <div className="mt-10">
          <CentreImageSlider slides={mdcscSlides} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Court Infrastructure"
          title="Training Across Multiple Surfaces"
          body="4 synthetic courts and 2 clay courts allowing players to train on multiple surfaces."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card-elevated rounded-2xl border border-border bg-surface p-7 shadow-md">
            <h3 className="text-xl font-bold text-foreground">4 Synthetic Courts</h3>
          </div>

          <div className="card-elevated rounded-2xl border border-border bg-surface p-7 shadow-md">
            <h3 className="text-xl font-bold text-foreground">2 Clay Courts</h3>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Facilities"
          title="Facilities at Major Dhyan Chand Complex"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "4  Synthetic Courts",
            "2  Courts",
            "Structured Coaching Programs",
            "Professional Coaching Team",
            "Sunday Match Play Opportunities",
            "Tournament Preparation & Player Pathways",
          ].map((facility) => (
            <div key={facility} className="rounded-2xl border border-border bg-surface p-4 text-sm font-medium text-foreground/85">
              • {facility}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Location" title="Major Dhyan Chand Sports Complex" body="Find us on Google Maps" />
        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Major Dhyan Chand location map"
            src="https://maps.google.com/maps?q=Major%20Dhyanchand%20Sports%20Complex,%20Ashok%20Vihar,%20Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
