<template>
  <nav class="nav hidden lg:block">
    <ul class="mt-12 grid w-[25rem] grid-cols-2 gap-3 pt-2">
      <li>
        <a class="group flex min-h-14 items-center gap-4 py-3 px-4 rounded-lg glass-nav glass-nav-hover transition-all duration-300 hover:-translate-y-0.5" href="#about">
          <span class="nav-indicator h-1.5 w-7 shrink-0 rounded-full transition-all duration-300 group-hover:w-10 group-focus-visible:w-10 motion-reduce:transition-none"></span>
          <span class="nav-text text-sm font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300">{{ t('nav.about') }}</span>
        </a>
      </li>
      <li>
        <a class="group flex min-h-14 items-center gap-4 py-3 px-4 rounded-lg glass-nav glass-nav-hover transition-all duration-300 hover:-translate-y-0.5" href="#services">
          <span class="nav-indicator h-1.5 w-7 shrink-0 rounded-full transition-all duration-300 group-hover:w-10 group-focus-visible:w-10 motion-reduce:transition-none"></span>
          <span class="nav-text text-sm font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300">{{ t('nav.services') }}</span>
        </a>
      </li>
      <li>
        <a class="group flex min-h-14 items-center gap-4 py-3 px-4 rounded-lg glass-nav glass-nav-hover transition-all duration-300 hover:-translate-y-0.5" href="#experience">
          <span class="nav-indicator h-1.5 w-7 shrink-0 rounded-full transition-all duration-300 group-hover:w-10 group-focus-visible:w-10 motion-reduce:transition-none"></span>
          <span class="nav-text text-sm font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300">{{ t('nav.experience') }}</span>
        </a>
      </li>
      <li>
        <a class="group flex min-h-14 items-center gap-4 py-3 px-4 rounded-lg glass-nav glass-nav-hover transition-all duration-300 hover:-translate-y-0.5" href="#projects">
          <span class="nav-indicator h-1.5 w-7 shrink-0 rounded-full transition-all duration-300 group-hover:w-10 group-focus-visible:w-10 motion-reduce:transition-none"></span>
          <span class="nav-text text-sm font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300">{{ t('nav.projects') }}</span>
        </a>
      </li>
      <li class="col-span-2">
        <a class="group flex min-h-14 items-center justify-center py-3 px-4 rounded-lg glass-nav glass-nav-hover transition-all duration-300 hover:-translate-y-0.5" href="#contact">
          <span class="nav-text text-sm font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-100 group-focus-visible:text-neutral-100 transition-all duration-300">{{ t('nav.contact') }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
