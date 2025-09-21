<template>
    <div class="min-h-screen w-full">
        <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded-2xl glass-card px-4 py-3 text-sm font-bold uppercase tracking-widest text-neutral-100 focus-visible:translate-x-0 transition-all duration-300">
            Skip to Content
        </a>
        <div class="w-full px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
            <div class="max-w-7xl mx-auto relative">
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
                
                <!-- Right side decorative elements -->
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
                
                <!-- Content -->
                <div class="relative z-10">
                    <router-link class="group mb-8 inline-flex items-center glass-card px-6 py-3 rounded-2xl font-semibold leading-tight text-neutral-100 hover:text-primary-300 transition-all duration-500 ease-out card-hover" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-2 h-5 w-5 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                        </svg>Melina Niavarani
                    </router-link>
                    <div class="text-center mb-16">
                        <h1 class="text-5xl font-bold tracking-tight gradient-text sm:text-6xl lg:text-7xl mb-4">
                            All Projects
                        </h1>
                        <p class="text-lg text-neutral-300 max-w-2xl mx-auto">
                            A comprehensive archive of all my development work and creative projects
                        </p>
                    </div>
                    <archiveTable/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import archiveTable from '@/components/projects/archive/ArchiveTable.vue'

export default {
components: {
    archiveTable,
},
}
</script>