import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { seoPages, siteUrl } from '../src/data/seo.js'
import { faqs, services } from '../src/data/content.js'

const sitemap = await readFile('dist/sitemap.xml', 'utf8')
assert.match(await readFile('dist/robots.txt', 'utf8'), /Allow: \/\n/)
assert.ok((await readFile('dist/robots.txt', 'utf8')).includes(`${siteUrl}/sitemap.xml`))
for (const [path, page] of Object.entries(seoPages)) {
  const html = await readFile(`dist${path === '/' ? '' : path}/index.html`, 'utf8')
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one main heading`)
  assert.equal((html.match(/<title>/g) || []).length, 1, `${path}: one title`)
  assert.ok(html.includes(`<title>${page.title}</title>`))
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1)
  assert.ok(html.includes(`rel="canonical" href="${siteUrl}${path}"`))
  assert.ok(sitemap.includes(`<loc>${siteUrl}${path}</loc>`))
  assert.ok(html.includes(`content="${page.description}"`))
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])
  assert.equal(schema.url, `${siteUrl}/`)
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/(?:assets|brand)\/[^"#?]+)"/g)) await access(`dist${asset}`)
  if (path === '/') {
    for (const service of services) assert.ok(html.includes(service.desc), `Missing service: ${service.title}`)
    for (const faq of faqs) assert.ok(html.includes(faq.a), `Missing FAQ: ${faq.q}`)
    assert.equal((html.match(/<details\b/g) || []).length, faqs.length)
  }
  console.log(`SEO OK: ${path}`)
}
