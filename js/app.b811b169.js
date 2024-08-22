(function(){"use strict";var e={9544:function(e,t,o){var a=o(5130),n=o(5234),r=(o(4114),o(6768)),d=o(144),s=o(4232),i=o(6805),u=o(2647),l=o(4671),p=o(4039);const c=(0,n.nY)("dragAndDropStore",{state:()=>({draggedType:null,isDragging:!1,isDragOver:!1,nodes:[],edges:[]}),actions:{updateUserInputToNode(e,t){this.nodes.forEach((o=>{o.id==e&&(o.data.userInput=t)}))},updateFocusNodeData(e){this.nodes.forEach((t=>{t.id==e?t.data.inFocus=!0:t.data.inFocus=!1}))}}}),g={key:0,width:"16",height:"16",viewBox:"0 0 24 24"},v=(0,r.Lk)("path",{d:"M3 21h18v-2H3v2zM16.95 4.95l-9 9-4.95 4.95 4.95 4.95 9-9 4.95-4.95-4.95-4.95zM5.83 19.17l-2.12-2.12 4.95-4.95 2.12 2.12-4.95 4.95zm12.36-6.36L13.41 9.41l2.12-2.12 4.95 4.95-2.12 2.12z"},null,-1),f=[v],h={key:1,width:"16",height:"16",viewBox:"0 0 32 32"},k=(0,r.Lk)("path",{d:"M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z"},null,-1),y=[k],m={key:2,width:"16",height:"16",viewBox:"0 0 24 24"},b=(0,r.Lk)("path",{d:"M14 20v-2h2.6l-3.2-3.2l1.425-1.425L18 16.55V14h2v6Zm-8.6 0L4 18.6L16.6 6H14V4h6v6h-2V7.4Zm3.775-9.425L4 5.4L5.4 4l5.175 5.175Z"},null,-1),q=[b],D={key:3,width:"16",height:"16",viewBox:"0 0 24 24"},w=(0,r.Lk)("path",{d:"M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287Z"},null,-1),C=[w],L={key:4,width:"16",height:"16",viewBox:"0 0 24 24"},_=(0,r.Lk)("path",{d:"M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025q.337.025.662.075q-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613q1.15-.612 1.875-1.637q.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Z"},null,-1),E=[_],F={key:5,width:"16",height:"16",viewBox:"0 0 24 24"},Q=(0,r.Lk)("path",{d:"M20 19V7H4v12h16m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l3.99-4Z"},null,-1),R=[Q];function T(e,t,o,a,n,d){return(0,r.uX)(),(0,r.CE)(r.FK,null,["erase"===o.name?((0,r.uX)(),(0,r.CE)("svg",g,f)):(0,r.Q3)("",!0),"reset"===o.name?((0,r.uX)(),(0,r.CE)("svg",h,y)):(0,r.Q3)("",!0),"update"===o.name?((0,r.uX)(),(0,r.CE)("svg",m,q)):(0,r.Q3)("",!0),"sun"===o.name?((0,r.uX)(),(0,r.CE)("svg",D,C)):(0,r.Q3)("",!0),"moon"===o.name?((0,r.uX)(),(0,r.CE)("svg",L,E)):(0,r.Q3)("",!0),"log"===o.name?((0,r.uX)(),(0,r.CE)("svg",F,R)):(0,r.Q3)("",!0)],64)}var M={props:{name:String}},O=o(1241);const x=(0,O.A)(M,[["render",T]]);var X=x;const S=e=>((0,r.Qi)("data-v-0e7c138b"),e=e(),(0,r.jt)(),e),B={class:"sidebar-aside"},I=S((()=>(0,r.Lk)("div",{class:"description"},"You can drag these nodes to the pane.",-1))),N={class:"nodes"};function P(e,t,o,a,n,d){return(0,r.uX)(),(0,r.CE)("aside",B,[I,(0,r.Lk)("div",N,[(0,r.Lk)("div",{class:"vue-flow__node-input",draggable:!0,onDragstart:t[0]||(t[0]=e=>d.onDragStart(e,"input-prompt"))},"Input ( Prompt )",32),(0,r.Lk)("div",{class:"vue-flow__node-default",draggable:!0,onDragstart:t[1]||(t[1]=e=>d.onDragStart(e,"input-data"))},"input ( Data )",32),(0,r.Lk)("div",{class:"vue-flow__node-output",draggable:!0,onDragstart:t[2]||(t[2]=e=>d.onDragStart(e,"processor"))},"Processor",32),(0,r.Lk)("div",{class:"vue-flow__node-output",draggable:!0,onDragstart:t[3]||(t[3]=e=>d.onDragStart(e,"result-output"))},"Output",32)])])}var Z={name:"SideBar",data(){return{store:c()}},methods:{onDragStart(e,t){e.dataTransfer&&(e.dataTransfer.setData("application/vueflow",t),e.dataTransfer.effectAllowed="move"),this.store.draggedType=t,this.store.isDragging=!0,document.addEventListener("drop",this.onDragEnd)},onDragEnd(){this.store.isDragging=!1,this.store.isDragOver=!1,this.store.draggedType=null,document.removeEventListener("drop",this.onDragEnd)}}};const H=(0,O.A)(Z,[["render",P],["__scopeId","data-v-0e7c138b"]]);var j=H,V=o(8445),W={"input-prompt":{nodeHeadContent:"Input Node (Prompt)",nodeTextareaPlaceholder:"Please enter your prompt...",nodeBorderColor:"#46bbed",handle:[{type:"source",position:i.yX.Right}]},"input-data":{nodeHeadContent:"Input Node (Data)",nodeTextareaPlaceholder:"Please enter GraphQL API Endpoint...",nodeBorderColor:"#46bbed",handle:[{type:"source",position:i.yX.Right}]},processor:{nodeHeadContent:"Processor",nodeTextareaPlaceholder:"Please describe the process...",nodeBorderColor:"orange",handle:[{type:"source",position:i.yX.Right},{type:"target",position:i.yX.Left}]},"result-output":{nodeHeadContent:"Output",nodeTextareaPlaceholder:"Here is the result...",nodeBorderColor:"green",handle:[{type:"target",position:i.yX.Left}]}};const A={class:"node-wrapper__head"},z={class:"node-wrapper__text-area"},K=["placeholder"];var J={__name:"NodeComponent",props:{id:{type:String,required:!0},data:{type:Object,required:!0},type:{type:String,require:!0},isDarkMode:{type:Boolean,required:!0}},setup(e){const t=e;let o=null;const n=(0,d.KR)(t.data.userInput||""),u=c(),l=W[t.type].nodeHeadContent,p=W[t.type].nodeTextareaPlaceholder;function g(e){u.edges=u.edges.filter((t=>t.source!=e&&t.target!=e))}const v=()=>{u.nodes=u.nodes.filter((e=>e.id!=t.id)),g(t.id)};(0,r.wB)(n,(e=>{f(e)}));const f=e=>{o&&clearTimeout(o),o=setTimeout((()=>{u.updateUserInputToNode(t.id,e)}),500)};return(o,u)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[t.data.inFocus?((0,r.uX)(),(0,r.Wv)((0,d.R1)(V.PN),{key:0,"min-width":"280","min-height":"180"})):(0,r.Q3)("",!0),(0,r.Lk)("div",{class:(0,s.C4)(["node-wrapper",e.isDarkMode?"node-wrapper-dark":""]),style:(0,s.Tr)({"--border-color":(0,d.R1)(W)[t.type].nodeBorderColor})},[t.data.inFocus?((0,r.uX)(),(0,r.CE)("button",{key:0,onClick:u[0]||(u[0]=e=>v()),class:"node-wrapper__close-button"},"×")):(0,r.Q3)("",!0),(0,r.Lk)("div",A,[(0,r.Lk)("p",null,(0,s.v_)((0,d.R1)(l)),1)]),(0,r.Lk)("div",z,[(0,r.bo)((0,r.Lk)("textarea",{class:"nodrag","onUpdate:modelValue":u[1]||(u[1]=e=>n.value=e),placeholder:(0,d.R1)(p)},null,8,K),[[a.Jo,n.value]])])],6),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)((0,d.R1)(W)[t.type].handle,((e,t)=>((0,r.uX)(),(0,r.Wv)((0,d.R1)(i.h7),{key:t,type:e.type,position:e.position},null,8,["type","position"])))),128))],64))}};const U=(0,O.A)(J,[["__scopeId","data-v-17be23ce"]]);var Y=U;const $="vue-flow--save-restore";var G={__name:"App",setup(e){const{onNodeDragStop:t,onConnect:o,setViewport:a,toObject:n,fromObject:g,screenToFlowCoordinate:v,onNodeClick:f,onEdgeClick:h,onPaneClick:k}=(0,i.Id)(),y=c(),m=(0,d.KR)({"input-prompt":0,"input-data":0,processor:0,"result-output":0});let b=null;const q=(0,d.KR)(!1),D=(0,r.EW)((()=>y.draggedType)),w=(0,r.EW)((()=>y.isDragging)),C=(0,r.EW)((()=>y.isDragOver)),L=(0,r.EW)((()=>y.nodes)),_=(0,r.EW)((()=>y.edges));let E=(0,r.EW)((()=>{let e=n();return e.isDarkMode=q.value,e}));(0,r.KC)((()=>{const e=JSON.parse(localStorage.getItem($));e&&(y.nodes=e.nodes,y.edges=e.edges,q.value=e.isDarkMode,g(e))})),(0,r.wB)(w,(e=>{document.body.style.userSelect=e?"none":""})),(0,r.wB)(E,(e=>{F(e)}));const F=e=>{b&&clearTimeout(b),b=setTimeout((()=>{localStorage.setItem($,JSON.stringify(e))}),500)},Q=()=>{localStorage.setItem($,""),y.nodes=[],y.edges=[]},R=()=>{q.value=!q.value},T=()=>{a({x:0,y:0,zoom:1})},M=()=>{console.log(n())},O=e=>{const t=Date.now();return`${t}-${e}-${m.value[e]++}`},x=(e,t)=>e+"___"+t,S=e=>{e.preventDefault();const t=e.target.closest(".basic-flow"),o=t.getBoundingClientRect(),a=v({x:e.clientX-o.left/2,y:e.clientY-o.top/2}),n=O(D.value),r={id:n,type:D.value,position:a,data:{userInput:"",inFocus:!1}};L.value.push(r),y.updateFocusNodeData(n)},B=e=>{e.preventDefault(),D.value&&(y.isDragOver=!0,e.dataTransfer&&(e.dataTransfer.dropEffect="move"))},I=()=>{y.isDragOver=!1};function N(){y.edges=y.edges.filter(((e,t,o)=>t===o.findIndex((t=>JSON.stringify(t)===JSON.stringify(e)))))}function P(e,t,o){return{id:e,source:t,target:o,updatable:!0,animated:!0,markerEnd:{type:i.TG.ArrowClosed,width:25,height:25}}}function Z(e,t){const o=x(e,t),a=P(o,e,t);_.value.push(a),N()}function H(e){y.edges=y.edges.filter((t=>t.id!=e))}function V({edge:e,connection:t}){H(e.id),Z(t.source,t.target)}return t((({node:e})=>{L.value.forEach((t=>{t.id==e.id&&(t.position={...e.position})}))})),o((e=>{Z(e.source,e.target)})),f((e=>{y.updateFocusNodeData(e.node.id)})),h((()=>{y.updateFocusNodeData("")})),k((()=>{y.updateFocusNodeData("")})),(e,t)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)((0,d.R1)(j)),(0,r.bF)((0,d.R1)(i.nO),{nodes:L.value,edges:_.value,class:(0,s.C4)([{dark:q.value},"basic-flow"]),onDrop:S,onDragover:B,onDragleave:I,onEdgeUpdate:V,"min-zoom":.2,"max-zoom":4},{"node-input-prompt":(0,r.k6)((e=>[(0,r.bF)((0,d.R1)(Y),{id:e.id,data:e.data,type:e.type,isDarkMode:q.value},null,8,["id","data","type","isDarkMode"])])),"node-input-data":(0,r.k6)((e=>[(0,r.bF)((0,d.R1)(Y),{id:e.id,data:e.data,type:e.type,isDarkMode:q.value},null,8,["id","data","type","isDarkMode"])])),"node-processor":(0,r.k6)((e=>[(0,r.bF)((0,d.R1)(Y),{id:e.id,data:e.data,type:e.type,isDarkMode:q.value},null,8,["id","data","type","isDarkMode"])])),"node-result-output":(0,r.k6)((e=>[(0,r.bF)((0,d.R1)(Y),{id:e.id,data:e.data,type:e.type,isDarkMode:q.value},null,8,["id","data","type","isDarkMode"])])),default:(0,r.k6)((()=>[(0,r.bF)((0,d.R1)(u.V),{style:(0,s.Tr)({backgroundColor:C.value?q.value?"#2d3738":"#e7f3ff":"transparent",transition:"background-color 0.2s ease"}),"pattern-color":"#aaa",gap:16},null,8,["style"]),(0,r.bF)((0,d.R1)(p.of),{pannable:"",zoomable:""}),(0,r.bF)((0,d.R1)(l.H),{position:"top-right"},{default:(0,r.k6)((()=>[(0,r.bF)((0,d.R1)(l.a),{title:"Erase all",onClick:Q},{default:(0,r.k6)((()=>[(0,r.bF)((0,d.R1)(X),{name:"erase"})])),_:1}),(0,r.bF)((0,d.R1)(l.a),{title:"Reset Transform",onClick:T},{default:(0,r.k6)((()=>[(0,r.bF)((0,d.R1)(X),{name:"reset"})])),_:1}),(0,r.bF)((0,d.R1)(l.a),{title:"Toggle Dark Mode",onClick:R},{default:(0,r.k6)((()=>[q.value?((0,r.uX)(),(0,r.Wv)((0,d.R1)(X),{key:0,name:"sun"})):((0,r.uX)(),(0,r.Wv)((0,d.R1)(X),{key:1,name:"moon"}))])),_:1}),(0,r.bF)((0,d.R1)(l.a),{title:"Log `toObject`",onClick:M},{default:(0,r.k6)((()=>[(0,r.bF)((0,d.R1)(X),{name:"log"})])),_:1})])),_:1})])),_:1},8,["nodes","edges","class"])],64))}};const ee=G;var te=ee;const oe=(0,n.Ey)(),ae=(0,a.Ef)(te);ae.use(oe),ae.mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,r){if(!a){var d=1/0;for(l=0;l<e.length;l++){a=e[l][0],n=e[l][1],r=e[l][2];for(var s=!0,i=0;i<a.length;i++)(!1&r||d>=r)&&Object.keys(o.O).every((function(e){return o.O[e](a[i])}))?a.splice(i--,1):(s=!1,r<d&&(d=r));if(s){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[a,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,d=a[0],s=a[1],i=a[2],u=0;if(d.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(i)var l=i(o)}for(t&&t(a);u<d.length;u++)r=d[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(l)},a=self["webpackChunkai_workflow_3"]=self["webpackChunkai_workflow_3"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(9544)}));a=o.O(a)})();
//# sourceMappingURL=app.b811b169.js.map