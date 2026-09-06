import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  ExternalLink,
  Flame,
  MapPin,
  Play,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdo1PGu39uIwp8eorpE_Pt8vd-qnG4-rLVnvCXEi5Zb-198ZQ/viewform?usp=sharing&ouid=112395899257720712808";

const heroImage = "/initiatives/sunday-match-play/hero-sunday-match-play.jpg";
const matchAction1 = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const matchAction2 = "/centre-gallery/whatsapp-20260813-171844-3.jpg";

interface MatchPlayMediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
  objectPosition?: string;
}

const matchPlayMediaItems: MatchPlayMediaItem[] = [
  {
    type: "video",
    src: "/initiatives/sunday-match-play/sunday-match-play-video.mp4",
    alt: "Sunday Match Play Action Video",
    objectPosition: "object-center",
  },
  {
    type: "image",
    src: "/initiatives/sunday-match-play/match-play-action-1.jpg",
    alt: "Sunday Match Play Live Action Match",
    objectPosition: "object-center",
  },
  {
    type: "image",
    src: "/initiatives/sunday-match-play/hero-sunday-match-play.jpg",
    alt: "Sunday Match Play Competitors & Coaches Group",
    objectPosition: "object-[center_48%]",
  },
];

function MatchPlayMediaSlider({
  items,
  heightClass = "h-[400px] sm:h-[500px] md:h-[580px]",
}: {
  items: MatchPlayMediaItem[];
  heightClass?: string;
}) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const prev = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setActive((curr) => (curr === 0 ? items.length - 1 : curr - 1));
  };

  const next = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setActive((curr) => (curr === items.length - 1 ? 0 : curr + 1));
  };

  const currentItem = items[active];
  const isCurrentVideo = currentItem?.type === "video";

  useEffect(() => {
    if (isPaused || items.length <= 1 || isCurrentVideo) return;
    const timer = setInterval(() => {
      setActive((curr) => (curr + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, items.length, isCurrentVideo, active]);

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([idx, vid]) => {
      if (vid && Number(idx) !== active) {
        vid.pause();
      }
    });
  }, [active]);

  return (
    <div
      className={`relative ${heightClass} w-full overflow-hidden rounded-3xl border border-border bg-neutral-950 group/slider select-none shadow-2xl`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {items.map((item, idx) => (
        <div
          key={item.src}
          className="absolute inset-0 size-full transition-opacity duration-700 ease-in-out"
          style={{
            opacity: idx === active ? 1 : 0,
            zIndex: idx === active ? 10 : 0,
            pointerEvents: idx === active ? "auto" : "none",
          }}
        >
          {item.type === "video" ? (
            <div className="relative size-full bg-black flex items-center justify-center">
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                src={item.src}
                controls
                playsInline
                preload="metadata"
                className="size-full object-cover"
                onPlay={() => setIsPaused(true)}
                onEnded={() => next()}
              />
              <div className="pointer-events-none absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white border border-white/20 shadow-md">
                <Play className="size-3.5 text-neon fill-neon" />
                <span>Match Action Video</span>
              </div>
            </div>
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`size-full object-cover ${item.objectPosition || "object-center"} transition-transform duration-700 group-hover/slider:scale-105`}
            />
          )}
        </div>
      ))}

      {/* Vignette Gradients */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-15" />

      {/* Top Tag Badge */}
      <span className="absolute top-4 left-4 z-20 rounded-full bg-black/75 backdrop-blur-md border border-white/20 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-neon shadow-md">
        Sunday Match Play
      </span>

      {/* Navigation Arrows */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 z-25 flex size-10 sm:size-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-neon hover:text-black hover:border-neon cursor-pointer shadow-xl active:scale-95"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 z-25 flex size-10 sm:size-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-neon hover:text-black hover:border-neon cursor-pointer shadow-xl active:scale-95"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 right-5 z-25 flex items-center gap-2">
            {items.map((_, dotIdx) => (
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
                    ? "w-6 h-2 bg-neon"
                    : "w-2 h-2 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export const Route = createFileRoute("/initiatives/sunday-match-play")({
  head: () => ({
    meta: [
      { title: "Sunday Match Play Initiative | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Weekly Sunday Match Play program by Sports Life Tennis Academy. Structured competitive matches across Delhi for players with certified coach debriefs.",
      },
      { property: "og:title", content: "Sunday Match Play — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Practice builds technique; matches build competitors. Weekly tournament-style match play across Delhi.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/initiatives/sunday-match-play" },
    ],
    links: [{ rel: "canonical", href: "/initiatives/sunday-match-play" }],
  }),
  component: SundayMatchPlay,
});

function SundayMatchPlay() {
  return (
    <>
      {/* Hero */}
      <div className="relative">
        <PageHero
          eyebrow="Signature Initiative"
          title="Sunday Match Play"
          body="Practice builds technique; matches build competitors. A structured weekly competitive platform designed to bridge the gap between weekday drills and tournament victory."
          image={heroImage}
          imagePos="object-[center_48%]"
          removeFog
        />

        {/* Quick Hero Floating Register CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="inline-flex items-center gap-2.5 rounded-full bg-neon px-7 py-3.5 font-display text-xs font-black tracking-widest uppercase text-black shadow-xl shadow-neon/20 hover:bg-neon/90 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <ClipboardCheck className="size-4" />
              <span>Register for Sunday Match Play</span>
              <span>↓</span>
            </a>
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-surface/90 backdrop-blur-md border border-border px-5 py-3.5 font-display text-xs font-bold tracking-wider uppercase text-foreground hover:border-neon/50 hover:text-neon transition-all"
            >
              <span>Direct Google Form</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Problem vs Solution Section */}
      <Section>
        <SectionHeading
          eyebrow="The Missing Link"
          title="Bridging the Gap Between Training & Competition"
          body="Most junior players train for hours each week but struggle to replicate that form in official ranking tournaments. The issue is rarely technique—it is competitive exposure."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Problem */}
          <div className="card-elevated p-8 sm:p-10 border border-border bg-surface rounded-3xl space-y-6">
            <div className="flex items-center gap-3 text-red-400">
              <AlertCircle className="size-6 shrink-0" />
              <h3 className="font-bold text-xl text-foreground">The Training Dilemma</h3>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Drilling without pressure creates false confidence. When tournament day arrives, players face unfamiliar opponents, sudden momentum shifts, score pressure, and psychological doubts that coaching baskets cannot replicate.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-foreground/75">
              <li className="flex items-center gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>Anxiety during critical break points</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>Passive shot-making when trailing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>Inability to adjust to atypical playing styles</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="card-elevated p-8 sm:p-10 border border-neon/30 bg-surface rounded-3xl space-y-6 shadow-neon/5">
            <div className="flex items-center gap-3 text-neon">
              <Sparkles className="size-6 shrink-0" />
              <h3 className="font-bold text-xl text-foreground">The Match Play Solution</h3>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Sunday Match Play replicates true tournament conditions weekly. Players face opponents of calibrated skill levels under competitive stakes with real-time feedback from our senior coaching staff.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-foreground/85">
              <li className="flex items-center gap-2">
                <span className="text-neon font-bold">✓</span>
                <span>Normalizes tournament stress through routine</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon font-bold">✓</span>
                <span>Immediate tactical debriefs after every match</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon font-bold">✓</span>
                <span>Multi-surface adaptability (Synthetic, Clay & Grass courts)</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Featured Action: Video and Image Slider */}
      <Section className="bg-surface/30">
        <div className="max-w-5xl mx-auto space-y-8">
          <SectionHeading
            align="center"
            eyebrow="On-Court Action"
            title="Every Sunday, We Compete."
            body="Competitive intensity, real match situations, and structured gameplay in action across our premier Delhi facilities."
          />

          {/* Interactive Media Slider */}
          <MatchPlayMediaSlider
            items={matchPlayMediaItems}
            heightClass="h-[420px] sm:h-[520px] md:h-[600px]"
          />
        </div>
      </Section>

      {/* Pillars of Growth */}
      <Section>
        <SectionHeading
          eyebrow="Pillars of Growth"
          title="Why Regular Match Play Accelerates Development"
          body="Core competitive competencies built through weekly match exposure."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Flame,
              title: "Mental Toughness & Composure",
              desc: "Learn to stay calm under pressure, execute high-percentage second serves, and fight back from deficit situations.",
            },
            {
              icon: Target,
              title: "Tactical Shot Selection",
              desc: "Move past mechanical hitting into strategic point construction—changing pace, depth, and court angles intelligently.",
            },
            {
              icon: Swords,
              title: "Opponent Style Adaptability",
              desc: "Gain exposure against different playing styles, defenders, net rushers, and big servers before official tournaments.",
            },
            {
              icon: Trophy,
              title: "Tournament Composure",
              desc: "Eliminate match-day nervousness by normalizing competitive pressure every single weekend.",
            },
            {
              icon: Users,
              title: "Coach Feedback & Debriefs",
              desc: "Immediate tactical feedback after each match allows players to identify areas for improvement in upcoming weekday training.",
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.06}>
              <div className="card-elevated h-full p-6 sm:p-7 border border-border bg-surface rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
                    <item.icon className="size-5" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Registration Form Section */}
      <Section id="register" className="bg-surface/40 border-t border-border/80">
        <div className="max-w-4xl mx-auto space-y-8">
          <SectionHeading
            align="center"
            eyebrow="Join The Next Session"
            title="Register for Sunday Match Play"
            body="Fill out the official registration form below to secure your spot in our upcoming Sunday match play series. Sessions are categorized by player age and rating."
          />

          {/* Quick Action Card & External Link Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-surface border border-neon/30 shadow-lg">
            <div className="flex items-center gap-3.5 text-left">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-neon/15 text-neon">
                <ClipboardCheck className="size-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground">
                  Official Sunday Match Play Entry Form
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Open for all competitive junior and adult players in Delhi NCR.
                </p>
              </div>
            </div>

            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 font-display text-xs font-extrabold tracking-wider uppercase text-black hover:bg-neon/90 hover:shadow-lg transition-all active:scale-95 shrink-0"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="size-4" />
            </a>
          </div>

          {/* Embedded Google Form Container */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
            <div className="bg-neutral-900 px-6 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-500/80 inline-block" />
                <span className="size-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="size-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-neutral-400">
                  Google Forms • Sunday Match Play Registration
                </span>
              </div>
              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neon hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>Having trouble? Click here</span>
                <ExternalLink className="size-3" />
              </a>
            </div>

            <iframe
              src={REGISTRATION_FORM_URL}
              title="Sunday Match Play Registration Form"
              className="w-full h-[750px] sm:h-[850px] md:h-[950px] border-0"
              loading="lazy"
            >
              Loading registration form…
            </iframe>
          </div>
        </div>
      </Section>
    </>
  );
}
