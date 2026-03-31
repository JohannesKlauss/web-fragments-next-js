import Link from "next/link";

const categories = [
  { name: "Engineering", count: 12 },
  { name: "Design", count: 8 },
  { name: "Product", count: 5 },
  { name: "Micro-Frontends", count: 3 },
  { name: "DevOps", count: 7 },
];

export default function CategoriesPage() {
  return (
    <div className="p-8 bg-emerald-50 min-h-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 px-3 py-1.5 bg-emerald-200 text-emerald-800 text-xs font-mono rounded inline-block">
          Rendered by: Blog MFE (port 3001)
        </div>
        <h1 className="text-3xl font-bold text-emerald-900 mb-8">Categories</h1>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/blog"
              className="bg-white border border-emerald-200 rounded-lg p-5 hover:shadow-md transition-shadow block"
            >
              <h2 className="text-lg font-semibold text-emerald-900">
                {cat.name}
              </h2>
              <p className="text-sm text-emerald-600 mt-1">
                {cat.count} posts
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
