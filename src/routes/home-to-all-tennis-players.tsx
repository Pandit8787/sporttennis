import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal, TextReveal } from "@/components/site/motion-primitives";
import { ACADEMY } from "@/lib/site-data";
import { toast } from "sonner";
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  ExternalLink,
  Flame,
  Globe2,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  Home,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/home-to-all-tennis-players")({
  head: () => ({
    meta: [
      {
        title: "Your Tennis Home In Delhi — Sports Life Tennis Academy",
      },
      {
        name: "description",
        content:
          "Coming to Delhi for an ITF, AITA, Fenesta Open or DU sports trials tournament? Sports Life offers courts, hitting partners, practice matches and training support for visiting players.",
      },
      {
        property: "og:title",
        content: "Your Tennis Home In Delhi — Sports Life",
      },
      {
        property: "og:description",
        content:
          "You come to Delhi to compete. We help you prepare. Bring your own coach or partner, get high-quality hitting sessions, match play, and court access across 3 Delhi centres.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/home-to-all-tennis-players" },
    ],
    links: [{ rel: "canonical", href: "/home-to-all-tennis-players" }],
  }),
  component: HomeToAllTennisPlayersPage,
});

const HERO_IMAGES = [
  "/centres/roshanara/roshanara-slide-1.jpg",
  "/centres/major-dhyan-chand/mdcsc-slide-1.jpg",
  "/centres/punjabi-bagh/punjabi-bagh-slide-1.jpg",
];

const CENTRES_DATA = [
  {
    name: "Roshanara Club",
    location: "North Delhi",
    courts: "9 Courts (4 Synthetic, 2 Clay, 3 Grass)",
    description:
      "A heritage sporting landmark with multisurface facilities including rare grass courts and quality synthetic courts.",
    image: "/centres/roshanara/roshanara-slide-1.jpg",
    link: "/centres/roshanara-club",
    badge: "Heritage & Multi-Surface",
  },
  {
    name: "Major Dhyan Chand Sports Complex",
    location: "Ashok Vihar, North-West Delhi",
    courts: "6 Courts (4 Synthetic, 2 Clay)",
    description:
      "State-of-the-art DDA sports complex offering tournament-grade hard courts and clay courts with spacious surroundings.",
    image: "/centres/major-dhyan-chand/mdcsc-slide-1.jpg",
    link: "/centres/major-dhyan-chand-sports-complex",
    badge: "Tournament Grade Hard & Clay",
  },
  {
    name: "Punjabi Bagh Club",
    location: "West Delhi",
    courts: "10 Courts (6 Clay, 4 Synthetic)",
    description:
      "Premier West Delhi tennis hub with floodlit clay and synthetic courts, ideal for evening hitting and match play simulations.",
    image: "/centres/punjabi-bagh/punjabi-bagh-slide-1.jpg",
    link: "/centres/punjabi-bagh-club",
    badge: "Clay & Synthetic Hub",
  },
];

const TOURNAMENTS_LIST = [
  {
    name: "ITF Tournaments",
    sub: "ITF Juniors, M15, M25, W15, W35 & World Tennis Tour events in Delhi NCR",
    icon: Trophy,
  },
  {
    name: "AITA Tournaments",
    sub: "National Series, Championship Series (CS7/CS3), Talent Series & Men's/Women's events",
    icon: Zap,
  },
  {
    name: "Fenesta Open National Tennis Championship",
    sub: "India's premier national hard court championship at DLTA / Delhi",
    icon: Flame,
  },
  {
    name: "DU Sports Quota Trials",
    sub: "Delhi University sports quota admissions trials and competitive assessments",
    icon: GraduationCap,
  },
  {
    name: "University & College Competitions",
    sub: "All India Inter-University, Khelo India University Games & collegiate fixtures",
    icon: Target,
  },
  {
    name: "Junior & State Tournaments",
    sub: "Under-12, 14, 16 & 18 ranking tournaments, Delhi State championships and open events",
    icon: Users,
  },
];

