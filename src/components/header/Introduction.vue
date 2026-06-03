<template>
  <div class="space-y-4 animate-fade-in">
    <h1 class="text-5xl font-bold tracking-tight text-neutral-100 sm:text-6xl lg:text-7xl">
      <span class="gradient-text text-glow">{{ t('intro.nameFirst') }}</span>
      <br>
      <span class="text-neutral-200">{{ t('intro.nameLast') }}</span>
    </h1>

    <h2 class="text-xl font-semibold tracking-tight text-neutral-300 sm:text-2xl">
      <span class="gradient-text">{{ t('intro.role1') }}</span> ·
      <span class="gradient-text">{{ t('intro.role2') }}</span>
    </h2>

    <p class="max-w-lg leading-relaxed text-neutral-300 text-lg">
      {{ t('intro.bio', {
        stack: t('intro.stack'),
        seo: t('intro.seo'),
        industry: t('intro.industry'),
      }) }}
    </p>

    <div class="flex flex-wrap items-center gap-3 mt-8">
      <div class="frosted-glass px-4 py-2 text-sm font-medium text-primary-300">
        {{ t('intro.badgeAvailable') }}
      </div>
      <div class="frosted-glass px-4 py-2 text-sm font-medium text-accent-300">
        {{ t('intro.badgeTimezone') }}
      </div>
      <div class="frosted-glass px-4 py-2 text-sm font-medium text-primary-300">
        {{ t('intro.badgeLanguages') }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
