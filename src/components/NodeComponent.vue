<template>
    <NodeResizer v-if="props.data.inFocus" min-width="280" min-height="180" />
    <div class="node-wrapper" :class="(store.darkMode) ? 'node-wrapper-dark': ''" :style="{'--border-color': nodeConfig[props.type].nodeBorderColor}">
        <button v-if="props.data.inFocus" @click="deleteNode()" class="node-wrapper__close-button">×</button>
        <div class="node-wrapper__head">
            <p>{{ headContent }}</p>
        </div>
        <div class="node-wrapper__text-area">
            <textarea v-model="userInput" :placeholder="textareaPlaceHolder"></textarea>
        </div>
    </div>
    <Handle
        v-for="(handle, index) in nodeConfig[props.type].handle"
        :key="index"
        :type="handle.type"
        :position="handle.position"
    />
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'
import { Handle } from '@vue-flow/core'
import { useDragAndDropStore } from '@/stores';
import { NodeResizer } from '@vue-flow/node-resizer';
import nodeConfig from '@/config/nodeConfig';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    require: true
  }
})

let debounceTimeout = null;
const userInput = ref('')
const store = useDragAndDropStore();
const headContent = nodeConfig[props.type].nodeHeadContent;
const textareaPlaceHolder = nodeConfig[props.type].nodeTextareaPlaceholder;

function deleteEdgeWithNode(nodeId) {
  store.edges = store.edges.filter(obj => (obj.source != nodeId && obj.target != nodeId));
}

const deleteNode = () => {
    store.nodes = store.nodes.filter(obj => obj.id != props.id);
    deleteEdgeWithNode(props.id);
}

watch(userInput, (input) => {
    debounceUpdate(input);
})

const debounceUpdate = (input) => {
    if (debounceTimeout) {
        clearTimeout(debounceTimeout)
    }
    debounceTimeout = setTimeout(() => {
        store.updateUserInputToNode(props.id, input);
    }, 500);
}
</script>

<style scoped>
.node-wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid var(--border-color);
    height: 100%;
    min-height: 180px;
    min-width: 280px;
    align-items: center;

    .node-wrapper__close-button {
        cursor: pointer;
        border: 1px solid red;
        display: flex;
        justify-content: center;
        margin: 0;
        align-items: center;
        color: white;
        font-size: 16px;
        font-weight: 600;
        background-color: rgb(255, 96, 96);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-50%, -50%);
    }

    .node-wrapper__head{
        width: 100%;
    }

    .node-wrapper__text-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        
        textarea {
            flex: 1;
            height: 100%;
            padding: 8px;
            margin: 8px;
            resize: none;
        }
    }
}

.node-wrapper-dark {
    color: white;
    background-color: #434343;

    .node-wrapper__text-area {
        textarea {
            color: white;
            background-color: #545454;
        }
    }
}
</style>