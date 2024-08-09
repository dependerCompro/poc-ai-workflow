<template>
  <aside class="sidebar-aside">
    <div class="description">You can drag these nodes to the pane.</div>

    <div class="nodes">
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'input')">Input Node</div>

      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'processor')">Processor Node
      </div>

      <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'output')">Output Node</div>
    </div>
  </aside>
</template>

<script>
import { useDragAndDropStore } from '@/stores/index.js';

export default {
  name: 'SideBar',
  data() {
    return {
      store: useDragAndDropStore()
    }
  },
  methods: {
    onDragStart(event, type) {
      if (event.dataTransfer) {
        event.dataTransfer.setData('application/vueflow', type)
        event.dataTransfer.effectAllowed = 'move'
      }
      this.store.draggedType = type
      this.store.isDragging = true

      document.addEventListener('drop', this.onDragEnd)
    },
    onDragEnd() {
      this.store.isDragging = false
      this.store.isDragOver = false
      this.store.draggedType = null
      document.removeEventListener('drop', this.onDragEnd)
    }

  }
}
</script>

<style scoped>
.sidebar-aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  background-color: cornflowerblue;

  .description {
    padding: 24px 0;
    border-bottom: 2px solid white;
    color: white;
  }

  .nodes {
    margin-top: 50px;

    div {
      margin-top: 36px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      border: 2px solid wheat;
      cursor: grab;
    }
  }
}
</style>