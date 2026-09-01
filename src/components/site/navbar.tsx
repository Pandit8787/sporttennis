import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { NAV, ACADEMY } from "@/lib/site-data";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Camera,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Flame,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Home,
  Info,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AcademyLogo } from "./brand";

function useOnClickOutside(ref: React.RefObject<HTMLElement | null>, handler: (e: Event) => void) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// Icon helper for top-level menu items
function getItemIcon(label: string) {
  switch (label.toLowerCase()) {
    case "home":
      return <Home className="size-4.5 text-neon" />;
    case "about us":
      return <Info className="size-4.5 text-neon" />;
    case "meet our team":
      return <Users className="size-4.5 text-neon" />;
    case "our centres":
      return <MapPin className="size-4.5 text-neon" />;
    case "our programs":
      return <Sparkles className="size-4.5 text-neon" />;
    case "sports life initiatives":
      return <Globe2 className="size-4.5 text-neon" />;
    case "facilities":
      return <Trophy className="size-4.5 text-neon" />;
    case "tournaments":
      return <Calendar className="size-4.5 text-neon" />;
    case "testimonials":
      return <Star className="size-4.5 text-neon" />;
    case "gallery":
      return <Camera className="size-4.5 text-neon" />;
    case "blogs":
      return <BookOpen className="size-4.5 text-neon" />;
    case "contact":
      return <Phone className="size-4.5 text-neon" />;
    default:
      return <Zap className="size-4.5 text-neon" />;
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useOnClickOutside(navRef, () => setOpenIndex(null));

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (openMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMobile(false);
    };
    if (openMobile) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openMobile]);

  // Close drawer on route change
  useEffect(() => {
    setOpenMobile(false);
  }, [location.pathname]);

  const cleanPhone = ACADEMY.phone.replace(/\D/g, "");
  const cleanWhatsapp = ACADEMY.whatsapp.replace(/\D/g, "");

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-2xl border-b border-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-2.5 sm:py-3"
          : "bg-surface/75 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-[0_2px_15px_rgba(0,0,0,0.03)] py-3 sm:py-4"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0 transition-transform duration-200 hover:scale-105 mr-4 sm:mr-6 lg:mr-8 xl:mr-10"
          aria-label="Sports Life Tennis Academy"
        >
          <div className="size-10 sm:size-12 flex items-center justify-center">
            <AcademyLogo className="h-9 sm:h-11 w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav ref={navRef} className="hidden grow items-center justify-center gap-0.5 xl:flex px-2">
          <ul className="flex items-center gap-0.5 xl:gap-1 whitespace-nowrap">
            {NAV.map((item, i) => (
              <li key={String(item.to) + i} className="relative">
                {"children" in item && item.children ? (
                  <div
                    className="group"
                    onMouseEnter={() => setOpenIndex(i)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    <div className="flex items-center gap-1 rounded-full px-2.5 py-1.5 transition-colors hover:bg-neon/10">
                      <Link
                        to={item.to}
                        activeProps={{ className: "text-neon font-bold" }}
                        className="text-[11.5px] 2xl:text-xs font-semibold text-foreground/80 group-hover:text-neon transition-colors"
                      >
                        {item.label}
                      </Link>
                      <button
                        aria-haspopup="true"
                        aria-expanded={openIndex === i}
                        className="text-foreground/60 group-hover:text-neon transition-colors cursor-pointer"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      >
                        <ChevronDown
                          className={`size-3 transition-transform duration-200 ${
                            openIndex === i ? "-rotate-180 text-neon" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 top-full z-50 -translate-x-1/2 mt-2 w-80 rounded-2xl border border-border/80 bg-surface/95 p-2.5 shadow-2xl backdrop-blur-2xl"
                        >
                          <ul className="grid gap-1 whitespace-normal">
                            {item.children.map((c: any) => (
                              <li key={c.to}>
                                <Link
                                  to={c.to}
                                  onClick={() => setOpenIndex(null)}
                                  activeProps={{ className: "bg-neon/15 text-neon font-bold" }}
                                  className="group/item flex items-start gap-3 rounded-xl p-2.5 text-xs text-foreground/80 hover:bg-neon/10 hover:text-neon transition-all"
                                >
                                  <span className="mt-1 flex size-2 shrink-0 rounded-full bg-neon/40 group-hover/item:bg-neon transition-colors" />
                                  <div>
                                    <div className="font-bold text-foreground group-hover/item:text-neon transition-colors">
                                      {c.label}
                                    </div>
                                    {c.description && (
                                      <div className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                                        {c.description}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-neon font-bold bg-neon/10" }}
                    className="rounded-full px-2.5 py-1.5 text-[11.5px] 2xl:text-xs font-semibold text-foreground/80 hover:bg-neon/10 hover:text-neon transition-all"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons: Desktop & Mobile Header Bar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Quick Call CTA */}
          <a
            href={`tel:${cleanPhone}`}
            aria-label="Call Sports Life Tennis Academy"
            className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-border/80 bg-surface text-neon hover:bg-neon hover:text-white transition-colors xl:hidden shadow-xs"
          >
            <Phone className="size-4" />
          </a>

          {/* Quick Book Trial pill on Mobile & Desktop */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-neon via-emerald-500 to-teal-500 px-3.5 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-black tracking-wider text-white uppercase shadow-[0_4px_16px_rgba(34,197,94,0.3)] hover:scale-105 transition-all"
          >
            <span>Book Trial</span>
            <span className="hidden sm:inline">→</span>
          </Link>

          {/* Mobile Menu Toggle Button (3 lines hamburger) */}
          <button
            className="flex size-9 sm:size-10 items-center justify-center rounded-2xl border border-border/80 bg-surface text-foreground backdrop-blur-md transition-colors hover:border-neon hover:text-neon xl:hidden cursor-pointer shadow-xs"
            aria-label={openMobile ? "Close menu" : "Open menu"}
            aria-expanded={openMobile}
            aria-controls="mobile-navigation"
            onClick={() => setOpenMobile((v) => !v)}
          >
            {openMobile ? <X className="size-5 text-neon" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

    </header>

      {/* Ultra-Responsive Mobile Navigation Drawer — outside header to avoid stacking context trap */}
      <AnimatePresence>
        {openMobile && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex w-full justify-end bg-black/70 backdrop-blur-md xl:hidden"
            onClick={() => setOpenMobile(false)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              id="mobile-navigation"
              className="h-full w-full max-w-[360px] sm:max-w-[400px] bg-surface/98 backdrop-blur-3xl p-5 sm:p-6 shadow-2xl overflow-y-auto flex flex-col justify-between border-l border-border/80"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-border/80 pb-4">
                  <Link to="/" onClick={() => setOpenMobile(false)} className="flex items-center" aria-label="Sports Life Tennis Academy">
                    <div className="size-10 flex items-center justify-center">
                      <AcademyLogo className="h-9 w-auto object-contain" />
                    </div>
                  </Link>
                  <button
                    onClick={() => setOpenMobile(false)}
                    aria-label="Close menu"
                    className="flex size-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-surface-2 hover:text-neon transition-colors cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Quick Touch Contact Action Pills */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2/90 py-2.5 px-3 text-xs font-bold text-foreground hover:border-neon hover:text-neon transition-colors"
                  >
                    <Phone className="size-3.5 text-neon" />
                    <span>Call Coach</span>
                  </a>
                  <a
                    href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
                      "Hi Sports Life Tennis Academy, I want details about coaching batches and free trial."
                    )}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 py-2.5 px-3 text-xs font-bold text-emerald-400 hover:bg-emerald-500/25 transition-colors"
                  >
                    <MessageCircle className="size-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Section Header */}
                <div className="mt-5 flex items-center justify-between px-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  <span>Navigation Menu</span>
                  <span className="text-[10px] text-neon bg-neon/10 px-2 py-0.5 rounded-full">
                    {NAV.length} Sections
                  </span>
                </div>

                {/* All Navigation Items List */}
                <nav className="mt-3">
                  <ul className="flex flex-col gap-1.5">
                    {NAV.map((item) => (
                      <MobileNavItem
                        key={String(item.to)}
                        item={item}
                        currentPath={location.pathname}
                        onNavigate={() => setOpenMobile(false)}
                      />
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Drawer Bottom CTA & Venue Info */}
              <div className="mt-8 border-t border-border/80 pt-5 space-y-3">
                <Link
                  to="/contact"
                  onClick={() => setOpenMobile(false)}
                  className="block w-full rounded-2xl bg-linear-to-r from-neon via-emerald-500 to-teal-500 py-3.5 text-center font-display text-xs font-black uppercase tracking-wider text-white shadow-lg hover:scale-102 transition-transform"
                >
                  Book Free 90-Min Trial →
                </Link>

                <div className="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-muted-foreground text-center">
                  <MapPin className="size-3 text-neon shrink-0" />
                  <span>Roshanara Club · Dhyan Chand · Punjabi Bagh</span>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavItem({
  item,
  currentPath,
  onNavigate,
}: {
  item: any;
  currentPath: string;
  onNavigate: () => void;
}) {
  const hasChildren = "children" in item && Boolean(item.children?.length);
  const isSectionActive: boolean =
    item.to === "/"
      ? currentPath === "/"
      : currentPath.startsWith(item.to) ||
        Boolean(hasChildren && item.children?.some((c: any) => currentPath === c.to));

  const [open, setOpen] = useState<boolean>(isSectionActive);

  if (hasChildren) {
    return (
      <li className="rounded-2xl border border-border/60 bg-surface/60 overflow-hidden transition-colors">
        {/* Category Header Row - Clicking anywhere toggles open/close */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className={`flex w-full items-center justify-between p-3 text-left transition-colors cursor-pointer ${
            isSectionActive ? "bg-neon/10 text-neon font-bold" : "text-foreground hover:bg-surface-2"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-xl bg-surface-2 border border-border/60 text-neon">
              {getItemIcon(item.label)}
            </div>
            <div>
              <div className="text-sm font-bold leading-tight">{item.label}</div>
              <div className="text-[10px] text-muted-foreground font-medium">
                {item.children.length} Pages Available
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neon bg-neon/15 border border-neon/30 px-2 py-0.5 rounded-full">
              {item.children.length}
            </span>
            <ChevronDown
              className={`size-4 text-muted-foreground transition-transform duration-200 ${
                open ? "-rotate-180 text-neon" : ""
              }`}
            />
          </div>
        </button>

        {/* Subpages List */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="divide-y divide-border/40 border-t border-border/60 bg-surface-2/40 overflow-hidden"
            >
              {item.children.map((c: any) => {
                const isChildActive = currentPath === c.to;
                return (
                  <li key={c.to}>
                    <Link
                      to={c.to}
                      onClick={onNavigate}
                      activeOptions={{ exact: true }}
                      className={`group flex items-start gap-3 px-4 py-3 text-xs transition-colors ${
                        isChildActive
                          ? "bg-neon/15 text-neon font-bold"
                          : "text-foreground/85 hover:bg-neon/10 hover:text-neon"
                      }`}
                    >
                      <span
                        className={`mt-1 flex size-2 shrink-0 rounded-full transition-colors ${
                          isChildActive ? "bg-neon" : "bg-neon/30 group-hover:bg-neon"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="font-bold flex items-center justify-between">
                          <span>{c.label}</span>
                          <ChevronRight className="size-3 text-muted-foreground/60 group-hover:text-neon group-hover:translate-x-0.5 transition-all" />
                        </div>
                        {c.description && (
                          <div className="text-[11px] text-muted-foreground mt-0.5 leading-snug line-clamp-1">
                            {c.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  }

  const isActive = item.to === "/" ? currentPath === "/" : currentPath.startsWith(item.to);

  return (
    <li className="rounded-2xl border border-border/60 bg-surface/60 overflow-hidden">
      <Link
        to={item.to}
        onClick={onNavigate}
        activeOptions={{ exact: item.to === "/" }}
        className={`flex items-center justify-between p-3 text-sm font-bold transition-colors ${
          isActive
            ? "bg-neon/15 text-neon font-bold"
            : "text-foreground hover:bg-surface-2 hover:text-neon"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-xl bg-surface-2 border border-border/60 text-neon">
            {getItemIcon(item.label)}
          </div>
          <span>{item.label}</span>
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </Link>
    </li>
  );
}

export default Navbar;
