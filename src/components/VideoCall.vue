<template>
  <div class="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-lg overflow-hidden shadow-2xl bg-neutral-900">
    <iframe 
      :src="meetingUrl"
      allow="camera; microphone; fullscreen; display-capture; autoplay"
      class="w-full h-full border-0 rounded-lg"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  roomName: String,
  userName: {
    type: String,
    default: 'Guest'
  }
})

const meetingUrl = computed(() => {
  const room = props.roomName || generateRoomName()
  const name = encodeURIComponent(props.userName)
  const config = 'config.prejoinPageEnabled=false&config.startWithAudioMuted=false&config.startWithVideoMuted=false&interfaceConfig.SHOW_JITSI_WATERMARK=false&interfaceConfig.MOBILE_APP_PROMO=false'
  
  return `https://meet.jit.si/${room}#userInfo.displayName="${name}"&${config}`
})

function generateRoomName() {
  const timestamp = Date.now()
  const random = Math.random().toString(36).slice(2, 9)
  return `melina${random}${timestamp}`
}
</script>

<style scoped>
iframe {
  border: none;
}
</style>
