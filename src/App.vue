<template>
  <div @mousemove="handleMouseMove" class="relative min-h-screen overflow-hidden">
    <!-- Modern animated background -->
    <div class="fixed inset-0 z-0">
      <!-- Gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800"></div>
      
      <!-- Animated gradient orbs -->
      <div class="absolute top-0 -left-4 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 4s;"></div>
      
      <!-- Interactive mouse gradient -->
      <div class="pointer-events-none fixed inset-0 z-30 transition duration-300"
           :style="{background: `radial-gradient(800px at ${xPosition}px ${yPosition}px, rgba(59, 130, 246, 0.1), transparent 80%)`}">
      </div>
      
      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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
  },
  methods: {
    handleMouseMove({clientX, clientY}) {
      this.xPosition = clientX
      this.yPosition = clientY
    }
  }
}
</script>