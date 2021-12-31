<template>
  <div
    class="scrollBar flex column align-center"
  >
    <div
      class="scroller flex column align-center"
    >
      <div
        class="bar"
        ref="bar"
      />
      <div
        class="scrollBall"
        ref="scrollBall"
        :style="{'--position': `${size}%`}"
        @mousedown.prevent="mousedown"
        @mousemove="mousemove"
        @mouseup="mouseup"
        @mouseout="mouseout"
      />
    </div>
    <input
      type="text"
      :value="size"
      @input="input"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const size = ref(100);
const bar = ref(null);
let touching = false;
let moving = false;
let lastPosition = 0;
const mousedown = (e) => {
  touching = true;
  lastPosition = e.pageY;
};
const mousemove = (e) => {
  if (!touching) { return; }
  if (moving) { return; }

  moving = true;
  window.requestAnimationFrame(() => {
    moving = false;
  });

  const currentPosition = e.pageY;
  const delta = (currentPosition - lastPosition);

  size.value -= delta;
  if (size.value >= 100) { size.value = 100; }
  if (size.value <= 1) { size.value = 1; }
  lastPosition = currentPosition;
};
const mouseup = () => {
  touching = false;
};
const mouseout = () => {
  touching = false;
};
const input = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
  if (e.target.value === '') { e.target.value = 0; }

  const value = parseInt(e.target.value, 10);
  if (value >= 100) { e.target.value = 100; }
};

</script>

<style lang="scss">
.scrollBar {
  position: relative;
  width: 45px;

  .scroller {
    position: relative;
    width: 20px;

    .bar {
      width: 10px;
      height: 100px;
      background-color: gray;
      border-radius: 3px;
    }

    .scrollBall {
      --position: 0;

      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: white;
      bottom: var(--position);
      transform: translateY(var(--position));
      cursor: pointer;

      &:active {
        filter: brightness(0.8);
        transform: scale(0.9) translateY(var(--position));
      }
    }
  }

  input {
    width: 30px;
    height: 30px;
    margin-top: 20px;
    text-align: center;
  }

}
</style>
