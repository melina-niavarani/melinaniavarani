<template >
  <div class="min-h-screen">
    <div class="mx-auto min-h-screen max-w-full px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <section class="lg:flex lg:gap-8 lg:justify-between">
        <header class="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div :class="['flex', locale === 'fa' ? 'justify-end' : 'justify-start', 'mb-8 lg:mb-6']">
            <LanguageSwitcher />
          </div>
          <introduction/>
          <navList/>
          <socialMediaList/>
        </header>
        <main id="content" class="pt-16 lg:w-1/2 lg:py-24 space-y-12">
          <!-- *****ABOUT***** -->
          <about/>
        </main>
      </section>

      <!-- Services Section -->
      <section class="w-full py-2 lg:py-4">
        <services/>
      </section>
      
      <!-- Full-width Experience Section -->
      <section class="w-full py-2 lg:py-4">
        <div class="relative">
          <!-- Decorative Elements -->
          <div class="absolute left-0 top-0 w-1/3 h-full pointer-events-none">
            <!-- Origami/Galaxy Lines -->
            <div class="absolute top-20 left-8 w-32 h-32 border border-primary-400/20 rotate-45 animate-float"></div>
            <div class="absolute top-40 left-16 w-24 h-24 border border-accent-400/20 rotate-12 animate-float" style="animation-delay: 1s;"></div>
            <div class="absolute top-60 left-4 w-16 h-16 border border-primary-300/20 rotate-75 animate-float" style="animation-delay: 2s;"></div>
            
            <!-- Galaxy Lines -->
            <div class="absolute top-32 left-12 w-px h-32 bg-gradient-to-b from-primary-400/30 to-transparent"></div>
            <div class="absolute top-48 left-20 w-px h-24 bg-gradient-to-b from-accent-400/30 to-transparent"></div>
            <div class="absolute top-72 left-8 w-px h-20 bg-gradient-to-b from-primary-300/30 to-transparent"></div>
            
            <!-- Floating Dots -->
            <div class="absolute top-24 left-24 w-2 h-2 bg-primary-400/40 rounded-full animate-float"></div>
            <div class="absolute top-56 left-12 w-1 h-1 bg-accent-400/60 rounded-full animate-float" style="animation-delay: 0.5s;"></div>
            <div class="absolute top-80 left-28 w-1.5 h-1.5 bg-primary-300/50 rounded-full animate-float" style="animation-delay: 1.5s;"></div>
          </div>
          
          <!-- Experience Content -->
          <div class="relative z-10">
            <experience/>
          </div>
        </div>
      </section>
      
      <!-- Full-width Projects Section -->
      <section class="w-full py-8 lg:py-12">
        <div class="relative">
          <!-- Decorative Elements -->
          <div class="absolute right-0 top-0 w-1/3 h-full pointer-events-none">
            <!-- Origami/Galaxy Lines -->
            <div class="absolute top-20 right-8 w-28 h-28 border border-accent-400/20 rotate-45 animate-float"></div>
            <div class="absolute top-40 right-16 w-20 h-20 border border-primary-400/20 rotate-12 animate-float" style="animation-delay: 1.5s;"></div>
            <div class="absolute top-60 right-4 w-12 h-12 border border-accent-300/20 rotate-75 animate-float" style="animation-delay: 0.5s;"></div>
            
            <!-- Galaxy Lines -->
            <div class="absolute top-32 right-12 w-px h-32 bg-gradient-to-b from-accent-400/30 to-transparent"></div>
            <div class="absolute top-48 right-20 w-px h-24 bg-gradient-to-b from-primary-400/30 to-transparent"></div>
            <div class="absolute top-72 right-8 w-px h-20 bg-gradient-to-b from-accent-300/30 to-transparent"></div>
            
            <!-- Floating Dots -->
            <div class="absolute top-24 right-24 w-2 h-2 bg-accent-400/40 rounded-full animate-float"></div>
            <div class="absolute top-56 right-12 w-1 h-1 bg-primary-400/60 rounded-full animate-float" style="animation-delay: 1s;"></div>
            <div class="absolute top-80 right-28 w-1.5 h-1.5 bg-accent-300/50 rounded-full animate-float" style="animation-delay: 2s;"></div>
          </div>
          
          <!-- Projects Content -->
          <div class="relative z-10">
            <projects/>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="w-full">
        <ContactCTA/>
      </section>
      
      <!-- Footer -->
      <section class="w-full">
        <Footer/>
      </section>
    </div>
  </div>
</template>
<script>
  import { useI18n } from 'vue-i18n'
  import introduction from '@/components/header/Introduction.vue'
  import LanguageSwitcher from '@/components/header/LanguageSwitcher.vue'
  import socialMediaList from '@/components/header/SocialMedia.vue'
  import navList from '@/components/header/NavList.vue'
  import about from '@/components/about/About.vue'
  import projects from '@/components/projects/Projects.vue'
  import experience from '@/components/experience/Experiences.vue'
  import services from '@/components/services/Services.vue'
  import ContactCTA from '@/components/contact/ContactCTA.vue'
  import Footer from '@/components/footer/Footer.vue'

  export default {
    setup() {
      const { locale } = useI18n()
      return { locale }
    },
    components: {
      introduction,
      LanguageSwitcher,
      socialMediaList,
      navList,
      about,
      projects,
      experience,
      services,
      ContactCTA,
      Footer
    }
  }
</script>
