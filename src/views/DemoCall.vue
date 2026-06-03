<template>
  <section class="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-8 md:py-20 px-4 md:px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
          Video Call 
        </h1>
        <p class="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto px-4">
          Real video calling - just like Google Meet
        </p>
      </div>

      <!-- Main Options (Google Meet style) -->
      <div v-if="!started && !showJoinForm" class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- New Meeting -->
          <div class="glass-card p-8 hover:border-primary-500/50 transition-all cursor-pointer group" @click="createNewMeeting">
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-white">
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-neutral-100 mb-3">New Meeting</h3>
              <p class="text-neutral-400 mb-6">Create a new meeting and invite others</p>
              <div class="inline-flex items-center gap-2 text-primary-300 font-semibold">
                <span>Start now</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Join with Code -->
          <div class="glass-card p-8 hover:border-accent-500/50 transition-all cursor-pointer group" @click="showJoinForm = true">
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-600 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-white">
                  <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-neutral-100 mb-3">Enter a Code</h3>
              <p class="text-neutral-400 mb-6">Join an existing meeting with a code</p>
              <div class="inline-flex items-center gap-2 text-accent-300 font-semibold">
                <span>Join meeting</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- How It Works -->
        <div class="mt-12 glass-card p-6 max-w-3xl mx-auto">
          <h3 class="text-lg font-semibold text-neutral-200 mb-4 text-center">How it works</h3>
          <div class="space-y-4 text-sm">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shrink-0 text-white font-bold text-xs">1</div>
              <div class="text-neutral-300">
                <strong class="text-neutral-100">Create meeting:</strong> Click "New Meeting" - creates a unique room code
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-accent-600 flex items-center justify-center shrink-0 text-white font-bold text-xs">2</div>
              <div class="text-neutral-300">
                <strong class="text-neutral-100">Share the code:</strong> Send the code to people you want to join
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shrink-0 text-white font-bold text-xs">3</div>
              <div class="text-neutral-300">
                <strong class="text-neutral-100">Others join:</strong> They enter the code and join instantly
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-accent-600 flex items-center justify-center shrink-0 text-white font-bold text-xs">4</div>
              <div class="text-neutral-300">
                <strong class="text-neutral-100">Video chat:</strong> Everyone can see and hear each other, share screens, and chat!
              </div>
            </div>
          </div>
          <div class="mt-6 pt-6 border-t border-neutral-700 text-center">
            <p class="text-xs text-neutral-500">
              💡 Powered by Jitsi Meet - completely free and open source
            </p>
          </div>
        </div>
      </div>

      <!-- Join Form -->
      <div v-if="!started && showJoinForm" class="glass-card p-4 md:p-8 max-w-2xl mx-auto">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl md:text-2xl font-semibold text-neutral-100">Join Video Call</h2>
          <button @click="goBack" class="text-neutral-400 hover:text-neutral-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
            </svg>
          </button>
        </div>
        
        <form @submit.prevent="joinCall" class="space-y-4">
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
              Meeting Code
            </label>
            <input 
              v-model="room" 
              type="text"
              placeholder="abc-def-ghi" 
              required
              class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all uppercase tracking-wider"
            />
            <p class="text-xs text-neutral-500 mt-1">
              Enter the meeting code shared with you
            </p>
          </div>

          <button 
            type="submit"
            class="w-full modern-button justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"/>
            </svg>
            <span class="gradient-text font-semibold">Join Now</span>
          </button>
        </form>
      </div>

      <!-- Video Call Container -->
      <div v-if="started" class="space-y-4 md:space-y-6">
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
                <p class="text-xs md:text-sm text-neutral-400">Meeting Code</p>
                <p class="text-base md:text-lg font-semibold text-primary-300 font-mono uppercase">{{ room }}</p>
              </div>
            </div>
            
            <!-- Room info for mobile -->
            <div class="sm:hidden text-center border-t border-neutral-700 pt-3">
              <p class="text-xs text-neutral-400">Meeting Code</p>
              <p class="text-sm font-semibold text-primary-300 font-mono uppercase">{{ room }}</p>
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
        />

      </div>

      <!-- Back to Portfolio -->
      <div class="mt-12 flex flex-col items-center gap-6">
        <LanguageSwitcher />
        <router-link
          :to="localePath('/')"
          class="inline-flex items-center gap-2 text-primary-300 hover:text-primary-400 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:-scale-x-100">
            <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
          </svg>
          {{ t('demoPage.back') }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import VideoCall from '@/components/VideoCall.vue'
import LanguageSwitcher from '@/components/header/LanguageSwitcher.vue'
import { useLocalePath } from '@/composables/useLocalePath'

const { t } = useI18n()
const { localePath } = useLocalePath()

const name = ref('Melina')
const room = ref('')
const started = ref(false)
const showJoinForm = ref(false)

function generateMeetingCode() {
  const timestamp = Date.now().toString(36).slice(-4)
  const random = () => Math.random().toString(36).substring(2, 4)
  return `${random()}${timestamp}${random()}`
}

function createNewMeeting() {
  room.value = generateMeetingCode()
  if (!name.value || name.value === 'Melina') {
    const userName = prompt('Enter your name:', 'Melina')
    if (userName) name.value = userName
  }
  started.value = true
}

function joinCall() {
  if (name.value.trim() && room.value.trim()) {
    started.value = true
  }
}

function goBack() {
  showJoinForm.value = false
  room.value = ''
}

function endCall() {
  started.value = false
  showJoinForm.value = false
  name.value = 'Melina'
  room.value = ''
}
</script>
