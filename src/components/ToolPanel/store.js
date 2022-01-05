import { ref, reactive, watch } from 'vue';
import { setColor, settingColor } from '../../../module/js/draw';
import ToolPanelName from './ToolPanelName';

const toolPanelName = ref('');

export const visibleToolName = reactive(
  {
    [ToolPanelName.pencil]: false,
    [ToolPanelName.eraser]: false,
  },
);

export const toggleToolPanelVisible = (name, force) => {
  const visible = typeof force === 'boolean' ? force : !visibleToolName[name];

  if (visible && toolPanelName.value && !force) {
    visibleToolName[toolPanelName.value] = false;
  }

  visibleToolName[name] = visible;
  toolPanelName.value = visible ? name : '';
};

export const color = ref(settingColor);

watch(color, () => {
  setColor(color.value);
});
