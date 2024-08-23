import { defineStore } from "pinia";

export const useDragAndDropStore = defineStore("dragAndDropStore", {
  state: () => ({
    draggedType: null,
    isDragging: false,
    isDragOver: false,
  }),
});
