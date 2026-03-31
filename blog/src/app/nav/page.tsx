import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/blog", label: "All Posts" },
  { href: "/blog/categories", label: "Categories" },
  { href: "/blog/recent", label: "Recent" },
  { href: "/blog/hello-world", label: "Hello World Post" },
  { href: "/blog/posts/featured", label: "Featured (nested)" },
];

export default function BlogNav() {
  return (
    <nav className="flex flex-col gap-1 p-3 bg-indigo-700 rounded-lg text-white text-sm">
      {/* Blog logo — loaded from /_fragment/blog/next.svg (blog's public dir) */}
      <div className="flex items-center gap-2 px-2 mb-1">
        <Image
          src="/_fragment/blog/next.svg"
          alt="Blog next.svg"
          width={60}
          height={12}
          className="invert"
        />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
          Blog Update
        </h3>
      </div>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-2 py-1.5 rounded hover:bg-indigo-600 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
