import { Link, createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { COACHES } from "@/lib/site-data";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Award,
  CheckCircle2,
  Flame,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Medal,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — Certified Coaching Faculty | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Meet the coaching team at Sports Life Tennis Academy: 26+ coaches, international experience in Spain, NIS/PTR/AITA-ITF certifications across Delhi.",
      },
      { property: "og:title", content: "Meet Our Team — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "26+ Coaches dedicated to structured player-first athlete development across 25 courts in Delhi.",
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
      badge: "Founder & Head Coach",
      badgeColor: "bg-neon/15 text-neon border-neon/30",
      experience: "20+ Years Experience · Spain Exposure",
      tags: ["Diploma JC Ferrero (Spain)", "NIS & PTR Certified", "Khelo India SAI Protocol"],
      bio: "International Tennis Coach and founder of Sports Life Tennis Academy. With 20+ years in competitive tennis and coaching stints across elite academies in Spain (Jofre Porta, Ferrero Academy), he drives structured systems for Indian tennis.",
    },
    {
      name: "Rahul Singh",
      role: "Head Coach",
      tagline: "Developing Champions Through Discipline & Experience",
      to: "/team/rahul-singh" as const,
      image: "/rahul-singh.jpg",
      initials: "RS",
      badge: "Head Coach",
      badgeColor: "bg-electric/15 text-electric border-electric/30",
      experience: "12+ Years Competitive & Coaching",
      tags: ["Former AITA Top 35", "Mentored AIR 8 & AIR 13", "Tournament Strategy"],
      bio: "Former AITA Men's Top 35 player and high-performance coach. Specialized in technical stroke correction, tactical match planning, and mentoring junior athletes to top national rankings.",
    },
    {
      name: "Mukul Singh",
      role: "Head Coach",
      tagline: "High-Performance Excellence & Modern Biomechanics",
      to: "/team/mukul-singh" as const,
      image: "/mukul-singh.jpg",
      initials: "MS",
      badge: "Head Coach",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      experience: "National & DU Champion · Elite Coach",
      tags: ["5x AITA National Winner", "Top-20 Player Mentor", "Agility Specialist"],
      bio: "Accomplished national player and coach with 5 AITA titles. Known for energetic, disciplined training, biomechanical precision, and helping athletes develop composure under competitive pressure.",
    },
    {
      name: "Samriti Punyani",
      role: "Head Coach",
      tagline: "Empowering Athletes Through Science & Education",
      to: "/team/samriti-punyani" as const,
      image: "/samriti-punyani.jpg",
      initials: "SP",
      badge: "Head Coach",
      badgeColor: "bg-pink-500/15 text-pink-400 border-pink-500/30",
      experience: "14+ Years Competitive & Sports Education",
      tags: ["NIS Qualified · M.P.Ed.", "All India Inter-Uni Gold", "LTAD Framework"],
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
      desc: "Training plans tailored to individual growth stages, biomechanics, and long-term athletic goals.",
      color: "text-emerald-400 bg-emerald-500/15",
    },
    {
      icon: GraduationCap,
      title: "Structured Athlete Pathways",
      desc: "Structured fitness, footwork conditioning, sports quota guidance, and European training methodologies.",
      color: "text-amber-400 bg-amber-500/15",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[450px] md:min-h-[550px] lg:min-h-[650px] flex flex-col justify-end pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border/80">
        <div className="absolute inset-0 z-0">
          <img src="/team-bg-1.webp" alt="Coaching Team Background" className="w-full h-full object-cover object-[center_30%]" />
        </div>
        <div className="grid-lines absolute inset-0 opacity-10 pointer-events-none z-0" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 mt-auto">
          <div className="mx-auto max-w-4xl text-center">

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
                  <p className="font-display text-2xl sm:text-3xl font-black text-electric">26+</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                    Coaches
                  </p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl sm:text-3xl font-black text-foreground">25</p>
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
          </div>
        </div>
      </div>

      {/* Leadership Team (4 Head Coach Cards) */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Leadership Mentors"
            title="Meet Our Leadership Team"
            body="Experienced coaching leadership with national playing credentials, European exposure in Spain, and proven player development methods."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {leadershipTeam.map((coach, index) => (
            <Reveal key={coach.name} delay={index * 0.08}>
              <article className="card-elevated group flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-surface shadow-md hover:border-neon/50 transition-all duration-500">
                <div>
                  {/* Photo Frame */}
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

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  <div className="border-t border-border/70 pt-4 flex items-center justify-between">
                    <Link
                      to={coach.to as any}
                      className="font-display text-xs font-bold uppercase tracking-wider text-neon hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Profile Details</span>
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

      {/* Coaching Pillars & Methodology */}
      <Section className="bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <span className="eyebrow">Our Methodology</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            Coaching Principles That Drive Real Results
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Every athlete at Sports Life receives structured technical correction, tactical guidance, and positive mentorship.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coachingPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card-elevated h-full p-6 border border-border bg-surface flex flex-col justify-between hover:border-neon/40 transition-colors rounded-2xl">
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

      {/* Coaching Team Grid (All Coaches) */}
      {otherCoaches.length > 0 && (
        <Section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

            <div className="rounded-full bg-surface-2 border border-border px-4 py-1.5 text-xs font-bold text-foreground">
              26+ Dedicated Coaches
            </div>
          </div>

          <div className="grid gap-5 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {otherCoaches.map((coach, i) => (
              <Reveal key={coach.name} delay={i * 0.02}>
                <article className="card-elevated group h-full overflow-hidden rounded-2xl border border-border/80 bg-surface flex flex-col shadow-xs transition-all hover:border-neon/50 hover:shadow-lg">
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-surface-2/70 flex items-center justify-center p-2 group-hover:bg-surface-2 transition-colors">
                    {coach.image ? (
                      <img
                        src={coach.image}
                        alt={coach.name}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid size-full place-items-center bg-[image:var(--gradient-electric)] text-3xl font-black text-primary-foreground">
                        {coach.initials}
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-5 text-center grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-neon transition-colors">
                        {coach.name}
                      </h4>
                      <p className="mt-1 text-[11px] font-semibold text-neon">{coach.role}</p>

                    </div>
                    <div className="mt-3 pt-3 border-t border-border/60 text-[11px] font-medium text-foreground/80">
                      {coach.cert}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Bottom CTA Banner */}
      
    </>
  );
}

export default TeamPage;
