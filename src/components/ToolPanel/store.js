import { ref, reactive, watch } from 'vue';
import ToolPanelName from './ToolPanelName';

const toolPanelName = ref('');

export const visibleToolName = reactive(
  {
    [ToolPanelName.pencil]: false,
    [ToolPanelName.eraser]: false,
  },
);
watch(visibleToolName, () => {
  console.log(visibleToolName);
});

export const toggleToolPanelVisible = (name, force) => {
  const visible = typeof force === 'boolean' ? force : !visibleToolName[name];

  if (visible && toolPanelName.value && !force) {
    visibleToolName[toolPanelName.value] = false;
  }

  visibleToolName[name] = visible;
  toolPanelName.value = visible ? name : '';
};