const PREPARATION_PILLARS = [
  {
    title: "Bring Your Own Coach",
    eyebrow: "Pillar 01",
    tagline: "Uninterrupted coaching continuity",
    desc: "Already travelling with your coach? Perfect. You can continue working with your own coach while using the Sports Life training environment. Your coach already understands your game, your strengths, your weaknesses and what you need to work on before competition. We don't want to replace that. We want to support it.",
    icon: Users,
    gradient: "from-emerald-500/20 to-teal-500/5",
    borderGlow: "hover:border-emerald-500/40",
  },
  {
    title: "Need a Practice Partner?",
    eyebrow: "Pillar 02",
    tagline: "Matched by age, UTR & playing level",
    desc: "Travelling without your regular practice partner? We can help. Based on your age, level and requirements, Sports Life can help connect you with suitable players or arrange a practice partner when possible. The aim is simple: Get you on court and get you ready to compete.",
    icon: Swords,
    gradient: "from-blue-500/20 to-cyan-500/5",
    borderGlow: "hover:border-blue-500/40",
  },
  {
    title: "Need a Hitting Session?",
    eyebrow: "Pillar 03",
    tagline: "Rhythm, timing & intensity",
    desc: "Sometimes you don't need a full coaching session. You simply need someone to hit with. If that's what you need, Sports Life can help arrange a hitting session according to your requirements and availability.",
    icon: Target,
    gradient: "from-amber-500/20 to-orange-500/5",
    borderGlow: "hover:border-amber-500/40",
  },
  {
    title: "Need Match Practice?",
    eyebrow: "Pillar 04",
    tagline: "Competitive points & set simulations",
    desc: "Before a tournament, players often benefit from playing competitive points and practice matches rather than only doing regular drills. If you need match practice, Sports Life can help you find suitable practice opportunities so you can get into match rhythm before competition.",
    icon: Trophy,
    gradient: "from-purple-500/20 to-pink-500/5",
    borderGlow: "hover:border-purple-500/40",
  },
  {
    title: "Need Something Else?",
    eyebrow: "Pillar 05",
    tagline: "Personalized according to your needs",
    desc: "Every player prepares differently. You may need a hitting session. You may need match practice. You may need additional coaching. You may need fitness or movement work. Or you may have a completely different requirement. Tell us what you need. We'll see how Sports Life can help you prepare. The objective isn't to sell you a fixed package. The objective is to support your preparation.",
    icon: Sparkles,
    gradient: "from-rose-500/20 to-red-500/5",
    borderGlow: "hover:border-rose-500/40",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Tell Us About Your Tournament",
    desc: "Share your tournament name, competitive category, travel dates, and how long you'll be in Delhi.",
    icon: Calendar,
  },
  {
    num: "02",
    title: "Tell Us What You Need",
    desc: "Whether it's a place to practise with your own coach, a practice partner, a hitting session, match practice, or additional support.",
    icon: Compass,
  },
  {
    num: "03",
    title: "We'll Help You Prepare",
    desc: "Our team will understand your requirements and help you explore the available options across our 3 Delhi centres.",
    icon: HeartHandshake,
  },
  {
    num: "04",
    title: "Focus on Your Tennis",
    desc: "Once your preparation is organised, you can focus on what matters most: competing and performing at your best.",
    icon: Trophy,
  },
];

