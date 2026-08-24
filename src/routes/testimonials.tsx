import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import { VideoCard } from "@/components/site/VideoCard";
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

const VIDEO_TESTIMONIALS = [
  {
    src: "/videos/testimonials/C0004.mp4",
    title: "Parent Testimonial — Genuine Feedback",
    tag: "Parent Review",
    caption: "“Coaching aur environment dono hi top-class hai. Bacchon ka progress visible hai.”",
    location: "Roshanara Club",
    name: "Parent Review",
  },
  {
    src: "/videos/testimonials/C0005.mp4",
    title: "Player Experience On Court",
    tag: "Player Story",
    caption: "“Regular drills + Sunday match play ne mera game poora badal diya.”",
    location: "Dhyan Chand Complex",
    name: "Junior Player",
  },
  {
    src: "/videos/testimonials/C0006.mp4",
    title: "Parent On Junior Journey",
    tag: "Parent Review",
    caption: "“Technique, discipline, match sense — sab ek saath improve hua.”",
    location: "Punjabi Bagh Club",
    name: "Parent Review",
  },
  {
    src: "/videos/testimonials/C0009.mp4",
    title: "Player & Parent Success Story",
    tag: "Combined Review",
    caption: "“State level tak pahuncha diya. Coach team ka support unbelievable hai.”",
    location: "Sports Life Academy",
    name: "Player + Parent",
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
            <p className="mt-2 text-sm font-semibold text-foreground">Tennis Courts</p>
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
            href="https://www.instagram.com/sportslife_tennis?igsi=MWE2OXg1anI4OWJ0Yg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-purple-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:opacity-95 transition-opacity"
          >
            <span>Follow on Instagram</span>
            <ExternalLink className="size-4" />
          </a>
        </div>
      </Section>
            {/* ====== VIDEO TESTIMONIALS GALLERY (REELS 9:16) ====== */}
      <Section className="bg-surface/30">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Video Reviews"
            title="Reels-Style Video Testimonials"
            body="Vertical 9:16 video reviews — watch real players and parents share their unfiltered journey at Sports Life Tennis Academy."
          />
          <div className="flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-2 text-xs font-bold text-neon">
            <span className="size-2 rounded-full bg-red-500 animate-blink-live" />
            <span>{VIDEO_TESTIMONIALS.length} LIVE Stories</span>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEO_TESTIMONIALS.map((vid, idx) => (
            <Reveal key={vid.src} delay={idx * 0.1}>
              <div className="flex flex-col h-full gap-3">
                <div className="group card-elevated rounded-[2rem] overflow-hidden border border-border/70 bg-black shadow-xl hover:shadow-2xl hover:border-neon/50 transition-all">
                  <div className="relative aspect-[9/16] overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.92)_0%,#0a0a0a_65%,#000_100%)]">
                    {/* Ambient corner glow */}
                    <div className="pointer-events-none absolute inset-0 z-10 opacity-70 bg-[radial-gradient(circle_at_15%_12%,rgba(239,68,68,0.22),transparent_55%),radial-gradient(circle_at_85%_88%,rgba(16,185,129,0.25),transparent_55%)]" />

                    {/* LIVE Badge — top-left with blinking dot */}
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 px-2.5 py-1">
                      <span className="size-1.5 rounded-full bg-red-500 animate-blink-live shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">LIVE</span>
                    </div>

                    {/* Tag pill — top-right */}
                    <span className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 rounded-full bg-neon/90 backdrop-blur-sm border border-neon px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                      <Sparkles className="size-2.5" />
                      {vid.tag}
                    </span>

                    {/* Video — Full frame visible (no crop), autoplay muted loop */}
                    <video
                      className="size-full object-contain transition-transform duration-700"
                      src={vid.src}
                      title={vid.title}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={vid.src} type="video/mp4" />
                    </video>

                    {/* Gradient overlays for caption legibility */}
                    <div className="absolute inset-x-0 bottom-0 z-10 h-[55%] bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 z-10 h-[30%] bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

                    {/* Bottom caption + author block — Reels style */}
                    <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <div className="grid size-8 place-items-center rounded-full bg-neon/90 text-white text-[11px] font-black border-2 border-white/20 shadow-lg">
                            {vid.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-[12px] font-extrabold text-white drop-shadow-md">
                              {vid.name}
                            </p>
                            <p className="text-[10px] font-semibold text-neon/90 flex items-center gap-1">
                              <MapPin className="size-2.5" />
                              {vid.location}
                            </p>
                          </div>
                        </div>
                        <p className="text-[12px] sm:text-[13px] font-semibold leading-snug text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] line-clamp-4">
                          {vid.caption}
                        </p>
                      </div>
                    </div>

                    {/* Reels frame counter bottom-right */}
                    <div className="absolute right-3 bottom-3 z-20 font-mono text-[10px] font-bold tracking-wider text-white/80">
                      {String(idx + 1).padStart(2, "0")}{" "}
                      <span className="text-white/40">/ {String(VIDEO_TESTIMONIALS.length).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
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
