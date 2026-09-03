import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const heroImage = "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg";
const headshotImage = "/abhiney-kumar-headshot.jpg";
const nadalImage = "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg";
const jofreImage = "/founder-gallery/abhiney-with-jofre-porta.jpg";
const ferreroImage = "/founder-gallery/abhiney-at-jc-ferrero.jpg";
const courtsImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";

export const Route = createFileRoute("/about/meet-founder")({
  head: () => ({
    meta: [
      { title: "Meet the Founder — Abhiney Kumar | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Learn about Abhiney Kumar, Founder & Head Coach of Sports Life Tennis Academy. From a childhood passion for tennis to building a player-first academy focused on long-term athlete development.",
      },
      { property: "og:title", content: "Meet the Founder — Abhiney Kumar" },
      {
        property: "og:description",
        content:
          "From a childhood passion for tennis to building a player-first academy focused on long-term athlete development.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about/meet-founder" },
    ],
    links: [{ rel: "canonical", href: "/about/meet-founder" }],
  }),
  component: MeetFounderPage,
});

function MeetFounderPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Founder & Head Coach"
        title="Abhiney Kumar"
        body="From a childhood passion for tennis to building a player-first academy focused on long-term athlete development across Delhi."
        image={heroImage}
        removeFog
      />

      {/* Profile Overview */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-border bg-surface p-3 shadow-xl">
                <img
                  src={headshotImage}
                  alt="Abhiney Kumar — Founder & Head Coach, Sports Life Tennis Academy"
                  className="aspect-4/5 w-full rounded-2xl object-cover object-top"
                />
                <div className="mt-4 rounded-xl bg-linear-to-r from-neon/15 via-electric/10 to-transparent p-4">
                  <p className="font-display text-lg font-bold text-foreground">Abhiney Kumar</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neon">
                    Founder  · Sports Life Tennis Academy
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-surface border border-border px-2.5 py-1 text-muted-foreground font-medium">
                      20+ Years Experience
                    </span>
                    <span className="rounded-full bg-surface border border-border px-2.5 py-1 text-muted-foreground font-medium">
                      Spain Coaching Exposure
                    </span>
                    <span className="rounded-full bg-surface border border-border px-2.5 py-1 text-muted-foreground font-medium">
                      NIS · PTR · AITA-ITF
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <SectionHeading
              eyebrow="Meet the Founder"
              title="Abhiney Kumar"
              body="Founder , Sports Life Tennis Academy"
            />
            <div className="space-y-4 text-base leading-relaxed text-foreground/85 lg:text-lg">
              <p className="font-medium text-foreground">
                From a childhood passion for tennis to building a player-first academy focused on
                long-term athlete development.
              </p>
              <div className="rounded-2xl border border-neon/30 bg-neon/5 p-6">
                <p className="font-serif italic text-base sm:text-lg text-foreground leading-relaxed">
                  “I believe tennis can change lives because it changed mine. My journey began
                  because a cricket academy said ‘No.’ That unexpected rejection led me to the sport
                  that would eventually become my profession, my passion, and the foundation of Sports
                  Life. Today, my purpose is simple: To make sure that every player who walks into
                  Sports Life finds the opportunity, guidance, and support they need to build their
                  own journey — regardless of where they start.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Detailed Journey Narrative */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Chapter 1: My Journey */}
          <div className="card-elevated p-8 sm:p-10 space-y-4 border border-border bg-surface">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">My Journey</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Every Journey Begins With a Single Moment
            </h3>
            <p className="text-base leading-relaxed text-foreground/85">
              For me, that moment came when I was just four or five years old. My father was a huge
              cricket fan and naturally wanted me to become a cricketer. I was excited about cricket
              too, so one day he took me to a cricket academy to enrol me. The coaches told him I was
              too young to join.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              As we were leaving, we noticed a group of players practising on the nearby tennis
              courts. My father became curious about the sport and spoke to one of the tennis
              coaches. The coach welcomed me and said I could start learning tennis immediately. That
              unexpected conversation changed my life. What began as an alternative to cricket soon
              became my greatest passion.
            </p>
          </div>

          {/* Chapter 2: 16 Years on the Court */}
          <div className="card-elevated p-8 sm:p-10 space-y-4 border border-border bg-surface">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">Competitive Era</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              16 Years On The Court
            </h3>
            <p className="text-base leading-relaxed text-foreground/85">
              Over the next 16 years, tennis became much more than a sport. It became my teacher, my
              discipline, and my way of life. I competed professionally, participated in AITA
              tournaments, represented my college in numerous competitions, and experienced the
              victories, defeats, pressure, and uncertainty that come with competitive tennis.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              Every match taught me something. Winning taught me confidence. Losing taught me
              humility. Competition taught me how to deal with pressure, setbacks, and expectations.
              These experiences later became an important part of how I understood player development.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              In 2016, I travelled to <strong>Vilas Tennis Academy</strong> in Mallorca, Spain,
              where I experienced an international tennis training environment for the first time.
              That experience opened my eyes to different approaches to player development and made me
              want to learn more.
            </p>
          </div>

          {/* Chapter 3: A Turning Point */}
          <div className="card-elevated p-8 sm:p-10 space-y-4 border border-border bg-surface">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">Resilience</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              A Turning Point
            </h3>
            <p className="text-base leading-relaxed text-foreground/85">
              In 2020, the COVID-19 pandemic changed the direction of my playing career. My family
              faced serious financial difficulties, and continuing professional tennis was no longer
              financially possible. Stepping away from the sport I loved was one of the hardest
              decisions I had to make.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              For more than two years, my focus shifted towards supporting my family and rebuilding
              our financial stability. Those years taught me resilience, responsibility, patience,
              and the importance of continuing to move forward when circumstances are difficult.
            </p>
          </div>

          {/* Chapter 4: Learning Beyond India */}
          <div className="card-elevated p-8 sm:p-10 space-y-4 border border-border bg-surface">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">Spain Stints</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Learning Beyond India
            </h3>
            <p className="text-base leading-relaxed text-foreground/85">
              In 2023, tennis gave me another opportunity. I had the opportunity to work in <strong>Jofre Porta Academy</strong> in Mallorca, Spain. Working within his coaching environment became one of the most valuable learning experiences of my career. I gained deeper exposure to player development, technical and tactical coaching, tournament planning, long-term development, and the systems required to develop players consistently over time.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              I later continued my learning journey at the <strong>J.C. Ferrero Tennis Academy</strong> in Villena, Spain.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              During my time in Spain, I also met Indian players and parents who were training and
              competing internationally. Their experiences made me realise that many challenges faced
              by Indian tennis players go far beyond coaching. Tournament planning, match exposure,
              travel, accommodation, access to quality facilities, financial constraints, and
              long-term guidance can all have a significant impact on a player's journey. Those
              conversations changed the way I looked at tennis.
            </p>
          </div>

          {/* Chapter 5: From Player to Coach */}
          <div className="card-elevated p-8 sm:p-10 space-y-4 border border-border bg-surface">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">National System</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              From Player To Coach
            </h3>
            <p className="text-base leading-relaxed text-foreground/85">
              After returning to India, I had the opportunity to work with the <strong>Sports Authority of India (SAI)</strong> under the <strong>Khelo India Talent Search and Development Program</strong>, where I contributed to the development of the induction protocol for tennis players entering the Khelo India Scheme.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              This experience gave me a broader perspective on player development and strengthened a
              belief that had been developing throughout my journey: Indian tennis needs strong
              systems alongside talented players. Players need more than coaching. They need the right
              environment, regular competition, structured development, guidance, opportunities, and
              people who understand the journey they are trying to build.
            </p>
          </div>

          {/* Chapter 6: Why Sports Life Exists */}
          <div className="card-elevated p-8 sm:p-10 space-y-4 border border-border bg-surface">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">Founding Purpose</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Why Sports Life Exists
            </h3>
            <p className="text-base leading-relaxed text-foreground/85">
              That belief eventually led to the creation of <strong>Sports Life Tennis Academy</strong>. Sports Life began its journey in 2024 at DDA Roshanara Club with a simple vision — to create more than just a place where players learn tennis. We wanted to build an environment where players could develop as complete athletes and individuals.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              Today, more than 300 players train with Sports Life every month, supported by a growing
              team of professional coaches committed to structured, player-first development. Sports
              Life has continued to grow across Delhi, with centres at Roshanara Club, Major Dhyan
              Chand Sports Complex, and Punjabi Bagh Club.
            </p>
            <p className="text-base font-bold text-foreground">
              But growth is not the purpose by itself. Player development is.
            </p>
          </div>

          {/* Chapter 7: The Sports Life Philosophy */}
          <div className="card-elevated p-8 sm:p-10 space-y-4 border border-border bg-surface">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">Core Belief</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              The Sports Life Philosophy
            </h3>
            <p className="text-base leading-relaxed text-foreground/85">
              I believe every player has a different starting point, different goals, and a different pathway.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              For one player, success may mean learning the fundamentals. For another, it may mean
              competing at national tournaments. For someone else, it may mean preparing for
              university admissions, pursuing international opportunities, or building a career
              within tennis.
            </p>
            <p className="text-base leading-relaxed text-foreground/85 font-medium text-foreground">
              The pathway is different for everyone. Our responsibility is to understand that journey
              and help build the right pathway. That is what player-first development means to me.
            </p>
          </div>

          {/* Chapter 8: Looking Ahead */}
          <div className="card-elevated p-8 sm:p-10 space-y-5 border border-border bg-surface">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">Future Roadmap</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Looking Ahead
            </h3>
            <p className="text-base leading-relaxed text-foreground/85">
              Sports Life is growing beyond traditional coaching. Our vision is to create
              opportunities for players through:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              {[
                "Structured long-term player development",
                "Regular competitive match play",
                "Tournament and competition support",
                "Fitness and athletic development",
                "Educational guidance",
                "Career opportunities within tennis",
                "Connections with coaches, players, institutions, and the wider tennis ecosystem",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2 className="size-4.5 shrink-0 text-neon mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Qualifications & Certifications */}
      <Section>
        <SectionHeading
          eyebrow="Credentials"
          title="Qualifications & Certifications"
          body="Official credentials and international training certifications."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Diploma — J.C. Ferrero Tennis Academy",
              desc: "J.C. Ferrero Tennis Academy (Equelite), Spain",
              icon: Globe2,
            },
            {
              title: "NIS Certified Coach",
              desc: "National Institute of Sports qualification in sports coaching",
              icon: GraduationCap,
            },
            {
              title: "PTR Certified Coach",
              desc: "Professional Tennis Registry international coach certification",
              icon: Award,
            },
            {
              title: "AITA / ITF Certified Coach",
              desc: "All India Tennis Association & International Tennis Federation credentials",
              icon: ShieldCheck,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card-elevated flex flex-col justify-between p-6 transition-all hover:border-neon/50 border border-border bg-surface"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-neon/15 text-neon mb-4">
                <item.icon className="size-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg leading-snug">{item.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* International Learning Highlights */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Spain Training"
          title="International Academy Environments"
          body="Exposure gained from world-renowned European academies."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface flex flex-col justify-between">
            <div className="h-72 w-full bg-surface-2/80 flex items-center justify-center p-2">
              <img
                src={jofreImage}
                alt="Abhiney Kumar with Jofre Porta"
                className="size-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 border-t border-border/60">
              <p className="font-semibold text-foreground text-sm">Jofre Porta Academy, Spain</p>
              <p className="text-xs text-muted-foreground mt-1">
                Studying player development systems, tactical drills and long-term athlete progression.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface flex flex-col justify-between">
            <div className="h-72 w-full bg-surface-2/80 flex items-center justify-center p-2">
              <img
                src={ferreroImage}
                alt="Abhiney Kumar at J.C. Ferrero Tennis Academy"
                className="size-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 border-t border-border/60">
              <p className="font-semibold text-foreground text-sm">J.C. Ferrero Tennis Academy</p>
              <p className="text-xs text-muted-foreground mt-1">
                Modern European player development pathways, biomechanics, and technical coaching.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface flex flex-col justify-between">
            <div className="h-72 w-full bg-surface-2/80 flex items-center justify-center p-2">
              <img
                src={nadalImage}
                alt="Abhiney Kumar at Rafa Nadal Tennis Academy"
                className="size-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 border-t border-border/60">
              <p className="font-semibold text-foreground text-sm">Rafa Nadal Tennis Academy</p>
              <p className="text-xs text-muted-foreground mt-1">
                Studying high-intensity Spanish clay court drills and physical conditioning systems.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}

    </>
  );
}
