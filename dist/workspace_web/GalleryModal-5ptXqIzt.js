import{r as d,d as Se,y as Ht,m as be,b as it,f as L,l as Kt,o as ct,E as Wt,j as r,g as O,p as Yt,h as Xt,W as ut,i as dt,M as Zt,N as qt,O as Jt,Q as Qt,R as en,S as tn}from"./input.js";import{a9 as nn,aa as sn,d as Re,F as p,ab as rn,ac as on,I as M,j as an,g as Ee,B as ht,h as W,Z as oe,ad as ln,x as R,H as Y,i as A,w as ft,a2 as xt,e as mt,a1 as F,ae as cn,y as un}from"./App-WYhHT0rL.js";import{c as je,p as dn,r as tt,v as nt,I as hn,N as fn,a as xn,b as mn,d as gn,e as pn,M as gt,u as vn,S as yn}from"./MediaPreview-Y45Q9Vak.js";import{S as wn}from"./chunk-3RSXBRAN-csP0MoQl.js";import{C as Ae,G as Sn}from"./chunk-JARCRF6W-KlnwtS3H.js";import{app as st}from"/scripts/app.js";import{S as rt,L as Ne}from"./chunk-VTV6N5LE-TIG90x6g.js";import"/scripts/api.js";import"./IconSearch-0KQAYSti.js";import"./chunk-7D6N5TE5-s5f4akc3.js";const pt=1/60*1e3,bn=typeof performance<"u"?()=>performance.now():()=>Date.now(),vt=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(bn()),pt);function jn(e){let t=[],s=[],n=0,o=!1,a=!1;const l=new WeakSet,c={schedule:(i,u=!1,m=!1)=>{const f=m&&o,v=f?t:s;return u&&l.add(i),v.indexOf(i)===-1&&(v.push(i),f&&o&&(n=t.length)),i},cancel:i=>{const u=s.indexOf(i);u!==-1&&s.splice(u,1),l.delete(i)},process:i=>{if(o){a=!0;return}if(o=!0,[t,s]=[s,t],s.length=0,n=t.length,n)for(let u=0;u<n;u++){const m=t[u];m(i),l.has(m)&&(c.schedule(m),e())}o=!1,a&&(a=!1,c.process(i))}};return c}const kn=40;let Me=!0,X=!1,De=!1;const B={delta:0,timestamp:0},Z=["read","update","preRender","render","postRender"],ae=Z.reduce((e,t)=>(e[t]=jn(()=>X=!0),e),{}),Pn=Z.reduce((e,t)=>{const s=ae[t];return e[t]=(n,o=!1,a=!1)=>(X||Tn(),s.schedule(n,o,a)),e},{}),Cn=Z.reduce((e,t)=>(e[t]=ae[t].cancel,e),{});Z.reduce((e,t)=>(e[t]=()=>ae[t].process(B),e),{});const In=e=>ae[e].process(B),yt=e=>{X=!1,B.delta=Me?pt:Math.max(Math.min(e-B.timestamp,kn),1),B.timestamp=e,De=!0,Z.forEach(In),De=!1,X&&(Me=!1,vt(yt))},Tn=()=>{X=!0,Me=!0,De||vt(yt)},ot=()=>B;var V=e=>e?"":void 0,ke=e=>e?!0:void 0,q=(...e)=>e.filter(Boolean).join(" ");function Pe(...e){return function(s){e.some(n=>(n==null||n(s),s==null?void 0:s.defaultPrevented))}}function Q(e){const{orientation:t,vertical:s,horizontal:n}=e;return t==="vertical"?s:n}var te={width:0,height:0},ee=e=>e||te;function En(e){const{orientation:t,thumbPercents:s,thumbRects:n,isReversed:o}=e,a=y=>{var w;const E=(w=n[y])!=null?w:te;return{position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...Q({orientation:t,vertical:{bottom:`calc(${s[y]}% - ${E.height/2}px)`},horizontal:{left:`calc(${s[y]}% - ${E.width/2}px)`}})}},l=t==="vertical"?n.reduce((y,w)=>ee(y).height>ee(w).height?y:w,te):n.reduce((y,w)=>ee(y).width>ee(w).width?y:w,te),c={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0,...Q({orientation:t,vertical:l?{paddingLeft:l.width/2,paddingRight:l.width/2}:{},horizontal:l?{paddingTop:l.height/2,paddingBottom:l.height/2}:{}})},i={position:"absolute",...Q({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},u=s.length===1,m=[0,o?100-s[0]:s[0]],f=u?m:s;let v=f[0];!u&&o&&(v=100-v);const g=Math.abs(f[f.length-1]-f[0]),I={...i,...Q({orientation:t,vertical:o?{height:`${g}%`,top:`${v}%`}:{height:`${g}%`,bottom:`${v}%`},horizontal:o?{width:`${g}%`,right:`${v}%`}:{width:`${g}%`,left:`${v}%`}})};return{trackStyle:i,innerTrackStyle:I,rootStyle:c,getThumbStyle:a}}function Nn(e){const{isReversed:t,direction:s,orientation:n}=e;return s==="ltr"||n==="vertical"?t:!t}function Mn(e,t,s,n){return e.addEventListener(t,s,n),()=>{e.removeEventListener(t,s,n)}}function Dn(e){const t=zn(e);return typeof t.PointerEvent<"u"&&e instanceof t.PointerEvent?e.pointerType==="mouse":e instanceof t.MouseEvent}function wt(e){return!!e.touches}function _n(e){return wt(e)&&e.touches.length>1}function zn(e){var t;return(t=e.view)!=null?t:window}function Rn(e,t="page"){const s=e.touches[0]||e.changedTouches[0];return{x:s[`${t}X`],y:s[`${t}Y`]}}function An(e,t="page"){return{x:e[`${t}X`],y:e[`${t}Y`]}}function St(e,t="page"){return wt(e)?Rn(e,t):An(e,t)}function Fn(e){return t=>{const s=Dn(t);(!s||s&&t.button===0)&&e(t)}}function $n(e,t=!1){function s(o){e(o,{point:St(o)})}return t?Fn(s):s}function ne(e,t,s,n){return Mn(e,t,$n(s,t==="pointerdown"),n)}var Vn=Object.defineProperty,Bn=(e,t,s)=>t in e?Vn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,T=(e,t,s)=>(Bn(e,typeof t!="symbol"?t+"":t,s),s),Ln=class{constructor(e,t,s){T(this,"history",[]),T(this,"startEvent",null),T(this,"lastEvent",null),T(this,"lastEventInfo",null),T(this,"handlers",{}),T(this,"removeListeners",()=>{}),T(this,"threshold",3),T(this,"win"),T(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const c=Ce(this.lastEventInfo,this.history),i=this.startEvent!==null,u=Hn(c.offset,{x:0,y:0})>=this.threshold;if(!i&&!u)return;const{timestamp:m}=ot();this.history.push({...c.point,timestamp:m});const{onStart:f,onMove:v}=this.handlers;i||(f==null||f(this.lastEvent,c),this.startEvent=this.lastEvent),v==null||v(this.lastEvent,c)}),T(this,"onPointerMove",(c,i)=>{this.lastEvent=c,this.lastEventInfo=i,Pn.update(this.updatePoint,!0)}),T(this,"onPointerUp",(c,i)=>{const u=Ce(i,this.history),{onEnd:m,onSessionEnd:f}=this.handlers;f==null||f(c,u),this.end(),!(!m||!this.startEvent)&&(m==null||m(c,u))});var n;if(this.win=(n=e.view)!=null?n:window,_n(e))return;this.handlers=t,s&&(this.threshold=s),e.stopPropagation(),e.preventDefault();const o={point:St(e)},{timestamp:a}=ot();this.history=[{...o.point,timestamp:a}];const{onSessionStart:l}=t;l==null||l(e,Ce(o,this.history)),this.removeListeners=Un(ne(this.win,"pointermove",this.onPointerMove),ne(this.win,"pointerup",this.onPointerUp),ne(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),Cn.update(this.updatePoint)}};function at(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ce(e,t){return{point:e.point,delta:at(e.point,t[t.length-1]),offset:at(e.point,t[0]),velocity:Gn(t,.1)}}var On=e=>e*1e3;function Gn(e,t){if(e.length<2)return{x:0,y:0};let s=e.length-1,n=null;const o=e[e.length-1];for(;s>=0&&(n=e[s],!(o.timestamp-n.timestamp>On(t)));)s--;if(!n)return{x:0,y:0};const a=(o.timestamp-n.timestamp)/1e3;if(a===0)return{x:0,y:0};const l={x:(o.x-n.x)/a,y:(o.y-n.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function Un(...e){return t=>e.reduce((s,n)=>n(s),t)}function Ie(e,t){return Math.abs(e-t)}function lt(e){return"x"in e&&"y"in e}function Hn(e,t){if(typeof e=="number"&&typeof t=="number")return Ie(e,t);if(lt(e)&&lt(t)){const s=Ie(e.x,t.x),n=Ie(e.y,t.y);return Math.sqrt(s**2+n**2)}return 0}function bt(e){const t=d.useRef(null);return t.current=e,t}function Kn(e,t){const{onPan:s,onPanStart:n,onPanEnd:o,onPanSessionStart:a,onPanSessionEnd:l,threshold:c}=t,i=!!(s||n||o||a||l),u=d.useRef(null),m=bt({onSessionStart:a,onSessionEnd:l,onStart:n,onMove:s,onEnd(f,v){u.current=null,o==null||o(f,v)}});d.useEffect(()=>{var f;(f=u.current)==null||f.updateHandlers(m.current)}),d.useEffect(()=>{const f=e.current;if(!f||!i)return;function v(g){u.current=new Ln(g,m.current,c)}return ne(f,"pointerdown",v)},[e,i,m,c]),d.useEffect(()=>()=>{var f;(f=u.current)==null||f.end(),u.current=null},[])}function Wn(e,t){if(!e){t(void 0);return}t({width:e.offsetWidth,height:e.offsetHeight});const s=e.ownerDocument.defaultView??window,n=new s.ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const[a]=o;let l,c;if("borderBoxSize"in a){const i=a.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,c=u.blockSize}else l=e.offsetWidth,c=e.offsetHeight;t({width:l,height:c})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}var Yn=globalThis!=null&&globalThis.document?d.useLayoutEffect:d.useEffect;function Xn(e,t){var s,n;if(!e||!e.parentElement)return;const o=(n=(s=e.ownerDocument)==null?void 0:s.defaultView)!=null?n:window,a=new o.MutationObserver(()=>{t()});return a.observe(e.parentElement,{childList:!0}),()=>{a.disconnect()}}function Zn({getNodes:e,observeMutation:t=!0}){const[s,n]=d.useState([]),[o,a]=d.useState(0);return Yn(()=>{const l=e(),c=l.map((i,u)=>Wn(i,m=>{n(f=>[...f.slice(0,u),m,...f.slice(u+1)])}));if(t){const i=l[0];c.push(Xn(i,()=>{a(u=>u+1)}))}return()=>{c.forEach(i=>{i==null||i()})}},[o]),s}function qn(e){return typeof e=="object"&&e!==null&&"current"in e}function Jn(e){const[t]=Zn({observeMutation:!1,getNodes(){return[qn(e)?e.current:e]}});return t}function Qn(e){var t;const{min:s=0,max:n=100,onChange:o,value:a,defaultValue:l,isReversed:c,direction:i="ltr",orientation:u="horizontal",id:m,isDisabled:f,isReadOnly:v,onChangeStart:g,onChangeEnd:I,step:y=1,getAriaValueText:w,"aria-valuetext":E,"aria-label":$,"aria-labelledby":b,name:D,focusThumbOnChange:Mt=!0,...Fe}=e,$e=Se(g),G=Se(I),Ve=Se(w),C=Nn({isReversed:c,direction:i,orientation:u}),[Dt,de]=nn({value:a,defaultValue:l??ts(s,n),onChange:o}),[he,Be]=d.useState(!1),[fe,Le]=d.useState(!1),xe=!(f||v),me=(n-s)/10,U=y||(n-s)/100,S=je(Dt,s,n),_t=n-S+s,Oe=nt(C?_t:S,s,n),J=u==="vertical",j=bt({min:s,max:n,step:y,isDisabled:f,value:S,isInteractive:xe,isReversed:C,isVertical:J,eventSource:null,focusThumbOnChange:Mt,orientation:u}),ge=d.useRef(null),pe=d.useRef(null),Ge=d.useRef(null),zt=d.useId(),Ue=m??zt,[He,Ke]=[`slider-thumb-${Ue}`,`slider-track-${Ue}`],Rt=d.useCallback(h=>{var x,H;if(!ge.current)return;const k=j.current;k.eventSource="pointer";const N=ge.current.getBoundingClientRect(),{clientX:ye,clientY:Ot}=(H=(x=h.touches)==null?void 0:x[0])!=null?H:h,Gt=J?N.bottom-Ot:ye-N.left,Ut=J?N.height:N.width;let we=Gt/Ut;C&&(we=1-we);let K=dn(we,k.min,k.max);return k.step&&(K=parseFloat(tt(K,k.min,k.step))),K=je(K,k.min,k.max),K},[J,C,j]),_=d.useCallback(h=>{const x=j.current;x.isInteractive&&(h=parseFloat(tt(h,x.min,U)),h=je(h,x.min,x.max),de(h))},[U,de,j]),z=d.useMemo(()=>({stepUp(h=U){const x=C?S-h:S+h;_(x)},stepDown(h=U){const x=C?S+h:S-h;_(x)},reset(){_(l||0)},stepTo(h){_(h)}}),[_,C,S,U,l]),We=d.useCallback(h=>{const x=j.current,k={ArrowRight:()=>z.stepUp(),ArrowUp:()=>z.stepUp(),ArrowLeft:()=>z.stepDown(),ArrowDown:()=>z.stepDown(),PageUp:()=>z.stepUp(me),PageDown:()=>z.stepDown(me),Home:()=>_(x.min),End:()=>_(x.max)}[h.key];k&&(h.preventDefault(),h.stopPropagation(),k(h),x.eventSource="keyboard")},[z,_,me,j]),Ye=(t=Ve==null?void 0:Ve(S))!=null?t:E,ve=Jn(pe),{getThumbStyle:Xe,rootStyle:Ze,trackStyle:qe,innerTrackStyle:Je}=d.useMemo(()=>{const h=j.current,x=ve??{width:0,height:0};return En({isReversed:C,orientation:h.orientation,thumbRects:[x],thumbPercents:[Oe]})},[C,ve,Oe,j]),Qe=d.useCallback(()=>{j.current.focusThumbOnChange&&setTimeout(()=>{var x;return(x=pe.current)==null?void 0:x.focus()})},[j]);Ht(()=>{const h=j.current;Qe(),h.eventSource==="keyboard"&&(G==null||G(h.value))},[S,G]);function et(h){const x=Rt(h);x!=null&&x!==j.current.value&&de(x)}Kn(Ge,{onPanSessionStart(h){const x=j.current;x.isInteractive&&(Be(!0),Qe(),et(h),$e==null||$e(x.value))},onPanSessionEnd(){const h=j.current;h.isInteractive&&(Be(!1),G==null||G(h.value))},onPan(h){j.current.isInteractive&&et(h)}});const At=d.useCallback((h={},x=null)=>({...h,...Fe,ref:be(x,Ge),tabIndex:-1,"aria-disabled":ke(f),"data-focused":V(fe),style:{...h.style,...Ze}}),[Fe,f,fe,Ze]),Ft=d.useCallback((h={},x=null)=>({...h,ref:be(x,ge),id:Ke,"data-disabled":V(f),style:{...h.style,...qe}}),[f,Ke,qe]),$t=d.useCallback((h={},x=null)=>({...h,ref:x,style:{...h.style,...Je}}),[Je]),Vt=d.useCallback((h={},x=null)=>({...h,ref:be(x,pe),role:"slider",tabIndex:xe?0:void 0,id:He,"data-active":V(he),"aria-valuetext":Ye,"aria-valuemin":s,"aria-valuemax":n,"aria-valuenow":S,"aria-orientation":u,"aria-disabled":ke(f),"aria-readonly":ke(v),"aria-label":$,"aria-labelledby":$?void 0:b,style:{...h.style,...Xe(0)},onKeyDown:Pe(h.onKeyDown,We),onFocus:Pe(h.onFocus,()=>Le(!0)),onBlur:Pe(h.onBlur,()=>Le(!1))}),[xe,He,he,Ye,s,n,S,u,f,v,$,b,Xe,We]),Bt=d.useCallback((h,x=null)=>{const H=!(h.value<s||h.value>n),k=S>=h.value,N=nt(h.value,s,n),ye={position:"absolute",pointerEvents:"none",...es({orientation:u,vertical:{bottom:C?`${100-N}%`:`${N}%`},horizontal:{left:C?`${100-N}%`:`${N}%`}})};return{...h,ref:x,role:"presentation","aria-hidden":!0,"data-disabled":V(f),"data-invalid":V(!H),"data-highlighted":V(k),style:{...h.style,...ye}}},[f,C,n,s,u,S]),Lt=d.useCallback((h={},x=null)=>({...h,ref:x,type:"hidden",value:S,name:D}),[D,S]);return{state:{value:S,isFocused:fe,isDragging:he},actions:z,getRootProps:At,getTrackProps:Ft,getInnerTrackProps:$t,getThumbProps:Vt,getMarkerProps:Bt,getInputProps:Lt}}function es(e){const{orientation:t,vertical:s,horizontal:n}=e;return t==="vertical"?s:n}function ts(e,t){return t<e?e:e+(t-e)/2}var[ns,le]=it({name:"SliderContext",hookName:"useSliderContext",providerName:"<Slider />"}),[ss,ie]=it({name:"SliderStylesContext",hookName:"useSliderStyles",providerName:"<Slider />"}),jt=L((e,t)=>{var s;const n={...e,orientation:(s=e==null?void 0:e.orientation)!=null?s:"horizontal"},o=Kt("Slider",n),a=ct(n),{direction:l}=Wt();a.direction=l;const{getInputProps:c,getRootProps:i,...u}=Qn(a),m=i(),f=c({},t);return r.jsx(ns,{value:u,children:r.jsx(ss,{value:o,children:r.jsxs(O.div,{...m,className:q("chakra-slider",n.className),__css:o.container,children:[n.children,r.jsx("input",{...f})]})})})});jt.displayName="Slider";var kt=L((e,t)=>{const{getThumbProps:s}=le(),n=ie(),o=s(e,t);return r.jsx(O.div,{...o,className:q("chakra-slider__thumb",e.className),__css:n.thumb})});kt.displayName="SliderThumb";var Pt=L((e,t)=>{const{getTrackProps:s}=le(),n=ie(),o=s(e,t);return r.jsx(O.div,{...o,className:q("chakra-slider__track",e.className),__css:n.track})});Pt.displayName="SliderTrack";var Ct=L((e,t)=>{const{getInnerTrackProps:s}=le(),n=ie(),o=s(e,t);return r.jsx(O.div,{...o,className:q("chakra-slider__filled-track",e.className),__css:n.filledTrack})});Ct.displayName="SliderFilledTrack";var rs=L((e,t)=>{const{getMarkerProps:s}=le(),n=ie(),o=s(e,t);return r.jsx(O.div,{...o,className:q("chakra-slider__marker",e.className),__css:n.mark})});rs.displayName="SliderMark";function os(e,t=[]){const s=Object.assign({},e);for(const n of t)n in s&&delete s[n];return s}var as=["h","minH","height","minHeight"],It=L((e,t)=>{const s=Yt("Textarea",e),{className:n,rows:o,...a}=ct(e),l=sn(a),c=o?os(s,as):s;return r.jsx(O.textarea,{ref:t,rows:o,...l,className:Xt("chakra-textarea",n),__css:c})});It.displayName="Textarea";var ls=Re("chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]),Tt=Re("pin-filled","IconPinFilled",[["path",{d:"M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),Et=Re("pin","IconPin",[["path",{d:"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4",key:"svg-0"}],["path",{d:"M9 15l-4.5 4.5",key:"svg-1"}],["path",{d:"M14.5 4l5.5 5.5",key:"svg-2"}]]);const is=({setMediaAct:e,media:t,currentNum:s})=>{const n=l=>{const c=(s+l+t.length)%t.length;e&&e(t[c])},o={width:"100%",height:"100%"};if(t.length===0)return r.jsx("p",{children:"No images found, let's start generating 🪄"});const a=t.at(s);return a?r.jsxs(p,{justifyContent:"center",alignItems:"center",position:"relative",width:o.width,height:o.height,overflow:"hidden",children:[r.jsx("div",{style:{position:"absolute",cursor:"pointer",width:"100%",height:"100%"},onClick:()=>{window.open(a.imageUrl)},children:rn(a.imageUrl)?r.jsx(on,{src:a.imageUrl,alt:`image-${a.id}`,width:"100%",height:"100%",objectFit:"contain"}):r.jsx("video",{style:{objectFit:"contain"},width:"100%",height:"100%",src:a.imageUrl,loop:!0,autoPlay:!0,muted:!0,children:r.jsx("track",{kind:"captions"})})},a.id),r.jsx(M,{size:"sm",color:"white",bgColor:"whiteAlpha.400","aria-label":"Previous image",icon:r.jsx(ls,{}),onClick:()=>n(-1),position:"absolute",left:"0",zIndex:"2"}),r.jsx(M,{size:"sm",color:"white",bgColor:"whiteAlpha.400","aria-label":"Next image",icon:r.jsx(hn,{}),onClick:()=>n(1),position:"absolute",right:"0",zIndex:"2"})]}):null},cs=({inputItem:e})=>r.jsxs(p,{gap:2,children:[r.jsx(p,{gap:1,alignItems:"center",flexBasis:"200px",children:e.label??e.inputName}),r.jsx(an,{value:e.inputValue,onChange:t=>{}})]}),us=e=>{const t=e.inputItem;return r.jsxs(p,{gap:1,direction:"column",children:[r.jsxs(p,{gap:2,children:[r.jsx(p,{gap:1,alignItems:"center",flexBasis:"200px",children:t.label??t.inputName}),r.jsxs(fn,{width:"100%",step:e==null?void 0:e.step,value:t.inputValue,min:e==null?void 0:e.min,max:e==null?void 0:e.max,onChange:s=>{},children:[r.jsx(xn,{}),r.jsxs(mn,{children:[r.jsx(gn,{}),r.jsx(pn,{})]})]})]}),r.jsx(p,{children:r.jsxs(jt,{maxWidth:"400px",step:e==null?void 0:e.step,value:Number(t.inputValue),min:(e==null?void 0:e.min)??0,max:(e==null?void 0:e.max)??100,onChange:s=>{},children:[r.jsx(Pt,{children:r.jsx(Ct,{})}),r.jsx(kt,{})]})})]})},ds=e=>{var s;const{inputItem:t}=e;return r.jsxs(p,{gap:2,children:[r.jsx(p,{gap:1,alignItems:"center",flexBasis:"200px",children:t.label??t.inputName}),r.jsx(wn,{value:t.inputValue,onChange:n=>{},children:(s=e==null?void 0:e.options)==null?void 0:s.map((n,o)=>r.jsx("option",{value:n,children:n},`select${t.nodeID}${t.inputName}${o}`))})]})},hs=e=>{const t=e.inputItem;return r.jsxs(p,{gap:1,direction:"column",children:[r.jsx(p,{children:t.label??t.inputName}),r.jsx(It,{value:t.inputValue,onChange:s=>{},rows:5})]})};var P=(e=>(e.Input="Input",e.InputSlider="InputSlider",e.Select="Select",e.Textarea="Textarea",e.Checkbox="Checkbox",e.NoSupport="NoSupport",e))(P||{});const fs=e=>r.jsxs(p,{gap:2,children:[r.jsx(p,{gap:1,alignItems:"center",flexBasis:"200px",children:e.inputItem.label??e.inputItem.inputName}),r.jsx(p,{children:"No Support"})]}),xs=e=>{const t=e.inputItem;return r.jsxs(p,{gap:2,children:[r.jsx(p,{gap:1,alignItems:"center",flexBasis:"200px",children:t.label??t.inputName}),r.jsx(Ae,{defaultChecked:!!t.inputValue,onChange:s=>{var n;(n=e==null?void 0:e.updateMetaData)==null||n.call(e,{promptKey:e.promptKey,name:e.name,value:s.target.checked})}})]})},ce=d.createContext({topFields:[],calcInputList:[],showNodeName:!1,updateTopField(){}}),ms={[P.Input]:cs,[P.InputSlider]:us,[P.Select]:ds,[P.Textarea]:hs,[P.Checkbox]:xs,NoSupport:fs},gs=LiteGraph.registered_node_types;function ps(e,t){var o,a,l,c,i;const s=(o=gs[e])==null?void 0:o.nodeData,n={...((a=s==null?void 0:s.input)==null?void 0:a.required)??{},...((l=s==null?void 0:s.input)==null?void 0:l.optional)??{}}[t];return(n==null?void 0:n[0])==="STRING"?(c=n==null?void 0:n[1])!=null&&c.multiline?{type:P.Textarea}:{type:P.Input}:(n==null?void 0:n[0])==="BOOLEAN"?{type:P.Checkbox}:(n==null?void 0:n[0])==="FLOAT"?{...(n==null?void 0:n[1])??{},type:P.InputSlider}:(n==null?void 0:n[0])==="INT"?{...(n==null?void 0:n[1])??{},type:P.InputSlider}:Array.isArray(n==null?void 0:n[0])&&((i=n==null?void 0:n[0])!=null&&i.every(u=>typeof u=="string"))?{options:n==null?void 0:n[0],type:P.Select}:{type:P.NoSupport}}const _e=({inputItem:e})=>{const t=ps(e.classType,e.inputName),[s,n]=d.useState(!1),o=ms[t.type??"Input"],{updateTopField:a,topFields:l}=d.useContext(ce),c=e.children[0]==="negative"||e.children[0]==="positive"?`-${e.children[0]}`:"",i={...e,label:e.label??e.inputName+c};return r.jsxs(p,{alignItems:"center",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[r.jsx(M,{size:"xs",onClick:()=>a==null?void 0:a({name:e.inputName,promptKey:e.nodeID,class_type:e.classType}),variant:"ghost",icon:re(l,{name:e.inputName,promptKey:e.nodeID,classType:e.classType})?r.jsx(Tt,{size:14}):r.jsx(Et,{size:14}),"aria-label":"pin"}),r.jsx("div",{style:{flex:1},children:r.jsx(o,{inputItem:i,...t})})]})};function vs(){const{topFields:e,updateTopField:t,calcInputList:s}=d.useContext(ce);return e.length===0?null:r.jsx(r.Fragment,{children:r.jsx(p,{px:2,gap:2,direction:"column",children:e==null?void 0:e.map(n=>{const o=s.find(a=>a.nodeID==n.promptKey&&a.inputName===n.name&&a.classType===n.class_type);return!n.class_type||!o?null:r.jsx(_e,{inputItem:o},`formTopField${n.promptKey}${n.name}`)})})})}function ys(){const{topFields:e,calcInputList:t,showNodeName:s}=d.useContext(ce),n=d.useCallback(a=>{const l=[];return a.forEach(c=>{const i=l[l.length-1];!i||i[0].nodeID!==c.nodeID||i[0].classType!==c.classType?l.push([c]):i.push(c)}),l},[]);if(d.useEffect(()=>{},[s]),!s)return r.jsx(Ee,{children:t.map(a=>re(e,{name:a.inputName,promptKey:a.nodeID,classType:a.classType})?null:r.jsx(_e,{inputItem:a},`form${a.nodeID}${a.inputName}`))});const o=n(t);return r.jsx(Ee,{children:o.map(a=>a[0]?r.jsx(ws,{title:a[0].classType+" #"+a[0].nodeID,children:r.jsx(p,{px:2,gap:1,direction:"column",children:a.map(l=>re(e,{name:l.inputName,promptKey:l.nodeID,classType:l.classType})?null:r.jsx(_e,{inputItem:l},`form${l.nodeID}${l.inputName}`))})},a[0].nodeID):null)})}function ws({title:e,children:t}){return r.jsxs(ht,{border:"1px",borderColor:"gray.500",borderRadius:"md",p:4,children:[r.jsx(W,{size:"sm",mb:1,color:"GrayText",children:e}),r.jsx("div",{children:t})]})}let se=[],ze=new Set;function Nt(e,t){if(!ze.has(e.nodeID))return ze.add(e.nodeID),Object.entries(e.inputs).forEach(([s,n])=>{if(Array.isArray(n)){const o=n[0];Nt(t[o],t)}}),Object.entries(e.inputs).forEach(([s,n])=>{Array.isArray(n)||se.push({classType:e.class_type,inputName:s,inputValue:n,nodeID:e.nodeID,children:e.children||[]})}),se}function Ss(e){se=[],ze=new Set;for(const t of Object.keys(e))e[t].nodeID=t,Object.entries(e[t].inputs).forEach(([s,n])=>{if(Array.isArray(n)){const o=n[0],a=e[o];a.children||(a.children=[]),a.children.push(s)}});for(const t of Object.keys(e))Nt(e[t],e);return se}const re=(e,t)=>e==null?void 0:e.some(s=>s.promptKey===(t==null?void 0:t.promptKey)&&s.name===(t==null?void 0:t.name)&&s.class_type===t.classType);function bs({media:e}){const[t,s]=d.useState([]),{curFlowID:n}=d.useContext(oe),[o,a]=d.useState(),[l,c]=d.useState(!0),[i,u]=d.useState(!0);d.useEffect(()=>{e?ln(`/workspace/view_media?filename=${e.localPath}`).then(g=>{a(g.prompt)}):st.graphToPrompt(st.graph).then(g=>{a(g.output)})},[e]),d.useEffect(()=>{if(!o)return;const g=Ss(o);s(g)},[o]);const[m,f]=d.useState([]);d.useEffect(()=>{(async()=>{var g,I;if(n){const y=(I=await((g=R)==null?void 0:g.get(n)))==null?void 0:I.topFieldsConfig;y&&(f(y),c(!1))}})()},[n]);const v=g=>{var I,y;if(re(m,{name:g.name,promptKey:g==null?void 0:g.promptKey,classType:(g==null?void 0:g.class_type)??""})){const w=m.filter(E=>E.name!==g.name||E.promptKey!==g.promptKey);f(w),n&&((I=R)==null||I.updateTopFields(n,{topFieldsConfig:w}))}else{const w=[...m,g];f(w),n&&((y=R)==null||y.updateTopFields(n,{topFieldsConfig:w}))}};return r.jsx(ce.Provider,{value:{topFields:m,showNodeName:i,calcInputList:t,updateTopField:v},children:r.jsxs(p,{direction:"column",align:"stretch",gap:5,children:[r.jsx(vs,{}),r.jsxs(Y,{children:[r.jsx("p",{children:"Show all inputs"}),r.jsx(rt,{isChecked:l,onChange:g=>c(!l)}),r.jsx("p",{children:"Show node names"}),r.jsx(rt,{isChecked:i,onChange:g=>u(!i)})]}),l&&r.jsx(ys,{})]})})}const ue=d.createContext({showAllImages:!1,curMedia:null,setCurMedia(){},setMediaList(){},setShowAllImages(){}}),js=({media:e})=>{var l,c;const[t,s]=d.useState(!1),{setMediaList:n}=d.useContext(ue),{loadFilePath:o}=d.useContext(oe),{showDialog:a}=ut();return d.useEffect(()=>{var i,u;s((e==null?void 0:e.localPath)!=null&&((u=(i=R)==null?void 0:i.curWorkflow)==null?void 0:u.coverMediaPath)===(e==null?void 0:e.localPath))},[e]),e?r.jsxs(p,{flexWrap:"wrap",gap:3,children:[r.jsx(p,{alignItems:"center",gap:2,children:e.localPath&&r.jsxs(r.Fragment,{children:[r.jsx(W,{children:e==null?void 0:e.localPath}),r.jsx(A,{label:"Donwload image from gallery",children:r.jsx(Ne,{href:`/workspace/view_media?filename=${e==null?void 0:e.localPath}`,download:e==null?void 0:e.localPath,children:r.jsx(M,{size:"sm",icon:r.jsx(ft,{size:19}),"aria-label":"donwload image from gallery"})})})]})}),r.jsx(p,{gap:1,alignItems:"center",color:"GrayText",children:!!(e!=null&&e.createTime)&&r.jsx(W,{children:xt((e==null?void 0:e.createTime)??0,!0)})}),r.jsx(A,{label:"Remove image from gallery",children:r.jsx(M,{size:"sm",variant:"ghost",icon:r.jsx(mt,{size:19}),"aria-label":"remove image from gallery",colorScheme:"red",onClick:async()=>{var u;confirm("Are you sure to remove this image from gallery? (won't delete image on your disk)")&&(await((u=F)==null?void 0:u.delete(e.id)),n(m=>m.filter(f=>f.id!==e.id)))}})}),((c=(l=R)==null?void 0:l.curWorkflow)==null?void 0:c.id)&&r.jsx(A,{label:"Set as cover",children:r.jsx(M,{size:"sm",variant:"ghost",icon:t?r.jsx(Tt,{size:19}):r.jsx(Et,{size:19}),"aria-label":"set as cover",onClick:async()=>{var i;await((i=R)==null?void 0:i.updateMetaInfo(R.curWorkflow.id,{coverMediaPath:t?void 0:e.localPath})),s(!t)}})}),r.jsx(dt,{onClick:()=>a("How do you want to load this workflow?",[{label:"Load in new workflow",onClick:()=>{o(e.localPath)},colorScheme:"teal"},{label:"Overwrite current workflow",onClick:()=>o(e.localPath,!0),colorScheme:"red"}]),size:"sm",children:"Load"})]}):null},ks=({media:e})=>r.jsxs(p,{overflowY:"auto",mb:4,direction:"column",gap:2,flex:1,children:[r.jsx(js,{media:e}),r.jsx(bs,{media:e??null})]}),Te=120;function Ps({mediaList:e}){const{curMedia:t,setCurMedia:s}=d.useContext(ue);return r.jsxs(p,{gap:3,h:"100%",children:[r.jsxs(Sn,{gridTemplateRows:e.length<=6?"1fr 20%":"1fr",flex:1,gap:2,children:[r.jsx("div",{style:{height:"56vh"},children:r.jsx(is,{media:e.map(n=>({id:n.id,imageUrl:`/workspace/view_media?filename=${n.localPath}`})),currentNum:(e==null?void 0:e.findIndex(n=>n.id===(t==null?void 0:t.id)))??0,setMediaAct:n=>s((e==null?void 0:e.find(o=>o.id===n.id))??null)})}),r.jsx(p,{wrap:"wrap",children:e==null?void 0:e.map(n=>r.jsx(ht,{display:"inline-block",p:1,borderRadius:"4px",width:`${Te+3}px`,height:`${Te+3}px`,cursor:"pointer",border:(t==null?void 0:t.id)===n.id?"1px solid gray":"",onClick:()=>s(n),children:r.jsx(gt,{mediaLocalPath:n.localPath,size:Te,objectFit:"contain",hideBrokenImage:!0,onBrokenLink:()=>{var o;(o=F)==null||o.delete(n.id)}})},`image-bottom-${n.id}`))})]}),r.jsx(ks,{media:t??void 0})]})}const Cs=({media:e,isSelecting:t,selectedID:s,onClickMedia:n})=>{const{curFlowID:a,loadFilePath:l}=d.useContext(oe),{showDialog:c}=ut();if(e.localPath==null||a==null)return null;const i=r.jsxs(Ne,{isExternal:!0,onClick:()=>n(e),position:"relative",children:[t&&r.jsx(Ae,{isChecked:s.includes(e.id),position:"absolute",top:2,left:2}),r.jsx(gt,{mediaLocalPath:e.localPath,size:180,onBrokenLink:()=>{var u;(u=F)==null||u.delete(e.id)},hideBrokenImage:!0,autoPlay:!0,isPreview:!0})]});return r.jsxs(Ee,{width:180,mb:2,children:[r.jsx(A,{label:xt(e.createTime,!0),children:i}),r.jsx(A,{label:e.localPath,children:r.jsx(W,{color:"GrayText",noOfLines:1,children:e.localPath})}),r.jsxs(Y,{hidden:t,gap:0,children:[r.jsx(dt,{flexGrow:1,onClick:()=>c("How do you want to load this workflow?",[{label:"Load in new workflow",onClick:()=>{l(e.localPath)},colorScheme:"teal"},{label:"Overwrite current workflow",onClick:()=>l(e.localPath,!0),colorScheme:"red"}]),size:"sm",children:"Load"}),r.jsx(A,{label:"Donwload image from gallery",children:r.jsx(Ne,{href:`/workspace/view_media?filename=${e.localPath}`,download:e.localPath,children:r.jsx(M,{size:"sm",variant:"ghost",icon:r.jsx(ft,{size:19}),"aria-label":"donwload image from gallery"})})}),r.jsx(A,{label:"Remove image from gallery",children:r.jsx(M,{size:"sm",variant:"ghost",icon:r.jsx(mt,{size:19}),"aria-label":"remove image from gallery",colorScheme:"red",onClick:async()=>{var m;confirm("Are you sure to remove this image from gallery? (won't delete image on your disk)")&&await((m=F)==null?void 0:m.delete(e.id))}})})]})]})},Is=Cs;function Ts({searchQuery:e}){const[t,s]=d.useState([]),{setCurMedia:n,setShowAllImages:o,setMediaList:a}=d.useContext(ue);d.useEffect(()=>{var c,i;e===""?(c=F)==null||c.listAll().then(u=>{s(u.slice(0,50)??[])}):(i=F)==null||i.filter(u=>{var m;return((m=u.workflowJSON)==null?void 0:m.includes(e))??!1}).then(u=>{s(u)})},[e]);const l=c=>{a([c].concat(t.filter(i=>i.id!==c.id))),n(c),o(!1)};return r.jsx(Y,{wrap:"wrap",children:t.map(c=>r.jsx(Is,{selectedID:[],media:c,isSelecting:!1,onClickMedia:l},c.id))})}function Ls({onclose:e}){const{curFlowID:t}=d.useContext(oe),[s,n]=d.useState(""),[o,a]=d.useState([]),[l,c]=d.useState(!1),[i,u]=d.useState([]),[m,f]=d.useState(),[v,g]=d.useState(""),I=vn(v,300),[y,w]=d.useState(!1),E=async()=>{var D;if(t==null)return;const b=await((D=F)==null?void 0:D.listByWorkflowID(t));u(b??[]),b!=null&&b.length&&f(b[0])};if(d.useEffect(()=>{var b;E(),t&&((b=R)==null||b.get(t).then(D=>{D&&n(D.name)}))},[]),t==null)return null;const $=i.length>0&&o.length===i.length;return r.jsx(ue.Provider,{value:{curMedia:m??null,setCurMedia:f,setMediaList:u,showAllImages:y,setShowAllImages:w},children:r.jsxs(Zt,{isOpen:!0,onClose:e,blockScrollOnMount:!0,children:[r.jsx(qt,{}),r.jsxs(Jt,{width:"90%",maxWidth:"90vw",height:"90vh",children:[r.jsxs(Qt,{children:[r.jsxs(Y,{gap:2,mb:2,children:[r.jsxs(cn,{size:"md",mr:2,children:["Gallery - ",s]}),r.jsx(yn,{searchValue:v,onUpdateSearchValue:b=>{g(b),y||w(!0)},placeholder:"Search prompt, model name, etc.",style:{width:"300px"}})]}),l&&r.jsxs(Y,{gap:3,children:[r.jsx(Ae,{isChecked:$,onChange:()=>{a($?[]:i.map(b=>b.id))},children:"All"}),r.jsxs(W,{fontSize:16,children:[o.length," Selected"]}),r.jsx(M,{size:"sm",icon:r.jsx(un,{size:19}),onClick:()=>c(!1),"aria-label":"cancel"})]})]}),r.jsx(en,{}),r.jsx(tn,{overflowY:"auto",children:y?r.jsx(Ts,{searchQuery:I}):r.jsx(Ps,{mediaList:i})})]})]})})}export{Ls as default};
