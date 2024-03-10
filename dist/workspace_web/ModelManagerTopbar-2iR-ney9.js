import{f as Y,r as g,j as n,g as $,e as je,a4 as J,b as $e,o as Ve,k as He,h as T,a9 as re,af as Ue,N as _e,ag as Ye,Q as be,S as Ce,T as qe,Z as Qe,M as Je,O as Xe,R as Ze,P as et,_ as tt}from"./input.js";import{ao as st,an as nt,ap as U,o as B,B as oe,F as R,l as F,m as ie,aq as Ie,ar as me,ab as ke,k as X,z as ot,H as z,n as Z,as as Le,j as Ee,at as it,au as Te,$ as rt,a0 as at,a1 as lt,a2 as ct,a3 as dt,av as Ae,aw as te,am as Ne,ax as ht,ay as ut,ac as ft,az as mt,aA as pt}from"./App-5Q89H_Oo.js";import{I as Fe,G as gt,C as xt}from"./chunk-JARCRF6W-26PFjau4.js";import{app as H}from"/scripts/app.js";import{api as Q}from"/scripts/api.js";import{S as ee}from"./chunk-3RSXBRAN-ioWnq-ld.js";var De=Y(function(e,s){const{spacing:o="0.5rem",spacingX:i,spacingY:r,children:a,justify:c,direction:l,align:h,className:d,shouldWrapChildren:f,...u}=e,p=g.useMemo(()=>f?g.Children.map(a,(m,x)=>n.jsx(ae,{children:m},x)):a,[a,f]);return n.jsx($.div,{ref:s,className:je("chakra-wrap",d),...u,children:n.jsx($.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:h,flexDirection:l,listStyleType:"none",gap:o,columnGap:i,rowGap:r,padding:"0"},children:p})})});De.displayName="Wrap";var ae=Y(function(e,s){const{className:o,...i}=e;return n.jsx($.li,{ref:s,__css:{display:"flex",alignItems:"flex-start"},className:je("chakra-wrap__listitem",o),...i})});ae.displayName="WrapItem";function pe(t){return nt(t,e=>e==="auto"?"auto":`span ${e}/span ${e}`)}var Pe=Y(function(e,s){const{area:o,colSpan:i,colStart:r,colEnd:a,rowEnd:c,rowSpan:l,rowStart:h,...d}=e,f=st({gridArea:o,gridColumn:pe(i),gridRow:pe(l),gridColumnStart:r,gridColumnEnd:a,gridRowStart:h,gridRowEnd:c});return n.jsx($.div,{ref:s,__css:f,...d})});Pe.displayName="GridItem";function yt(t,e,s){return(t-e)*100/(s-e)}J({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}});J({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});var Mt=J({"0%":{left:"-40%"},"100%":{left:"100%"}}),wt=J({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function vt(t){const{value:e=0,min:s,max:o,valueText:i,getValueText:r,isIndeterminate:a,role:c="progressbar"}=t,l=yt(e,s,o);return{bind:{"data-indeterminate":a?"":void 0,"aria-valuemax":o,"aria-valuemin":s,"aria-valuenow":a?void 0:e,"aria-valuetext":(()=>{if(e!=null)return typeof r=="function"?r(e,l):i})(),role:c},percent:l,value:e}}var[St,jt]=$e({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),_t=Y((t,e)=>{const{min:s,max:o,value:i,isIndeterminate:r,role:a,...c}=t,l=vt({value:i,min:s,max:o,isIndeterminate:r,role:a}),d={height:"100%",...jt().filledTrack};return n.jsx($.div,{ref:e,style:{width:`${l.percent}%`,...c.style},...l.bind,...c,__css:d})}),Oe=Y((t,e)=>{var s;const{value:o,min:i=0,max:r=100,hasStripe:a,isAnimated:c,children:l,borderRadius:h,isIndeterminate:d,"aria-label":f,"aria-labelledby":u,"aria-valuetext":p,title:m,role:x,...y}=Ve(t),w=He("Progress",t),j=h??((s=w.track)==null?void 0:s.borderRadius),C={animation:`${wt} 1s linear infinite`},D={...!d&&a&&c&&C,...d&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${Mt} 1s ease infinite normal none running`}},I={overflow:"hidden",position:"relative",...w.track};return n.jsx($.div,{ref:e,borderRadius:j,__css:I,...y,children:n.jsxs(St,{value:w,children:[n.jsx(_t,{"aria-label":f,"aria-labelledby":u,"aria-valuetext":p,min:i,max:r,value:o,isIndeterminate:d,css:D,borderRadius:j,title:m,role:x}),l]})})});Oe.displayName="Progress";function K(t){return Array.isArray?Array.isArray(t):Be(t)==="[object Array]"}const bt=1/0;function Ct(t){return t==null?"":function(e){if(typeof e=="string")return e;let s=e+"";return s=="0"&&1/e==-bt?"-0":s}(t)}function P(t){return typeof t=="string"}function ze(t){return typeof t=="number"}function It(t){return t===!0||t===!1||function(e){return function(s){return typeof s=="object"}(e)&&e!==null}(t)&&Be(t)=="[object Boolean]"}function N(t){return t!=null}function se(t){return!t.trim().length}function Be(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const kt=t=>`Missing ${t} property in key`,Lt=t=>`Property 'weight' in key '${t}' must be a positive integer`,ge=Object.prototype.hasOwnProperty;class Et{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(o=>{let i=We(o);this._keys.push(i),this._keyMap[i.id]=i,s+=i.weight}),this._keys.forEach(o=>{o.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function We(t){let e=null,s=null,o=null,i=1,r=null;if(P(t)||K(t))o=t,e=xe(t),s=ye(t);else{if(!ge.call(t,"name"))throw new Error(kt("name"));const a=t.name;if(o=a,ge.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Lt(a));e=xe(a),s=ye(a),r=t.getFn}return{path:e,id:s,weight:i,src:o,getFn:r}}function xe(t){return K(t)?t:t.split(".")}function ye(t){return K(t)?t.join("."):t}var S={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(t,e){let s=[],o=!1;const i=(r,a,c)=>{if(N(r))if(a[c]){const l=r[a[c]];if(!N(l))return;if(c===a.length-1&&(P(l)||ze(l)||It(l)))s.push(Ct(l));else if(K(l)){o=!0;for(let h=0,d=l.length;h<d;h+=1)i(l[h],a,c+1)}else a.length&&i(l,a,c+1)}else s.push(r)};return i(t,P(e)?e.split("."):e,0),o?s:s[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};const Tt=/[^ ]+/g;class le{constructor({getFn:e=S.getFn,fieldNormWeight:s=S.fieldNormWeight}={}){this.norm=function(o=1,i=3){const r=new Map,a=Math.pow(10,i);return{get(c){const l=c.match(Tt).length;if(r.has(l))return r.get(l);const h=1/Math.pow(l,.5*o),d=parseFloat(Math.round(h*a)/a);return r.set(l,d),d},clear(){r.clear()}}}(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,P(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();P(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!N(e)||se(e))return;let o={v:e,i:s,n:this.norm.get(e)};this.records.push(o)}_addObject(e,s){let o={i:s,$:{}};this.keys.forEach((i,r)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(N(a)){if(K(a)){let c=[];const l=[{nestedArrIndex:-1,value:a}];for(;l.length;){const{nestedArrIndex:h,value:d}=l.pop();if(N(d))if(P(d)&&!se(d)){let f={v:d,i:h,n:this.norm.get(d)};c.push(f)}else K(d)&&d.forEach((f,u)=>{l.push({nestedArrIndex:u,value:f})})}o.$[r]=c}else if(P(a)&&!se(a)){let c={v:a,n:this.norm.get(a)};o.$[r]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Re(t,e,{getFn:s=S.getFn,fieldNormWeight:o=S.fieldNormWeight}={}){const i=new le({getFn:s,fieldNormWeight:o});return i.setKeys(t.map(We)),i.setSources(e),i.create(),i}function q(t,{errors:e=0,currentLocation:s=0,expectedLocation:o=0,distance:i=S.distance,ignoreLocation:r=S.ignoreLocation}={}){const a=e/t.length;if(r)return a;const c=Math.abs(o-s);return i?a+c/i:c?1:a}const W=32;function At(t,e,s,{location:o=S.location,distance:i=S.distance,threshold:r=S.threshold,findAllMatches:a=S.findAllMatches,minMatchCharLength:c=S.minMatchCharLength,includeMatches:l=S.includeMatches,ignoreLocation:h=S.ignoreLocation}={}){if(e.length>W)throw new Error(`Pattern length exceeds max of ${W}.`);const d=e.length,f=t.length,u=Math.max(0,Math.min(o,f));let p=r,m=u;const x=c>1||l,y=x?Array(f):[];let w;for(;(w=t.indexOf(e,m))>-1;){let I=q(e,{currentLocation:w,expectedLocation:u,distance:i,ignoreLocation:h});if(p=Math.min(I,p),m=w+d,x){let k=0;for(;k<d;)y[w+k]=1,k+=1}}m=-1;let j=[],C=1,A=d+f;const G=1<<d-1;for(let I=0;I<d;I+=1){let k=0,L=A;for(;k<L;)q(e,{errors:I,currentLocation:u+L,expectedLocation:u,distance:i,ignoreLocation:h})<=p?k=L:A=L,L=Math.floor((A-k)/2+k);A=L;let O=Math.max(1,u-L+1),E=a?f:Math.min(u+L,f)+d,M=Array(E+2);M[E+1]=(1<<I)-1;for(let v=E;v>=O;v-=1){let _=v-1,b=s[t.charAt(_)];if(x&&(y[_]=+!!b),M[v]=(M[v+1]<<1|1)&b,I&&(M[v]|=(j[v+1]|j[v])<<1|1|j[v+1]),M[v]&G&&(C=q(e,{errors:I,currentLocation:_,expectedLocation:u,distance:i,ignoreLocation:h}),C<=p)){if(p=C,m=_,m<=u)break;O=Math.max(1,2*u-m)}}if(q(e,{errors:I+1,currentLocation:u,expectedLocation:u,distance:i,ignoreLocation:h})>p)break;j=M}const D={isMatch:m>=0,score:Math.max(.001,C)};if(x){const I=function(k=[],L=S.minMatchCharLength){let O=[],E=-1,M=-1,v=0;for(let _=k.length;v<_;v+=1){let b=k[v];b&&E===-1?E=v:b||E===-1||(M=v-1,M-E+1>=L&&O.push([E,M]),E=-1)}return k[v-1]&&v-E>=L&&O.push([E,v-1]),O}(y,c);I.length?l&&(D.indices=I):D.isMatch=!1}return D}function Nt(t){let e={};for(let s=0,o=t.length;s<o;s+=1){const i=t.charAt(s);e[i]=(e[i]||0)|1<<o-s-1}return e}class Ft{constructor(e,{location:s=S.location,threshold:o=S.threshold,distance:i=S.distance,includeMatches:r=S.includeMatches,findAllMatches:a=S.findAllMatches,minMatchCharLength:c=S.minMatchCharLength,isCaseSensitive:l=S.isCaseSensitive,ignoreLocation:h=S.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:i,includeMatches:r,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:l,ignoreLocation:h},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(u,p)=>{this.chunks.push({pattern:u,alphabet:Nt(u),startIndex:p})},f=this.pattern.length;if(f>W){let u=0;const p=f%W,m=f-p;for(;u<m;)d(this.pattern.substr(u,W),u),u+=W;if(p){const x=f-W;d(this.pattern.substr(x),x)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,e.length-1]]),m}const{location:i,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:l,ignoreLocation:h}=this.options;let d=[],f=0,u=!1;this.chunks.forEach(({pattern:m,alphabet:x,startIndex:y})=>{const{isMatch:w,score:j,indices:C}=At(e,m,x,{location:i+y,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:l,includeMatches:o,ignoreLocation:h});w&&(u=!0),f+=j,w&&C&&(d=[...d,...C])});let p={isMatch:u,score:u?f/this.chunks.length:1};return u&&o&&(p.indices=d),p}}const Me=[];function we(t,e){for(let s=0,o=Me.length;s<o;s+=1){let i=Me[s];if(i.condition(t,e))return new i(t,e)}return new Ft(t,e)}function Dt(t,e){const s=t.matches;e.matches=[],N(s)&&s.forEach(o=>{if(!N(o.indices)||!o.indices.length)return;const{indices:i,value:r}=o;let a={indices:i,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),e.matches.push(a)})}function Pt(t,e){e.score=t.score}class V{constructor(e,s={},o){if(this.options={...S,...s},this.options.useExtendedSearch)throw new Error("Extended search is not available");this._keyStore=new Et(this.options.keys),this.setCollection(e,o)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof le))throw new Error("Incorrect 'index' type");this._myIndex=s||Re(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){N(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let o=0,i=this._docs.length;o<i;o+=1){const r=this._docs[o];e(r,o)&&(this.removeAt(o),o-=1,i-=1,s.push(r))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:o,includeScore:i,shouldSort:r,sortFn:a,ignoreFieldNorm:c}=this.options;let l=P(e)?P(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(h,{ignoreFieldNorm:d=S.ignoreFieldNorm}){h.forEach(f=>{let u=1;f.matches.forEach(({key:p,norm:m,score:x})=>{const y=p?p.weight:null;u*=Math.pow(x===0&&y?Number.EPSILON:x,(y||1)*(d?1:m))}),f.score=u})}(l,{ignoreFieldNorm:c}),r&&l.sort(a),ze(s)&&s>-1&&(l=l.slice(0,s)),function(h,d,{includeMatches:f=S.includeMatches,includeScore:u=S.includeScore}={}){const p=[];return f&&p.push(Dt),u&&p.push(Pt),h.map(m=>{const{idx:x}=m,y={item:d[x],refIndex:x};return p.length&&p.forEach(w=>{w(m,y)}),y})}(l,this._docs,{includeMatches:o,includeScore:i})}_searchStringList(e){const s=we(e,this.options),{records:o}=this._myIndex,i=[];return o.forEach(({v:r,i:a,n:c})=>{if(!N(r))return;const{isMatch:l,score:h,indices:d}=s.searchIn(r);l&&i.push({item:r,idx:a,matches:[{score:h,value:r,norm:c,indices:d}]})}),i}_searchLogical(e){throw new Error("Logical search is not available")}_searchObjectList(e){const s=we(e,this.options),{keys:o,records:i}=this._myIndex,r=[];return i.forEach(({$:a,i:c})=>{if(!N(a))return;let l=[];o.forEach((h,d)=>{l.push(...this._findMatches({key:h,value:a[d],searcher:s}))}),l.length&&r.push({idx:c,item:a,matches:l})}),r}_findMatches({key:e,value:s,searcher:o}){if(!N(s))return[];let i=[];if(K(s))s.forEach(({v:r,i:a,n:c})=>{if(!N(r))return;const{isMatch:l,score:h,indices:d}=o.searchIn(r);l&&i.push({score:h,key:e,value:r,idx:a,norm:c,indices:d})});else{const{v:r,n:a}=s,{isMatch:c,score:l,indices:h}=o.searchIn(r);c&&i.push({score:l,key:e,value:r,norm:a,indices:h})}return i}}V.version="7.0.0",V.createIndex=Re,V.parseIndex=function(t,{getFn:e=S.getFn,fieldNormWeight:s=S.fieldNormWeight}={}){const{keys:o,records:i}=t,r=new le({getFn:e,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(i),r},V.config=S;function Ot({selectedModel:t,setSelectedModel:e,modelTypeList:s}){const o=i=>{e(i)};return n.jsx(De,{children:s.map(i=>n.jsx(ae,{children:n.jsx(T,{colorScheme:"blue",variant:t===i?"solid":"outline",onClick:()=>o(i),size:"sm",children:i})},i))})}const zt={checkpoints:"CheckpointLoaderSimple",vae:"VAELoader",loras:"LoraLoader",controlnet:"ControlNetLoader",upscale_models:"UpscaleModelLoader"};function Bt({data:t}){const[e,s]=g.useState("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27fd7433-cb0a-4a87-88c1-21ccb2b1a842/width=450/00060-881622046.jpeg"),[o,i]=g.useState(!t.file_hash),[r,a]=g.useState();g.useEffect(()=>{i(!t.file_hash),c()},[t.file_hash]);const c=async()=>{var d,f,u,p;const h=await U.models.get(t.model_name+"@"+t.model_type);if(h!=null&&(a(h),(d=h.imageUrl)!=null&&d.length&&s(h.imageUrl)),t.file_hash!=null)try{const m=`https://civitai.com/api/v1/model-versions/by-hash/${t.file_hash}`,y=await(await fetch(m)).json();let w;if(await((f=B)==null?void 0:f.getSetting("showNsfwModelThumbnail"))===!0)w=(p=(u=y==null?void 0:y.images)==null?void 0:u[0])==null?void 0:p.url;else if(!y.model.nsfw){const A=y.images.find(G=>G.nsfw==="None");w=A==null?void 0:A.url}w&&s(w);const C={id:t.model_name+"@"+t.model_type,fileHash:t.file_hash,fileFolder:t.model_type,fileName:t.model_name+t.model_extension,modelName:y.model.name,civitModelID:String(y.modelId),civitModelVersionID:String(y.id),imageUrl:w??null};U.models.put(C),a(C)}catch{}t.preview&&s(t.preview)},l=h=>{const d=zt[t.model_type];d&&(h.dataTransfer.setData("eventName","WorkspaceManagerAddNode"),h.dataTransfer.setData("modelRelativePath",t.model_name+t.model_extension),h.dataTransfer.setData("nodeType",d))};return n.jsxs(oe,{children:[n.jsxs(oe,{position:"relative",borderRadius:4,draggable:!0,onDragStart:l,children:[o?n.jsx(R,{bg:"rgba(0, 0, 0, 0.5)",height:178,justifyContent:"center",alignItems:"center",children:n.jsx(re,{})}):n.jsx(Fe,{src:e,draggable:!1,boxSize:"100%",height:150,objectFit:"cover",borderRadius:4,cursor:(r==null?void 0:r.civitModelID)!=null?"pointer":"auto",onClick:()=>{(r==null?void 0:r.civitModelID)==null||(r==null?void 0:r.civitModelVersionID)==null||window.open(`https://civitai.com/models/${r==null?void 0:r.civitModelID}?modelVersionId=${r==null?void 0:r.civitModelVersionID}`)}}),n.jsx(F,{position:"absolute",bottom:"0",left:"0",right:"0",color:"white",fontSize:14})]}),n.jsx(ie,{label:t.date.toLocaleDateString(),children:n.jsx(F,{textAlign:"center",p:"1",fontSize:14,noOfLines:2,children:(r==null?void 0:r.modelName)??t.model_name})})]})}function Wt({list:t}){return n.jsx(gt,{templateColumns:"repeat(3, minmax(0, 1fr))",gap:1,marginTop:2,children:t.map(e=>n.jsx(Pe,{children:n.jsx(Bt,{data:e})},e.model_name+e.date.getTime()))})}const Rt=async t=>{try{const s=await(await Q.fetchApi("/model_manager/install_model",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).text();window.dispatchEvent(new CustomEvent("model_install_message",{detail:s}))}catch(e){console.error("Failed to connect to the server:",e)}};function ve(t,e=1){const i=t/1024;return i>=1024?(i/1024).toFixed(e)+" GB":i.toFixed(e)+" MB"}function Se(t,e){if(!t||t.length===0)return;let s=t.find(o=>o.nsfw==="None");return e&&(s=s??t[0]),s}function Kt(t,e=280,s){var o,i,r,a;if(t)return Ie(t)?(r=Se((i=(o=t.modelVersions)==null?void 0:o.at(0))==null?void 0:i.images,s))==null?void 0:r.url:`https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${(a=Se(t.images,s))==null?void 0:a.url}/width=${e}/`}const ne=280;function Gt({model:t,onClickInstallModel:e,installing:s}){var u,p;const[o,i]=g.useState();g.useEffect(()=>{m();async function m(){var y;const x=await((y=B)==null?void 0:y.getSetting("showNsfwModelThumbnail"));i(Kt(t,ne,x))}},[t]);const r=Ie(t)?t.modelVersions:t.versions,[a,c]=g.useState(((u=r==null?void 0:r[0])==null?void 0:u.name)??""),l=r==null?void 0:r.find(m=>(m==null?void 0:m.name)===a),h=()=>{window.open(`https://civitai.com/models/${t.id}`)},d=g.useCallback(()=>{if(l==null){console.error("no file is find by name",a);return}e(me(l,t.name),t)},[a]),f=(p=me(l))==null?void 0:p.sizeKB;return n.jsxs(ke,{width:ne,justifyContent:"space-between",mb:2,gap:1,children:[n.jsx(Fe,{borderRadius:3,boxSize:ne+"px",objectFit:"cover",src:o,alt:"model cover image",cursor:"pointer",onClick:()=>h()}),n.jsxs(X,{p:1,children:[n.jsx(ie,{label:t.name,children:n.jsx(F,{fontWeight:500,noOfLines:1,children:t.name})}),n.jsxs(R,{justifyContent:"space-between",alignItems:"center",children:[n.jsx(T,{borderRadius:14,noOfLines:1,size:"xs",colorScheme:"teal",maxWidth:"40%",flexShrink:1,variant:"outline",px:1,cursor:"text",children:n.jsx(F,{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:t.type})}),n.jsx(T,{leftIcon:n.jsx(ot,{size:18}),iconSpacing:1,borderRadius:10,size:"sm",py:1,colorScheme:"teal",type:"submit",onClick:()=>d(),isDisabled:!!(a&&s.includes(a)),children:"Install"})]}),n.jsxs(z,{children:[n.jsx(ee,{size:"md",style:{paddingLeft:4},onChange:m=>{c(m.target.value)},children:r==null?void 0:r.map(m=>{const x=m==null?void 0:m.name;return x?n.jsx("option",{value:x,style:{padding:0},children:x},m.id):null})}),f&&n.jsx(ie,{label:ve(f),children:n.jsx(F,{flexShrink:1,noOfLines:1,width:"40%",children:ve(f)})})]})]})]})}function $t({searchQuery:t,setSearchQuery:e,onSearch:s}){return n.jsxs(R,{gap:1,alignItems:"center",grow:1,children:[n.jsx(Z,{placeholder:"Search models in CivitAI",width:"60%",value:t,onChange:o=>e(o.target.value),onKeyUp:o=>{o.code==="Enter"&&s()}}),n.jsx(T,{size:"sm",onClick:()=>s(),colorScheme:"teal",children:"Search"})]})}function Vt({isOpen:t,fileSelected:e,onClose:s,selectFolder:o}){const[i,r]=g.useState(""),[a,c]=g.useState([]),[l,h]=g.useState(""),d=g.useRef(null);g.useEffect(()=>{f()},[]);const f=async()=>{const u=await Le();u&&(["custom_nodes","config","saved_prompts"].forEach(p=>{delete u[p]}),c(Object.values(u).flatMap(p=>p)))};return n.jsx(Ue,{isOpen:t,leastDestructiveRef:d,onClose:s,children:n.jsx(_e,{children:n.jsxs(Ye,{children:[n.jsx(be,{fontSize:"lg",fontWeight:"bold",children:"Choose Folder"}),n.jsx(Ce,{children:n.jsxs(X,{spacing:4,children:[!e&&n.jsxs(n.Fragment,{children:[n.jsx(F,{children:"Model download url"}),n.jsx(Z,{placeholder:"https://civitai.com/api/download/models/311399",onChange:u=>h(u.target.value),value:l})]}),n.jsx(F,{children:"Choose model install folder"}),n.jsx(ee,{placeholder:"Select option",value:i,onChange:u=>r(u.target.value),children:a.map(u=>n.jsx("option",{value:u,children:u},u))})]})}),n.jsxs(qe,{children:[n.jsx(T,{ref:d,onClick:s,children:"Cancel"}),n.jsx(T,{onClick:()=>o(i,l),ml:3,isDisabled:l.length===0,children:"Confirm"})]})]})})})}function Ht(){const{colorMode:t}=Qe(),e=Ee(),[s,o]=g.useState([]);return g.useEffect(()=>{Q.addEventListener("download_progress",i=>{o(i.detail)}),Q.addEventListener("download_error",i=>{e({title:"Download Error",description:i.detail,status:"error",duration:4e3,isClosable:!0})})},[]),n.jsx(X,{spacing:5,pos:"absolute",bottom:"0",left:"0",width:"50%",zIndex:80,backgroundColor:t==="light"?"white":"#242424",paddingX:5,pt:2,children:s.map(({save_path:i,progress:r})=>n.jsxs(z,{children:[n.jsx(F,{fontSize:16,width:"40%",children:i.replace(/^.*[\\/]/,"")}),n.jsx(Oe,{isIndeterminate:!r,hasStripe:!0,width:"50%",value:r}),n.jsxs(F,{fontSize:16,width:"10%",children:[r.toFixed(1),"%"]}),n.jsx(T,{variant:"outline",size:"sm",colorScheme:"red",onClick:()=>it(i),children:"Cancel"})]},i))})}const Ke="WORKSPACE_CIVIT_API_KEY_STORAGE_KEY";function Ut(){return localStorage.getItem(Ke)}function Yt(t){localStorage.setItem(Ke,t)}function qt(){const[t,e]=g.useState(""),{onOpen:s,onClose:o,isOpen:i}=Te(),r=()=>{Yt(t),o()};return n.jsxs(rt,{isOpen:i,onOpen:s,onClose:o,placement:"right",closeOnBlur:!1,children:[n.jsx(at,{children:n.jsx(T,{size:"sm",py:1,mr:8,children:"Set Civitai API Key"})}),n.jsxs(lt,{p:5,children:[n.jsx(ct,{}),n.jsx(dt,{}),n.jsxs(X,{spacing:4,children:[n.jsx(F,{fontSize:14,children:"Some Civitai.com models require user login to download, you will nedd a Civitai API key to download in that case"}),n.jsx(Z,{value:t,onChange:a=>e(a.target.value),placeholder:"API Key"}),n.jsx(T,{size:"sm",py:1,mr:8,onClick:r,children:"Save"})]})]})]})}async function Qt(t,e){var a,c;const s={queries:[{q:t,indexUid:"models_v5",facets:["category.name","checkpointType","fileFormats","lastVersionAtUnix","tags.name","type","user.username","version.baseModel"],attributesToHighlight:["*"],highlightPreTag:"__ais-highlight__",highlightPostTag:"__/ais-highlight__",limit:80,offset:0}]};return e&&(s.queries[0].filter=[[`"type"="${e}"`]]),((c=(a=await(await fetch("https://meilisearch-v1-6.civitai.com/multi-search",{headers:{"Content-Type":"application/json",Authorization:"Bearer 102312c2b83ea0ef9ac32e7858f742721bbfd7319a957272e746f84fd1e974af"},method:"POST",body:JSON.stringify(s)})).json())==null?void 0:a.results)==null?void 0:c.at(0)).hits??[]}function Jt({onclose:t,searchQuery:e="",modelType:s}){const[o,i]=g.useState([]),[r,a]=g.useState(!1),[c,l]=g.useState(s),h=Ee(),[d,f]=g.useState([]),[u,p]=g.useState(e),{isOpen:m,onOpen:x,onClose:y}=Te(),[w,j,C]=Ae(),[A,G]=g.useState({}),[D,I]=g.useState(te),k=g.useCallback(async()=>{var b;a(!0);const M=await Qt(u,c);i(M);const v=await Le();v&&G(v);const _=await((b=B)==null?void 0:b.getSetting("defaultFolders"));_&&I(_),a(!1)},[u,c]),L=(M,v)=>{var de,he,ue,fe;if(!((de=C.current)!=null&&de.id)&&!v){console.error("no url to download");return}let _=v??`https://civitai.com/api/download/models/${(he=C.current)==null?void 0:he.id}`,b=(ue=C.current)==null?void 0:ue.name;if(!b&&(b=_.split("/").pop(),!b)){console.error("downloadUrl is malformed");return}h({title:"Installing...",description:b,status:"info",duration:4e3,isClosable:!0}),b!=null&&f(Ge=>[...Ge,b??""]);const ce=Ut();ce&&(_+=`?token=${ce}`),Rt({file_hash:(fe=C.current)==null?void 0:fe.SHA256,filename:b,save_path:M,url:_}),j(void 0),y()},O=async(M,v)=>{const _=D[v.type];j(M),_==null?x():L(_)},E=async(M,v)=>{var b;const _={...D,[M]:v};await((b=B)==null?void 0:b.upsert({defaultFolders:_})),I(_)};return g.useEffect(()=>{k()},[c]),n.jsxs(n.Fragment,{children:[n.jsxs(Je,{isOpen:!0,onClose:t,blockScrollOnMount:!0,children:[n.jsx(_e,{}),n.jsxs(Xe,{width:"90%",maxWidth:"90vw",height:"90vh",children:[n.jsxs(be,{pb:1,children:[n.jsxs(z,{gap:2,mb:2,alignItems:"center",children:[n.jsx(Ne,{size:"md",mr:2,children:"Models"}),n.jsx($t,{searchQuery:u,setSearchQuery:p,onSearch:k}),n.jsx(T,{size:"sm",py:1,mr:8,onClick:x,children:"Custom URL Install"}),n.jsx(qt,{})]}),n.jsxs(z,{gap:2,wrap:"wrap",children:[n.jsx(T,{size:"sm",py:1,onClick:()=>{l(void 0)},isActive:c==null,children:"All"}),ht.map(M=>n.jsx(T,{size:"sm",py:1,isActive:c===M,onClick:()=>{l(M)},children:M},M)),c&&A[te[c]]&&n.jsxs(z,{ml:"auto",children:[n.jsx(F,{fontSize:17,whiteSpace:"nowrap",children:"Default Download Folder:"}),n.jsx(ee,{value:D[c],onChange:M=>E(c,M.target.value),children:A[te[c]].map(M=>n.jsx("option",{value:M,children:M}))})]})]}),r&&n.jsx(re,{thickness:"4px",emptyColor:"gray.200",color:"pink.500",size:"lg"})]}),n.jsx(Ze,{}),n.jsxs(Ce,{overflowY:"auto",children:[n.jsx(z,{wrap:"wrap",children:o==null?void 0:o.map(M=>n.jsx(Gt,{model:M,onClickInstallModel:O,installing:d},M.id))}),n.jsx(Ht,{})]})]})]}),n.jsx(Vt,{fileSelected:!!w,isOpen:m,onClose:y,selectFolder:(M,v)=>{L(M,C.current?void 0:v)}})]})}function Xt(){const[t,e]=g.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(T,{size:"sm",colorScheme:"teal",onClick:()=>e(!0),children:"Install Models"}),t&&n.jsx(Jt,{modelType:"Checkpoint",onclose:()=>e(!1)})]})}const Zt=()=>{const[t,e]=g.useState(["checkpoints"]),[s,o]=g.useState([]),[i,r]=g.useState(!0);g.useEffect(()=>{a(),Q.addEventListener("model_list",l=>{c(l.detail)})},[]);const a=async()=>{const l=await ut();c(l)},c=async l=>{if(!l)return;r(!1);const h=Array.from(new Set(l.map(f=>f.model_type))),d=h.indexOf("checkpoints");d>=0&&h.splice(d,1),h.unshift("checkpoints"),e(h),o(l.map(f=>({...f,date:new Date(f.date*1e3)})))};return{modelTypeList:t,modelsList:s,loading:i}};function es(){const[t,e,s]=Ae(!1),o=()=>{var c;(c=B)==null||c.getSetting("showNsfwModelThumbnail").then(l=>{e(l??!1)})};g.useEffect(()=>{o()},[]);const i=c=>{var h;const l=c.target.checked;(h=B)==null||h.upsert({showNsfwModelThumbnail:l}).then(()=>{o(),r(),window.dispatchEvent(new Event("showNsfwModelThumbnail"))})},r=async()=>{const c=await U.models.toArray();for(let l=0;l<c.length;l+=5){const h=c.slice(l,l+5);await Promise.all(h.map(a))}},a=async c=>{var l,h;try{const d=`https://civitai.com/api/v1/model-versions/by-hash/${c.fileHash}`,u=await(await fetch(d)).json();let p;if(s.current)p=(h=(l=u==null?void 0:u.images)==null?void 0:l[0])==null?void 0:h.url;else if(!u.model.nsfw){const m=u.images.find(x=>x.nsfw==="None");p=m==null?void 0:m.url}U.models.update(c.id,{imageUrl:p??null})}catch{}};return n.jsx(xt,{isChecked:t,onChange:i,children:"Show NSFW"})}function ts({onClose:t}){const[e,s]=g.useState("checkpoints"),[o,i]=g.useState(""),[r,a]=g.useState("name"),{loading:c,modelTypeList:l,modelsList:h}=Zt(),[d,f]=g.useState([]),[u,p]=g.useState([]);g.useEffect(()=>{x();async function x(){const y=await U.models.toArray();f(h.map(w=>({...w,db:y.find(j=>j.id===w.model_name+"@"+w.model_type)})))}},[h]),g.useEffect(()=>{let x=[];o.length?x=new V(d,{keys:["model_name","db.modelName"]}).search(o).map(j=>j.item):x=h.filter(y=>y.model_type===e).sort((y,w)=>r==="name"?y.model_name.localeCompare(w.model_name):w.date.getTime()-y.date.getTime()),p(x)},[e,h,o,r,d]),g.useEffect(()=>(H.canvasEl.addEventListener("click",t),()=>{H.canvasEl.removeEventListener("click",t)}),[t]);const m=440;return n.jsx(et,{children:n.jsx(oe,{style:{width:m},children:n.jsxs(ke,{width:m,height:"100vh",p:4,gap:2,position:"fixed",top:0,left:0,shadow:"xl",zIndex:ft,overflowY:"auto",children:[n.jsxs(R,{justifyContent:"space-between",alignContent:"center",py:3,children:[n.jsx(Ne,{size:"md",mr:2,children:"Models"}),n.jsx(Xt,{})]}),n.jsx(R,{gap:4,justifyContent:"center",alignItems:"center",mb:1,children:n.jsx(Z,{size:"sm",placeholder:"Search",value:o,onChange:x=>i(x.target.value)})}),n.jsxs(R,{gap:4,justifyContent:"space-between",alignItems:"center",mb:1,children:[!o.length&&n.jsxs(z,{children:[n.jsx("span",{children:"Sort By"}),n.jsxs(ee,{value:r,size:"sm",width:"120px",onChange:x=>a(x.target.value),children:[n.jsx("option",{value:"name",children:"Name"}),n.jsx("option",{value:"date",children:"Date"})]})]}),n.jsx(es,{})]}),!o.length&&n.jsx(Ot,{modelTypeList:l,setSelectedModel:s,selectedModel:e}),n.jsx(Wt,{list:u}),c&&n.jsx(R,{justifyContent:"center",alignItems:"center",height:"100%",children:n.jsx(re,{})})]})})})}const ss=g.lazy(()=>tt(()=>import("./InstallMissingModelsButton-JrzzaLqC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])));function ns(){const[t,e]=g.useState(!1),[s,o]=g.useState(),i=async a=>{if(a.dataTransfer.getData("eventName")!=="WorkspaceManagerAddNode")return;const l=a.dataTransfer.getData("modelRelativePath"),h=a.dataTransfer.getData("nodeType"),d=LiteGraph.createNode(h);d.pos=[a.canvasX,a.canvasY],d.configure({widgets_values:[l]}),H.graph.add(d)};g.useEffect(()=>{var a;return(a=B)==null||a.getSetting("modelManagerTopBarStyle").then(c=>{r(c,!1)}),H.canvasEl.addEventListener("drop",i),()=>{H.canvasEl.removeEventListener("drop",i)}},[]);const r=(a,c=!1)=>{var j;const{top:l=0,right:h=0}=s||{},{top:d=0,right:f=0}=a??{};let u=l+d,p=s===void 0?f:h-f;const m=document.documentElement.clientWidth,x=document.documentElement.clientHeight,y=document.getElementById("modelManagerTopBar"),w=(y==null?void 0:y.offsetWidth)||224;u+32>x&&(u=x-38),p+w>m&&(p=m-w-4),o({top:Math.max(4,u),right:Math.max(4,p)}),c&&((j=B)==null||j.upsert({modelManagerTopBarStyle:{top:u,right:p}}))};return n.jsx(mt,{onDragEnd:a=>{r({top:a.y,right:a.x},!0)},dragIconId:"dragModelManagerTopBarIcon",children:s?n.jsxs(z,{style:{position:"fixed",...s},gap:2,draggable:!1,id:"modelManagerTopBar",className:"model-manager-top-bar",children:[n.jsx(pt,{id:"dragModelManagerTopBarIcon",className:"drag-model-manager-top-bar-icon",cursor:"move",size:15,color:"#FFF"}),n.jsx(ss,{}),n.jsx(T,{size:"sm",colorScheme:"blue","aria-label":"My models",onClick:()=>e(!0),px:1,children:"Models"}),t&&n.jsx(ts,{onClose:()=>e(!1)})]}):""})}const ds=Object.freeze(Object.defineProperty({__proto__:null,default:ns},Symbol.toStringTag,{value:"Module"}));export{Pe as G,Xt as I,ds as M,Qt as g};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["workspace_web/InstallMissingModelsButton-JrzzaLqC.js","workspace_web/input.js","workspace_web/App-5Q89H_Oo.js","workspace_web/assets/App-JXePnJiV.css","workspace_web/chunk-NTCQBYKE-lObvYl8K.js","workspace_web/chunk-JARCRF6W-26PFjau4.js","workspace_web/index-pz0vT7Or.js","workspace_web/chunk-3RSXBRAN-ioWnq-ld.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}