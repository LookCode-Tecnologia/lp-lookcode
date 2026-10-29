import React from 'react'
import { useLocation } from 'react-router-dom'
import { seoPages, siteUrl } from '../data/seo.js'

function setMeta(attribute, key, value) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }
  element.content = value
}

export default function PageMetadata() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    const page = seoPages[pathname.replace(/\/$/, '') || '/']
    if (!page) return
    document.title = page.title
    setMeta('name', 'description', page.description)
    const url = siteUrl + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''))
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = url
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    document.documentElement.classList.add('is-hydrated')
  }, [pathname])
  return null
}
