<template>
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
import { ref, watch } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { useDragAndDropStore } from '@/stores';

const userInput = ref('')
const store = useDragAndDropStore()
const headContent = ref('Output')

watch(userInput, (input) => {
    store.nodes.forEach((node) => {
        if (node.id == store.activeNodeId) {
            node.data.userInput = input;
        }
    })
})
</script>

<style>
.output-node-wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid green;
    padding: 8px;
    width: 280px;
    height: 350px;

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
        }
    }
}
.output-node-wrapper-dark {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #434343;
    border: 1px solid green;
    padding: 8px;
    width: 280px;
    height: 350px;

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
        }
    }
}
</style>