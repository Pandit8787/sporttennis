import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Expand,
  Filter,
  Globe2,
  MapPin,
  Maximize2,
  Play,
  Sparkles,
  Trophy,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";

// Imported local academy gallery images
import academyGallery1 from "@/assets/academy-gallery/abhiney-jofre-porta-20260813.jpg";
import academyGallery2 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.21 PM.jpeg";
import academyGallery3 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.21 PM (1).jpeg";
import academyGallery4 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM.jpeg";
import academyGallery5 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM (1).jpeg";
import academyGallery6 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM (2).jpeg";
import academyGallery7 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.22 PM (3).jpeg";
import academyGallery8 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.23 PM.jpeg";
import academyGallery9 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.23 PM (1).jpeg";
import academyGallery10 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.23 PM (2).jpeg";
import academyGallery11 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.23 PM (3).jpeg";
import academyGallery12 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.24 PM.jpeg";
import academyGallery13 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.24 PM (1).jpeg";
import academyGallery14 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.24 PM (2).jpeg";
import academyGallery15 from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.25 PM.jpeg";

// Imported videos
import video1 from "@/assets/videos/whatsapp-video-1.mp4";
import video2 from "@/assets/videos/whatsapp-video-2.mp4";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Training Sessions, Tournaments & Spain Masterclasses | Sports Life" },
      {
        name: "description",
        content:
          "Explore training moments, tournament action, Spanish masterclasses, and premier tennis facilities at Sports Life Tennis Academy Delhi.",
      },
      { property: "og:title", content: "Sports Life Tennis Academy Gallery" },
      {
        property: "og:description",
        content:
          "Visual moments from daily training squads, Sunday match play, Spain masterclasses, and multi-surface Delhi facilities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

interface GalleryItem {
  id: number;
  img: string;
  title: string;
  location: string;
  category: "Training" | "Tournaments" | "Centres" | "Spain Mentorship";
  tag: string;
}

const GALLERY_COLLECTION: GalleryItem[] = [
  // Spain Mentorship & Global Learning
  {
    id: 1,
    img: "/gallery/abhiney-with-jofre-porta.jpg",
    title: "Mentorship with Legendary Spanish Coach Jofre Porta",
    location: "Mallorca, Spain",
    category: "Spain Mentorship",
    tag: "European Methodology",
  },
  {
    id: 2,
    img: "/gallery/abhiney-at-jc-ferrero-academy.jpg",
    title: "High-Performance Training at JC Ferrero Equelite Academy",
    location: "Villena, Spain",
    category: "Spain Mentorship",
    tag: "Grand Slam Standards",
  },
  {
    id: 3,
    img: "/gallery/abhiney-at-rafa-nadal-tennis-academy.jpg",
    title: "Study Tour at Rafa Nadal Tennis Academy",
    location: "Manacor, Spain",
    category: "Spain Mentorship",
    tag: "Spanish Clay Intensity",
  },
  {
    id: 4,
    img: "/gallery/abhiney-with-karen-khachanov-former-world-number-8.jpg",
    title: "Tour Insights with ATP Star Karen Khachanov (Former World No. 8)",
    location: "ATP Tour Circuit",
    category: "Spain Mentorship",
    tag: "Pro Circuit Exchange",
  },
  {
    id: 5,
    img: "/gallery/abhiney-at-barcelona-tennis-acadmey.jpg",
    title: "Coaching Collaboration at Barcelona Tennis Academy",
    location: "Barcelona, Spain",
    category: "Spain Mentorship",
    tag: "Tactical Exchange",
  },
  {
    id: 6,
    img: "/gallery/abhiney-at-global-agent-tennis-acadmey-madrid.jpg",
    title: "International Player Development at Global Agent Academy",
    location: "Madrid, Spain",
    category: "Spain Mentorship",
    tag: "Global Networks",
  },
  {
    id: 7,
    img: "/gallery/abhiney-at-madrid-open.jpg",
    title: "Observing Pro Matchplay at Mutua Madrid Open",
    location: "Caja Mágica, Madrid",
    category: "Spain Mentorship",
    tag: "ATP Tour Studies",
  },

  // On-Court Training & Player Development
  {
    id: 8,
    img: academyGallery1,
    title: "Junior Squad Footwork & Biomechanical Drill",
    location: "Roshanara Club · North Delhi",
    category: "Training",
    tag: "Footwork Precision",
  },
  {
    id: 9,
    img: academyGallery3,
    title: "High-Intensity Rally Training & Target Consistency",
    location: "Major Dhyan Chand Complex",
    category: "Training",
    tag: "Rally Discipline",
  },
  {
    id: 10,
    img: academyGallery5,
    title: "Serve Mechanics & Kinetic Chain Loading",
    location: "Punjabi Bagh Club",
    category: "Training",
    tag: "Serve Fundamentals",
  },
  {
    id: 11,
    img: academyGallery6,
    title: "Toddlers & Red Ball Agility Development Block",
    location: "Roshanara Club",
    category: "Training",
    tag: "Grassroots Fun",
  },
  {
    id: 12,
    img: academyGallery8,
    title: "Young Athletes Building Racket Head Acceleration",
    location: "Major Dhyan Chand Complex",
    category: "Training",
    tag: "Modern Topspin",
  },
  {
    id: 13,
    img: academyGallery9,
    title: "Individual Technical Correction & 1-on-1 Mentoring",
    location: "Punjabi Bagh Club",
    category: "Training",
    tag: "1-on-1 Focus",
  },
  {
    id: 14,
    img: academyGallery10,
    title: "Evening Squad Rally Pressure & Conditioning",
    location: "Roshanara Club",
    category: "Training",
    tag: "High Energy",
  },
  {
    id: 15,
    img: academyGallery13,
    title: "Junior Athletes Building Court Positioning & Confidence",
    location: "Major Dhyan Chand Complex",
    category: "Training",
    tag: "Court Awareness",
  },

  // Tournaments & Sunday Match Play
  {
    id: 16,
    img: academyGallery4,
    title: "Sunday Match Play League Competitive Match",
    location: "All 3 Delhi Centres",
    category: "Tournaments",
    tag: "Sunday League",
  },
  {
    id: 17,
    img: academyGallery11,
    title: "Level-Based Tournament Tie-Break Shootout",
    location: "Major Dhyan Chand Complex",
    category: "Tournaments",
    tag: "Match Pressure",
  },
  {
    id: 18,
    img: academyGallery14,
    title: "Post-Match Tactical Review with Certified Coaches",
    location: "Punjabi Bagh Club",
    category: "Tournaments",
    tag: "Match Analysis",
  },
  {
    id: 19,
    img: "/centre-gallery/whatsapp-20260813-171844-3.jpg",
    title: "Tournament Medalists & Rising Champions Squad",
    location: "Roshanara Club",
    category: "Tournaments",
    tag: "Medal Moments",
  },

  // Centres & Infrastructure
  {
    id: 20,
    img: "/centre-gallery/whatsapp-20260813-171844-1.jpg",
    title: "Roshanara Club: Historic Multi-Surface Facility (9 Courts)",
    location: "North Delhi · Shakti Nagar",
    category: "Centres",
    tag: "Flagship Venue",
  },
  {
    id: 21,
    img: "/centre-gallery/whatsapp-20260813-171844-2.jpg",
    title: "Major Dhyan Chand National Stadium: 14 Tournament Courts",
    location: "Central Delhi · India Gate",
    category: "Centres",
    tag: "Tournament Hub",
  },
  {
    id: 22,
    img: "/centre-gallery/whatsapp-20260813-171845-1.jpg",
    title: "Punjabi Bagh Club: 4 Floodlit Synthetic Courts",
    location: "West Delhi · Ring Road",
    category: "Centres",
    tag: "Floodlit Courts",
  },
  {
    id: 23,
    img: academyGallery2,
    title: "Court Infrastructure & Tournament Surface Preparation",
    location: "Delhi Centres",
    category: "Centres",
    tag: "Multi-Surface",
  },
  {
    id: 24,
    img: academyGallery7,
    title: "Academy Community & Player Camaraderie Zone",
    location: "Roshanara Club",
    category: "Centres",
    tag: "Player Lounge",
  },
  {
    id: 25,
    img: academyGallery12,
    title: "Pro Synthetic Court Standards & High-Lumen Lighting",
    location: "Punjabi Bagh Club",
    category: "Centres",
    tag: "Evening Play",
  },
  {
    id: 26,
    img: academyGallery15,
    title: "Daily Practice Atmosphere at Delhi's Premier Tennis Hub",
    location: "Sports Life Delhi",
    category: "Centres",
    tag: "Academy Life",
  },
];

const CATEGORIES = [
  { label: "All Moments", value: "All" },
  { label: "On-Court Training", value: "Training" },
  { label: "Tournaments & Match Play", value: "Tournaments" },
  { label: "Centres & Infrastructure", value: "Centres" },
  { label: "Spain & Global Mentorship", value: "Spain Mentorship" },
] as const;

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_COLLECTION
      : GALLERY_COLLECTION.filter((item) => item.category === activeCategory);

  const activeModalItem =
    selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  }, [selectedImageIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImageIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handlePrev, handleNext]);

  return (
    <>
      {/* Dynamic Aesthetic Hero Section */}
      <div className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border/80 bg-linear-to-b from-surface via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />
        <div className="grid-lines absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-neon mb-6">
                <Camera className="size-3.5" /> Visual Journal · Delhi & Spain
              </div>
              <h1 className="text-4xl font-black tracking-tight uppercase sm:text-5xl lg:text-6xl text-foreground">
                Capturing Moments of{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-neon via-emerald-400 to-teal-300">
                  Passion & Excellence
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto font-medium">
                Step inside the daily energy of Sports Life Tennis Academy. From high-octane junior drills and Sunday Match Play clashes across Delhi to international coaching exchanges in Spain.
              </p>
            </Reveal>

            {/* Quick Metrics Bar */}
            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-3xl mx-auto">
                <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl sm:text-3xl font-black text-neon">25+</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                    Curated Frames
                  </p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl sm:text-3xl font-black text-electric">3</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                    Delhi Hubs
                  </p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl sm:text-3xl font-black text-foreground">27</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                    Multi-Surfaces
                  </p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl sm:text-3xl font-black text-neon">Spain</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
                    Masterclasses
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Main Interactive Filter Bar & Photo Grid */}
      <Section>
        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => {
            const count =
              cat.value === "All"
                ? GALLERY_COLLECTION.length
                : GALLERY_COLLECTION.filter((i) => i.category === cat.value).length;
            const isActive = activeCategory === cat.value;

            return (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setSelectedImageIndex(null);
                }}
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-linear-to-r from-neon to-emerald-600 text-white shadow-[0_4px_20px_rgba(34,197,94,0.35)] scale-105"
                    : "bg-surface border border-border/80 text-muted-foreground hover:text-foreground hover:border-neon/40 hover:bg-surface-2"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                    isActive ? "bg-black/30 text-white" : "bg-surface-2 text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 6) * 0.05}>
              <article
                onClick={() => setSelectedImageIndex(index)}
                className="card-elevated group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-border/80 bg-surface shadow-md hover:border-neon/60 hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Top Badge */}
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-neon shadow-sm">
                    {item.tag}
                  </span>

                  {/* Expand Icon Overlay on Hover */}
                  <div className="absolute top-3.5 right-3.5 size-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="size-4" />
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <p className="flex items-center gap-1 text-[11px] font-semibold text-neon">
                      <MapPin className="size-3" /> {item.location}
                    </p>
                    <h3 className="mt-1 text-base sm:text-lg font-bold leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Sub-bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-surface-2/60 border-t border-border/60 text-xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {item.category}
                  </span>
                  <span className="font-display font-bold text-neon group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Preview Frame <Expand className="size-3.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Video Highlights Reel */}
      <Section className="bg-surface/30 border-y border-border/60">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="On-Court Reel"
            title="Video Highlights & Training Intensity"
            body="Experience the rhythm, technical stroke acceleration, and footwork conditioning across our Delhi courts."
          />
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted-foreground">
            <Video className="size-4 text-neon" />
            <span>High-Definition Rally Clips</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              video: video1,
              title: "High-Energy Rally Drills & Footwork",
              venue: "Major Dhyan Chand Complex",
              tag: "Training Intensity",
            },
            {
              video: video2,
              title: "Technical Serve Acceleration & Placement",
              venue: "Roshanara Club",
              tag: "Serve Biomechanics",
            },
            {
              video: "/videos/img_1954.mov",
              title: "Competitive Match Play Points & Volley Exchanges",
              venue: "Punjabi Bagh Club",
              tag: "Match Simulation",
            },
          ].map((vid, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="card-elevated group overflow-hidden rounded-3xl border border-border bg-surface shadow-xl">
                <div className="relative aspect-[9/14] sm:aspect-[4/5] overflow-hidden bg-black">
                  <video
                    src={vid.video}
                    controls
                    loop
                    muted
                    playsInline
                    className="size-full object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-neon">
                    {vid.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                    <MapPin className="size-3 text-neon" /> {vid.venue}
                  </p>
                  <h4 className="mt-1.5 text-base font-bold text-foreground">{vid.title}</h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Multi-Surface Experience Breakdown */}
      <Section>
        <div className="rounded-3xl border border-border/80 bg-surface p-8 sm:p-12 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="eyebrow">Rare Infrastructure in Delhi</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Train on All 3 Major Surfaces Across Delhi
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Most academies are limited to one court type. Sports Life offers complete multi-surface mastery so our junior athletes and adults adapt seamlessly to state, national, and international tournaments.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 pt-2">
                <div className="rounded-2xl border border-border bg-surface-2 p-4">
                  <p className="font-display text-2xl font-black text-neon">14 Courts</p>
                  <p className="text-xs font-bold text-foreground mt-1">Synthetic Hard</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">True bounce & fast pace</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface-2 p-4">
                  <p className="font-display text-2xl font-black text-amber-400">10 Courts</p>
                  <p className="text-xs font-bold text-foreground mt-1">Red Clay</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Endurance & slide movement</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface-2 p-4">
                  <p className="font-display text-2xl font-black text-emerald-400">3 Courts</p>
                  <p className="text-xs font-bold text-foreground mt-1">Natural Grass</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Low skid & quick reactions</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-2/60 border border-border text-center">
              <div className="size-14 rounded-2xl bg-neon/15 text-neon flex items-center justify-center mb-4">
                <Trophy className="size-7" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Experience It Yourself</h4>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed">
                Book a free 90-minute trial session at your nearest centre and experience professional tennis coaching in Delhi.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-emerald-600 transition-colors"
              >
                <span>Book Free Trial</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-3xl border border-white/15 bg-surface/95 overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border/80 px-6 py-4 bg-surface-2/80">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-neon/15 border border-neon/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neon">
                    {activeModalItem.tag}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {selectedImageIndex! + 1} / {filteredItems.length}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="rounded-full p-2 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] max-h-[65vh] overflow-hidden p-2">
                <img
                  src={activeModalItem.img}
                  alt={activeModalItem.title}
                  className="max-h-[62vh] max-w-full object-contain"
                />

                {/* Left/Right Prev/Next Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 size-11 rounded-full bg-black/60 hover:bg-neon text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 size-11 rounded-full bg-black/60 hover:bg-neon text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              {/* Modal Footer Caption */}
              <div className="p-6 bg-surface flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border/80">
                <div>
                  <p className="text-xs font-semibold text-neon flex items-center gap-1.5">
                    <MapPin className="size-3.5" /> {activeModalItem.location}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mt-0.5">
                    {activeModalItem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    to="/contact"
                    className="rounded-full bg-neon px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-emerald-600 transition-colors"
                  >
                    Book Free Trial
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Conversion Banner */}
      <CtaBanner
        title="Be Part of Our Next Championship Frame"
        body="Join our structured training squads across Delhi. Book your free 90-minute trial session and skills assessment today."
      />
    </>
  );
}

export default GalleryPage;
