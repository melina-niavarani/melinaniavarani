import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { localizedPath, stripLocalePrefix } from '@/i18n/localePath'

export function useLocalePath() {
  const route = useRoute()
  const router = useRouter()
  const { locale } = useI18n()

  const localePath = (path) => localizedPath(path, locale.value)

  const switchLocale = (targetLocale) => {
    const next = localizedPath(route.fullPath, targetLocale)
    if (next !== route.fullPath) {
      router.push(next)
    }
  }

  const barePath = computed(() => stripLocalePrefix(route.path))

  return { localePath, switchLocale, barePath, locale }
}
