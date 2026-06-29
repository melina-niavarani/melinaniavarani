<template>
  <section id="services" class="w-full py-8 md:py-14" :aria-label="t('services.ariaLabel')">
    <div class="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
      <div class="mb-10 max-w-3xl">
        <p class="mb-3 text-sm font-bold uppercase tracking-widest text-primary-300">
          {{ t('services.eyebrow') }}
        </p>
        <h2 class="text-3xl font-black tracking-tight text-neutral-50 md:text-5xl">
          {{ t('services.title') }}
        </h2>
        <p class="mt-5 text-base leading-8 text-neutral-300 md:text-lg">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="(item, index) in serviceItems"
          :key="item.title"
          class="service-card"
          :style="{ animationDelay: `${0.08 + index * 0.08}s` }"
        >
          <div class="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-primary-300/30 bg-primary-300/10 text-sm font-black text-primary-200">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
          <h3 class="text-xl font-bold text-neutral-50">
            {{ item.title }}
          </h3>
          <p class="mt-4 text-sm leading-7 text-neutral-300">
            {{ item.description }}
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tag in item.tags"
              :key="tag"
              class="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-neutral-300"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>

      <div class="mt-5 grid gap-4 lg:grid-cols-3">
        <div
          v-for="item in tm('services.process')"
          :key="item.title"
          class="process-step"
        >
          <p class="text-xs font-bold uppercase tracking-widest text-primary-300">{{ item.label }}</p>
          <h3 class="mt-2 text-lg font-black text-neutral-50">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-neutral-300">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const serviceItems = computed(() => tm('services.items'))
</script>
