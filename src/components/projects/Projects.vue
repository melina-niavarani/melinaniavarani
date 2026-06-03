<template>
  <section id="projects" class="w-full" :aria-label="t('projects.ariaLabel')">
    <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      <div class="mb-12 text-center">
        <h2 class="text-4xl font-bold tracking-tight gradient-text sm:text-5xl lg:text-6xl">
          {{ t('projects.title') }}
        </h2>
        <p class="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
          {{ t('projects.subtitle') }}
        </p>
      </div>
      <div class="space-y-8">
        <div
          v-for="(item, index) in projectItems"
          :key="index"
          class="glass-card p-8 card-hover animate-fade-in"
        >
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold">
                <router-link
                  v-if="item.internal"
                  class="group/link inline-flex items-baseline font-bold leading-tight text-neutral-100 hover:text-primary-300 focus-visible:text-primary-300 transition-colors duration-200"
                  :to="localePath(item.to)"
                  :aria-label="item.ariaLabel"
                >
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span class="gradient-text">{{ item.title }}</span>
                  <ExternalLinkIcon />
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
                  <ExternalLinkIcon />
                </a>
              </h3>
              <p class="text-neutral-300 leading-relaxed">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2" :aria-label="t('projects.techAria')">
                <span
                  v-for="(tag, tagIndex) in item.tags"
                  :key="tagIndex"
                  class="glass-card px-3 py-1 text-xs font-medium"
                  :class="tagIndex % 2 === 0 ? 'text-primary-300' : 'text-accent-300'"
                >{{ tag }}</span>
              </div>
            </div>
            <div class="project-image-container">
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
      <div class="mt-12 text-center">
        <router-link
          class="modern-button inline-flex items-center gap-2 group"
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
