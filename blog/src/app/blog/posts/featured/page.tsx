import Link from "next/link";

export default function FeaturedPage() {
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
        <h1 className="text-3xl font-bold text-emerald-900 mt-4 mb-6">
          Featured Posts
        </h1>
        <p className="text-emerald-700">
          This page lives at <code className="bg-emerald-200 px-1 rounded">/blog/posts/featured</code> —
          a nested route proving the shell&apos;s optional catch-all correctly delegates
          arbitrarily deep paths to the Blog MFE.
        </p>
      </div>
    </div>
  );
}
