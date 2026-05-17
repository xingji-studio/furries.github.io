import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const host = process.env.HOST || '127.0.0.1'
const port = Number(process.env.PORT || 5173)

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
}

function safePath(urlPath) {
  const normalized = decodeURIComponent(urlPath.split('?')[0])
  const relative = normalized === '/' ? '/index.html' : normalized
  const filePath = path.resolve(rootDir, `.${relative}`)
  if (!filePath.startsWith(rootDir)) {
    return null
  }
  return filePath
}

const server = http.createServer((req, res) => {
  const filePath = safePath(req.url || '/')
  if (!filePath) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(error.code === 'ENOENT' ? 404 : 500)
      res.end(error.code === 'ENOENT' ? 'Not Found' : 'Server Error')
      return
    }

    const ext = path.extname(filePath).toLowerCase()
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream'
    })
    res.end(data)
  })
})

server.listen(port, host, () => {
  console.log(`Dev server running at http://${host}:${port}`)
})
