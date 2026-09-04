import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal, Counter, TextReveal } from "@/components/site/motion-primitives";
import { CtaLink } from "@/components/site/layout";
import { useEffect, useRef, useState } from "react";
import { ShuttleIcon } from "@/components/site/brand";
import {
  Award,
  CheckCircle2,
  Compass,
  Flame,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Layers,
  MapPin,
  Quote,
  Sparkles,
  Target,
  Trophy,
  Users2,
  Zap,
} from "lucide-react";

const heroImage = "/about/img-7572.jpg";
const communityGroupImage = "/about/img-3168.jpg";
const roshanaraOpeningImage = "/about/opening-ceremony-roshanara.jpg";
const diwaliCelebrationImage = "/about/img-0325.jpg";

const communitySlides = [
  {
    src: communityGroupImage,
    alt: "Sports Life Tennis Academy community on court",
  },
  {
    src: "/about/community-slider-img4739.jpg",
    alt: "Sports Life community gathering",
  },
  {
    src: "/about/community-slider-roshanara-opening.jpg",
    alt: "Opening ceremony at Roshanara Club",
  },
];

function CommunitySlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % communitySlides.length);
    }, 3500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active]);

  return (
    <div className="overflow-hidden rounded-3xl border border-border shadow-2xl group bg-surface">
      {/* Image viewport */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.96)_0%,rgba(8,10,18,0.98)_60%,#000_100%)] relative">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 z-10 opacity-70 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(circle_at_85%_75%,rgba(56,189,248,0.22),transparent_55%)]" />
        {communitySlides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 size-full object-contain object-center transition-opacity duration-600"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          />
        ))}
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/60 via-black/25 to-transparent z-10 pointer-events-none" />
        {/* Dot indicators */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 z-20">
          {communitySlides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === active
                ? "bg-neon w-5 h-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                : "bg-white/50 w-2 h-2 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>
      {/* Caption */}
      <div className="bg-surface/90 backdrop-blur-md p-4 border-t border-border">
        <p className="text-xs font-semibold text-neon tracking-wider uppercase"></p>
        <p className="text-xs text-muted-foreground mt-0.5"></p>
      </div>
    </div>
  );
}

const tennisForEveryoneSlides = [
  {
    src: "/about/tennis-for-everyone-img3399.jpg",
    alt: "Sports Life players on court",
  },
  {
    src: "/about/tennis-for-everyone-img20240924.jpg",
    alt: "Sports Life community evening session",
  },
  {
    src: "/about/tennis-for-everyone-img20240929.jpg",
    alt: "Players training at Sports Life",
  },
  {
    src: "/about/tennis-for-everyone-img20250419.jpg",
    alt: "Sports Life academy session",
  },
];

function TennisForEveryoneSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % tennisForEveryoneSlides.length);
    }, 3500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active]);

  return (
    <div className="overflow-hidden rounded-3xl border border-border shadow-xl bg-surface">
      {/* Image viewport */}
      <div className="aspect-[3/4] w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.96)_0%,rgba(8,10,18,0.98)_60%,#000_100%)] relative">
        <div className="pointer-events-none absolute inset-0 z-10 opacity-70 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(circle_at_85%_75%,rgba(56,189,248,0.22),transparent_55%)]" />
        {tennisForEveryoneSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 size-full object-contain object-center transition-opacity duration-600"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          />
        ))}
        {/* Gradient overlay */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/60 via-black/25 to-transparent z-10 pointer-events-none" />
        {/* Dot indicators */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 z-20">
          {tennisForEveryoneSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === active
                ? "bg-neon w-5 h-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                : "bg-white/50 w-2 h-2 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>
      {/* Caption */}
      <div className="bg-surface/90 backdrop-blur-md p-4 border-t border-border">
        <p className="text-xs font-semibold text-neon tracking-wider uppercase"></p>
        <p className="text-xs text-muted-foreground mt-0.5"></p>
      </div>
    </div>
  );
}

const moreThanTennisSlides = [
  {
    src: "/about/more-than-tennis-img-ad2c.jpg",
    alt: "Sports Life community celebration",
  },
  {
    src: "/about/more-than-tennis-img-b104.jpg",
    alt: "Sports Life family moments together",
  },
  {
    src: "/about/more-than-tennis-img1930.jpg",
    alt: "Sports Life academy community gathering",
  },
];

function MoreThanTennisSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % moreThanTennisSlides.length);
    }, 3500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active]);

  return (
    <div className="overflow-hidden rounded-3xl border border-border shadow-2xl bg-surface">
      {/* Image viewport */}
      <div className="aspect-[3/4] w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.96)_0%,rgba(8,10,18,0.98)_60%,#000_100%)] relative">
        <div className="pointer-events-none absolute inset-0 z-10 opacity-70 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.22),transparent_60%),radial-gradient(circle_at_85%_75%,rgba(16,185,129,0.22),transparent_55%)]" />
        {moreThanTennisSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 size-full object-contain object-center transition-opacity duration-600"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          />
        ))}
        {/* Gradient overlay */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/60 via-black/25 to-transparent z-10 pointer-events-none" />
        {/* Dot indicators */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 z-20">
          {moreThanTennisSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === active
                ? "bg-electric w-5 h-2 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                : "bg-white/50 w-2 h-2 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>
      {/* Caption */}
      <div className="bg-surface/90 backdrop-blur-md p-4 border-t border-border">
        <p className="text-xs font-semibold text-electric tracking-wider uppercase"></p>
        <p className="text-xs text-muted-foreground mt-0.5"></p>
      </div>
    </div>
  );
}

interface MiniCardSliderProps {
  slides: { src: string; alt: string }[];
  tag: string;
  tagColor?: string;
  description: string;
}

function MiniCardSlider({
  slides,
  tag,
  tagColor = "text-neon",
  description,
}: MiniCardSliderProps) {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % slides.length);
    }, 3800);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, slides.length]);

  const activeDotClass = tagColor === "text-electric" ? "bg-electric" : "bg-neon";

  return (
    <div className="overflow-hidden rounded-3xl border border-border shadow-lg group bg-surface flex flex-col hover:border-border/80 transition-all duration-300">
      <div className="aspect-[3/4] w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.96)_0%,rgba(8,10,18,0.98)_60%,#000_100%)] relative">
        <div className="pointer-events-none absolute inset-0 z-10 opacity-70 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(circle_at_85%_75%,rgba(56,189,248,0.22),transparent_55%)]" />
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-contain object-center transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          />
        ))}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/60 via-black/25 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === active
                ? `${activeDotClass} w-5 h-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]`
                : "bg-white/50 w-2 h-2 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>
      <div className="p-4 bg-surface mt-auto border-t border-border/50">
        <p className={`text-xs font-bold uppercase tracking-wider ${tagColor}`}>{tag}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/about/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story & Why Sports Life | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Discover our journey from 2024 at Roshanara Club to 3 centres across Delhi, and why tennis at Sports Life is more than an hour on the court.",
      },
      { property: "og:title", content: "Our Story & Why Sports Life | Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "From one centre and two coaches to 3 centres, 26+ coaches and hundreds of players. One journey. Hundreds of stories. One family.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about/our-story" },
    ],
    links: [{ rel: "canonical", href: "/about/our-story" }],
  }),
  component: OurStoryAndWhyUsPage,
});

