import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from './site'

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

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function setPageMeta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  noindex = false,
}) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`

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
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: description,
  })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

  upsertLink('canonical', url)

  const robots = noindex ? 'noindex, nofollow' : 'index, follow'
  upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })
}
