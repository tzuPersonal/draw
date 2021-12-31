<template>
  <div
    class="toolController"
  >
    <Button
      class="tool"
      :style="{ 'background-image': `url(${require(`../../assets/${toolName}.png`)})` }"
      @click="switchTool"
    />
    <ToolPanel v-if="visibleToolName[toolName]" />
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { visibleToolName } from '../ToolPanel/store';
import Button from '../Button/Button.vue';
import ToolPanel from '../ToolPanel/ToolPanel.vue';

const props = defineProps({
  toolName: String,
});

const emit = defineEmits(['switchTool']);

const switchTool = () => {
  emit('switchTool');
};

const { toolName } = toRefs(props);
</script>

<style lang="scss" scope>
.toolController {
  position: relative;

  .tool {
    width: 45px;
    height: 45px;
    border: 1px solid black;
    flex-shrink: 0;
  }
}
</style>
