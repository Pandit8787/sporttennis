import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import {
  Award,
  CheckCircle2,
  Filter,
  Heart,
  MapPin,
  MessageSquareQuote,
  Quote,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";
const spotlightCourtImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const spotlightGroupImage = "/centre-gallery/whatsapp-20260813-171844-2.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Player & Parent Reviews | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Read authentic reviews and success stories from parents, junior athletes, adult players, and tournament competitors at Sports Life Tennis Academy in Delhi.",
      },
      { property: "og:title", content: "Testimonials — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Real experiences from players and parents across our Roshanara Club, Major Dhyan Chand, and Punjabi Bagh Club centres.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

type Category = "All" | "Junior & Parents" | "Competitive Squad" | "Adult Program" | "Sunday Match Play";

const ALL_TESTIMONIALS = [
  {
    name: "Priya Nair",
    role: "Parent of 12-Year-Old Junior Player",
    category: "Junior & Parents" as Category,
    centre: "Roshanara Club",
    rating: 5,
    tag: "Junior Development",
    quote:
      "Six months at Sports Life Tennis Academy turned my daughter from a hesitant beginner into a confident state tournament player. The coaching detail, patience, and encouraging environment provided by Abhiney Sir and his team are extraordinary.",
    highlight: "Transformed from beginner to state tournament competitor in 6 months",
    verified: true,
  },
  {
    name: "Rohit Deshpande",
    role: "Performance Batch Player (Age 16)",
    category: "Competitive Squad" as Category,
    centre: "Major Dhyan Chand Complex",
    rating: 5,
    tag: "High Performance",
    quote:
      "The video analysis sessions and multi-surface training on synthetic and clay completely changed how I construct points. I used to lose long baseline rallies due to impatience; now I understand how to manage court geometry and dictate pace.",
    highlight: "Developed point construction and tactical composure",
    verified: true,
  },
  {
    name: "Anita George",
    role: "Adult Evening Program Member",
    category: "Adult Program" as Category,
    centre: "Punjabi Bagh Club",
    rating: 5,
    tag: "Adult Tennis",
    quote:
      "I joined for evening fitness and ended up staying for the amazing community. As a working professional, the coaches make every drill engaging, energetic, and technique-focused. It's genuinely the best evening batch in Delhi.",
    highlight: "Perfect balance of fitness, technique, and welcoming community",
    verified: true,
  },
  {
    name: "Vikram Malhotra",
    role: "Parent of U-14 National Circuit Player",
    category: "Junior & Parents" as Category,
    centre: "Roshanara Club",
    rating: 5,
    tag: "Tournament Player",
    quote:
      "What sets Sports Life apart is their honesty. There are no false promises—just structured development plans, clear tournament scheduling, and sincere coach mentorship. My son's footwork and court coverage have reached a whole new level.",
    highlight: "Honest feedback, structured pathways, and remarkable footwork improvement",
    verified: true,
  },
  {
    name: "Karthik Iyer",
    role: "Elite Squad Athlete",
    category: "Competitive Squad" as Category,
    centre: "Major Dhyan Chand Complex",
    rating: 5,
    tag: "Performance & S&C",
    quote:
      "The Strength & Conditioning (S&C) training combined with international coaching drills helped me recover from an ankle setback and build stronger lateral stability. I feel more explosive on court than ever before.",
    highlight: "Targeted athletic conditioning and explosive court movement",
    verified: true,
  },
  {
    name: "Sanjay Singhal",
    role: "Sunday Match Play Regular",
    category: "Sunday Match Play" as Category,
    centre: "Punjabi Bagh Club",
    rating: 5,
    tag: "Match Exposure",
    quote:
      "The Sunday Match Play initiative is simply brilliant. Playing full-pressure matches against players of similar ratings every single weekend has built immense match confidence that regular weekday drills alone cannot provide.",
    highlight: "Weekly tournament-style competitive exposure and rating tracking",
    verified: true,
  },
  {
    name: "Meenakshi Sharma",
    role: "Parent of 8-Year-Old Toddler/Beginner",
    category: "Junior & Parents" as Category,
    centre: "Roshanara Club",
    rating: 5,
    tag: "Grassroots Tennis",
    quote:
      "My 8-year-old looks forward to every session. The coaches incorporate fun hand-eye coordination games, agility ladders, and positive reinforcement that makes kids fall in love with tennis from day one.",
    highlight: "Fun, positive, and foundational coaching for young beginners",
    verified: true,
  },
  {
    name: "Aman Kapoor",
    role: "Adult Weekend Batch",
    category: "Adult Program" as Category,
    centre: "Major Dhyan Chand Complex",
    rating: 5,
    tag: "Adult Tennis",
    quote:
      "I picked up tennis after a 10-year break. The coaches patiently refined my grip and modern topspin forehand mechanics. The court facilities and lighting at Dhyan Chand are top-notch.",
    highlight: "Modern technique coaching for returning recreational players",
    verified: true,
  },
  {
    name: "Deepak Verma",
    role: "Parent of U-17 Delhi State Player",
    category: "Sunday Match Play" as Category,
    centre: "Roshanara Club",
    rating: 5,
    tag: "Match Play & Strategy",
    quote:
      "Having access to 14 synthetic, 10 clay, and 3 grass courts is rare in India. My daughter adapts quickly to any tournament surface now. The coaches' post-match debriefs give clear action items for the upcoming training week.",
    highlight: "Multi-surface adaptability and constructive post-match debriefs",
    verified: true,
  },
];

const TRANSFORMATIONS = [
  {
    name: "Ishaan V.",
    category: "Junior Competitive",
    centre: "Roshanara Club",
    duration: "14 Months",
    before: "District round-of-32, unranked, inconsistent second serve",
    after: "State Junior Semifinalist, top-35 national junior ranking",
    keyFocus: "Serve biomechanics, heavy topspin baseline consistency, mental composure",
  },
  {
    name: "Sara Q.",
    category: "Junior Squad",
    centre: "Major Dhyan Chand",
    duration: "10 Months",
    before: "Hesitant beginner struggling with deep backhand corners",
    after: "State Doubles Champion, consistent aggressive baseline depth",
    keyFocus: "Split-step footwork, multi-surface clay movement, tactical point play",
  },
  {
    name: "Aditya R.",
    category: "Adult / High Performance",
    centre: "Punjabi Bagh Club",
    duration: "9 Months",
    before: "Recurring ankle strains and fatigue during third-set tiebreaks",
    after: "Full competitive season completed with zero missed match days",
    keyFocus: "S&C conditioning, single-leg stability, structured match endurance",
  },
];

function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "Junior & Parents",
    "Competitive Squad",
    "Adult Program",
    "Sunday Match Play",
  ];

  const filteredTestimonials =
    selectedCategory === "All"
      ? ALL_TESTIMONIALS
      : ALL_TESTIMONIALS.filter((t) => t.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="Testimonials & Reviews"
        title="Stories From Our Players & Families"
        body="Hear firsthand from parents, juniors, competitive athletes, and adult players about how our player-first coaching and multi-surface facilities shape their tennis journey."
        image={heroImage}
      />

      {/* Stats Summary Bar */}
      <Section className="py-12 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-elevated p-6 text-center">
            <div className="flex justify-center text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">4.9 / 5</p>
            <p className="mt-2 text-sm font-semibold text-foreground">Average Parent Rating</p>
            <p className="text-xs text-muted-foreground mt-1">Based on 150+ verified reviews</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={98} suffix="%" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Player Retention Rate</p>
            <p className="text-xs text-muted-foreground mt-1">Long-term development focus</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={3} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Premier Centres in Delhi</p>
            <p className="text-xs text-muted-foreground mt-1">Roshanara, Dhyan Chand & Punjabi Bagh</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={27} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Professional Courts</p>
            <p className="text-xs text-muted-foreground mt-1">Synthetic, Clay & Grass surfaces</p>
          </div>
        </div>
      </Section>

      {/* Filterable Testimonials Grid */}
      <Section className="bg-surface/30">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Real Experiences"
            title="What the Community Says"
            body="Explore verified feedback from all programs across our Delhi centres."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-neon text-white shadow-md"
                    : "border border-border bg-surface text-muted-foreground hover:border-neon/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((t, idx) => (
            <Reveal key={t.name + idx} delay={(idx % 3) * 0.08}>
              <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-7">
                <div>
                  {/* Top Bar: Stars, Tag & Centre */}
                  <div className="flex items-center justify-between gap-2 border-b border-border/70 pb-3">
                    <div className="flex items-center text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="rounded-md bg-neon/10 px-2 py-0.5 text-[11px] font-bold text-neon">
                      {t.tag}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <div className="mt-4">
                    <Quote className="size-6 text-neon/30 mb-2" />
                    <p className="text-sm leading-relaxed text-foreground/90 italic">
                      “{t.quote}”
                    </p>
                  </div>

                  {/* Highlight Pill */}
                  {t.highlight && (
                    <div className="mt-4 rounded-lg bg-surface border border-border p-2.5 text-xs text-foreground/80 font-medium">
                      <span className="text-neon font-bold mr-1.5">★ Key Result:</span>
                      {t.highlight}
                    </div>
                  )}
                </div>

                {/* Footer Author Details */}
                <div className="mt-6 border-t border-border pt-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-sm text-foreground">{t.name}</p>
                      {t.verified && (
                        <CheckCircle2 className="size-3.5 text-neon" title="Verified Player/Parent" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                    <MapPin className="size-3 text-neon" />
                    <span>{t.centre}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Player Transformations Spotlight */}
      <Section>
        <SectionHeading
          eyebrow="Measurable Progress"
          title="Player Development Spotlights"
          body="Real transformation stories demonstrating how structured training and match exposure accelerate athletic growth."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {TRANSFORMATIONS.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="card-elevated overflow-hidden p-6 sm:p-7">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.name}</h3>
                    <p className="text-xs text-neon font-semibold">{item.category}</p>
                  </div>
                  <span className="rounded-full bg-surface border border-border px-3 py-1 text-xs font-bold text-foreground">
                    ⏱ {item.duration}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-destructive">
                      Starting Point
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{item.before}</p>
                  </div>

                  <div className="rounded-xl border border-neon/30 bg-neon/5 p-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neon">
                      Current Milestone
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">
                      {item.after}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-[11px] font-semibold text-muted-foreground">
                    <strong className="text-foreground">Focus Area:</strong> {item.keyFocus}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Visual On-Court Experience Feature */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Why Players Stay"
              title="The Environment That Inspires Excellence"
              body="At Sports Life, coaching goes beyond teaching strokes. We build resilient, self-confident athletes in a positive, high-energy environment."
            />

            <div className="space-y-3">
              {[
                {
                  title: "Video Analysis & Tactical Clarity",
                  desc: "Clear visual feedback helps players understand court positioning, swing path, and error patterns.",
                },
                {
                  title: "Multi-Surface Advantage",
                  desc: "Training across 14 synthetic, 10 clay, and 3 grass courts prepares players for all competition venues.",
                },
                {
                  title: "Supportive Parent-Coach Partnership",
                  desc: "Regular progress check-ins, transparent advice, and DU sports quota pathway guidance.",
                },
                {
                  title: "High-Energy Competitive Culture",
                  desc: "Weekly Sunday Match Play creates tournament resilience without unnecessary stress.",
                },
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neon/15 text-neon font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{point.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={spotlightCourtImage}
                alt="Court action at Sports Life"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={spotlightGroupImage}
                alt="Sports Life group training"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Ready to Start Your Success Story?"
        body="Experience the Sports Life difference. Book a free 90-minute trial session and comprehensive skill assessment with our certified coaches today."
      />
    </>
  );
}
