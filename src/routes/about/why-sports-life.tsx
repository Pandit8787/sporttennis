import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import {
  Award,
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const coachingImage = "/founder-gallery/abhiney-at-jofre-porta-academy-1.jpg";
const playerDevelopmentImage = "/centre-gallery/whatsapp-20260813-171844-3.jpg";
const matchPlayImage = "/centre-gallery/whatsapp-20260813-171744-2.jpg";
const facilitiesImage = "/centre-gallery/punjabi-bagh-club-gallery-1.jpg";
const communityImage = "/centre-gallery/whatsapp-20260813-171844-2.jpg";

export const Route = createFileRoute("/about/why-sports-life")({
  head: () => ({
    meta: [
      { title: "Why Sports Life | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Discover what sets Sports Life Tennis Academy apart—expert international coaching, 25 courts across 3 Delhi centres, player-first pathways, and Sunday match play.",
      },
      { property: "og:title", content: "Why Sports Life — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "What makes Sports Life different: international standards, personalized development, multi-surface courts, and a supportive community.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about/why-sports-life" },
    ],
    links: [{ rel: "canonical", href: "/about/why-sports-life" }],
  }),
  component: WhySportsLifePage,
});

function WhySportsLifePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Why Sports Life"
        title="What Makes Us Different"
        body="Discover why players and parents across Delhi trust Sports Life Tennis Academy for long-term athletic and character development."
        image={heroImage}
      />

      {/* Introduction */}
      <Section>
        <SectionHeading
          eyebrow="The Sports Life Advantage"
          title="Designed Around the Athlete"
          body="In Delhi, there are many places to hit tennis balls. But Sports Life is built as a complete development ecosystem where every player is guided with intention, care, and international standards."
        />

        <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/85 lg:text-lg">
          <p>
            Choosing the right tennis academy is one of the most important decisions in a player's
            journey. At Sports Life Tennis Academy, we believe that success is built through the
            right guidance, structured development, and an environment where players are inspired to
            learn, compete, and grow every single day.
          </p>
        </div>
      </Section>

      {/* Feature 1: Expert Coaching */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={coachingImage}
              alt="Expert tennis coaching team"
              className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon uppercase tracking-wider">
              <GraduationCap className="size-3.5" />
              Advantage 01
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">Expert, Certified Coaching Team</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our coaching team isn't just experienced—they bring international certifications,
              European training philosophies, and years of national-level competitive play to every
              court session.
            </p>
            <div className="rounded-2xl border border-border bg-surface p-4 space-y-2">
              {[
                "International coaching certifications and Spanish academy experience",
                "NIS, PTR, and AITA-ITF accredited coaches",
                "Proven track record of developing top state and national junior players",
                "Continuous professional coach education in modern biomechanics",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="size-4 shrink-0 text-neon mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Feature 2: Player-Centered Development */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-electric/15 px-3 py-1 text-xs font-bold text-electric uppercase tracking-wider">
              <Compass className="size-3.5" />
              Advantage 02
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">Player-Centered Development</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We never use a rigid, one-size-fits-all formula. Every player receives an individualized
              coaching roadmap tailored to their physical maturation, style of play, learning pace,
              and aspirations.
            </p>
            <div className="space-y-2.5 pt-2">
              {[
                "Customized training plans based on individual player goals",
                "Focus on long-term athletic durability and biomechanical efficiency",
                "Periodic skill evaluations and honest, structured parent feedback",
                "Mental resilience and point-construction strategies",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="size-4 shrink-0 text-electric mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg order-1 lg:order-2">
            <img
              src={playerDevelopmentImage}
              alt="Player-centered development session"
              className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </Section>

      {/* Feature 3: Regular Match Play */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={matchPlayImage}
              alt="Sunday match play sessions"
              className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon uppercase tracking-wider">
              <Trophy className="size-3.5" />
              Advantage 03
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">Weekly Sunday Match Play</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Practice alone doesn't build tournament grit. Our signature Sunday Match Play initiative
              provides structured competitive exposure under actual match conditions with umpire
              protocols, ranking tracking, and coach analysis.
            </p>
            <div className="rounded-2xl border border-border bg-surface p-4 space-y-2">
              {[
                "Weekly competitive match play across all age groups and skill brackets",
                "Simulated pressure scenarios to sharpen decision-making",
                "Pre-match mental prep and post-match tactical review",
                "Clear benchmarking of progress against peers across Delhi",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="size-4 shrink-0 text-neon mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Feature 4: 25 Multi-Surface Courts Across Delhi */}
      <Section>
        <SectionHeading
          eyebrow="Advantage 04"
          title="Facilities Across 3 Delhi Centres"
          body="Access to 25 courts with synthetic, clay, and grass surfaces for comprehensive athletic development."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card-elevated p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
              <MapPin className="size-5" />
            </div>
            <h4 className="font-bold text-lg text-foreground">Roshanara Club</h4>
            <p className="text-xs font-semibold text-neon mt-1">North Delhi · Flagship</p>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              4 Synthetic Courts · 2 Clay Courts · 3 Grass Courts (9 Total). Historic heritage venue offering all 3 major tennis surfaces.
            </p>
          </div>

          <div className="card-elevated p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-electric/15 text-electric mb-4">
              <MapPin className="size-5" />
            </div>
            <h4 className="font-bold text-lg text-foreground">Major Dhyan Chand Complex</h4>
            <p className="text-xs font-semibold text-electric mt-1">Ashok Vihar · North-West Delhi</p>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              4 Synthetic Courts · 2 Clay Courts (6 Total). Dedicated player development hub with structured coaching.
            </p>
          </div>

          <div className="card-elevated p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
              <MapPin className="size-5" />
            </div>
            <h4 className="font-bold text-lg text-foreground">Punjabi Bagh Club</h4>
            <p className="text-xs font-semibold text-neon mt-1">West Delhi · Ring Road</p>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              6 Clay Courts · 4 Synthetic Courts (10 Total). Premier sports club infrastructure with thriving adult and junior programs.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-lg">
          <img
            src={facilitiesImage}
            alt="Sports Life tennis facilities in Delhi"
            className="h-72 w-full object-cover"
          />
        </div>
      </Section>

      {/* Feature 5: A Supportive Community */}
      <Section className="bg-surface/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3 py-1 text-xs font-bold text-neon uppercase tracking-wider">
              <Users className="size-3.5" />
              Advantage 05
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">A Welcoming, Inspiring Community</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Tennis shouldn't feel isolating. At Sports Life, players build lifelong friendships,
              train with motivated peers, and receive encouragement from coaches and families who
              share a passion for sportsmanship.
            </p>
            <div className="rounded-2xl border border-border bg-surface p-5 space-y-2.5">
              <p className="font-semibold text-sm text-foreground">At Sports Life, every family gets:</p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-neon font-bold">✓</span>
                  <span>Coaches who personally know and care for each athlete</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon font-bold">✓</span>
                  <span>Regular communication, progress trackers, and milestone celebrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon font-bold">✓</span>
                  <span>Delhi University sports quota guidance and academic pathway support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon font-bold">✓</span>
                  <span>An uplifting environment where players feel they belong</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={communityImage}
              alt="Tennis community at Sports Life"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Results & Stats */}
      <Section>
        <SectionHeading
          eyebrow="Our Impact"
          title="The Results Speak for Themselves"
          body="Real numbers reflecting our dedication to Delhi's tennis community."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={3} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Flagship Centres</p>
            <p className="text-xs text-muted-foreground mt-1">Across North, West & Central Delhi</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={25} suffix="" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Tennis Courts</p>
            <p className="text-xs text-muted-foreground mt-1">12 Synthetic · 10 Clay · 3 Grass</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={16} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Years Founder Experience</p>
            <p className="text-xs text-muted-foreground mt-1">International coaching in Spain</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon sm:text-5xl">
              <Counter value={100} suffix="%" />
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">Player-First Philosophy</p>
            <p className="text-xs text-muted-foreground mt-1">Nurturing complete athletes</p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Players & Parents Say"
          body="Feedback from families who have experienced the Sports Life difference."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              quote:
                "Sports Life transformed my child's approach to tennis. The technical coaching is professional, the atmosphere is disciplined, and the coaches genuinely care about every kid's development.",
              name: "Parent of 12-year-old Junior Player",
              location: "Roshanara Club Centre",
            },
            {
              quote:
                "I've trained at multiple tennis academies in Delhi, but the structured match play and video analysis at Sports Life are unmatched. My tactical awareness has improved tremendously.",
              name: "Competitive Junior Player (Age 15)",
              location: "Major Dhyan Chand Centre",
            },
            {
              quote:
                "The multi-surface exposure—switching between clay, synthetic, and grass—has made my son far more adaptable and confident in tournament pressure situations.",
              name: "Parent of 14-year-old State Player",
              location: "Roshanara & Punjabi Bagh Centres",
            },
            {
              quote:
                "Joining the adult program at Sports Life was the best fitness and recreational decision I've made. Great drills, high energy, and wonderful community of players.",
              name: "Adult Program Player",
              location: "Punjabi Bagh Club Centre",
            },
          ].map((item, i) => (
            <div key={i} className="card-elevated p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <Quote className="size-8 text-neon/30 mb-4" />
                <p className="text-sm sm:text-base leading-relaxed text-foreground/90 italic">
                  “{item.quote}”
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-bold text-sm text-foreground">{item.name}</p>
                <p className="text-xs text-neon mt-0.5">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Ready to Experience Sports Life?"
        body="Join hundreds of players who are growing, competing, and achieving their dreams at Sports Life Tennis Academy. Book your free trial today."
      />
    </>
  );
}
