import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe2,
  GraduationCap,
  Home,
  Sparkles,
  Trophy,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";

export const Route = createFileRoute("/initiatives/")({
  head: () => ({
    meta: [
      { title: "Sports Life Initiatives — Beyond Court Tennis Programs" },
      {
        name: "description",
        content:
          "Explore Sports Life initiatives: Sunday Match Play and Global Learning Initiatives (Learning Beyond the Court).",
      },
      { property: "og:title", content: "Sports Life Initiatives" },
      {
        property: "og:description",
        content:
          "Sunday Match Play and Global Learning masterclasses connecting players directly with high-level mentors.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/initiatives" },
    ],
    links: [{ rel: "canonical", href: "/initiatives" }],
  }),
  component: InitiativesPage,
});

interface InitiativeItem {
  title: string;
  tag: string;
  badgeColor: string;
  desc: string;
  highlights: string[];
  link: string;
  linkText: string;
  icon: typeof Trophy;
  images: {
    src: string;
    alt: string;
    objectPosition?: string;
  }[];
  imageAspect: string;
}

const ACTIVE_INITIATIVES: InitiativeItem[] = [
  {
    title: "Sunday Match Play",
    tag: "Active Program",
    badgeColor: "text-neon bg-neon/10 border-neon/30",
    desc: "Practice builds technique; matches build competitors. Weekly tournament match play giving players regular competitive match exposure, tactical coach debriefs, and tournament composure.",
    highlights: [
      "Simulated tournament environment",
      "Multiple competitive matches per session",
      "Supervisor coaches providing real-time debriefs",
      "Held across our premier Delhi centres",
    ],
    link: "/initiatives/sunday-match-play",
    linkText: "Explore Sunday Match Play",
    icon: Trophy,
    images: [
      {
        src: "/initiatives/sunday-match-play-1.jpg",
        alt: "Sunday Match Play Session",
        objectPosition: "object-[center_60%]",
      },
      {
        src: "/initiatives/sunday-match-play-2.jpg",
        alt: "Sunday Match Play Competition",
        objectPosition: "object-[center_55%]",
      },
    ],
    imageAspect: "h-80 sm:h-96 md:h-[420px]",
  },
  {
    title: "Global Learning Initiatives",
    tag: "Active Series",
    badgeColor: "text-electric bg-electric/10 border-electric/30",
    desc: "Learning Beyond the Court: Direct access to experienced professionals including international coach Jofre Porta and accomplished Indian pro Vishnu Vardhan.",
    highlights: [
      "Direct online sessions with international coaches",
      "Insights from tour professionals on high-level competition",
      "Expanding player perspective beyond daily court drills",
      "Interactive Q&As for athletes and parents",
    ],
    link: "/initiatives/global-learning",
    linkText: "View Global Learning",
    icon: Globe2,
    images: [
      {
        src: "/initiatives/global-learning-1.jpg",
        alt: "Global Learning Masterclass with Vishnu Vardhan & Jofre Porta",
        objectPosition: "object-[center_20%]",
      },
      {
        src: "/initiatives/global-learning-2.jpg",
        alt: "Jofre Porta Instagram Post on Sports Life Session",
        objectPosition: "object-[center_25%]",
      },
    ],
    imageAspect: "h-80 sm:h-96 md:h-[420px]",
  },
];

function CardImageSlider({
  images,
  title,
  tag,
  heightClass,
}: {
  images: InitiativeItem["images"];
  title: string;
  tag: string;
  heightClass: string;
}) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setActive((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setActive((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const timer = setInterval(() => {
      setActive((curr) => (curr + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  return (
    <div
      className={`relative ${heightClass} w-full overflow-hidden bg-neutral-950 group/slider select-none`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {images.map((img, idx) => (
        <div
          key={img.src}
          className="absolute inset-0 size-full transition-opacity duration-700 ease-in-out"
          style={{
            opacity: idx === active ? 1 : 0,
            zIndex: idx === active ? 10 : 0,
            pointerEvents: idx === active ? "auto" : "none",
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`size-full object-cover ${img.objectPosition || "object-center"} transition-transform duration-700 group-hover/slider:scale-105`}
          />
        </div>
      ))}

      {/* Vignette overlays for badge and title contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-15" />

      {/* Top Tag Badge */}
      <span className="absolute top-3 left-3 z-20 rounded-full bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-neon shadow-md">
        {tag}
      </span>

      {/* Bottom Title */}
      <h3 className="absolute bottom-3 left-4 right-16 z-20 text-xl sm:text-2xl font-bold text-white drop-shadow-md">
        {title}
      </h3>

      {/* Navigation Arrows (shown if multiple images) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-25 flex size-8 sm:size-9 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-neon hover:text-black hover:border-neon cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronLeft className="size-4 sm:size-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-25 flex size-8 sm:size-9 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-neon hover:text-black hover:border-neon cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronRight className="size-4 sm:size-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3.5 right-4 z-25 flex items-center gap-1.5">
            {images.map((_, dotIdx) => (
              <button
                key={`dot-${dotIdx}`}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActive(dotIdx);
                }}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  dotIdx === active
                    ? "w-5 h-1.5 bg-neon"
                    : "w-1.5 h-1.5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const UPCOMING_INITIATIVES = [
  {
    title: "Delhi University Internship Program",
    status: "Coming Soon",
    desc: "A structured coaching internship pathway for university athletes seeking hands-on mentoring, on-court experience, and careers in sports management.",
    icon: BookOpen,
  },
  {
    title: "Your Tennis Home in Delhi",
    status: "Coming Soon",
    desc: "Comprehensive tournament support for travelling national and international players competing in Delhi, offering court access, hitting partners, and logistics.",
    icon: Home,
  },
  {
    title: "DU Sports Quota Guidance",
    status: "Coming Soon",
    desc: "Dedicated trial preparation, certificate verification guidance, and tactical advice for student-athletes seeking Delhi University sports admissions.",
    icon: GraduationCap,
  },
];

function InitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports Life Initiatives"
        title="Pathways Beyond Traditional Coaching"
        body="We actively create opportunities for our players to compete regularly, learn from international professionals, and broaden their perspective on tennis."
        image={heroImage}
        removeFog
      />

      {/* Active Initiatives */}
      <Section>
        <SectionHeading
          eyebrow="Current Initiatives"
          title="Active Player Initiatives"
          body="Currently featuring our signature Sunday Match Play program and Global Learning Initiatives."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {ACTIVE_INITIATIVES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="card-elevated group flex flex-col justify-between h-full overflow-hidden border border-border bg-surface rounded-3xl shadow-lg hover:border-neon/50 transition-all">
                {/* Image Slider Component */}
                <CardImageSlider
                  images={item.images}
                  title={item.title}
                  tag={item.tag}
                  heightClass={item.imageAspect}
                />

                <div className="p-7 flex flex-col justify-between grow">
                  <div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
                    <div className="mt-5 space-y-2 border-t border-border pt-4">
                      {item.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-foreground/85">
                          <CheckCircle2 className="size-3.5 text-neon shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      to={item.link as any}
                      className="font-display text-xs font-bold uppercase tracking-wider text-neon hover:underline inline-flex items-center gap-1"
                    >
                      <span>{item.linkText}</span>
                      <span>→</span>
                    </Link>
                    <div className="rounded-full p-2.5 bg-neon/10 text-neon">
                      <item.icon className="size-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>


    </>
  );
}
