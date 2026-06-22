<template>
  <div @mousemove="handleMouseMove" class="relative min-h-screen overflow-hidden">
    <!-- Modern animated background -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-neutral-950"></div>
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),transparent_32%,rgba(34,197,94,0.08)_68%,transparent)]"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300/40 to-transparent"></div>
      <div class="absolute left-1/2 top-0 h-[520px] w-px -translate-x-1/2 bg-gradient-to-b from-primary-300/25 to-transparent"></div>
      
      <!-- Interactive mouse gradient with enhanced effect -->
      <div class="pointer-events-none fixed inset-0 z-30 transition duration-300"
           :style="{background: `radial-gradient(760px at ${xPosition}px ${yPosition}px, rgba(56, 189, 248, 0.1), transparent 72%)`}">
      </div>
      
      <!-- Enhanced grid pattern overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25"></div>
      
      <!-- Subtle radial gradient overlay for depth -->
      <div class="absolute inset-0 bg-radial-gradient-to-center opacity-20"></div>
    </div>
    
    <!-- Main content -->
    <div class="relative z-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xPosition: 0,
      yPosition: 0,
    }
  },
  mounted() {
    // Initialize position to center
    this.xPosition = window.innerWidth / 2
    this.yPosition = window.innerHeight / 2
    
    // Add smooth interaction tracking
    window.addEventListener('mousemove', this.throttledMouseMove)
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.throttledMouseMove)
  },
  methods: {
    handleMouseMove({clientX, clientY}) {
      this.xPosition = clientX
      this.yPosition = clientY
    },
    throttledMouseMove(e) {
      this.handleMouseMove(e)
    }
  }
}
</script>

<style scoped>
.bg-radial-gradient-to-center {
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
}
</style>
