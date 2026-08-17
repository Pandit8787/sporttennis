import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";

const galleryImages = [
  "/centre-gallery/whatsapp-20260813-171744-1.jpg",
  "/centre-gallery/whatsapp-20260813-171744-2.jpg",
  "/centre-gallery/whatsapp-20260813-171745-1.jpg",
  "/centre-gallery/whatsapp-20260813-171745-2.jpg",
  "/centre-gallery/punjabi-bagh-club-gallery-1.jpg",
];

export const Route = createFileRoute("/centres/roshanara-club")({
  head: () => ({
    meta: [{ title: "Roshanara Club — Sports Life" }, { property: "og:url", content: "/centres/roshanara-club" }],
    links: [{ rel: "canonical", href: "/centres/roshanara-club" }],
  }),
  component: Roshanara,
});

function Roshanara() {
  return (
    <>
      <PageHero
        eyebrow="Roshanara"
        title="Roshanara Club"
        body="The flagship centre of Sports Life Tennis Academy, where tradition meets excellence and player development is built on world-class coaching and exceptional facilities."
      />

      <Section>
        <SectionHeading
          eyebrow="Flagship centre"
          title="Where Tradition Meets Excellence"
          body="Located in the heart of North Delhi, Roshanara Club is one of the city’s most historic and prestigious sports venues. In 2024, Sports Life began its journey here with a vision to create a player-first environment that combines world-class coaching with exceptional facilities."
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
          eyebrow="World-Class Facilities"
          title="Training across all three major tennis surfaces"
          body="One of the greatest strengths of Roshanara Club is its exceptional tennis infrastructure. The centre provides players with the rare opportunity to train on all three major tennis court surfaces, helping them become more complete and adaptable athletes."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
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
            <div key={surface.title} className="rounded-2xl border border-border bg-background/60 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.04)]">
              <div className="mb-4 text-2xl">🎾</div>
              <h3 className="text-xl font-semibold">{surface.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{surface.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Training across multiple surfaces prepares players for competitions at every level while developing a deeper understanding of the game.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Player Development"
          title="Structured coaching for every stage of the journey"
          body="At Sports Life Tennis Academy, every player follows a structured development pathway designed to improve every aspect of their game."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {[
            "Technical Development",
            "Tactical Awareness",
            "Physical Conditioning",
            "Mental Strength",
            "Match Play & Competition",
            "Long-Term Athlete Development",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-background/60 p-5 text-base font-medium text-foreground/80">
              • {item}
            </div>
          ))}
        </div>

        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Every session is carefully planned to ensure players continue improving while enjoying the learning process in a positive and motivating environment.
        </p>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Facilities" title="Everything players need to grow" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            "4 Professional Synthetic Tennis Courts",
            "2 Professional Clay Courts",
            "3 Grass Courts",
            "Structured Coaching Programs",
            "Experienced Coaching Team",
            "High Performance Training",
            "Weekly Match Play Opportunities",
            "Tournament Preparation",
            "Fitness & Athletic Development",
            "Safe & Positive Learning Environment",
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
          title="A place where confidence, discipline and passion grow together"
          body="Roshanara Club offers far more than excellent tennis courts. It offers an environment where players are encouraged to develop confidence, discipline, resilience and a lifelong love for the game."
        />
        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          By combining one of Delhi’s finest tennis facilities with Sports Life’s player-first coaching philosophy, we create an experience that supports every stage of a player’s journey—from learning the fundamentals to competing at the highest level. Every player who trains at Roshanara Club becomes part of a community that values excellence, continuous learning, teamwork, and personal growth.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Gallery"
          title="Discover the energy of Roshanara Club"
          body="Explore the beauty and energy of our flagship venue through a glimpse of our facilities, coaching sessions, match play, tournaments and academy life."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-3xl border border-border bg-background/60">
              <img src={image} alt={`Roshanara Club gallery ${index + 1}`} loading="lazy" decoding="async" className="h-72 w-full object-contain object-center p-1" />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Find us" title="Roshanara Club" body="Find us on Google Maps" />
        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Roshanara Club location map"
            src="https://maps.google.com/maps?q=DDA%20Roshanara%20Club&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className="h-[480px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-3 text-sm">
          <a href="https://www.google.com/maps/place/DDA+Roshanara+Club/@28.6749747,77.1951509,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd876e3715c9:0xbeb6d948d476bfb0!8m2!3d28.6749747!4d77.1951509!16s%2Fg%2F1td4hhk_!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer noopener" className="text-neon underline">
            Open in Google Maps
          </a>
        </div>
      </Section>

      <CtaBanner
        title="Experience Tennis at Roshanara Club"
        body="Whether your goal is to learn tennis, improve your game, compete professionally, or simply enjoy an active lifestyle, Roshanara Club offers the ideal environment to begin your journey."
      />
    </>
  );
}
