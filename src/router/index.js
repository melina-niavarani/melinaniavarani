import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { setPageMeta } from '../seo/meta'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
} from '../seo/site'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: `About | ${SITE_NAME}`,
        description: DEFAULT_DESCRIPTION,
        noindex: true,
      },
    },
    {
      path: '/archive',
      name: 'projects',
      component: () => import('../views/Archive.vue'),
      meta: {
        title: `Project Archive | ${SITE_NAME}`,
        description:
          'Full project archive by Melina Niavarani — web apps, demos, and client work built with Vue, React, and modern frontend tooling.',
      },
    },
    {
      path: '/demo/call',
      name: 'video-call-demo',
      component: () => import('../views/DemoCall.vue'),
      meta: {
        title: `Video Call Demo | ${SITE_NAME}`,
        description:
          'Live video call demo powered by Jitsi Meet — create or join meetings in the browser.',
        noindex: true,
      },
    },
  ],
})

router.afterEach((to) => {
  setPageMeta({
    title: to.meta.title ?? DEFAULT_TITLE,
    description: to.meta.description ?? DEFAULT_DESCRIPTION,
    path: to.path,
    noindex: Boolean(to.meta.noindex),
  })
})

export default router
