<template>
  <div @mousemove="handleMouseMove" class="relative min-h-screen overflow-hidden">
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-neutral-950"></div>
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.14),transparent_28%,rgba(34,197,94,0.09)_64%,rgba(250,204,21,0.05)_92%)]"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300/40 to-transparent"></div>
      <div class="absolute left-1/2 top-0 h-[560px] w-px -translate-x-1/2 bg-gradient-to-b from-primary-300/25 to-transparent"></div>
      <div class="absolute inset-x-8 top-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:inset-x-24"></div>
      
      <div class="pointer-events-none fixed inset-0 z-30 transition duration-300"
           :style="{background: `radial-gradient(780px at ${xPosition}px ${yPosition}px, rgba(125, 211, 252, 0.12), transparent 70%)`}">
      </div>
      
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
      
      <div class="absolute inset-0 bg-radial-gradient-to-center opacity-20"></div>
    </div>
    
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
