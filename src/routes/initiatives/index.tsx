import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  BookOpen,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Home,
  Sparkles,
  Trophy,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";
const matchPlayImage = "/centre-gallery/img_8064.jpg";
const globalLearningImage = "/founder-gallery/abhiney-with-jofre-porta.jpg";

export const Route = createFileRoute("/initiatives/")({
  head: () => ({
    meta: [
      { title: "Sports Life Initiatives — Beyond Court Tennis Programs" },
      {
        name: "description",
        content:
          "Explore Sports Life initiatives: Sunday Match Play and Global Learning Initiatives (Learning Beyond the Court).",
      },
      { property: "og:title", content: "Sports Life Initiatives" },
      {
        property: "og:description",
        content:
          "Sunday Match Play and Global Learning masterclasses connecting players directly with high-level mentors.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/initiatives" },
    ],
    links: [{ rel: "canonical", href: "/initiatives" }],
  }),
  component: InitiativesPage,
});

const ACTIVE_INITIATIVES = [
  {
    title: "Sunday Match Play",
    tag: "Active Program",
    badgeColor: "text-neon bg-neon/10 border-neon/30",
    desc: "Practice builds technique; matches build competitors. Weekly tournament match play giving players regular competitive match exposure, tactical coach debriefs, and tournament composure.",
    highlights: [
      "Simulated tournament environment",
      "Multiple competitive matches per session",
      "Supervisor coaches providing real-time debriefs",
      "Held across our premier Delhi centres",
    ],
    link: "/initiatives/sunday-match-play",
    linkText: "Explore Sunday Match Play",
    icon: Trophy,
    image: matchPlayImage,
    imagePos: "object-center",
  },
  {
    title: "Global Learning Initiatives",
    tag: "Active Series",
    badgeColor: "text-electric bg-electric/10 border-electric/30",
    desc: "Learning Beyond the Court: Direct access to experienced professionals including international coach Jofre Porta and accomplished Indian pro Vishnu Vardhan.",
    highlights: [
      "Direct online sessions with international coaches",
      "Insights from tour professionals on high-level competition",
      "Expanding player perspective beyond daily court drills",
      "Interactive Q&As for athletes and parents",
    ],
    link: "/initiatives/global-learning",
    linkText: "View Global Learning",
    icon: Globe2,
    image: globalLearningImage,
    imagePos: "object-center",
  },
];

const UPCOMING_INITIATIVES = [
  {
    title: "Delhi University Internship Program",
    status: "Coming Soon",
    desc: "A structured coaching internship pathway for university athletes seeking hands-on mentoring, on-court experience, and careers in sports management.",
    icon: BookOpen,
  },
  {
    title: "Your Tennis Home in Delhi",
    status: "Coming Soon",
    desc: "Comprehensive tournament support for travelling national and international players competing in Delhi, offering court access, hitting partners, and logistics.",
    icon: Home,
  },
  {
    title: "DU Sports Quota Guidance",
    status: "Coming Soon",
    desc: "Dedicated trial preparation, certificate verification guidance, and tactical advice for student-athletes seeking Delhi University sports admissions.",
    icon: GraduationCap,
  },
];

function InitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports Life Initiatives"
        title="Pathways Beyond Traditional Coaching"
        body="We actively create opportunities for our players to compete regularly, learn from international professionals, and broaden their perspective on tennis."
        image={heroImage}
      />

      {/* Active Initiatives */}
      <Section>
        <SectionHeading
          eyebrow="Current Initiatives"
          title="Active Player Initiatives"
          body="Currently featuring our signature Sunday Match Play program and Global Learning Initiatives."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {ACTIVE_INITIATIVES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="card-elevated group flex flex-col justify-between h-full overflow-hidden border border-border bg-surface rounded-3xl shadow-lg hover:border-neon/50 transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className={`size-full object-cover ${item.imagePos} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-neon">
                    {item.tag}
                  </span>
                  <h3 className="absolute bottom-3 left-4 right-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="p-7 flex flex-col justify-between grow">
                  <div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
                    <div className="mt-5 space-y-2 border-t border-border pt-4">
                      {item.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-foreground/85">
                          <CheckCircle2 className="size-3.5 text-neon shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      to={item.link as any}
                      className="font-display text-xs font-bold uppercase tracking-wider text-neon hover:underline inline-flex items-center gap-1"
                    >
                      <span>{item.linkText}</span>
                      <span>→</span>
                    </Link>
                    <div className="rounded-full p-2.5 bg-neon/10 text-neon">
                      <item.icon className="size-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Coming Soon Initiatives */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="In Development"
          title="Upcoming Initiatives"
          body="Programs and platforms currently being built for future phases of Sports Life."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {UPCOMING_INITIATIVES.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="card-elevated p-6 sm:p-7 border border-border/80 bg-surface rounded-2xl flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-neon/10 text-neon">
                      <item.icon className="size-5" />
                    </div>
                    <span className="rounded-full bg-surface-2 border border-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-border/60 text-xs font-semibold text-muted-foreground">
                  Stay tuned for updates
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Get Involved with Sports Life"
        body="Whether you want to participate in Sunday Match Play or join our next learning masterclass, reach out today."
      />
    </>
  );
}
