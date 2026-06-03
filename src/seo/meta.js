import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './site'

function upsertMeta(selector, attributes) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value)
  })
}

function upsertLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function stripFaPrefix(path) {
  if (path === '/fa') return '/'
  if (path.startsWith('/fa/')) return path.slice(3) || '/'
  return path
}

function setHreflangAlternates(path) {
  const enPath = stripFaPrefix(path)
  const faPath = enPath === '/' ? '/fa' : `/fa${enPath}`

  upsertLink('alternate', `${SITE_URL}${enPath}`, 'en')
  upsertLink('alternate', `${SITE_URL}${faPath}`, 'fa')
  upsertLink('alternate', `${SITE_URL}${enPath}`, 'x-default')
}

export function setPageMeta({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  locale = 'en',
  noindex = false,
}) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`

  document.title = title

  upsertMeta('meta[name="description"]', { name: 'description', content: description })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: description,
  })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
  upsertMeta('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: SITE_NAME,
  })
  upsertMeta('meta[property="og:locale"]', {
    property: 'og:locale',
    content: locale === 'fa' ? 'fa_IR' : 'en_US',
  })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: description,
  })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

  upsertLink('canonical', url)
  setHreflangAlternates(path)

  const robots = noindex ? 'noindex, nofollow' : 'index, follow'
  upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })
}
