import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";

const galleryImages = [
  "/centre-gallery/whatsapp-20260813-171911.jpg",
  "/centre-gallery/whatsapp-20260813-171912-1.jpg",
  "/centre-gallery/whatsapp-20260813-171912-2.jpg",
  "/centre-gallery/punjabi-bagh-club-gallery-1.jpg",
];

export const Route = createFileRoute("/centres/punjabi-bagh-club")({
  head: () => ({
    meta: [{ title: "Punjabi Bagh Club — Sports Life" }, { property: "og:url", content: "/centres/punjabi-bagh-club" }],
    links: [{ rel: "canonical", href: "/centres/punjabi-bagh-club" }],
  }),
  component: PunjabiBagh,
});

function PunjabiBagh() {
  return (
    <>
      <PageHero
        eyebrow="Punjabi Bagh"
        title="Punjabi Bagh Club"
        body="A premium destination for tennis excellence, designed to make structured player development more accessible across West Delhi."
      />

      <Section>
        <SectionHeading
          eyebrow="West Delhi"
          title="Where Passion Meets Opportunity"
          body="Located in one of West Delhi’s most prestigious clubs, Punjabi Bagh Club offers a premium environment where players of all ages and abilities can experience professional tennis coaching in world-class surroundings."
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
          eyebrow="World-Class Facilities"
          title="Premium courts for complete development"
          body="Punjabi Bagh Club features one of the finest tennis infrastructures in Delhi, offering players the opportunity to train on multiple court surfaces."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "4 Synthetic Courts",
              body: "Designed for consistent ball bounce and competitive play, our synthetic courts provide the ideal environment for technical development, match preparation and high-performance training.",
            },
            {
              title: "6 Clay Courts",
              body: "With six professionally maintained clay courts, players can develop superior movement, endurance, tactical awareness and point construction. Clay court training encourages patience, consistency and strategic thinking.",
            },
          ].map((surface) => (
            <div key={surface.title} className="rounded-2xl border border-border bg-background/60 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.04)]">
              <div className="mb-4 text-2xl">🎾</div>
              <h3 className="text-xl font-semibold">{surface.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{surface.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Training across both synthetic and clay courts prepares players to compete confidently on different tournament surfaces while developing a complete all-round game.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Player Development"
          title="A structured pathway built for long-term improvement"
          body="At Sports Life Tennis Academy, every player follows a structured development pathway designed to maximise long-term improvement."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {[
            "Technical Development",
            "Tactical Understanding",
            "Physical Conditioning",
            "Mental Resilience",
            "Match Play & Competition",
            "Long-Term Athlete Development",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-background/60 p-5 text-base font-medium text-foreground/80">
              • {item}
            </div>
          ))}
        </div>

        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Every training session is designed to ensure continuous improvement while creating a positive, motivating and player-focused learning environment.
        </p>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Adult Tennis" title="It’s never too late to start tennis" />
        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Punjabi Bagh Club is one of our primary centres for adult tennis coaching. Whether you’re a complete beginner, looking to improve your game, or returning to tennis after many years, our Adult Tennis Program provides a welcoming and professional environment where players can learn at their own pace. Beyond improving your tennis skills, the program promotes fitness, mental well-being, confidence and meaningful social connections through sport.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Sunday Match Play"
          title="Compete regularly. Grow faster."
          body="One of the unique features of Punjabi Bagh Club is our Sunday Match Play Program. We believe that players improve by competing regularly, not just by practising."
        />

        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Every Sunday, players are grouped according to their playing level and receive the opportunity to play multiple competitive matches in a structured environment. This initiative helps players build confidence, apply what they learn during training, and prepare for tournaments through real match experience.
        </p>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Facilities" title="Everything you need to grow on and off the court" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            "4 Professional Synthetic Courts",
            "6 Professional Clay Courts",
            "Structured Coaching Programs",
            "Adult Tennis Coaching",
            "Sunday Match Play",
            "Professional Coaching Team",
            "Tournament Preparation",
            "Fitness & Athletic Development",
            "Positive & Safe Learning Environment",
          ].map((facility) => (
            <div key={facility} className="rounded-2xl border border-border bg-background/60 p-4 text-sm text-foreground/75">
              {facility}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A premium environment where passion meets opportunity"
          body="Punjabi Bagh Club combines outstanding tennis facilities with Sports Life’s player-first coaching philosophy to create an exceptional learning experience."
        />
        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          With world-class infrastructure, experienced coaches, structured training programs and a vibrant tennis community, the centre provides players with everything they need to grow both on and off the court. Whether your goal is fitness, recreation or competitive tennis, Punjabi Bagh Club offers an inspiring environment where passion meets opportunity.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Gallery"
          title="Explore the premium atmosphere of Punjabi Bagh Club"
          body="Discover our world-class tennis facilities, coaching sessions, match play, player achievements, tournaments and academy events."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-3xl border border-border bg-background/60">
              <img src={image} alt={`Punjabi Bagh Club gallery ${index + 1}`} loading="lazy" decoding="async" className="h-72 w-full object-contain object-center p-1" />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Find us" title="Punjabi Bagh Club" body="Find us on Google Maps" />
        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Punjabi Bagh Club location map"
            src="https://maps.google.com/maps?q=Sports%20Life%20Tennis%20Academy%20Punjabi%20Bagh%20Club&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className="h-[480px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-3 text-sm">
          <a href="https://www.google.com/maps/place/Sports+Life+Tennis+Academy-+Punjabi+Bagh+Club/@28.6665139,77.1303976,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03e0324dc2bb:0x602b73176a2859bc!8m2!3d28.6665139!4d77.1303976!16s%2Fg%2F11nr0bt2_0?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer noopener" className="text-neon underline">
            Open in Google Maps
          </a>
        </div>
      </Section>

      <CtaBanner
        title="Experience Tennis at Punjabi Bagh Club"
        body="Join Sports Life Tennis Academy at one of Delhi’s premier tennis destinations and become part of a community dedicated to excellence, learning and lifelong player development."
      />
    </>
  );
}
