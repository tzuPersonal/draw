import { ref } from 'vue';

export const selectingToolName = ref('pencil');

export const toggleSelectingTool = (name) => {
  if (selectingToolName.value === name) { return; }

  selectingToolName.value = name;
};
