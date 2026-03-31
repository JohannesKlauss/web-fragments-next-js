import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 px-3 py-1.5 bg-slate-200 text-slate-700 text-xs font-mono rounded inline-block">
          Rendered by: Home Shell (port 3000)
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Welcome to the Home Shell
        </h1>
        <p className="text-slate-600 mb-8 text-lg">
          This is the host application. The sidebar on the left is part of this
          shell, but the &quot;Blog&quot; section in the sidebar is injected by the Blog
          micro-frontend via web-fragments.
        </p>

        {/* Asset resolution proof: this loads /next.svg from the HOME app's
            public/ directory — a white triangle on dark background */}
        <div className="bg-slate-900 rounded-lg p-6 mb-8 flex items-center gap-4">
          <Image
            src="/next.svg"
            alt="Home shell next.svg — triangle"
            width={80}
            height={70}
            priority
          />
          <div>
            <p className="text-white font-semibold">Home asset: /next.svg</p>
            <p className="text-slate-400 text-sm">
              Triangle served from the Home shell&apos;s public/ directory
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            Architecture Overview
          </h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
              <span>
                <strong>Home Shell</strong> (this app) provides the layout,
                sidebar, authentication UI, and routes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
              <span>
                <strong>Blog Nav</strong> (indigo in sidebar) is a web-fragment
                from the Blog MFE
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>
                <strong>Blog Content</strong> (emerald in main area) is rendered
                by the Blog MFE when you navigate to /blog routes
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
