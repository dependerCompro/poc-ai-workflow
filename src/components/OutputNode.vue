<template>
    <NodeResizer v-if="props.data.inFocus" min-width="280" min-height="180" />
    <div :class="(store.darkMode) ? 'output-node-wrapper-dark' : 'output-node-wrapper'">
        <button v-if="props.data.inFocus" @click="deleteNode()" class="output-node-wrapper__close-button">×</button>
        <div class="output-node-wrapper__head">
            <p>{{ headContent }}</p>
        </div>
        <div class="output-node-wrapper__text-area">
            <textarea v-model="userInput" placeholder="Output Logs"></textarea>
        </div>
    </div>
    <Handle type="target" :position="Position.Left" />
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { useDragAndDropStore } from '@/stores';
import { NodeResizer } from '@vue-flow/node-resizer'

const userInput = ref('')
const store = useDragAndDropStore()
const headContent = ref('Output')

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const deleteNode = () => {
    store.nodes = store.nodes.filter(obj => obj.id != store.activeNodeId);
}

watch(userInput, (input) => {
    store.nodes.forEach((node) => {
        if (node.id == store.activeNodeId) {
            node.data.userInput = input;
        }
    })
})
</script>

<style scoped>
.output-node-wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid green;
    height: 100%;
    min-height: 180px;
    min-width: 280px;
    align-items: center;

    .output-node-wrapper__close-button {
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

    .output-node-wrapper__head {
        width: 100%;
    }

    .output-node-wrapper__text-area {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        textarea {
            height: 100%;
            padding: 8px;
            margin: 8px;
            resize: none;
        }
    }
}
.output-node-wrapper-dark {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #434343;
    border: 1px solid green;
    height: 100%;
    min-height: 180px;
    min-width: 280px;
    align-items: center;

    .output-node-wrapper__close-button {
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

    .output-node-wrapper__head{
        width: 100%;
    }

    .output-node-wrapper__text-area {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        textarea {
            height: 100%;
            padding: 8px;
            color: white;
            background-color: #545454;
            margin: 8px;
            resize: none;
        }
    }
}
</style>