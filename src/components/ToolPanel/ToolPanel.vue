<template>
  <div
    class="toolPanel"
  >
    <div
      class="flex row justify-center align-center"
    >
      <ScrollBar v-for="(setting, index) in settings" :key="index"
        :settingName="setting"
      />
    </div>
  </div>
</template>

<script setup>
import ScrollBar from '../ScrollBar/ScrollBar.vue';

const settings = ['brush', 'opacity'];

</script>

<style lang="scss" scope>
.toolPanel {
  position: relative;
  width: 100%;
  border-radius: 10px;
  margin: 10px 0;
}
</style>
