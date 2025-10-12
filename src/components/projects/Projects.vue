<template>
    <section id="projects" class="w-full" aria-label="Selected projects">
        <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div class="mb-12 text-center">
            <h2 class="text-4xl font-bold tracking-tight gradient-text sm:text-5xl lg:text-6xl">
              Projects
            </h2>
            <p class="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </div>
        <div class="space-y-8">
            <!-- Video Call Demo -->
            <div class="glass-card p-8 card-hover animate-fade-in">
                <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold">
                            <router-link class="group/link inline-flex items-baseline font-bold leading-tight text-neutral-100 hover:text-primary-300 focus-visible:text-primary-300 transition-colors duration-200" to="/demo/call" aria-label="Video Call Demo">
                                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span class="gradient-text">Video Call</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-5 w-5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-2 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </router-link>
                        </h3>
                        <p class="text-neutral-300 leading-relaxed">A real video calling app just like Google Meet! Create a meeting or join with a code. Features HD video/audio, screen sharing, live chat, and supports English, Persian, and Arabic. No registration needed, fully encrypted.</p>
                        <div class="flex flex-wrap gap-2" aria-label="Technologies used:">
                            <span class="glass-card px-3 py-1 text-xs font-medium text-primary-300">Vue 3</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-accent-300">Jitsi Meet</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-primary-300">WebRTC</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-accent-300">Real-time</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-primary-300">P2P</span>
                        </div>
                    </div>
                    <div class="project-image-container">
                        <img src='@/assets/images/videocall-demo.png' alt="Video Call Demo Screenshot" loading="lazy" class="project-image">
                    </div>
                </div>
            </div>

            <div class="glass-card p-8 card-hover animate-fade-in">
                <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold">
                            <a class="group/link inline-flex items-baseline font-bold leading-tight text-neutral-100 hover:text-primary-300 focus-visible:text-primary-300 transition-colors duration-200" href="https://iamdb-by-m.netlify.app/" target="_blank" rel="noreferrer" aria-label="IAMDB App">
                                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span class="gradient-text">IAMDB App</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-5 w-5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-2 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </h3>
                        <p class="text-neutral-300 leading-relaxed">IAMDB is an online database of information related to films, television series, podcasts, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews</p>
                        <div class="flex flex-wrap gap-2" aria-label="Technologies used:">
                            <span class="glass-card px-3 py-1 text-xs font-medium text-primary-300">Vue</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-accent-300">Option API</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-primary-300">Pinia</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-accent-300">Netlify</span>
                        </div>
                    </div>
                    <div class="project-image-container">
                        <img src='@/assets/images/IAMDB.png' alt="IAMDB App Screenshot" loading="lazy" class="project-image">
                    </div>
                </div>
            </div>
            <div class="glass-card p-8 card-hover animate-fade-in">
                <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold">
                            <a class="group/link inline-flex items-baseline font-bold leading-tight text-neutral-100 hover:text-primary-300 focus-visible:text-primary-300 transition-colors duration-200" href="https://etalon.netlify.app" target="_blank" rel="noreferrer" aria-label="Etalon App">
                                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span class="gradient-text">Etalon App</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-5 w-5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-2 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </h3>
                        <p class="text-neutral-300 leading-relaxed">A shopping app is an application that allows customers to browse and buy products or services from a retailer or service provider.</p>
                        <div class="flex flex-wrap gap-2" aria-label="Technologies used:">
                            <span class="glass-card px-3 py-1 text-xs font-medium text-primary-300">Vue</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-accent-300">Pinia</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-primary-300">Netlify</span>
                        </div>
                    </div>
                    <div class="project-image-container">
                        <img src="@/assets/images/etalon.png" alt="Etalon App Screenshot" loading="lazy" class="project-image">
                    </div>
                </div>
            </div>
            <div class="glass-card p-8 card-hover animate-fade-in">
                <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold">
                            <a class="group/link inline-flex items-baseline font-bold leading-tight text-neutral-100 hover:text-primary-300 focus-visible:text-primary-300 transition-colors duration-200" href="https://rock-paper-scissors-by-m.netlify.app" target="_blank" rel="noreferrer" aria-label="Rock Paper Scissors Game">
                                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span class="gradient-text">Rock Paper Scissors</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-5 w-5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-2 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </h3>
                        <p class="text-neutral-300 leading-relaxed">Play a classic game of Rock-Paper-Scissors. Rock-Paper-Scissors Game App.</p>
                        <div class="flex flex-wrap gap-2" aria-label="Technologies used:">
                            <span class="glass-card px-3 py-1 text-xs font-medium text-primary-300">Vue</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-accent-300">Netlify</span>
                        </div>
                    </div>
                    <div class="project-image-container">
                        <img src="@/assets/images/rock-paper-scissors.png" alt="Rock Paper Scissors Game Screenshot" loading="lazy" class="project-image">
                    </div>
                </div>
            </div>
            
            <div class="glass-card p-8 card-hover animate-fade-in">
                <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold">
                            <a class="group/link inline-flex items-baseline font-bold leading-tight text-neutral-100 hover:text-primary-300 focus-visible:text-primary-300 transition-colors duration-200" href="https://todolist-by-m.netlify.app" target="_blank" rel="noreferrer" aria-label="Todo List App">
                                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span class="gradient-text">Todo List App</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-5 w-5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-2 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </h3>
                        <p class="text-neutral-300 leading-relaxed">To Do is a task management app to help you stay organized and manage your day-to-day.</p>
                        <div class="flex flex-wrap gap-2" aria-label="Technologies used:">
                            <span class="glass-card px-3 py-1 text-xs font-medium text-primary-300">Vue</span>
                            <span class="glass-card px-3 py-1 text-xs font-medium text-accent-300">Netlify</span>
                        </div>
                    </div>
                    <div class="project-image-container">
                        <img src="@/assets/images/Todo-list.png" alt="Todo List App Screenshot" loading="lazy" class="project-image">
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-12 text-center">
            <router-link class="modern-button inline-flex items-center gap-2 group" aria-label="View Full Project Archive" to="/archive" title="projects">
                <span class="gradient-text font-semibold">View Full Project Archive</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true">
                    <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                </svg>
            </router-link>
        </div>
        </div>
    </section>    
</template>