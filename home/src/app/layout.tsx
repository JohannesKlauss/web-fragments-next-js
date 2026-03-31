import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WebFragmentsInit from "./web-fragments-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Shell",
  description: "Host shell application with web-fragments micro-frontends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex">
        <WebFragmentsInit />
        {/* ── Sidebar (from Home Shell) ── */}
        <aside className="w-64 shrink-0 bg-slate-800 text-white flex flex-col min-h-screen">
          {/* Auth / User Info */}
          <div className="bg-slate-900 p-4 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold">
                JD
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold truncate">John Doe</div>
                <div className="text-xs text-slate-400 truncate">
                  john@example.com
                </div>
              </div>
            </div>
          </div>

          {/* Shell Navigation */}
          <nav className="flex flex-col gap-1 p-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 px-2">
              Main
            </span>
            <a
              href="/"
              className="px-2 py-1.5 rounded text-sm hover:bg-slate-700 transition-colors"
            >
              Home
            </a>
            <a
              href="/account"
              className="px-2 py-1.5 rounded text-sm hover:bg-slate-700 transition-colors text-slate-300"
            >
              Account
            </a>
            <a
              href="/profile"
              className="px-2 py-1.5 rounded text-sm hover:bg-slate-700 transition-colors text-slate-300"
            >
              Profile
            </a>
            <a
              href="/notifications"
              className="px-2 py-1.5 rounded text-sm hover:bg-slate-700 transition-colors text-slate-300"
            >
              Notifications
            </a>
            <a
              href="/settings"
              className="px-2 py-1.5 rounded text-sm hover:bg-slate-700 transition-colors text-slate-300"
            >
              Settings
            </a>
          </nav>

          {/* Divider */}
          <div className="mx-3 border-t border-slate-700" />

          {/* Blog Nav Fragment (from Blog MFE) */}
          <div className="p-3 flex-1">
            <web-fragment fragment-id="blog-nav" src="/nav" />
          </div>

          {/* Shell badge */}
          <div className="p-3 border-t border-slate-700">
            <div className="px-2 py-1 bg-slate-700 text-slate-400 text-xs font-mono rounded text-center">
              Shell: Home App (port 3000)
            </div>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 bg-gray-50 min-h-screen overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
