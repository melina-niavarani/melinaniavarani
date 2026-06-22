<template>
  <div id="content" class="w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
    <div class="hidden overflow-x-auto lg:block">
      <table class="w-full border-collapse text-left rtl:text-right">
        <thead class="bg-white/[0.045]">
          <tr>
            <th class="w-24 px-6 py-5 text-sm font-semibold text-neutral-100">
              {{ t('archive.table.year') }}
            </th>
            <th class="w-64 px-6 py-5 text-sm font-semibold text-neutral-100">
              {{ t('archive.table.project') }}
            </th>
            <th class="w-44 px-6 py-5 text-sm font-semibold text-neutral-100">
              {{ t('archive.table.madeAt') }}
            </th>
            <th class="px-6 py-5 text-sm font-semibold text-neutral-100">
              {{ t('archive.table.builtWith') }}
            </th>
            <th class="w-32 px-6 py-5 text-sm font-semibold text-neutral-100">
              {{ t('archive.table.link') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in archiveItems"
            :key="`${item.year}-${item.title}`"
            class="border-t border-white/10 transition-colors duration-300 hover:bg-white/[0.045]"
          >
            <td class="px-6 py-5 align-top text-sm font-medium text-neutral-400">
              {{ item.year }}
            </td>
            <td class="px-6 py-5 align-top">
              <component
                :is="item.to ? RouterLink : 'a'"
                v-bind="getLinkProps(item)"
                class="group/link inline-flex items-center gap-2 text-base font-bold leading-tight text-neutral-100 transition-colors duration-300 hover:text-primary-300 focus-visible:text-primary-300"
              >
                {{ item.title }}
                <ArrowIcon />
              </component>
            </td>
            <td class="px-6 py-5 align-top text-sm text-neutral-400">
              {{ item.madeAt }}
            </td>
            <td class="px-6 py-5 align-top">
              <ul class="flex flex-wrap gap-2">
                <li v-for="tag in item.tags" :key="tag">
                  <span class="tech-tag px-3 py-1.5 text-xs font-semibold text-neutral-300">
                    {{ tag }}
                  </span>
                </li>
              </ul>
            </td>
            <td class="px-6 py-5 align-top">
              <component
                :is="item.to ? RouterLink : 'a'"
                v-bind="getLinkProps(item)"
                class="text-sm font-semibold text-primary-300 transition-colors duration-300 hover:text-primary-200"
              >
                {{ t('archive.table.link') }}
              </component>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="block lg:hidden">
      <article
        v-for="item in archiveItems"
        :key="`${item.year}-${item.title}-card`"
        class="border-t border-white/10 p-5 first:border-t-0"
      >
        <div class="mb-3 flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-neutral-500">
              {{ item.year }} · {{ item.madeAt }}
            </p>
            <component
              :is="item.to ? RouterLink : 'a'"
              v-bind="getLinkProps(item)"
              class="mt-2 inline-flex items-center gap-2 text-lg font-black text-neutral-100 transition-colors duration-300 hover:text-primary-300"
            >
              {{ item.title }}
              <ArrowIcon />
            </component>
          </div>
        </div>
        <ul class="flex flex-wrap gap-2">
          <li v-for="tag in item.tags" :key="tag">
            <span class="tech-tag px-3 py-1.5 text-xs font-semibold text-neutral-300">
              {{ tag }}
            </span>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed, h } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'

const { t, tm } = useI18n()
const { localePath } = useLocalePath()

const archiveItems = computed(() => tm('archive.items'))

function getLinkProps(item) {
  if (item.to) {
    return { to: localePath(item.to), 'aria-label': item.title }
  }

  return {
    href: item.href,
    target: '_blank',
    rel: 'noreferrer',
    'aria-label': item.title,
  }
}

const ArrowIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      class:
        'h-4 w-4 shrink-0 text-primary-300 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/link:-translate-x-0.5 rtl:group-hover/link:translate-x-0',
      'aria-hidden': 'true',
    },
    [
      h('path', {
        'fill-rule': 'evenodd',
        d: 'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z',
        'clip-rule': 'evenodd',
      }),
    ],
  )
</script>
