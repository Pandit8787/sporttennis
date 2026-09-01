import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { COACH_PROFILES } from "@/lib/coach-profiles";
import { COACHES } from "@/lib/site-data";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import { CtaLink } from "@/components/site/layout";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Medal,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
  ArrowLeft,
} from "lucide-react";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    // If slug is "abhiney-kumar", handle or redirect to /about/meet-founder
    if (params.slug === "abhiney-kumar") {
      return { coach: null, isFounder: true };
    }
    const coach = COACH_PROFILES[params.slug];
    if (!coach) throw notFound();
    return { coach, isFounder: false };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData || !loaderData.coach) {
      return {
        meta: [
          { title: "Coach Profile — Sports Life Tennis Academy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { coach } = loaderData;
    return {
      meta: [
        { title: `${coach.name} — ${coach.role} | Sports Life Tennis Academy` },
        {
          name: "description",
          content: `${coach.name} is a ${coach.role} at Sports Life Tennis Academy Delhi. ${coach.tagline}`,
        },
        { property: "og:title", content: `${coach.name} — ${coach.role}` },
        { property: "og:description", content: coach.tagline },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: `/team/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/team/${params.slug}` }],
    };
  },
  notFoundComponent: CoachNotFound,
  component: CoachDetailPage,
});

function CoachNotFound() {
  return (
    <Section className="pt-40 text-center">
      <h1 className="text-4xl font-bold">Coach Profile Not Found</h1>
      <p className="mt-4 text-muted-foreground">The coach profile you are looking for does not exist or has been moved.</p>
      <Link
        to="/team"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
      >
        <ArrowLeft className="size-4" /> Back to Team
      </Link>
    </Section>
  );
}

