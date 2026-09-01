import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";

const heroImage = "/centre-gallery/img_8064.jpg";
const galleryImages = [
  "/centre-gallery/img_8064.jpg",
  "/centre-gallery/whatsapp-20260813-171911.jpg",
  "/centre-gallery/whatsapp-20260813-171912-1.jpg",
  "/centre-gallery/whatsapp-20260813-171912-2.jpg",
];

export const Route = createFileRoute("/centres/punjabi-bagh-club")({
  head: () => ({
    meta: [
      { title: "Punjabi Bagh Club — 10 Courts (6 Clay & 4 Synthetic) | Sports Life" },
      {
        name: "description",
        content:
          "Sports Life Tennis Academy at Punjabi Bagh Club, West Delhi. 6 Clay Courts and 4 Synthetic Courts.",
      },
      { property: "og:title", content: "Punjabi Bagh Club — Sports Life Tennis Academy" },
      { property: "og:url", content: "/centres/punjabi-bagh-club" },
    ],
    links: [{ rel: "canonical", href: "/centres/punjabi-bagh-club" }],
  }),
  component: PunjabiBagh,
});

function PunjabiBagh() {
  return (
    <>
      <PageHero
        eyebrow="West Delhi · Ring Road"
        title="Punjabi Bagh Club"
        body="A premier destination for tennis excellence, bringing structured player development and professional coaching to West Delhi."
        image={heroImage}
        removeFog
      />

      <Section>
        <SectionHeading
          eyebrow="West Delhi Centre"
          title="Where Passion Meets Opportunity"
          body="Located in one of West Delhi’s most prestigious clubs, Punjabi Bagh Club offers a dedicated environment where players of all ages and abilities experience professional tennis coaching."
        />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            As Sports Life Tennis Academy continues its journey of expanding quality tennis coaching across Delhi, Punjabi Bagh Club represents another important milestone in our vision of making structured player development more accessible.
          </p>
          <p>
            Whether you are learning tennis for the first time, returning to the game after a break, preparing for competitive tournaments, or simply looking to stay active through sport, Punjabi Bagh Club provides an environment where every player is encouraged to learn, improve and enjoy the game.
          </p>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Facilities"
          title="10 Courts for Complete Development"
          body="Punjabi Bagh Club features 6 clay courts and 4 synthetic courts, offering players the opportunity to train on multiple surfaces."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card-elevated rounded-2xl border border-border bg-surface p-7 shadow-md">
            <div className="mb-4 text-2xl">🎾</div>
            <h3 className="text-xl font-bold text-foreground">6 Clay Courts</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              With six well-maintained clay courts, players develop superior movement, sliding, endurance, tactical awareness and point construction. Clay court training encourages patience, consistency and strategic thinking.
            </p>
          </div>

          <div className="card-elevated rounded-2xl border border-border bg-surface p-7 shadow-md">
            <div className="mb-4 text-2xl">🎾</div>
            <h3 className="text-xl font-bold text-foreground">4 Synthetic Courts</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Designed for consistent ball bounce and competitive play, our synthetic courts provide the ideal environment for technical precision, fast drills, match preparation and performance training.
            </p>
          </div>
        </div>

        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Training across both clay and synthetic surfaces prepares players to compete confidently on different tournament surfaces while developing an all-round game.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Programs & Match Play"
          title="Adult Tennis & Sunday Match Play Hub"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card-elevated p-6 sm:p-7 border border-border bg-surface rounded-2xl">
            <h3 className="text-xl font-bold text-foreground">Adult Tennis Program</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Punjabi Bagh Club is one of our primary centres for adult tennis coaching. Whether you're a complete beginner, improving your game, or returning to tennis, our Adult Tennis Program provides a welcoming and professional environment for fitness, wellness, and skill progression.
            </p>
          </div>

          <div className="card-elevated p-6 sm:p-7 border border-border bg-surface rounded-2xl">
            <h3 className="text-xl font-bold text-foreground">Sunday Match Play</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A core hub for our Sunday Match Play initiative. Players compete in structured, level-appropriate matches to apply what they learn during training and prepare for tournaments through real match experience.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Facilities"
          title="Facilities at Punjabi Bagh Club"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "6 Clay Courts",
            "4 Synthetic Courts",
            "Structured Coaching Programs",
            "Adult Tennis Coaching Batches",
            "Sunday Match Play League",
            "Coaching Team",
            "Tournament Preparation & Mentorship",
          ].map((facility) => (
            <div key={facility} className="rounded-2xl border border-border bg-surface p-4 text-sm font-medium text-foreground/85">
              • {facility}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Gallery"
          title="Punjabi Bagh Club Training Gallery"
          body="Moments from our clay and synthetic court training and Sunday Match Play sessions."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div key={image + index} className="overflow-hidden rounded-3xl border border-border bg-surface aspect-[4/3]">
              <img
                src={image}
                alt={`Punjabi Bagh Club tennis court session ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Location" title="Punjabi Bagh Club, West Delhi" body="Find us on Google Maps" />
        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Punjabi Bagh Club location map"
            src="https://maps.google.com/maps?q=Punjabi%20Bagh%20Club,%20Ring%20Road,%20Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </Section>

      
    </>
  );
}
