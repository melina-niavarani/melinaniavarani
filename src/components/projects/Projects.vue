<template>
  <section id="projects" class="w-full py-6 md:py-12" :aria-label="t('projects.ariaLabel')">
    <div class="max-w-full mx-auto px-6 md:px-12 lg:px-24">
      <div class="mb-12 text-center space-y-4">
        <h2 class="text-5xl md:text-6xl font-black tracking-tight gradient-text animate-fade-in">
          {{ t('projects.title') }}
        </h2>
        <p class="text-lg text-neutral-300 max-w-2xl mx-auto animate-fade-in" style="animation-delay: 0.1s;">
          {{ t('projects.subtitle') }}
        </p>
      </div>
      <div class="space-y-6">
        <div
          v-for="(item, index) in projectItems"
          :key="index"
          class="glass-card p-8 md:p-10 card-hover animate-fade-in"
          :style="{ animationDelay: `${0.1 + index * 0.1}s` }"
        >
          <div class="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div class="space-y-6">
              <h3 class="text-3xl md:text-4xl font-bold">
                <router-link
                  v-if="item.internal"
                  class="group/link inline-flex items-baseline font-bold leading-tight text-neutral-100 hover:text-primary-300 focus-visible:text-primary-300 transition-colors duration-200"
                  :to="localePath(item.to)"
                  :aria-label="item.ariaLabel"
                >
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span class="gradient-text">{{ item.title }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ms-2 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 rtl:-scale-x-100 rtl:ms-0 rtl:me-2 rtl:group-hover/link:-translate-x-1" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                  </svg>
                </router-link>
                <a
                  v-else
                  class="group/link inline-flex items-baseline font-bold leading-tight text-neutral-100 hover:text-primary-300 focus-visible:text-primary-300 transition-colors duration-200"
                  :href="item.href"
                  target="_blank"
                  rel="noreferrer"
                  :aria-label="item.ariaLabel"
                >
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span class="gradient-text">{{ item.title }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ms-2 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 rtl:-scale-x-100 rtl:ms-0 rtl:me-2 rtl:group-hover/link:-translate-x-1" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                  </svg>
                </a>
              </h3>
              <p class="text-neutral-300 leading-relaxed text-lg">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2 pt-2" :aria-label="t('projects.techAria')">
                <span
                  v-for="(tag, tagIndex) in item.tags"
                  :key="tagIndex"
                  class="tech-tag px-4 py-2 text-sm font-medium"
                  :class="tagIndex % 2 === 0 ? 'text-primary-300' : 'text-accent-300'"
                >{{ tag }}</span>
              </div>
            </div>
            <div class="project-image-container hidden lg:flex">
              <img
                :src="projectImages[index]"
                :alt="`${item.title} Screenshot`"
                loading="lazy"
                class="project-image"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 text-center">
        <router-link
          class="modern-button inline-flex items-center gap-2 group animate-slide-up"
          :aria-label="t('projects.viewArchiveAria')"
          :to="localePath('/archive')"
        >
          <span class="gradient-text font-semibold">{{ t('projects.viewArchive') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden="true">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'
import videocallImg from '@/assets/images/videocall-demo.png'
import iamdbImg from '@/assets/images/IAMDB.png'
import etalonImg from '@/assets/images/etalon.png'
import rpsImg from '@/assets/images/rock-paper-scissors.png'
import todoImg from '@/assets/images/Todo-list.png'

const { t, tm } = useI18n()
const { localePath } = useLocalePath()

const projectItems = computed(() => tm('projects.items'))
const projectImages = [videocallImg, iamdbImg, etalonImg, rpsImg, todoImg]

const ExternalLinkIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      class:
        'inline-block h-5 w-5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ms-2 translate-y-px rtl:-scale-x-100',
      'aria-hidden': 'true',
    },
    [
      h('path', {
        'fill-rule': 'evenodd',
        d: 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z',
        'clip-rule': 'evenodd',
      }),
    ],
  )
</script>
