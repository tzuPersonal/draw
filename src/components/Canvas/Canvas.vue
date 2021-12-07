<template>
  <canvas ref="canvas" width="800" height="600"></canvas>
</template>

<script setup>
import {
  onMounted,
  ref,
} from 'vue';
import getCanvas from '../../../module/js/draw';

const canvas = ref('');

onMounted(() => {
  getCanvas(canvas.value);
});
</script>

<style lang="scss" scoped>
canvas {
  border: 1px solid black;
  background-color: white;
  border-radius: 15px;
}
</style>
