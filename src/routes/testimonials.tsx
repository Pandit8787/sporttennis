import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import {
  CheckCircle2,
  ExternalLink,
  Flame,
  Instagram,
  MapPin,
  Quote,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";
const spotlightCourtImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const spotlightGroupImage = "/centre-gallery/whatsapp-20260813-171844-2.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Google Reviews & Testimonials — Player & Parent Feedback | Sports Life" },
      {
        name: "description",
        content:
          "Read authentic Google reviews and player testimonials from parents, junior athletes, adult players, and tournament competitors at Sports Life Tennis Academy in Delhi.",
      },
      { property: "og:title", content: "Testimonials — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Google reviews and player feedback across Roshanara Club, Major Dhyan Chand Complex, and Punjabi Bagh Club.",
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
    source: "Google Review",
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
    source: "Google Review",
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
    source: "Google Review",
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
    source: "Google Review",
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
    source: "Google Review",
    quote:
      "The athletic conditioning combined with international coaching drills helped me recover from an ankle setback and build stronger lateral stability. I feel more explosive on court than ever before.",
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
    source: "Google Review",
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
    source: "Google Review",
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
    source: "Google Review",
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
    source: "Google Review",
    quote:
      "Having access to 12 synthetic, 10 clay, and 3 grass courts is rare in India. My daughter adapts quickly to any tournament surface now. The coaches' post-match debriefs give clear action items for the upcoming training week.",
    highlight: "Multi-surface adaptability and constructive post-match debriefs",
    verified: true,
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
        eyebrow="Reviews & Feedback"
        title="Google Reviews & Player Feedback"
        body="Hear firsthand from parents, juniors, competitive athletes, and adult players about how our player-first coaching and multi-surface facilities shape their tennis journey."
        image={heroImage}
      />

      {/* Google Review Badge & Stats Bar */}
      <Section className="py-12 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-elevated p-6 text-center border-neon/30 bg-neon/5">
            <div className="flex justify-center text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">5.0 / 5.0</p>
            <p className="mt-2 text-sm font-bold text-foreground">Google Review Rating</p>
            <p className="text-xs text-muted-foreground mt-1">Verified Player & Parent Reviews</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={300} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Monthly Active Players</p>
            <p className="text-xs text-muted-foreground mt-1">Training across all 3 Delhi hubs</p>
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
              <Counter value={25} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Professional Courts</p>
            <p className="text-xs text-muted-foreground mt-1">12 Synthetic · 10 Clay · 3 Grass</p>
          </div>
        </div>
      </Section>

      {/* Instagram & Social Media Video Testimonials Banner */}
      <Section className="bg-surface/30">
        <div className="card-elevated rounded-3xl border border-pink-500/30 bg-linear-to-r from-pink-500/10 via-purple-500/5 to-transparent p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/15 border border-pink-500/30 px-3.5 py-1 text-xs font-bold text-pink-400">
              <Instagram className="size-4" /> Instagram Community & Reels
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Watch Video Testimonials & Training Reels
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Follow our daily on-court training stories, player match highlights, coach interviews, and video reviews on Instagram.
            </p>
          </div>
          <a
            href="https://www.instagram.com/sportslifetennis"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-purple-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:opacity-95 transition-opacity"
          >
            <span>Follow on Instagram</span>
            <ExternalLink className="size-4" />
          </a>
        </div>
      </Section>

      {/* Filterable Reviews Grid */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Verified Feedback"
            title="What Our Players & Parents Say"
            body="Explore verified reviews from players of all ages and training levels."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
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
              <div className="card-elevated flex h-full flex-col justify-between p-6 sm:p-7 border border-border bg-surface rounded-2xl shadow-sm hover:border-neon/50 transition-colors">
                <div>
                  {/* Top Bar: Stars, Tag & Source */}
                  <div className="flex items-center justify-between gap-2 border-b border-border/70 pb-3">
                    <div className="flex items-center text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="rounded-md bg-neon/10 px-2 py-0.5 text-[11px] font-bold text-neon">
                      {t.source}
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
                    <div className="mt-4 rounded-lg bg-surface-2 border border-border p-2.5 text-xs text-foreground/80 font-medium">
                      <span className="text-neon font-bold mr-1.5">★ Highlight:</span>
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
                        <CheckCircle2 className="size-3.5 text-neon" aria-label="Verified Player/Parent" />
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

      {/* CTA */}
      <CtaBanner
        title="Ready to Start Your Success Story?"
        body="Experience the Sports Life difference. Book a free trial session and skill assessment with our certified coaching team today."
      />
    </>
  );
}
