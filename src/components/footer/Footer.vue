<template>
  <footer class="max-w-2xl pb-16 text-sm sm:pb-0 animate-fade-in">
    <p class="text-neutral-400 leading-relaxed">
      {{ t('footer.builtBy') }} 
      <span class="font-semibold text-neutral-300 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
        Melina Niavarani
      </span>.
      {{ t('footer.developedWith') }}
      <a
        href="https://vuejs.org/"
        class="font-semibold text-neutral-300 hover:text-primary-400 focus-visible:text-primary-400 transition-colors duration-200"
        target="_blank"
        rel="noreferrer"
      >Vue.js</a>
      {{ t('footer.and') }}
      <a
        href="https://tailwindcss.com/"
        class="font-semibold text-neutral-300 hover:text-accent-400 focus-visible:text-accent-400 transition-colors duration-200"
        target="_blank"
        rel="noreferrer"
      >Tailwind CSS</a>.
      <br class="hidden sm:inline" />
      © {{ new Date().getFullYear() }} {{ t('footer.rights') }}
    </p>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
