import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Compass,
  ExternalLink,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Home,
  MapPin,
  Plane,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";
const matchPlayImage = "/centre-gallery/whatsapp-20260813-171744-2.jpg";
const globalLearningImage = "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg";
const courtsHomeImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";

export const Route = createFileRoute("/initiatives/")({
  head: () => ({
    meta: [
      { title: "Sports Life Initiatives — Beyond Court Tennis Programs" },
      {
        name: "description",
        content:
          "Explore Sports Life initiatives: Sunday Match Play, Global Learning masterclasses, Delhi University internships, DU sports quota guidance, and visiting player tournament support in Delhi.",
      },
      { property: "og:title", content: "Sports Life Initiatives" },
      {
        property: "og:description",
        content:
          "Holistic tennis programs, internships, and competitive platforms empowering athletes across Delhi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/initiatives" },
    ],
    links: [{ rel: "canonical", href: "/initiatives" }],
  }),
  component: InitiativesPage,
});

const INITIATIVES_DATA = [
  {
    title: "Sunday Match Play",
    tag: "Flagship Initiative",
    status: "Active Weekly",
    badgeColor: "text-neon bg-neon/10 border-neon/30",
    desc: "Practice builds technique; matches build competitors. Weekly structured match play grouped by age and rating to build tournament composure, tactical shot selection, and mental grit.",
    highlights: [
      "Level-based grouping across all skill brackets",
      "Multiple short-format matches per session",
      "Supervisor coaches providing real-time feedback",
      "Held across 3 premier Delhi centres",
    ],
    link: "/initiatives/sunday-match-play",
    linkText: "Explore Sunday Match Play",
    icon: Trophy,
    image: matchPlayImage,
    imagePos: "object-center",
  },
  {
    title: "Global Learning Initiatives",
    tag: "International Masterclasses",
    status: "Active Series",
    badgeColor: "text-electric bg-electric/10 border-electric/30",
    desc: "Exclusive interactive sessions and webinars connecting Indian players and coaches with internationally renowned mentors like Jofre Porta and European academy experts from Spain.",
    highlights: [
      "Modern European training methodologies",
      "Tactical biomechanics & mental resilience",
      "Interactions with ATP/ITF tour professionals",
      "Q&A sessions for parents, players, and coaches",
    ],
    link: "/initiatives/global-learning",
    linkText: "View Global Masterclasses",
    icon: Globe2,
    image: globalLearningImage,
    imagePos: "object-[center_20%]",
  },
  {
    title: "Your Tennis Home in Delhi",
    tag: "Tournament Support",
    status: "Year-Round Service",
    badgeColor: "text-amber-500 bg-amber-500/10 border-amber-500/30",
    desc: "A complete support ecosystem for travelling players competing in AITA, ITF, and national tournaments in Delhi. Providing practice courts across 3 surfaces, certified hitting partners, and scheduling.",
    highlights: [
      "Access to 14 synthetic, 10 clay, and 3 grass courts",
      "High-level hitting partners matched to player ranking",
      "Practice sessions tailored around tournament draws",
      "Private coaching and tactical debriefs",
    ],
    link: "/contact",
    linkText: "Request Visiting Player Support",
    icon: Home,
    image: courtsHomeImage,
  },
  {
    title: "Delhi University Sports Quota Guidance",
    tag: "Academic & Career Pathway",
    status: "Admissions Season",
    badgeColor: "text-neon bg-neon/10 border-neon/30",
    desc: "Comprehensive mentorship for aspiring student-athletes and parents navigating the competitive Delhi University sports quota admissions process.",
    highlights: [
      "Certificate verification & trial preparation",
      "Strategic tournament calendar planning for ranking points",
      "Balancing high-performance tennis with board exams",
      "College-specific trial fitness and skill benchmarks",
    ],
    link: "/contact",
    linkText: "Book DU Quota Consultation",
    icon: GraduationCap,
  },
  {
    title: "Sports Life DU Coaching Internship",
    tag: "Career Development",
    status: "Seasonal Batches",
    badgeColor: "text-electric bg-electric/10 border-electric/30",
    desc: "Paid coaching internship empowering Delhi University sports-quota students to gain professional coaching experience, head coach mentorship, and a monthly stipend (₹8,000–₹15,000).",
    highlights: [
      "Hands-on assistant coaching under certified Head Coaches",
      "Official certificate of coaching internship",
      "Weekly assignments in match analysis & academy operations",
      "Long-term career placement pathways in sports management",
    ],
    link: "/contact",
    linkText: "Apply for Internship",
    icon: BookOpen,
  },
  {
    title: "International Player India Tour Support",
    tag: "Global Support",
    status: "On Request",
    badgeColor: "text-amber-500 bg-amber-500/10 border-amber-500/30",
    desc: "Full-service tournament preparation for international ITF and junior athletes travelling to India for Asian circuit events. Seamless court booking, transport, stringing, and sparring.",
    highlights: [
      "Priority court booking on European-spec surfaces",
      "Pro hitting partners and tactical briefing",
      "Local logistical support, transport & hotel guidance",
      "Same-day racket stringing & recovery arrangements",
    ],
    link: "/contact",
    linkText: "Enquire for Tour Support",
    icon: Plane,
  },
];

function InitiativesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Beyond The Court"
        title="Sports Life Initiatives"
        body="Pathways, competitive platforms, university internships, and global learning masterclasses designed to empower every player beyond traditional training."
        image={heroImage}
      />

      {/* Overview Intro */}
      <Section>
        <SectionHeading
          eyebrow="Holistic Impact"
          title="Building an Ecosystem, Not Just an Academy"
          body="Sports Life was created to solve the real challenges athletes face—from lack of regular match play and tournament logistics to career mentorship and international exposure."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={52} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Sunday Match Plays / Year</p>
            <p className="text-xs text-muted-foreground mt-1">Structured weekend competition</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={27} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Tournament Courts in Delhi</p>
            <p className="text-xs text-muted-foreground mt-1">Synthetic, clay, and grass</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={100} suffix="%" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Mentorship & Support</p>
            <p className="text-xs text-muted-foreground mt-1">From grassroots to university</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={6} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Key Dedicated Programs</p>
            <p className="text-xs text-muted-foreground mt-1">Covering development & careers</p>
          </div>
        </div>
      </Section>

      {/* Initiatives Grid */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Our Initiatives"
          title="Programs That Make a Difference"
          body="Click on any initiative to learn more, register, or connect with our program coordinators."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INITIATIVES_DATA.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="card-elevated flex h-full flex-col justify-between overflow-hidden p-6 sm:p-7">
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-neon/15 text-neon">
                      <item.icon className="size-5" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${item.badgeColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {item.image && (
                    <div className="mt-4 overflow-hidden rounded-xl border border-border">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`h-44 w-full object-cover ${(item as { imagePos?: string }).imagePos ?? "object-center"} transition-transform duration-500 hover:scale-105`}
                      />
                    </div>
                  )}

                  <h3 className="mt-4 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>

                  {/* Highlights List */}
                  <div className="mt-4 space-y-2 border-t border-border/70 pt-3">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/85">
                        <CheckCircle2 className="size-3.5 shrink-0 text-neon mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 border-t border-border pt-4">
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neon hover:text-foreground transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Want to Partner With Us?"
        body="Whether you are a university player, school administrator, or competitive athlete travelling to Delhi, connect with us to participate in Sports Life initiatives."
      />
    </>
  );
}
