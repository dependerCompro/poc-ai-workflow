<template>
    <div :class="(store.darkMode) ? 'input-prompt-node-wrapper-dark' : 'input-prompt-node-wrapper'">
        <div class="input-prompt-node-wrapper__head">
            <p>{{ headContent }}</p>
        </div>
        <div class="input-prompt-node-wrapper__text-area">
            <textarea v-model="userInput" placeholder="Query Prompt here..."></textarea>
        </div>
    </div>
    <Handle type="source" :position="Position.Right" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { useDragAndDropStore } from '@/stores';

const userInput = ref('')
const store = useDragAndDropStore()
const headContent = ref('Input ( Prompt )')

watch(userInput, (input) => {
    store.nodes.forEach((node) => {
        if (node.id == store.activeNodeId) {
            node.data.userInput = input;
        }
    })
})
</script>

<style>
.input-prompt-node-wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid rgb(70, 187, 237);
    padding: 8px;
    width: 280px;
    height: 350px;

    .input-prompt-node-wrapper__head {
        width: 100%;
    }

    .input-prompt-node-wrapper__text-area {
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

.input-prompt-node-wrapper-dark {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #434343;
    border: 1px solid rgb(70, 187, 237);
    padding: 8px;
    width: 280px;
    height: 350px;

    .input-prompt-node-wrapper__head {
        width: 100%;
    }

    .input-prompt-node-wrapper__text-area {
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