<template>
  <div class="space-y-7 animate-fade-in">
    <div class="space-y-4">
      <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold uppercase tracking-widest text-primary-200">
        <span class="h-1.5 w-1.5 rounded-full bg-accent-300 shadow-[0_0_16px_rgba(134,239,172,0.55)]"></span>
        {{ t('intro.kicker') }}
      </div>

      <h1 class="text-5xl font-black leading-[0.95] tracking-tight text-neutral-50 sm:text-6xl md:text-7xl xl:text-8xl">
        <span class="gradient-text text-glow block animate-slide-up" style="animation-delay: 0.1s;">{{ t('intro.nameFirst') }}</span>
        <span class="bg-gradient-to-r from-neutral-100 via-neutral-50 to-neutral-100 bg-clip-text text-transparent block animate-slide-up" style="animation-delay: 0.2s;">{{ t('intro.nameLast') }}</span>
      </h1>

      <h2 class="text-lg font-bold tracking-wide text-neutral-200 animate-slide-up md:text-2xl" style="animation-delay: 0.3s;">
        <span class="gradient-text">{{ t('intro.role1') }}</span>
        <span class="mx-2 text-primary-400">·</span>
        <span class="gradient-text">{{ t('intro.role2') }}</span>
      </h2>
    </div>

    <p class="max-w-2xl leading-relaxed text-neutral-300 text-lg md:text-xl animate-slide-up" style="animation-delay: 0.4s;">
      {{ t('intro.bio', {
        stack: t('intro.stack'),
        seo: t('intro.seo'),
        industry: t('intro.industry'),
      }) }}
    </p>

    <div class="flex flex-col gap-3 pt-2 sm:flex-row animate-slide-up" style="animation-delay: 0.5s;">
      <a class="modern-button justify-center" href="#contact">
        {{ t('intro.ctaPrimary') }}
      </a>
      <a class="secondary-button justify-center" href="#projects">
        {{ t('intro.ctaSecondary') }}
      </a>
    </div>

    <div class="hero-lab animate-slide-up" style="animation-delay: 0.52s;">
      <div class="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-neutral-500">{{ t('intro.labLabel') }}</p>
          <p class="mt-1 text-sm font-bold text-neutral-100">{{ t('intro.labTitle') }}</p>
        </div>
        <span class="rounded-full border border-accent-300/30 bg-accent-300/10 px-3 py-1 text-xs font-bold text-accent-200">{{ t('intro.labStatus') }}</span>
      </div>
      <div class="mt-5 grid gap-3 sm:grid-cols-3">
        <div
          v-for="(item, index) in tm('intro.pipeline')"
          :key="item.label"
          class="pipeline-chip"
          :style="{ '--chip-index': index }"
        >
          <div class="relative z-10 flex h-full flex-col justify-between gap-5">
            <div class="flex items-start justify-between gap-3">
              <span class="pipeline-chip__number">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="pipeline-chip__status">{{ item.status }}</span>
            </div>
            <div>
              <p class="pipeline-chip__label">{{ item.label }}</p>
              <p class="pipeline-chip__detail">{{ item.detail }}</p>
            </div>
            <div class="pipeline-chip__rail" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <dl class="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3 animate-slide-up" style="animation-delay: 0.55s;">
      <div
        v-for="stat in tm('intro.stats')"
        :key="stat.label"
        class="rounded-lg border border-white/10 bg-white/[0.04] p-4"
      >
        <dt class="text-2xl font-black text-neutral-50">{{ stat.value }}</dt>
        <dd class="mt-1 text-xs font-medium leading-5 text-neutral-400">{{ stat.label }}</dd>
      </div>
    </dl>

    <div class="flex flex-wrap items-center gap-3 mt-4 animate-slide-up" style="animation-delay: 0.6s;">
      <div class="modern-badge">
        <span class="inline-block h-2 w-2 rounded-full bg-accent-300 shadow-[0_0_14px_rgba(134,239,172,0.38)]"></span>
        {{ t('intro.badgeAvailable') }}
      </div>
      <div class="modern-badge">
        <span class="inline-block h-2 w-2 rounded-full bg-primary-200 shadow-[0_0_14px_rgba(125,211,252,0.34)]"></span>
        {{ t('intro.badgeTimezone') }}
      </div>
      <div class="modern-badge">
        <span class="inline-block h-2 w-2 rounded-full bg-neutral-200/80"></span>
        {{ t('intro.badgeLanguages') }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>
