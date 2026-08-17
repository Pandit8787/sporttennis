import { Link, createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { COACHES, STATS } from "@/lib/site-data";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import { CtaLink } from "@/components/site/layout";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Flame,
  Globe2,
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
} from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — Sports Life Tennis Academy Delhi" },
      {
        name: "description",
        content:
          "Meet the elite coaching and leadership team at Sports Life Tennis Academy: former national champions, NIS-certified coaches, and player-first mentors across Delhi.",
      },
      { property: "og:title", content: "Meet Our Coaching Team — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Experienced mentors, national competitors, and certified trainers dedicated to long-term player development.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  const location = useLocation();

  if (location.pathname !== "/team" && location.pathname !== "/team/") {
    return <Outlet />;
  }

  const leadershipTeam = [
    {
      name: "Abhiney Kumar",
      role: "Founder & Head Coach",
      tagline: "International Coach & Player Development Specialist",
      to: "/about/meet-founder" as const,
      image: "/abhiney-kumar-headshot.jpg",
      initials: "AK",
      badge: "Flagship Founding Mentor",
      badgeColor: "bg-neon/15 text-neon border-neon/30",
      experience: "16+ Years Experience · Spain Exposure",
      tags: ["Diploma JC Ferrero (Spain)", "NIS & PTR Certified", "Khelo India SAI Protocol"],
      bio: "International Tennis Coach and founder of Sports Life. With 16+ years in competitive tennis and coaching stints across elite academies in Spain (Jofre Porta, Ferrero Academy), he drives structured systems for Indian tennis.",
    },
    {
      name: "Rahul Singh",
      role: "Head Coach",
      tagline: "Developing Champions Through Discipline & Experience",
      to: "/team/rahul-singh" as const,
      image: "/rahul-singh.jpg",
      initials: "RS",
      badge: "Former AITA Men's Top 35",
      badgeColor: "bg-electric/15 text-electric border-electric/30",
      experience: "12+ Years Competitive & Coaching",
      tags: ["CBSE National Gold", "Mentored AIR 8 & AIR 13", "Tournament Strategy"],
      bio: "Former AITA Men's Top 35 player and high-performance coach. Specialized in technical stroke correction, tactical match planning, and mentoring junior athletes to top national rankings.",
    },
    {
      name: "Mukul Singh",
      role: "Head Coach",
      tagline: "High-Performance Excellence & Modern Biomechanics",
      to: "/team/mukul-singh" as const,
      image: "/mukul-singh.jpg",
      initials: "MS",
      badge: "5x AITA National Winner",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      experience: "National & DU Champion · Elite Coach",
      tags: ["CBSE All India Singles Winner", "Top-20 Player Mentor", "Agility Specialist"],
      bio: "Accomplished national player and coach with 5 AITA titles. Known for energetic, disciplined training, biomechanical precision, and helping athletes develop composure under competitive pressure.",
    },
    {
      name: "Samriti Punyani",
      role: "Head Coach",
      tagline: "Empowering Athletes Through Science & Education",
      to: "/team/samriti-punyani" as const,
      image: "/samriti-punyani.jpg",
      initials: "SP",
      badge: "NIS Qualified · M.P.Ed. · AIR 21",
      badgeColor: "bg-pink-500/15 text-pink-400 border-pink-500/30",
      experience: "14+ Years Competitive & Sports Education",
      tags: ["NIS Bengaluru (PGDSC)", "All India Inter-Uni Gold", "LTAD Framework"],
      bio: "Former All India Rank 21 and double Inter-University Gold Medalist. Brings a scientific physical education approach, long-term athlete development (LTAD), and inspiring leadership in women's tennis.",
    },
  ];

  const otherCoaches = COACHES.filter(
    (coach) => !["Abhiney Kumar", "Rahul Singh", "Mukul Singh", "Samriti Punyani"].includes(coach.name)
  );

  const coachingPillars = [
    {
      icon: Target,
      title: "Zero Autopilot Coaching",
      desc: "Every drill has a clear tactical purpose. We replace mindless ball-feeding with game-situation problem solving.",
      color: "text-neon bg-neon/15",
    },
    {
      icon: Flame,
      title: "Competitive Match Sense",
      desc: "Practice builds stroke mechanics; regular Sunday Match Play builds decision-making, resilience, and tournament readiness.",
      color: "text-electric bg-electric/15",
    },
    {
      icon: ShieldCheck,
      title: "100% Player-Centred",
      desc: "Training plans tailored to individual growth stages, bio-mechanics, and long-term athletic goals.",
      color: "text-emerald-400 bg-emerald-500/15",
    },
    {
      icon: GraduationCap,
      title: "Scientific Athlete Pathways",
      desc: "Structured fitness, footwork conditioning, sports quota guidance, and international training methodologies.",
      color: "text-amber-400 bg-amber-500/15",
    },
  ];

  return (
    <>
      {/* Custom Ultra-Premium Hero Section */}
      <div className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border/80 bg-linear-to-b from-surface via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />
        <div className="grid-lines absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-neon mb-6">
                <Sparkles className="size-3.5" /> Certified Coaching Faculty · Delhi
              </div>
              <h1 className="text-4xl font-black tracking-tight uppercase sm:text-5xl lg:text-6xl text-foreground">
                The Mentors Shaping{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-neon via-emerald-400 to-teal-300">
                  Championship Tennis
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto font-medium">
                At Sports Life Tennis Academy, our greatest strength is our coaching team. From former national champions and NIS-qualified mentors to on-court specialists, every coach is committed to disciplined, player-first excellence.
              </p>
            </Reveal>

            {/* Stats Highlight Bar */}
            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-3xl mx-auto">
                <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl sm:text-3xl font-black text-neon">4</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                    Head Coaches
                  </p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl sm:text-3xl font-black text-electric">18+</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                    Court Coaches
                  </p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl sm:text-3xl font-black text-foreground">27</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                    Delhi Courts
                  </p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl sm:text-3xl font-black text-neon">100%</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                    Player-First
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Quick Action CTAs */}
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-neon via-emerald-500 to-teal-500 px-7 py-3.5 font-display text-xs font-black uppercase tracking-wider text-white shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:scale-105 transition-all"
                >
                  <span>Book Free Skill Assessment</span>
                  <span>→</span>
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-foreground hover:border-neon hover:text-neon transition-all"
                >
                  Explore Programs
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Leadership Team (4 Equal-sized, ultra-polished cards) */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Leadership Mentors"
            title="Meet Our Leadership Team"
            body="Four equal-sized leadership profiles. Each Head Coach brings national competitive pedigree, international exposure, and proven player development methods."
          />
          <div className="hidden lg:flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-4 py-2 text-xs font-semibold text-muted-foreground">
            <Trophy className="size-4 text-neon" />
            <span>Click 'Learn More' for full career & bio</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {leadershipTeam.map((coach, index) => (
            <Reveal key={coach.name} delay={index * 0.08}>
              <article className="card-elevated group flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-surface shadow-[0_18px_50px_rgba(0,0,0,0.06)] hover:border-neon/50 transition-all duration-500">
                <div>
                  {/* Photo Frame Container */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-surface-2/70 flex items-center justify-center p-2.5">
                    {coach.image ? (
                      <img
                        src={coach.image}
                        alt={`${coach.name} — ${coach.role}`}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid size-full place-items-center bg-[image:var(--gradient-electric)] text-5xl font-black text-primary-foreground">
                        {coach.initials}
                      </div>
                    )}
                    <span className={`absolute top-3 left-3 rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md ${coach.badgeColor}`}>
                      {coach.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neon">{coach.role}</p>
                    <h3 className="mt-1.5 text-2xl font-bold text-foreground leading-tight group-hover:text-neon transition-colors">
                      {coach.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">{coach.experience}</p>

                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-foreground/80 line-clamp-3">
                      {coach.bio}
                    </p>

                    {/* Skill Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {coach.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-surface-2 border border-border/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with CTAs */}
                <div className="p-6 pt-0">
                  <div className="border-t border-border/70 pt-4 flex items-center justify-between">
                    <Link
                      to={coach.to as any}
                      className="font-display text-xs font-bold uppercase tracking-wider text-neon hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Learn More</span>
                      <span>→</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="rounded-full bg-neon/10 hover:bg-neon hover:text-white px-3.5 py-1.5 text-xs font-semibold text-neon transition-colors"
                    >
                      Book Trial
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Coaching Pillars & Philosophy Section */}
      <Section className="bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <span className="eyebrow">Our Methodology</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            Coaching Principles That Drive Real Results
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            We reject the one-size-fits-all model. Every athlete at Sports Life receives structured technical correction, tactical guidance, and positive mentorship.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coachingPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card-elevated h-full p-6 border border-border bg-surface flex flex-col justify-between hover:border-neon/40 transition-colors">
                <div>
                  <div className={`size-12 rounded-2xl flex items-center justify-center mb-4 ${p.color}`}>
                    <p.icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Other Coaching Team (Grid of 18 Specialist Coaches) */}
      {otherCoaches.length > 0 && (
        <Section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow">On-Court Faculty</span>
              <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Our Coaching Team</h3>
              <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-2xl">
                Our team of dedicated on-court coaches work tirelessly across all 3 Delhi centres to refine player fundamentals, rally intensity, and court footwork.
              </p>
            </div>
            <div className="rounded-full bg-surface-2 border border-border px-4 py-1.5 text-xs font-bold text-foreground">
              {otherCoaches.length} Dedicated On-Court Coaches
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {otherCoaches.map((coach, i) => (
              <Reveal key={coach.name} delay={i * 0.02}>
                <article className="card-elevated group overflow-hidden rounded-2xl border border-border/80 bg-surface p-4 text-center shadow-xs transition-all hover:border-neon/50 hover:shadow-lg">
                  <div className="relative mx-auto size-20 sm:size-24 overflow-hidden rounded-full border-2 border-border/90 bg-surface-2 flex items-center justify-center p-1 group-hover:border-neon transition-colors">
                    {coach.image ? (
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="size-full object-contain object-center rounded-full"
                      />
                    ) : (
                      <div className="grid size-full place-items-center bg-[image:var(--gradient-electric)] text-xl font-black text-primary-foreground rounded-full">
                        {coach.initials}
                      </div>
                    )}
                  </div>
                  <h4 className="mt-3.5 text-base font-bold text-foreground group-hover:text-neon transition-colors">
                    {coach.name}
                  </h4>
                  <p className="mt-0.5 text-[11px] font-semibold text-muted-foreground">
                    Tennis Coach
                  </p>
                  <p className="mt-2 text-[10px] text-neon font-bold uppercase tracking-wider">
                    {coach.experience}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Why Choose Sports Life Mentors */}
      <Section className="bg-surface/30">
        <div className="rounded-3xl border border-border/80 bg-surface p-8 sm:p-12 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="eyebrow">Commitment to Parents & Players</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                How Our Coaches Track Every Player's Progression
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether your child is 5 years old in our Toddler batch or a competitive teenager targeting AITA tournament rankings, our coaching methodology ensures accountability and measurable improvement.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                {[
                  "Low coach-to-student ratios for direct attention",
                  "Weekly Sunday Match Play video & tactical reviews",
                  "Structured term-wise player assessment reports",
                  "Delhi University sports quota trial mentoring",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                    <CheckCircle2 className="size-4.5 shrink-0 text-neon mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-2/60 border border-border text-center">
              <div className="size-14 rounded-2xl bg-neon/15 text-neon flex items-center justify-center mb-4">
                <Users className="size-7" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Meet Your Coach in Person</h4>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed">
                Book a 1-on-1 skill assessment and get personalized guidance on batch selection and court location.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-emerald-600 transition-colors"
              >
                <span>Book Free Assessment</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom Conversion Banner */}
      <CtaBanner
        title="Train with Delhi's Premier Tennis Coaches"
        body="Experience our player-first coaching philosophy. Book a free 90-minute trial session and skills assessment today across Roshanara Club, Major Dhyan Chand Complex & Punjabi Bagh Club."
      />
    </>
  );
}

export default TeamPage;