function HomeToAllTennisPlayersPage() {
  const [playerName, setPlayerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [tournament, setTournament] = useState("");
  const [dates, setDates] = useState("");
  const [preferredCentre, setPreferredCentre] = useState("Any / Nearest to Hotel or Tournament");
  const [requirements, setRequirements] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const TARGET_EMAIL = "abhiney@sportslifetennisacademy.com";

  const toggleReq = (req: string) => {
    setRequirements((prev) =>
      prev.includes(req) ? prev.filter((r) => r !== req) : [...prev, req],
    );
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 10000);

    const reqText = requirements.length > 0 ? requirements.join(", ") : "Not specified yet";

    try {
      const payload = {
        _subject: `New Tournament Preparation Request: ${playerName || "Player"} (${tournament || "Delhi"})`,
        _template: "table",
        _captcha: "false",
        _replyto: email || undefined,
        "Player Name": playerName,
        "Phone / WhatsApp Number": phone,
        "Email Address": email || "Not provided",
        "Tournament / Category": tournament,
        "Dates in Delhi / Arrival": dates,
        "Preferred Centre": preferredCentre,
        "Support Needed": reqText,
        "Additional Notes / Player Level": notes || "None",
        "Submitted At (IST)": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      };

      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Tournament Preparation Request Sent!", {
          description: `Your details have been emailed directly to ${TARGET_EMAIL}. Our team will contact you shortly.`,
        });
      } else {
        throw new Error("Online submission was not acknowledged");
      }
    } catch (err: unknown) {
      console.warn("Direct submission notice:", err);
      // Fallback: direct mailto trigger so the enquiry is never lost
      const mailtoSubject = encodeURIComponent(
        `Tournament Preparation Request: ${playerName || "Player"} — ${tournament || "Delhi"}`,
      );
      const mailtoBody = encodeURIComponent(
        `New Tournament Preparation Request — Your tennis home in Delhi

🎾 Player Name: ${playerName || "Not provided"}
📞 Contact / WhatsApp: ${phone || "Not provided"}
📧 Email: ${email || "Not provided"}
🏆 Tournament: ${tournament || "Delhi Tournament"}
📅 Dates in Delhi / Arrival: ${dates || "Upcoming"}
📍 Preferred Centre: ${preferredCentre}
🎯 Support Needed: ${reqText}
📝 Notes / Player Level: ${notes || "None"}

---
Sent via Sports Life Tennis Academy website`,
      );
      window.location.href = `mailto:${TARGET_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
      toast.info("Opening email client...", {
        description: `Preparing your details to email ${TARGET_EMAIL}`,
      });
      setSubmitted(true);
    } finally {
      window.clearTimeout(timeoutId);
      setSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const reqText = requirements.length > 0 ? requirements.join(", ") : "Not specified yet";
    const text = `*New Tournament Preparation Request — Your tennis home in Delhi*
🎾 *Player Name:* ${playerName || "Not provided"}
📞 *Contact:* ${phone || "Not provided"}${email ? `\n📧 *Email:* ${email}` : ""}
🏆 *Tournament:* ${tournament || "Delhi Tournament"}
📅 *Dates in Delhi:* ${dates || "Flexible / Upcoming"}
📍 *Preferred Centre:* ${preferredCentre}
🎯 *Support Needed:* ${reqText}
📝 *Notes / Requirements:* ${notes || "None"}

_Enquired via Sports Life Tennis Academy: Your Tennis Home In Delhi initiative_`;

    const cleanNumber = ACADEMY.whatsapp.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-neon selection:text-black">
      {/* Hero Section */}
      <PageHero
        images={HERO_IMAGES}
        title="Your Tennis Home In Delhi"
        body="Coming to Delhi for a tennis tournament? Sports Life is here to help you prepare. Court access, practice partners, hitting sessions, and match play across 25 courts in 3 Delhi centres."
      />

      {/* Floating Quick Action Bar */}
      <div className="relative z-20 mx-auto -mt-6 max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neon/30 bg-surface/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="flex size-3 rounded-full bg-neon animate-pulse" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neon">
                Visiting Player Support
              </p>
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                25 Courts across 3 Premier Delhi Centres · Open for Tournament Players
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href="#preparation-form"
              className="inline-flex items-center gap-2 rounded-full bg-neon px-5 py-2.5 text-xs font-black uppercase text-black hover:bg-neon/90 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <Send className="size-3.5" />
              <span>Share Tournament Dates</span>
            </a>
            <a
              href={`https://wa.me/${ACADEMY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                "Hi Sports Life team, I am travelling to Delhi for a tennis tournament and would like to know about preparation support and court practice.",
              )}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface-2 px-4 py-2.5 text-xs font-bold text-foreground hover:border-neon hover:text-neon transition-all"
            >
              <MessageCircle className="size-3.5 text-green-500" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <Section className="border-y border-border/60 bg-surface-2/30 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold text-amber-500 uppercase tracking-wider">
              <span>The Tournament Challenge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-foreground">
              The Problem: Tournament Weeks Are Different
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              A tournament week is different from a normal training week. You may be travelling to Delhi specifically for competition and have limited time to prepare before your first match.
            </p>
            <div className="rounded-2xl border border-border/80 bg-surface/70 p-5 shadow-inner space-y-2">
              <p className="text-xs uppercase tracking-wider font-extrabold text-neon">
                The Real Challenge
              </p>
              <p className="text-sm sm:text-base font-semibold text-foreground">
                “The challenge is not necessarily finding a tennis court. The challenge is finding the right preparation environment around your tournament. That's the gap Sports Life wants to help fill.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Practice Court Scarcity",
                  text: "You need somewhere reliable to practise without having to scramble or make repeated phone calls.",
                },
                {
                  title: "Training With Your Coach",
                  text: "You may want to continue training with the coach who has travelled with you on an uninterrupted court.",
                },
                {
                  title: "Regular Practice Partner",
                  text: "You may already have a regular practice partner and simply need quality court slots to execute your routine.",
                },
                {
                  title: "Need Someone to Hit With",
                  text: "Travelling solo? Finding a quality hitting partner in an unfamiliar city is often unpredictable and stressful.",
                },
                {
                  title: "Need Pre-Tournament Match Play",
                  text: "You may want to play a practice match or competitive tiebreaks before your first official tournament match begins.",
                },
                {
                  title: "Following Your Match Routine",
                  text: "You simply need a reliable, professional tennis environment where you can get on court and follow your preparation routine.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/70 bg-surface/80 p-5 shadow-xs transition-all hover:border-neon/40 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="flex size-2 rounded-full bg-neon" />
                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* A Place to Prepare — The Core Solution */}
      <Section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-bold text-neon uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>A Place to Prepare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
            You Come to Delhi to Compete.{" "}
            <span className="text-neon block sm:inline">We Help You Prepare.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Sports Life's <strong className="text-foreground">Your Tennis Home in Delhi</strong> initiative is designed to support players travelling to Delhi for tournaments.
          </p>
          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3 pt-4">
            <div className="rounded-2xl border border-border/80 bg-surface p-4 text-center">
              <span className="block text-2xl font-black text-neon">01</span>
              <p className="mt-1 text-xs font-bold text-foreground">Don't Change How You Train</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Maintain your familiar routines</p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-surface p-4 text-center">
              <span className="block text-2xl font-black text-neon">02</span>
              <p className="mt-1 text-xs font-bold text-foreground">Bring Your Own Coach</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Full support, zero interference</p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-surface p-4 text-center">
              <span className="block text-2xl font-black text-neon">03</span>
              <p className="mt-1 text-xs font-bold text-foreground">Bring Your Own Partner</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Or let us arrange one for you</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5 Preparation Pillars */}
      <Section className="bg-surface-2/40 border-y border-border/60 py-16 sm:py-24">
        <SectionHeading
          eyebrow="TAILORED SUPPORT"
          title="Everything You Need Before Match Day"
          body="Whether you need court access with your personal coach, a practice partner at your UTR level, or high-tempo match play, we adapt to your requirements."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PREPARATION_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-surface/90 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${pillar.borderGlow} ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
              >
                {/* Background ambient glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-linear-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-neon/10 px-3 py-1 font-mono text-[11px] font-bold text-neon">
                      {pillar.eyebrow}
                    </span>
                    <div className="grid size-11 place-items-center rounded-2xl bg-surface-2 border border-border group-hover:border-neon/40 group-hover:bg-neon/10 transition-colors">
                      <Icon className="size-5 text-neon" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-foreground group-hover:text-neon transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-neon/90 uppercase tracking-wider">
                      {pillar.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-border/50">
                  <a
                    href="#preparation-form"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-neon transition-colors"
                  >
                    <span>Request this support</span>
                    <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* More Than Just Court Access */}
      <Section className="py-16 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-neon/30 bg-linear-to-br from-surface to-surface-2 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute -right-20 -top-20 size-80 rounded-full bg-neon/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block rounded-full bg-neon/15 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-neon">
              Preparation Psychology
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              More Than Just Court Access
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Preparing for a tournament is about more than getting on a court. It is about arriving at your first match feeling prepared:
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Getting your timing back after travelling to Delhi",
                "Getting used to the playing conditions, altitude & court pace",
                "Getting enough match intensity before competition",
                "Maintaining your normal training routine while you're away from home",
                "Arriving at your first official match feeling confident & calm",
                "Knowing: “I have somewhere reliable to train while I'm in Delhi.”",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="grid size-6 shrink-0 place-items-center rounded-full bg-neon/20 text-neon mt-0.5">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground/90 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-bold text-neon sm:text-base">
              That's what we want Sports Life to provide: a dependable home base throughout your tournament stay.
            </p>
          </div>
        </div>
      </Section>

      {/* Who Can Use This Initiative */}
      <Section className="border-t border-border/60 bg-surface-2/30 py-16 sm:py-24">
        <SectionHeading
          eyebrow="ELIGIBILITY & TOURNAMENTS"
          title="Who Can Use This Initiative?"
          body="Designed for competitive tennis players, touring athletes, juniors, collegiate contenders, and academy visitors travelling to Delhi."
          align="left"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOURNAMENTS_LIST.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-start gap-4 rounded-2xl border border-border/70 bg-surface p-5 transition-all hover:border-neon/40 hover:bg-surface-2 shadow-xs"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-neon/10 text-neon border border-neon/20">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{item.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-neon/30 bg-neon/5 p-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-foreground/90 font-medium">
            <strong className="text-neon">Travelling with coach, partner, or solo?</strong> Sports Life helps you explore your preparation options in Delhi before you land.
          </p>
          <a
            href="#preparation-form"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-neon hover:underline"
          >
            <span>Plan your training slots</span>
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </Section>

      {/* Sports Life Across Delhi (3 Centres) */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="PREMIER VENUES"
          title="Sports Life Across Delhi"
          body="Sports Life currently operates across three premier centres in Delhi. Depending on your tournament venue, hotel location, training requirements and court surface, our team identifies the most suitable option."
          align="left"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {CENTRES_DATA.map((centre) => (
            <div
              key={centre.name}
              className="group overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-lg transition-all duration-300 hover:border-neon hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={centre.image}
                    alt={centre.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-neon border border-neon/30">
                    {centre.badge}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                      <MapPin className="size-3.5 text-neon" />
                      {centre.location}
                    </p>
                    <h3 className="text-lg font-black text-white">{centre.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="rounded-xl bg-surface-2 p-3 border border-border/50">
                    <p className="text-[11px] uppercase tracking-wider font-extrabold text-neon">
                      Court Facilities
                    </p>
                    <p className="text-xs font-semibold text-foreground mt-0.5">{centre.courts}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {centre.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={centre.link}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 py-2.5 text-xs font-bold text-foreground hover:border-neon hover:text-neon hover:bg-neon/10 transition-colors"
                >
                  <span>Explore Centre Details</span>
                  <ExternalLink className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works (4 Steps) */}
      <Section className="border-t border-border/60 bg-surface-2/30 py-16 sm:py-24">
        <SectionHeading
          eyebrow="EASY 4-STEP PROCESS"
          title="How It Works"
          body="Organising your tournament training in Delhi is seamless and hassle-free."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-3xl border border-border/80 bg-surface p-6 sm:p-7 shadow-sm transition-all hover:border-neon hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-neon">{step.num}</span>
                    <div className="grid size-10 place-items-center rounded-xl bg-neon/10 text-neon">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Interactive Preparation Enquiry Form */}
      <Section id="preparation-form" className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-neon/40 bg-surface p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neon/15 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-neon">
                <MessageCircle className="size-3.5" />
                <span>Get In Touch With Sports Life</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground">
                Coming to Delhi for Your Next Tournament?
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Tell us your tournament dates and preparation requirements. Our team will get back to you with court availability, hitting partner options, and scheduling.
              </p>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-neon/50 bg-neon/10 p-8 sm:p-12 text-center space-y-6">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-neon/20 text-neon shadow-lg">
                  <CheckCircle2 className="size-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                    Preparation Request Sent!
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-foreground">{playerName || "Player"}</span>. Your tournament preparation details have been sent directly to{" "}
                    <span className="font-bold text-neon">{TARGET_EMAIL}</span>. Our team will review court and hitting partner availability and get back to you shortly.
                  </p>
                </div>

                <div className="rounded-xl border border-border/70 bg-surface-2/90 p-4 max-w-md mx-auto text-left text-xs space-y-1.5 text-muted-foreground">
                  <p><strong className="text-foreground">Player:</strong> {playerName}</p>
                  <p><strong className="text-foreground">Tournament:</strong> {tournament}</p>
                  <p><strong className="text-foreground">Dates in Delhi:</strong> {dates}</p>
                  <p><strong className="text-foreground">Preferred Centre:</strong> {preferredCentre}</p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppSubmit()}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-500/20 px-6 py-3 text-xs font-black uppercase text-emerald-400 hover:bg-emerald-500/30 transition-all cursor-pointer"
                  >
                    <MessageCircle className="size-4 text-emerald-400" />
                    <span>Also Send on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setPlayerName("");
                      setPhone("");
                      setEmail("");
                      setTournament("");
                      setDates("");
                      setRequirements([]);
                      setNotes("");
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-6 py-3 text-xs font-bold text-foreground hover:border-neon hover:text-neon transition-all cursor-pointer"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="mt-8 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Player Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter player's name"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Tournament Name / Category *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fenesta Open, ITF Junior J60, AITA NS, DU Trials"
                      value={tournament}
                      onChange={(e) => setTournament(e.target.value)}
                      className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Dates in Delhi / Arrival Date *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 10th - 16th October (Arriving 8th)"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="player.parent@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Preferred Centre in Delhi
                    </label>
                    <select
                      value={preferredCentre}
                      onChange={(e) => setPreferredCentre(e.target.value)}
                      className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground focus:border-neon focus:outline-hidden cursor-pointer"
                    >
                      <option value="Any / Nearest to Hotel or Tournament">
                        Any / Nearest to Hotel or Tournament (Recommended)
                      </option>
                      <option value="Roshanara Club (North Delhi)">
                        Roshanara Club (North Delhi · Synthetic, Clay & Grass)
                      </option>
                      <option value="Major Dhyan Chand Sports Complex (Ashok Vihar)">
                        Major Dhyan Chand Sports Complex (Ashok Vihar · Hard & Clay)
                      </option>
                      <option value="Punjabi Bagh Club (West Delhi)">
                        Punjabi Bagh Club (West Delhi · Clay & Synthetic)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    What Do You Need Support With? (Select all that apply)
                  </label>
                  <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Court Booking for Training with Own Coach",
                      "Practice Partner (Age & Level Matched)",
                      "High-Tempo Hitting Session",
                      "Pre-Tournament Match Practice / Sets",
                      "Fitness & Movement Conditioning",
                      "Racket Stringing & Equipment Support",
                    ].map((req) => {
                      const isSelected = requirements.includes(req);
                      return (
                        <button
                          type="button"
                          key={req}
                          onClick={() => toggleReq(req)}
                          className={`flex items-center gap-2.5 rounded-xl border p-3 text-left text-xs font-semibold transition-all cursor-pointer ${isSelected
                            ? "border-neon bg-neon/15 text-neon"
                            : "border-border bg-surface-2 text-foreground/80 hover:border-border/80"
                            }`}
                        >
                          <div
                            className={`size-4 rounded-sm border flex items-center justify-center shrink-0 ${isSelected ? "border-neon bg-neon text-black" : "border-muted-foreground"
                              }`}
                          >
                            {isSelected && <CheckCircle2 className="size-3.5 stroke-[3]" />}
                          </div>
                          <span>{req}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Additional Notes / Player Level (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about player's age, UTR/AITA ranking, preferred court timings (morning/evening), or any coach details..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-neon px-7 py-3.5 text-xs font-black uppercase text-black hover:bg-neon/90 hover:scale-105 active:scale-95 disabled:opacity-60 transition-all shadow-xl cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="size-4" />
                          <span>Send Request via Email</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleWhatsAppSubmit()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-6 py-3.5 text-xs font-black uppercase text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <MessageCircle className="size-4 text-emerald-400" />
                      <span>Send on WhatsApp</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Or call directly:</span>
                    <a
                      href="tel:9266579159"
                      className="font-bold text-neon hover:underline"
                    >
                      +91 92665 79159
                    </a>
                    <span>/</span>
                    <a
                      href="tel:8130514603"
                      className="font-bold text-neon hover:underline"
                    >
                      +91 81305 14603
                    </a>
                  </div>
                </div>

                <div className="text-center sm:text-left text-[11px] text-muted-foreground/80 flex items-center justify-center sm:justify-start gap-1.5 pt-1">
                  <ShieldCheck className="size-3.5 text-neon" />
                  <span>Enquiries are sent directly to <strong className="text-foreground">{TARGET_EMAIL}</strong>.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Final Closing Statement & Quote */}
      <Section className="border-t border-border/60 py-16 sm:py-24 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="text-4xl">🎾</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            Your Tennis Home in Delhi
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Coming to Delhi for a tournament should be about tennis. You shouldn't have to spend your valuable preparation time figuring everything out from scratch.
          </p>
          <p className="text-base sm:text-lg text-foreground font-semibold">
            Bring your coach. Bring your practice partner. Or come to us and tell us what you need. We'll do our best to help you prepare.
          </p>
          <div className="pt-4">
            <p className="text-xl sm:text-2xl font-black text-neon tracking-wide">
              Come to Delhi to compete. Come to Sports Life to prepare.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/du-sports-quota-guide-tennis"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-bold text-foreground hover:border-neon hover:text-neon transition-colors"
            >
              <GraduationCap className="size-4 text-neon" />
              <span>DU Sports Quota Guide</span>
            </Link>
            <Link
              to="/initiatives/sunday-match-play"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-bold text-foreground hover:border-neon hover:text-neon transition-colors"
            >
              <Trophy className="size-4 text-neon" />
              <span>Sunday Match Play League</span>
            </Link>
            <Link
              to="/centres"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-bold text-foreground hover:border-neon hover:text-neon transition-colors"
            >
              <MapPin className="size-4 text-neon" />
              <span>All 3 Delhi Centres</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
