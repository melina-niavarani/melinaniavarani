<template>
  <section
    id="about"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="About me"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-6 w-screen glass-card px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest gradient-text lg:sr-only">
        About
      </h2>
    </div>

    <div class="glass-card p-8 space-y-6 animate-fade-in">
      <div class="space-y-4">
        <p class="text-lg leading-relaxed text-neutral-200">
          Hi, I'm 
          <span
            class="font-semibold group/korok inline-flex lg:cursor-pointer lg:font-medium"
          >
            <span class="sr-only">Melina</span>
            <span class="transition duration-75 delay-[50ms] group-hover/korok:-translate-y-px group-hover/korok:text-primary-400">M</span>
            <span class="transition duration-75 delay-[75ms] group-hover/korok:-translate-y-px group-hover/korok:text-primary-300">e</span>
            <span class="transition duration-75 delay-[100ms] group-hover/korok:-translate-y-px group-hover/korok:text-accent-400">l</span>
            <span class="transition duration-75 delay-[125ms] group-hover/korok:-translate-y-px group-hover/korok:text-accent-300">i</span>
            <span class="transition duration-75 delay-[150ms] group-hover/korok:-translate-y-px group-hover/korok:text-primary-400">n</span>
            <span class="transition duration-75 delay-[175ms] group-hover/korok:-translate-y-px group-hover/korok:text-accent-400">a</span>
          </span> 
          — a <span class="font-semibold gradient-text">Frontend Developer</span> and 
          <span class="font-semibold gradient-text">Digital Marketing/SEO Specialist</span>. 
          I build fast, accessible web applications with 
          <span class="font-semibold text-primary-300">Next.js, Vue, and React</span>, 
          and help B2B brands grow through 
          <span class="font-semibold text-accent-300">technical SEO and content strategy</span>. 
          I also have domain expertise in the 
          <span class="font-semibold text-primary-300">oil, bitumen, and industrial sectors</span>.
        </p>

        <p class="text-lg leading-relaxed text-neutral-200">
          My focus is the intersection of 
          <span class="font-semibold text-primary-300">UI performance</span> and 
          <span class="font-semibold text-accent-300">SEO</span> — from architecture and schema to 
          multilingual optimization and analytics. 
          I'm <span class="font-semibold gradient-text">available for project-based or part-time contracts</span>, 
          GCC-ready (Dubai/Oman time-zone aligned), and comfortable working in 
          <span class="font-semibold text-primary-300">English & Persian</span>.
        </p>

        <p class="text-lg leading-relaxed text-neutral-200">
          Outside of work, I enjoy 
          <span class="font-semibold text-accent-300">walking</span>, spending time with family and friends, 
          playing <span class="font-semibold text-primary-300">Piano</span>, 
          and a good match of <span class="font-semibold text-accent-300">Tennis</span>.
        </p>
      </div>

      <div class="glass-card p-6 gradient-border">
        <p class="mb-4 text-lg font-semibold gradient-text">Here are a few technologies & tools I use regularly:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li class="flex items-center text-sm text-neutral-300 hover:text-primary-300 transition-colors duration-200">
            <span class="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 flex-shrink-0"></span>
            Next.js / React
          </li>
          <li class="flex items-center text-sm text-neutral-300 hover:text-primary-300 transition-colors duration-200">
            <span class="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 flex-shrink-0"></span>
            Vue 3 / Vite
          </li>
          <li class="flex items-center text-sm text-neutral-300 hover:text-primary-300 transition-colors duration-200">
            <span class="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 flex-shrink-0"></span>
            TypeScript / Tailwind CSS
          </li>
          <li class="flex items-center text-sm text-neutral-300 hover:text-primary-300 transition-colors duration-200">
            <span class="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 flex-shrink-0"></span>
            Node.js / Strapi
          </li>
          <li class="flex items-center text-sm text-neutral-300 hover:text-primary-300 transition-colors duration-200">
            <span class="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 flex-shrink-0"></span>
            Technical SEO / Schema / i18n
          </li>
          <li class="flex items-center text-sm text-neutral-300 hover:text-primary-300 transition-colors duration-200">
            <span class="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 flex-shrink-0"></span>
            GA4 / Plausible / A/B testing
          </li>
          <li class="flex items-center text-sm text-neutral-300 hover:text-primary-300 transition-colors duration-200">
            <span class="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 flex-shrink-0"></span>
            Enterprise SEO (DNN & legacy systems)
          </li>
          <li class="flex items-center text-sm text-neutral-300 hover:text-primary-300 transition-colors duration-200">
            <span class="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 flex-shrink-0"></span>
            B2B content for oil/bitumen industry
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>