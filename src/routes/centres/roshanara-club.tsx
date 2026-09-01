import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion-primitives";

const heroImage = "/centre-gallery/whatsapp-20260813-171744-1.jpg";
const galleryImages = [
  "/centre-gallery/whatsapp-20260813-171744-1.jpg",
  "/centre-gallery/whatsapp-20260813-171744-2.jpg",
  "/centre-gallery/whatsapp-20260813-171745-1.jpg",
  "/centre-gallery/whatsapp-20260813-171745-2.jpg",
  "/centre-gallery/whatsapp-20260813-171844-1.jpg",
];

export const Route = createFileRoute("/centres/roshanara-club")({
  head: () => ({
    meta: [
      { title: "Roshanara Club — 9 Courts (Synthetic, Clay & Grass) | Sports Life" },
      {
        name: "description",
        content:
          "Sports Life Tennis Academy at Roshanara Club, North Delhi. 4 Professional Synthetic Courts, 2 Professional Clay Courts, and 3 Grass Courts.",
      },
      { property: "og:title", content: "Roshanara Club — Sports Life Tennis Academy" },
      { property: "og:url", content: "/centres/roshanara-club" },
    ],
    links: [{ rel: "canonical", href: "/centres/roshanara-club" }],
  }),
  component: Roshanara,
});

function Roshanara() {
  return (
    <>
      <PageHero
        eyebrow="North Delhi · Established 2024"
        title="Roshanara Club"
        body="Located in the heart of North Delhi, Roshanara Club is one of the city's most historic and prestigious sports venues. In 2024, Sports Life began its journey here with a vision to create a player-first environment combining professional coaching with exceptional facilities."
        image={heroImage}
        removeFog
      />

      <Section>
        <SectionHeading
          eyebrow="Flagship Centre"
          title="Where Tradition Meets Excellence"
          body="Located in the heart of North Delhi, Roshanara Club is one of the city’s most historic and prestigious sports venues. In 2024, Sports Life began its journey here with a vision to create a player-first environment that combines professional coaching with exceptional facilities."
        />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            Renowned for its rich sporting heritage and outstanding tennis facilities, the club has been home to generations of passionate athletes and continues to be one of Delhi’s most respected destinations for tennis.
          </p>
          <p>
            Today, Roshanara Club stands as the flagship centre of Sports Life, reflecting our commitment to excellence, professionalism, and long-term player development. Whether you are stepping onto the court for the very first time or preparing for national-level competition, Roshanara Club provides an inspiring environment where players are encouraged to learn, compete, and reach their full potential.
          </p>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Multi-Surface Infrastructure"
          title="Training Across All Three Major Tennis Surfaces"
          body="One of the greatest strengths of Roshanara Club is its exceptional tennis infrastructure. The centre provides players with the rare opportunity to train on all three major tennis court surfaces, helping them become more complete and adaptable athletes."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "4 Synthetic Courts",
              body: "Designed for consistent ball bounce and fast-paced play, our synthetic courts provide the perfect environment for technical training, match preparation, and high-performance development.",
            },
            {
              title: "2 Clay Courts",
              body: "Clay courts help develop movement, endurance, tactical awareness, patience, and point construction. Training on clay allows players to build stronger all-round skills essential for long-term success.",
            },
            {
              title: "3 Grass Courts",
              body: "Natural grass courts offer a unique playing experience and improve footwork, reaction speed, net play, and adaptability to different tournament conditions.",
            },
          ].map((surface) => (
            <div key={surface.title} className="card-elevated rounded-2xl border border-border bg-surface p-6 shadow-md">
              <div className="mb-4 text-2xl">🎾</div>
              <h3 className="text-xl font-bold text-foreground">{surface.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{surface.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Training across multiple surfaces prepares players for competitions at every level while developing a deeper understanding of the game.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Facilities Summary"
          title="Facilities at Roshanara Club"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "4 Synthetic Tennis Courts",
            "2 Clay Courts",
            "3 Grass Courts",
            "Structured Coaching Programs",
            "Experienced Coaching Team",
            "High Performance Training",
            "Weekly Sunday Match Play Opportunities",
            "Tournament Preparation",
            "Fitness & Athletic Development",
          ].map((facility) => (
            <div key={facility} className="rounded-2xl border border-border bg-surface p-4 text-sm font-medium text-foreground/85">
              • {facility}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Visual Highlights"
          title="Roshanara Club Gallery"
          body="A look inside our training sessions, multi-surface courts, and player development in action."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image + index} className="overflow-hidden rounded-3xl border border-border bg-surface aspect-[4/3]">
              <img
                src={image}
                alt={`Roshanara Club tennis court session ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Location" title="Find Us at DDA Roshanara Club" />
        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Roshanara Club location map"
            src="https://www.google.com/maps?q=DDA+Roshanara+Club,+Shakti+Nagar,+Delhi+110007&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </Section>

      
    </>
  );
}
