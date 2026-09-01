import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import trophyImg from "@/assets/trophy.jpg";
import { RESULTS, SCHEDULE, TOURNAMENTS } from "@/lib/site-data";
import { Reveal } from "@/components/site/motion-primitives";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Tournaments — Upcoming Events, Schedule & Results" },
      {
        name: "description",
        content:
          "Register for Sports Life events and browse match schedules, categories and recent results.",
      },
      { property: "og:title", content: "Sports Life Tournaments & Events" },
      {
        property: "og:description",
        content: "Upcoming tennis tournaments, registration, match schedule and recent results.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tournaments" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tournaments" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: TOURNAMENTS.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.name,
          })),
        }),
      },
    ],
  }),
  component: TournamentsPage,
});

function RegistrationForm() {
  const [sent, setSent] = useState(false);

  const field =
    "w-full rounded-xl border border-input bg-surface/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-neon/60 focus:ring-2 focus:ring-ring";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="glass rounded-3xl p-7 lg:p-10"
    >
      <h3 className="text-2xl">Register for an event</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Entries confirmed by email within 24 hours. Junior entries need age proof at check-in.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="t-name"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Player name
          </label>
          <input id="t-name" required className={`mt-2 ${field}`} placeholder="Full name" />
        </div>
        <div>
          <label
            htmlFor="t-email"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Email
          </label>
          <input
            id="t-email"
            type="email"
            required
            className={`mt-2 ${field}`}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="t-phone"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Phone
          </label>
          <input id="t-phone" required className={`mt-2 ${field}`} placeholder="+91" />
        </div>
        <div>
          <label
            htmlFor="t-event"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Event
          </label>
          <select id="t-event" className={`mt-2 ${field}`}>
            {TOURNAMENTS.map((t) => (
              <option key={t.name}>{t.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="t-cat"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Category
          </label>
          <select id="t-cat" className={`mt-2 ${field}`}>
            <option>Under-13</option>
            <option>Under-15</option>
            <option>Under-17</option>
            <option>Open Singles</option>
            <option>Open Doubles</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-[image:var(--gradient-electric)] px-6 py-3.5 font-display text-xs font-extrabold tracking-[0.16em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
      >
        {sent ? "Entry received" : "Submit entry"}
      </button>
      {sent && (
        <p className="mt-4 text-sm text-neon">
          Thanks — our tournament desk will confirm your entry by email.
        </p>
      )}
    </form>
  );
}

function TournamentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tournaments"
        title="Play the weekends that matter"
        body="Three in-house events a year, plus circuit entries managed for every advanced and elite athlete."
        image={trophyImg}
      />

      <Section>
        <SectionHeading eyebrow="Upcoming" title="Events open for entry" />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TOURNAMENTS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <article className="card-elevated flex h-full flex-col p-8">
                <span className="w-fit rounded-full border border-neon/40 px-3 py-1 text-[10px] tracking-[0.16em] text-neon uppercase">
                  {t.status}
                </span>
                <h3 className="mt-5 text-2xl">{t.name}</h3>
                <p className="mt-3 font-display text-lg text-gradient">{t.date}</p>
                <p className="mt-4 text-sm text-muted-foreground">{t.venue}</p>
                <p className="mt-auto pt-6 text-sm text-muted-foreground">{t.categories}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Match schedule" title="Sports Life Open — Day 1" />
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {SCHEDULE.map((s) => (
                <li key={`${s.time}-${s.court}`} className="flex items-center gap-6 py-5">
                  <span className="font-display text-xl text-neon">{s.time}</span>
                  <div>
                    <p className="text-sm">{s.match}</p>
                    <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {s.court}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <RegistrationForm />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Results" title="Recent finals" />
        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs tracking-[0.16em] text-muted-foreground uppercase">
                <th className="py-4 font-medium">Event</th>
                <th className="py-4 font-medium">Winner</th>
                <th className="py-4 font-medium">Runner-up</th>
                <th className="py-4 font-medium">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {RESULTS.map((r) => (
                <tr key={r.event}>
                  <td className="py-5">{r.event}</td>
                  <td className="py-5 text-neon">{r.winner}</td>
                  <td className="py-5 text-muted-foreground">{r.runner}</td>
                  <td className="py-5 font-display">{r.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      
    </>
  );
}
