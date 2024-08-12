import { defineStore } from "pinia";

export const useDragAndDropStore = defineStore('dragAndDropStore', {
    state: () => ({ 
      draggedType: null,
      isDragging: false,
      isDragOver: false,
      activeNodeId: '',
      nodes: [],
      edges: [],
    }),
    // getters: {
    //   doubleCount: (state) => state.count * 2,
    // },
    // actions: {
    //   increment() {
    //     this.count++
    //   },
    // },
  })