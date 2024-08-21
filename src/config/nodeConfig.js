import { Position } from '@vue-flow/core'

// input-prompt, input-data, processor, and result-output data objects have
// have been defined based on the node type defined in sidebar component.
// (from where nodes are being dragged)
export default {
  "input-prompt": {
    nodeHeadContent: "Input Node (Prompt)",
    nodeTextareaPlaceholder: "Please enter your prompt...",
    nodeBorderColor: "#46bbed",
    handle: [
        {
            type: 'source',
            position: Position.Right
        }
    ]
  },
  "input-data": {
    nodeHeadContent: "Input Node (Data)",
    nodeTextareaPlaceholder: "Please enter GraphQL API Endpoint...",
    nodeBorderColor: "#46bbed",
    handle: [
        {
            type: 'source',
            position: Position.Right
        }
    ]
  },
  "processor": {
    nodeHeadContent: "Processor",
    nodeTextareaPlaceholder: "Please describe the process...",
    nodeBorderColor: "orange",
    handle: [
        {
            type: 'source',
            position: Position.Right
        },
        {
            type: 'target',
            position: Position.Left
        }
    ]
  },
  "result-output": {
    nodeHeadContent: "Output",
    nodeTextareaPlaceholder: "Here is the result...",
    nodeBorderColor: "green",
    handle: [
        {
            type: 'target',
            position: Position.Left
        }
    ]
  },
};
