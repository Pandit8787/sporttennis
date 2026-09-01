import { createFileRoute } from "@tanstack/react-router";
import courtsImg from "@/assets/courts.jpg";
import trainingImg from "@/assets/academy-gallery/WhatsApp Image 2026-08-07 at 8.21.21 PM.jpeg";
import gymImg from "@/assets/gym.jpg";
const shuttleImg =
  "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1920&q=80";
import { FACILITIES } from "@/lib/site-data";
import { Reveal } from "@/components/site/motion-primitives";
import { PageHero, Section, SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Nine Wooden Courts, Gym & Recovery Zone" },
      {
        name: "description",
        content:
          "Tour Sports Life Tennis Academy: 25 courts across multiple surfaces (synthetic, clay, grass), structured player development and support for match play and tournaments.",
      },
      { property: "og:title", content: "Sports Life Facilities — Courts, Gym, Recovery" },
      {
        property: "og:description",
        content:
          "Nine wooden courts with 1,200 lux lighting, a performance gym and a full recovery zone.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/facilities" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

const SHOWCASE = [
  {
    img: courtsImg,
    title: "Indoor wooden courts",
    body: "Nine sprung maple courts with BWF-approved mats and zero-drift airflow.",
  },
  {
    img: gymImg,
    title: "Performance gym",
    body: "Badminton-specific strength programming: sleds, plyo boxes and cable rigs.",
  },
  {
    img: trainingImg,
    title: "Coaching floor",
    body: "Six athletes per coach, with live correction on every rally.",
  },
  {
    img: shuttleImg,
    title: "Pro shop & stringing",
    body: "Same-day stringing between 20 and 32 lbs plus a demo racket library.",
  },
];

function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="A tennis environment built around development"
        body="Every centre is designed to support technical training, match play, fitness and long-term player growth."
        image={gymImg}
      />

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {SHOWCASE.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <figure className="group relative overflow-hidden rounded-3xl">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-[300px] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110 lg:h-[420px]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[image:var(--gradient-fade)] p-7 pt-24">
                  <h2 className="text-2xl">{s.title}</h2>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">{s.body}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Every space" title="What's inside the building" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <article className="card-elevated h-full p-7">
                <span className="rounded-full border border-border px-3 py-1 text-[10px] tracking-[0.16em] text-neon uppercase">
                  {f.tag}
                </span>
                <h3 className="mt-5 text-xl">{f.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      
    </>
  );
}
