import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ACADEMY } from "@/lib/site-data";
import { Reveal } from "@/components/site/motion-primitives";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sports Life — Book a Free Trial" },
      {
        name: "description",
        content:
          "Book a free trial session, find our Delhi locations and get court timings, phone and email for Sports Life Tennis Academy.",
      },
      { property: "og:title", content: "Contact Sports Life Tennis Academy" },
      {
        property: "og:description",
        content: "Book a free trial, find us on the map, and see our court hours.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: ACADEMY.name,
          telephone: ACADEMY.phone,
          email: ACADEMY.email,
          address: { "@type": "PostalAddress", streetAddress: ACADEMY.address },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const field =
  "w-full rounded-xl border border-input bg-surface/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-neon/60 focus:ring-2 focus:ring-ring";

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="glass rounded-3xl p-7 lg:p-10"
    >
      <h2 className="text-3xl">Book a free trial</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us your level and preferred timing. We reply within one working day.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="c-name"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Name
          </label>
          <input id="c-name" required className={`mt-2 ${field}`} placeholder="Your name" />
        </div>
        <div>
          <label
            htmlFor="c-phone"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Phone
          </label>
          <input id="c-phone" required className={`mt-2 ${field}`} placeholder="+91" />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="c-email"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Email
          </label>
          <input
            id="c-email"
            type="email"
            required
            className={`mt-2 ${field}`}
            placeholder="you@email.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="c-level"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Current level
          </label>
          <select id="c-level" className={`mt-2 ${field}`}>
            <option>Complete beginner</option>
            <option>Recreational player</option>
            <option>Club / school level</option>
            <option>Competitive / ranked</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="c-msg"
            className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
          >
            Message
          </label>
          <textarea
            id="c-msg"
            rows={4}
            className={`mt-2 ${field}`}
            placeholder="Preferred timings, goals, anything we should know"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-[image:var(--gradient-electric)] px-6 py-3.5 font-display text-xs font-extrabold tracking-[0.16em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
      >
        {sent ? "Request sent" : "Request free trial"}
      </button>
      {sent && <p className="mt-4 text-sm text-neon">Thanks — a coach will call you shortly.</p>}
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come train with us"
        body="Start with a free trial session and let our coaches guide you to the right program and centre."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ContactForm />

          <div className="space-y-5">
            <div className="card-elevated p-7">
              <h2 className="text-2xl">Academy details</h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Address
                  </dt>
                  <dd className="mt-1">{ACADEMY.address}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1 flex flex-col gap-1">
                    <a href="tel:8130514603" className="text-neon hover:underline font-semibold">
                      +91 81305 14603
                    </a>
                    <a href="tel:9266579159" className="text-neon hover:underline font-semibold">
                      +91 92665 79159
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a href={`mailto:${ACADEMY.email}`} className="text-neon">
                      {ACADEMY.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">
                {ACADEMY.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="glass rounded-full px-4 py-2 text-xs font-semibold transition-colors hover:text-neon"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="card-elevated p-7">
              <h2 className="text-2xl">Working hours</h2>
              <ul className="mt-6 divide-y divide-border text-sm">
                {ACADEMY.hours.map((h) => (
                  <li key={h.day} className="flex justify-between py-3">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Find us" title="DDA Roshanara Club, Delhi" />
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Sports Life Tennis Academy location map"
              src="https://www.google.com/maps?q=DDA+Roshanara+Club,+Shakti+Nagar,+Delhi+110007&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
