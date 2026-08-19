import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Globe2,
  HeartHandshake,
  Lightbulb,
  MessageSquare,
  Sparkles,
  Trophy,
  Users,
  Video,
} from "lucide-react";

const heroImage = "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg";
const jofreSessionImage = "/founder-gallery/abhiney-with-jofre-porta.jpg";
const ferreroSessionImage = "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg";

export const Route = createFileRoute("/initiatives/global-learning")({
  head: () => ({
    meta: [
      { title: "Global Learning Initiatives — Learning Beyond the Court | Sports Life" },
      {
        name: "description",
        content:
          "Direct access to experienced professionals: exclusive online sessions with Jofre Porta, Indian professional Vishnu Vardhan, and international tennis mentors.",
      },
      { property: "og:title", content: "Global Learning Initiatives — Sports Life" },
      {
        property: "og:description",
        content:
          "Learning Beyond the Court: Connecting our players with internationally experienced coaches and ATP tour professionals.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/initiatives/global-learning" },
    ],
    links: [{ rel: "canonical", href: "/initiatives/global-learning" }],
  }),
  component: GlobalLearning,
});

function GlobalLearning() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Global Learning Initiatives"
        title="Learning Beyond the Court"
        body="Direct access to experienced professionals. At Sports Life, we believe player development should extend beyond the regular coaching session."
        image={heroImage}
      />

      {/* Main Philosophy Section */}
      <Section>
        <SectionHeading
          eyebrow="Learning Beyond the Court"
          title="Direct Access to Experienced Professionals"
          body="Bringing the right people, experiences, and knowledge closer to our players."
        />

        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85 lg:text-lg">
          <div className="rounded-2xl border border-neon/30 bg-linear-to-r from-neon/10 via-neon/5 to-transparent p-6 sm:p-8">
            <p className="font-display text-lg font-bold text-foreground sm:text-xl lg:text-2xl leading-snug">
              “At Sports Life, we believe that player development should extend beyond the regular coaching session. Players can learn from their coaches every day, but sometimes hearing directly from someone who has experienced high-level tennis can offer an entirely different perspective.”
            </p>
          </div>

          <p>
            That is why we actively create opportunities for our players to learn from experienced
            professionals and gain perspectives from different parts of the tennis world. Our
            approach is simple: bring the right people, experiences, and knowledge closer to our
            players.
          </p>
        </div>
      </Section>

      {/* Direct Access to Experienced Professionals: Jofre Porta & Vishnu Vardhan */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Exclusive Interactions"
          title="Learning From Those Who Have Been There"
          body="As part of our learning initiatives, Sports Life has organised exclusive online interactions that have given our players the opportunity to directly engage with experienced professionals. These sessions are designed to go beyond technical coaching. Players can listen, ask questions, understand different perspectives, and learn about the realities of competitive tennis from people who have experienced them firsthand."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* 01 JOFRE PORTA */}
          <Reveal delay={0.05}>
            <div className="card-elevated flex flex-col justify-between h-full p-7 sm:p-9 border border-border bg-surface rounded-3xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-neon/15 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-neon">
                    01 Coaching Perspective
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">Mallorca, Spain</span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-foreground">
                  Jofre Porta
                </h3>
                <p className="text-sm font-semibold text-neon mt-1">
                  Learning From an International Coaching Perspective
                </p>

                <div className="relative my-6 overflow-hidden rounded-2xl border border-border bg-surface-2/80 flex items-center justify-center p-2 aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={jofreSessionImage}
                    alt="Exclusive learning interaction with Jofre Porta"
                    className="size-full object-contain"
                  />
                  <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-black/75 backdrop-blur-md px-3 py-1.5 text-[11px] text-white font-medium text-center">
                    An exclusive learning interaction with Jofre Porta.
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  Sports Life organised an exclusive online interaction with Jofre Porta, giving our
                  players the opportunity to interact directly with an internationally experienced coach
                  and learn from his perspective on tennis and player development.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  The session allowed players to ask questions and gain insights that they would not
                  normally receive during their regular training sessions. For us, the value was not
                  simply in meeting an experienced coach. It was in giving players the opportunity to
                  listen, question, and think differently about their own development.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 02 VISHNU VARDHAN */}
          <Reveal delay={0.1}>
            <div className="card-elevated flex flex-col justify-between h-full p-7 sm:p-9 border border-border bg-surface rounded-3xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-electric/15 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-electric">
                    02 Pro Player Perspective
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">ATP Tour / India</span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-foreground">
                  Vishnu Vardhan
                </h3>
                <p className="text-sm font-semibold text-electric mt-1">
                  Learning From a Professional Player's Perspective
                </p>

                <div className="relative my-6 overflow-hidden rounded-2xl border border-border bg-surface-2/80 flex items-center justify-center p-2 aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={ferreroSessionImage}
                    alt="Exclusive player interaction with Vishnu Vardhan"
                    className="size-full object-contain"
                  />
                  <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-black/75 backdrop-blur-md px-3 py-1.5 text-[11px] text-white font-medium text-center">
                    An exclusive player interaction with Vishnu Vardhan.
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  Sports Life also created an opportunity for our players to interact directly with
                  Vishnu Vardhan, an accomplished Indian professional tennis player.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  The interaction gave players an opportunity to hear about competitive tennis from the
                  perspective of someone who has experienced it at the professional level. Players could
                  ask questions, understand the realities of competing at a high level, and learn from
                  experiences that go beyond what can be taught through a regular training session.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Why We Do This */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why We Do This"
              title="Because Learning Should Never Stop"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                We don't believe that all learning has to happen through a coach standing across the net. Sometimes it happens through a conversation. Sometimes it happens by hearing about someone else's journey. Sometimes one answer to a player's question can change the way they approach their own training.
              </p>
              <p>
                That's why we want our players to have access to different voices, different experiences, and different perspectives within tennis.
              </p>
              <div className="rounded-2xl border border-neon/30 bg-neon/5 p-5 text-sm sm:text-base font-semibold text-foreground">
                “Our goal is not to replace the coach. It is to expand the player's world beyond the court.”
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 sm:p-10 border border-border bg-surface rounded-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-neon">Our Approach</span>
            <h3 className="text-2xl font-bold text-foreground">
              Bringing Opportunities Closer to Players
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-neon mt-2 shrink-0" />
                <div>
                  <strong className="text-foreground">Experienced Professionals: </strong>
                  <span className="text-muted-foreground">Interactions with coaches and players who have experienced competitive tennis at a high level.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-neon mt-2 shrink-0" />
                <div>
                  <strong className="text-foreground">International Perspectives: </strong>
                  <span className="text-muted-foreground">Learning from different coaching environments and approaches to player development.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-neon mt-2 shrink-0" />
                <div>
                  <strong className="text-foreground">Player Conversations: </strong>
                  <span className="text-muted-foreground">Giving players the opportunity to ask questions and learn directly from experienced people.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-neon mt-2 shrink-0" />
                <div>
                  <strong className="text-foreground">Real Experiences: </strong>
                  <span className="text-muted-foreground">Sharing practical lessons from competition, coaching, travel, development, and the realities of a tennis career.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* More Than a Coaching Session */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="eyebrow">Beyond The Court</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground">
            More Than A Coaching Session
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
            At Sports Life, we want players to understand that their development is bigger than the time they spend on the court.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 py-4 font-display text-sm sm:text-lg font-black uppercase text-neon tracking-widest">
            <span>Train</span> · <span>Compete</span> · <span>Learn</span> · <span>Connect</span> · <span>Grow</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            These opportunities are part of our effort to create a broader player-first environment — one where players are not only trained, but exposed to the knowledge and experiences that can help them make better decisions throughout their tennis journey.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-sm text-foreground/80 max-w-2xl mx-auto">
            <h4 className="font-bold text-foreground text-base mb-2">The Journey Continues</h4>
            <p>
              Our global learning initiatives are still evolving. As Sports Life grows, we want to create more opportunities for our players to interact with experienced coaches, professional players, and people who can offer valuable perspectives on different stages of the tennis journey.
            </p>
            <p className="mt-3 font-semibold text-neon">
              Because sometimes, one conversation can change the way a player sees the game.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        title="Be Part of Our Next Learning Session"
        body="Join Sports Life Tennis Academy and give your game the advantage of international mentorship and pro insights."
      />
    </>
  );
}
