<template>
  <SideBar />
  <VueFlow :nodes="nodes" :edges="edges" :class="{ dark }" class="basic-flow" @drop="onDrop" @dragover="onDragOver"
    @dragleave="onDragLeave" @edge-update="onEdgeUpdate" :min-zoom="0.2" :max-zoom="4">
    <Background :style="{
      backgroundColor: isDragOver ? (dark ? '#2d3738': '#e7f3ff') : 'transparent',
      transition: 'background-color 0.2s ease',
    }" pattern-color="#aaa" :gap="16" />

    <MiniMap pannable zoomable />

    <Controls position="top-right">
      <ControlButton title="Erase all" @click="eraseAll">
        <Icon name="erase" />
      </ControlButton>
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
    <template #node-input-prompt="props">
      <NodeComponent :id="props.id" :data="props.data" :type="props.type"/>
    </template>
    <template #node-input-data="props">
      <NodeComponent :id="props.id" :data="props.data" :type="props.type"/>
    </template>
    <template #node-processor="props">
      <NodeComponent :id="props.id" :data="props.data" :type="props.type"/>
    </template>
    <template #node-result-output="props">
      <NodeComponent :id="props.id" :data="props.data" :type="props.type"/>
    </template>
  </VueFlow>
</template>

<script setup>
import { ref, computed, watch, onBeforeMount } from 'vue'
import { VueFlow, useVueFlow, MarkerType } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { ControlButton, Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { useDragAndDropStore } from '@/stores/index.js';
import Icon from './components/ControlIcons'
import SideBar from './components/SideBar'
import NodeComponent from '@/components/NodeComponent';

const { onNodeDragStop, onConnect, setViewport, toObject, fromObject, screenToFlowCoordinate, onNodeClick, onEdgeClick, onPaneClick } = useVueFlow()

const store = useDragAndDropStore()
const nodeCount = ref({
  "input-prompt": 0,
  "input-data": 0,
  "processor": 0,
  "result-output": 0
})
const flowKey = 'vue-flow--save-restore';

const draggedType = computed(() => store.draggedType)
const isDragging = computed(() => store.isDragging)
const isDragOver = computed(() => store.isDragOver)
const nodes = computed(() => store.nodes)
const edges = computed(() => store.edges)
let dark = computed(() => store.darkMode)
let vueFlowObj = computed(() => toObject())

onBeforeMount(() => {
  const flow = JSON.parse(localStorage.getItem(flowKey));
  if (flow) {
    store.nodes = flow.nodes;
    store.edges = flow.edges;
    fromObject(flow)
  }
})

watch(isDragging, (dragging) => {
  document.body.style.userSelect = dragging ? 'none' : ''
})

watch(vueFlowObj, () => {
  localStorage.setItem(flowKey, JSON.stringify(toObject()))
})

const eraseAll = () => {
  localStorage.setItem(flowKey, '');
  store.nodes = [];
  store.edges = [];
}

const toggleDarkMode = () => {
  store.darkMode = !store.darkMode;
}

const resetTransform = () => {
  setViewport({ x: 0, y: 0, zoom: 1 })
}

const logToObject = () => {
  console.log(toObject())
}

const getNewNodeId = (type) => {
  const timeStamp = Date.now()
  return `${timeStamp}-${type}-${nodeCount.value[type]++}`
}

const getNewEdgeId = (src, tgt) => {
  return src + "___" + tgt;
}

const onDrop = (event) => {
  event.preventDefault();

  const vueFlowContainer = event.target.closest('.basic-flow');
  const boundingBox = vueFlowContainer.getBoundingClientRect();

  const position = screenToFlowCoordinate({
    x: event.clientX - boundingBox.left / 2,
    y: event.clientY - boundingBox.top / 2,
  })
  const nodeId = getNewNodeId(draggedType.value)
  const newNode = {
    id: nodeId,
    type: draggedType.value,
    position: position,
    data: {
      userInput: "",
      inFocus: false
    },
  }
  nodes.value.push(newNode)
  store.updateFocusNodeData(nodeId);
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

function removeDuplicateEdges() {
  store.edges = store.edges.filter((value, index, self) => 
    index === self.findIndex((t) => JSON.stringify(t) === JSON.stringify(value))
  );
}

onNodeDragStop(({ node }) => {
  nodes.value.forEach((obj) => {
    if (obj.id == node.id) {
      obj.position = { ...node.position };
    }
  })
})

function createEdge(edgeId, source, target) {
  return {
    id: edgeId,
    source: source,
    target: target,
    updatable: true,
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 25,
      height: 25,
    }
  }
}

function addNewEdge(source, target) {
  const edgeId = getNewEdgeId(source, target);
  const newEdge = createEdge(edgeId, source, target);
  edges.value.push(newEdge);
  removeDuplicateEdges();
}

onConnect((event) => {
  addNewEdge(event.source, event.target)
})

function deleteEdgeWithId(edgeId) {
  store.edges = store.edges.filter(obj => obj.id != edgeId);
}

function onEdgeUpdate({ edge, connection }) {
  deleteEdgeWithId(edge.id);
  addNewEdge(connection.source, connection.target);
}

onNodeClick((event) => {
  store.updateFocusNodeData(event.node.id)
})

onEdgeClick(() => {
  store.updateFocusNodeData('');
})

onPaneClick(() => {
  store.updateFocusNodeData('');
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
