import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Expand,
  Maximize2,
  Trophy,
  Video,
  X,
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

// Static videos
const video1 = "/videos/whatsapp-video-1.mp4";
const video2 = "/videos/whatsapp-video-2.mp4";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Training Sessions, Tournaments & Spain Masterclasses | Sports Life" },
      {
        name: "description",
        content:
          "Explore training moments, tournament action, Spanish masterclasses, and tennis facilities at Sports Life Tennis Academy Delhi.",
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
  category: "Training" | "Tournaments" | "Centres" | "Spain Mentorship";
}

const GALLERY_COLLECTION: GalleryItem[] = [
  // Spain Mentorship & Global Learning
  { id: 1, img: "/founder-gallery/abhiney-with-jofre-porta.jpg", category: "Spain Mentorship" },
  { id: 2, img: "/founder-gallery/abhiney-at-jc-ferrero-academy.jpg", category: "Spain Mentorship" },
  { id: 3, img: "/founder-gallery/abhiney-at-rafa-nadal-tennis-academy.jpg", category: "Spain Mentorship" },
  { id: 4, img: "/founder-gallery/abhiney-with-karen-khachanov-former-world-number-8.jpg", category: "Spain Mentorship" },
  { id: 5, img: "/founder-gallery/abhiney-at-barcelona-tennis-acadmey.jpg", category: "Spain Mentorship" },
  { id: 6, img: "/founder-gallery/abhiney-at-global-agent-tennis-acadmey-madrid.jpg", category: "Spain Mentorship" },
  { id: 7, img: "/founder-gallery/abhiney-at-madrid-open.jpg", category: "Spain Mentorship" },

  // On-Court Training & Player Development
  { id: 8, img: academyGallery1, category: "Training" },
  { id: 9, img: academyGallery3, category: "Training" },
  { id: 10, img: academyGallery5, category: "Training" },
  { id: 11, img: academyGallery6, category: "Training" },
  { id: 12, img: academyGallery8, category: "Training" },
  { id: 13, img: academyGallery9, category: "Training" },
  { id: 14, img: academyGallery10, category: "Training" },
  { id: 15, img: academyGallery13, category: "Training" },

  // Tournaments & Sunday Match Play
  { id: 16, img: academyGallery4, category: "Tournaments" },
  { id: 17, img: academyGallery11, category: "Tournaments" },
  { id: 18, img: academyGallery14, category: "Tournaments" },
  { id: 19, img: "/centre-gallery/whatsapp-20260813-171844-3.jpg", category: "Tournaments" },
  { id: 20, img: "/centre-gallery/img_8064.jpg", category: "Tournaments" },

  // Centres & Infrastructure
  { id: 21, img: "/centre-gallery/whatsapp-20260813-171844-1.jpg", category: "Centres" },
  { id: 22, img: "/centre-gallery/whatsapp-20260813-171844-2.jpg", category: "Centres" },
  { id: 23, img: "/centre-gallery/whatsapp-20260813-171744-1.jpg", category: "Centres" },
  { id: 24, img: "/centre-gallery/whatsapp-20260813-171845-1.jpg", category: "Centres" },
  { id: 25, img: academyGallery2, category: "Centres" },
  { id: 26, img: academyGallery7, category: "Centres" },
  { id: 27, img: academyGallery12, category: "Centres" },
  { id: 28, img: academyGallery15, category: "Centres" },
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
      {/* Hero Section — Banner Sized Image (Below Navbar) */}
      <div className="relative w-full overflow-hidden mt-[68px] sm:mt-[76px] lg:mt-[80px] h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[400px] sm:min-h-[500px] border-b border-border/80 bg-neutral-950">
        <img
          src={academyGallery14}
          alt="Sports Life Tennis Academy Team & Juniors"
          className="absolute inset-0 size-full object-cover object-[center_56%]"
          loading="eager"
        />
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

        {/* Gallery Cards Grid (Captions removed from photos as requested) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 6) * 0.05}>
              <article
                onClick={() => setSelectedImageIndex(index)}
                className="card-elevated group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-border/80 bg-surface shadow-md hover:border-neon/60 hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-2">
                  <img
                    src={item.img}
                    alt="Sports Life Tennis Moment"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Expand Icon Overlay on Hover */}
                  <div className="absolute top-3.5 right-3.5 size-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="size-4 text-neon" />
                  </div>
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
            },
            {
              video: video2,
              title: "Technical Serve Acceleration & Placement",
              venue: "Roshanara Club",
            },
            {
              video: "/videos/img_1954.mp4",
              title: "Competitive Match Play Points & Volley Exchanges",
              venue: "Punjabi Bagh Club",
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
                  >
                    <source src={vid.video} type="video/mp4" />
                  </video>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-neon">{vid.venue}</p>
                  <h4 className="mt-1 text-base font-bold text-foreground">{vid.title}</h4>
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
                Sports Life offers multi-surface training so our junior athletes and adults adapt seamlessly to state, national, and international tournaments.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 pt-2">
                <div className="rounded-2xl border border-border bg-surface-2 p-4">
                  <p className="font-display text-2xl font-black text-neon">12 Courts</p>
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
                Book a free trial session at your nearest centre and experience professional tennis coaching in Delhi.
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
                <span className="text-xs font-semibold text-muted-foreground">
                  {selectedImageIndex! + 1} / {filteredItems.length}
                </span>

                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="rounded-full p-2 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] max-h-[70vh] overflow-hidden p-2">
                <img
                  src={activeModalItem.img}
                  alt="Sports Life Gallery Frame"
                  className="max-h-[68vh] max-w-full object-contain"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Conversion Banner */}
      
    </>
  );
}

export default GalleryPage;
