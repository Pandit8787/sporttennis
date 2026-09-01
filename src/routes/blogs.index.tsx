import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BLOGS, BLOG_CATEGORIES } from "@/lib/site-data";
import { Reveal } from "@/components/site/motion-primitives";
import { PageHero, Section } from "@/components/site/sections";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Tennis Blog — Training Tips, Nutrition & Technique" },
      {
        name: "description",
        content:
          "Coaching articles from Sports Life Tennis Academy: footwork drills, tournament nutrition, injury prevention, technique breakdowns and event updates.",
      },
      { property: "og:title", content: "Sports Life Tennis Journal" },
      {
        property: "og:description",
        content:
          "Training tips, nutrition, fitness and technique articles written by our coaching staff.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOGS.filter(
      (b) =>
        (category === "All" || b.category === category) &&
        (!q || b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Coaching notes, published"
        body="Drills, fuelling plans and technique breakdowns written by the coaches who run the sessions."
      />

      <Section>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 font-display text-[11px] tracking-[0.14em] uppercase transition-all ${
                  category === c
                    ? "bg-neon text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="lg:w-72">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <input
              id="blog-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="w-full rounded-full border border-input bg-surface/60 px-5 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-neon/60 focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 3) * 0.06}>
              <Link
                to="/blogs/$slug"
                params={{ slug: b.slug }}
                className="card-elevated flex h-full flex-col p-7"
              >
                <span className="font-display text-[10px] tracking-[0.2em] text-neon uppercase">
                  {b.category}
                </span>
                <h2 className="mt-4 text-xl leading-tight">{b.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {b.excerpt}
                </p>
                <p className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">
                  {new Date(b.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {b.readTime} read
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            No articles match that search yet. Try another keyword.
          </p>
        )}
      </Section>

      
    </>
  );
}
