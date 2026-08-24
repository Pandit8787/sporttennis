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
  const centres = [
    {
      name: "Roshanara Club",
      area: "North Delhi · Shakti Nagar",
      courts: "9 Courts (4 Synthetic · 2 Clay · 3 Grass)",
      address: "DDA Roshanara Club, Shakti Nagar, Delhi - 110007",
      map: "https://www.google.com/maps?q=DDA+Roshanara+Club,+Shakti+Nagar,+Delhi+110007&output=embed",
      tag: "Flagship Centre · Est. 2024",
    },
    {
      name: "Major Dhyan Chand Sports Complex",
      area: "Ashok Vihar · North-West Delhi",
      courts: "6 Courts (4 Synthetic · 2 Clay)",
      address: "Major Dhyan Chand Sports Complex, Ashok Vihar, Delhi",
      map: "https://maps.google.com/maps?q=Major%20Dhyanchand%20Sports%20Complex,%20Ashok%20Vihar,%20Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed",
      tag: "Development Hub · Est. 2026",
    },
    {
      name: "Punjabi Bagh Club",
      area: "West Delhi · Ring Road",
      courts: "10 Courts (6 Clay · 4 Synthetic)",
      address: "Punjabi Bagh Club, Ring Road, Punjabi Bagh, Delhi",
      map: "https://maps.google.com/maps?q=Punjabi%20Bagh%20Club,%20Ring%20Road,%20Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed",
      tag: "West Delhi Centre",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come train with us"
        body="Start with a free trial session and let our coaches guide you to the right program and centre. Choose from 3 premier Delhi locations."
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
                    WhatsApp
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="https://wa.me/919266579159"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-600 hover:bg-green-500 hover:text-white px-4 py-2 font-bold text-sm transition-colors"
                    >
                      <span>💬 Chat on WhatsApp</span>
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

              {/* Social Links — Connect */}
              <div className="mt-8 pt-6 border-t border-border/70">
                <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase font-bold mb-4">
                  Follow & Connect
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    {
                      label: "Instagram",
                      href: "https://instagram.com",
                      color: "from-pink-500 to-orange-400",
                      icon: "📸",
                    },
                    {
                      label: "YouTube",
                      href: "https://youtube.com",
                      color: "from-red-500 to-red-600",
                      icon: "▶️",
                    },
                    {
                      label: "WhatsApp",
                      href: "https://wa.me/919266579159",
                      color: "from-green-500 to-emerald-500",
                      icon: "💬",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 text-xs font-bold text-foreground transition-all hover:scale-[1.02] hover:border-white/30 hover:shadow-xl`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <div className="relative flex items-center gap-2">
                        <span className="text-lg">{s.icon}</span>
                        <span>{s.label}</span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ACADEMY.socials
                    .filter((s) => !["Instagram", "YouTube", "WhatsApp"].includes(s.label))
                    .map((s) => (
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

      {/* 3 Centres Full Details + Maps */}
      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Our 3 Centres"
          title="Choose Your Nearest Sports Life Centre"
          body="All 3 Delhi centres feature structured coaching, certified mentors, and dedicated player development across surfaces."
        />

        <div className="mt-12 grid gap-8">
          {centres.map((centre, idx) => (
            <Reveal key={centre.name} delay={idx * 0.08}>
              <div className="card-elevated overflow-hidden rounded-3xl border border-border bg-surface">
                <div className="grid gap-0 md:grid-cols-2">
                  {/* Centre Details */}
                  <div className="p-7 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block rounded-full bg-neon/10 border border-neon/30 text-neon px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider">
                          {centre.tag}
                        </span>
                        <h3 className="mt-3 text-2xl font-black text-foreground">
                          {centre.name}
                        </h3>
                        <p className="mt-1.5 text-sm font-semibold text-neon flex items-center gap-1.5">
                          📍 {centre.area}
                        </p>
                      </div>
                      <a
                        href={`/centres/${centre.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace("major-dhyan-chand-sports-complex", "major-dhyan-chand-sports-complex").replace("roshanara-club", "roshanara-club").replace("punjabi-bagh-club", "punjabi-bagh-club")}`}
                        className="rounded-full bg-surface-2 border border-border px-3 py-1.5 text-[11px] font-bold text-foreground/80 hover:text-neon hover:border-neon/50 transition-colors shrink-0"
                      >
                        Details →
                      </a>
                    </div>

                    <div className="mt-6 space-y-4 text-sm">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                          Courts
                        </p>
                        <p className="font-semibold text-foreground">{centre.courts}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                          Complete Address
                        </p>
                        <p className="leading-relaxed text-foreground/85">{centre.address}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                          Contact
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <a href="tel:8130514603" className="rounded-full bg-neon/10 border border-neon/25 text-neon px-3 py-1.5 text-xs font-bold hover:bg-neon hover:text-white transition-colors">
                            📞 +91 81305 14603
                          </a>
                          <a href="tel:9266579159" className="rounded-full bg-neon/10 border border-neon/25 text-neon px-3 py-1.5 text-xs font-bold hover:bg-neon hover:text-white transition-colors">
                            📞 +91 92665 79159
                          </a>
                          <a href="https://wa.me/919266579159" target="_blank" rel="noreferrer noopener" className="rounded-full bg-green-500/10 border border-green-500/30 text-green-600 px-3 py-1.5 text-xs font-bold hover:bg-green-500 hover:text-white transition-colors">
                            💬 WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="relative min-h-[300px] md:min-h-[auto] border-t md:border-t-0 md:border-l border-border bg-black/5">
                    <iframe
                      title={`${centre.name} location map`}
                      src={centre.map}
                      className="h-[300px] md:h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
