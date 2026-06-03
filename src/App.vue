<template>
  <div @mousemove="handleMouseMove" class="relative min-h-screen overflow-hidden">
    <!-- Modern animated background -->
    <div class="fixed inset-0 z-0">
      <!-- Gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-950 via-blue-950/40 to-purple-950/40"></div>
      
      <!-- Animated gradient orbs with enhanced vibrant colors -->
      <div class="absolute top-0 -left-4 w-72 h-72 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-accent-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob" style="animation-delay: 2s;"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400/25 rounded-full mix-blend-multiply filter blur-3xl opacity-75 animate-blob" style="animation-delay: 4s;"></div>
      
      <!-- Secondary decorative elements with more visibility -->
      <div class="absolute top-1/2 -right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-1/4 -left-32 w-80 h-80 bg-cyan-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style="animation-delay: 3s;"></div>
      <div class="absolute top-1/3 right-1/4 w-60 h-60 bg-primary-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-glow" style="animation-delay: 2.5s;"></div>
      
      <!-- Interactive mouse gradient with enhanced effect -->
      <div class="pointer-events-none fixed inset-0 z-30 transition duration-300"
           :style="{background: `radial-gradient(900px at ${xPosition}px ${yPosition}px, rgba(59, 130, 246, 0.2), transparent 80%)`}">
      </div>
      
      <!-- Enhanced grid pattern overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      
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