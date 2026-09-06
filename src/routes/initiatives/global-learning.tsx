import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe2,
  HeartHandshake,
  Lightbulb,
  MessageSquare,
  Play,
  Sparkles,
  Trophy,
  Users,
  Video,
} from "lucide-react";

const heroImage = "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg";

interface MediaSlideItem {
  type: "image" | "video";
  src: string;
  alt: string;
  objectPosition?: string;
}

const jofreMediaItems: MediaSlideItem[] = [
  {
    type: "image",
    src: "/initiatives/global-learning/jofre-video-call.jpg",
    alt: "Jofre Porta Online Video Conference with Sports Life Players",
    objectPosition: "object-center",
  },
  {
    type: "video",
    src: "/initiatives/global-learning/jofre-instagram-video.mp4",
    alt: "Sports Life exclusive masterclass video with Jofre Porta",
    objectPosition: "object-center",
  },
  {
    type: "image",
    src: "/initiatives/global-learning/jofre-instagram-post.jpg",
    alt: "Jofre Porta Instagram Post on Sports Life Session",
    objectPosition: "object-[center_22%]",
  },
];

const vishnuMediaItems: MediaSlideItem[] = [
  {
    type: "image",
    src: "/initiatives/global-learning/vishnu-vardhan-1.jpg",
    alt: "Vishnu Vardhan interacting with Sports Life team",
    objectPosition: "object-[center_35%]",
  },
  {
    type: "image",
    src: "/initiatives/global-learning/vishnu-vardhan-2.jpg",
    alt: "Vishnu Vardhan & Jofre Porta Masterclass poster",
    objectPosition: "object-[center_20%]",
  },
  {
    type: "image",
    src: "/initiatives/global-learning/vishnu-vardhan-3.jpg",
    alt: "Vishnu Vardhan Session Poster",
    objectPosition: "object-center",
  },
];

