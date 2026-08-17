import { Link, type LinkProps } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACADEMY, NAV } from "@/lib/site-data";
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter, Youtube } from "lucide-react";
import { Logo, ShuttleIcon } from "./brand";
import Navbar from "./navbar";
import { Loader, ScrollProgress } from "./chrome";
import { WhatsAppAssistant } from "./whatsapp-assistant";
import { WhatsAppPopup } from "./whatsapp-popup";

export function CtaLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: Exclude<LinkProps["to"], undefined>;
  children: ReactNode;
  variant?: "primary" | "ghost" | "neon";
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-xs font-extrabold tracking-[0.16em] uppercase transition-all duration-300";
  const styles = {
    primary:
      "bg-[image:var(--gradient-electric)] text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5",
    neon: "bg-neon text-primary-foreground hover:shadow-[var(--shadow-neon)] hover:-translate-y-0.5",
    ghost: "glass text-foreground hover:border-neon/50 hover:text-neon hover:-translate-y-0.5",
  }[variant];

  return (
    <Link to={to} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}



function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/80 bg-linear-to-b from-[#0b1329] to-[#050814] text-slate-200 shadow-2xl overflow-hidden">
      {/* Subtle brand glow behind footer */}
      <div className="absolute -top-24 left-1/4 size-96 rounded-full bg-neon/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 size-96 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo className="text-white" textClassName="text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">
            {ACADEMY.tagline}. 27 courts across 3 premium centres in Delhi, international coaching philosophy, and dedicated player development.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {ACADEMY.socials.map((s) => {
              const icons: Record<string, ReactNode> = {
                Instagram: <Instagram className="size-4" />,
                YouTube: <Youtube className="size-4" />,
                Twitter: <Twitter className="size-4" />,
                LinkedIn: <Linkedin className="size-4" />,
                WhatsApp: <MessageCircle className="size-4" />,
                Facebook: <Facebook className="size-4" />,
              };

              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 transition hover:bg-neon hover:text-white hover:border-neon hover:scale-105"
                >
                  {icons[s.label]}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-[0.22em] text-neon uppercase font-bold">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-neon">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-[0.22em] text-neon uppercase font-bold">Our Centres</h3>
          <address className="mt-4 space-y-3 text-sm not-italic text-slate-300">
            <div>
              <p className="font-bold text-white">Roshanara Club</p>
              <p className="text-xs text-slate-400">Old Subzi Mandi, Kamla Nagar, Delhi</p>
            </div>
            <div>
              <p className="font-bold text-white">Major Dhyan Chand Complex</p>
              <p className="text-xs text-slate-400">India Gate, Central Delhi</p>
            </div>
            <div>
              <p className="font-bold text-white">Punjabi Bagh Club</p>
              <p className="text-xs text-slate-400">Ring Road, West Delhi</p>
            </div>
            <div className="pt-2">
              <a href={`tel:${ACADEMY.phone.replace(/\s/g, "")}`} className="block text-xs font-semibold text-neon hover:underline">
                Call: {ACADEMY.phone}
              </a>
              <a href={`mailto:${ACADEMY.email}`} className="block text-xs text-slate-400 hover:text-white mt-1">
                {ACADEMY.email}
              </a>
            </div>
          </address>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-[0.22em] text-neon uppercase font-bold">
            Training Hours
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            {ACADEMY.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 border-b border-slate-800/80 pb-2">
                <span>{h.day}</span>
                <span className="text-white font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-neon to-emerald-500 px-5 py-2.5 text-xs font-extrabold uppercase text-white shadow-lg transition hover:scale-105"
            >
              Book Free Trial →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/90 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {ACADEMY.name}. All rights reserved.
          </p>
          <p className="text-neon/80 font-medium">Train With Purpose · Play With Passion</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <WhatsAppAssistant />
      <WhatsAppPopup />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={typeof window !== "undefined" ? window.location.pathname : "main"}
          className="pb-24 xl:pb-0"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onAnimationStart={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
