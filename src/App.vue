<template>
  <div class="canvas-container flex justify-center align-center">
    <Canvas />
  </div>
</template>

<script setup>
import Canvas from './components/Canvas.vue';
</script>

<style lang="scss">
@import url('./BaseCss/main.scss');

.canvas-container {
  width: 800px;
  height: 600px;
  background-color: blue;
}
</style>
