import { createI18n } from 'vue-i18n'
import { DEFAULT_LOCALE } from './constants'
import en from './locales/en'
import fa from './locales/fa'

const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, fa },
})

export function applyDocumentLocale(locale) {
  const isRtl = locale === 'fa'
  document.documentElement.lang = locale
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
}

export default i18n
