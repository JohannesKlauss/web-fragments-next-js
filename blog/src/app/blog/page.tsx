import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Welcome to our blog! This is the very first post.",
    date: "2026-03-15",
  },
  {
    slug: "getting-started-with-microfrontends",
    title: "Getting Started with Micro-Frontends",
    excerpt:
      "Learn how to break up your monolith into independently deployable fragments.",
    date: "2026-03-20",
  },
  {
    slug: "web-fragments-deep-dive",
    title: "Web Fragments Deep Dive",
    excerpt:
      "An in-depth look at the web-fragments library and how it enables true encapsulation.",
    date: "2026-03-28",
  },
];

export default function BlogIndex() {
  return (
    <div className="p-8 bg-emerald-50 min-h-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 px-3 py-1.5 bg-emerald-200 text-emerald-800 text-xs font-mono rounded inline-block">
          Rendered by: Blog MFE (port 3001)
        </div>

        {/* Asset resolution proof: this loads /_fragment/blog/next.svg from
            the BLOG app's public/ directory — the Next.js wordmark logo */}
        <div className="bg-white border border-emerald-200 rounded-lg p-4 mb-8 flex items-center gap-4">
          <Image
            src="/_fragment/blog/next.svg"
            alt="Blog next.svg — Next.js wordmark"
            width={120}
            height={25}
            priority
          />
          <div>
            <p className="text-emerald-900 font-semibold text-sm">
              Blog asset: /_fragment/blog/next.svg
            </p>
            <p className="text-emerald-600 text-xs">
              Next.js wordmark served from the Blog MFE&apos;s public/ directory
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-emerald-900 mb-8">Blog Posts</h1>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-emerald-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <time className="text-sm text-emerald-600">{post.date}</time>
              <h2 className="text-xl font-semibold text-emerald-900 mt-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-emerald-700 underline-offset-2 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-emerald-800">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
