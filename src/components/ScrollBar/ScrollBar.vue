<template>
  <div
    class="setting flex column align-center"
  >
    <div
      class="scroller"
    >
      <div
        class="settingImage"
        :class="`${settingName}1`"
      />
      <div
        class="scrollBar flex column align-center"
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
      <div
        class="settingImage"
        :class="`${settingName}0`"
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
import { ref, toRefs } from 'vue';
import { setBrushSize, setOpacity } from '../../../module/js/draw';

const props = defineProps({
  settingName: String,
});
const size = ref(100);
let touching = false;
let moving = false;
let lastPosition = 0;
const setSize = () => {
  switch (props.settingName) {
    case 'brush':
      setBrushSize(size.value / 10);
      break;
    case 'opacity':
      setOpacity(size.value / 100);
      break;
    default:
      break;
  }
};
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
  setSize();
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

  const value = parseInt(e.target.value, 10) >= 100 ? 100 : parseInt(e.target.value, 10);

  e.target.value = value;
  size.value = value;
  setSize();
};
const { settingName } = toRefs(props);

</script>

<style lang="scss">
.setting {
  position: relative;
  width: 45px;

  .scroller {
    position: relative;

    .scrollBar {
      position: relative;
      width: 30px;

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
    }

    .settingImage {
      position: relative;
      width: 30px;
      height: 30px;
      margin: 10px 0;

      &.opacity0 {
        background-image: url('../../assets/opacity0.png');
      }

      &.opacity1 {
        background-image: url('../../assets/opacity1.png');
      }

      &.brush0 {
        background-image: url('../../assets/brush0.png');
      }

      &.brush1 {
        background-image: url('../../assets/brush1.png');
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
