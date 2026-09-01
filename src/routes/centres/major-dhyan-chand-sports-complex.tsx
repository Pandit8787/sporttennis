import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";

const heroImage = "/centre-gallery/whatsapp-20260813-171844-2.jpg";
const galleryImages = [
  "/centre-gallery/whatsapp-20260813-171844-2.jpg",
  "/centre-gallery/whatsapp-20260813-171844-3.jpg",
  "/centre-gallery/whatsapp-20260813-171845-1.jpg",
  "/centre-gallery/whatsapp-20260813-171845-2.jpg",
];

export const Route = createFileRoute("/centres/major-dhyan-chand-sports-complex")({
  head: () => ({
    meta: [
      { title: "Major Dhyan Chand Sports Complex — 6 Courts (Synthetic & Clay) | Sports Life" },
      {
        name: "description",
        content:
          "Sports Life Tennis Academy at Major Dhyan Chand Sports Complex, Ashok Vihar. 4 Professional Synthetic Courts and 2 Clay Courts.",
      },
      { property: "og:title", content: "Major Dhyan Chand Sports Complex — Sports Life Tennis Academy" },
      { property: "og:url", content: "/centres/major-dhyan-chand-sports-complex" },
    ],
    links: [{ rel: "canonical", href: "/centres/major-dhyan-chand-sports-complex" }],
  }),
  component: MDCSC,
});

function MDCSC() {
  return (
    <>
      <PageHero
        eyebrow="Ashok Vihar · Expansion 2026"
        title="Major Dhyan Chand Sports Complex"
        body="In 2026, Sports Life Tennis Academy expanded to the Major Dhyan Chand Sports Complex with the vision of providing aspiring players access to professional coaching in a modern sporting environment."
        image={heroImage}
        removeFog
      />

      <Section>
        <SectionHeading
          eyebrow="Structured Player Development"
          title="Major Dhyan Chand Sports Complex"
          body="In 2026, Sports Life Tennis Academy expanded to the Major Dhyan Chand Sports Complex with the vision of providing aspiring players access to professional coaching in a modern sporting environment. Today, the centre serves as a hub for structured player development, combining professional coaching, and a player-first philosophy."
        />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            The Major Dhyan Chand Sports Complex offers excellent tennis infrastructure with 4
            synthetic courts and 2 clay courts, allowing players to train on multiple
            court surfaces and develop a complete all-round game.
          </p>
          <p>
            Whether you're beginning your tennis journey or preparing for competitive tournaments,
            Major Dhyan Chand Sports Complex provides the perfect setting to learn, improve and
            achieve your goals through structured player pathways and dedicated mentorship.
          </p>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Court Infrastructure"
          title="Training Across Multiple Surfaces"
          body="4 professional synthetic courts and 2 clay courts allowing players to train on multiple surfaces."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card-elevated rounded-2xl border border-border bg-surface p-7 shadow-md">
            <div className="mb-4 text-2xl">🎾</div>
            <h3 className="text-xl font-bold text-foreground">4 Synthetic Courts</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Designed for consistent ball bounce and competitive play, the synthetic courts provide an excellent environment for technical development, fast drills, match preparation, and high-performance training.
            </p>
          </div>

          <div className="card-elevated rounded-2xl border border-border bg-surface p-7 shadow-md">
            <div className="mb-4 text-2xl">🎾</div>
            <h3 className="text-xl font-bold text-foreground">2 Clay Courts</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Clay courts help players improve movement, endurance, tactical awareness, patience, and point construction. Training on clay develops resilience and prepares players for varied tournament conditions.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Facilities"
          title="Facilities at Major Dhyan Chand Complex"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "4 Professional Synthetic Courts",
            "2 Professional Clay Courts",
            "Structured Coaching Programs",
            "Professional Coaching Team",
            "Sunday Match Play Opportunities",
            "Tournament Preparation & Player Pathways",
          ].map((facility) => (
            <div key={facility} className="rounded-2xl border border-border bg-surface p-4 text-sm font-medium text-foreground/85">
              • {facility}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Gallery"
          title="On-Court Action at Major Dhyan Chand"
          body="Moments from our coaching batches, drills, and player development."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div key={image + index} className="overflow-hidden rounded-3xl border border-border bg-surface aspect-[4/3]">
              <img
                src={image}
                alt={`Major Dhyan Chand tennis session ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Location" title="Major Dhyan Chand Sports Complex" body="Find us on Google Maps" />
        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Major Dhyan Chand location map"
            src="https://maps.google.com/maps?q=Major%20Dhyanchand%20Sports%20Complex,%20Ashok%20Vihar,%20Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </Section>

      
    </>
  );
}
