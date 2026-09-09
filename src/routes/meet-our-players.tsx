import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/motion-primitives";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { CtaLink } from "@/components/site/layout";
import { Medal, Star, Trophy, Globe2 } from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/meet-our-players")({
  head: () => ({
    meta: [
      { title: "Meet Our Players — Player Spotlight | Sports Life Tennis Academy" },
      {
        name: "description",
        content:
          "Meet the competitive players of Sports Life Tennis Academy — national rankers, ITF competitors, Khelo India medalists, and rising juniors making their mark on the court.",
      },
      { property: "og:title", content: "Meet Our Players — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "Player spotlight featuring ranked juniors and national-level competitors from Sports Life Tennis Academy, Delhi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/meet-our-players" },
    ],
    links: [{ rel: "canonical", href: "/meet-our-players" }],
  }),
  component: MeetOurPlayersPage,
});

const PLAYERS = [
  {
    name: "Deepam Malik",
    subtitle: "Career High #13 · ITF #1600",
    image: "/players/deepam.jpg",
    
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    highlights: [
      "Khelo India Youth Games",
      "SGFI Medalist 🥈 🥉",
      "National Series Doubles Champion",
      "ITF Semifinalist 🎾 🏆",
    ],
    bio: "A strong competitor with proven success across national and international-level tennis.",
  },
  {
    name: "Manvi Rathi",
    subtitle: "U-18 All India Best Rank #29",
    image: "/players/manvi.jpg",
  
    badgeColor: "bg-neon/15 text-neon border-neon/30",
    highlights: [
      "🏆 3× U-18 Championship Series Singles Winner",
      "🏆 U-18 Super Series Doubles Winner",
      "🥈 Asian U-16 Doubles Finalist",
      "🎾 ITF J30 Doubles Semifinalist",
      "🥉 SGFI Bronze Medalist — Delhi Team",
      "SGFI Semifinalist — Individual Event",
    ],
    bio: "A rising junior with strong performances across national and international competition.",
  },
  {
    name: "Vani Bansal",
    subtitle: "All India #32 (U-18 Girls) · Delhi #2",
    image: "/players/vani.jpg",
   
    badgeColor: "bg-neon/15 text-neon border-neon/30",
    highlights: [
      "🏆 Multiple Championship Series Winner",
      "🥈 Super Series Runner-Up",
    ],
    bio: "A highly competitive junior with a strong record at the Delhi and national level.",
  },
  {
    name: "Atharva Dua",
    subtitle: "3× DAV Nationals Gold Medalist — U-19",
    image: "/players/atharva.jpg",
  
    badgeColor: "bg-neon/15 text-neon border-neon/30",
    highlights: [
      "🥇 3× DAV Nationals Gold Medalist — U-19",
      "🥉 SGFI Bronze Medalist — U-19 (2023–24)",
      "🥉 DAV Nationals Bronze Medalist — U-19 (2024)",
      "🥈 CBSE Zonals Silver Medalist — U-17 (2021)",
    ],
    bio: "A strong junior competitor with consistent performances across DAV Nationals, SGFI, and CBSE competitions.",
  },
  {
    name: "Viraj Sikka",
    subtitle: "2× Championship Series-7 Winner",
    image: "/players/viraj.jpg",
    
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    highlights: [
      "🏆 2× Championship Series-7 Winner",
      "🥈 Championship Series-7 Runner-Up",
      "🥉 Delhi State (SGFI) — 3rd Position, U-14",
    ],
    bio: "A promising junior with strong performances in Championship Series and state-level competition.",
  },
  {
    name: "Ekamveer Singh",
    subtitle: "Multiple AITA CS-7 Winner",
    image: "/players/ekam.jpg",
    
    badgeColor: "bg-neon/15 text-neon border-neon/30",
    highlights: [
      "🏆 Multiple AITA CS-7 Winner",
      "🥈 CBSE — 2nd Position",
      "🏆 Open Championship Winner",
    ],
    bio: "A promising junior with strong performances across competitive and school-level tennis.",
  },
  {
    name: "Soham Aggarwal",
    subtitle: "All India IPSC Gold — Team Event",
    image: null,
    
    badgeColor: "bg-neon/15 text-neon border-neon/30",
    highlights: [
      "🥇 All India IPSC School Games — Gold, Team Event",
      "🥉 All India IPSC School Games — Bronze, Individual Event",
      "🏆 Multiple Championship Series Winner — U-14 & U-16",
    ],
    bio: "A promising junior with strong performances in school-level and AITA Championship Series competition.",
  },
  {
    name: "Kanav Mittal",
    subtitle: "AITA Singles & Doubles Winner",
    image: "/players/kanav.jpg",
    imageFit: "contain",
    
    badgeColor: "bg-neon/15 text-neon border-neon/30",
    highlights: [
      "🏆 AITA Singles Winner",
      "🏆 AITA Doubles Winner",
      "🥈 CBSE — 2nd Position (2025)",
      "🥉 CBSE — 3rd Position (2026)",
    ],
    bio: "A competitive junior with AITA titles and strong performances at the CBSE level.",
  },
  {
    name: "Avni Pandey",
    subtitle: "DAV Nationals Silver Medalist",
    image: "/players/avni.jpg",
   
    badgeColor: "bg-neon/15 text-neon border-neon/30",
    highlights: [
      "🥈 DAV Nationals — Silver Medalist",
      "🏆 Multiple AITA Tournament Winner",
    ],
    bio: "A competitive junior with strong performances at national and AITA-level competitions.",
  },
];

