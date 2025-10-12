<template>
  <div class="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-lg overflow-hidden shadow-2xl" ref="container"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  roomName: {
    type: String,
    default: null
  },
  userName: {
    type: String,
    default: 'Guest'
  },
  lang: {
    type: String,
    default: 'en',
    validator: (value) => ['en', 'fa', 'ar'].includes(value)
  }
})

const container = ref(null)
let jitsiApi = null

// using meet.jit.si free server
const JITSI_DOMAIN = 'meet.jit.si'

onMounted(async () => {
  try {
    const roomToJoin = generateRoomName(props.roomName)
    console.log('Joining room:', roomToJoin)
    
    await loadJitsiScript()
    await createJitsiMeeting(roomToJoin)
  } catch (err) {
    console.error('Failed to create video call:', err)
    showErrorMessage(err.message)
  }
})

onBeforeUnmount(() => {
  // cleanup jitsi instance
  if (jitsiApi) {
    try {
      jitsiApi.dispose()
    } catch (err) {
      console.error('Cleanup error:', err)
    }
    jitsiApi = null
  }
  
  if (container.value) {
    container.value.innerHTML = ''
  }
})

function generateRoomName(providedName) {
  if (providedName && providedName.trim() !== '') {
    // replace spaces with dashes for cleaner URLs
    return providedName.trim().replace(/\s+/g, '-').toLowerCase()
  }
  // generate random room name with timestamp to ensure it's always new and unlocked
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).slice(2, 7)
  return `open-${random}-${timestamp}`
}

function loadJitsiScript() {
  return new Promise((resolve, reject) => {
    if (window.JitsiMeetExternalAPI) {
      resolve()
      return
    }
    
    // check if script is already being loaded
    if (document.querySelector('script[src*="external_api.js"]')) {
      const checkInterval = setInterval(() => {
        if (window.JitsiMeetExternalAPI) {
          clearInterval(checkInterval)
          resolve()
        }
      }, 100)
      
      // timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval)
        reject(new Error('Script loading timeout'))
      }, 10000)
      return
    }
    
    // load the script
    const script = document.createElement('script')
    script.src = `https://${JITSI_DOMAIN}/external_api.js`
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Jitsi'))
    document.head.appendChild(script)
  })
}

async function createJitsiMeeting(roomName) {
  if (!window.JitsiMeetExternalAPI) {
    throw new Error('Jitsi API not loaded')
  }
  
  const options = {
    roomName: roomName,
    width: '100%',
    height: '100%',
    parentNode: container.value,
    userInfo: {
      displayName: props.userName || 'Guest'
    },
    configOverwrite: {
      startWithAudioMuted: false,
      startWithVideoMuted: false,
      prejoinPageEnabled: false,
      disableDeepLinking: true
    },
    interfaceConfigOverwrite: {
      SHOW_JITSI_WATERMARK: false,
      DEFAULT_BACKGROUND: '#1a1a1a',
      MOBILE_APP_PROMO: false,
      TOOLBAR_BUTTONS: [
        'microphone', 
        'camera', 
        'desktop', 
        'fullscreen',
        'hangup', 
        'chat', 
        'tileview'
      ]
    }
  }
  
  jitsiApi = new window.JitsiMeetExternalAPI(JITSI_DOMAIN, options)
  
  // listen to conference events
  jitsiApi.addEventListener('videoConferenceJoined', (e) => {
    console.log('✅ Joined the meeting')
  })
  
  jitsiApi.addEventListener('videoConferenceLeft', () => {
    console.log('Left the call')
  })
  
  jitsiApi.addEventListener('participantJoined', (e) => {
    console.log('👤 Participant joined:', e.displayName)
  })
  
  jitsiApi.addEventListener('participantLeft', (e) => {
    console.log('👋 Participant left:', e.displayName)
  })
  
  jitsiApi.addEventListener('readyToClose', () => {
    console.log('Meeting ended')
  })
  
  console.log('Meeting ready for room:', roomName)
}

function showErrorMessage(message) {
  if (!container.value) return
  
  // show error UI
  container.value.innerHTML = `
    <div class="flex flex-col items-center justify-center h-full bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg p-8">
      <div class="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-red-500">
          <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
            </svg>
      </div>
      <h3 class="text-xl font-bold text-neutral-100 mb-2">Oops! Something went wrong</h3>
      <p class="text-neutral-400 text-center max-w-md">${message}</p>
      <button 
        onclick="window.location.reload()" 
        class="mt-6 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
      >
        Reload Page
          </button>
    </div>
  `
}
</script>

<style scoped>
:deep(iframe) {
  border-radius: 0.5rem;
}
</style>