function GlobalMediaSlider({
  items,
  heightClass,
  badgeText,
}: {
  items: MediaSlideItem[];
  heightClass: string;
  badgeText: string;
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
    // If currently on a video, pause automatic sliding so video can play comfortably
    if (isPaused || items.length <= 1 || isCurrentVideo) return;
    const timer = setInterval(() => {
      setActive((curr) => (curr + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, items.length, isCurrentVideo, active]);

  useEffect(() => {
    // Pause other videos when slide changes
    Object.entries(videoRefs.current).forEach(([idx, vid]) => {
      if (vid && Number(idx) !== active) {
        vid.pause();
      }
    });
  }, [active]);

  return (
    <div
      className={`relative ${heightClass} w-full overflow-hidden rounded-2xl border border-border bg-neutral-950 group/slider select-none shadow-md`}
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
              {/* Subtle badge on video */}
              <div className="pointer-events-none absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-white border border-white/20">
                <Play className="size-3 text-neon fill-neon" />
                <span>Video Clip</span>
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

      {/* Vignette overlays for badge and title contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-15" />

      {/* Top Tag Badge */}
      <span className="absolute top-3 left-3 z-20 rounded-full bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-neon shadow-md">
        {badgeText}
      </span>

      {/* Navigation Arrows */}
      {items.length > 1 && (
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
          <div className="absolute bottom-3 right-3 z-25 flex items-center gap-1.5">
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

export const Route = createFileRoute("/initiatives/global-learning")({
  head: () => ({
    meta: [
      { title: "Global Learning Initiatives — Learning Beyond the Court | Sports Life" },
      {
        name: "description",
        content:
          "Direct access to experienced professionals: exclusive online sessions with Jofre Porta, Indian professional Vishnu Vardhan, and international tennis mentors.",
      },
      { property: "og:title", content: "Global Learning Initiatives — Sports Life" },
      {
        property: "og:description",
        content:
          "Learning Beyond the Court: Connecting our players with internationally experienced coaches and ATP tour professionals.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/initiatives/global-learning" },
    ],
    links: [{ rel: "canonical", href: "/initiatives/global-learning" }],
  }),
  component: GlobalLearning,
});

function GlobalLearning() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Global Learning Initiatives"
        title="Learning Beyond the Court"
        body="Connecting Our Players With Global Tennis Expertise"
        image={heroImage}
        imagePos="object-[center_24%]"
        removeFog
      />

      {/* Main Philosophy Section */}
      <Section>
        <SectionHeading
          eyebrow="Learning Beyond the Court"
          title="Connecting Our Players With Global Tennis Expertise"
          body="Bringing the right people, experiences, and knowledge closer to our players."
        />

        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85 lg:text-lg">
          <div className="rounded-2xl border border-neon/30 bg-linear-to-r from-neon/10 via-neon/5 to-transparent p-6 sm:p-8">
            <p className="font-display text-lg font-bold text-foreground sm:text-xl lg:text-2xl leading-snug">
              “At Sports Life, we believe that player development should extend beyond the regular coaching session. Players can learn from their coaches every day, but sometimes hearing directly from someone who has experienced high-level tennis can offer an entirely different perspective.”
            </p>
          </div>

          <p>
            That is why we actively create opportunities for our players to learn from experienced
            professionals and gain perspectives from different parts of the tennis world. Our
            approach is simple: bring the right people, experiences, and knowledge closer to our
            players.
          </p>
        </div>
      </Section>

      {/* Direct Access to Experienced Professionals: Jofre Porta & Vishnu Vardhan */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Exclusive Interactions"
          title="Learning From Those Who Have Been There"
          body="As part of our learning initiatives, Sports Life has organised exclusive online interactions that have given our players the opportunity to directly engage with experienced professionals. These sessions are designed to go beyond technical coaching. Players can listen, ask questions, understand different perspectives, and learn about the realities of competitive tennis from people who have experienced them firsthand."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* 01 JOFRE PORTA */}
          <Reveal delay={0.05}>
            <div className="card-elevated flex flex-col justify-between h-full p-7 sm:p-9 border border-border bg-surface rounded-3xl">
              <div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">
                  Jofre Porta
                </h3>
                <p className="text-sm font-semibold text-neon mt-1">
                  Learning From an International Coaching Perspective
                </p>

                {/* Dynamic Media Slider for Jofre Porta */}
                <div className="my-6">
                  <GlobalMediaSlider
                    items={jofreMediaItems}
                    heightClass="h-80 sm:h-96 md:h-[440px]"
                    badgeText="Mallorca, Spain"
                  />
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
                  <p className="font-semibold text-foreground">
                    Sports Life × Jofre Porta — An Exclusive Online Learning Session
                  </p>
                  <p>
                    One of our Global Learning initiatives brought our players and coaching team together for an online interaction with Jofre Porta (The coach of Rafael Nadal and Carlos Moya).
                  </p>
                  <p>
                    The session gave our players the opportunity to interact directly with Jofre, ask questions and hear his perspective on tennis, player development and the journey of becoming a better player.
                  </p>
                  <p>
                    For us, the value of the session was not simply the opportunity to meet an experienced coach. It was about giving our players the chance to listen, think, ask questions and see tennis from a different perspective. Learning that reaches beyond the tennis court.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 02 VISHNU VARDHAN */}
          <Reveal delay={0.1}>
            <div className="card-elevated flex flex-col justify-between h-full p-7 sm:p-9 border border-border bg-surface rounded-3xl">
              <div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">
                  Vishnu Vardhan
                </h3>
                <p className="text-sm font-semibold text-electric mt-1">
                  Learning From a Professional Player's Perspective
                </p>

                {/* Dynamic Media Slider for Vishnu Vardhan */}
                <div className="my-6">
                  <GlobalMediaSlider
                    items={vishnuMediaItems}
                    heightClass="h-80 sm:h-96 md:h-[440px]"
                    badgeText="ATP Tour / India"
                  />
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
                  <p className="font-semibold text-foreground">
                    Sports Life × Vishnu Vardhan — Pro Player Perspective
                  </p>
                  <p>
                    Sports Life also created an opportunity for our players to interact directly with Vishnu Vardhan, an accomplished Indian professional tennis player and Asian Games medalist.
                  </p>
                  <p>
                    The interaction gave players an opportunity to hear about competitive tennis from the perspective of someone who has experienced it at the professional level. Players could ask questions, understand the realities of competing at a high level, and learn from experiences that go beyond what can be taught through a regular training session.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Why We Do This */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why We Do This"
              title="Because Learning Should Never Stop"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                We don't believe that all learning has to happen through a coach standing across the net. Sometimes it happens through a conversation. Sometimes it happens by hearing about someone else's journey. Sometimes one answer to a player's question can change the way they approach their own training.
              </p>
              <p>
                That's why we want our players to have access to different voices, different experiences, and different perspectives within tennis.
              </p>
              <div className="rounded-2xl border border-neon/30 bg-neon/5 p-5 text-sm sm:text-base font-semibold text-foreground">
                “Our goal is not to replace the coach. It is to expand the player's world beyond the court.”
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 sm:p-10 border border-border bg-surface rounded-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">Our Approach</span>
            <h3 className="text-2xl font-bold text-foreground">
              Bringing Opportunities Closer to Players
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-neon mt-2 shrink-0" />
                <div>
                  <strong className="text-foreground">Experienced Professionals: </strong>
                  <span className="text-muted-foreground">Interactions with coaches and players who have experienced competitive tennis at a high level.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-neon mt-2 shrink-0" />
                <div>
                  <strong className="text-foreground">International Perspectives: </strong>
                  <span className="text-muted-foreground">Learning from different coaching environments and approaches to player development.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-neon mt-2 shrink-0" />
                <div>
                  <strong className="text-foreground">Player Conversations: </strong>
                  <span className="text-muted-foreground">Giving players the opportunity to ask questions and learn directly from experienced people.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-neon mt-2 shrink-0" />
                <div>
                  <strong className="text-foreground">Real Experiences: </strong>
                  <span className="text-muted-foreground">Sharing practical lessons from competition, coaching, travel, development, and the realities of a tennis career.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* More Than a Coaching Session */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="eyebrow">Beyond The Court</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground">
            More Than A Coaching Session
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
            At Sports Life, we want players to understand that their development is bigger than the time they spend on the court.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 py-4 font-display text-sm sm:text-lg font-black uppercase text-neon tracking-widest">
            <span>Train</span> · <span>Compete</span> · <span>Learn</span> · <span>Connect</span> · <span>Grow</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            These opportunities are part of our effort to create a broader player-first environment — one where players are not only trained, but exposed to the knowledge and experiences that can help them make better decisions throughout their tennis journey.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-sm text-foreground/80 max-w-2xl mx-auto">
            <h4 className="font-bold text-foreground text-base mb-2">The Journey Continues</h4>
            <p>
              Our global learning initiatives are still evolving. As Sports Life grows, we want to create more opportunities for our players to interact with experienced coaches, professional players, and people who can offer valuable perspectives on different stages of the tennis journey.
            </p>
            <p className="mt-3 font-semibold text-neon">
              Because sometimes, one conversation can change the way a player sees the game.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}

    </>
  );
}
