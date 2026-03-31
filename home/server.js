import express from 'express'
import next from 'next'
import { FragmentGateway } from 'web-fragments/gateway'
import { getNodeMiddleware } from 'web-fragments/gateway/node'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const gateway = new FragmentGateway({
  piercingStyles: `<style id="fragment-piercing-styles" type="text/css">
    web-fragment-host[data-piercing="true"] {
      position: absolute;
      z-index: 1;
    }
  </style>`,
})

// Sidebar nav — unbound fragment (has src="/nav" in the shell layout)
gateway.registerFragment({
  fragmentId: 'blog-nav',
  routePatterns: ['/_fragment/blog/:_*', '/nav'],
  endpoint: 'http://localhost:3001',
  onSsrFetchError: async () => ({
    response: new Response('<p style="color:red;padding:8px">Blog nav unavailable</p>', {
      headers: { 'content-type': 'text/html' },
    }),
    overrideResponse: false,
  }),
})

// Main blog content — bound fragment (shares window.location with shell)
gateway.registerFragment({
  fragmentId: 'blog',
  routePatterns: ['/_fragment/blog/:_*', '/blog', '/blog/:_*'],
  endpoint: 'http://localhost:3001',
  onSsrFetchError: async () => ({
    response: new Response(
      '<p style="color:red;padding:16px;font-size:18px">Blog fragment unavailable — is port 3001 running?</p>',
      { headers: { 'content-type': 'text/html' } },
    ),
    overrideResponse: false,
  }),
})

app.prepare().then(() => {
  const server = express()

  // Workaround: Node.js fetch() auto-decompresses gzip/br but the gateway
  // copies the original content-encoding header → ERR_CONTENT_DECODING_FAILED.
  if (dev) {
    server.use((req, res, next) => {
      const origWriteHead = res.writeHead
      res.writeHead = function patchedWriteHead(statusCode, ...rest) {
        const fragmentId = res.getHeader('x-web-fragment-id')
        if (fragmentId && fragmentId !== '<app-shell>') {
          res.removeHeader('content-encoding')
        }
        return origWriteHead.call(this, statusCode, ...rest)
      }
      next()
    })
  }

  server.use(getNodeMiddleware(gateway, { mode: dev ? 'development' : 'production' }))
  server.all(/(.*)/, (req, res) => handle(req, res))

  const port = process.env.PORT || 3000
  server.listen(port, () => {
    console.log(`> Home shell ready on http://localhost:${port}`)
  })
})
