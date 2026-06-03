<template>
  <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
    <p>
      {{ t('footer.builtBy') }} <span class="font-medium text-slate-400">Melina Niavarani</span>.
      {{ t('footer.developedWith') }}
      <a
        href="https://vuejs.org/"
        class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        target="_blank"
        rel="noreferrer"
      >Vue.js</a>
      {{ t('footer.and') }}
      <a
        href="https://tailwindcss.com/"
        class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
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
