<template>
  <div
    class="toolContainer"
  >
    <div class="tools flex row justify-between align-start wrap">
      <Tool v-for="(tool, index) in tools" :key="index"
        :toolName="tool.name"
        @switchTool="tool.callback"
      />
    </div>
    <ToolPanel />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { setColor } from '../../../module/js/draw';
import Tool from './Tool.vue';
import ToolPanel from '../ToolPanel/ToolPanel.vue';

const tools = ref(
  [
    {
      name: 'pencil',
      callback: () => {
        setColor('black');
      },
    },
    {
      name: 'eraser',
      callback: () => {
        setColor('white');
      },
    },
    // { name: 'eraser', do: () => { console.log('eraser'); } },
    // { name: 'eraser', do: () => { console.log('eraser'); } },
  ],
);
// const switchTool = () => {
//   console.log('switchTool');
// };
</script>

<style lang="scss" scope>
.toolContainer {
  width: 120px;
  height: 600px;
  margin-left: 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: #152b8a;

  .tools {
    width: 100%;

    > div {
      margin: 10px 0;

      &:first-child, &:nth-child(2) {
        margin-top: 0;
      }

      &:last-child, &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
