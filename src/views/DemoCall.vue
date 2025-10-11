<template>
  <section class="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-8 md:py-20 px-4 md:px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
          Video Call Demo
        </h1>
        <p class="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto px-4">
          Real video calling with host/participant roles
        </p>
        <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary-600/10 border border-primary-600/30 rounded-lg">
          <span class="text-sm text-primary-300">👑 First to join = Host with extra controls!</span>
        </div>
      </div>

      <!-- Start Form -->
      <div v-if="!started" class="glass-card p-4 md:p-8 max-w-2xl mx-auto">
        <h2 class="text-xl md:text-2xl font-semibold text-neutral-100 mb-4 md:mb-6">Join Video Call</h2>
        <form @submit.prevent="startCall" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-neutral-300 mb-2">
              Your Name
            </label>
            <input 
              v-model="name" 
              type="text"
              placeholder="Enter your name" 
              required
              class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-neutral-300 mb-2">
              Room Name (Optional)
            </label>
            <input 
              v-model="room" 
              type="text"
              placeholder="Leave empty for random room" 
              class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
            />
            <p class="text-xs text-neutral-500 mt-1">
              Share the room name with others to join the same call
            </p>
          </div>

          <div>
            <label class="block text-sm font-medium text-neutral-300 mb-2">
              Language
            </label>
            <select 
              v-model="selectedLang"
              class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
            >
              <option value="en">English</option>
              <option value="fa">فارسی (Persian)</option>
              <option value="ar">العربية (Arabic)</option>
            </select>
          </div>

          <button 
            type="submit"
            class="w-full modern-button justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
            </svg>
            <span class="gradient-text font-semibold">Start Video Call</span>
          </button>
        </form>

        <!-- Features -->
        <div class="mt-8 pt-8 border-t border-neutral-700">
          <h3 class="text-lg font-semibold text-neutral-200 mb-4">Features</h3>
          <ul class="space-y-2 text-sm text-neutral-400">
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-primary-400">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Host/Participant roles (first = host 👑)
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-primary-400">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              HD video and audio quality
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-primary-400">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Screen sharing capability
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-primary-400">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Built-in chat messaging
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-primary-400">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Multilingual support (EN, FA, AR)
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-primary-400">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              No registration required
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-primary-400">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              End-to-end encrypted
            </li>
          </ul>
        </div>
      </div>

      <!-- Video Call Container -->
      <div v-else class="space-y-4 md:space-y-6">
        <!-- Mobile-friendly header -->
        <div class="glass-card p-3 md:p-4">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
            <!-- User info - stacked on mobile -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div class="text-center sm:text-left">
                <p class="text-xs md:text-sm text-neutral-400">Connected as</p>
                <p class="text-base md:text-lg font-semibold text-neutral-100">{{ name }}</p>
              </div>
              <div class="hidden sm:block border-l border-neutral-700 pl-6">
                <p class="text-xs md:text-sm text-neutral-400">Room</p>
                <p class="text-base md:text-lg font-semibold text-primary-300">{{ room || 'Random Room' }}</p>
              </div>
            </div>
            
            <!-- Room info for mobile -->
            <div class="sm:hidden text-center border-t border-neutral-700 pt-3">
              <p class="text-xs text-neutral-400">Room</p>
              <p class="text-sm font-semibold text-primary-300">{{ room || 'Random Room' }}</p>
            </div>
            
            <!-- End call button -->
            <button 
              @click="endCall"
              class="w-full sm:w-auto px-4 md:px-6 py-2 md:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5">
                <path fill-rule="evenodd" d="M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-1.97-.394a1.5 1.5 0 00-1.316.478l-.665.665a.5.5 0 01-.497.114 11.27 11.27 0 01-5.588-5.588.5.5 0 01.114-.497l.665-.665a1.5 1.5 0 00.478-1.316l-.394-1.97A1.5 1.5 0 005.648 2H3.5z" clip-rule="evenodd" />
              </svg>
              End Call
            </button>
          </div>
        </div>

        <VideoCall 
          :userName="name" 
          :roomName="room" 
          :lang="selectedLang" 
        />

      </div>

      <!-- Back to Portfolio -->
      <div class="mt-12 text-center">
        <router-link 
          to="/"
          class="inline-flex items-center gap-2 text-primary-300 hover:text-primary-400 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 transition-transform group-hover:-translate-x-1">
            <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
          </svg>
          Back to Portfolio
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import VideoCall from '@/components/VideoCall.vue'

const name = ref('Melina')
const room = ref('')
const selectedLang = ref('en')
const started = ref(false)

function startCall() {
  if (name.value.trim()) {
    started.value = true
  }
}

function endCall() {
  started.value = false
  // Reset to default
  name.value = 'Melina'
  room.value = ''
}
</script>

