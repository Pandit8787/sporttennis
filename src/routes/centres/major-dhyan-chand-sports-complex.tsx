import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, CtaBanner } from "@/components/site/sections";

const galleryImages = [
  "/centre-gallery/whatsapp-20260813-171844-1.jpg",
  "/centre-gallery/whatsapp-20260813-171844-2.jpg",
  "/centre-gallery/whatsapp-20260813-171844-3.jpg",
  "/centre-gallery/whatsapp-20260813-171845-1.jpg",
  "/centre-gallery/whatsapp-20260813-171845-2.jpg",
  "/centre-gallery/whatsapp-20260813-171845-3.jpg",
];

export const Route = createFileRoute("/centres/major-dhyan-chand-sports-complex")({
  head: () => ({
    meta: [{ title: "Major Dhyan Chand Sports Complex — Sports Life" }, { property: "og:url", content: "/centres/major-dhyan-chand-sports-complex" }],
    links: [{ rel: "canonical", href: "/centres/major-dhyan-chand-sports-complex" }],
  }),
  component: MDCSC,
});

function MDCSC() {
  return (
    <>
      <PageHero
        eyebrow="Major Dhyan Chand"
        title="Major Dhyan Chand Sports Complex"
        body="A modern centre for player development, built to inspire growth through quality infrastructure, professional coaching and a player-first environment."
      />

      <Section>
        <SectionHeading
          eyebrow="Ashok Vihar"
          title="Where Champions Are Built"
          body="Located in Ashok Vihar, the Major Dhyan Chand Sports Complex is one of the capital’s premier sports facilities, offering an exceptional environment for athletes across multiple disciplines. Named after the legendary hockey icon Major Dhyan Chand, the complex represents excellence, dedication and the pursuit of sporting success."
        />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            In 2026, Sports Life Tennis Academy expanded to the Major Dhyan Chand Sports Complex with the vision of providing aspiring players access to world-class coaching in a modern sporting environment. Today, the centre serves as a hub for structured player development, combining professional coaching, quality infrastructure, and a player-first philosophy.
          </p>
          <p>
            Whether you're beginning your tennis journey or preparing for competitive tournaments, Major Dhyan Chand Sports Complex provides the perfect setting to learn, improve and achieve your goals.
          </p>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Professional Facilities"
          title="Training on multiple surfaces for complete development"
          body="The Major Dhyan Chand Sports Complex offers excellent tennis infrastructure with 4 professional synthetic courts and 2 clay courts, allowing players to train on multiple court surfaces and develop a complete all-round game."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "4 Synthetic Courts",
              body: "Designed for consistent ball bounce and competitive play, the synthetic courts provide an excellent environment for technical development, match preparation, and high-performance training.",
            },
            {
              title: "2 Clay Courts",
              body: "Clay courts help players improve movement, endurance, tactical awareness, patience, and point construction. Training on clay develops resilience and prepares players for a variety of tournament conditions.",
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
          By practising on both synthetic and clay courts, players become more adaptable and better equipped to compete on different surfaces throughout their tennis journey.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Player Development"
          title="A structured path for long-term growth"
          body="Every player at Sports Life follows a structured development pathway designed to maximise long-term growth."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {[
            "Technical Development",
            "Tactical Understanding",
            "Physical Conditioning",
            "Mental Resilience",
            "Match Play",
            "Long-Term Athlete Development",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-background/60 p-5 text-base font-medium text-foreground/80">
              • {item}
            </div>
          ))}
        </div>

        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Every training session is carefully planned to ensure continuous improvement while maintaining a positive, disciplined and motivating learning environment.
        </p>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Facilities" title="Quality infrastructure for serious training" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            "4 Professional Synthetic Courts",
            "2 Professional Clay Courts",
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
          title="Modern infrastructure. Professional coaching. Real player growth."
          body="Major Dhyan Chand Sports Complex combines modern sports infrastructure with Sports Life’s player-first coaching philosophy to create an environment where players can thrive."
        />
        <p className="mt-8 text-base leading-relaxed text-foreground/75">
          Training on multiple court surfaces, learning from experienced coaches, and following a structured development pathway helps players build strong technical skills, tactical awareness, physical fitness, and the confidence to compete at every level. Our objective is not simply to teach tennis, but to develop disciplined, resilient, and confident athletes who enjoy the game and continuously strive for excellence.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Gallery"
          title="A look inside the training environment"
          body="Explore our synthetic and clay courts, coaching sessions, player development programs, tournaments, and academy events through a glimpse of the centre in motion."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-3xl border border-border bg-background/60">
              <img src={image} alt={`Major Dhyan Chand Sports Complex gallery ${index + 1}`} loading="lazy" decoding="async" className="h-72 w-full object-contain object-center p-1" />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Find us" title="Major Dhyan Chand" body="Find us on Google Maps" />
        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Major Dhyan Chand location map"
            src="https://maps.google.com/maps?q=Major%20Dhyanchand%20Sports%20Complex&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className="h-[480px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-3 text-sm">
          <a href="https://www.google.com/maps/place/Major+Dhyanchand+Sports+Complex/@28.6841167,77.1683533,17z/data=!3m1!4b1!4m6!3m5!1s0x390d026a30000001:0x1b2f4dde9ee645ca!8m2!3d28.6841167!4d77.1683533!16s%2Fg%2F11b75k9tqq?hl=en_GB&entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer noopener" className="text-neon underline">
            Open in Google Maps
          </a>
        </div>
      </Section>

      <CtaBanner
        title="Experience Tennis at Major Dhyan Chand Sports Complex"
        body="Join Sports Life Tennis Academy at one of Delhi’s leading sports complexes and train in an environment dedicated to excellence, learning, and long-term player development."
      />
    </>
  );
}
