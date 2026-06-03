<template>
  <div class="flex items-center gap-2" role="group" :aria-label="t('lang.label')">
    <button
      type="button"
      class="frosted-glass px-3 py-1.5 text-xs font-medium transition-colors duration-200"
      :class="locale === 'en' ? 'text-primary-300 ring-1 ring-primary-500/40' : 'text-neutral-400 hover:text-neutral-200'"
      :aria-pressed="locale === 'en'"
      @click="switchLocale('en')"
    >
      EN
    </button>
    <button
      type="button"
      class="frosted-glass px-3 py-1.5 text-xs font-medium transition-colors duration-200"
      :class="locale === 'fa' ? 'text-primary-300 ring-1 ring-primary-500/40' : 'text-neutral-400 hover:text-neutral-200'"
      :aria-pressed="locale === 'fa'"
      @click="switchLocale('fa')"
    >
      FA
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'

const { t, locale } = useI18n()
const { switchLocale } = useLocalePath()
</script>