function CoachDetailPage() {
  const { coach, isFounder } = Route.useLoaderData();

  if (isFounder || !coach) {
    // If founder visited through /team/abhiney-kumar, offer direct view
    return (
      <Section className="pt-40 text-center">
        <h1 className="text-4xl font-bold">Abhiney Kumar — Founder & Head Coach</h1>
        <p className="mt-4 text-muted-foreground">Explore the complete story and vision of the founder.</p>
        <Link
          to="/about/meet-founder"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
        >
          View Founder Page →
        </Link>
      </Section>
    );
  }

  const otherLeadershipCoaches = [
    { name: "Abhiney Kumar", role: "Founder & Head Coach", to: "/about/meet-founder", image: "/abhiney-kumar-headshot.jpg" },
    { name: "Rahul Singh", role: "Head Coach", to: "/team/rahul-singh", image: "/rahul-singh.jpg" },
    { name: "Mukul Singh", role: "Head Coach", to: "/team/mukul-singh", image: "/mukul-singh.jpg" },
    { name: "Samriti Punyani", role: "Head Coach", to: "/team/samriti-punyani", image: "/samriti-punyani.jpg" },
  ].filter((c) => c.name !== coach.name);

  return (
    <>
      {/* Breadcrumb Navigation & Hero */}
      <div className="relative overflow-hidden pt-24 pb-12 bg-linear-to-b from-surface to-background border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link to="/team" className="hover:text-foreground transition-colors">Team</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-neon">{coach.name}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Col: Photo Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-border/80 bg-surface p-3 shadow-2xl">
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-2xl bg-surface-2/70 flex items-center justify-center p-2">
                    {coach.image ? (
                      <img
                        src={coach.image}
                        alt={`${coach.name} — ${coach.role} at Sports Life Tennis Academy`}
                        className="size-full object-contain object-center transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="grid size-full place-items-center bg-[image:var(--gradient-electric)] text-6xl font-black text-primary-foreground">
                        {coach.initials}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 rounded-2xl bg-linear-to-r from-neon/15 via-emerald-500/10 to-transparent p-4 border border-neon/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-display text-xl font-bold text-foreground">{coach.name}</h2>
                        <p className="text-xs font-bold uppercase tracking-wider text-neon mt-0.5">{coach.role}</p>
                      </div>
                      <span className="rounded-full bg-neon/20 border border-neon/40 px-3 py-1 text-[11px] font-bold text-neon">
                        Certified
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                      <span className="rounded-full bg-surface border border-border/80 px-2.5 py-1 text-muted-foreground font-medium">
                        {coach.experience}
                      </span>
                      <span className="rounded-full bg-surface border border-border/80 px-2.5 py-1 text-muted-foreground font-medium">
                        {coach.certifications}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Col: Header Intro & Tagline */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.1}>
                <span className="eyebrow">{coach.badge}</span>
                <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-foreground">
                  {coach.name}
                </h1>
                <p className="mt-2 text-xl font-bold text-neon leading-snug">
                  {coach.tagline}
                </p>

                <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/85">
                  {coach.intro.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-neon via-emerald-500 to-teal-500 px-7 py-3.5 font-display text-xs font-black uppercase tracking-wider text-white shadow-[0_8px_30px_rgba(34,197,94,0.35)] hover:scale-105 transition-all"
                  >
                    <span>Book Trial With {coach.name.split(" ")[0]}</span>
                    <span>→</span>
                  </Link>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-foreground hover:border-neon hover:text-neon transition-all"
                  >
                    Explore Programs
                  </Link>
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface-2/60 px-5 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-all"
                  >
                    <ArrowLeft className="size-3.5" /> All Coaches
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Playing Career Section */}
      <Section className="bg-surface/30">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Competitive Background"
              title="Playing Career"
              body={coach.playingCareer.summary}
            />
            <div className="mt-6 rounded-2xl bg-surface-2/60 border border-border p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-neon/15 text-neon">
                  <Trophy className="size-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">National Level Pedigree</p>
                  <p className="text-xs text-muted-foreground">Years of intense tournament match experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            {coach.playingCareer.highlights.map((highlight, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/80 bg-surface p-4.5 transition-all hover:border-neon/50 shadow-xs">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-neon/15 text-neon mt-0.5">
                    <Medal className="size-4.5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base">{highlight}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Coaching Experience & Player Success */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Proven Track Record"
              title="Coaching Experience"
              body={coach.coachingExperience.summary}
            />
            {coach.coachingExperience.notablePlayers && coach.coachingExperience.notablePlayers.length > 0 && (
              <div className="mt-8">
                <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-neon mb-3">
                  Notable Players Mentored
                </h4>
                <div className="space-y-2.5">
                  {coach.coachingExperience.notablePlayers.map((player, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-surface-2/80 border border-border px-4 py-2.5 text-xs sm:text-sm"
                    >
                      <span className="font-bold text-foreground">{player.name}</span>
                      <span className="font-semibold text-neon">{player.achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="size-5 text-neon" />
                Player Development Approach
              </h3>
              <div className="space-y-3.5">
                {(coach.coachingExperience.points || []).map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-foreground/85">
                    <CheckCircle2 className="size-5 shrink-0 text-neon mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Coaching Philosophy Quote Callout */}
      <Section className="bg-surface/40 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-neon/30 bg-surface/90 p-8 sm:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute -top-12 -right-12 size-40 rounded-full bg-neon/10 blur-3xl pointer-events-none" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-neon flex items-center gap-1.5">
            <Sparkles className="size-4" /> Coaching Philosophy
          </span>
          <blockquote className="mt-5 font-serif italic text-lg sm:text-2xl text-foreground leading-relaxed">
            “{coach.philosophy}”
          </blockquote>
          <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
            <div className="size-2.5 rounded-full bg-neon" />
            <p className="font-display text-sm font-bold tracking-wider uppercase text-foreground">
              {coach.name} · {coach.role}
            </p>
          </div>
        </div>
      </Section>

      {/* Areas of Expertise & Qualifications */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Areas of Expertise */}
          <div>
            <SectionHeading
              eyebrow="Specializations"
              title="Areas of Expertise"
              body="Comprehensive coaching capabilities spanning grassroots fundamentals to high-performance tournament competition."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {coach.expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-3.5 transition-colors hover:border-neon/40"
                >
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-neon/15 text-neon">
                    <Zap className="size-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications & Why Players Love Training */}
          <div className="space-y-8">
            {coach.qualifications && coach.qualifications.length > 0 && (
              <div>
                <SectionHeading
                  eyebrow="Academic & Professional"
                  title="Qualifications"
                />
                <div className="mt-6 space-y-3">
                  {coach.qualifications.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-3 rounded-xl bg-surface border border-border p-3.5 text-xs sm:text-sm">
                      <GraduationCap className="size-4.5 text-neon shrink-0 mt-0.5" />
                      <span className="font-medium text-foreground/90">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <SectionHeading
                eyebrow="Mentorship"
                title={`Why Players Love Training with ${coach.name.split(" ")[0]}`}
                body={coach.whyPlayersLove.summary}
              />
              <div className="mt-6 space-y-3">
                {coach.whyPlayersLove.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="size-4.5 shrink-0 text-neon mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Explore Other Leadership Coaches */}
      <Section className="bg-surface/30">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Leadership Team"
            title="Explore Other Mentors"
            body="Discover our dedicated team of head coaches and leadership mentors across Delhi."
          />
          <CtaLink to="/team" variant="ghost">
            View All Coaches
          </CtaLink>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherLeadershipCoaches.map((c) => (
            <article
              key={c.name}
              className="card-elevated group flex flex-col justify-between overflow-hidden border border-border bg-surface p-5"
            >
              <div className="flex items-center gap-4">
                <div className="size-16 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface-2 p-1">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="size-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-neon transition-colors">{c.name}</h3>
                  <p className="text-xs font-semibold text-neon">{c.role}</p>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
                <Link
                  to={c.to as any}
                  className="font-display text-xs font-bold uppercase tracking-wider text-neon hover:underline inline-flex items-center gap-1"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full bg-neon/10 hover:bg-neon hover:text-white px-3 py-1 text-xs font-semibold text-neon transition-colors"
                >
                  Book Trial
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Conversion Banner */}
      
    </>
  );
}

export default CoachDetailPage;
