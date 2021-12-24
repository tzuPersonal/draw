<template>
  <div class="canvas-container flex row">
    <Canvas />
    <Tools />
  </div>
</template>

<script setup>
import Canvas from './components/Canvas/Canvas.vue';
import Tools from './components/Tools/Tools.vue';
</script>

<style lang="scss">
@import '../module/scss/main.scss';
</style>
