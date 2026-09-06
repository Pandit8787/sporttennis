import { useState, useRef, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/sections";
import { Counter } from "@/components/site/motion-primitives";
import {
  CheckCircle2,
  ExternalLink,
  Film,
  Instagram,
  MapPin,
  Maximize2,
  Pause,
  Play,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";

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

interface VideoTestimonialItem {
  id: string;
  name: string;
  role: string;
  badge: string;
  badgeType: "verified" | "reel" | "story";
  quote: string;
  highlight: string;
  src: string;
  poster: string;
  location: string;
  duration: string;
  instagramUrl?: string;
}

const VIDEO_TESTIMONIALS: VideoTestimonialItem[] = [
  {
    id: "kanav-mittal",
    name: "Kanav Mittal",
    role: "Academy Student",
    badge: "Verified Review",
    badgeType: "verified",
    highlight: "Massive improvement through structured coaching",
    quote:
      "Great tennis academy with experienced and supportive coaches. The training is professional and well structured, and it has improved my game massively.",
    src: "/testimonials/kanav-mittal-testimonial.mp4",
    poster: "/testimonials/kanav-mittal-poster.jpg",
    location: "Roshanara Club",
    duration: "0:26",
  },
  {
    id: "ekamveer-singh",
    name: "Ekamveer Singh",
    role: "Junior Competitive Squad",
    badge: "Instagram Reel",
    badgeType: "reel",
    highlight: "Personalized attention & technical confidence",
    quote:
      "Very good and professional academy for tennis players. All the coaches give personal attention and sweet encouragement on court.",
    src: "/testimonials/ekamveer-testimonial.mp4",
    poster: "/testimonials/ekamveer-poster.jpg",
    location: "Dhyan Chand Complex",
    duration: "0:42",
    instagramUrl: "https://www.instagram.com/reels/Db8mYtTJ-8F/",
  },
  {
    id: "digvijay-singh",
    name: "Digvijay Singh",
    role: "Tournament Competitor",
    badge: "Instagram Reel",
    badgeType: "reel",
    highlight: "Daily fitness discipline & high-stakes match play",
    quote:
      "Intense on-court training, disciplined footwork drills, and mentors who push your competitive potential every single week.",
    src: "/testimonials/digvijay-testimonial.mp4",
    poster: "/testimonials/digvijay-poster.jpg",
    location: "Punjabi Bagh Club",
    duration: "0:50",
    instagramUrl: "https://www.instagram.com/reels/DciMLqCM-aP/",
  },
];

function VideoReelCard({
  item,
  isPlaying,
  onPlay,
  onPause,
}: {
  item: VideoTestimonialItem;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.currentTime = 0;
      video
        .play()
        .then(() => {
          video.muted = false;
          setIsMuted(false);
        })
        .catch(() => {
          // If browser policy blocks unmuted autoplay, mute and play
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const togglePlay = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <div
      onClick={togglePlay}
      className={`group relative rounded-3xl overflow-hidden bg-slate-950 border transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer select-none aspect-[9/16] min-h-[460px] sm:min-h-[500px] ${
        isPlaying
          ? "border-neon shadow-2xl shadow-neon/15 ring-2 ring-neon/40"
          : "border-border hover:border-neon/50 hover:shadow-2xl hover:shadow-neon/10"
      }`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        playsInline
        loop
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => onPause()}
        className="absolute inset-0 size-full object-cover"
      />

      {/* Top Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none z-10" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/95 via-black/75 to-transparent pointer-events-none z-10" />

      {/* Top Bar Badges */}
      <div className="relative z-20 p-4 flex items-center justify-between gap-2">
        {/* Category Pill */}
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md border ${
            item.badgeType === "reel"
              ? "bg-pink-500/20 text-pink-300 border-pink-500/40 shadow-sm shadow-pink-500/20"
              : item.badgeType === "verified"
              ? "bg-neon/20 text-neon border-neon/40 shadow-sm shadow-neon/20"
              : "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/20"
          }`}
        >
          {item.badgeType === "reel" ? (
            <Instagram className="size-3 text-pink-400" />
          ) : item.badgeType === "verified" ? (
            <CheckCircle2 className="size-3 text-neon" />
          ) : (
            <Sparkles className="size-3 text-amber-400" />
          )}
          <span>{item.badge}</span>
        </span>

        {/* Location Pill */}
        <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-2.5 py-1 text-[10px] font-semibold text-white/90">
          <MapPin className="size-3 text-neon" />
          <span className="truncate max-w-[120px]">{item.location}</span>
        </span>
      </div>

      {/* Center Play / Pause Indicator */}
      <div className="relative z-20 flex flex-col items-center justify-center p-4">
        {!isPlaying ? (
          <div className="flex flex-col items-center gap-2 group-hover:scale-105 transition-transform duration-300">
            <div className="size-16 rounded-full bg-black/65 backdrop-blur-md border-2 border-white/30 flex items-center justify-center text-white shadow-2xl group-hover:bg-neon group-hover:text-black group-hover:border-neon group-hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-all duration-300">
              <Play className="size-7 fill-current ml-1" />
            </div>
            <span className="rounded-full bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1 text-[11px] font-bold text-white/90">
              Watch Review · {item.duration}
            </span>
          </div>
        ) : (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="size-14 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <Pause className="size-6 fill-current" />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Info & Action Bar */}
      <div className="relative z-20 p-4 space-y-2.5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-display text-lg font-black text-white drop-shadow-md">
              {item.name}
            </h4>
            <span className="text-[11px] font-medium text-neon font-mono">
              {item.duration}
            </span>
          </div>
          <p className="text-xs font-semibold text-white/70">{item.role}</p>
        </div>

        <p className="text-xs text-white/90 line-clamp-2 leading-relaxed italic drop-shadow-sm">
          "{item.quote}"
        </p>

        {/* Action Controls Row */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/15">
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="inline-flex items-center gap-1.5 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[10px] font-bold text-white transition-colors"
            >
              {isMuted ? (
                <>
                  <VolumeX className="size-3 text-red-400" />
                  <span>Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="size-3 text-neon" />
                  <span>Sound On</span>
                </>
              )}
            </button>

            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="View Fullscreen"
              className="size-6 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 hover:text-neon transition-colors"
            >
              <Maximize2 className="size-3" />
            </button>
          </div>

          {/* Direct Instagram Link if available */}
          {item.instagramUrl && (
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/20 hover:bg-pink-500/35 border border-pink-500/40 px-2.5 py-1 text-[10px] font-bold text-pink-300 transition-all hover:scale-105"
            >
              <Instagram className="size-3" />
              <span>Instagram</span>
              <ExternalLink className="size-2.5" />
            </a>
          )}
        </div>
      </div>

      {/* Video Progress Bar */}
      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/15 z-30 overflow-hidden">
        <div
          className="h-full bg-neon transition-all duration-150 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function TestimonialsPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="Reviews & Feedback"
        title="Google Reviews & Player Feedback"
        body="Hear firsthand from parents, juniors, competitive athletes, and adult players about how our player-first coaching and multi-surface facilities shape their tennis journey."
        image={heroImage}
        removeFog
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

      {/* Featured Video Reviews & Instagram Reels Section */}
      <Section className="bg-surface/30">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-neon/10 border border-neon/30 px-3.5 py-1 text-xs font-bold text-neon mb-3">
                <Film className="size-3.5" /> Video Testimonials &amp; Instagram Reels
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
                Watch On-Court Player Reviews
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Authentic player interviews, junior competitive experiences, and featured training reels directly from our courts at Roshanara, Major Dhyan Chand, and Punjabi Bagh.
              </p>
            </div>

            {/* Instagram Link CTA */}
            <a
              href="https://www.instagram.com/sportslife_tennis?igsi=MWE2OXg1anI4OWJ0Yg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-pink-500 via-purple-600 to-indigo-600 px-6 py-3 font-display text-xs font-black uppercase tracking-wider text-white shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Instagram className="size-4" />
              <span>Follow @sportslife_tennis</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          {/* Video Cards Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEO_TESTIMONIALS.map((item) => (
              <VideoReelCard
                key={item.id}
                item={item}
                isPlaying={activeVideoId === item.id}
                onPlay={() => setActiveVideoId(item.id)}
                onPause={() => setActiveVideoId(null)}
              />
            ))}
          </div>

          {/* Tip / Note below videos */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl border border-border bg-surface text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-neon animate-pulse" />
              <span>Tap any video card above to play with high-definition sound and full controls.</span>
            </div>
            <a
              href="https://www.instagram.com/sportslife_tennis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-foreground hover:text-neon transition-colors"
            >
              <span>Explore 100+ reels on Instagram</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </Section>



      {/* Real Google Reviews — Text Cards */}
      <Section>
        {/* Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
              <Star className="size-3.5 fill-amber-400 text-amber-400" /> Verified Google Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              What Our Players &amp; Parents Say
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Real, unedited Google reviews — straight from parents, juniors, and players training at Sports Life Tennis Academy.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">5.0</span>
            <span className="text-xs text-muted-foreground">· 60 reviews on Google</span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {[
            {
              name: "Manvi Rathi",
              initial: "M",
              color: "bg-emerald-500",
              time: "8 weeks ago",
              quote:
                "I've been a part of Sports Life Tennis Academy for the last two years, and it has played a huge role in my development as a tennis player. The coaches are experienced, dedicated, and always encourage us to give our best. A special thanks to the founder, Coach Abhiney Sir, whose vision, discipline, and commitment to developing players have created such a positive and professional training environment. The academy provides a competitive yet supportive atmosphere that helps players improve technically, physically, and mentally. I'm grateful for everything I've learned here and would highly recommend this academy to anyone passionate about tennis.",
            },
            {
              name: "Vikas Rathi",
              initial: "V",
              color: "bg-blue-500",
              time: "8 weeks ago",
              quote:
                "Sports life tennis academy is one the most important aspect of our life. Manvi has been playing tennis from the age of 6, but unfortunately we never could find the right coach during this journey. Luckily we found Abiney (founder of sports life tennis academy). It's because of him that Manvi is still playing tennis. Success and failure is a long journey but happiness to play tennis is all about sports life. Highly recommend tennis centre where you can trust the coach and its method — all sports loving parents should give their child once chance at sports life.",
            },
            {
              name: "Nivedan Kukreti",
              initial: "N",
              color: "bg-purple-500",
              time: "4 weeks ago",
              badge: "NEW",
              quote:
                "My son trains at the Academy and it is one of the good academies of Delhi. Abhinay sir gives personal attention to all the students. Very good infrastructure and great team is available for assistance at any moment. They are dedicated to the students and offer a personalized training to all the students.",
            },
            {
              name: "Nathin Ram",
              initial: "N",
              color: "bg-orange-500",
              time: "4 weeks ago",
              badge: "NEW",
              quote:
                "I have been with Sports Life tennis academy since 2024. It has been a really great journey for me with them. From the amenities to the coaches, it's always kept me wanting to go back and play. A special shoutout to Abhiney sir, Rahul sir and Rishi sir — they have been wonderful coaches who have guided me on my tennis journey.",
            },
            {
              name: "Kanav Mittal",
              initial: "K",
              color: "bg-pink-500",
              time: "8 weeks ago",
              quote:
                "Great tennis academy with experienced and supportive coaches. The training is professional and well structured, and it has improved my game massively. Highly recommended for players of all skill levels!",
            },
            {
              name: "Vivaan Kohli",
              initial: "V",
              color: "bg-cyan-500",
              time: "8 weeks ago",
              quote:
                "Great academy to learn tennis. The coaches are very experienced and polite. They helped improve my game from a beginner to pro in just a few weeks. Now I play and win tournaments.",
            },
            {
              name: "Sakshi Gupta",
              initial: "S",
              color: "bg-rose-500",
              time: "4 weeks ago",
              badge: "NEW",
              quote:
                "A fantastic academy with caring and dedicated coaches. There has been incredible improvement in my child. Highly recommend!",
            },
            {
              name: "Aadwik Rawal",
              initial: "A",
              color: "bg-indigo-500",
              time: "4 weeks ago",
              badge: "NEW",
              quote:
                "I've been in this academy for 8 months and I've seen more improvement than I saw in 3 years — it's been great and I'm excited for the experience ahead with Sports Life Tennis Academy.",
            },
            {
              name: "Deepam Malik",
              initial: "D",
              color: "bg-teal-500",
              time: "8 weeks ago",
              quote: "Excellent trainers and well maintained facilities.",
            },
            {
              name: "Ekamveer Singh",
              initial: "E",
              color: "bg-amber-500",
              time: "8 weeks ago",
              quote:
                "Very good and professional academy for tennis players. All the coaches are very sweet as well.",
            },
            {
              name: "Amit Kochhar",
              initial: "A",
              color: "bg-lime-600",
              time: "4 weeks ago",
              badge: "NEW",
              quote: "Well maintained courts and very supportive coaching team.",
            },
          ].map((r, idx) => (
            <div
              key={idx}
              className="break-inside-avoid rounded-2xl border border-border bg-surface p-5 shadow-sm hover:border-neon/40 hover:shadow-lg hover:shadow-neon/5 transition-all duration-300"
            >
              {/* Header row */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`${r.color} size-10 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0`}
                >
                  {r.initial}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm text-foreground truncate">{r.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-muted-foreground">{r.time}</span>
                    {r.badge && (
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-bold bg-neon/10 text-neon border border-neon/20">
                        {r.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Review text */}
              <p className="text-sm leading-relaxed text-foreground/85">{r.quote}</p>

              {/* Google badge */}
              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <svg className="size-3.5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/Sports+Life+Tennis+Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-6 py-3 text-sm font-semibold text-neon hover:bg-neon/10 transition-colors"
          >
            <Star className="size-4 fill-neon text-neon" />
            View All 60 Reviews on Google
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </Section>

      {/* CTA */}

    </>
  );
}
