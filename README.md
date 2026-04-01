# Next.js Multi-Zone with Web Fragments

A micro-frontend demo using [web-fragments](https://github.com/nicolo-ribaudo/web-fragments) to compose two independent Next.js 16 apps into a single unified UI.

## Architecture

| App | Port | Role |
|-----|------|------|
| **home** | 3000 | Shell app — runs a custom Express gateway that serves the main layout and injects fragments from the blog app |
| **blog** | 3001 | Blog micro-frontend — a standalone Next.js app whose pages and navigation are embedded into the shell via `<web-fragment>` elements |
| **account** | 5173 | Account micro-frontend — a standalone Sveltekit template app whose pages and navigation are embedded into the shell via `<web-fragment>` elements |

The home app's Express gateway (`home/server.js`) proxies requests to the blog app on port 3001 and injects the response into the shell. On the client side, the `web-fragments` library handles hydration and encapsulation of embedded fragments.

## Prerequisites

- Node.js 18+
- npm

## Getting Started

Install dependencies for both apps:

```bash
cd blog && npm install
cd ../home && npm install
```

Start both apps (each in its own terminal):

```bash
# Terminal 1 — Blog (must start first)
cd blog
npm run dev

# Terminal 2 — Account
cd account
npm run dev

# Terminal 3 — Home shell
cd home
npm run dev
```

Open **http://localhost:3000** to see the composed app.

> The blog app is also accessible standalone at http://localhost:3001.
> The account app is also accessible standalone at http://localhost:5173.

## Graceful Degradation

If the blog app on port 3001 is not running, the shell still loads — fragment areas display fallback error messages instead of crashing.
