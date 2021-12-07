<template>
  <div
    class="button"
    :style="{
      'background-image': `url(${buttonImage})`
    }"
  />
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  buttonImage: String,
});
const { buttonImage } = toRefs(props);
console.log(buttonImage);
</script>

<style lang="scss" scope>
.button {
  cursor: pointer;

  &:active {
    transform: scale(0.96);
  }
}
</style>
