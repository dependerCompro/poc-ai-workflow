import { defineStore } from "pinia";

export const useDragAndDropStore = defineStore("dragAndDropStore", {
  state: () => ({
    draggedType: null,
    isDragging: false,
    isDragOver: false,
    darkMode: false,
    nodes: [],
    edges: [],
  }),
  actions: {
    updateUserInputToNode(nodeId, input) {
      this.nodes.forEach((node) => {
        if (node.id == nodeId) {
          node.data.userInput = input;
        }
      });
    },
    updateFocusNodeData(nodeId) {
      // if nodeId is '', it will set inFocus to false in each node.
      this.nodes.forEach((node) => {
        if (node.id == nodeId) {
          node.data.inFocus = true;
        } else {
          node.data.inFocus = false;
        }
      });
    },
  },
});
