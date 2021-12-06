<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import {
  onMounted,
  ref,
} from 'vue';
import getCanvas from '../../module/js/draw';

const canvas = ref('');

onMounted(() => {
  getCanvas(canvas.value);
});
</script>

<style lang="scss" scoped>
canvas {
  width: 400px;
  height: 300px;
  border: 1px solid black;
  background-color: white;
}
</style>
