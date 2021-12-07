<template>
  <div class="tools flex column">
    <div class="toolContainer flex row justify-between align-start wrap">
      <Tool v-for="(tool, index) in tools" :key="index"
        :toolImage="tool.name"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tool from './Tool.vue';

const tools = ref(
  [
    { name: 'pencil', do: () => { console.log('pencil'); } },
    { name: 'eraser', do: () => { console.log('eraser'); } },
    { name: 'eraser', do: () => { console.log('eraser'); } },
    { name: 'eraser', do: () => { console.log('eraser'); } },
  ],
);
</script>

<style lang="scss" scope>
.tools {
  width: 100px;
  height: 600px;
  margin-left: 30px;

  .toolContainer {
    width: 100%;
    height: 100%;
  }
}
</style>
