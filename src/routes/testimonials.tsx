import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/sections";
import { Counter } from "@/components/site/motion-primitives";
import { VideoCard } from "@/components/site/VideoCard";
import {
  ExternalLink,
  Instagram,
  Star,
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
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
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
