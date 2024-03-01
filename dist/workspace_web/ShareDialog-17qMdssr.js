import{r as n,m as he,v as ne,b as fe,f as re,j as e,g as J,h as pe,k as y,p as E,n as X,i as ge,o as ve,G as we,ab as me,B as K,M as be,L as ke,N as xe,O as ye,R as Ce}from"./input.js";import{av as je,B as Se,G as De,a8 as Ie,H as Y,k as Q,n as Pe,aw as Re,a6 as ie,p as _e,m as ae,j as le,ax as Fe,l as Ee,F as Me,w as G,ay as U,az as Ne,aA as We,aB as Le,T as Te,aC as Ve,af as Oe,ae as He}from"./App-GluzE5n7.js";import{app as Be}from"/scripts/app.js";import{t as Ae}from"./index-pz0vT7Or.js";import"/scripts/api.js";function Ge(t){return t&&ne(t)&&ne(t.target)}function Ke(t={}){const{onChange:p,value:c,defaultValue:s,name:d,isDisabled:h,isFocusable:u,isNative:g,...f}=t,[b,C]=n.useState(s||""),m=typeof c<"u",j=m?c:b,k=n.useRef(null),S=n.useCallback(()=>{const a=k.current;if(!a)return;let i="input:not(:disabled):checked";const D=a.querySelector(i);if(D){D.focus();return}i="input:not(:disabled)";const o=a.querySelector(i);o==null||o.focus()},[]),v=`radio-${n.useId()}`,N=d||v,R=n.useCallback(a=>{const i=Ge(a)?a.target.value:a;m||C(i),p==null||p(String(i))},[p,m]),H=n.useCallback((a={},i=null)=>({...a,ref:he(i,k),role:"radiogroup"}),[]),_=n.useCallback((a={},i=null)=>({...a,ref:i,name:N,[g?"checked":"isChecked"]:j!=null?a.value===j:void 0,onChange(o){R(o)},"data-radiogroup":!0}),[g,N,R,j]);return{getRootProps:H,getRadioProps:_,name:N,ref:k,focus:S,setValue:C,value:j,onChange:R,isDisabled:h,isFocusable:u,htmlProps:f}}var[$e,ce]=fe({name:"RadioGroupContext",strict:!1}),de=re((t,p)=>{const{colorScheme:c,size:s,variant:d,children:h,className:u,isDisabled:g,isFocusable:f,...b}=t,{value:C,onChange:m,getRootProps:j,name:k,htmlProps:S}=Ke(b),M=n.useMemo(()=>({name:k,size:s,onChange:m,colorScheme:c,value:C,variant:d,isDisabled:g,isFocusable:f}),[k,s,m,c,C,d,g,f]);return e.jsx($e,{value:M,children:e.jsx(J.div,{...j(S,p),className:pe("chakra-radio-group",u),children:h})})});de.displayName="RadioGroup";var qe={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function ze(t={}){const{defaultChecked:p,isChecked:c,isFocusable:s,isDisabled:d,isReadOnly:h,isRequired:u,onChange:g,isInvalid:f,name:b,value:C,id:m,"data-radiogroup":j,"aria-describedby":k,...S}=t,M=`radio-${n.useId()}`,v=je(),R=!!ce()||!!j;let _=!!v&&!R?v.id:M;_=m??_;const a=d??(v==null?void 0:v.isDisabled),i=h??(v==null?void 0:v.isReadOnly),D=u??(v==null?void 0:v.isRequired),o=f??(v==null?void 0:v.isInvalid),[l,P]=n.useState(!1),[w,I]=n.useState(!1),[x,W]=n.useState(!1),[L,T]=n.useState(!1),[$,q]=n.useState(!!p),B=typeof c<"u",F=B?c:$;n.useEffect(()=>Ae(P),[]);const V=n.useCallback(r=>{if(i||a){r.preventDefault();return}B||q(r.target.checked),g==null||g(r)},[B,a,i,g]),A=n.useCallback(r=>{r.key===" "&&T(!0)},[T]),z=n.useCallback(r=>{r.key===" "&&T(!1)},[T]),ee=n.useCallback((r={},O=null)=>({...r,ref:O,"data-active":y(L),"data-hover":y(x),"data-disabled":y(a),"data-invalid":y(o),"data-checked":y(F),"data-focus":y(w),"data-focus-visible":y(w&&l),"data-readonly":y(i),"aria-hidden":!0,onMouseDown:E(r.onMouseDown,()=>T(!0)),onMouseUp:E(r.onMouseUp,()=>T(!1)),onMouseEnter:E(r.onMouseEnter,()=>W(!0)),onMouseLeave:E(r.onMouseLeave,()=>W(!1))}),[L,x,a,o,F,w,i,l]),{onFocus:oe,onBlur:se}=v??{},ue=n.useCallback((r={},O=null)=>{const te=a&&!s;return{...r,id:_,ref:O,type:"radio",name:b,value:C,onChange:E(r.onChange,V),onBlur:E(se,r.onBlur,()=>I(!1)),onFocus:E(oe,r.onFocus,()=>I(!0)),onKeyDown:E(r.onKeyDown,A),onKeyUp:E(r.onKeyUp,z),checked:F,disabled:te,readOnly:i,required:D,"aria-invalid":X(o),"aria-disabled":X(te),"aria-required":X(D),"data-readonly":y(i),"aria-describedby":k,style:qe}},[a,s,_,b,C,V,se,oe,A,z,F,i,D,o,k]);return{state:{isInvalid:o,isFocused:w,isChecked:F,isActive:L,isHovered:x,isDisabled:a,isReadOnly:i,isRequired:D},getCheckboxProps:ee,getRadioProps:ee,getInputProps:ue,getLabelProps:(r={},O=null)=>({...r,ref:O,onMouseDown:E(r.onMouseDown,Ue),"data-disabled":y(a),"data-checked":y(F),"data-invalid":y(o)}),getRootProps:(r,O=null)=>({...r,ref:O,"data-disabled":y(a),"data-checked":y(F),"data-invalid":y(o)}),htmlProps:S}}function Ue(t){t.preventDefault(),t.stopPropagation()}function Je(t,p){const c={},s={};for(const[d,h]of Object.entries(t))p.includes(d)?c[d]=h:s[d]=h;return[c,s]}var Z=re((t,p)=>{var c;const s=ce(),{onChange:d,value:h}=t,u=ge("Radio",{...s,...t}),g=ve(t),{spacing:f="0.5rem",children:b,isDisabled:C=s==null?void 0:s.isDisabled,isFocusable:m=s==null?void 0:s.isFocusable,inputProps:j,...k}=g;let S=t.isChecked;(s==null?void 0:s.value)!=null&&h!=null&&(S=s.value===h);let M=d;s!=null&&s.onChange&&h!=null&&(M=we(s.onChange,d));const v=(c=t==null?void 0:t.name)!=null?c:s==null?void 0:s.name,{getInputProps:N,getCheckboxProps:R,getLabelProps:H,getRootProps:_,htmlProps:a}=ze({...k,isChecked:S,isFocusable:m,isDisabled:C,onChange:M,name:v}),[i,D]=Je(a,me),o=R(D),l=N(j,p),P=H(),w=Object.assign({},i,_()),I={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...u.container},x={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...u.control},W={userSelect:"none",marginStart:f,...u.label};return e.jsxs(J.label,{className:"chakra-radio",...w,__css:I,children:[e.jsx("input",{className:"chakra-radio__input",...l}),e.jsx(J.span,{className:"chakra-radio__control",...o,__css:x}),b&&e.jsx(J.span,{className:"chakra-radio__label",...P,__css:W,children:b})]})});Z.displayName="Radio";function Ye({options:t,value:p,onChange:c}){const[s,d]=n.useState(!1),h=n.useRef(null),u=t.find(f=>f.value===p);n.useEffect(()=>{const f=b=>{h.current&&!h.current.contains(b.target)&&d(!1)};return document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}},[h]);const g=()=>d(!s);return e.jsxs(Se,{position:"relative",children:[e.jsx(K,{onClick:g,rightIcon:e.jsx(De,{}),leftIcon:u==null?void 0:u.icon,children:u==null?void 0:u.label}),s&&e.jsx(Ie,{gap:4,ref:h,mt:"2",shadow:"md",borderWidth:"1px",p:"2",position:"absolute",zIndex:100,children:t.map(f=>e.jsx(K,{onClick:()=>{d(!1),c(f.value)},leftIcon:f.icon,justifyContent:"flex-start",variant:"ghost",width:"full",children:f.label},f.label))})]})}function Qe({version:t,cloudHost:p,cloudWorkflowID:c}){const s=t,d=e.jsxs(Y,{spacing:4,alignItems:"center",children:[e.jsx(Q,{children:s.name}),e.jsx(Q,{color:"GrayText",children:Pe(s.createTime,!1)}),s.cloudID&&c&&e.jsx("a",{href:p+"/workflow/"+c+"/"+s.cloudID,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.jsx(K,{size:"xs",colorScheme:"teal",variant:"outline",leftIcon:e.jsx(Re,{}),rightIcon:e.jsx(ie,{size:18}),children:"Shared"})})]});return t.cloudID?e.jsx(e.Fragment,{children:d}):e.jsx(Z,{value:s.id,mb:5,children:d},s.id)}function ro({onClose:t}){var i,D;const[p,c]=n.useState("version "+Xe()),[s,d]=n.useState([]),[h,u]=n.useState(!1),[g,f]=n.useState(""),[b,C]=n.useState("PRIVATE"),[m,j]=n.useState("new_version"),k=n.useRef(""),[S,M]=n.useState(),v=_e(),N=async o=>{var W,L;const l=o.data;if(o.origin!==k.current||l.type!=="share_workflow_success")return;const P=l.localWorkflowID,w=l.localVersionID,I=l.version.id,x=l.version.workflowID;x&&P&&await((W=G)==null?void 0:W.updateMetaInfo(P,{cloudID:x,cloudOrigin:o.origin})),w&&I&&await((L=U)==null?void 0:L.update(w,{cloudID:I,cloudOrigin:o.origin})),R(),window.open(k.current+"/workflow/"+x+"/"+I,"_blank"),u(!1)};n.useEffect(()=>(R(),window.addEventListener("message",N),()=>{window.removeEventListener("message",N)}),[]);const R=async()=>{var P,w,I;const o=await((P=ae)==null?void 0:P.getSetting("cloudHost"));o&&(f(o),k.current=o);const l=((w=G)==null?void 0:w.curWorkflow)??void 0;M(l),l!=null&&l.cloudID&&l.cloudOrigin&&Le(l).then(x=>{C(x)}),(I=U)==null||I.listByWorkflowID(l.id).then(x=>{d(x)})},H=o=>{navigator.clipboard.writeText(o).then(()=>{v({title:"Copied to clipboard",status:"success",duration:2e3,isClosable:!0})}).catch(l=>{console.error("Failed to copy text: ",l)})},_=async()=>{var q,B,F;u(!0);const o=Ne(32),l=await((q=ae)==null?void 0:q.getSetting("cloudHost"));let P,w;try{if(P=We(),m==="new_version"?w=await((B=U)==null?void 0:B.add({workflowID:S.id,name:p,createTime:Date.now(),json:JSON.stringify(Be.graph.serialize())})):w=await((F=U)==null?void 0:F.get(m)),!w){alert(`Failed to find version: ${m}, please try again.`),u(!1);return}}catch(V){console.error(V),u(!1),alert("Failed to share workflow, please try again.");return}const I=window.location.protocol,x=window.location.host,W=`${I}//${x}`,L=l+`/share_workflow_confirm/${o}?redirectUrl=${W}`,T=window.open(L,"Share Workflow","width=800,height=800"),$=V=>{var A;if(V.origin===l&&V.data==="child_ready"){const z=(A=G)==null?void 0:A.curWorkflow;T.postMessage({workflow:z,version:w,nodeDefs:P,privacy:b},l),window.removeEventListener("message",$)}};window.addEventListener("message",$)},a=(D=(i=G)==null?void 0:i.curWorkflow)==null?void 0:D.cloudID;return e.jsxs(be,{isOpen:!0,onClose:t,size:"lg",children:[e.jsx(ke,{}),e.jsxs(xe,{width:["98%","90%","50%"],maxWidth:"600px",children:[e.jsxs(ye,{children:['Share "',S==null?void 0:S.name,'"']}),e.jsxs(Ce,{pb:10,children:[e.jsxs(le,{gap:5,children:[a==null?e.jsx(Ye,{options:Fe,value:b,onChange:o=>{C(o)}}):e.jsx(Te,{variant:"outline",borderRadius:"full",width:"fit-content",children:e.jsx(Ve,{privacy:b,showEmoji:!0})}),a&&e.jsxs(Y,{spacing:2,color:"teal.400",children:[e.jsxs(Oe,{href:g+"/workflow/"+a,isExternal:!0,children:[g+"/workflow/"+a," ",e.jsx(ie,{size:20,style:{display:"inline-block",verticalAlign:"middle"}})]}),e.jsx(K,{width:"180px",size:"sm",leftIcon:e.jsx(He,{}),onClick:()=>{var o,l;H(g+"/workflow/"+((l=(o=G)==null?void 0:o.curWorkflow)==null?void 0:l.cloudID))},children:"Copy link"})]}),e.jsx(Q,{children:"Choose a version to share:"}),e.jsx(de,{gap:4,onChange:o=>{j(o)},value:m,children:e.jsxs(le,{children:[e.jsxs(Y,{mb:5,alignItems:"center",children:[e.jsx(Z,{value:"new_version"},"new_version"),e.jsx(Ee,{value:p,width:"60%",onFocus:()=>{j("new_version")},onChange:o=>{c(o.target.value)}}),e.jsx(Me,{color:"green",children:e.jsx(Q,{children:"New version"})})]}),s.slice(0,4).map(o=>e.jsx(Qe,{version:o,cloudHost:g,cloudWorkflowID:a??null},o.id))]})})]}),e.jsx(Y,{justifyContent:"flex-end",mt:16,children:e.jsx(K,{colorScheme:"teal",onClick:_,isDisabled:h,children:h?"Sharing":"Share"})})]})]})]})}function Xe(){const t=new Date,p=t.getFullYear(),c=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${p}-${c}-${s}`}export{ro as default};