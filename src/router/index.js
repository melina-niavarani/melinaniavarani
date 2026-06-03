import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n, { applyDocumentLocale } from '../i18n/index'
import { getLocaleFromPath } from '../i18n/localePath'
import { setPageMeta } from '../seo/meta'
import { DEFAULT_OG_IMAGE, SITE_URL } from '../seo/site'

function createLocalizedRoutes(prefix = '', locale = 'en') {
  const base = prefix || ''
  const nameSuffix = locale === 'fa' ? '-fa' : ''

  return [
    {
      path: `${base}/`,
      name: `home${nameSuffix}`,
      component: HomeView,
      meta: { locale, page: 'home' },
    },
    {
      path: `${base}/archive`,
      name: `projects${nameSuffix}`,
      component: () => import('../views/Archive.vue'),
      meta: { locale, page: 'archive' },
    },
    {
      path: `${base}/demo/call`,
      name: `video-call-demo${nameSuffix}`,
      component: () => import('../views/DemoCall.vue'),
      meta: { locale, page: 'demo', noindex: true },
    },
  ]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...createLocalizedRoutes('', 'en'),
    ...createLocalizedRoutes('/fa', 'fa'),
    {
      path: '/about',
      redirect: '/',
    },
    {
      path: '/fa/about',
      redirect: '/fa',
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const locale = to.meta.locale ?? getLocaleFromPath(to.path)
  i18n.global.locale.value = locale
  applyDocumentLocale(locale)
})

router.afterEach((to) => {
  const locale = to.meta.locale ?? getLocaleFromPath(to.path)
  const { t } = i18n.global
  const page = to.meta.page ?? 'home'

  setPageMeta({
    title: t(`meta.${page}.title`),
    description: t(`meta.${page}.description`),
    path: to.path,
    locale,
    image: DEFAULT_OG_IMAGE,
    noindex: Boolean(to.meta.noindex),
  })
})

export default router
