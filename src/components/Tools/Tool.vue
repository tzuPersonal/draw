<template>
  <Button
    class="tool"
    :buttonImage="require(`../../assets/${toolImage}.png`)"
  />
</template>

<script setup>
import { toRefs } from 'vue';
import Button from '../Button/Button.vue';

const props = defineProps({
  toolImage: String,
});

const { toolImage } = toRefs(props);
</script>

<style lang="scss" scope>
.tool {
  width: 45px;
  height: 45px;
  border: 1px solid black;
  flex-shrink: 0;
  margin: 15px 0;
}
</style>
