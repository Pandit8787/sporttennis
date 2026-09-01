import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { ACADEMY, FAQS, TESTIMONIALS } from "@/lib/site-data";
import { CtaLink } from "./layout";
import { Reveal, TextReveal } from "./motion-primitives";
import { ShuttleIcon } from "./brand";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative px-4 sm:px-6 py-14 sm:py-20 lg:px-8 lg:py-28 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>

      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
        <TextReveal text={title} />
      </h2>
      {body && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground lg:text-lg">{body}</p>
        </Reveal>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  removeFog = false,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  image?: string;
  removeFog?: boolean;
}) {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 flex flex-col justify-end min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] pb-14 sm:pb-20 lg:pb-24 pt-32">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />

      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="eager"
            className="absolute inset-0 size-full object-cover object-center transition-transform duration-1000"
          />
          {/* Refined gradient overlays */}
          {!removeFog && (
            <>
              <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/70 to-background/25" />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/35" />
            </>
          )}
          {removeFog && <div className="absolute inset-0 bg-black/40" />}
        </>
      )}

      <div className="grid-lines absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl">
        {title && (
          <h1 className="mt-4 max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] [text-shadow:0_2px_16px_rgba(0,0,0,0.8)] text-white leading-tight">
            <TextReveal text={title} />
          </h1>
        )}
        {body && (
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/95 lg:text-lg font-semibold drop-shadow-md">
              {body}
            </p>
          </Reveal>
        )}
        {!title && !body && <div className="h-32 sm:h-40 lg:h-48 w-full" />}
      </div>
    </section>
  );
}

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index] ?? TESTIMONIALS[0]!;

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-14">
      <ShuttleIcon className="absolute -top-6 -right-6 size-40 text-electric/10" />
      <motion.blockquote
        key={index}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl"
      >
        <p className="font-display text-xl sm:text-2xl leading-tight lg:text-4xl">“{active.quote}”</p>
        <footer className="mt-6 sm:mt-8">
          <p className="font-display text-xs sm:text-sm tracking-[0.16em] text-neon uppercase font-bold">
            {active.name}
          </p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{active.role}</p>
        </footer>
      </motion.blockquote>

      <div className="mt-8 flex items-center gap-3">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial from ${t.name}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? "w-10 bg-neon" : "w-5 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {FAQS.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between py-5 sm:py-6 text-left transition-colors hover:text-neon cursor-pointer gap-4"
          >
            <span className="font-display text-base sm:text-lg font-bold">{f.q}</span>
            <span className="font-display text-2xl text-neon shrink-0">{open === i ? "−" : "+"}</span>
          </button>
          <motion.div
            initial={false}
            animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {f.a}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setSent(true);
        setEmail("");
      }}
      className="glass flex flex-col gap-3 rounded-2xl p-3 sm:flex-row"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
      />
      <button
        type="submit"
        className="rounded-xl bg-[image:var(--gradient-electric)] px-6 py-3 font-display text-xs font-extrabold tracking-[0.16em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
      >
        {sent ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}

export function CtaBanner({
  title = "Your first session is on us",
  body = "Book a free 90-minute trial with a certified coach and get a written skill assessment the same day.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:p-20">
        <div className="grid-lines absolute inset-0 opacity-60 pointer-events-none" />
        <div className="absolute -top-32 -right-20 size-96 rounded-full bg-electric/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-10 size-96 rounded-full bg-neon/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl">

          <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            <TextReveal text={title} />
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground lg:text-lg">{body}</p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
            <CtaLink to="/contact">Book Free Trial</CtaLink>
            <CtaLink to="/programs" variant="ghost">
              View Programs
            </CtaLink>
          </div>
          <p className="mt-6 text-[10px] sm:text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Roshanara Club · Major Dhyan Chand National Stadium · Punjabi Bagh Club
          </p>
        </div>
      </div>
    </Section>
  );
}
