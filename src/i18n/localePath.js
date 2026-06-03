import { DEFAULT_LOCALE } from './constants'

export function getLocaleFromPath(path) {
  if (path === '/fa' || path.startsWith('/fa/')) return 'fa'
  return DEFAULT_LOCALE
}

export function stripLocalePrefix(path) {
  if (path === '/fa') return '/'
  if (path.startsWith('/fa/')) return path.slice(3) || '/'
  return path
}

export function localizedPath(path, locale) {
  const normalized = stripLocalePrefix(path)
  if (locale === 'fa') {
    return normalized === '/' ? '/fa' : `/fa${normalized}`
  }
  return normalized
}
