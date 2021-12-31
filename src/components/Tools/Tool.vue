<template>
  <div
    class="toolController"
  >
    <Button
      class="tool"
      :class="toolName === selectingToolName ? 'selecting' : ''"
      :style="{ 'background-image': `url(${require(`../../assets/${toolName}.png`)})` }"
      @click="switchTool"
    />
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { selectingToolName, toggleSelectingTool } from './store';
import Button from '../Button/Button.vue';

const props = defineProps({
  toolName: String,
});
const emit = defineEmits(['switchTool']);
const switchTool = () => {
  toggleSelectingTool(props.toolName);
  emit('switchTool');
};

const { toolName } = toRefs(props);
</script>

<style lang="scss" scope>
.toolController {
  position: relative;

  .tool {
    position: relative;
    width: 45px;
    height: 45px;
    flex-shrink: 0;

    &.selecting {
      transform: scale(0.96);
      filter: brightness(0.8);
      pointer-events: none;
      cursor: auto;
    }
  }
}
</style>
