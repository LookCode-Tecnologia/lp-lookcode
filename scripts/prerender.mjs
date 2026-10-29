import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/entry-server.js'
import { seoPages, siteUrl } from '../src/data/seo.js'
import { services } from '../src/data/content.js'

const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const template = await readFile('dist/index.html', 'utf8')
const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Look Code',
  url: `${siteUrl}/`,
  logo: `${siteUrl}/brand/logo-completo.png`,
  telephone: '+55-11-93304-3152',
  description: seoPages['/'].description,
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Serviços de desenvolvimento de software',
    itemListElement: services.map(service => ({
      '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.title, description: service.desc },
    })),
  },
}

for (const [path, page] of Object.entries(seoPages)) {
  const url = siteUrl + path
  const metadata = `
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#080812" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Look Code" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${siteUrl}/brand/logo-completo.png" />
    <meta property="og:image:alt" content="Look Code — desenvolvimento de software sob medida" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(page.title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" />
    <meta name="twitter:image" content="${siteUrl}/brand/logo-completo.png" />
    <script type="application/ld+json">${JSON.stringify(organization).replaceAll('<', '\\u003c')}</script>`
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(page.description)}" />`)
    .replace('</head>', `${metadata}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
  const directory = path === '/' ? 'dist' : `dist${path}`
  await mkdir(directory, { recursive: true })
  await writeFile(`${directory}/index.html`, html)
  console.log(`Prerendered ${path}`)
}
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(seoPages).map(path => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}\n</urlset>\n`)
await writeFile('dist/CNAME', new URL(siteUrl).hostname + '\n')
