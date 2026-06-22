<template>
  <section id="contact" class="w-full py-10 md:py-16" :aria-label="t('contact.ariaLabel')">
    <div class="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
      <div class="cta-panel">
        <div class="max-w-3xl">
          <p class="mb-3 text-sm font-bold uppercase tracking-widest text-accent-300">
            {{ t('contact.eyebrow') }}
          </p>
          <h2 class="text-3xl font-black tracking-tight text-neutral-50 md:text-5xl">
            {{ t('contact.title') }}
          </h2>
          <p class="mt-5 text-base leading-8 text-neutral-300 md:text-lg">
            {{ t('contact.description') }}
          </p>
          <p class="mt-4 text-sm font-medium text-neutral-400">
            {{ t('contact.note') }}
          </p>
        </div>

        <div class="mt-8 flex w-full flex-col gap-3 sm:flex-row lg:mt-0 lg:w-auto lg:min-w-[22rem] lg:flex-col xl:flex-row">
          <a
            class="contact-primary-button"
            href="https://www.linkedin.com/in/melinaniavarani"
            target="_blank"
            rel="noreferrer"
          >
            {{ t('contact.primary') }}
          </a>
          <a
            class="contact-email-button"
            :href="emailHref"
          >
            {{ t('contact.secondary') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emailSubject = 'Project inquiry from melinaniavarani.com'
const emailBody = `Hi Melina,

I found your portfolio website and would like to discuss a design/development project.

Project type:
Timeline:
Budget range:
Project details:
`

const emailHref = `mailto:m.niavarani@hotmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
</script>
