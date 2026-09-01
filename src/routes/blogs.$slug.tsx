import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BLOGS } from "@/lib/site-data";
import { Section } from "@/components/site/sections";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = BLOGS.find((b) => b.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article unavailable — Sports Life Tennis Academy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Sports Life Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blogs/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blogs/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            articleSection: post.category,
            author: { "@type": "Organization", name: "Sports Life Tennis Academy" },
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPostPage,
});

function PostNotFound() {
  return (
    <Section className="pt-40">
      <h1 className="text-5xl">Article not found</h1>
      <p className="mt-4 text-muted-foreground">This piece may have been moved or renamed.</p>
      <Link to="/blogs" className="mt-8 inline-block text-neon underline underline-offset-4">
        Back to the journal
      </Link>
    </Section>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = BLOGS.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative px-5 pt-36 pb-12 lg:px-8 lg:pt-48">
          <div className="grid-lines absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-3xl">
            <Link
              to="/blogs"
              className="font-display text-[11px] tracking-[0.2em] text-neon uppercase hover:underline"
            >
              ← {post.category}
            </Link>
            <h1 className="mt-6 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">{post.title}</h1>
            <p className="mt-6 text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {post.readTime} read
            </p>
          </div>
        </header>

        <div className="px-5 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="border-l-2 border-neon pl-6 font-display text-xl leading-snug lg:text-2xl">
              {post.excerpt}
            </p>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {post.body.map((p: string) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Section>
        <h2 className="text-3xl">Keep reading</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {related.map((b) => (
            <Link
              key={b.slug}
              to="/blogs/$slug"
              params={{ slug: b.slug }}
              className="card-elevated block p-7"
            >
              <span className="font-display text-[10px] tracking-[0.2em] text-neon uppercase">
                {b.category}
              </span>
              <h3 className="mt-4 text-lg leading-tight">{b.title}</h3>
            </Link>
          ))}
        </div>
      </Section>

      
    </>
  );
}
