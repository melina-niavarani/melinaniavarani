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
let isModerator = false

// using meet.jit.si free server
const JITSI_DOMAIN = 'meet.jit.si'

onMounted(async () => {
  try {
    const roomToJoin = generateRoomName(props.roomName)
    
    // check if this user is the first one (host/moderator)
    isModerator = await checkIfModerator(roomToJoin)
    
    if (isModerator) {
      console.log('You are the host of room:', roomToJoin)
    } else {
      console.log('Joining room:', roomToJoin)
    }
    
    await loadJitsiScript()
    await createJitsiMeeting(roomToJoin, isModerator)
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
    return providedName.trim().replace(/\s+/g, '-')
  }
  // generate random room name if none provided
  return `room-${Math.random().toString(36).slice(2, 10)}`
}

async function checkIfModerator(roomName) {
  // check localStorage to see if this room already has a host
  const roomKey = `room_host_${roomName}`
  const existingHost = localStorage.getItem(roomKey)
  
  if (!existingHost) {
    // no host yet, this user becomes the host
    const hostId = `host_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
    localStorage.setItem(roomKey, hostId)
    // clean up after 24 hours
    setTimeout(() => {
      localStorage.removeItem(roomKey)
    }, 24 * 60 * 60 * 1000)
    return true
  }
  
  return false
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

async function createJitsiMeeting(roomName, isModerator) {
  if (!window.JitsiMeetExternalAPI) {
    throw new Error('Jitsi API not loaded')
  }
  
  const displayName = isModerator 
    ? `👑 ${props.userName || 'Host'}` 
    : props.userName || 'Guest'
  
  const options = {
    roomName: roomName,
    width: '100%',
    height: '100%',
    parentNode: container.value,
    lang: props.lang,
    userInfo: {
      displayName: displayName,
      email: `${displayName.replace(/\s/g, '').toLowerCase()}@guest.local`
    },
    configOverwrite: {
      startWithAudioMuted: false,
      startWithVideoMuted: false,
      enableWelcomePage: false,
      prejoinPageEnabled: false,
      requireDisplayName: false,
      disableDeepLinking: true,
      defaultLanguage: props.lang,
      enableNoisyMicDetection: true,
      resolution: 720,
      // disable lobby/waiting room completely
      enableLobbyChat: false,
      autoKnockLobby: false,
      enableInsecureRoomNameWarning: false,
      disableInviteFunctions: false,
      lobbyEnabled: false,
      // moderator gets extra features
      disableRemoteMute: !isModerator,
      remoteVideoMenu: {
        disableKick: !isModerator,
        disableGrantModerator: !isModerator
      },
      constraints: {
        video: {
          height: { 
            ideal: 720, 
            max: 1080, 
            min: 360 
          }
        }
      }
    },
    interfaceConfigOverwrite: {
      SHOW_JITSI_WATERMARK: false,
      SHOW_WATERMARK_FOR_GUESTS: false,
      SHOW_BRAND_WATERMARK: false,
      BRAND_WATERMARK_LINK: '',
      DEFAULT_BACKGROUND: '#1a1a1a',
      DEFAULT_REMOTE_DISPLAY_NAME: 'Remote User',
      DISABLE_VIDEO_BACKGROUND: false,
      DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
      TOOLBAR_BUTTONS: [
        'microphone', 
        'camera', 
        'closedcaptions', 
        'desktop', 
        'fullscreen',
        'fodeviceselection', 
        'hangup', 
        'chat', 
        'raisehand',
        'videoquality', 
        'tileview', 
        'settings',
        'shortcuts',
        'stats'
      ],
      SETTINGS_SECTIONS: ['devices', 'language', 'moderator', 'profile'],
      FILM_STRIP_MAX_HEIGHT: 120,
      MOBILE_APP_PROMO: false
    }
  }
  
  jitsiApi = new window.JitsiMeetExternalAPI(JITSI_DOMAIN, options)
  
  // listen to conference events
  jitsiApi.addEventListener('videoConferenceJoined', (e) => {
    if (isModerator) {
      console.log('✅ Room created! You are the host.')
      showHostNotification()
      // disable lobby for this room
      try {
        jitsiApi.executeCommand('toggleLobby', false)
      } catch (err) {
        console.log('Could not disable lobby:', err)
      }
    } else {
      console.log('✅ Joined the room')
    }
  })
  
  jitsiApi.addEventListener('videoConferenceLeft', () => {
    console.log('Left the call')
    // clean up room host if moderator leaves
    if (isModerator) {
      const roomKey = `room_host_${roomName}`
      localStorage.removeItem(roomKey)
    }
  })
  
  jitsiApi.addEventListener('participantJoined', (e) => {
    console.log('👤 New participant:', e.displayName)
    if (isModerator) {
      showParticipantJoinedNotification(e.displayName)
    }
  })
  
  jitsiApi.addEventListener('participantLeft', (e) => {
    console.log('👋 Participant left:', e.displayName)
  })
  
  jitsiApi.addEventListener('readyToClose', () => {
    console.log('Meeting ended')
  })
  
  const roleText = isModerator ? 'host' : 'participant'
  console.log(`Meeting created for room: ${roomName} (${roleText})`)
}

function showHostNotification() {
  // show a subtle notification that user is the host
  if (jitsiApi) {
    jitsiApi.executeCommand('displayName', `👑 ${props.userName || 'Host'}`)
  }
}

function showParticipantJoinedNotification(participantName) {
  // could add a toast notification here
  console.log(`Host notification: ${participantName} joined`)
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
