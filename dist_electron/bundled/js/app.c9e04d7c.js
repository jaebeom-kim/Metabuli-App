(function(){"use strict";var e={5132:function(e,t,a){var n=a(5130),r=a(6768),o=a(4232),l=a(6450),i=a(249),s=a(8332),u=a(6990),d=a(554),c=a(1720),f=a(9669),m=a(7009),b=a(4718),p=a(8477),h=a(373);function g(e,t,a,n,g,v){const k=(0,r.g2)("router-link"),_=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(l.E,null,{default:(0,r.k6)((()=>[(0,r.bF)(i.z,null,{default:(0,r.k6)((()=>[(0,r.bF)(s.Z,{onClick:v.toggleDrawer},null,8,["onClick"]),(0,r.bF)(u.l,null,{default:(0,r.k6)((()=>[(0,r.eW)("Metabuli")])),_:1}),(0,r.bF)(c.h),(0,r.bF)(d.D,{href:"https://github.com/steineggerlab/Metabuli",target:"_blank"},{default:(0,r.k6)((()=>[(0,r.eW)("GitHub")])),_:1}),(0,r.bF)(d.D,{href:"https://steineggerlab.com/en/",target:"_blank"},{default:(0,r.k6)((()=>[(0,r.eW)("Steinegger Lab")])),_:1}),(0,r.bF)(d.D,{icon:""},{default:(0,r.k6)((()=>[(0,r.bF)(f.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-dots-vertical")])),_:1})])),_:1})])),_:1}),(0,r.bF)(h.e,{modelValue:e.drawer,"onUpdate:modelValue":t[1]||(t[1]=t=>e.drawer=t)},{default:(0,r.k6)((()=>[(0,r.bF)(m.x8,null,{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.items,(a=>((0,r.uX)(),(0,r.Wv)(k,{key:a.title,to:a.path,class:"v-list-item--link no-underline"},{default:(0,r.k6)((()=>[(0,r.bF)(b.g,{class:(0,o.C4)(["nav-item",{active:e.$route.path===a.path}]),onMouseover:t=>e.hover=a.path,onMouseleave:t[0]||(t[0]=t=>e.hover=""),style:(0,o.Tr)({backgroundColor:e.hover===a.path?"#f0f0f0":e.$route.path===a.path?"#d3d3d3":"transparent"})},{default:(0,r.k6)((()=>[(0,r.bF)(f.w,{left:""},{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)(a.icon),1)])),_:2},1024),(0,r.Lk)("span",null,(0,o.v_)(a.title),1)])),_:2},1032,["class","onMouseover","style"])])),_:2},1032,["to"])))),128))])),_:1})])),_:1},8,["modelValue"]),(0,r.bF)(p.Y,null,{default:(0,r.k6)((()=>[(0,r.bF)(_)])),_:1})])),_:1})}var v={name:"App",components:{},data:()=>({drawer:!0,hover:"",items:[{title:"Data Input",path:"/search",icon:"mdi-cloud-upload"},{title:"Results",path:"/results",icon:"mdi-chart-bar"}]}),methods:{toggleDrawer(){this.drawer=!this.drawer}}},k=a(1241);const _=(0,k.A)(v,[["render",g],["__scopeId","data-v-4c32e8a3"]]);var y=_,F=a(1387),D=a(8374),w=a(1606),j=a(697),S=a(3813);const O=(0,r.Lk)("a",{href:"https://www.nature.com/articles/s41592-024-02273-y",target:"_blank"}," Metabuli: sensitive and specific metagenomic classification via joint analysis of amino acid and DNA. ",-1);function C(e,t,a,n,o,l){const i=(0,r.g2)("SearchSetting");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(i,{onJobComplete:l.handleJobComplete},null,8,["onJobComplete"]),(0,r.bF)(S.I,null,{default:(0,r.k6)((()=>[(0,r.bF)(D.J,null,{default:(0,r.k6)((()=>[(0,r.bF)(w.r,null,{default:(0,r.k6)((()=>[(0,r.eW)("Reference")])),_:1}),(0,r.bF)(j.O,null,{default:(0,r.k6)((()=>[(0,r.eW)(" Kim J, Steinegger M. "),O,(0,r.eW)(" Nature Methods (2024). ")])),_:1})])),_:1})])),_:1})])}a(4114);var x=a(9336),E=a(1146),N=a(4750),T=a(4366);const I={class:"ml-3"},L={class:"ml-3"},P={class:"ml-3"},R={class:"ml-3"},W={class:"status-container"};function q(e,t,a,n,l,i){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(S.I,null,{default:(0,r.k6)((()=>[(0,r.bF)(D.J,{class:"mb-3 search-settings-panel"},{default:(0,r.k6)((()=>[(0,r.bF)(T.u,{class:"custom-toolbar",density:"compact"},{default:(0,r.k6)((()=>[(0,r.eW)(" Search Settings "),(0,r.bF)(c.h),(0,r.bF)(d.D,{icon:""},{default:(0,r.k6)((()=>[(0,r.bF)(f.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-api")])),_:1})])),_:1})])),_:1}),(0,r.bF)(j.O,null,{default:(0,r.k6)((()=>[(0,r.bF)(N.W,{label:"Job ID",variant:"underlined",modelValue:e.jobDetails.jobid,"onUpdate:modelValue":t[0]||(t[0]=t=>e.jobDetails.jobid=t),width:"500"},null,8,["modelValue"]),(0,r.bF)(E.i,{class:"d-flex align-center mb-2"},{default:(0,r.k6)((()=>[(0,r.bF)(d.D,{onClick:t[1]||(t[1]=e=>i.selectFile("q1","file"))},{default:(0,r.k6)((()=>[(0,r.eW)("Select q1 File")])),_:1}),(0,r.Lk)("div",I,"Selected File: "+(0,o.v_)(e.jobDetails.q1),1)])),_:1}),(0,r.bF)(E.i,{class:"d-flex align-center mb-2"},{default:(0,r.k6)((()=>[(0,r.bF)(d.D,{onClick:t[2]||(t[2]=e=>i.selectFile("q2","file"))},{default:(0,r.k6)((()=>[(0,r.eW)("Select q2 File")])),_:1}),(0,r.Lk)("div",L,"Selected File: "+(0,o.v_)(e.jobDetails.q2),1)])),_:1}),(0,r.bF)(E.i,{class:"d-flex align-center mb-2"},{default:(0,r.k6)((()=>[(0,r.bF)(d.D,{onClick:t[3]||(t[3]=e=>i.selectFile("database","directory"))},{default:(0,r.k6)((()=>[(0,r.eW)("Select Database")])),_:1}),(0,r.Lk)("div",P,"Selected Directory: "+(0,o.v_)(e.jobDetails.database),1)])),_:1}),(0,r.bF)(E.i,{class:"d-flex align-center mb-2"},{default:(0,r.k6)((()=>[(0,r.bF)(d.D,{onClick:t[4]||(t[4]=e=>i.selectFile("outdir","directory"))},{default:(0,r.k6)((()=>[(0,r.eW)("Select Output Directory")])),_:1}),(0,r.Lk)("div",R,"Selected Directory: "+(0,o.v_)(e.jobDetails.outdir),1)])),_:1}),(0,r.bF)(N.W,{label:"Max RAM",variant:"underlined",modelValue:e.jobDetails.maxram,"onUpdate:modelValue":t[5]||(t[5]=t=>e.jobDetails.maxram=t),width:"500"},null,8,["modelValue"]),(0,r.bF)(E.i,{class:"d-flex align-center mb-2"},{default:(0,r.k6)((()=>[(0,r.bF)(d.D,{loading:e.loading,onClick:i.sendRequest,color:"indigo"},{loader:(0,r.k6)((()=>[(0,r.bF)(x.Z,{indeterminate:""})])),default:(0,r.k6)((()=>[(0,r.eW)(" Run Metabuli ")])),_:1},8,["loading","onClick"]),(0,r.bF)(d.D,{class:"ml-3",loading:e.loading,onClick:t[6]||(t[6]=e=>i.sendRequest(!0)),color:"indigo"},{loader:(0,r.k6)((()=>[(0,r.bF)(x.Z,{indeterminate:""})])),default:(0,r.k6)((()=>[(0,r.eW)(" Load Sample Data ")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1}),(0,r.bF)(D.J,null,{default:(0,r.k6)((()=>[(0,r.bF)(T.u,{class:"custom-toolbar",density:"compact"},{default:(0,r.k6)((()=>[(0,r.eW)("Status: "+(0,o.v_)(e.status),1)])),_:1}),(0,r.Lk)("div",W,[(0,r.bF)(j.O,null,{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)(i.statusMessage),1)])),_:1})])])),_:1})])),_:1})])}var M=a(4373);const A=M.A.create({baseURL:"http://localhost:8081",headers:{"Content-Type":"multipart/form-data"}});var V=A,J={name:"SearchSetting",data:()=>({formData:new FormData,jobDetails:{q1:"",q2:"",database:"",jobid:"",outdir:"",maxram:0},jobDetailsSample:{q1:"/Users/sunnylee/Documents/Steinegger Lab/metabuli_example/SRR14484345_1.fq",q2:"/Users/sunnylee/Documents/Steinegger Lab/metabuli_example/SRR14484345_2.fq",database:"/Users/sunnylee/Documents/Steinegger Lab/metabuli_example/refseq_virus",jobid:"sample_data",outdir:"/Users/sunnylee/Documents/Steinegger Lab/metabuli_example",maxram:128},status:"INITIAL",results:"",loading:!1}),computed:{statusMessage(){switch(this.status){case"INITIAL":return"Input search settings and run.";case"PENDING":return"JOB PENDING";case"RUNNING":return"JOB IS RUNNING";case"COMPLETE":return"Job is complete. Check results in comparison results table.";default:return"An error occurred, please try again."}},statusImage(){switch(this.status){case"INITIAL":return"/assets/marv_metabuli_small.png";case"RUNNING":return"/assets/marv_metabuli_small.png";case"COMPLETE":return"/assets/simple_marv_love.png";default:return"/assets/simple_marv_sad.png"}}},methods:{async selectFile(e,t){if(window.electron)try{const a={properties:"file"===t?["openFile"]:["openDirectory"]},n=await window.electron.openFileDialog(a);n&&n.length>0&&(this.jobDetails[e]=n[0]),console.log(this.jobDetails)}catch(a){console.error("Error selecting file:",a)}else console.error("File dialog is not supported in the web environment.")},populateFormData(e=!1){e&&(this.jobDetails={...this.jobDetailsSample}),this.formData.append("q1",this.jobDetails.q1),this.formData.append("q2",this.jobDetails.q2),this.formData.append("database[]",this.jobDetails.database),this.formData.append("jobid",this.jobDetails.jobid),this.formData.append("outdir",this.jobDetails.outdir),this.formData.append("maxram",this.jobDetails.maxram),console.log(this.jobDetails)},async sendRequest(e=!1){this.loading=!0,this.populateFormData(e),V.post("/api/ticket",this.formData).then((async e=>{try{await this.pollJobStatus(e.data.id),console.log("COMPLETE")}catch(t){console.error("Error waiting for job completion:",t)}finally{this.loading=!1}})).catch((e=>{console.error("error",e)}))},async pollJobStatus(e,t=500,a=3e5){const n=Date.now();while(Date.now()-n<a){try{const t=await V.get(`/api/ticket/${e}`),a=t.data.status;if(console.log(a),"COMPLETE"!==a)this.status=a;else if("COMPLETE"===a)return this.status="COMPLETE",this.$emit("job-complete",{outdir:this.jobDetails.outdir,jobid:this.jobDetails.jobid}),!0}catch(r){console.error("Error polling job status:",r)}await new Promise((e=>setTimeout(e,t)))}throw new Error("Polling timed out")}}};const $=(0,k.A)(J,[["render",q],["__scopeId","data-v-213c2edd"]]);var U=$,X={name:"SearchPage",components:{SearchSetting:U},methods:{handleJobComplete(e){this.$router.push({name:"ResultsPage",query:{outdir:e.outdir,jobid:e.jobid}})}}};const G=(0,k.A)(X,[["render",C]]);var B=G,Z=a(9012),K=a(381),Y=a(6686),H=a(7604),z=a(9880);function Q(e,t,a,n,o,l){const i=(0,r.g2)("SankeyDiagram");return(0,r.uX)(),(0,r.Wv)(D.J,null,{default:(0,r.k6)((()=>[(0,r.bF)(K.h,{modelValue:o.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>o.tab=e)},{default:(0,r.k6)((()=>[(0,r.bF)(Y.U,{value:"table"},{default:(0,r.k6)((()=>[(0,r.eW)("Table")])),_:1}),(0,r.bF)(Y.U,{value:"sankey"},{default:(0,r.k6)((()=>[(0,r.eW)("Sankey")])),_:1})])),_:1},8,["modelValue"]),(0,r.bF)(j.O,null,{default:(0,r.k6)((()=>[(0,r.bF)(H.l,{modelValue:o.tab,"onUpdate:modelValue":t[1]||(t[1]=e=>o.tab=e)},{default:(0,r.k6)((()=>[(0,r.bF)(z.Y,{value:"table"},{default:(0,r.k6)((()=>[(0,r.bF)(Z.g,{headers:o.headers,items:o.results,height:"500","item-value":"name"},null,8,["headers","items"])])),_:1}),(0,r.bF)(z.Y,{value:"sankey"},{default:(0,r.k6)((()=>[(0,r.bF)(i,{data:o.sankeyData},null,8,["data"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}const ee={ref:"sankeyContainer"};function te(e,t,a,n,o,l){return(0,r.uX)(),(0,r.CE)("div",ee,null,512)}var ae=a(6300),ne=a(1905),re={props:{data:{type:Object,required:!0}},mounted(){this.createSankey()},methods:{createSankey(){const e=this.$refs.sankeyContainer,t=600,a=500,n=ae.Ltv(e).append("svg").attr("width",t).attr("height",a),{nodes:r,links:o}=(0,ne.IZ)().nodeId((e=>e.id)).nodeAlign(ne.oT).nodeWidth(30).nodePadding(10).extent([[1,1],[t-1,a-6]])(this.data);n.append("g").selectAll("rect").data(r).enter().append("rect").attr("x",(e=>e.x0)).attr("y",(e=>e.y0)).attr("height",(e=>e.y1-e.y0)).attr("width",(e=>e.x1-e.x0)).attr("fill","steelblue").append("title").text((e=>`${e.name}\n${e.value}`));const l=n.append("g").attr("fill","none").attr("stroke","#000").attr("stroke-opacity",.2).selectAll("path").data(o).enter().append("path").attr("d",(0,ne.Ku)()).attr("stroke-width",(e=>Math.max(1,e.width)));l.append("title").text((e=>`${e.source.name} → ${e.target.name}\n${e.value}`))}}};const oe=(0,k.A)(re,[["render",te]]);var le=oe,ie={name:"ResultsPage",components:{SankeyDiagram:le},data(){return{tab:"TABLE",headers:[{title:"Proportion",align:"start",key:"proportion"},{title:"Clade Reads",align:"start",key:"clade_reads"},{title:"Taxon Reads",align:"start",key:"taxon_reads"},{title:"Rank",align:"start",key:"rank"},{title:"Taxon ID",align:"start",key:"taxon_id"},{title:"Name",align:"start",key:"name"}],results:[],sankeyData:{nodes:[{id:"n0",name:"root"},{id:"n1",name:"Viruses"},{id:"n2",name:"Riboviria"},{id:"n3",name:"Orthornavirae"},{id:"n4",name:"Pisuviricota"},{id:"n5",name:"Pisoniviricetes"},{id:"n6",name:"Nidovirales"},{id:"n7",name:"Cornidovirineae"},{id:"n8",name:"Coronaviridae"},{id:"n9",name:"Orthocoronavirinae"},{id:"n10",name:"Betacoronavirus"},{id:"n11",name:"Sarbecovirus"},{id:"n12",name:"Severe acute respiratory syndrome-related coronavirus"},{id:"n13",name:"SARS-CoV-2"}],links:[{source:"n0",target:"n1",value:95.8757},{source:"n1",target:"n2",value:2.3831},{source:"n0",target:"n3",value:5.3231},{source:"n1",target:"n4",value:10.3231},{source:"n2",target:"n3",value:30.2642},{source:"n4",target:"n6",value:50.2642},{source:"n6",target:"n7",value:3.2642},{source:"n7",target:"n8",value:82.2642},{source:"n6",target:"n9",value:12.2642},{source:"n9",target:"n10",value:22.2642},{source:"n1",target:"n11",value:32.2642},{source:"n4",target:"n12",value:2.2642},{source:"n2",target:"n13",value:22.2642}]}}},computed:{},methods:{async readTSVFile(e){try{const t=await window.electron.readFile(e),a=this.tsvToJSON(t);return a.results}catch(t){console.error("Error reading TSV file:",t)}},tsvToJSON(e){const t=["proportion","clade_reads","taxon_reads","rank","taxon_id","name"],a=e.split("\n").map((e=>{const a=e.split("\t").map((e=>e.trim()));return Object.fromEntries(t.map(((e,t)=>[e,a[t]])))}));return{results:a}},saveResults(){sessionStorage.setItem("results",JSON.stringify(this.results))}},async mounted(){try{const e=`${this.$route.query.outdir}/${this.$route.query.jobid}_report.tsv`,t=await this.readTSVFile(`${e}`);this.results=t,this.saveResults(),console.log("DONE")}catch(e){console.error("Error loading results:",e)}}};const se=(0,k.A)(ie,[["render",Q]]);var ue=se;const de=[{path:"/",name:"Home",redirect:"/search"},{path:"/search",name:"SearchPage",component:B},{path:"/results",name:"ResultsPage",component:ue}],ce=(0,F.aE)({history:(0,F.LA)("app://./"),routes:de});var fe=ce,me=(a(5524),a(5790)),be=(0,me.$N)();async function pe(){const e=await a.e(53).then(a.t.bind(a,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}pe();const he=(0,n.Ef)(y);he.use(fe),he.use(be),he.mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var o=Object.create(null);a.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){l[e]=function(){return n[e]}}));return l["default"]=function(){return n},a.d(o,l),o}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/webfontloader.3091fdc5.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="metabuli-app:";a.l=function(n,r,o,l){if(e[n])e[n].push(r);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+o){i=c;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[r];var f=function(t,a){i.onerror=i.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="app://./"}(),function(){var e={524:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(a,n){r=e[t]=[a,n]}));n.push(r[2]=o);var l=a.p+a.u(t),i=new Error,s=function(n){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,r[1](i)}};a.l(l,s,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,l=n[0],i=n[1],s=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(s)var d=s(a)}for(t&&t(n);u<l.length;u++)o=l[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},n=self["webpackChunkmetabuli_app"]=self["webpackChunkmetabuli_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(5132)}));n=a.O(n)})();
//# sourceMappingURL=app.c9e04d7c.js.map