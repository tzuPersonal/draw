<template>
  <Button
    class="tool"
    :style="{ 'background-image': `url(${require(`../../assets/${toolImage}.png`)})` }"
    @click="switchTool"
  />
</template>

<script setup>
import { toRefs } from 'vue';
import Button from '../Button/Button.vue';

const props = defineProps({
  toolImage: String,
});

const emit = defineEmits(['switchTool']);

const switchTool = () => {
  emit('switchTool');
};

const { toolImage } = toRefs(props);
</script>

<style lang="scss" scope>
.tool {
  width: 45px;
  height: 45px;
  border: 1px solid black;
  flex-shrink: 0;
}
</style>
