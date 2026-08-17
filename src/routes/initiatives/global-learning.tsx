import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Compass,
  Globe2,
  GraduationCap,
  Lightbulb,
  MapPin,
  MessageSquare,
  Sparkles,
  Trophy,
  Users,
  Video,
  Zap,
} from "lucide-react";

const heroImage = "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg";

export const Route = createFileRoute("/initiatives/global-learning")({
  head: () => ({
    meta: [
      { title: "Global Learning Initiatives | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Connect with international tennis academies, European coaching philosophies in Spain, and interactive masterclasses with world-class mentors through Sports Life.",
      },
      { property: "og:title", content: "Global Learning Initiatives — Sports Life" },
      {
        property: "og:description",
        content:
          "Broadening player perspectives with international coach webinars, Spanish training systems, and masterclasses.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/initiatives/global-learning" },
    ],
    links: [{ rel: "canonical", href: "/initiatives/global-learning" }],
  }),
  component: GlobalLearning,
});

const GLOBAL_GALLERY = [
  {
    src: "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg",
    title: "Rafa Nadal Tennis Academy",
    location: "Manacor, Mallorca, Spain",
    desc: "Studying high-performance Spanish clay court movement, endurance drills, and physical conditioning methods.",
    badge: "Spanish Academy",
    pos: "object-[center_20%]",
  },
  {
    src: "/founder-gallery/abhiney-with-jofre-porta.jpg",
    title: "Mentorship with Jofre Porta",
    location: "Global Tennis Team, Spain",
    desc: "Collaborating with legendary international coach Jofre Porta, mentor to former World No. 1 players.",
    badge: "Masterclass Mentor",
    pos: "object-[center_15%]",
  },
  {
    src: "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg",
    title: "JC Ferrero Equelite Tennis Academy",
    location: "Villena, Spain",
    desc: "Exploring modern European player development pathways, biomechanics, and technical stroke production.",
    badge: "Elite Academy",
    pos: "object-center",
  },
  {
    src: "/founder-gallery/abhiney-with-karen-khachanov.jpg",
    title: "Interaction with Karen Khachanov",
    location: "ATP Tour Pro",
    desc: "Gaining insights from former ATP World No. 8 and Olympic Silver Medalist on mental resilience and pro tour demands.",
    badge: "ATP Pro Insights",
    pos: "object-[center_15%]",
  },
  {
    src: "/founder-gallery/abhiney-at-global-agent-tennis-acadmey-madrid.jpg",
    title: "Global Agent Tennis Academy",
    location: "Madrid, Spain",
    desc: "Studying modern tactical court positioning and aggressive baseline strategies utilized by European junior competitors.",
    badge: "Madrid Training",
    pos: "object-[center_20%]",
  },
  {
    src: "/founder-gallery/abhiney-at-barcelona-tennis-acadmey.jpg",
    title: "Barcelona Tennis Academy",
    location: "Barcelona, Spain",
    desc: "Observing youth development frameworks, structured progression systems, and holistic athletic nutrition.",
    badge: "Barcelona Experience",
    pos: "object-[center_25%]",
  },
  {
    src: "/founder-gallery/abhiney-at-madrid-open.jpg",
    title: "Mutua Madrid Open Insights",
    location: "Madrid, Spain",
    desc: "Analyzing top ATP/WTA match play patterns, return positioning, and tactical decision-making at Masters 1000 level.",
    badge: "Tour Analysis",
    pos: "object-[center_25%]",
  },
  {
    src: "/founder-gallery/abhiney-at-jofre-porta-academy-1.jpg",
    title: "On-Court Drills with Jofre Porta",
    location: "Mallorca, Spain",
    desc: "Practical execution of high-intensity decision-making drills designed to build tactical intelligence under pressure.",
    badge: "Tactical Drills",
    pos: "object-[center_20%]",
  },
  {
    src: "/founder-gallery/abhiney-at-jc-ferrero-1.jpg",
    title: "Technical Analysis Session",
    location: "Equelite Academy, Spain",
    desc: "Deep-dive video feedback methods and biomechanical correction protocols for serve and forehand acceleration.",
    badge: "Video Analytics",
    pos: "object-[center_25%]",
  },
];

