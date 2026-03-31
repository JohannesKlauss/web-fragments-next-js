import Link from "next/link";

const postContent: Record<string, { title: string; body: string; date: string }> = {
  "hello-world": {
    title: "Hello World",
    body: "Welcome to our blog! This is the very first post demonstrating the Blog micro-frontend. This content is rendered entirely by the Blog app running on port 3001, but it appears seamlessly within the Home shell's layout thanks to web-fragments.",
    date: "2026-03-15",
  },
  "getting-started-with-microfrontends": {
    title: "Getting Started with Micro-Frontends",
    body: "Micro-frontends allow teams to build and deploy independently. Each team owns a vertical slice of the application — from database to UI. Web Fragments takes this further by providing true encapsulation via shadow DOM and isolated JavaScript contexts.",
    date: "2026-03-20",
  },
  "web-fragments-deep-dive": {
    title: "Web Fragments Deep Dive",
    body: "Web Fragments use a technique called 'reframing' to isolate each fragment's JavaScript context. Scripts run in a hidden same-origin iframe, but DOM operations are 'reframed' to execute in the main document's shadow DOM. This prevents collisions while keeping everything on a single origin.",
    date: "2026-03-28",
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postContent[slug];

  if (!post) {
    return (
      <div className="p-8 bg-emerald-50 min-h-full">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 px-3 py-1.5 bg-emerald-200 text-emerald-800 text-xs font-mono rounded inline-block">
            Rendered by: Blog MFE (port 3001)
          </div>
          <h1 className="text-2xl font-bold text-emerald-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-emerald-700 mb-4">
            No blog post found for slug: <code className="bg-emerald-200 px-1 rounded">{slug}</code>
          </p>
          <Link
            href="/blog"
            className="text-emerald-600 underline hover:text-emerald-800"
          >
            Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-emerald-50 min-h-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 px-3 py-1.5 bg-emerald-200 text-emerald-800 text-xs font-mono rounded inline-block">
          Rendered by: Blog MFE (port 3001)
        </div>
        <Link
          href="/blog"
          className="text-sm text-emerald-600 hover:text-emerald-800 mb-4 inline-block"
        >
          &larr; Back to all posts
        </Link>
        <article className="bg-white border border-emerald-200 rounded-lg p-8 mt-4">
          <time className="text-sm text-emerald-600">{post.date}</time>
          <h1 className="text-3xl font-bold text-emerald-900 mt-2 mb-6">
            {post.title}
          </h1>
          <div className="prose text-emerald-800 leading-relaxed text-lg">
            {post.body}
          </div>
        </article>
      </div>
    </div>
  );
}
