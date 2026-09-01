import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { CENTRES, STATS } from "@/lib/site-data";
import { Reveal, Counter } from "@/components/site/motion-primitives";
import { MapPin, Trophy } from "lucide-react";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-1.jpg";

export const Route = createFileRoute("/centres/")({
  head: () => ({
    meta: [
      { title: "Tennis Centres Across Delhi — 25 Courts | Sports Life" },
      {
        name: "description",
        content:
          "Explore Sports Life Tennis Academy centres: Roshanara Club (North Delhi), Major Dhyan Chand Complex (Ashok Vihar) & Punjabi Bagh Club (West Delhi). 25 multi-surface courts.",
      },
      { property: "og:title", content: "Our Centres — Sports Life Tennis Academy" },
      {
        property: "og:description",
        content:
          "3 Premier centres across Delhi with 12 synthetic, 10 clay, and 3 grass courts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/centres" },
    ],
    links: [{ rel: "canonical", href: "/centres" }],
  }),
  component: CentresPage,
});

function CentresPage() {
  const centresDetailed = [
    {
      slug: "roshanara-club",
      name: "Roshanara Club",
      area: "North Delhi · Shakti Nagar",
      courts: "4 Synthetic · 2 Clay · 3 Grass Courts (9 Total)",
      summary:
        "Located in the heart of North Delhi, Roshanara Club is one of the city's most historic and prestigious sports venues. In 2024, Sports Life began its journey here with a vision to create a player-first environment combining professional coaching with multi-surface training.",
      image: "/centre-gallery/whatsapp-20260813-171744-1.jpg",
      tag: "Flagship Founding Centre",
    },
    {
      slug: "major-dhyan-chand-sports-complex",
      name: "Major Dhyan Chand Sports Complex",
      area: "Ashok Vihar · North-West Delhi",
      courts: "4 Synthetic · 2 Clay Courts (6 Total)",
      summary:
        "Expanded in 2026 to provide aspiring players access to professional coaching in a modern sporting environment. A dedicated hub for structured player development with 4 synthetic and 2 clay courts.",
      image: "/centre-gallery/whatsapp-20260813-171844-2.jpg",
      tag: "Development Hub",
    },
    {
      slug: "punjabi-bagh-club",
      name: "Punjabi Bagh Club",
      area: "West Delhi · Ring Road",
      courts: "6 Clay · 4 Synthetic Courts (10 Total)",
      summary:
        "Professional tennis coaching and competitive match-play in West Delhi. Features 6 clay and 4 synthetic courts with vibrant junior, adult, and Sunday Match Play sessions.",
      image: "/centre-gallery/img_8064.jpg",
      tag: "West Delhi Centre",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Centres"
        title="25 Courts Across 3 Delhi Centres"
        body="Train across all three major surfaces—Synthetic, Clay, and Grass—with certified coaching and a player-first philosophy."
        image={heroImage}
        removeFog
      />

      <Section>
        <SectionHeading
          eyebrow="Delhi Network"
          title="Premier Tennis Centres in Delhi"
          body="Providing athletes with structured coaching and multi-surface training environments across North, West, and Central Delhi."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {centresDetailed.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <article className="card-elevated group flex flex-col justify-between h-full overflow-hidden border border-border bg-surface rounded-3xl shadow-lg hover:border-neon/50 transition-all">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-neon px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      {c.tag}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-semibold text-neon flex items-center gap-1">
                        <MapPin className="size-3" /> {c.area}
                      </p>
                      <h3 className="text-xl font-bold mt-0.5">{c.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-surface-2 px-3 py-1.5 text-xs font-bold text-foreground border border-border/60">
                      <Trophy className="size-3.5 text-neon" />
                      <span>{c.courts}</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {c.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      to={`/centres/${c.slug}` as any}
                      className="font-display text-xs font-bold uppercase tracking-wider text-neon hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore Centre</span>
                      <span>→</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="rounded-full bg-neon/10 hover:bg-neon hover:text-white px-3.5 py-1.5 text-xs font-semibold text-neon transition-colors"
                    >
                      Book Trial
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats Summary */}
      <Section className="bg-surface/30">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon">3</p>
            <p className="mt-2 text-sm font-semibold text-foreground">Premier Centres</p>
            <p className="text-xs text-muted-foreground mt-1">Roshanara, Dhyan Chand & Punjabi Bagh</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon">25</p>
            <p className="mt-2 text-sm font-semibold text-foreground">Tennis Courts</p>
            <p className="text-xs text-muted-foreground mt-1">12 Synthetic · 10 Clay · 3 Grass</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon">300+</p>
            <p className="mt-2 text-sm font-semibold text-foreground">Players Monthly</p>
            <p className="text-xs text-muted-foreground mt-1">Training across all Delhi hubs</p>
          </div>
          <div className="card-elevated p-6 text-center">
            <p className="font-display text-4xl font-extrabold text-neon">26+</p>
            <p className="mt-2 text-sm font-semibold text-foreground">Dedicated Coaches</p>
            <p className="text-xs text-muted-foreground mt-1">Certified NIS, PTR & ITF mentors</p>
          </div>
        </div>
      </Section>

      
    </>
  );
}
