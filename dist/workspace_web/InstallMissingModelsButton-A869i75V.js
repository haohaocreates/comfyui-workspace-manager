import{r as p,j as e,h as m,P as f}from"./input.js";import{app as c}from"/scripts/app.js";import{G as x,g as j,I as _}from"./ModelManagerTopbar-2QU2oykP.js";import{l as d,H as v,a9 as g,B as w,ab as M,ac as y,aI as E,F as I,am as b}from"./App-cZxcRZX7.js";import{V as S}from"./chunk-NTCQBYKE-mBgQZCps.js";import{I as k,G as C}from"./chunk-JARCRF6W-kzTkLGda.js";import"/scripts/api.js";import"./chunk-3RSXBRAN-g4uv_vOx.js";import"./index-pz0vT7Or.js";function z({model:s}){const[l,t]=p.useState([]),o=D(s.received_value),u=async()=>{const n=await(await fetch(`https://huggingface.co/api/models?limit=3&search=${o}&full=true`)).json(),i=[];n.slice(0,1).forEach(({modelId:r,siblings:H})=>{i.push({name:r,downloadUrl:`https://huggingface.co/${r}/resolve/main/`,url:`https://huggingface.co/${r}/tree/main`,icon:"https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png"})}),t(r=>[...r,...i])},h=async()=>{const a=await j(o);t(n=>[...n,...a==null?void 0:a.slice(0,1).map(i=>({name:i.name,url:"https://civitai.com/models/"+i.id,icon:"https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/gtxrcmtsvpjjevozblfa"}))])};return p.useEffect(()=>{u(),h()},[]),e.jsx(x,{p:3,shadow:"md",borderWidth:"1px",children:e.jsxs(S,{align:"start",children:[e.jsx(d,{children:s.class_type}),e.jsxs(v,{ml:3,children:[e.jsxs(d,{children:[s.input_name,": "]}),e.jsx(d,{color:"red.400",children:s.received_value})]}),l.map(({url:a,name:n,icon:i})=>e.jsx(m,{size:"sm",onClick:r=>{r.stopPropagation(),window.open(a,"_blank")},leftIcon:e.jsx(k,{width:5,src:i}),rightIcon:e.jsx(g,{size:20}),children:n})),e.jsx(m,{colorScheme:"blue",mt:5,iconSpacing:1,leftIcon:e.jsx(g,{size:20}),size:"sm",onClick:()=>{window.open(`https://civitai.com/search/models?sortBy=models_v5&query=${o}`,"_blank")},children:"Search in CivitAI"})]})})}function D(s){return s.replace(/^.*(\\|\/|\:)/,"").replace(/\.[^/.]+$/,"").replaceAll("_"," ").replace(/([A-Z])/g," $1").trim()}function B({onClose:s,missingModels:l}){p.useEffect(()=>(c.canvasEl.addEventListener("click",s),()=>{c.canvasEl.removeEventListener("click",s)}),[]);const t=440;return e.jsx(f,{children:e.jsx(w,{style:{width:t},children:e.jsxs(M,{width:t,height:"100vh",p:4,gap:2,position:"fixed",top:0,left:0,shadow:"xl",zIndex:y,overflowY:"auto",children:[e.jsx(E,{children:e.jsxs(I,{justifyContent:"space-between",alignContent:"center",children:[e.jsxs(b,{size:"md",mr:2,children:["Missing Models (",l.length,")"]}),e.jsx(_,{})]})}),e.jsx(C,{templateColumns:"1",gap:1,marginTop:2,children:l.map(o=>e.jsx(z,{model:o},o.received_value))})]})})})}function W({}){const[s,l]=p.useState(!1),[t,o]=p.useState([]);return p.useEffect(()=>{const u=c.queuePrompt;c.queuePrompt=async function(){try{await u.apply(c,[...arguments])}finally{const h=c.lastNodeErrors??{};o(Object.values(h).flatMap(a=>a.errors.filter(n=>n.type==="value_not_in_list").map(n=>{const{input_name:i,received_value:r}=n.extra_info;return{class_type:a.class_type,input_name:i,received_value:r}})))}}},[]),t.length===0?null:e.jsxs(e.Fragment,{children:[e.jsxs(m,{size:"sm","aria-label":"missing models",px:2,onClick:()=>l(!0),children:["Install Missing (",t.length,")"]}),s&&e.jsx(B,{onClose:()=>l(!1),missingModels:t})]})}export{W as default};