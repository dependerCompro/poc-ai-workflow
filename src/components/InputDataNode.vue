<template>
    <NodeResizer v-if="props.data.inFocus" min-width="280" min-height="180" />
    <div :class="(store.darkMode) ? 'input-data-node-wrapper-dark': 'input-data-node-wrapper'">
        <div class="input-data-node-wrapper__head">
            <p>{{ headContent }}</p>
        </div>
        <div class="input-data-node-wrapper__text-area">
            <textarea v-model="userInput" placeholder="GraphQL API here..."></textarea>
        </div>
    </div>
    <Handle type="source" :position="Position.Right" />
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { useDragAndDropStore } from '@/stores';
import { NodeResizer } from '@vue-flow/node-resizer'

const userInput = ref('')
const store = useDragAndDropStore();
const headContent = ref('Input ( GraphQL API Endpoint )')

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
.input-data-node-wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid rgb(70, 187, 237);
    height: 100%;
    min-height: 180px;
    min-width: 280px;
    align-items: center;

    .input-data-node-wrapper__head{
        width: 100%;
    }

    .input-data-node-wrapper__text-area {
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

.input-data-node-wrapper-dark {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #434343;
    border: 1px solid rgb(70, 187, 237);
    height: 100%;
    min-height: 180px;
    min-width: 280px;
    align-items: center;

    .input-data-node-wrapper__head{
        width: 100%;
    }

    .input-data-node-wrapper__text-area {
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