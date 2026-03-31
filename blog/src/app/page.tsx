import Link from "next/link";

export default function BlogRoot() {
  return (
    <div className="flex flex-1 items-center justify-center bg-emerald-50 p-8">
      <div className="text-center">
        <div className="mb-4 px-3 py-1.5 bg-emerald-200 text-emerald-800 text-xs font-mono rounded inline-block">
          Blog MFE — standalone root (port 3001)
        </div>
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">Blog App</h1>
        <p className="text-emerald-700 mb-6">
          This is the blog micro-frontend running standalone.
          In production, this app is embedded into the Home shell via web-fragments.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
          >
            View Blog Posts
          </Link>
          <Link
            href="/nav"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            View Nav Fragment
          </Link>
        </div>
      </div>
    </div>
  );
}