function GlobalLearning() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="International Exposure"
        title="Global Learning Initiatives"
        body="Connecting Indian tennis players and coaches with international academies, European training philosophies, and world-class masterclasses."
        image={heroImage}
      />

      {/* Program Mission */}
      <Section>
        <SectionHeading
          eyebrow="Broadening Horizons"
          title="World-Class Tennis Perspectives for Indian Athletes"
          body="Tennis is a global sport. To compete at the highest level, athletes and coaches must understand how the world's best players are developed."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-elevated p-6 text-center">
            <div className="flex size-11 mx-auto items-center justify-center rounded-xl bg-neon/15 text-neon mb-3">
              <Globe2 className="size-5" />
            </div>
            <h4 className="font-bold text-base text-foreground">European Methodologies</h4>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              Grounded in the proven Spanish training models that built world champions.
            </p>
          </div>

          <div className="card-elevated p-6 text-center">
            <div className="flex size-11 mx-auto items-center justify-center rounded-xl bg-electric/15 text-electric mb-3">
              <Video className="size-5" />
            </div>
            <h4 className="font-bold text-base text-foreground">Interactive Masterclasses</h4>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              Live webinars and Q&As with international coaches and Indian professionals.
            </p>
          </div>

          <div className="card-elevated p-6 text-center">
            <div className="flex size-11 mx-auto items-center justify-center rounded-xl bg-neon/15 text-neon mb-3">
              <Lightbulb className="size-5" />
            </div>
            <h4 className="font-bold text-base text-foreground">Tactical IQ & Biomechanics</h4>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              Modern kinematic stroke mechanics, court geometry, and high-percentage patterns.
            </p>
          </div>

          <div className="card-elevated p-6 text-center">
            <div className="flex size-11 mx-auto items-center justify-center rounded-xl bg-electric/15 text-electric mb-3">
              <Compass className="size-5" />
            </div>
            <h4 className="font-bold text-base text-foreground">Pro Pathway Guidance</h4>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              Navigating AITA, ITF Juniors, and international scholarship pathways.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured International Mentors & Academies */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Key Mentors"
          title="Global Academies & Collaborations"
          body="Insights distilled from leading training centres across Spain and ATP tour circles."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="card-elevated p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neon">Mallorca, Spain</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">Jofre Porta Mentorship</h3>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Jofre Porta is one of the most respected figures in modern tennis coaching. Having
                mentored Grand Slam champions and World No. 1 players, his philosophy on developing
                tactical intelligence and mental toughness is integrated into Sports Life training.
              </p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-neon">
              ★ Guest Speaker & Masterclass Mentor
            </div>
          </div>

          <div className="card-elevated p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-electric">Villena, Spain</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">JC Ferrero Equelite Academy</h3>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Home to world number ones, this academy's technical discipline, physical training
                intensity, and video analysis protocols provide the benchmark for our high-performance
                development batches in Delhi.
              </p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-electric">
              ★ Modern Stroke Mechanics & S&C Models
            </div>
          </div>

          <div className="card-elevated p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neon">Manacor, Spain</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">Rafa Nadal Academy Insights</h3>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Studying the relentless intensity, clay-court movement dynamics, and positive
                character-building rituals that define Spanish tennis excellence.
              </p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-neon">
              ★ Clay Court Dominance & Resilience
            </div>
          </div>
        </div>
      </Section>

      {/* Global Learning Photo Gallery */}
      <Section>
        <SectionHeading
          eyebrow="Visual Journey"
          title="International Visits & Learning Gallery"
          body="Real moments from international coaching visits, masterclasses, and player interactions."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GLOBAL_GALLERY.map((item, idx) => (
            <Reveal key={item.title + idx} delay={(idx % 3) * 0.08}>
              <div className="card-elevated overflow-hidden flex flex-col justify-between h-full">
                <div>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className={`h-56 w-full object-cover ${(item as { pos?: string }).pos ?? "object-center"} transition-transform duration-500 hover:scale-105`}
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-background/90 backdrop-blur-xs border border-border px-2.5 py-0.5 text-[11px] font-bold text-neon">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-semibold text-muted-foreground">{item.location}</p>
                    <h4 className="mt-1 font-bold text-base text-foreground">{item.title}</h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Upcoming Masterclass Topics */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Curriculum"
          title="Masterclass Topics Covered"
          body="Structured themes designed to expand athletic understanding for players, parents, and coaches."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Mental Resilience in Tiebreaks",
              desc: "Techniques for managing heart rate, breath control, and focusing on high-percentage patterns.",
            },
            {
              title: "Kinetic Chain on Serve & Forehand",
              desc: "Maximizing effortless power through ground reaction force, hip-shoulder separation, and wrist lag.",
            },
            {
              title: "Clay vs. Synthetic Movement",
              desc: "Mastering the controlled slide, recovery footwork, and adjusting ball height perception across surfaces.",
            },
            {
              title: "Junior Tournament Scheduling",
              desc: "How to avoid burnout and plan tournament cycles for peak performance and ranking progression.",
            },
            {
              title: "Nutrition & Match-Day Fuelling",
              desc: "Pre-match meals, mid-match electrolyte hydration, and recovery protocols for multi-match weekends.",
            },
            {
              title: "US College & DU Sports Quota Pathways",
              desc: "Building a competitive athletic resume and video highlight reel for university admissions.",
            },
          ].map((topic, i) => (
            <div key={i} className="card-elevated p-5">
              <span className="text-xs font-bold text-neon">Module 0{i + 1}</span>
              <h4 className="mt-2 font-bold text-base text-foreground">{topic.title}</h4>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Register for the Next Global Masterclass"
        body="Join our upcoming online session. Learn directly from international experts and submit your questions live."
      />
    </>
  );
}
