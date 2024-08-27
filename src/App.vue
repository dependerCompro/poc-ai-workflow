<template>
  <AppHeader />
  <main class="main">
    <SideBar @update-dragged-type="updateDraggedType" @update-isDragging="updateIsDragging"
      @update-isDragOver="updateIsDragOver" />
    <ConfirmEraseAllModal v-if="confirmEraseAll" @close-modal="confirmEraseAll = false" @erase-all="eraseAll" />
    <VueFlow :nodes="nodes" :edges="edges" :class="{ dark }" class="basic-flow" @drop="onDrop" @dragover="onDragOver"
      @dragleave="onDragLeave" @edge-update="onEdgeUpdate" :min-zoom="0.2" :max-zoom="4">
      <Background :style="{
        backgroundColor: isDragOver ? (dark ? '#2d3738' : '#e7f3ff') : 'transparent',
        transition: 'background-color 0.2s ease',
      }" pattern-color="#aaa" :gap="16" />

      <MiniMap pannable zoomable />

      <Controls position="top-right">
        <ControlButton title="Erase all" @click="confirmEraseAll = true">
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
        <NodeComponent :id="props.id" :data="props.data" :type="props.type" :isDarkMode="dark" @delete-node="deleteNode"
          @update-user-input-to-node="updateUserInputToNode" />
      </template>
      <template #node-input-data="props">
        <NodeComponent :id="props.id" :data="props.data" :type="props.type" :isDarkMode="dark" @delete-node="deleteNode"
          @update-user-input-to-node="updateUserInputToNode" />
      </template>
      <template #node-processor="props">
        <NodeComponent :id="props.id" :data="props.data" :type="props.type" :isDarkMode="dark" @delete-node="deleteNode"
          @update-user-input-to-node="updateUserInputToNode" />
      </template>
      <template #node-result-output="props">
        <NodeComponent :id="props.id" :data="props.data" :type="props.type" :isDarkMode="dark" @delete-node="deleteNode"
          @update-user-input-to-node="updateUserInputToNode" />
      </template>
    </VueFlow>
  </main>
</template>

<script setup>
import { ref, computed, watch, onBeforeMount } from 'vue'
import { VueFlow, useVueFlow, MarkerType } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { ControlButton, Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import Icon from './components/ControlIcons'
import SideBar from './components/SideBar'
import AppHeader from './components/AppHeader'
import NodeComponent from '@/components/NodeComponent'
import ConfirmEraseAllModal from './components/ConfirmEraseAllModal'

const { onNodeDragStop, onConnect, setViewport, toObject, fromObject, screenToFlowCoordinate, onNodeClick, onEdgeClick, onPaneClick } = useVueFlow()

const nodeCount = ref({
  "input-prompt": 0,
  "input-data": 0,
  "processor": 0,
  "result-output": 0
})
let debounceTimeout = null;
const flowKey = 'vue-flow--save-restore';
const dark = ref(false);
const nodes = ref([]);
const edges = ref([]);
const confirmEraseAll = ref(false);
const draggedType = ref(null);
const isDragging = ref(false);
const isDragOver = ref(false);

let vueFlowObj = computed(() => {
  let flowObj = toObject();
  flowObj.isDarkMode = dark.value;
  return flowObj;
})

onBeforeMount(() => {
  const flow = JSON.parse(localStorage.getItem(flowKey));
  if (flow) {
    nodes.value = flow.nodes;
    edges.value = flow.edges;
    dark.value = flow.isDarkMode;
    fromObject(flow)
  }
})

watch(isDragging, (dragging) => {
  document.body.style.userSelect = dragging ? 'none' : ''
})

watch(vueFlowObj, (val) => {
  debounceUpdate(val);
})

const debounceUpdate = (val) => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout)
  }
  debounceTimeout = setTimeout(() => {
    localStorage.setItem(flowKey, JSON.stringify(val));
  }, 500);
}

const eraseAll = () => {
  localStorage.setItem(flowKey, '');
  nodes.value = [];
  edges.value = [];
  confirmEraseAll.value = false;
}

const updateFocusNodeData = (nodeId) => {
  // if nodeId is '', it will set inFocus to false in each node.
  nodes.value.forEach((node) => {
    if (node.id == nodeId) {
      node.data.inFocus = true;
    } else {
      node.data.inFocus = false;
    }
  });
}

const updateUserInputToNode = (nodeId, input) => {
  nodes.value.forEach((node) => {
    if (node.id == nodeId) {
      node.data.userInput = input;
    }
  });
}

const updateIsDragging = (val) => {
  isDragging.value = val;
}

const updateIsDragOver = (val) => {
  isDragOver.value = val;
}

const updateDraggedType = (draggedTypeData) => {
  draggedType.value = draggedTypeData;
}

const toggleDarkMode = () => {
  dark.value = !dark.value;
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
  updateFocusNodeData(nodeId);
}

const onDragOver = (event) => {
  event.preventDefault()
  if (draggedType.value) {
    updateIsDragOver(true);
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move'
    }
  }
}

const onDragLeave = () => {
  updateIsDragOver(false);
}

function removeDuplicateEdges() {
  edges.value = edges.value.filter((value, index, self) =>
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
  edges.value = edges.value.filter(obj => obj.id != edgeId);
}

function deleteEdgesWithNode(nodeId) {
  edges.value = edges.value.filter(obj => (obj.source != nodeId && obj.target != nodeId));
}

const deleteNode = (nodeId) => {
  nodes.value = nodes.value.filter(obj => obj.id != nodeId);
  deleteEdgesWithNode(nodeId);
}

function onEdgeUpdate({ edge, connection }) {
  deleteEdgeWithId(edge.id);
  addNewEdge(connection.source, connection.target);
}

onNodeClick((event) => {
  updateFocusNodeData(event.node.id)
})

onEdgeClick(() => {
  updateFocusNodeData('');
})

onPaneClick(() => {
  updateFocusNodeData('');
})
</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
@import './main.css';

.main {
  background-color: #ebeff2;
  display: flex;
  height: calc(100% - 58px);
}
</style>
