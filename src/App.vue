<template>
  <div @mousemove="handleMouseMove">
    <div class="pointer-events-none fixed inset-0 z-30 transition duration-300"
         :style="{background: `radial-gradient(600px at ${xPosition}px ${yPosition}px, rgba(29, 78, 216, 0.15), transparent 80%)`}">
    </div>
    <router-view></router-view>
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