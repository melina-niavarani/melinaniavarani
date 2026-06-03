<template>
  <nav class="nav hidden lg:block">
    <ul class="mt-16 w-max space-y-2">
      <li>
        <a class="group flex items-center py-4 px-5 rounded-2xl glass-nav glass-nav-hover transition-all duration-300 hover:scale-105" href="#about">
          <span class="nav-indicator ms-4 h-1.5 w-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300 group-hover:w-16 group-hover:from-primary-300 group-hover:to-accent-300 group-focus-visible:w-16 group-focus-visible:from-primary-300 group-focus-visible:to-accent-300 motion-reduce:transition-none"></span>
          <span class="nav-text text-sm font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300">{{ t('nav.about') }}</span>
        </a>
      </li>
      <li>
        <a class="group flex items-center py-4 px-5 rounded-2xl glass-nav glass-nav-hover transition-all duration-300 hover:scale-105" href="#experience">
          <span class="nav-indicator ms-4 h-1.5 w-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300 group-hover:w-16 group-hover:from-primary-300 group-hover:to-accent-300 group-focus-visible:w-16 group-focus-visible:from-primary-300 group-focus-visible:to-accent-300 motion-reduce:transition-none"></span>
          <span class="nav-text text-sm font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300">{{ t('nav.experience') }}</span>
        </a>
      </li>
      <li>
        <a class="group flex items-center py-4 px-5 rounded-2xl glass-nav glass-nav-hover transition-all duration-300 hover:scale-105" href="#projects">
          <span class="nav-indicator ms-4 h-1.5 w-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300 group-hover:w-16 group-hover:from-primary-300 group-hover:to-accent-300 group-focus-visible:w-16 group-focus-visible:from-primary-300 group-focus-visible:to-accent-300 motion-reduce:transition-none"></span>
          <span class="nav-text text-sm font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300">{{ t('nav.projects') }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
