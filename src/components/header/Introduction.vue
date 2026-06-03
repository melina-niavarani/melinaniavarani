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

    <div class="flex flex-wrap items-center gap-3 mt-10 animate-slide-up" style="animation-delay: 0.5s;">
      <div class="modern-badge">
        <span class="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        {{ t('intro.badgeAvailable') }}
      </div>
      <div class="modern-badge">
        <span class="text-xs font-medium">🌍</span>
        {{ t('intro.badgeTimezone') }}
      </div>
      <div class="modern-badge">
        <span class="text-xs font-medium">💬</span>
        {{ t('intro.badgeLanguages') }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