function OurStoryAndWhyUsPage() {
  const whyCards = [
    {
      icon: Target,
      tag: "Purposeful Mentorship",
      title: "Coaching With a Purpose",
      body: "Our coaches are not here simply to conduct a session and move on to the next court. They are part of a player's journey. With 26+ coaches across three centres, our team brings together coaching qualifications, competitive experience and a commitment to continuous learning. More importantly, we want our coaches to understand the individual behind the player — their strengths, weaknesses, personality, goals and potential. Because good coaching isn't about making everyone play the same way. It's about bringing out the best in each player.",
      accent: "neon",
    },
    {
      icon: Zap,
      tag: "Holistic Progression",
      title: "Development That Goes Beyond Drills",
      body: "We don't believe that attending tennis classes automatically means a player is developing. Players need the right progression. They need technical foundations, tactical understanding, movement, physical development, match experience and the confidence to apply what they learn. Our training is therefore designed around the player's age, level, physical development and goals, whether those goals are recreational, fitness-oriented or competitive. We don't just want players to train. We want them to see themselves improving.",
      accent: "electric",
    },
    {
      icon: Flame,
      tag: "Match Play & Toughness",
      title: "Learn to Play. Then Learn to Compete.",
      body: "A practice session can teach you how to hit a shot. A match teaches you when to use it. That's why competitive exposure is an important part of our philosophy. Through initiatives such as Sunday Match Play, players get opportunities to experience real points, pressure, decision-making and competition. They learn how to win. They learn how to lose. And, most importantly, they learn how to respond. Because some of the most important lessons in tennis happen when the score is against you.",
      accent: "neon",
    },
    {
      icon: HeartHandshake,
      tag: "All Ages & Ambitions",
      title: "A Place for Every Player",
      body: "Sports Life isn't built only for competitive players. Our players range from 3.5-year-old beginners to adults in their 60s and beyond. Some come because they have discovered tennis for the first time. Some want to improve their fitness. Some want to compete at school or state level. Some have ambitions of playing at the national or international level. There is no single definition of success. For us, success is helping a player move forward from where they started.",
      accent: "electric",
    },
    {
      icon: Trophy,
      tag: "Elite Pathways",
      title: "Real Opportunities for Players Who Want More",
      body: "For players who choose the competitive path, training is only one part of the journey. They need match experience, tournament exposure, planning, guidance and an environment that understands what competitive tennis demands. Sports Life has developed players who have gone on to compete and perform at National and International levels, and we continue to work towards creating better pathways for players who want to take their tennis further. We want players to know not only how to train, but where their training can take them.",
      accent: "neon",
    },
    {
      icon: Layers,
      tag: "Multi-Surface Advantage",
      title: "More Than One Surface. More Than One Environment.",
      body: "Across our three Delhi centres, Sports Life provides access to 25 courts across synthetic, clay and grass surfaces. Different surfaces challenge players differently. They require adaptation, patience and different approaches to movement and tactics. More importantly, our three-centre presence gives Sports Life a larger and more diverse tennis community — bringing together players, coaches and families across Delhi.",
      accent: "electric",
    },
    {
      icon: Globe2,
      tag: "Global Perspectives",
      title: "Learning Doesn't Stop at Sports Life",
      body: "We believe that the best coaches never stop learning. Through our Global Learning initiatives, Sports Life has created opportunities for players and coaches to learn from experienced professionals and gain perspectives beyond their regular training environment. Because tennis continues to evolve. And so should we.",
      accent: "neon",
    },
    {
      icon: Users2,
      tag: "Community & Belonging",
      title: "A Community That Feels Like Family",
      body: "This may be one of the most important differences at Sports Life. We don't want our players to feel that they simply come for a class, train for an hour and leave. We celebrate Diwali. We celebrate Christmas. We celebrate achievements. We organise events. We bring our coaches, players and families together. Over time, the people you meet on the court become friends. Coaches become mentors. Parents become part of the community. We train together. We compete together. We celebrate together. We grow together. That's how an academy becomes a community. And that's how Sports Life became a family.",
      accent: "electric",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      {/* -------------------------------------------------------------------------- */}
      {/*                                PAGE HERO                                   */}
      {/* -------------------------------------------------------------------------- */}
      <PageHero
        title="Our Story & Why Sports Life"
        body="One journey. Hundreds of stories. One family. Discover the journey that brought us here and why tennis at Sports Life is more than an hour on the court."
        image={heroImage}
        imagePos="object-[center_38%]"
        removeFog={true}
      />

      {/* -------------------------------------------------------------------------- */}
      {/*                         PART 1: OUR STORY                                  */}
      {/* -------------------------------------------------------------------------- */}
      <Section id="our-story" className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="Our Origins & Journey"
          title="Our Story"
          body=""
        />

        {/* Founding Philosophy Callout */}
        <Reveal delay={0.1}>
          <div className="mt-8 rounded-3xl border border-neon/30 bg-gradient-to-br from-neon/15 via-surface to-background p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <ShuttleIcon className="size-48 text-neon" />
            </div>
            <div className="relative z-10 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-neon/20 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-neon">
                Est. 2024 · Roshanara Club, Delhi
              </span>
              <p className="mt-4 font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-foreground">
                “Sports Life Tennis Academy began its journey in 2024 at Roshanara Club, Delhi, with just one centre, two coaches and a simple belief — that every player deserves the right guidance, the right opportunities and an environment where they can enjoy the process of becoming better.”
              </p>
            </div>
          </div>
        </Reveal>

        {/* Narrative Flow & Image */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7 text-base sm:text-lg leading-relaxed text-foreground/90">
            <p>
              We started small, focusing on our players, our coaching and the trust of the families who chose to begin their tennis journey with us. We didn't know exactly how far the journey would take us, but we knew the kind of environment we wanted to create — one where players could learn, compete, grow and feel that they belonged.
            </p>
            <p>
              Over time, that small beginning grew into something much bigger. From one centre, Sports Life has grown to three centres across Delhi — <strong>Roshanara Club</strong>, <strong>Major Dhyan Chand Sports Complex</strong> and <strong>Punjabi Bagh Club</strong>. Our coaching team has grown from two coaches to <strong>26+ coaches</strong>, and today more than <strong>300 players</strong> train with us every month. Along the way, we have had the opportunity to train players with very different goals and aspirations, including players who have gone on to compete and perform at the National and International level.
            </p>
          </div>

          <div className="lg:col-span-5">
            <CommunitySlider />
          </div>
        </div>

        {/* Growth Stats Strip */}
        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {[
              { label: "Centres in Delhi", value: 3, prefix: "", suffix: "", desc: "" },
              { label: "Dedicated Coaches", value: 26, prefix: "", suffix: "+", desc: "" },
              { label: "Active Monthly Players", value: 300, prefix: "", suffix: "+", desc: "" },
              { label: "Multi-Surface Courts", value: 25, prefix: "", suffix: "", desc: "" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-surface/50 p-5 sm:p-6 backdrop-blur-md text-center transition-all hover:border-neon/50 hover:bg-surface/80"
              >
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-neon">
                  {stat.prefix}
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Narrative Part 2: People, Inclusivity & Family */}
        <div className="mt-14 space-y-8 text-base sm:text-lg leading-relaxed text-foreground/90">
          <div className="rounded-2xl border-l-4 border-electric bg-surface/40 p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-black text-foreground">
              Growth Is About the People Behind the Numbers
            </h3>
            <p className="mt-3 text-muted-foreground">
              But for us, growth has never been only about numbers, rankings or trophies. It is about the people behind them — the young player holding a racquet for the first time, the child gaining confidence, the competitive player learning to handle pressure, the player working towards their next tournament, and the adult who has discovered a new passion for the sport.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                Tennis Is For Everyone
              </h3>
              <p>
                At Sports Life, we believe that tennis is for everyone. Our players range from 3.5-year-old children to adults in their 60s and beyond, and every player comes with a different reason for being on the court. Some want to learn the fundamentals, some want to stay fit, some want to compete, and some dream of taking their tennis to the highest level.
              </p>
              <p>
                We don't believe in treating every player the same. We believe in understanding each individual — their age, ability, goals, learning pace and aspirations — and helping them grow according to their own needs. Whether someone is picking up a racquet for the first time or preparing for national and international competition, every journey matters to us.
              </p>
            </div>

            <TennisForEveryoneSlider />
          </div>

          {/* More than Tennis: Community & Family */}
          <div className="rounded-3xl border border-border bg-gradient-to-b from-surface/80 to-surface/40 p-6 sm:p-10 shadow-lg">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="space-y-4 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-electric/15 px-3.5 py-1 text-xs font-bold text-electric uppercase tracking-wider mb-2">
                  <HeartHandshake className="size-4" />
                  <span>More Than An Academy</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                  Somewhere Along the Way, Sports Life Became More Than Tennis
                </h3>
                <p className="text-foreground/90">
                  As our players, coaches and families grew closer, the academy began to feel like a community. We celebrate Diwali, Christmas and other special occasions together, celebrate our players' achievements, spend time together outside training and create memories that have little to do with the score of a match.
                </p>
                <p className="text-foreground/90">
                  Our coaches become mentors, players become friends, and families become familiar faces. We train together, compete together, celebrate together and grow together. For us, Sports Life is not simply a place where you come for an hour of tennis — it is a place where you become part of a family.
                </p>
                <p className="text-foreground/90">
                  Our journey from one centre and two coaches to three centres, 26+ coaches and hundreds of players is something we are incredibly proud of, but we don't see it as the destination. It is only the beginning. We want to continue developing better coaches, creating better opportunities for players, supporting competitive tennis and building an environment where a player can start their journey with us at a young age and continue growing with Sports Life for years to come.
                </p>
                <p className="font-semibold text-neon">
                  We started with tennis, but we are building something much bigger — a community where every individual has the opportunity to learn, grow, compete and belong.
                </p>
              </div>

              <div className="lg:col-span-5">
                <MoreThanTennisSlider />
              </div>
            </div>
          </div>

          {/* Story Crest / Motto */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-neon/45 bg-black shadow-[0_25px_70px_-12px_rgba(16,185,129,0.35)] isolate">
              {/* Hero background image */}
              <img
                src={heroImage}
                alt="Sports Life Tennis Academy family"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover object-center opacity-40"
              />
              {/* Cine overlay — vignette + heavy readability */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.75)_72%,rgba(0,0,0,0.96)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(16,185,129,0.22)_0%,rgba(0,0,0,0)_40%,rgba(56,189,248,0.22)_100%)]" />
              <div className="absolute -top-24 -left-24 size-72 rounded-full bg-neon/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 size-80 rounded-full bg-electric/25 blur-3xl pointer-events-none" />
              {/* Subtle grid lines */}
              <div className="grid-lines absolute inset-0 opacity-15 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
                {/* Top badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/12 backdrop-blur-md px-4 py-1.5 mb-6 sm:mb-8">
                  <ShuttleIcon className="size-4 text-neon" />
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-white/85">
                    The Sports Life Standard
                  </span>
                  <Sparkles className="size-3.5 text-neon" />
                </div>

                <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.05]" style={{ textShadow: "0 6px 28px rgba(0,0,0,0.75)" }}>
                  This is Sports Life.
                </p>
                <div className="mx-auto mt-5 h-1 w-20 sm:w-28 rounded-full bg-gradient-to-r from-transparent via-neon to-transparent shadow-[0_0_20px_rgba(16,185,129,0.7)]" />
                <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-display text-xs sm:text-sm md:text-base lg:text-xl font-extrabold uppercase tracking-[0.18em] sm:tracking-[0.22em]">
                  <span className="text-neon drop-shadow-[0_2px_8px_rgba(16,185,129,0.55)]">One journey.</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  <span className="text-neon drop-shadow-[0_2px_8px_rgba(16,185,129,0.55)]">Hundreds of stories.</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  <span className="text-neon drop-shadow-[0_2px_8px_rgba(16,185,129,0.55)]">One family.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/*                       PART 2: WHY SPORTS LIFE?                             */}
      {/* -------------------------------------------------------------------------- */}
      <Section id="why-sports-life" className="bg-surface/20 border-t border-border mt-16 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="The Sports Life Philosophy"
          title="Why Sports Life?"
          body="Because Tennis Is More Than an Hour on the Court."
          align="center"
        />

        {/* Intro philosophy card */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-border bg-surface/70 p-6 sm:p-10 text-center shadow-lg backdrop-blur-md space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90">
            <p>
              Choosing a tennis academy is not simply about finding a court and a coach. It is about finding the right environment for a player to learn, develop, compete and enjoy the sport.
            </p>
            <p>
              At Sports Life, we believe every player deserves to be understood as an individual. A three-year-old beginning their first sport, a teenager working towards competitive tennis, and an adult playing for fitness may all hold a racquet, but their journeys are completely different. Our approach begins with understanding that difference.
            </p>
            <p className="font-bold text-neon sm:text-xl">
              We have built Sports Life around one simple idea: give every player the right environment to become better — at their own level, at their own pace, and with the right guidance.
            </p>
          </div>
        </Reveal>

        {/* The 8 Core Pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {whyCards.map((item, idx) => {
            const Icon = item.icon;
            const isNeon = item.accent === "neon";
            return (
              <Reveal key={item.title} delay={0.05 * (idx % 2)}>
                <div className="group card-elevated h-full flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neon/40 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div
                        className={`flex size-12 items-center justify-center rounded-2xl ${isNeon ? "bg-neon/15 text-neon" : "bg-electric/15 text-electric"
                          }`}
                      >
                        <Icon className="size-6" />
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-neon transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-bold text-foreground/60">
                    <CheckCircle2 className={`size-4 ${isNeon ? "text-neon" : "text-electric"}`} />
                    <span>The Sports Life Standard</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Visual Showcase Gallery */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <MiniCardSlider
            slides={[
              {
                src: "/about/why-img0281.jpg",
                alt: "Sports Life tennis coaches and dedicated mentorship",
              },
              {
                src: "/about/why-img2765.jpg",
                alt: "Individual player coaching and development",
              },
            ]}
            tag=""
            tagColor="text-neon"
            description=""
          />

          <MiniCardSlider
            slides={[
              {
                src: "/about/why-img8084.jpg",
                alt: "Sunday match play real point competition",
              },
              {
                src: "/about/why-img8260.jpg",
                alt: "Pressure points and match decision-making",
              },
            ]}
            tag=""
            tagColor="text-electric"
            description=""
          />

          <MiniCardSlider
            slides={[
              {
                src: "/about/why-img20250717a.jpg",
                alt: "Multi-surface synthetic, clay and grass courts",
              },
              {
                src: "/about/why-img20250717b.jpg",
                alt: "World-class court facilities across 3 centres in Delhi",
              },
            ]}
            tag=""
            tagColor="text-neon"
            description=""
          />
        </div>
      </Section>



    </div>
  );
}
