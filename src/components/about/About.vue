<template>
  <section
    id="about"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    :aria-label="t('about.ariaLabel')"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-6 w-screen glass-card px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest gradient-text lg:sr-only">
        {{ t('about.title') }}
      </h2>
    </div>

    <div class="glass-card p-8 space-y-6 animate-fade-in">
      <div class="space-y-4">
        <p class="text-lg leading-relaxed text-neutral-200">{{ t('about.p1') }}</p>
        <p class="text-lg leading-relaxed text-neutral-200">{{ t('about.p2') }}</p>
        <p class="text-lg leading-relaxed text-neutral-200">{{ t('about.p3') }}</p>
      </div>

      <div class="glass-card p-6 gradient-border">
        <p class="mb-4 text-lg font-semibold gradient-text">{{ t('about.toolsTitle') }}</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li
            v-for="(tool, index) in tm('about.tools')"
            :key="index"
            class="flex items-center text-sm text-neutral-300 hover:text-primary-300 transition-colors duration-200"
          >
            <span class="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full ms-3 me-3 flex-shrink-0"></span>
            {{ tool }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>
