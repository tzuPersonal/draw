<template>
  <div
    class="toolPanel flex column"
  >
    <div
      class="flex row justify-between align-center"
    >
      <ScrollBar v-for="(setting, index) in settings" :key="index"
        :settingName="setting"
      />
    </div>
    <div
      class="color flex row wrap"
    >
      <div v-for="(defaultColor, index) in defaultColors" :key="index"
        :style="{
          'background-color': defaultColor
        }"
        class="defaultColor"
        @click="toggleColor(defaultColor)"
      />
      <div
        class="currentColor"
        :style="{
          '--currentColor': color
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { color } from './store';
import ScrollBar from '../ScrollBar/ScrollBar.vue';

const settings = ['brush', 'opacity'];
const defaultColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'black', 'white'];
const toggleColor = (defaultColor) => {
  color.value = defaultColor;
};

</script>

<style lang="scss" scope>
.toolPanel {
  position: relative;
  width: 100%;
  border-radius: 10px;
  margin: 10px 0;

  .color {
    --currentColor: black;

    > div {
      width: 30px;
      height: 30px;
      margin: 2px 1px;
      border: 1px solid black;
    }

    .currentColor {
      background-color: var(--currentColor);
    }
  }
}
</style>
