import { ref, reactive } from 'vue';
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
