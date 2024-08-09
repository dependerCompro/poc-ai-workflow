<template>
  <SideBar />
  <VueFlow :nodes="nodes" :edges="edges" :class="{ dark }" class="basic-flow" @drop="onDrop" @dragover="onDragOver"
    @dragleave="onDragLeave" :min-zoom="0.2" :max-zoom="4">
    <Background :style="{
      backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
      transition: 'background-color 0.2s ease',
    }" pattern-color="#aaa" :gap="16" />

    <MiniMap />

    <Controls position="top-right">
      <ControlButton title="Reset Transform" @click="resetTransform">
        <Icon name="reset" />
      </ControlButton>
      <ControlButton title="Toggle Dark Mode" @click="toggleDarkMode">
        <Icon v-if="dark" name="sun" />
        <Icon v-else name="moon" />
      </ControlButton>
      <ControlButton title="Log `toObject`" @click="logToObject">
        <Icon name="log" />
      </ControlButton>
    </Controls>
  </VueFlow>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { ControlButton, Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import Icon from './components/ControlIcons.vue'
import SideBar from './components/SideBar.vue'
import { useDragAndDropStore } from '@/stores/index.js';

const { onNodeDragStop, onConnect, setViewport, toObject, screenToFlowCoordinate } = useVueFlow()

const dark = ref(false)
const store = useDragAndDropStore()
const nodeCount = ref(0)

const draggedType = computed(() => store.draggedType)
const isDragging = computed(() => store.isDragging)
const isDragOver = computed(() => store.isDragOver)
const nodes = computed(() => store.nodes)
const edges = computed(() => store.edges)

watch(isDragging, (dragging) => {
  document.body.style.userSelect = dragging ? 'none' : ''
})

const toggleDarkMode = () => {
  dark.value = !dark.value
}

const resetTransform = () => {
  setViewport({ x: 0, y: 0, zoom: 1 })
}

const logToObject = () => {
  console.log(toObject())
}

const getNewNodeId = (type) => {
  const timeStamp = Date.now()
  return `${timeStamp}-${type}-${nodeCount.value++}`
}

const getNewEdgeId = (src, tgt) => {
  return src + "___" + tgt;
}

const onDrop = (event) => {
  const position = screenToFlowCoordinate({
    x: event.clientX - 75, // - 275 - 75,
    y: event.clientY - 18, // - 18,
  })

  const nodeId = getNewNodeId(draggedType.value)

  const newNode = {
    id: nodeId,
    type: draggedType.value,
    position: position,
    data: { label: `${draggedType.value} ${nodeCount.value}` },
  }
  nodes.value.push(newNode)
}

const onDragOver = (event) => {
  event.preventDefault()
  if (draggedType.value) {
    store.isDragOver = true
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move'
    }
  }
}

const onDragLeave = () => {
  store.isDragOver = false
}

onNodeDragStop(({ event, node }) => {
  nodes.value.forEach((obj) => {
    if (obj.id == node.id) {
      obj.position.x = event.clientX - 75 - 275;
      obj.position.y = event.clientY - 18;
    }
  })
})

onConnect((event) => {
  const edgeId = getNewEdgeId(event.source, event.target);
  const newEdge = {
    id: edgeId,
    source: event.source,
    target: event.target,
    animated: true,
  }
  edges.value.push(newEdge);
})
</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
@import './main.css';

#app {
  display: flex;
}
</style>
