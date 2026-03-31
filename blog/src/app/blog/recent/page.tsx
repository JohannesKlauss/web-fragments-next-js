import Link from "next/link";

const recentPosts = [
  {
    slug: "web-fragments-deep-dive",
    title: "Web Fragments Deep Dive",
    date: "2026-03-28",
    readTime: "8 min",
  },
  {
    slug: "getting-started-with-microfrontends",
    title: "Getting Started with Micro-Frontends",
    date: "2026-03-20",
    readTime: "5 min",
  },
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-03-15",
    readTime: "2 min",
  },
];

export default function RecentPage() {
  return (
    <div className="p-8 bg-emerald-50 min-h-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 px-3 py-1.5 bg-emerald-200 text-emerald-800 text-xs font-mono rounded inline-block">
          Rendered by: Blog MFE (port 3001)
        </div>
        <h1 className="text-3xl font-bold text-emerald-900 mb-8">
          Recent Posts
        </h1>
        <div className="flex flex-col gap-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-center justify-between bg-white border border-emerald-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div>
                <h2 className="text-lg font-semibold text-emerald-900">
                  {post.title}
                </h2>
                <time className="text-sm text-emerald-600">{post.date}</time>
              </div>
              <span className="text-xs text-emerald-500 bg-emerald-100 px-2 py-1 rounded">
                {post.readTime}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
