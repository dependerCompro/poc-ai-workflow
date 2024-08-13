<template>
    <div :class="(store.darkMode) ? 'processor-node-wrapper-dark' : 'processor-node-wrapper'">
        <div class="processor-node-wrapper__head">
            <p>{{ headContent }}</p>
        </div>
        <div class="processor-node-wrapper__text-area">
            <textarea v-model="userInput" placeholder="Process description here..."></textarea>
        </div>
    </div>
    <Handle type="source" :position="Position.Right" />
    <Handle type="target" :position="Position.Left" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { useDragAndDropStore } from '@/stores';

const userInput = ref('')
const store = useDragAndDropStore()
const headContent = ref('Please describe the process')

watch(userInput, (input) => {
    store.nodes.forEach((node) => {
        if (node.id == store.activeNodeId) {
            node.data.userInput = input;
        }
    })
})
</script>

<style>
.processor-node-wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid orange;
    padding: 8px;
    width: 280px;
    height: 350px;

    .processor-node-wrapper__head{
        width: 100%;
    }

    .processor-node-wrapper__text-area {
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
.processor-node-wrapper-dark {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #434343;
    border: 1px solid orange;
    padding: 8px;
    width: 280px;
    height: 350px;

    .processor-node-wrapper__head{
        width: 100%;
    }

    .processor-node-wrapper__text-area {
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