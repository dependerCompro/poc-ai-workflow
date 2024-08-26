<template>
  <aside class="sidebar-aside">
    <div class="description">You can drag these nodes to the pane.</div>

    <div class="nodes">
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'input-prompt')">Input ( Prompt )</div>
      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'input-data')">input ( Data )</div>
      <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'processor')">Processor</div>
      <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'result-output')">Output</div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    onDragStart(event, type) {
      if (event.dataTransfer) {
        event.dataTransfer.setData('application/vueflow', type)
        event.dataTransfer.effectAllowed = 'move'
      }
      this.$emit('update-dragged-type', type);
      this.$emit('update-isDragging', true);      
      document.addEventListener('drop', this.onDragEnd)
    },
    onDragEnd() {
      this.$emit('update-isDragging', false);
      this.$emit('update-isDragOver', false);
      this.$emit('update-dragged-type', null);
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
  background-color: #5a6f87;

  .description {
    margin-top: 48px;
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
      border-radius: 5px;
      outline: none;
      border: none;
      cursor: grab;
      background-color: #ebeff2;
    }

    div:hover {
      background-color: #0288d1;
      color: white;
    }
  }
}
</style>