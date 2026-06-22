<template>
  <div class="space-y-6 animate-fade-in">
    <div class="space-y-4">
      <h1 class="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-50 leading-tight">
        <span class="gradient-text text-glow block animate-slide-up" style="animation-delay: 0.1s;">{{ t('intro.nameFirst') }}</span>
        <span class="bg-gradient-to-r from-neutral-100 via-neutral-50 to-neutral-100 bg-clip-text text-transparent block animate-slide-up" style="animation-delay: 0.2s;">{{ t('intro.nameLast') }}</span>
      </h1>

      <h2 class="text-xl md:text-2xl font-bold tracking-wide text-neutral-200 animate-slide-up" style="animation-delay: 0.3s;">
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

    <dl class="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3 animate-slide-up" style="animation-delay: 0.55s;">
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
