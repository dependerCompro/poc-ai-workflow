<template>
    <NodeResizer v-if="props.data.inFocus" min-width="280" min-height="180" />
    <div :class="(store.darkMode) ? 'output-node-wrapper-dark' : 'output-node-wrapper'">
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