function PlayerCard({ player, index }: { player: (typeof PLAYERS)[number]; index: number }) {
  const showContainedImage = player.imageFit === "contain";

  return (
    <Reveal delay={index * 0.06}>
      <article className="group relative flex flex-col rounded-3xl border border-border/60 bg-surface/80 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-[0_12px_40px_rgba(34,197,94,0.12)] hover:border-neon/30 transition-all duration-500 hover:-translate-y-1">
        {/* Image area — fixed aspect ratio so all cards are the same height */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
          {player.image ? (
            <>
              {showContainedImage && (
                <img
                  src={player.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl brightness-75"
                />
              )}
              <img
                src={player.image}
                alt={`${player.name} — Sports Life Tennis Academy player`}
                className={`absolute inset-0 h-full w-full ${showContainedImage ? "object-contain" : "object-cover object-top"} transition-transform duration-700 group-hover:scale-105`}
                loading="lazy"
              />
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface-2 to-background gap-3">
              <div className="flex size-20 items-center justify-center rounded-full border-2 border-neon/30 bg-neon/10 text-3xl font-black font-display text-neon">
                {player.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </div>
              <span className="text-xs text-muted-foreground font-medium">Photo Coming Soon</span>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

         

          <div className="absolute bottom-0 inset-x-0 p-4">
            <h3 className="font-display text-lg font-black text-white leading-tight drop-shadow-lg">
              {player.name}
            </h3>
            <p className="mt-0.5 text-xs font-semibold text-neon drop-shadow-md">
              {player.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5 gap-4">
          <ul className="flex flex-col gap-1.5">
            {player.highlights.map((h: string) => (
              <li key={h} className="flex items-start gap-2 text-xs text-foreground/80 leading-snug">
                <span className="mt-1 flex size-1.5 shrink-0 rounded-full bg-neon/50" />
                {h}
              </li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground leading-relaxed italic border-t border-border/50 pt-3 mt-auto">
            {player.bio}
          </p>
        </div>

        <div className="pointer-events-none absolute -bottom-16 -right-16 size-40 rounded-full bg-neon/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </article>
    </Reveal>
  );
}

function MeetOurPlayersPage() {
  return (
    <>
      <PageHero
        eyebrow="Player Spotlight"
        title="Meet the Players"
        body=""
        image="/players/players-hero-spotlight.jpg"
        imageFit="object-cover"
        removeFog
      />

      <Section className="pt-0">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {([
            { icon: <Trophy className="size-5 text-amber-400" />, value: "9+", label: "Spotlight Players" },
            { icon: <Star className="size-5 text-neon" />, value: "ITF", label: "International Competitors" },
            { icon: <Medal className="size-5 text-blue-400" />, value: "SGFI", label: "State Medalists" },
            { icon: <Globe2 className="size-5 text-purple-400" />, value: "AITA", label: "National Champions" },
          ] as { icon: ReactNode; value: string; label: string }[]).map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-surface/80 p-4 text-center backdrop-blur-sm"
            >
              {s.icon}
              <span className="font-display text-xl font-black text-foreground">{s.value}</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Player Spotlight"
          title="Our Competitive Players"
          body="From Khelo India to ITF tournaments, our players are proving themselves on the biggest stages."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLAYERS.map((player, i) => (
            <PlayerCard key={player.name} player={player} index={i} />
          ))}
        </div>
      </Section>

     
    </>
  );
}