<template>
    <div class="input-data-node-wrapper">
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
import { ref, watch } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { useDragAndDropStore } from '@/stores';

const userInput = ref('')
const store = useDragAndDropStore();
const headContent = ref('Input ( GraphQL API Endpoint )')

watch(userInput, (input) => {
    store.nodes.forEach((node) => {
        if (node.id == store.activeNodeId) {
            node.data.userInput = input;
        }
    })
})
</script>

<style>
.input-data-node-wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid blue;
    padding: 8px;
    width: 280px;
    height: 150px;

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
        }
    }
}
</style>