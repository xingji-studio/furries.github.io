import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')

const filesToCopy = [
  'index.html',
  'logo.png',
  'logo_black.png',
  'logo_white.png',
  'src/app.js',
  'src/styles.css'
]

fs.rmSync(distDir, { recursive: true, force: true })
fs.mkdirSync(path.join(distDir, 'src'), { recursive: true })

for (const relativePath of filesToCopy) {
  const sourcePath = path.join(rootDir, relativePath)
  const targetPath = path.join(distDir, relativePath)
  fs.mkdirSync(path.dirname(targetPath), { recursive: true })
  fs.copyFileSync(sourcePath, targetPath)
}

console.log('Build complete: dist/')
