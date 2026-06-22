<template>
  <section id="projects" class="w-full py-6 md:py-12" :aria-label="t('projects.ariaLabel')">
    <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      <div class="mb-12 max-w-3xl space-y-4">
        <p class="text-sm font-bold uppercase tracking-widest text-primary-300">
          {{ t('projects.eyebrow') }}
        </p>
        <h2 class="text-3xl md:text-5xl font-black tracking-tight text-neutral-50 animate-fade-in">
          {{ t('projects.title') }}
        </h2>
        <p class="text-base md:text-lg leading-8 text-neutral-300 animate-fade-in" style="animation-delay: 0.1s;">
          {{ t('projects.subtitle') }}
        </p>
      </div>
      <div class="grid gap-5">
        <article
          v-for="(item, index) in projectItems"
          :key="item.title"
          class="project-card animate-fade-in"
          :style="{ animationDelay: `${0.1 + index * 0.1}s` }"
        >
          <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div class="space-y-6">
              <div class="flex flex-wrap items-center gap-3 text-sm">
                <span class="rounded-md bg-primary-300/10 px-3 py-1.5 font-bold text-primary-200">
                  {{ item.category }}
                </span>
                <span class="text-neutral-400">{{ item.role }}</span>
              </div>

              <h3 class="text-2xl md:text-4xl font-bold">
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
              <p class="text-neutral-300 leading-8 text-base md:text-lg">{{ item.description }}</p>
              <p class="rounded-lg border border-accent-300/20 bg-accent-300/10 p-4 text-sm font-medium leading-7 text-neutral-200">
                {{ item.outcome }}
              </p>
              <div class="flex flex-wrap gap-2 pt-2" :aria-label="t('projects.techAria')">
                <span
                  v-for="(tag, tagIndex) in item.tags"
                  :key="tagIndex"
                  class="tech-tag px-3 py-2 text-xs font-semibold md:text-sm"
                  :class="tagIndex % 2 === 0 ? 'text-primary-300' : 'text-accent-300'"
                >{{ tag }}</span>
              </div>
            </div>

            <div class="project-proof-panel">
              <div class="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-neutral-500">{{ t('projects.scopeLabel') }}</p>
                  <p class="mt-1 text-lg font-black text-neutral-50">{{ item.title }}</p>
                </div>
                <span class="h-3 w-3 rounded-full bg-accent-300 shadow-[0_0_20px_rgba(134,239,172,0.45)]"></span>
              </div>
              <div class="space-y-3">
                <div class="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-3">
                  <span class="text-sm text-neutral-400">{{ t('projects.roleLabel') }}</span>
                  <span class="text-sm font-bold text-neutral-100">{{ item.role }}</span>
                </div>
                <div class="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-3">
                  <span class="text-sm text-neutral-400">{{ t('projects.focusLabel') }}</span>
                  <span class="text-sm font-bold text-primary-200">{{ item.category }}</span>
                </div>
                <div class="rounded-lg border border-white/10 bg-neutral-950/40 p-4">
                  <div class="mb-3 h-2 w-2/3 rounded-full bg-primary-300/50"></div>
                  <div class="mb-3 h-2 w-5/6 rounded-full bg-white/15"></div>
                  <div class="h-2 w-1/2 rounded-full bg-accent-300/40"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="mt-16 text-center">
        <router-link
          class="section-link-button group animate-slide-up"
          :aria-label="t('projects.viewArchiveAria')"
          :to="localePath('/archive')"
        >
          <span>{{ t('projects.viewArchive') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden="true">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'

const { t, tm } = useI18n()
const { localePath } = useLocalePath()

const projectItems = computed(() => tm('projects.items'))
</script>
