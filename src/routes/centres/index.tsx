import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/sections";
import { CENTRES } from "@/lib/site-data";

export const Route = createFileRoute("/centres/")({
  head: () => ({
    meta: [{ title: "Our Centres — Sports Life" }, { property: "og:url", content: "/centres" }],
    links: [{ rel: "canonical", href: "/centres" }],
  }),
  component: CentresPage,
});

function CentresPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Centres"
        title="Building the Future of Indian Tennis Across Delhi"
        body="At Sports Life Tennis Academy, every centre follows the same coaching philosophy, structured player development pathway, and commitment to excellence. Choose the location that's most convenient for you and become part of the Sports Life family."
        image={undefined}
      />

      <Section className="pt-4">
        <div className="space-y-10">
          {CENTRES.map((centre) => (
            <article key={centre.name} className="overflow-hidden rounded-[28px] border border-border bg-surface/80 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_1.7fr]">
                <div className="h-72 lg:h-full">
                  <img
                    src={centre.photo}
                    alt={`${centre.name} tennis centre`}
                                      className="h-full w-full object-contain object-center p-1"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    🎾 {centre.name}
                  </span>
                  <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">{centre.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{centre.location}</p>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/80">{centre.description}</p>
                  <div className="mt-7">
                    <Link
                      to={`/centres/${centre.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-neon/40 hover:text-neon"
                    >
                      Explore {centre.name}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
