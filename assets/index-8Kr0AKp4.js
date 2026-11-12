var ZS=Object.defineProperty;var KS=(r,t,i)=>t in r?ZS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var $t=(r,t,i)=>KS(r,typeof t!="symbol"?t+"":t,i);function QS(r,t){for(var i=0;i<t.length;i++){const s=t[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const c=Object.getOwnPropertyDescriptor(s,l);c&&Object.defineProperty(r,l,c.get?c:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function JS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function $S(){if(m0)return Uo;m0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var g0;function ty(){return g0||(g0=1,Qf.exports=$S()),Qf.exports}var nt=ty(),Jf={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function ey(){if(_0)return ce;_0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function x(U,it,At){this.props=U,this.context=it,this.refs=T,this.updater=At||y}x.prototype.isReactComponent={},x.prototype.setState=function(U,it){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,it,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=x.prototype;function N(U,it,At){this.props=U,this.context=it,this.refs=T,this.updater=At||y}var L=N.prototype=new S;L.constructor=N,E(L,x.prototype),L.isPureReactComponent=!0;var D=Array.isArray,G={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function B(U,it,At,_t,F,ut){return At=ut.ref,{$$typeof:r,type:U,key:it,ref:At!==void 0?At:null,props:ut}}function q(U,it){return B(U.type,it,void 0,void 0,void 0,U.props)}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function b(U){var it={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(At){return it[At]})}var I=/\/+/g;function lt(U,it){return typeof U=="object"&&U!==null&&U.key!=null?b(""+U.key):it.toString(36)}function tt(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(tt,tt):(U.status="pending",U.then(function(it){U.status==="pending"&&(U.status="fulfilled",U.value=it)},function(it){U.status==="pending"&&(U.status="rejected",U.reason=it)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function Q(U,it,At,_t,F){var ut=typeof U;(ut==="undefined"||ut==="boolean")&&(U=null);var yt=!1;if(U===null)yt=!0;else switch(ut){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(U.$$typeof){case r:case t:yt=!0;break;case g:return yt=U._init,Q(yt(U._payload),it,At,_t,F)}}if(yt)return F=F(U),yt=_t===""?"."+lt(U,0):_t,D(F)?(At="",yt!=null&&(At=yt.replace(I,"$&/")+"/"),Q(F,it,At,"",function(Pt){return Pt})):F!=null&&(R(F)&&(F=q(F,At+(F.key==null||U&&U.key===F.key?"":(""+F.key).replace(I,"$&/")+"/")+yt)),it.push(F)),1;yt=0;var Et=_t===""?".":_t+":";if(D(U))for(var Ct=0;Ct<U.length;Ct++)_t=U[Ct],ut=Et+lt(_t,Ct),yt+=Q(_t,it,At,ut,F);else if(Ct=v(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(_t=U.next()).done;)_t=_t.value,ut=Et+lt(_t,Ct++),yt+=Q(_t,it,At,ut,F);else if(ut==="object"){if(typeof U.then=="function")return Q(ft(U),it,At,_t,F);throw it=String(U),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return yt}function z(U,it,At){if(U==null)return U;var _t=[],F=0;return Q(U,_t,"","",function(ut){return it.call(At,ut,F++)}),_t}function et(U){if(U._status===-1){var it=U._result;it=it(),it.then(function(At){(U._status===0||U._status===-1)&&(U._status=1,U._result=At)},function(At){(U._status===0||U._status===-1)&&(U._status=2,U._result=At)}),U._status===-1&&(U._status=0,U._result=it)}if(U._status===1)return U._result.default;throw U._result}var X=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function ht(){}return ce.Children={map:z,forEach:function(U,it,At){z(U,function(){it.apply(this,arguments)},At)},count:function(U){var it=0;return z(U,function(){it++}),it},toArray:function(U){return z(U,function(it){return it})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ce.Component=x,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=N,ce.StrictMode=s,ce.Suspense=p,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ce.act=function(){throw Error("act(...) is not supported in production builds of React.")},ce.cache=function(U){return function(){return U.apply(null,arguments)}},ce.cloneElement=function(U,it,At){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var _t=E({},U.props),F=U.key,ut=void 0;if(it!=null)for(yt in it.ref!==void 0&&(ut=void 0),it.key!==void 0&&(F=""+it.key),it)!H.call(it,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&it.ref===void 0||(_t[yt]=it[yt]);var yt=arguments.length-2;if(yt===1)_t.children=At;else if(1<yt){for(var Et=Array(yt),Ct=0;Ct<yt;Ct++)Et[Ct]=arguments[Ct+2];_t.children=Et}return B(U.type,F,void 0,void 0,ut,_t)},ce.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ce.createElement=function(U,it,At){var _t,F={},ut=null;if(it!=null)for(_t in it.key!==void 0&&(ut=""+it.key),it)H.call(it,_t)&&_t!=="key"&&_t!=="__self"&&_t!=="__source"&&(F[_t]=it[_t]);var yt=arguments.length-2;if(yt===1)F.children=At;else if(1<yt){for(var Et=Array(yt),Ct=0;Ct<yt;Ct++)Et[Ct]=arguments[Ct+2];F.children=Et}if(U&&U.defaultProps)for(_t in yt=U.defaultProps,yt)F[_t]===void 0&&(F[_t]=yt[_t]);return B(U,ut,void 0,void 0,null,F)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(U){return{$$typeof:d,render:U}},ce.isValidElement=R,ce.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:et}},ce.memo=function(U,it){return{$$typeof:m,type:U,compare:it===void 0?null:it}},ce.startTransition=function(U){var it=G.T,At={};G.T=At;try{var _t=U(),F=G.S;F!==null&&F(At,_t),typeof _t=="object"&&_t!==null&&typeof _t.then=="function"&&_t.then(ht,X)}catch(ut){X(ut)}finally{G.T=it}},ce.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ce.use=function(U){return G.H.use(U)},ce.useActionState=function(U,it,At){return G.H.useActionState(U,it,At)},ce.useCallback=function(U,it){return G.H.useCallback(U,it)},ce.useContext=function(U){return G.H.useContext(U)},ce.useDebugValue=function(){},ce.useDeferredValue=function(U,it){return G.H.useDeferredValue(U,it)},ce.useEffect=function(U,it){return G.H.useEffect(U,it)},ce.useId=function(){return G.H.useId()},ce.useImperativeHandle=function(U,it,At){return G.H.useImperativeHandle(U,it,At)},ce.useInsertionEffect=function(U,it){return G.H.useInsertionEffect(U,it)},ce.useLayoutEffect=function(U,it){return G.H.useLayoutEffect(U,it)},ce.useMemo=function(U,it){return G.H.useMemo(U,it)},ce.useOptimistic=function(U,it){return G.H.useOptimistic(U,it)},ce.useReducer=function(U,it,At){return G.H.useReducer(U,it,At)},ce.useRef=function(U){return G.H.useRef(U)},ce.useState=function(U){return G.H.useState(U)},ce.useSyncExternalStore=function(U,it,At){return G.H.useSyncExternalStore(U,it,At)},ce.useTransition=function(){return G.H.useTransition()},ce.version="19.0.0",ce}var v0;function Od(){return v0||(v0=1,Jf.exports=ey()),Jf.exports}var Tt=Od();const ny=JS(Tt),iy=QS({__proto__:null,default:ny},[Tt]);var $f={exports:{}},Lo={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function ay(){return x0||(x0=1,function(r){function t(z,et){var X=z.length;z.push(et);t:for(;0<X;){var ht=X-1>>>1,U=z[ht];if(0<l(U,et))z[ht]=et,z[X]=U,X=ht;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var et=z[0],X=z.pop();if(X!==et){z[0]=X;t:for(var ht=0,U=z.length,it=U>>>1;ht<it;){var At=2*(ht+1)-1,_t=z[At],F=At+1,ut=z[F];if(0>l(_t,X))F<U&&0>l(ut,_t)?(z[ht]=ut,z[F]=X,ht=F):(z[ht]=_t,z[At]=X,ht=At);else if(F<U&&0>l(ut,X))z[ht]=ut,z[F]=X,ht=F;else break t}}return et}function l(z,et){var X=z.sortIndex-et.sortIndex;return X!==0?X:z.id-et.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,v=3,y=!1,E=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function L(z){for(var et=i(m);et!==null;){if(et.callback===null)s(m);else if(et.startTime<=z)s(m),et.sortIndex=et.expirationTime,t(p,et);else break;et=i(m)}}function D(z){if(T=!1,L(z),!E)if(i(p)!==null)E=!0,ft();else{var et=i(m);et!==null&&Q(D,et.startTime-z)}}var G=!1,H=-1,B=5,q=-1;function R(){return!(r.unstable_now()-q<B)}function b(){if(G){var z=r.unstable_now();q=z;var et=!0;try{t:{E=!1,T&&(T=!1,S(H),H=-1),y=!0;var X=v;try{e:{for(L(z),_=i(p);_!==null&&!(_.expirationTime>z&&R());){var ht=_.callback;if(typeof ht=="function"){_.callback=null,v=_.priorityLevel;var U=ht(_.expirationTime<=z);if(z=r.unstable_now(),typeof U=="function"){_.callback=U,L(z),et=!0;break e}_===i(p)&&s(p),L(z)}else s(p);_=i(p)}if(_!==null)et=!0;else{var it=i(m);it!==null&&Q(D,it.startTime-z),et=!1}}break t}finally{_=null,v=X,y=!1}et=void 0}}finally{et?I():G=!1}}}var I;if(typeof N=="function")I=function(){N(b)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,tt=lt.port2;lt.port1.onmessage=b,I=function(){tt.postMessage(null)}}else I=function(){x(b,0)};function ft(){G||(G=!0,I())}function Q(z,et){H=x(function(){z(r.unstable_now())},et)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){E||y||(E=!0,ft())},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var et=3;break;default:et=v}var X=v;v=et;try{return z()}finally{v=X}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,et){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=v;v=z;try{return et()}finally{v=X}},r.unstable_scheduleCallback=function(z,et,X){var ht=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ht+X:ht):X=ht,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=X+U,z={id:g++,callback:et,priorityLevel:z,startTime:X,expirationTime:U,sortIndex:-1},X>ht?(z.sortIndex=X,t(m,z),i(p)===null&&z===i(m)&&(T?(S(H),H=-1):T=!0,Q(D,X-ht))):(z.sortIndex=U,t(p,z),E||y||(E=!0,ft())),z},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(z){var et=v;return function(){var X=v;v=et;try{return z.apply(this,arguments)}finally{v=X}}}}(eh)),eh}var S0;function sy(){return S0||(S0=1,th.exports=ay()),th.exports}var nh={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function ry(){if(y0)return En;y0=1;var r=Od();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},En.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},En.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},En.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},En.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},En.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},En.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},En.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},En.requestFormReset=function(p){s.d.r(p)},En.unstable_batchedUpdates=function(p,m){return p(m)},En.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},En.useFormStatus=function(){return f.H.useHostTransitionStatus()},En.version="19.0.0",En}var M0;function W_(){if(M0)return nh.exports;M0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),nh.exports=ry(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function oy(){if(E0)return Lo;E0=1;var r=sy(),t=Od(),i=W_();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case T:return"Suspense";case x:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case v:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case S:return n=e.displayName||null,n!==null?n:q(e.type)||"Memo";case N:n=e._payload,e=e._init;try{return q(e(n))}catch{}}return null}var R=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,I,lt;function tt(e){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+e+lt}var ft=!1;function Q(e,n){if(!e||ft)return"";ft=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(dt){var rt=dt}Reflect.construct(e,[],St)}else{try{St.call()}catch(dt){rt=dt}e.call(St.prototype)}}else{try{throw Error()}catch(dt){rt=dt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(dt){if(dt&&rt&&typeof dt.stack=="string")return[dt.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],w=h[1];if(M&&w){var P=M.split(`
`),k=w.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<k.length&&!k[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===k.length)for(o=P.length-1,u=k.length-1;1<=o&&0<=u&&P[o]!==k[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==k[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==k[u]){var pt=`
`+P[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{ft=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?tt(a):""}function z(e){switch(e.tag){case 26:case 27:case 5:return tt(e.type);case 16:return tt("Lazy");case 13:return tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function et(e){try{var n="";do n+=z(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function X(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function ht(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(X(e)!==e)throw Error(s(188))}function it(e){var n=e.alternate;if(!n){if(n=X(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return U(u),e;if(h===o)return U(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,w=u.child;w;){if(w===a){M=!0,a=u,o=h;break}if(w===o){M=!0,o=u,a=h;break}w=w.sibling}if(!M){for(w=h.child;w;){if(w===a){M=!0,a=h,o=u;break}if(w===o){M=!0,o=h,a=u;break}w=w.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function At(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=At(e),n!==null)return n;e=e.sibling}return null}var _t=Array.isArray,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},yt=[],Et=-1;function Ct(e){return{current:e}}function Pt(e){0>Et||(e.current=yt[Et],yt[Et]=null,Et--)}function Ht(e,n){Et++,yt[Et]=e.current,e.current=n}var _e=Ct(null),ae=Ct(null),Me=Ct(null),j=Ct(null);function Ke(e,n){switch(Ht(Me,n),Ht(ae,e),Ht(_e,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Xg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=Xg(e),n=Wg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Pt(_e),Ht(_e,n)}function le(){Pt(_e),Pt(ae),Pt(Me)}function de(e){e.memoizedState!==null&&Ht(j,e);var n=_e.current,a=Wg(n,e.type);n!==a&&(Ht(ae,e),Ht(_e,a))}function Zt(e){ae.current===e&&(Pt(_e),Pt(ae)),j.current===e&&(Pt(j),Ao._currentValue=ut)}var Ue=Object.prototype.hasOwnProperty,Kt=r.unstable_scheduleCallback,O=r.unstable_cancelCallback,A=r.unstable_shouldYield,at=r.unstable_requestPaint,mt=r.unstable_now,Mt=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,Wt=r.unstable_UserBlockingPriority,Ut=r.unstable_NormalPriority,Bt=r.unstable_LowPriority,ge=r.unstable_IdlePriority,wt=r.log,It=r.unstable_setDisableYieldValue,Qt=null,qt=null;function Ft(e){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}function re(e){if(typeof wt=="function"&&It(e),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(Qt,e)}catch{}}var Jt=Math.clz32?Math.clz32:Ot,Ne=Math.log,W=Math.LN2;function Ot(e){return e>>>=0,e===0?32:31-(Ne(e)/W|0)|0}var ct=128,xt=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lt(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,u=e.suspendedLanes,h=e.pingedLanes,M=e.warmLanes;e=e.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~u,a!==0?o=Dt(a):(h&=w,h!==0?o=Dt(h):e||(M=w&~M,M!==0&&(o=Dt(M))))):(w=a&~u,w!==0?o=Dt(w):h!==0?o=Dt(h):e||(M=a&~M,M!==0&&(o=Dt(M)))),o===0?0:n!==0&&n!==o&&!(n&u)&&(u=o&-o,M=n&-n,u>=M||u===32&&(M&4194176)!==0)?n:o}function ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ve(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(){var e=ct;return ct<<=1,!(ct&4194176)&&(ct=128),e}function Ae(){var e=xt;return xt<<=1,!(xt&62914560)&&(xt=4194304),e}function wn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tl(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,P=e.expirationTimes,k=e.hiddenUpdates;for(a=M&~a;0<a;){var pt=31-Jt(a),St=1<<pt;w[pt]=0,P[pt]=-1;var rt=k[pt];if(rt!==null)for(k[pt]=null,pt=0;pt<rt.length;pt++){var dt=rt[pt];dt!==null&&(dt.lane&=-536870913)}a&=~St}o!==0&&Br(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Br(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Jt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function yi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Jt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Rs(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ir(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:c0(e.type))}function el(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var Fn=Math.random().toString(36).slice(2),an="__reactFiber$"+Fn,sn="__reactProps$"+Fn,Li="__reactContainer$"+Fn,ws="__reactEvents$"+Fn,Yc="__reactListeners$"+Fn,Zc="__reactHandles$"+Fn,nl="__reactResources$"+Fn,C="__reactMarker$"+Fn;function Z(e){delete e[an],delete e[sn],delete e[ws],delete e[Yc],delete e[Zc]}function st(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Li]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Yg(e);e!==null;){if(a=e[an])return a;e=Yg(e)}return n}e=a,a=e.parentNode}return null}function ot(e){if(e=e[an]||e[Li]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function bt(e){var n=e[nl];return n||(n=e[nl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Rt(e){e[C]=!0}var Vt=new Set,kt={};function te(e,n){ne(e,n),ne(e+"Capture",n)}function ne(e,n){for(kt[e]=n,e=0;e<n.length;e++)Vt.add(n[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Le={},Oe={};function Sn(e){return Ue.call(Oe,e)?!0:Ue.call(Le,e)?!1:Se.test(e)?Oe[e]=!0:(Le[e]=!0,!1)}function ve(e,n,a){if(Sn(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function rn(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function oe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function On(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ca(e){var n=On(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fn(e){e._valueTracker||(e._valueTracker=ca(e))}function ua(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=On(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function De(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kn=/[\n"\\]/g;function hn(e){return e.replace(Kn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,o,u,h,M,w){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+oe(n)):e.value!==""+oe(n)&&(e.value=""+oe(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Qn(e,M,oe(n)):a!=null?Qn(e,M,oe(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+oe(w):e.removeAttribute("name")}function ci(e,n,a,o,u,h,M,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+oe(a):"",n=n!=null?""+oe(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Qn(e,n,a){n==="number"&&De(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ni(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+oe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Kd(e,n,a){if(n!=null&&(n=""+oe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+oe(a):""}function Qd(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(_t(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=oe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Cs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var qv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||qv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function $d(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jd(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Jd(e,h,n[h])}function Kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return Yv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Us=null;function tp(e){var n=ot(e);if(n&&(e=n.stateNode)){var a=e[sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[sn]||null;if(!u)throw Error(s(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ua(o)}break t;case"textarea":Kd(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ni(e,!!a.multiple,n,!1)}}}var $c=!1;function ep(e,n,a){if($c)return e(n,a);$c=!0;try{var o=e(n);return o}finally{if($c=!1,(Ds!==null||Us!==null)&&(Hl(),Ds&&(n=Ds,e=Us,Us=Ds=null,tp(n),e)))for(n=0;n<e.length;n++)tp(e[n])}}function Fr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var tu=!1;if(zt)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{tu=!1}var fa=null,eu=null,al=null;function np(){if(al)return al;var e,n=eu,a=n.length,o,u="value"in fa?fa.value:fa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return al=u.slice(e,1<o?1-o:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function ip(){return!1}function Pn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?rl:ip,this.isPropagationStopped=ip,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Pn(qa),Gr=b({},qa,{view:0,detail:0}),Zv=Pn(Gr),nu,iu,Vr,ll=b({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(nu=e.screenX-Vr.screenX,iu=e.screenY-Vr.screenY):iu=nu=0,Vr=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),ap=Pn(ll),Kv=b({},ll,{dataTransfer:0}),Qv=Pn(Kv),Jv=b({},Gr,{relatedTarget:0}),au=Pn(Jv),$v=b({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),tx=Pn($v),ex=b({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nx=Pn(ex),ix=b({},qa,{data:0}),sp=Pn(ix),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rx[e])?!!n[e]:!1}function su(){return ox}var lx=b({},Gr,{key:function(e){if(e.key){var n=ax[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cx=Pn(lx),ux=b({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Pn(ux),fx=b({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),hx=Pn(fx),dx=b({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=Pn(dx),mx=b({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=Pn(mx),_x=b({},qa,{newState:0,oldState:0}),vx=Pn(_x),xx=[9,13,27,32],ru=zt&&"CompositionEvent"in window,kr=null;zt&&"documentMode"in document&&(kr=document.documentMode);var Sx=zt&&"TextEvent"in window&&!kr,op=zt&&(!ru||kr&&8<kr&&11>=kr),lp=" ",cp=!1;function up(e,n){switch(e){case"keyup":return xx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ls=!1;function yx(e,n){switch(e){case"compositionend":return fp(n);case"keypress":return n.which!==32?null:(cp=!0,lp);case"textInput":return e=n.data,e===lp&&cp?null:e;default:return null}}function Mx(e,n){if(Ls)return e==="compositionend"||!ru&&up(e,n)?(e=np(),al=eu=fa=null,Ls=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return op&&n.locale!=="ko"?null:n.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ex[e.type]:n==="textarea"}function dp(e,n,a,o){Ds?Us?Us.push(o):Us=[o]:Ds=o,n=Wl(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xr=null,Wr=null;function Tx(e){Fg(e,0)}function cl(e){var n=Y(e);if(ua(n))return e}function pp(e,n){if(e==="change")return n}var mp=!1;if(zt){var ou;if(zt){var lu="oninput"in document;if(!lu){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),lu=typeof gp.oninput=="function"}ou=lu}else ou=!1;mp=ou&&(!document.documentMode||9<document.documentMode)}function _p(){Xr&&(Xr.detachEvent("onpropertychange",vp),Wr=Xr=null)}function vp(e){if(e.propertyName==="value"&&cl(Wr)){var n=[];dp(n,Wr,e,Jc(e)),ep(Tx,n)}}function bx(e,n,a){e==="focusin"?(_p(),Xr=n,Wr=a,Xr.attachEvent("onpropertychange",vp)):e==="focusout"&&_p()}function Ax(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Wr)}function Rx(e,n){if(e==="click")return cl(n)}function wx(e,n){if(e==="input"||e==="change")return cl(n)}function Cx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Hn=typeof Object.is=="function"?Object.is:Cx;function qr(e,n){if(Hn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ue.call(n,u)||!Hn(e[u],n[u]))return!1}return!0}function xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,n){var a=xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xp(a)}}function yp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?yp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=De(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=De(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Dx(e,n){var a=Mp(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&yp(n.ownerDocument.documentElement,n)){if(o!==null&&cu(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var u=n.textContent.length,h=Math.min(o.start,u);o=o.end===void 0?h:Math.min(o.end,u),!a.extend&&h>o&&(u=o,o=h,h=u),u=Sp(n,h);var M=Sp(n,o);u&&M&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==M.node||a.focusOffset!==M.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),a.removeAllRanges(),h>o?(a.addRange(e),a.extend(M.node,M.offset)):(e.setEnd(M.node,M.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Ux=zt&&"documentMode"in document&&11>=document.documentMode,Ns=null,uu=null,jr=null,fu=!1;function Ep(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Ns==null||Ns!==De(o)||(o=Ns,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jr&&qr(jr,o)||(jr=o,o=Wl(uu,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ns)))}function ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Os={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},hu={},Tp={};zt&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ya(e){if(hu[e])return hu[e];if(!Os[e])return e;var n=Os[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tp)return hu[e]=n[a];return e}var bp=Ya("animationend"),Ap=Ya("animationiteration"),Rp=Ya("animationstart"),Lx=Ya("transitionrun"),Nx=Ya("transitionstart"),Ox=Ya("transitioncancel"),wp=Ya("transitionend"),Cp=new Map,Dp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ui(e,n){Cp.set(e,n),te(n,[e])}var Jn=[],Ps=0,du=0;function ul(){for(var e=Ps,n=du=Ps=0;n<e;){var a=Jn[n];Jn[n++]=null;var o=Jn[n];Jn[n++]=null;var u=Jn[n];Jn[n++]=null;var h=Jn[n];if(Jn[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Up(a,u,h)}}function fl(e,n,a,o){Jn[Ps++]=e,Jn[Ps++]=n,Jn[Ps++]=a,Jn[Ps++]=o,du|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pu(e,n,a,o){return fl(e,n,a,o),hl(e)}function ha(e,n){return fl(e,null,null,n),hl(e)}function Up(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;u&&n!==null&&e.tag===3&&(h=e.stateNode,u=31-Jt(a),h=h.hiddenUpdates,e=h[u],e===null?h[u]=[n]:e.push(n),n.lane=a|536870912)}function hl(e){if(50<xo)throw xo=0,yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zs={},Lp=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=Lp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:et(n)},Lp.set(e,n),n)}return{value:e,source:n,stack:et(n)}}var Bs=[],Is=0,dl=null,pl=0,ti=[],ei=0,Za=null,Oi=1,Pi="";function Ka(e,n){Bs[Is++]=pl,Bs[Is++]=dl,dl=e,pl=n}function Np(e,n,a){ti[ei++]=Oi,ti[ei++]=Pi,ti[ei++]=Za,Za=e;var o=Oi;e=Pi;var u=32-Jt(o)-1;o&=~(1<<u),a+=1;var h=32-Jt(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Oi=1<<32-Jt(n)+u|a<<u|o,Pi=h+e}else Oi=1<<h|a<<u|o,Pi=e}function mu(e){e.return!==null&&(Ka(e,1),Np(e,1,0))}function gu(e){for(;e===dl;)dl=Bs[--Is],Bs[Is]=null,pl=Bs[--Is],Bs[Is]=null;for(;e===Za;)Za=ti[--ei],ti[ei]=null,Pi=ti[--ei],ti[ei]=null,Oi=ti[--ei],ti[ei]=null}var Dn=null,_n=null,Re=!1,fi=null,Mi=!1,_u=Error(s(519));function Qa(e){var n=Error(s(418,""));throw Kr($n(n,e)),_u}function Op(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[an]=e,n[sn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)xe(yo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),ci(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),fn(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Qd(n,o.value,o.defaultValue,o.children),fn(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||kg(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=ql),n=!0):n=!1,n||Qa(e)}function Pp(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 3:case 27:Mi=!0;return;case 5:case 13:Mi=!1;return;default:Dn=Dn.return}}function Yr(e){if(e!==Dn)return!1;if(!Re)return Pp(e),Re=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&_n&&Qa(e),Pp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){_n=di(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}_n=null}}else _n=Dn?di(e.stateNode.nextSibling):null;return!0}function Zr(){_n=Dn=null,Re=!1}function Kr(e){fi===null?fi=[e]:fi.push(e)}var Qr=Error(s(460)),zp=Error(s(474)),vu={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ml(){}function Ip(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ml,ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Qr?Error(s(483)):e;default:if(typeof n.status=="string")n.then(ml,ml);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Qr?Error(s(483)):e}throw Jr=n,Qr}}var Jr=null;function Fp(){if(Jr===null)throw Error(s(459));var e=Jr;return Jr=null,e}var Fs=null,$r=0;function gl(e){var n=$r;return $r+=1,Fs===null&&(Fs=[]),Ip(Fs,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hp(e){var n=e._init;return n(e._payload)}function Gp(e){function n(K,V){if(e){var J=K.deletions;J===null?(K.deletions=[V],K.flags|=16):J.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=Ta(K,V),K.index=0,K.sibling=null,K}function h(K,V,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<V?(K.flags|=33554434,V):J):(K.flags|=33554434,V)):(K.flags|=1048576,V)}function M(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function w(K,V,J,vt){return V===null||V.tag!==6?(V=df(J,K.mode,vt),V.return=K,V):(V=u(V,J),V.return=K,V)}function P(K,V,J,vt){var Gt=J.type;return Gt===p?pt(K,V,J.props.children,vt,J.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===N&&Hp(Gt)===V.type)?(V=u(V,J.props),to(V,J),V.return=K,V):(V=Pl(J.type,J.key,J.props,null,K.mode,vt),to(V,J),V.return=K,V)}function k(K,V,J,vt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=pf(J,K.mode,vt),V.return=K,V):(V=u(V,J.children||[]),V.return=K,V)}function pt(K,V,J,vt,Gt){return V===null||V.tag!==7?(V=os(J,K.mode,vt,Gt),V.return=K,V):(V=u(V,J),V.return=K,V)}function St(K,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=df(""+V,K.mode,J),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case f:return J=Pl(V.type,V.key,V.props,null,K.mode,J),to(J,V),J.return=K,J;case d:return V=pf(V,K.mode,J),V.return=K,V;case N:var vt=V._init;return V=vt(V._payload),St(K,V,J)}if(_t(V)||H(V))return V=os(V,K.mode,J,null),V.return=K,V;if(typeof V.then=="function")return St(K,gl(V),J);if(V.$$typeof===y)return St(K,Ll(K,V),J);_l(K,V)}return null}function rt(K,V,J,vt){var Gt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Gt!==null?null:w(K,V,""+J,vt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case f:return J.key===Gt?P(K,V,J,vt):null;case d:return J.key===Gt?k(K,V,J,vt):null;case N:return Gt=J._init,J=Gt(J._payload),rt(K,V,J,vt)}if(_t(J)||H(J))return Gt!==null?null:pt(K,V,J,vt,null);if(typeof J.then=="function")return rt(K,V,gl(J),vt);if(J.$$typeof===y)return rt(K,V,Ll(K,J),vt);_l(K,J)}return null}function dt(K,V,J,vt,Gt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return K=K.get(J)||null,w(V,K,""+vt,Gt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case f:return K=K.get(vt.key===null?J:vt.key)||null,P(V,K,vt,Gt);case d:return K=K.get(vt.key===null?J:vt.key)||null,k(V,K,vt,Gt);case N:var pe=vt._init;return vt=pe(vt._payload),dt(K,V,J,vt,Gt)}if(_t(vt)||H(vt))return K=K.get(J)||null,pt(V,K,vt,Gt,null);if(typeof vt.then=="function")return dt(K,V,J,gl(vt),Gt);if(vt.$$typeof===y)return dt(K,V,J,Ll(V,vt),Gt);_l(V,vt)}return null}function jt(K,V,J,vt){for(var Gt=null,pe=null,Yt=V,ee=V=0,mn=null;Yt!==null&&ee<J.length;ee++){Yt.index>ee?(mn=Yt,Yt=null):mn=Yt.sibling;var we=rt(K,Yt,J[ee],vt);if(we===null){Yt===null&&(Yt=mn);break}e&&Yt&&we.alternate===null&&n(K,Yt),V=h(we,V,ee),pe===null?Gt=we:pe.sibling=we,pe=we,Yt=mn}if(ee===J.length)return a(K,Yt),Re&&Ka(K,ee),Gt;if(Yt===null){for(;ee<J.length;ee++)Yt=St(K,J[ee],vt),Yt!==null&&(V=h(Yt,V,ee),pe===null?Gt=Yt:pe.sibling=Yt,pe=Yt);return Re&&Ka(K,ee),Gt}for(Yt=o(Yt);ee<J.length;ee++)mn=dt(Yt,K,ee,J[ee],vt),mn!==null&&(e&&mn.alternate!==null&&Yt.delete(mn.key===null?ee:mn.key),V=h(mn,V,ee),pe===null?Gt=mn:pe.sibling=mn,pe=mn);return e&&Yt.forEach(function(Ua){return n(K,Ua)}),Re&&Ka(K,ee),Gt}function se(K,V,J,vt){if(J==null)throw Error(s(151));for(var Gt=null,pe=null,Yt=V,ee=V=0,mn=null,we=J.next();Yt!==null&&!we.done;ee++,we=J.next()){Yt.index>ee?(mn=Yt,Yt=null):mn=Yt.sibling;var Ua=rt(K,Yt,we.value,vt);if(Ua===null){Yt===null&&(Yt=mn);break}e&&Yt&&Ua.alternate===null&&n(K,Yt),V=h(Ua,V,ee),pe===null?Gt=Ua:pe.sibling=Ua,pe=Ua,Yt=mn}if(we.done)return a(K,Yt),Re&&Ka(K,ee),Gt;if(Yt===null){for(;!we.done;ee++,we=J.next())we=St(K,we.value,vt),we!==null&&(V=h(we,V,ee),pe===null?Gt=we:pe.sibling=we,pe=we);return Re&&Ka(K,ee),Gt}for(Yt=o(Yt);!we.done;ee++,we=J.next())we=dt(Yt,K,ee,we.value,vt),we!==null&&(e&&we.alternate!==null&&Yt.delete(we.key===null?ee:we.key),V=h(we,V,ee),pe===null?Gt=we:pe.sibling=we,pe=we);return e&&Yt.forEach(function(YS){return n(K,YS)}),Re&&Ka(K,ee),Gt}function Ye(K,V,J,vt){if(typeof J=="object"&&J!==null&&J.type===p&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case f:t:{for(var Gt=J.key;V!==null;){if(V.key===Gt){if(Gt=J.type,Gt===p){if(V.tag===7){a(K,V.sibling),vt=u(V,J.props.children),vt.return=K,K=vt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===N&&Hp(Gt)===V.type){a(K,V.sibling),vt=u(V,J.props),to(vt,J),vt.return=K,K=vt;break t}a(K,V);break}else n(K,V);V=V.sibling}J.type===p?(vt=os(J.props.children,K.mode,vt,J.key),vt.return=K,K=vt):(vt=Pl(J.type,J.key,J.props,null,K.mode,vt),to(vt,J),vt.return=K,K=vt)}return M(K);case d:t:{for(Gt=J.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(K,V.sibling),vt=u(V,J.children||[]),vt.return=K,K=vt;break t}else{a(K,V);break}else n(K,V);V=V.sibling}vt=pf(J,K.mode,vt),vt.return=K,K=vt}return M(K);case N:return Gt=J._init,J=Gt(J._payload),Ye(K,V,J,vt)}if(_t(J))return jt(K,V,J,vt);if(H(J)){if(Gt=H(J),typeof Gt!="function")throw Error(s(150));return J=Gt.call(J),se(K,V,J,vt)}if(typeof J.then=="function")return Ye(K,V,gl(J),vt);if(J.$$typeof===y)return Ye(K,V,Ll(K,J),vt);_l(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(K,V.sibling),vt=u(V,J),vt.return=K,K=vt):(a(K,V),vt=df(J,K.mode,vt),vt.return=K,K=vt),M(K)):a(K,V)}return function(K,V,J,vt){try{$r=0;var Gt=Ye(K,V,J,vt);return Fs=null,Gt}catch(Yt){if(Yt===Qr)throw Yt;var pe=si(29,Yt,null,K.mode);return pe.lanes=vt,pe.return=K,pe}finally{}}}var Ja=Gp(!0),Vp=Gp(!1),Hs=Ct(null),vl=Ct(0);function kp(e,n){e=qi,Ht(vl,e),Ht(Hs,n),qi=e|n.baseLanes}function xu(){Ht(vl,qi),Ht(Hs,Hs.current)}function Su(){qi=vl.current,Pt(Hs),Pt(vl)}var ni=Ct(null),Ei=null;function da(e){var n=e.alternate;Ht(on,on.current&1),Ht(ni,e),Ei===null&&(n===null||Hs.current!==null||n.memoizedState!==null)&&(Ei=e)}function Xp(e){if(e.tag===22){if(Ht(on,on.current),Ht(ni,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else pa()}function pa(){Ht(on,on.current),Ht(ni,ni.current)}function zi(e){Pt(ni),Ei===e&&(Ei=null),Pt(on)}var on=Ct(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Px=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},zx=r.unstable_scheduleCallback,Bx=r.unstable_NormalPriority,ln={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new Px,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&zx(Bx,function(){e.controller.abort()})}var no=null,Mu=0,Gs=0,Vs=null;function Ix(e,n){if(no===null){var a=no=[];Mu=0,Gs=Cf(),Vs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Mu++,n.then(Wp,Wp),n}function Wp(){if(--Mu===0&&no!==null){Vs!==null&&(Vs.status="fulfilled");var e=no;no=null,Gs=0,Vs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Fx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=R.S;R.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ix(e,n),qp!==null&&qp(e,n)};var $a=Ct(null);function Eu(){var e=$a.current;return e!==null?e:He.pooledCache}function Sl(e,n){n===null?Ht($a,$a.current):Ht($a,n.pool)}function jp(){var e=Eu();return e===null?null:{parent:ln._currentValue,pool:e}}var ma=0,he=null,Pe=null,Qe=null,yl=!1,ks=!1,ts=!1,Ml=0,io=0,Xs=null,Hx=0;function Ze(){throw Error(s(321))}function Tu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Hn(e[a],n[a]))return!1;return!0}function bu(e,n,a,o,u,h){return ma=h,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?es:ga,ts=!1,h=a(o,u),ts=!1,ks&&(h=Zp(n,a,o,u)),Yp(e),h}function Yp(e){R.H=Ti;var n=Pe!==null&&Pe.next!==null;if(ma=0,Qe=Pe=he=null,yl=!1,io=0,Xs=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&Ul(e)&&(dn=!0))}function Zp(e,n,a,o){he=e;var u=0;do{if(ks&&(Xs=null),io=0,ks=!1,25<=u)throw Error(s(301));if(u+=1,Qe=Pe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}R.H=ns,h=n(a,o)}while(ks);return h}function Gx(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(he.flags|=1024),n}function Au(){var e=Ml!==0;return Ml=0,e}function Ru(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function wu(e){if(yl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yl=!1}ma=0,Qe=Pe=he=null,ks=!1,io=Ml=0,Xs=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?he.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Je(){if(Pe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=Qe===null?he.memoizedState:Qe.next;if(n!==null)Qe=n,Pe=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Qe===null?he.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}var El;El=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ao(e){var n=io;return io+=1,Xs===null&&(Xs=[]),e=Ip(Xs,e,n),n=he,(Qe===null?n.memoizedState:Qe.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?es:ga),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===y)return Mn(e)}throw Error(s(438,String(e)))}function Cu(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Bi(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=Je();return Du(n,Pe,e)}function Du(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var w=M=null,P=null,k=n,pt=!1;do{var St=k.lane&-536870913;if(St!==k.lane?(ye&St)===St:(ma&St)===St){var rt=k.revertLane;if(rt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),St===Gs&&(pt=!0);else if((ma&rt)===rt){k=k.next,rt===Gs&&(pt=!0);continue}else St={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},P===null?(w=P=St,M=h):P=P.next=St,he.lanes|=rt,ba|=rt;St=k.action,ts&&a(h,St),h=k.hasEagerState?k.eagerState:a(h,St)}else rt={lane:St,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},P===null?(w=P=rt,M=h):P=P.next=rt,he.lanes|=St,ba|=St;k=k.next}while(k!==null&&k!==n);if(P===null?M=h:P.next=w,!Hn(h,e.memoizedState)&&(dn=!0,pt&&(a=Vs,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=P,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Uu(e){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);Hn(h,n.memoizedState)||(dn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Kp(e,n,a){var o=he,u=Je(),h=Re;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Hn((Pe||u).memoizedState,a);if(M&&(u.memoizedState=a,dn=!0),u=u.queue,Ou($p.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||Qe!==null&&Qe.memoizedState.tag&1){if(o.flags|=2048,Ws(9,Jp.bind(null,o,u,a,n),{destroy:void 0},null),He===null)throw Error(s(349));h||ma&60||Qp(o,n,a)}return a}function Qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=El(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Jp(e,n,a,o){n.value=a,n.getSnapshot=o,tm(n)&&em(e)}function $p(e,n,a){return a(function(){tm(n)&&em(e)})}function tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Hn(e,a)}catch{return!0}}function em(e){var n=ha(e,2);n!==null&&Un(n,e,2)}function Lu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),ts){re(!0);try{a()}finally{re(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},n}function nm(e,n,a,o){return e.baseState=a,Du(e,Pe,typeof o=="function"?o:Bi)}function Vx(e,n,a,o,u){if(wl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};R.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,im(n,h)):(h.next=a.next,n.pending=a.next=h)}}function im(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=R.T,M={};R.T=M;try{var w=a(u,o),P=R.S;P!==null&&P(M,w),am(e,n,w)}catch(k){Nu(e,n,k)}finally{R.T=h}}else try{h=a(u,o),am(e,n,h)}catch(k){Nu(e,n,k)}}function am(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sm(e,n,o)},function(o){return Nu(e,n,o)}):sm(e,n,a)}function sm(e,n,a){n.status="fulfilled",n.value=a,rm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,im(e,a)))}function Nu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,rm(n),n=n.next;while(n!==o)}e.action=null}function rm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function om(e,n){return n}function lm(e,n){if(Re){var a=He.formState;if(a!==null){t:{var o=he;if(Re){if(_n){e:{for(var u=_n,h=Mi;u.nodeType!==8;){if(!h){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){_n=di(u.nextSibling),o=u.data==="F!";break t}}Qa(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},a.queue=o,a=Am.bind(null,he,o),o.dispatch=a,o=Lu(!1),h=Fu.bind(null,he,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Vx.bind(null,he,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function cm(e){var n=Je();return um(n,Pe,e)}function um(e,n,a){n=Du(e,n,om)[0],e=bl(Bi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?ao(n):n;var o=Je(),u=o.queue,h=u.dispatch;return a!==o.memoizedState&&(he.flags|=2048,Ws(9,kx.bind(null,u,a),{destroy:void 0},null)),[n,h,e]}function kx(e,n){e.action=n}function fm(e){var n=Je(),a=Pe;if(a!==null)return um(n,a,e);Je(),n=n.memoizedState,a=Je();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ws(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=he.updateQueue,n===null&&(n=El(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function hm(){return Je().memoizedState}function Al(e,n,a,o){var u=zn();he.flags|=e,u.memoizedState=Ws(1|n,a,{destroy:void 0},o===void 0?null:o)}function Rl(e,n,a,o){var u=Je();o=o===void 0?null:o;var h=u.memoizedState.inst;Pe!==null&&o!==null&&Tu(o,Pe.memoizedState.deps)?u.memoizedState=Ws(n,a,h,o):(he.flags|=e,u.memoizedState=Ws(1|n,a,h,o))}function dm(e,n){Al(8390656,8,e,n)}function Ou(e,n){Rl(2048,8,e,n)}function pm(e,n){return Rl(4,2,e,n)}function mm(e,n){return Rl(4,4,e,n)}function gm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _m(e,n,a){a=a!=null?a.concat([e]):null,Rl(4,4,gm.bind(null,n,e),a)}function Pu(){}function vm(e,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Tu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function xm(e,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Tu(n,o[1]))return o[0];if(o=e(),ts){re(!0);try{e()}finally{re(!1)}}return a.memoizedState=[o,n],o}function zu(e,n,a){return a===void 0||ma&1073741824?e.memoizedState=n:(e.memoizedState=a,e=yg(),he.lanes|=e,ba|=e,a)}function Sm(e,n,a,o){return Hn(a,n)?a:Hs.current!==null?(e=zu(e,a,o),Hn(e,n)||(dn=!0),e):ma&42?(e=yg(),he.lanes|=e,ba|=e,n):(dn=!0,e.memoizedState=a)}function ym(e,n,a,o,u){var h=F.p;F.p=h!==0&&8>h?h:8;var M=R.T,w={};R.T=w,Fu(e,!1,n,a);try{var P=u(),k=R.S;if(k!==null&&k(w,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var pt=Fx(P,o);so(e,n,pt,Xn(e))}else so(e,n,o,Xn(e))}catch(St){so(e,n,{then:function(){},status:"rejected",reason:St},Xn())}finally{F.p=h,R.T=M}}function Xx(){}function Bu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Mm(e).queue;ym(e,u,n,ut,a===null?Xx:function(){return Em(e),a(o)})}function Mm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:ut},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Em(e){var n=Mm(e).next.queue;so(e,n,{},Xn())}function Iu(){return Mn(Ao)}function Tm(){return Je().memoizedState}function bm(){return Je().memoizedState}function Wx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();e=xa(a);var o=Sa(n,e,a);o!==null&&(Un(o,n,a),lo(o,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function qx(e,n,a){var o=Xn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?Rm(n,a):(a=pu(e,n,a,o),a!==null&&(Un(a,e,o),wm(a,n,o)))}function Am(e,n,a){var o=Xn();so(e,n,a,o)}function so(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))Rm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,w=h(M,a);if(u.hasEagerState=!0,u.eagerState=w,Hn(w,M))return fl(e,n,u,0),He===null&&ul(),!1}catch{}finally{}if(a=pu(e,n,u,o),a!==null)return Un(a,e,o),wm(a,n,o),!0}return!1}function Fu(e,n,a,o){if(o={lane:2,revertLane:Cf(),action:o,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(s(479))}else n=pu(e,a,o,2),n!==null&&Un(n,e,2)}function wl(e){var n=e.alternate;return e===he||n!==null&&n===he}function Rm(e,n){ks=yl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function wm(e,n,a){if(a&4194176){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,yi(e,a)}}var Ti={readContext:Mn,use:Tl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze};Ti.useCacheRefresh=Ze,Ti.useMemoCache=Ze,Ti.useHostTransitionStatus=Ze,Ti.useFormState=Ze,Ti.useActionState=Ze,Ti.useOptimistic=Ze;var es={readContext:Mn,use:Tl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:dm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Al(4194308,4,gm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(ts){re(!0);try{e()}finally{re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(ts){re(!0);try{a(n)}finally{re(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=qx.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Lu(e);var n=e.queue,a=Am.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pu,useDeferredValue:function(e,n){var a=zn();return zu(a,e,n)},useTransition:function(){var e=Lu(!1);return e=ym.bind(null,he,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=zn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),He===null)throw Error(s(349));ye&60||Qp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,dm($p.bind(null,o,h,e),[e]),o.flags|=2048,Ws(9,Jp.bind(null,o,h,a,n),{destroy:void 0},null),a},useId:function(){var e=zn(),n=He.identifierPrefix;if(Re){var a=Pi,o=Oi;a=(o&~(1<<32-Jt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Hx++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return zn().memoizedState=Wx.bind(null,he)}};es.useMemoCache=Cu,es.useHostTransitionStatus=Iu,es.useFormState=lm,es.useActionState=lm,es.useOptimistic=function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fu.bind(null,he,!0,a),a.dispatch=n,[e,n]};var ga={readContext:Mn,use:Tl,useCallback:vm,useContext:Mn,useEffect:Ou,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:bl,useRef:hm,useState:function(){return bl(Bi)},useDebugValue:Pu,useDeferredValue:function(e,n){var a=Je();return Sm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=bl(Bi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Kp,useId:Tm};ga.useCacheRefresh=bm,ga.useMemoCache=Cu,ga.useHostTransitionStatus=Iu,ga.useFormState=cm,ga.useActionState=cm,ga.useOptimistic=function(e,n){var a=Je();return nm(a,Pe,e,n)};var ns={readContext:Mn,use:Tl,useCallback:vm,useContext:Mn,useEffect:Ou,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Uu,useRef:hm,useState:function(){return Uu(Bi)},useDebugValue:Pu,useDeferredValue:function(e,n){var a=Je();return Pe===null?zu(a,e,n):Sm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Uu(Bi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Kp,useId:Tm};ns.useCacheRefresh=bm,ns.useMemoCache=Cu,ns.useHostTransitionStatus=Iu,ns.useFormState=fm,ns.useActionState=fm,ns.useOptimistic=function(e,n){var a=Je();return Pe!==null?nm(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Hu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={isMounted:function(e){return(e=e._reactInternals)?X(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Xn(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(Un(n,e,o),lo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Xn(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(Un(n,e,o),lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xn(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=Sa(e,o,a),n!==null&&(Un(n,e,a),lo(n,e,a))}};function Cm(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!qr(a,o)||!qr(u,h):!0}function Dm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function is(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Um(e){Cl(e)}function Lm(e){console.error(e)}function Nm(e){Cl(e)}function Dl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Om(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Vu(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(e,n)},a}function Pm(e){return e=xa(e),e.tag=3,e}function zm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Om(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Om(n,a,o),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function jx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&oo(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Ei===null?Tf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===vu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Af(e,o,u)),!1;case 22:return a.flags|=65536,o===vu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Af(e,o,u)),!1}throw Error(s(435,a.tag))}return Af(e,o,u),Tf(),!1}if(Re)return n=ni.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==_u&&(e=Error(s(422),{cause:o}),Kr($n(e,a)))):(o!==_u&&(n=Error(s(423),{cause:o}),Kr($n(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=$n(o,a),u=Vu(e.stateNode,o,u),af(e,u),je!==4&&(je=2)),!1;var h=Error(s(520),{cause:o});if(h=$n(h,a),_o===null?_o=[h]:_o.push(h),je!==4&&(je=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Vu(a.stateNode,o,e),af(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Aa===null||!Aa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Pm(u),zm(u,e,a,o),af(a,u),!1}a=a.return}while(a!==null);return!1}var Bm=Error(s(461)),dn=!1;function vn(e,n,a,o){n.child=e===null?Vp(n,null,a,o):Ja(n,e.child,a,o)}function Im(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var w in o)w!=="ref"&&(M[w]=o[w])}else M=o;return ss(n),o=bu(e,n,a,M,h,u),w=Au(),e!==null&&!dn?(Ru(e,n,u),Ii(e,n,u)):(Re&&w&&mu(n),n.flags|=1,vn(e,n,o,u),n.child)}function Fm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!hf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Hm(e,n,h,o,u)):(e=Pl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Qu(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(M,o)&&e.ref===n.ref)return Ii(e,n,u)}return n.flags|=1,e=Ta(h,o),e.ref=n.ref,e.return=n,n.child=e}function Hm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(qr(h,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=h,Qu(e,u))e.flags&131072&&(dn=!0);else return n.lanes=e.lanes,Ii(e,n,u)}return ku(e,n,a,o,u)}function Gm(e,n,a){var o=n.pendingProps,u=o.children,h=(n.stateNode._pendingVisibility&2)!==0,M=e!==null?e.memoizedState:null;if(ro(e,n),o.mode==="hidden"||h){if(n.flags&128){if(o=M!==null?M.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Vm(e,n,o,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,M!==null?M.cachePool:null),M!==null?kp(n,M):xu(),Xp(n);else return n.lanes=n.childLanes=536870912,Vm(e,n,M!==null?M.baseLanes|a:a,a)}else M!==null?(Sl(n,M.cachePool),kp(n,M),pa(),n.memoizedState=null):(e!==null&&Sl(n,null),xu(),pa());return vn(e,n,u,a),n.child}function Vm(e,n,a,o){var u=Eu();return u=u===null?null:{parent:ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Sl(n,null),xu(),Xp(n),e!==null&&oo(e,n,o,!0),null}function ro(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function ku(e,n,a,o,u){return ss(n),a=bu(e,n,a,o,void 0,u),o=Au(),e!==null&&!dn?(Ru(e,n,u),Ii(e,n,u)):(Re&&o&&mu(n),n.flags|=1,vn(e,n,a,u),n.child)}function km(e,n,a,o,u,h){return ss(n),n.updateQueue=null,a=Zp(n,o,a,u),Yp(e),o=Au(),e!==null&&!dn?(Ru(e,n,h),Ii(e,n,h)):(Re&&o&&mu(n),n.flags|=1,vn(e,n,a,h),n.child)}function Xm(e,n,a,o,u){if(ss(n),n.stateNode===null){var h=zs,M=a.contextType;typeof M=="object"&&M!==null&&(h=Mn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Gu,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},ef(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?Mn(M):zs,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Hu(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Gu.enqueueReplaceState(h,h.state,null),uo(n,o,h,u),co(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var w=n.memoizedProps,P=is(a,w);h.props=P;var k=h.context,pt=a.contextType;M=zs,typeof pt=="object"&&pt!==null&&(M=Mn(pt));var St=a.getDerivedStateFromProps;pt=typeof St=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,pt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||k!==M)&&Dm(n,h,o,M),va=!1;var rt=n.memoizedState;h.state=rt,uo(n,o,h,u),co(),k=n.memoizedState,w||rt!==k||va?(typeof St=="function"&&(Hu(n,a,St,o),k=n.memoizedState),(P=va||Cm(n,a,P,o,rt,k,M))?(pt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=k),h.props=o,h.state=k,h.context=M,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,nf(e,n),M=n.memoizedProps,pt=is(a,M),h.props=pt,St=n.pendingProps,rt=h.context,k=a.contextType,P=zs,typeof k=="object"&&k!==null&&(P=Mn(k)),w=a.getDerivedStateFromProps,(k=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==St||rt!==P)&&Dm(n,h,o,P),va=!1,rt=n.memoizedState,h.state=rt,uo(n,o,h,u),co();var dt=n.memoizedState;M!==St||rt!==dt||va||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof w=="function"&&(Hu(n,a,w,o),dt=n.memoizedState),(pt=va||Cm(n,a,pt,o,rt,dt,P)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?(k||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,dt,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,dt,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=dt),h.props=o,h.state=dt,h.context=P,o=pt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,ro(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ja(n,e.child,null,u),n.child=Ja(n,null,a,u)):vn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Ii(e,n,u),e}function Wm(e,n,a,o){return Zr(),n.flags|=256,vn(e,n,a,o),n.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Wu(e){return{baseLanes:e,cachePool:jp()}}function qu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function qm(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?da(n):pa(),Re){var w=_n,P;if(P=w){t:{for(P=w,w=Mi;P.nodeType!==8;){if(!w){w=null;break t}if(P=di(P.nextSibling),P===null){w=null;break t}}w=P}w!==null?(n.memoizedState={dehydrated:w,treeContext:Za!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912},P=si(18,null,null,0),P.stateNode=w,P.return=n,n.child=P,Dn=n,_n=null,P=!0):P=!1}P||Qa(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?n.lanes=16:n.lanes=536870912,null;zi(n)}return w=o.children,o=o.fallback,u?(pa(),u=n.mode,w=Yu({mode:"hidden",children:w},u),o=os(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,u=n.child,u.memoizedState=Wu(a),u.childLanes=qu(e,M,a),n.memoizedState=Xu,o):(da(n),ju(n,w))}if(P=e.memoizedState,P!==null&&(w=P.dehydrated,w!==null)){if(h)n.flags&256?(da(n),n.flags&=-257,n=Zu(e,n,a)):n.memoizedState!==null?(pa(),n.child=e.child,n.flags|=128,n=null):(pa(),u=o.fallback,w=n.mode,o=Yu({mode:"visible",children:o.children},w),u=os(u,w,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Ja(n,e.child,null,a),o=n.child,o.memoizedState=Wu(a),o.childLanes=qu(e,M,a),n.memoizedState=Xu,n=u);else if(da(n),w.data==="$!"){if(M=w.nextSibling&&w.nextSibling.dataset,M)var k=M.dgst;M=k,o=Error(s(419)),o.stack="",o.digest=M,Kr({value:o,source:null,stack:null}),n=Zu(e,n,a)}else if(dn||oo(e,n,a,!1),M=(a&e.childLanes)!==0,dn||M){if(M=He,M!==null){if(o=a&-a,o&42)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=o&(M.suspendedLanes|a)?0:o,o!==0&&o!==P.retryLane)throw P.retryLane=o,ha(e,o),Un(M,e,o),Bm}w.data==="$?"||Tf(),n=Zu(e,n,a)}else w.data==="$?"?(n.flags|=128,n.child=e.child,n=lS.bind(null,e),w._reactRetry=n,n=null):(e=P.treeContext,_n=di(w.nextSibling),Dn=n,Re=!0,fi=null,Mi=!1,e!==null&&(ti[ei++]=Oi,ti[ei++]=Pi,ti[ei++]=Za,Oi=e.id,Pi=e.overflow,Za=n),n=ju(n,o.children),n.flags|=4096);return n}return u?(pa(),u=o.fallback,w=n.mode,P=e.child,k=P.sibling,o=Ta(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&31457280,k!==null?u=Ta(k,u):(u=os(u,w,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,w=e.child.memoizedState,w===null?w=Wu(a):(P=w.cachePool,P!==null?(k=ln._currentValue,P=P.parent!==k?{parent:k,pool:k}:P):P=jp(),w={baseLanes:w.baseLanes|a,cachePool:P}),u.memoizedState=w,u.childLanes=qu(e,M,a),n.memoizedState=Xu,o):(da(n),a=e.child,e=a.sibling,a=Ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function ju(e,n){return n=Yu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Yu(e,n){return vg(e,n,0,null)}function Zu(e,n,a){return Ja(n,e.child,null,a),e=ju(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),$u(e.return,n,a)}function Ku(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function Ym(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(vn(e,n,o.children,a),o=on.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,a,n);else if(e.tag===19)jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Ht(on,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ku(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ku(n,!0,a,null,h);break;case"together":Ku(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ii(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,!(a&n.childLanes))if(e!==null){if(oo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function Yx(e,n,a){switch(n.tag){case 3:Ke(n,n.stateNode.containerInfo),_a(n,ln,e.memoizedState.cache),Zr();break;case 27:case 5:de(n);break;case 4:Ke(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(da(n),n.flags|=128,null):a&n.child.childLanes?qm(e,n,a):(da(n),e=Ii(e,n,a),e!==null?e.sibling:null);da(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(oo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ym(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ht(on,on.current),o)break;return null;case 22:case 23:return n.lanes=0,Gm(e,n,a);case 24:_a(n,ln,e.memoizedState.cache)}return Ii(e,n,a)}function Zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Qu(e,a)&&!(n.flags&128))return dn=!1,Yx(e,n,a);dn=!!(e.flags&131072)}else dn=!1,Re&&n.flags&1048576&&Np(n,pl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")hf(o)?(e=is(o,e),n.tag=1,n=Xm(null,n,o,e,a)):(n.tag=0,n=ku(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===E){n.tag=11,n=Im(null,n,o,e,a);break t}else if(u===S){n.tag=14,n=Fm(null,n,o,e,a);break t}}throw n=q(o)||o,Error(s(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=is(o,n.pendingProps),Xm(e,n,o,u,a);case 3:t:{if(Ke(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var h=n.pendingProps;u=n.memoizedState,o=u.element,nf(e,n),uo(n,h,null,a);var M=n.memoizedState;if(h=M.cache,_a(n,ln,h),h!==u.cache&&tf(n,[ln],a,!0),co(),h=M.element,u.isDehydrated)if(u={element:h,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Wm(e,n,h,a);break t}else if(h!==o){o=$n(Error(s(424)),n),Kr(o),n=Wm(e,n,h,a);break t}else for(_n=di(n.stateNode.containerInfo.firstChild),Dn=n,Re=!0,fi=null,Mi=!0,a=Vp(n,null,h,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zr(),h===o){n=Ii(e,n,a);break t}vn(e,n,h,a)}n=n.child}return n;case 26:return ro(e,n),e===null?(a=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=jl(Me.current).createElement(a),o[an]=n,o[sn]=e,xn(o,a,e),Rt(o),n.stateNode=o):n.memoizedState=Jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return de(n),e===null&&Re&&(o=n.stateNode=Zg(n.type,n.pendingProps,Me.current),Dn=n,Mi=!0,_n=di(o.firstChild)),o=n.pendingProps.children,e!==null||Re?vn(e,n,o,a):n.child=Ja(n,null,o,a),ro(e,n),n.child;case 5:return e===null&&Re&&((u=o=_n)&&(o=TS(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Dn=n,_n=di(o.firstChild),Mi=!1,u=!0):u=!1),u||Qa(n)),de(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,If(u,h)?o=null:M!==null&&If(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=bu(e,n,Gx,null,null,a),Ao._currentValue=u),ro(e,n),vn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=_n)&&(a=bS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Dn=n,_n=null,e=!0):e=!1),e||Qa(n)),null;case 13:return qm(e,n,a);case 4:return Ke(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ja(n,null,o,a):vn(e,n,o,a),n.child;case 11:return Im(e,n,n.type,n.pendingProps,a);case 7:return vn(e,n,n.pendingProps,a),n.child;case 8:return vn(e,n,n.pendingProps.children,a),n.child;case 12:return vn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),vn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ss(n),u=Mn(u),o=o(u),n.flags|=1,vn(e,n,o,a),n.child;case 14:return Fm(e,n,n.type,n.pendingProps,a);case 15:return Hm(e,n,n.type,n.pendingProps,a);case 19:return Ym(e,n,a);case 22:return Gm(e,n,a);case 24:return ss(n),o=Mn(ln),e===null?(u=Eu(),u===null&&(u=He,h=yu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},ef(n),_a(n,ln,u)):(e.lanes&a&&(nf(e,n),uo(n,null,null,a),co()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,ln,o)):(o=h.cache,_a(n,ln,o),o!==u.cache&&tf(n,[ln],a,!0))),vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var Ju=Ct(null),as=null,Fi=null;function _a(e,n,a){Ht(Ju,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=Ju.current,Pt(Ju)}function $u(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function tf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var w=h;h=u;for(var P=0;P<n.length;P++)if(w.context===n[P]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),$u(h.return,a,e),o||(M=null);break t}h=w.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),$u(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function oo(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if(u.flags&524288)h=!0;else if(u.flags&262144)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var w=u.type;Hn(u.pendingProps.value,M.value)||(e!==null?e.push(w):e=[w])}}else if(u===j.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}u=u.return}e!==null&&tf(n,e,a,o),n.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!Hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return Km(as,e)}function Ll(e,n){return as===null&&ss(e),Km(e,n)}function Km(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(s(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var va=!1;function ef(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,We&2){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(e),Up(e,null,a),n}return fl(e,o,n,a),hl(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,yi(e,a)}}function af(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var sf=!1;function co(){if(sf){var e=Vs;if(e!==null)throw e}}function uo(e,n,a,o){sf=!1;var u=e.updateQueue;va=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var P=w,k=P.next;P.next=null,M===null?h=k:M.next=k,M=P;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,w=pt.lastBaseUpdate,w!==M&&(w===null?pt.firstBaseUpdate=k:w.next=k,pt.lastBaseUpdate=P))}if(h!==null){var St=u.baseState;M=0,pt=k=P=null,w=h;do{var rt=w.lane&-536870913,dt=rt!==w.lane;if(dt?(ye&rt)===rt:(o&rt)===rt){rt!==0&&rt===Gs&&(sf=!0),pt!==null&&(pt=pt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var jt=e,se=w;rt=n;var Ye=a;switch(se.tag){case 1:if(jt=se.payload,typeof jt=="function"){St=jt.call(Ye,St,rt);break t}St=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=se.payload,rt=typeof jt=="function"?jt.call(Ye,St,rt):jt,rt==null)break t;St=b({},St,rt);break t;case 2:va=!0}}rt=w.callback,rt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[rt]:dt.push(rt))}else dt={lane:rt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pt===null?(k=pt=dt,P=St):pt=pt.next=dt,M|=rt;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;dt=w,w=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);pt===null&&(P=St),u.baseState=P,u.firstBaseUpdate=k,u.lastBaseUpdate=pt,h===null&&(u.shared.lanes=0),ba|=M,e.lanes=M,e.memoizedState=St}}function Qm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Jm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Qm(a[e],n)}function fo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(w){Fe(n,n.return,w)}}function ya(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,u=n;var P=a;try{w()}catch(k){Fe(u,P,k)}}}o=o.next}while(o!==h)}}catch(k){Fe(n,n.return,k)}}function $m(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Jm(n,a)}catch(o){Fe(e,e.return,o)}}}function tg(e,n,a){a.props=is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function rs(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=o;break;default:u=o}typeof a=="function"?e.refCleanup=a(u):a.current=u}}catch(h){Fe(e,n,h)}}function Gn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function eg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function ng(e,n,a){try{var o=e.stateNode;xS(o,e.type,a,n),o[sn]=n}catch(u){Fe(e,e.return,u)}}function ig(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function of(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ql));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(of(e,n,a),e=e.sibling;e!==null;)of(e,n,a),e=e.sibling}function Nl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}var Gi=!1,qe=!1,lf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,pn=null,sg=!1;function Zx(e,n){if(e=e.containerInfo,zf=$l,e=Mp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,w=-1,P=-1,k=0,pt=0,St=e,rt=null;e:for(;;){for(var dt;St!==a||u!==0&&St.nodeType!==3||(w=M+u),St!==h||o!==0&&St.nodeType!==3||(P=M+o),St.nodeType===3&&(M+=St.nodeValue.length),(dt=St.firstChild)!==null;)rt=St,St=dt;for(;;){if(St===e)break e;if(rt===a&&++k===u&&(w=M),rt===h&&++pt===o&&(P=M),(dt=St.nextSibling)!==null)break;St=rt,rt=St.parentNode}St=dt}a=w===-1||P===-1?null:{start:w,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:e,selectionRange:a},$l=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var jt=is(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(jt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){Fe(a,a.return,se)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Gf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}return jt=sg,sg=!1,jt}function rg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ki(e,a),o&4&&fo(5,a);break;case 1:if(ki(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(w){Fe(a,a.return,w)}else{var u=is(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(w){Fe(a,a.return,w)}}o&64&&$m(a),o&512&&rs(a,a.return);break;case 3:if(ki(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Jm(o,e)}catch(w){Fe(a,a.return,w)}}break;case 26:ki(e,a),o&512&&rs(a,a.return);break;case 27:case 5:ki(e,a),n===null&&o&4&&eg(a),o&512&&rs(a,a.return);break;case 12:ki(e,a);break;case 13:ki(e,a),o&4&&cg(e,a);break;case 22:if(u=a.memoizedState!==null||Gi,!u){n=n!==null&&n.memoizedState!==null||qe;var h=Gi,M=qe;Gi=u,(qe=n)&&!M?Ma(e,a,(a.subtreeFlags&8772)!==0):ki(e,a),Gi=h,qe=M}o&512&&(a.memoizedProps.mode==="manual"?rs(a,a.return):Gn(a,a.return));break;default:ki(e,a)}}function og(e){var n=e.alternate;n!==null&&(e.alternate=null,og(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Z(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Vn=!1;function Vi(e,n,a){for(a=a.child;a!==null;)lg(e,n,a),a=a.sibling}function lg(e,n,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:qe||Gn(a,n),Vi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Gn(a,n);var o=$e,u=Vn;for($e=a.stateNode,Vi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Z(a),$e=o,Vn=u;break;case 5:qe||Gn(a,n);case 6:u=$e;var h=Vn;if($e=null,Vi(e,n,a),$e=u,Vn=h,$e!==null)if(Vn)try{e=$e,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(M){Fe(a,n,M)}else try{$e.removeChild(a.stateNode)}catch(M){Fe(a,n,M)}break;case 18:$e!==null&&(Vn?(n=$e,a=a.stateNode,n.nodeType===8?Hf(n.parentNode,a):n.nodeType===1&&Hf(n,a),Do(n)):Hf($e,a.stateNode));break;case 4:o=$e,u=Vn,$e=a.stateNode.containerInfo,Vn=!0,Vi(e,n,a),$e=o,Vn=u;break;case 0:case 11:case 14:case 15:qe||ya(2,a,n),qe||ya(4,a,n),Vi(e,n,a);break;case 1:qe||(Gn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&tg(a,n,o)),Vi(e,n,a);break;case 21:Vi(e,n,a);break;case 22:qe||Gn(a,n),qe=(o=qe)||a.memoizedState!==null,Vi(e,n,a),qe=o;break;default:Vi(e,n,a)}}function cg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Do(e)}catch(a){Fe(n,n.return,a)}}function Kx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ag),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ag),n;default:throw Error(s(435,e.tag))}}function cf(e,n){var a=Kx(e);n.forEach(function(o){var u=cS.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ii(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,w=M;t:for(;w!==null;){switch(w.tag){case 27:case 5:$e=w.stateNode,Vn=!1;break t;case 3:$e=w.stateNode.containerInfo,Vn=!0;break t;case 4:$e=w.stateNode.containerInfo,Vn=!0;break t}w=w.return}if($e===null)throw Error(s(160));lg(h,M,u),$e=null,Vn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ug(n,e),n=n.sibling}var hi=null;function ug(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(n,e),ai(e),o&4&&(ya(3,e,e.return),fo(3,e),ya(5,e,e.return));break;case 1:ii(n,e),ai(e),o&512&&(qe||a===null||Gn(a,a.return)),o&64&&Gi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=hi;if(ii(n,e),ai(e),o&512&&(qe||a===null||Gn(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[C]||h[an]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),xn(h,o,a),h[an]=e,Rt(h),o=h;break t;case"link":var M=e0("link","href",u).get(o+(a.href||""));if(M){for(var w=0;w<M.length;w++)if(h=M[w],h.getAttribute("href")===(a.href==null?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(w,1);break e}}h=u.createElement(o),xn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=e0("meta","content",u).get(o+(a.content||""))){for(w=0;w<M.length;w++)if(h=M[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(w,1);break e}}h=u.createElement(o),xn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[an]=e,Rt(h),o=h}e.stateNode=o}else n0(u,e.type,e.stateNode);else e.stateNode=t0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?n0(u,e.type,e.stateNode):t0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ng(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){u=e.stateNode,h=e.memoizedProps;try{for(var P=u.firstChild;P;){var k=P.nextSibling,pt=P.nodeName;P[C]||pt==="HEAD"||pt==="BODY"||pt==="SCRIPT"||pt==="STYLE"||pt==="LINK"&&P.rel.toLowerCase()==="stylesheet"||u.removeChild(P),P=k}for(var St=e.type,rt=u.attributes;rt.length;)u.removeAttributeNode(rt[0]);xn(u,St,h),u[an]=e,u[sn]=h}catch(jt){Fe(e,e.return,jt)}}case 5:if(ii(n,e),ai(e),o&512&&(qe||a===null||Gn(a,a.return)),e.flags&32){u=e.stateNode;try{Cs(u,"")}catch(jt){Fe(e,e.return,jt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ng(e,u,a!==null?a.memoizedProps:u)),o&1024&&(lf=!0);break;case 6:if(ii(n,e),ai(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(jt){Fe(e,e.return,jt)}}break;case 3:if(Kl=null,u=hi,hi=Yl(n.containerInfo),ii(n,e),hi=u,ai(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(n.containerInfo)}catch(jt){Fe(e,e.return,jt)}lf&&(lf=!1,fg(e));break;case 4:o=hi,hi=Yl(e.stateNode.containerInfo),ii(n,e),ai(e),hi=o;break;case 12:ii(n,e),ai(e);break;case 13:ii(n,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vf=mt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cf(e,o)));break;case 22:if(o&512&&(qe||a===null||Gn(a,a.return)),P=e.memoizedState!==null,k=a!==null&&a.memoizedState!==null,pt=Gi,St=qe,Gi=pt||P,qe=St||k,ii(n,e),qe=St,Gi=pt,ai(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=P?n._visibility&-2:n._visibility|1,P&&(n=Gi||qe,a===null||k||n||qs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){k=a=n;try{if(u=k.stateNode,P)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{M=k.stateNode,w=k.memoizedProps.style;var dt=w!=null&&w.hasOwnProperty("display")?w.display:null;M.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(jt){Fe(k,k.return,jt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=P?"":k.memoizedProps}catch(jt){Fe(k,k.return,jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,cf(e,a))));break;case 19:ii(n,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cf(e,o)));break;case 21:break;default:ii(n,e),ai(e)}}function ai(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(ig(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var u=o.stateNode,h=rf(e);Nl(e,h,u);break;case 5:var M=o.stateNode;o.flags&32&&(Cs(M,""),o.flags&=-33);var w=rf(e);Nl(e,w,M);break;case 3:case 4:var P=o.stateNode.containerInfo,k=rf(e);of(e,k,P);break;default:throw Error(s(161))}}}catch(pt){Fe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(e,n.alternate,n),n=n.sibling}function qs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),qs(n);break;case 1:Gn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tg(n,n.return,a),qs(n);break;case 26:case 27:case 5:Gn(n,n.return),qs(n);break;case 22:Gn(n,n.return),n.memoizedState===null&&qs(n);break;default:qs(n)}e=e.sibling}}function Ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Ma(u,h,a),fo(4,h);break;case 1:if(Ma(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(k){Fe(o,o.return,k)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Qm(P[u],w)}catch(k){Fe(o,o.return,k)}}a&&M&64&&$m(h),rs(h,h.return);break;case 26:case 27:case 5:Ma(u,h,a),a&&o===null&&M&4&&eg(h),rs(h,h.return);break;case 12:Ma(u,h,a);break;case 13:Ma(u,h,a),a&&M&4&&cg(u,h);break;case 22:h.memoizedState===null&&Ma(u,h,a),rs(h,h.return);break;default:Ma(u,h,a)}n=n.sibling}}function uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function ff(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function Ea(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hg(e,n,a,o),n=n.sibling}function hg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ea(e,n,a,o),u&2048&&fo(9,n);break;case 3:Ea(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(u&2048){Ea(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,w=h.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Fe(n,n.return,P)}}else Ea(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,n.memoizedState!==null?h._visibility&4?Ea(e,n,a,o):ho(e,n):h._visibility&4?Ea(e,n,a,o):(h._visibility|=4,js(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&uf(n.alternate,n);break;case 24:Ea(e,n,a,o),u&2048&&ff(n.alternate,n);break;default:Ea(e,n,a,o)}}function js(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,w=a,P=o,k=M.flags;switch(M.tag){case 0:case 11:case 15:js(h,M,w,P,u),fo(8,M);break;case 23:break;case 22:var pt=M.stateNode;M.memoizedState!==null?pt._visibility&4?js(h,M,w,P,u):ho(h,M):(pt._visibility|=4,js(h,M,w,P,u)),u&&k&2048&&uf(M.alternate,M);break;case 24:js(h,M,w,P,u),u&&k&2048&&ff(M.alternate,M);break;default:js(h,M,w,P,u)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ho(a,o),u&2048&&uf(o.alternate,o);break;case 24:ho(a,o),u&2048&&ff(o.alternate,o);break;default:ho(a,o)}n=n.sibling}}var po=8192;function Ys(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)dg(e),e=e.sibling}function dg(e){switch(e.tag){case 26:Ys(e),e.flags&po&&e.memoizedState!==null&&IS(hi,e.memoizedState,e.memoizedProps);break;case 5:Ys(e);break;case 3:case 4:var n=hi;hi=Yl(e.stateNode.containerInfo),Ys(e),hi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,Ys(e),po=n):Ys(e));break;default:Ys(e)}}function pg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,gg(o,e)}pg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mg(e),e=e.sibling}function mg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Ol(e)):mo(e);break;default:mo(e)}}function Ol(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,gg(o,e)}pg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Ol(n));break;default:Ol(n)}e=e.sibling}}function gg(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,pn=o;else t:for(a=e;pn!==null;){o=pn;var u=o.sibling,h=o.return;if(og(o),o===a){pn=null;break t}if(u!==null){u.return=h,pn=u;break t}pn=h}}}function Qx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,n,a,o){return new Qx(e,n,a,o)}function hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ta(e,n){var a=e.alternate;return a===null?(a=si(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function _g(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Pl(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")hf(e)&&(M=1);else if(typeof e=="string")M=zS(e,a,_e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return os(a.children,u,h,n);case m:M=8,u|=24;break;case g:return e=si(12,a,n,u|2),e.elementType=g,e.lanes=h,e;case T:return e=si(13,a,n,u),e.elementType=T,e.lanes=h,e;case x:return e=si(19,a,n,u),e.elementType=x,e.lanes=h,e;case L:return vg(a,u,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case y:M=10;break t;case v:M=9;break t;case E:M=11;break t;case S:M=14;break t;case N:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=si(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function os(e,n,a,o){return e=si(7,e,o,n),e.lanes=a,e}function vg(e,n,a,o){e=si(22,e,o,n),e.elementType=L,e.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=u._current;if(h===null)throw Error(s(456));if(!(u._pendingVisibility&2)){var M=ha(h,2);M!==null&&(u._pendingVisibility|=2,Un(M,h,2))}},attach:function(){var h=u._current;if(h===null)throw Error(s(456));if(u._pendingVisibility&2){var M=ha(h,2);M!==null&&(u._pendingVisibility&=-3,Un(M,h,2))}}};return e.stateNode=u,e}function df(e,n,a){return e=si(6,e,null,n),e.lanes=a,e}function pf(e,n,a){return n=si(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Xi(e){e.flags|=4}function xg(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!i0(n)){if(n=ni.current,n!==null&&((ye&4194176)===ye?Ei!==null:(ye&62914560)!==ye&&!(ye&536870912)||n!==Ei))throw Jr=vu,zp;e.flags|=8192}}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ae():536870912,e.lanes|=n,Ks|=n)}function go(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&31457280,o|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Jx(e,n,a){var o=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Hi(ln),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,fi!==null&&(Mf(fi),fi=null))),Xe(n),null;case 26:return a=n.memoizedState,e===null?(Xi(n),a!==null?(Xe(n),xg(n,a)):(Xe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Xi(n),Xe(n),xg(n,a)):(Xe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Xi(n),Xe(n),n.flags&=-16777217),null;case 27:Zt(n),a=Me.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}e=_e.current,Yr(n)?Op(n):(e=Zg(u,o,a),n.stateNode=e,Xi(n))}return Xe(n),null;case 5:if(Zt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}if(e=_e.current,Yr(n))Op(n);else{switch(u=jl(Me.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[an]=n,e[sn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(xn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xi(n)}}return Xe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Xi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Me.current,Yr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||kg(e.nodeValue,a)),e||Qa(n)}else e=jl(e).createTextNode(o),e[an]=n,n.stateNode=e}return Xe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Yr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[an]=n}else Zr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Xe(n),u=!1}else fi!==null&&(Mf(fi),fi=null),u=!0;if(!u)return n.flags&256?(zi(n),n):(zi(n),null)}if(zi(n),n.flags&128)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),Xe(n),null;case 4:return le(),e===null&&Nf(n.stateNode.containerInfo),Xe(n),null;case 10:return Hi(n.type),Xe(n),null;case 19:if(Pt(on),u=n.memoizedState,u===null)return Xe(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)go(u,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(h=xl(e),h!==null){for(n.flags|=128,go(u,!1),e=h.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)_g(a,e),a=a.sibling;return Ht(on,on.current&1|2),n.child}e=e.sibling}u.tail!==null&&mt()>Bl&&(n.flags|=128,o=!0,go(u,!1),n.lanes=4194304)}else{if(!o)if(e=xl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),go(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Re)return Xe(n),null}else 2*mt()-u.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,o=!0,go(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=mt(),n.sibling=null,e=on.current,Ht(on,o?e&1|2:e&1),n):(Xe(n),null);case 22:case 23:return zi(n),Su(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?a&536870912&&!(n.flags&128)&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Pt($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(ln),Xe(n),null;case 25:return null}throw Error(s(156,n.tag))}function $x(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(ln),le(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Zt(n),null;case 13:if(zi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Zr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Pt(on),null;case 4:return le(),null;case 10:return Hi(n.type),null;case 22:case 23:return zi(n),Su(),e!==null&&Pt($a),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(ln),null;case 25:return null;default:return null}}function Sg(e,n){switch(gu(n),n.tag){case 3:Hi(ln),le();break;case 26:case 27:case 5:Zt(n);break;case 4:le();break;case 13:zi(n);break;case 19:Pt(on);break;case 10:Hi(n.type);break;case 22:case 23:zi(n),Su(),e!==null&&Pt($a);break;case 24:Hi(ln)}}var tS={getCacheForType:function(e){var n=Mn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},eS=typeof WeakMap=="function"?WeakMap:Map,We=0,He=null,me=null,ye=0,Ge=0,kn=null,Wi=!1,Zs=!1,mf=!1,qi=0,je=0,ba=0,ls=0,gf=0,ri=0,Ks=0,_o=null,bi=null,_f=!1,vf=0,Bl=1/0,Il=null,Aa=null,Fl=!1,cs=null,vo=0,xf=0,Sf=null,xo=0,yf=null;function Xn(){if(We&2&&ye!==0)return ye&-ye;if(R.T!==null){var e=Gs;return e!==0?e:Cf()}return Ir()}function yg(){ri===0&&(ri=!(ye&536870912)||Re?nn():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ri}function Un(e,n,a){(e===He&&Ge===2||e.cancelPendingCommit!==null)&&(Qs(e,0),ji(e,ye,ri,!1)),Cn(e,a),(!(We&2)||e!==He)&&(e===He&&(!(We&2)&&(ls|=a),je===4&&ji(e,ye,ri,!1)),Ai(e))}function Mg(e,n,a){if(We&6)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||ie(e,n),u=o?aS(e,n):bf(e,n,!0),h=o;do{if(u===0){Zs&&!o&&ji(e,n,0,!1);break}else if(u===6)ji(e,n,0,!Wi);else{if(a=e.current.alternate,h&&!nS(a)){u=bf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var w=e;u=_o;var P=w.current.memoizedState.isDehydrated;if(P&&(Qs(w,M).flags|=256),M=bf(w,M,!1),M!==2){if(mf&&!P){w.errorRecoveryDisabledLanes|=h,ls|=h,u=4;break t}h=bi,bi=u,h!==null&&Mf(h)}u=M}if(h=!1,u!==2)continue}}if(u===1){Qs(e,0),ji(e,n,0,!0);break}t:{switch(o=e,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){ji(o,n,ri,!Wi);break t}break;case 2:bi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(h=vf+300-mt(),10<h)){if(ji(o,n,ri,!Wi),Lt(o,0)!==0)break t;o.timeoutHandle=qg(Eg.bind(null,o,a,bi,Il,_f,n,ri,ls,Ks,Wi,2,-0,0),h);break t}Eg(o,a,bi,Il,_f,n,ri,ls,Ks,Wi,0,-0,0)}}break}while(!0);Ai(e)}function Mf(e){bi===null?bi=e:bi.push.apply(bi,e)}function Eg(e,n,a,o,u,h,M,w,P,k,pt,St,rt){var dt=n.subtreeFlags;if((dt&8192||(dt&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:BS},dg(n),n=FS(),n!==null)){e.cancelPendingCommit=n(Dg.bind(null,e,a,o,u,M,w,P,1,St,rt)),ji(e,h,M,!k);return}Dg(e,a,o,u,M,w,P,pt,St,rt)}function nS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Hn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ji(e,n,a,o){n&=~gf,n&=~ls,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Jt(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&Br(e,a,n)}function Hl(){return We&6?!0:(So(0),!1)}function Ef(){if(me!==null){if(Ge===0)var e=me.return;else e=me,Fi=as=null,wu(e),Fs=null,$r=0,e=me;for(;e!==null;)Sg(e.alternate,e),e=e.return;me=null}}function Qs(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ef(),He=e,me=a=Ta(e.current,null),ye=n,Ge=0,kn=null,Wi=!1,Zs=ie(e,n),mf=!1,Ks=ri=gf=ls=ba=je=0,bi=_o=null,_f=!1,n&8&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Jt(o),h=1<<u;n|=e[u],o&=~h}return qi=n,ul(),a}function Tg(e,n){he=null,R.H=Ti,n===Qr?(n=Fp(),Ge=3):n===zp?(n=Fp(),Ge=4):Ge=n===Bm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,me===null&&(je=1,Dl(e,$n(n,e.current)))}function bg(){var e=R.H;return R.H=Ti,e===null?Ti:e}function Ag(){var e=R.A;return R.A=tS,e}function Tf(){je=4,Wi||(ye&4194176)!==ye&&ni.current!==null||(Zs=!0),!(ba&134217727)&&!(ls&134217727)||He===null||ji(He,ye,ri,!1)}function bf(e,n,a){var o=We;We|=2;var u=bg(),h=Ag();(He!==e||ye!==n)&&(Il=null,Qs(e,n)),n=!1;var M=je;t:do try{if(Ge!==0&&me!==null){var w=me,P=kn;switch(Ge){case 8:Ef(),M=6;break t;case 3:case 2:case 6:ni.current===null&&(n=!0);var k=Ge;if(Ge=0,kn=null,Js(e,w,P,k),a&&Zs){M=0;break t}break;default:k=Ge,Ge=0,kn=null,Js(e,w,P,k)}}iS(),M=je;break}catch(pt){Tg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,Fi=as=null,We=o,R.H=u,R.A=h,me===null&&(He=null,ye=0,ul()),M}function iS(){for(;me!==null;)Rg(me)}function aS(e,n){var a=We;We|=2;var o=bg(),u=Ag();He!==e||ye!==n?(Il=null,Bl=mt()+500,Qs(e,n)):Zs=ie(e,n);t:do try{if(Ge!==0&&me!==null){n=me;var h=kn;e:switch(Ge){case 1:Ge=0,kn=null,Js(e,n,h,1);break;case 2:if(Bp(h)){Ge=0,kn=null,wg(n);break}n=function(){Ge===2&&He===e&&(Ge=7),Ai(e)},h.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Bp(h)?(Ge=0,kn=null,wg(n)):(Ge=0,kn=null,Js(e,n,h,7));break;case 5:var M=null;switch(me.tag){case 26:M=me.memoizedState;case 5:case 27:var w=me;if(!M||i0(M)){Ge=0,kn=null;var P=w.sibling;if(P!==null)me=P;else{var k=w.return;k!==null?(me=k,Gl(k)):me=null}break e}}Ge=0,kn=null,Js(e,n,h,5);break;case 6:Ge=0,kn=null,Js(e,n,h,6);break;case 8:Ef(),je=6;break t;default:throw Error(s(462))}}sS();break}catch(pt){Tg(e,pt)}while(!0);return Fi=as=null,R.H=o,R.A=u,We=a,me!==null?0:(He=null,ye=0,ul(),je)}function sS(){for(;me!==null&&!A();)Rg(me)}function Rg(e){var n=Zm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?Gl(e):me=n}function wg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:wu(n);default:Sg(a,n),n=me=_g(n,qi),n=Zm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?Gl(e):me=n}function Js(e,n,a,o){Fi=as=null,wu(n),Fs=null,$r=0;var u=n.return;try{if(jx(e,u,n,a,ye)){je=1,Dl(e,$n(a,e.current)),me=null;return}}catch(h){if(u!==null)throw me=u,h;je=1,Dl(e,$n(a,e.current)),me=null;return}n.flags&32768?(Re||o===1?e=!0:Zs||ye&536870912?e=!1:(Wi=e=!0,(o===2||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),Cg(n,e)):Gl(n)}function Gl(e){var n=e;do{if(n.flags&32768){Cg(n,Wi);return}e=n.return;var a=Jx(n.alternate,n,qi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);je===0&&(je=5)}function Cg(e,n){do{var a=$x(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);je=6,me=null}function Dg(e,n,a,o,u,h,M,w,P,k){var pt=R.T,St=F.p;try{F.p=2,R.T=null,rS(e,n,a,o,St,u,h,M,w,P,k)}finally{R.T=pt,F.p=St}}function rS(e,n,a,o,u,h,M,w){do $s();while(cs!==null);if(We&6)throw Error(s(327));var P=e.finishedWork;if(o=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var k=P.lanes|P.childLanes;if(k|=du,tl(e,o,k,h,M,w),e===He&&(me=He=null,ye=0),!(P.subtreeFlags&10256)&&!(P.flags&10256)||Fl||(Fl=!0,xf=k,Sf=a,uS(Ut,function(){return $s(),null})),a=(P.flags&15990)!==0,P.subtreeFlags&15990||a?(a=R.T,R.T=null,h=F.p,F.p=2,M=We,We|=4,Zx(e,P),ug(P,e),Dx(Bf,e.containerInfo),$l=!!zf,Bf=zf=null,e.current=P,rg(e,P.alternate,P),at(),We=M,F.p=h,R.T=a):e.current=P,Fl?(Fl=!1,cs=e,vo=o):Ug(e,k),k=e.pendingLanes,k===0&&(Aa=null),Ft(P.stateNode),Ai(e),n!==null)for(u=e.onRecoverableError,P=0;P<n.length;P++)k=n[P],u(k.value,{componentStack:k.stack});return vo&3&&$s(),k=e.pendingLanes,o&4194218&&k&42?e===yf?xo++:(xo=0,yf=e):xo=0,So(0),null}function Ug(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function $s(){if(cs!==null){var e=cs,n=xf;xf=0;var a=Rs(vo),o=R.T,u=F.p;try{if(F.p=32>a?32:a,R.T=null,cs===null)var h=!1;else{a=Sf,Sf=null;var M=cs,w=vo;if(cs=null,vo=0,We&6)throw Error(s(331));var P=We;if(We|=4,mg(M.current),hg(M,M.current,w,a),We=P,So(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Qt,M)}catch{}h=!0}return h}finally{F.p=u,R.T=o,Ug(e,n)}}return!1}function Lg(e,n,a){n=$n(a,n),n=Vu(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(Cn(e,2),Ai(e))}function Fe(e,n,a){if(e.tag===3)Lg(e,e,a);else for(;n!==null;){if(n.tag===3){Lg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=$n(a,e),a=Pm(2),o=Sa(n,a,2),o!==null&&(zm(a,o,n,e),Cn(o,2),Ai(o));break}}n=n.return}}function Af(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new eS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(mf=!0,u.add(a),e=oS.bind(null,e,n,a),n.then(e,e))}function oS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(ye&a)===a&&(je===4||je===3&&(ye&62914560)===ye&&300>mt()-vf?!(We&2)&&Qs(e,0):gf|=a,Ks===ye&&(Ks=0)),Ai(e)}function Ng(e,n){n===0&&(n=Ae()),e=ha(e,n),e!==null&&(Cn(e,n),Ai(e))}function lS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ng(e,a)}function cS(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Ng(e,a)}function uS(e,n){return Kt(e,n)}var Vl=null,tr=null,Rf=!1,kl=!1,wf=!1,us=0;function Ai(e){e!==tr&&e.next===null&&(tr===null?Vl=tr=e:tr=tr.next=e),kl=!0,Rf||(Rf=!0,hS(fS))}function So(e,n){if(!wf&&kl){wf=!0;do for(var a=!1,o=Vl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-Jt(42|e)+1)-1,h&=u&~(M&~w),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(a=!0,zg(o,h))}else h=ye,h=Lt(o,o===He?h:0),!(h&3)||ie(o,h)||(a=!0,zg(o,h));o=o.next}while(a);wf=!1}}function fS(){kl=Rf=!1;var e=0;us!==0&&(SS()&&(e=us),us=0);for(var n=mt(),a=null,o=Vl;o!==null;){var u=o.next,h=Og(o,n);h===0?(o.next=null,a===null?Vl=u:a.next=u,u===null&&(tr=a)):(a=o,(e!==0||h&3)&&(kl=!0)),o=u}So(e)}function Og(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Jt(h),w=1<<M,P=u[M];P===-1?(!(w&a)||w&o)&&(u[M]=Ve(w,n)):P<=n&&(e.expiredLanes|=w),h&=~w}if(n=He,a=ye,a=Lt(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&Ge===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&O(o),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&O(o),Rs(a)){case 2:case 8:a=Wt;break;case 32:a=Ut;break;case 268435456:a=ge;break;default:a=Ut}return o=Pg.bind(null,e),a=Kt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&O(o),e.callbackPriority=2,e.callbackNode=null,2}function Pg(e,n){var a=e.callbackNode;if($s()&&e.callbackNode!==a)return null;var o=ye;return o=Lt(e,e===He?o:0),o===0?null:(Mg(e,o,n),Og(e,mt()),e.callbackNode!=null&&e.callbackNode===a?Pg.bind(null,e):null)}function zg(e,n){if($s())return null;Mg(e,n,!0)}function hS(e){MS(function(){We&6?Kt(gt,e):e()})}function Cf(){return us===0&&(us=nn()),us}function Bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Ig(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function dS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Bg((u[sn]||null).action),M=o.submitter;M&&(n=(n=M[sn]||null)?Bg(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var w=new ol("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(us!==0){var P=M?Ig(u,M):new FormData(u);Bu(a,{pending:!0,data:P,method:u.method,action:h},null,P)}}else typeof h=="function"&&(w.preventDefault(),P=M?Ig(u,M):new FormData(u),Bu(a,{pending:!0,data:P,method:u.method,action:h},h,P))},currentTarget:u}]})}}for(var Df=0;Df<Dp.length;Df++){var Uf=Dp[Df],pS=Uf.toLowerCase(),mS=Uf[0].toUpperCase()+Uf.slice(1);ui(pS,"on"+mS)}ui(bp,"onAnimationEnd"),ui(Ap,"onAnimationIteration"),ui(Rp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Lx,"onTransitionRun"),ui(Nx,"onTransitionStart"),ui(Ox,"onTransitionCancel"),ui(wp,"onTransitionEnd"),ne("onMouseEnter",["mouseout","mouseover"]),ne("onMouseLeave",["mouseout","mouseover"]),ne("onPointerEnter",["pointerout","pointerover"]),ne("onPointerLeave",["pointerout","pointerover"]),te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),te("onBeforeInput",["compositionend","keypress","textInput","paste"]),te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Fg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var w=o[M],P=w.instance,k=w.currentTarget;if(w=w.listener,P!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=k;try{h(u)}catch(pt){Cl(pt)}u.currentTarget=null,h=P}else for(M=0;M<o.length;M++){if(w=o[M],P=w.instance,k=w.currentTarget,w=w.listener,P!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=k;try{h(u)}catch(pt){Cl(pt)}u.currentTarget=null,h=P}}}}function xe(e,n){var a=n[ws];a===void 0&&(a=n[ws]=new Set);var o=e+"__bubble";a.has(o)||(Hg(n,e,2,!1),a.add(o))}function Lf(e,n,a){var o=0;n&&(o|=4),Hg(a,e,o,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Xl]){e[Xl]=!0,Vt.forEach(function(a){a!=="selectionchange"&&(gS.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Lf("selectionchange",!1,n))}}function Hg(e,n,a,o){switch(c0(n)){case 2:var u=VS;break;case 8:u=kS;break;default:u=qf}a=u.bind(null,n,a,e),u=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Of(e,n,a,o,u){var h=o;if(!(n&1)&&!(n&2)&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var w=o.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&(P=M.stateNode.containerInfo,P===u||P.nodeType===8&&P.parentNode===u))return;M=M.return}for(;w!==null;){if(M=st(w),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=h=M;continue t}w=w.parentNode}}o=o.return}ep(function(){var k=h,pt=Jc(a),St=[];t:{var rt=Cp.get(e);if(rt!==void 0){var dt=ol,jt=e;switch(e){case"keypress":if(sl(a)===0)break t;case"keydown":case"keyup":dt=cx;break;case"focusin":jt="focus",dt=au;break;case"focusout":jt="blur",dt=au;break;case"beforeblur":case"afterblur":dt=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=hx;break;case bp:case Ap:case Rp:dt=tx;break;case wp:dt=px;break;case"scroll":case"scrollend":dt=Zv;break;case"wheel":dt=gx;break;case"copy":case"cut":case"paste":dt=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=rp;break;case"toggle":case"beforetoggle":dt=vx}var se=(n&4)!==0,Ye=!se&&(e==="scroll"||e==="scrollend"),K=se?rt!==null?rt+"Capture":null:rt;se=[];for(var V=k,J;V!==null;){var vt=V;if(J=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||J===null||K===null||(vt=Fr(V,K),vt!=null&&se.push(Mo(V,vt,J))),Ye)break;V=V.return}0<se.length&&(rt=new dt(rt,jt,null,a,pt),St.push({event:rt,listeners:se}))}}if(!(n&7)){t:{if(rt=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",rt&&a!==Qc&&(jt=a.relatedTarget||a.fromElement)&&(st(jt)||jt[Li]))break t;if((dt||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,dt?(jt=a.relatedTarget||a.toElement,dt=k,jt=jt?st(jt):null,jt!==null&&(Ye=X(jt),se=jt.tag,jt!==Ye||se!==5&&se!==27&&se!==6)&&(jt=null)):(dt=null,jt=k),dt!==jt)){if(se=ap,vt="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(se=rp,vt="onPointerLeave",K="onPointerEnter",V="pointer"),Ye=dt==null?rt:Y(dt),J=jt==null?rt:Y(jt),rt=new se(vt,V+"leave",dt,a,pt),rt.target=Ye,rt.relatedTarget=J,vt=null,st(pt)===k&&(se=new se(K,V+"enter",jt,a,pt),se.target=J,se.relatedTarget=Ye,vt=se),Ye=vt,dt&&jt)e:{for(se=dt,K=jt,V=0,J=se;J;J=er(J))V++;for(J=0,vt=K;vt;vt=er(vt))J++;for(;0<V-J;)se=er(se),V--;for(;0<J-V;)K=er(K),J--;for(;V--;){if(se===K||K!==null&&se===K.alternate)break e;se=er(se),K=er(K)}se=null}else se=null;dt!==null&&Gg(St,rt,dt,se,!1),jt!==null&&Ye!==null&&Gg(St,Ye,jt,se,!0)}}t:{if(rt=k?Y(k):window,dt=rt.nodeName&&rt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&rt.type==="file")var Gt=pp;else if(hp(rt))if(mp)Gt=wx;else{Gt=Ax;var pe=bx}else dt=rt.nodeName,!dt||dt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?k&&Kc(k.elementType)&&(Gt=pp):Gt=Rx;if(Gt&&(Gt=Gt(e,k))){dp(St,Gt,a,pt);break t}pe&&pe(e,rt,k),e==="focusout"&&k&&rt.type==="number"&&k.memoizedProps.value!=null&&Qn(rt,"number",rt.value)}switch(pe=k?Y(k):window,e){case"focusin":(hp(pe)||pe.contentEditable==="true")&&(Ns=pe,uu=k,jr=null);break;case"focusout":jr=uu=Ns=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Ep(St,a,pt);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":Ep(St,a,pt)}var Yt;if(ru)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Ls?up(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(op&&a.locale!=="ko"&&(Ls||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Ls&&(Yt=np()):(fa=pt,eu="value"in fa?fa.value:fa.textContent,Ls=!0)),pe=Wl(k,ee),0<pe.length&&(ee=new sp(ee,e,null,a,pt),St.push({event:ee,listeners:pe}),Yt?ee.data=Yt:(Yt=fp(a),Yt!==null&&(ee.data=Yt)))),(Yt=Sx?yx(e,a):Mx(e,a))&&(ee=Wl(k,"onBeforeInput"),0<ee.length&&(pe=new sp("onBeforeInput","beforeinput",null,a,pt),St.push({event:pe,listeners:ee}),pe.data=Yt)),dS(St,e,k,a,pt)}Fg(St,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Fr(e,a),u!=null&&o.unshift(Mo(e,u,h)),u=Fr(e,n),u!=null&&o.push(Mo(e,u,h))),e=e.return}return o}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gg(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var w=a,P=w.alternate,k=w.stateNode;if(w=w.tag,P!==null&&P===o)break;w!==5&&w!==26&&w!==27||k===null||(P=k,u?(k=Fr(a,h),k!=null&&M.unshift(Mo(a,k,P))):u||(k=Fr(a,h),k!=null&&M.push(Mo(a,k,P)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var _S=/\r\n?/g,vS=/\u0000|\uFFFD/g;function Vg(e){return(typeof e=="string"?e:""+e).replace(_S,`
`).replace(vS,"")}function kg(e,n){return n=Vg(n),Vg(e)===n}function ql(){}function ze(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Cs(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Cs(e,""+o);break;case"className":Xt(e,"class",o);break;case"tabIndex":Xt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,o);break;case"style":$d(e,o,h);break;case"data":if(n!=="object"){Xt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=il(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=il(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ql);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=il(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ve(e,"popover",o);break;case"xlinkActuate":rn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":rn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":rn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":rn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":rn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":rn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":rn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":rn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":rn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jv.get(a)||a,ve(e,a,o))}}function Pf(e,n,a,o,u,h){switch(a){case"style":$d(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Cs(e,o):(typeof o=="number"||typeof o=="bigint")&&Cs(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ve(e,a,o)}}}function xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,h,M,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),o&&ze(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var w=h=M=u=null,P=null,k=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":M=pt;break;case"checked":P=pt;break;case"defaultChecked":k=pt;break;case"value":h=pt;break;case"defaultValue":w=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:ze(e,n,o,pt,a,null)}}ci(e,h,w,P,k,M,u,!1),fn(e);return;case"select":xe("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":M=w;break;case"multiple":o=w;default:ze(e,n,u,w,a,null)}n=h,a=M,e.multiple=!!o,n!=null?Ni(e,!!o,n,!1):a!=null&&Ni(e,!!o,a,!0);return;case"textarea":xe("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(w=a[M],w!=null))switch(M){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:ze(e,n,M,w,a,null)}Qd(e,o,u,h),fn(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,P,o,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)xe(yo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,k,o,a,null)}return;default:if(Kc(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Pf(e,n,pt,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&ze(e,n,w,o,a,null))}function xS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,w=null,P=null,k=null,pt=null;for(dt in a){var St=a[dt];if(a.hasOwnProperty(dt)&&St!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":P=St;default:o.hasOwnProperty(dt)||ze(e,n,dt,null,o,St)}}for(var rt in o){var dt=o[rt];if(St=a[rt],o.hasOwnProperty(rt)&&(dt!=null||St!=null))switch(rt){case"type":h=dt;break;case"name":u=dt;break;case"checked":k=dt;break;case"defaultChecked":pt=dt;break;case"value":M=dt;break;case"defaultValue":w=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==St&&ze(e,n,rt,dt,o,St)}}yn(e,M,w,P,k,pt,h,u);return;case"select":dt=M=w=rt=null;for(h in a)if(P=a[h],a.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":dt=P;default:o.hasOwnProperty(h)||ze(e,n,h,null,o,P)}for(u in o)if(h=o[u],P=a[u],o.hasOwnProperty(u)&&(h!=null||P!=null))switch(u){case"value":rt=h;break;case"defaultValue":w=h;break;case"multiple":M=h;default:h!==P&&ze(e,n,u,h,o,P)}n=w,a=M,o=dt,rt!=null?Ni(e,!!a,rt,!1):!!o!=!!a&&(n!=null?Ni(e,!!a,n,!0):Ni(e,!!a,a?[]:"",!1));return;case"textarea":dt=rt=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ze(e,n,w,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":rt=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&ze(e,n,M,u,o,h)}Kd(e,rt,dt);return;case"option":for(var jt in a)if(rt=a[jt],a.hasOwnProperty(jt)&&rt!=null&&!o.hasOwnProperty(jt))switch(jt){case"selected":e.selected=!1;break;default:ze(e,n,jt,null,o,rt)}for(P in o)if(rt=o[P],dt=a[P],o.hasOwnProperty(P)&&rt!==dt&&(rt!=null||dt!=null))switch(P){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:ze(e,n,P,rt,o,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)rt=a[se],a.hasOwnProperty(se)&&rt!=null&&!o.hasOwnProperty(se)&&ze(e,n,se,null,o,rt);for(k in o)if(rt=o[k],dt=a[k],o.hasOwnProperty(k)&&rt!==dt&&(rt!=null||dt!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:ze(e,n,k,rt,o,dt)}return;default:if(Kc(n)){for(var Ye in a)rt=a[Ye],a.hasOwnProperty(Ye)&&rt!==void 0&&!o.hasOwnProperty(Ye)&&Pf(e,n,Ye,void 0,o,rt);for(pt in o)rt=o[pt],dt=a[pt],!o.hasOwnProperty(pt)||rt===dt||rt===void 0&&dt===void 0||Pf(e,n,pt,rt,o,dt);return}}for(var K in a)rt=a[K],a.hasOwnProperty(K)&&rt!=null&&!o.hasOwnProperty(K)&&ze(e,n,K,null,o,rt);for(St in o)rt=o[St],dt=a[St],!o.hasOwnProperty(St)||rt===dt||rt==null&&dt==null||ze(e,n,St,rt,o,dt)}var zf=null,Bf=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function Xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function SS(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var qg=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(e){return jg.resolve(null).then(e).catch(ES)}:qg;function ES(e){setTimeout(function(){throw e})}function Hf(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(o===0){e.removeChild(u),Do(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=u}while(a);Do(n)}function Gf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gf(a),Z(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function TS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[C])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function bS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Yg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Zg(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var oi=new Map,Kg=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Yi=F.d;F.d={f:AS,r:RS,D:wS,C:CS,L:DS,m:US,X:NS,S:LS,M:OS};function AS(){var e=Yi.f(),n=Hl();return e||n}function RS(e){var n=ot(e);n!==null&&n.tag===5&&n.type==="form"?Em(n):Yi.r(e)}var nr=typeof document>"u"?null:document;function Qg(e,n,a){var o=nr;if(o&&typeof n=="string"&&n){var u=hn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Kg.has(u)||(Kg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),xn(n,"link",e),Rt(n),o.head.appendChild(n)))}}function wS(e){Yi.D(e),Qg("dns-prefetch",e,null)}function CS(e,n){Yi.C(e,n),Qg("preconnect",e,n)}function DS(e,n,a){Yi.L(e,n,a);var o=nr;if(o&&e&&n){var u='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hn(a.imageSizes)+'"]')):u+='[href="'+hn(e)+'"]';var h=u;switch(n){case"style":h=ir(e);break;case"script":h=ar(e)}oi.has(h)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Eo(h))||n==="script"&&o.querySelector(To(h))||(n=o.createElement("link"),xn(n,"link",e),Rt(n),o.head.appendChild(n)))}}function US(e,n){Yi.m(e,n);var a=nr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hn(o)+'"][href="'+hn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ar(e)}if(!oi.has(h)&&(e=b({rel:"modulepreload",href:e},n),oi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(h)))return}o=a.createElement("link"),xn(o,"link",e),Rt(o),a.head.appendChild(o)}}}function LS(e,n,a){Yi.S(e,n,a);var o=nr;if(o&&e){var u=bt(o).hoistableStyles,h=ir(e);n=n||"default";var M=u.get(h);if(!M){var w={loading:0,preload:null};if(M=o.querySelector(Eo(h)))w.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(h))&&Vf(e,a);var P=M=o.createElement("link");Rt(P),xn(P,"link",e),P._p=new Promise(function(k,pt){P.onload=k,P.onerror=pt}),P.addEventListener("load",function(){w.loading|=1}),P.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Zl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:w},u.set(h,M)}}}function NS(e,n){Yi.X(e,n);var a=nr;if(a&&e){var o=bt(a).hoistableScripts,u=ar(e),h=o.get(u);h||(h=a.querySelector(To(u)),h||(e=b({src:e,async:!0},n),(n=oi.get(u))&&kf(e,n),h=a.createElement("script"),Rt(h),xn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function OS(e,n){Yi.M(e,n);var a=nr;if(a&&e){var o=bt(a).hoistableScripts,u=ar(e),h=o.get(u);h||(h=a.querySelector(To(u)),h||(e=b({src:e,async:!0,type:"module"},n),(n=oi.get(u))&&kf(e,n),h=a.createElement("script"),Rt(h),xn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Jg(e,n,a,o){var u=(u=Me.current)?Yl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ir(a.href),a=bt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ir(a.href);var h=bt(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(Eo(e)))&&!h._p&&(M.instance=h,M.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),h||PS(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(a),a=bt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ir(e){return'href="'+hn(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function $g(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function PS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),xn(n,"link",a),Rt(n),e.head.appendChild(n))}function ar(e){return'[src="'+hn(e)+'"]'}function To(e){return"script[async]"+e}function t0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+hn(a.href)+'"]');if(o)return n.instance=o,Rt(o),o;var u=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Rt(o),xn(o,"style",u),Zl(o,a.precedence,e),n.instance=o;case"stylesheet":u=ir(a.href);var h=e.querySelector(Eo(u));if(h)return n.state.loading|=4,n.instance=h,Rt(h),h;o=$g(a),(u=oi.get(u))&&Vf(o,u),h=(e.ownerDocument||e).createElement("link"),Rt(h);var M=h;return M._p=new Promise(function(w,P){M.onload=w,M.onerror=P}),xn(h,"link",o),n.state.loading|=4,Zl(h,a.precedence,e),n.instance=h;case"script":return h=ar(a.src),(u=e.querySelector(To(h)))?(n.instance=u,Rt(u),u):(o=a,(u=oi.get(h))&&(o=b({},a),kf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Rt(u),xn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(o=n.instance,n.state.loading|=4,Zl(o,a.precedence,e));return n.instance}function Zl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var w=o[M];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function e0(e,n,a){if(Kl===null){var o=new Map,u=Kl=new Map;u.set(a,o)}else u=Kl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[C]||h[an]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var w=o.get(M);w?w.push(h):o.set(M,[h])}}return o}function n0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function zS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var bo=null;function BS(){}function IS(e,n,a){if(bo===null)throw Error(s(475));var o=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var u=ir(a.href),h=e.querySelector(Eo(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Ql.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,Rt(h);return}h=e.ownerDocument||e,a=$g(a),(u=oi.get(u))&&Vf(a,u),h=h.createElement("link"),Rt(h);var M=h;M._p=new Promise(function(w,P){M.onload=w,M.onerror=P}),xn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(o.count++,n=Ql.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function FS(){if(bo===null)throw Error(s(475));var e=bo;return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function Xf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(HS,e),Jl=null,Ql.call(e))}function HS(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var o=a.get(null);else{a=new Map,Jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=Ql.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:y,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function GS(e,n,a,o,u,h,M,w){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.hiddenUpdates=wn(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function a0(e,n,a,o,u,h,M,w,P,k,pt,St){return e=new GS(e,n,a,M,w,P,k,St),n=1,h===!0&&(n|=24),h=si(3,null,null,n),e.current=h,h.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},ef(h),e}function s0(e){return e?(e=zs,e):zs}function r0(e,n,a,o,u,h){u=s0(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Sa(e,o,n),a!==null&&(Un(a,e,n),lo(a,e,n))}function o0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){o0(e,n),(e=e.alternate)&&o0(e,n)}function l0(e){if(e.tag===13){var n=ha(e,67108864);n!==null&&Un(n,e,67108864),Wf(e,67108864)}}var $l=!0;function VS(e,n,a,o){var u=R.T;R.T=null;var h=F.p;try{F.p=2,qf(e,n,a,o)}finally{F.p=h,R.T=u}}function kS(e,n,a,o){var u=R.T;R.T=null;var h=F.p;try{F.p=8,qf(e,n,a,o)}finally{F.p=h,R.T=u}}function qf(e,n,a,o){if($l){var u=jf(o);if(u===null)Of(e,n,o,tc,a),u0(e,o);else if(WS(u,e,n,a,o))o.stopPropagation();else if(u0(e,o),n&4&&-1<XS.indexOf(e)){for(;u!==null;){var h=ot(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Dt(h.pendingLanes);if(M!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var P=1<<31-Jt(M);w.entanglements[1]|=P,M&=~P}Ai(h),!(We&6)&&(Bl=mt()+500,So(0))}}break;case 13:w=ha(h,2),w!==null&&Un(w,h,2),Hl(),Wf(h,2)}if(h=jf(o),h===null&&Of(e,n,o,tc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Of(e,n,o,null,a)}}function jf(e){return e=Jc(e),Yf(e)}var tc=null;function Yf(e){if(tc=null,e=st(e),e!==null){var n=X(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=ht(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function c0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case gt:return 2;case Wt:return 8;case Ut:case Bt:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Zf=!1,Ra=null,wa=null,Ca=null,Ro=new Map,wo=new Map,Da=[],XS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u0(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Co(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ot(n),n!==null&&l0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function WS(e,n,a,o,u){switch(n){case"focusin":return Ra=Co(Ra,e,n,a,o,u),!0;case"dragenter":return wa=Co(wa,e,n,a,o,u),!0;case"mouseover":return Ca=Co(Ca,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Ro.set(h,Co(Ro.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,wo.set(h,Co(wo.get(h)||null,e,n,a,o,u)),!0}return!1}function f0(e){var n=st(e.target);if(n!==null){var a=X(n);if(a!==null){if(n=a.tag,n===13){if(n=ht(a),n!==null){e.blockedOn=n,el(e.priority,function(){if(a.tag===13){var o=Xn(),u=ha(a,o);u!==null&&Un(u,a,o),Wf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Qc=o,a.target.dispatchEvent(o),Qc=null}else return n=ot(a),n!==null&&l0(n),e.blockedOn=a,!1;n.shift()}return!0}function h0(e,n,a){ec(e)&&a.delete(n)}function qS(){Zf=!1,Ra!==null&&ec(Ra)&&(Ra=null),wa!==null&&ec(wa)&&(wa=null),Ca!==null&&ec(Ca)&&(Ca=null),Ro.forEach(h0),wo.forEach(h0)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,qS)))}var ic=null;function d0(e){ic!==e&&(ic=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yf(o||a)===null)continue;break}var h=ot(a);h!==null&&(e.splice(n,3),n-=3,Bu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Do(e){function n(P){return nc(P,e)}Ra!==null&&nc(Ra,e),wa!==null&&nc(wa,e),Ca!==null&&nc(Ca,e),Ro.forEach(n),wo.forEach(n);for(var a=0;a<Da.length;a++){var o=Da[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)f0(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[sn]||null;if(typeof h=="function")M||d0(a);else if(M){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[sn]||null)w=M.formAction;else if(Yf(u)!==null)continue}else w=M.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),d0(a)}}}function Kf(e){this._internalRoot=e}ac.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Xn();r0(a,o,e,n,null,null)},ac.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&$s(),r0(e.current,2,null,e,null,null),Hl(),n[Li]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ir();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&f0(e)}};var p0=t.version;if(p0!=="19.0.0")throw Error(s(527,p0,"19.0.0"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=it(n),e=e!==null?At(e):null,e=e===null?null:e.stateNode,e};var jS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:R,findFiberByHostInstance:st,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Qt=sc.inject(jS),qt=sc}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Um,h=Lm,M=Nm,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=a0(e,1,!1,null,null,a,o,u,h,M,w,null),e[Li]=n.current,Nf(e.nodeType===8?e.parentNode:e),new Kf(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Um,M=Lm,w=Nm,P=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),n=a0(e,1,!0,n,a??null,o,u,h,M,w,P,k),n.context=s0(null),a=n.current,o=Xn(),u=xa(o),u.callback=null,Sa(a,u,o),n.current.lanes=o,Cn(n,o),Ai(n),e[Li]=n.current,Nf(e),new ac(n)},Lo.version="19.0.0",Lo}var T0;function ly(){if(T0)return $f.exports;T0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),$f.exports=oy(),$f.exports}var cy=ly();W_();/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},ko.apply(this,arguments)}var Ha;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Ha||(Ha={}));const b0="popstate";function uy(r){r===void 0&&(r={});function t(s,l){let{pathname:c,search:f,hash:d}=s.location;return kh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:j_(l)}return hy(t,i,null,r)}function en(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function q_(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fy(){return Math.random().toString(36).substr(2,8)}function A0(r,t){return{usr:r.state,key:r.key,idx:t}}function kh(r,t,i,s){return i===void 0&&(i=null),ko({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof t=="string"?Lr(t):t,{state:i,key:t&&t.key||s||fy()})}function j_(r){let{pathname:t="/",search:i="",hash:s=""}=r;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function Lr(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substr(i),r=r.substr(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substr(s),r=r.substr(0,s)),r&&(t.pathname=r)}return t}function hy(r,t,i,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,d=Ha.Pop,p=null,m=g();m==null&&(m=0,f.replaceState(ko({},f.state,{idx:m}),""));function g(){return(f.state||{idx:null}).idx}function _(){d=Ha.Pop;let x=g(),S=x==null?null:x-m;m=x,p&&p({action:d,location:T.location,delta:S})}function v(x,S){d=Ha.Push;let N=kh(T.location,x,S);m=g()+1;let L=A0(N,m),D=T.createHref(N);try{f.pushState(L,"",D)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(D)}c&&p&&p({action:d,location:T.location,delta:1})}function y(x,S){d=Ha.Replace;let N=kh(T.location,x,S);m=g();let L=A0(N,m),D=T.createHref(N);f.replaceState(L,"",D),c&&p&&p({action:d,location:T.location,delta:0})}function E(x){let S=l.location.origin!=="null"?l.location.origin:l.location.href,N=typeof x=="string"?x:j_(x);return N=N.replace(/ $/,"%20"),en(S,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,S)}let T={get action(){return d},get location(){return r(l,f)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(b0,_),p=x,()=>{l.removeEventListener(b0,_),p=null}},createHref(x){return t(l,x)},createURL:E,encodeLocation(x){let S=E(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:v,replace:y,go(x){return f.go(x)}};return T}var R0;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(R0||(R0={}));function dy(r,t,i){return i===void 0&&(i="/"),py(r,t,i)}function py(r,t,i,s){let l=typeof t=="string"?Lr(t):t,c=K_(l.pathname||"/",i);if(c==null)return null;let f=Y_(r);my(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=Ry(c);d=Ty(f[p],m)}return d}function Y_(r,t,i,s){t===void 0&&(t=[]),i===void 0&&(i=[]),s===void 0&&(s="");let l=(c,f,d)=>{let p={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(en(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let m=Es([s,p.relativePath]),g=i.concat(p);c.children&&c.children.length>0&&(en(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Y_(c.children,t,g,m)),!(c.path==null&&!c.index)&&t.push({path:m,score:My(m,c.index),routesMeta:g})};return r.forEach((c,f)=>{var d;if(c.path===""||!((d=c.path)!=null&&d.includes("?")))l(c,f);else for(let p of Z_(c.path))l(c,f,p)}),t}function Z_(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Z_(s.join("/")),d=[];return d.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...f),d.map(p=>r.startsWith("/")&&p===""?"/":p)}function my(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:Ey(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}const gy=/^:[\w-]+$/,_y=3,vy=2,xy=1,Sy=10,yy=-2,w0=r=>r==="*";function My(r,t){let i=r.split("/"),s=i.length;return i.some(w0)&&(s+=yy),t&&(s+=vy),i.filter(l=>!w0(l)).reduce((l,c)=>l+(gy.test(c)?_y:c===""?xy:Sy),s)}function Ey(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function Ty(r,t,i){let{routesMeta:s}=r,l={},c="/",f=[];for(let d=0;d<s.length;++d){let p=s[d],m=d===s.length-1,g=c==="/"?t:t.slice(c.length)||"/",_=by({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Es([c,_.pathname]),pathnameBase:Uy(Es([c,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(c=Es([c,_.pathnameBase]))}return f}function by(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=Ay(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((m,g,_)=>{let{paramName:v,isOptional:y}=g;if(v==="*"){let T=d[_]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const E=d[_];return y&&!E?m[v]=void 0:m[v]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:r}}function Ay(r,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),q_(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function Ry(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return q_(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),r}}function K_(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function wy(r,t){t===void 0&&(t="/");let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Lr(r):r;return{pathname:i?i.startsWith("/")?i:Cy(i,t):t,search:Ly(s),hash:Ny(l)}}function Cy(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ih(r,t,i,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dy(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Q_(r,t){let i=Dy(r);return t?i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase):i.map(s=>s.pathnameBase)}function J_(r,t,i,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=Lr(r):(l=ko({},r),en(!l.pathname||!l.pathname.includes("?"),ih("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),ih("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),ih("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let _=t.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}d=_>=0?t[_]:"/"}let p=wy(l,d),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}const Es=r=>r.join("/").replace(/\/\/+/g,"/"),Uy=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ny=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Oy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const $_=["post","put","patch","delete"];new Set($_);const Py=["get",...$_];new Set(Py);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Xo.apply(this,arguments)}const Pd=Tt.createContext(null),zy=Tt.createContext(null),jo=Tt.createContext(null),kc=Tt.createContext(null),As=Tt.createContext({outlet:null,matches:[],isDataRoute:!1}),tv=Tt.createContext(null);function Yo(){return Tt.useContext(kc)!=null}function Xc(){return Yo()||en(!1),Tt.useContext(kc).location}function ev(r){Tt.useContext(jo).static||Tt.useLayoutEffect(r)}function By(){let{isDataRoute:r}=Tt.useContext(As);return r?Ky():Iy()}function Iy(){Yo()||en(!1);let r=Tt.useContext(Pd),{basename:t,future:i,navigator:s}=Tt.useContext(jo),{matches:l}=Tt.useContext(As),{pathname:c}=Xc(),f=JSON.stringify(Q_(l,i.v7_relativeSplatPath)),d=Tt.useRef(!1);return ev(()=>{d.current=!0}),Tt.useCallback(function(m,g){if(g===void 0&&(g={}),!d.current)return;if(typeof m=="number"){s.go(m);return}let _=J_(m,JSON.parse(f),c,g.relative==="path");r==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:Es([t,_.pathname])),(g.replace?s.replace:s.push)(_,g.state,g)},[t,s,f,c,r])}function Fy(r,t){return Hy(r,t)}function Hy(r,t,i,s){Yo()||en(!1);let{navigator:l}=Tt.useContext(jo),{matches:c}=Tt.useContext(As),f=c[c.length-1],d=f?f.params:{};f&&f.pathname;let p=f?f.pathnameBase:"/";f&&f.route;let m=Xc(),g;if(t){var _;let x=typeof t=="string"?Lr(t):t;p==="/"||(_=x.pathname)!=null&&_.startsWith(p)||en(!1),g=x}else g=m;let v=g.pathname||"/",y=v;if(p!=="/"){let x=p.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=dy(r,{pathname:y}),T=Wy(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},d,x.params),pathname:Es([p,l.encodeLocation?l.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?p:Es([p,l.encodeLocation?l.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),c,i,s);return t&&T?Tt.createElement(kc.Provider,{value:{location:Xo({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Ha.Pop}},T):T}function Gy(){let r=Zy(),t=Oy(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Tt.createElement(Tt.Fragment,null,Tt.createElement("h2",null,"Unexpected Application Error!"),Tt.createElement("h3",{style:{fontStyle:"italic"}},t),i?Tt.createElement("pre",{style:l},i):null,null)}const Vy=Tt.createElement(Gy,null);class ky extends Tt.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?Tt.createElement(As.Provider,{value:this.props.routeContext},Tt.createElement(tv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xy(r){let{routeContext:t,match:i,children:s}=r,l=Tt.useContext(Pd);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),Tt.createElement(As.Provider,{value:t},s)}function Wy(r,t,i,s){var l;if(t===void 0&&(t=[]),i===void 0&&(i=null),s===void 0&&(s=null),r==null){var c;if(!i)return null;if(i.errors)r=i.matches;else if((c=s)!=null&&c.v7_partialHydration&&t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let f=r,d=(l=i)==null?void 0:l.errors;if(d!=null){let g=f.findIndex(_=>_.route.id&&(d==null?void 0:d[_.route.id])!==void 0);g>=0||en(!1),f=f.slice(0,Math.min(f.length,g+1))}let p=!1,m=-1;if(i&&s&&s.v7_partialHydration)for(let g=0;g<f.length;g++){let _=f[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:v,errors:y}=i,E=_.route.loader&&v[_.route.id]===void 0&&(!y||y[_.route.id]===void 0);if(_.route.lazy||E){p=!0,m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}return f.reduceRight((g,_,v)=>{let y,E=!1,T=null,x=null;i&&(y=d&&_.route.id?d[_.route.id]:void 0,T=_.route.errorElement||Vy,p&&(m<0&&v===0?(Qy("route-fallback"),E=!0,x=null):m===v&&(E=!0,x=_.route.hydrateFallbackElement||null)));let S=t.concat(f.slice(0,v+1)),N=()=>{let L;return y?L=T:E?L=x:_.route.Component?L=Tt.createElement(_.route.Component,null):_.route.element?L=_.route.element:L=g,Tt.createElement(Xy,{match:_,routeContext:{outlet:g,matches:S,isDataRoute:i!=null},children:L})};return i&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?Tt.createElement(ky,{location:i.location,revalidation:i.revalidation,component:T,error:y,children:N(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):N()},null)}var nv=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(nv||{}),iv=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(iv||{});function qy(r){let t=Tt.useContext(Pd);return t||en(!1),t}function jy(r){let t=Tt.useContext(zy);return t||en(!1),t}function Yy(r){let t=Tt.useContext(As);return t||en(!1),t}function av(r){let t=Yy(),i=t.matches[t.matches.length-1];return i.route.id||en(!1),i.route.id}function Zy(){var r;let t=Tt.useContext(tv),i=jy(),s=av();return t!==void 0?t:(r=i.errors)==null?void 0:r[s]}function Ky(){let{router:r}=qy(nv.UseNavigateStable),t=av(iv.UseNavigateStable),i=Tt.useRef(!1);return ev(()=>{i.current=!0}),Tt.useCallback(function(l,c){c===void 0&&(c={}),i.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,Xo({fromRouteId:t},c)))},[r,t])}const C0={};function Qy(r,t,i){C0[r]||(C0[r]=!0)}const D0={};function Jy(r,t){D0[t]||(D0[t]=!0,console.warn(t))}const U0=(r,t,i)=>Jy(r,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+r+"` future flag to opt-in early. ")+("For more information, see "+i+"."));function $y(r,t){r!=null&&r.v7_startTransition||U0("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),r!=null&&r.v7_relativeSplatPath||U0("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function L0(r){let{to:t,replace:i,state:s,relative:l}=r;Yo()||en(!1);let{future:c,static:f}=Tt.useContext(jo),{matches:d}=Tt.useContext(As),{pathname:p}=Xc(),m=By(),g=J_(t,Q_(d,c.v7_relativeSplatPath),p,l==="path"),_=JSON.stringify(g);return Tt.useEffect(()=>m(JSON.parse(_),{replace:i,state:s,relative:l}),[m,_,l,i,s]),null}function Nc(r){en(!1)}function tM(r){let{basename:t="/",children:i=null,location:s,navigationType:l=Ha.Pop,navigator:c,static:f=!1,future:d}=r;Yo()&&en(!1);let p=t.replace(/^\/*/,"/"),m=Tt.useMemo(()=>({basename:p,navigator:c,static:f,future:Xo({v7_relativeSplatPath:!1},d)}),[p,d,c,f]);typeof s=="string"&&(s=Lr(s));let{pathname:g="/",search:_="",hash:v="",state:y=null,key:E="default"}=s,T=Tt.useMemo(()=>{let x=K_(g,p);return x==null?null:{location:{pathname:x,search:_,hash:v,state:y,key:E},navigationType:l}},[p,g,_,v,y,E,l]);return T==null?null:Tt.createElement(jo.Provider,{value:m},Tt.createElement(kc.Provider,{children:i,value:T}))}function eM(r){let{children:t,location:i}=r;return Fy(Xh(t),i)}new Promise(()=>{});function Xh(r,t){t===void 0&&(t=[]);let i=[];return Tt.Children.forEach(r,(s,l)=>{if(!Tt.isValidElement(s))return;let c=[...t,l];if(s.type===Tt.Fragment){i.push.apply(i,Xh(s.props.children,c));return}s.type!==Nc&&en(!1),!s.props.index||!s.props.children||en(!1);let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Xh(s.props.children,c)),i.push(f)}),i}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const nM="6";try{window.__reactRouterVersion=nM}catch{}const iM="startTransition",N0=iy[iM];function aM(r){let{basename:t,children:i,future:s,window:l}=r,c=Tt.useRef();c.current==null&&(c.current=uy({window:l,v5Compat:!0}));let f=c.current,[d,p]=Tt.useState({action:f.action,location:f.location}),{v7_startTransition:m}=s||{},g=Tt.useCallback(_=>{m&&N0?N0(()=>p(_)):p(_)},[p,m]);return Tt.useLayoutEffect(()=>f.listen(g),[f,g]),Tt.useEffect(()=>$y(s),[s]),Tt.createElement(tM,{basename:t,children:i,location:d.location,navigationType:d.action,navigator:f,future:s})}var O0;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(O0||(O0={}));var P0;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(P0||(P0={}));const ia={links:{home:"/",instagram:"https://www.instagram.com/joshhrunclub/"},images:{logo:{src:"/logo.png"}},brand:{name:"Joshh Run Club",homeLabel:"Joshh Run Club home",handle:"@joshhrunclub"},countdown:{label:"Next start in",liveText:"We're running right now. Check Instagram for today's route.",units:{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},time:"6:30 AM",city:"Jaipur"},redirects:[{from:"/runs",to:"/#runs"},{from:"/about",to:"/#story"},{from:"/founders",to:"/#founders"}]};function sM(r,t){Tt.useEffect(()=>{document.title=r;let i=document.querySelector('meta[name="description"]');i||(i=document.createElement("meta"),i.name="description",document.head.append(i)),i.content=t},[r,t])}var rM="1.1.18";function sv(r,t,i){return Math.max(r,Math.min(t,i))}function oM(r,t,i){return(1-i)*r+i*t}function lM(r,t,i,s){return oM(r,t,1-Math.exp(-i*s))}function cM(r,t){return(r%t+t)%t}var uM=class{constructor(){$t(this,"isRunning",!1);$t(this,"value",0);$t(this,"from",0);$t(this,"to",0);$t(this,"currentTime",0);$t(this,"lerp");$t(this,"duration");$t(this,"easing");$t(this,"onUpdate")}advance(r){var i;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const s=sv(0,this.currentTime/this.duration,1);t=s>=1;const l=t?1:this.easing(s);this.value=this.from+(this.to-this.from)*l}else this.lerp?(this.value=lM(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(i=this.onUpdate)==null||i.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:i,duration:s,easing:l,onStart:c,onUpdate:f}){this.from=this.value=r,this.to=t,this.lerp=i,this.duration=s,this.easing=l,this.currentTime=0,this.isRunning=!0,c==null||c(),this.onUpdate=f}};function fM(r,t){let i;return function(...s){let l=this;clearTimeout(i),i=setTimeout(()=>{i=void 0,r.apply(l,s)},t)}}var hM=class{constructor(r,t,{autoResize:i=!0,debounce:s=250}={}){$t(this,"width",0);$t(this,"height",0);$t(this,"scrollHeight",0);$t(this,"scrollWidth",0);$t(this,"debouncedResize");$t(this,"wrapperResizeObserver");$t(this,"contentResizeObserver");$t(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});$t(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});$t(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,i&&(this.debouncedResize=fM(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},rv=class{constructor(){$t(this,"events",{})}emit(r,...t){var s;let i=this.events[r]||[];for(let l=0,c=i.length;l<c;l++)(s=i[l])==null||s.call(i,...t)}on(r,t){var i;return(i=this.events[r])!=null&&i.push(t)||(this.events[r]=[t]),()=>{var s;this.events[r]=(s=this.events[r])==null?void 0:s.filter(l=>t!==l)}}off(r,t){var i;this.events[r]=(i=this.events[r])==null?void 0:i.filter(s=>t!==s)}destroy(){this.events={}}},z0=100/6,La={passive:!1},dM=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){$t(this,"touchStart",{x:0,y:0});$t(this,"lastDelta",{x:0,y:0});$t(this,"window",{width:0,height:0});$t(this,"emitter",new rv);$t(this,"onTouchStart",r=>{const{clientX:t,clientY:i}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});$t(this,"onTouchMove",r=>{const{clientX:t,clientY:i}=r.targetTouches?r.targetTouches[0]:r,s=-(t-this.touchStart.x)*this.options.touchMultiplier,l=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:s,y:l},this.emitter.emit("scroll",{deltaX:s,deltaY:l,event:r})});$t(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});$t(this,"onWheel",r=>{let{deltaX:t,deltaY:i,deltaMode:s}=r;const l=s===1?z0:s===2?this.window.width:1,c=s===1?z0:s===2?this.window.height:1;t*=l,i*=c,t*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:r})});$t(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,La),this.element.addEventListener("touchstart",this.onTouchStart,La),this.element.addEventListener("touchmove",this.onTouchMove,La),this.element.addEventListener("touchend",this.onTouchEnd,La)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,La),this.element.removeEventListener("touchstart",this.onTouchStart,La),this.element.removeEventListener("touchmove",this.onTouchMove,La),this.element.removeEventListener("touchend",this.onTouchEnd,La)}},pM=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:i=r,smoothWheel:s=!0,syncTouch:l=!1,syncTouchLerp:c=.075,touchInertiaMultiplier:f=35,duration:d,easing:p=G=>Math.min(1,1.001-Math.pow(2,-10*G)),lerp:m=.1,infinite:g=!1,orientation:_="vertical",gestureOrientation:v="vertical",touchMultiplier:y=1,wheelMultiplier:E=1,autoResize:T=!0,prevent:x,virtualScroll:S,overscroll:N=!0,autoRaf:L=!1,__experimental__naiveDimensions:D=!1}={}){$t(this,"_isScrolling",!1);$t(this,"_isStopped",!1);$t(this,"_isLocked",!1);$t(this,"_preventNextNativeScrollEvent",!1);$t(this,"_resetVelocityTimeout",null);$t(this,"__rafID",null);$t(this,"isTouching");$t(this,"time",0);$t(this,"userData",{});$t(this,"lastVelocity",0);$t(this,"velocity",0);$t(this,"direction",0);$t(this,"options");$t(this,"targetScroll");$t(this,"animatedScroll");$t(this,"animate",new uM);$t(this,"emitter",new rv);$t(this,"dimensions");$t(this,"virtualScroll");$t(this,"onPointerDown",r=>{r.button===1&&this.reset()});$t(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:i,event:s}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:i,event:s}),s.ctrlKey||s.lenisStopPropagation)return;const l=s.type.includes("touch"),c=s.type.includes("wheel");this.isTouching=s.type==="touchstart"||s.type==="touchmove";const f=t===0&&i===0;if(this.options.syncTouch&&l&&s.type==="touchstart"&&f&&!this.isStopped&&!this.isLocked){this.reset();return}const p=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&t===0;if(f||p)return;let m=s.composedPath();m=m.slice(0,m.indexOf(this.rootElement));const g=this.options.prevent;if(m.find(x=>{var S,N,L;return x instanceof HTMLElement&&(typeof g=="function"&&(g==null?void 0:g(x))||((S=x.hasAttribute)==null?void 0:S.call(x,"data-lenis-prevent"))||l&&((N=x.hasAttribute)==null?void 0:N.call(x,"data-lenis-prevent-touch"))||c&&((L=x.hasAttribute)==null?void 0:L.call(x,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){s.preventDefault();return}if(!(this.options.syncTouch&&l||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),s.lenisStopPropagation=!0;return}let v=i;this.options.gestureOrientation==="both"?v=Math.abs(i)>Math.abs(t)?i:t:this.options.gestureOrientation==="horizontal"&&(v=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&i>0||this.animatedScroll===this.limit&&i<0))&&(s.lenisStopPropagation=!0),s.preventDefault();const y=l&&this.options.syncTouch,T=l&&s.type==="touchend"&&Math.abs(v)>5;T&&(v=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+v,{programmatic:!1,...y?{lerp:T?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});$t(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});$t(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=rM,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:i,smoothWheel:s,syncTouch:l,syncTouchLerp:c,touchInertiaMultiplier:f,duration:d,easing:p,lerp:m,infinite:g,gestureOrientation:v,orientation:_,touchMultiplier:y,wheelMultiplier:E,autoResize:T,prevent:x,virtualScroll:S,overscroll:N,autoRaf:L,__experimental__naiveDimensions:D},this.dimensions=new hM(r,t,{autoResize:T}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new dM(i,{touchMultiplier:y,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(r,{offset:t=0,immediate:i=!1,lock:s=!1,duration:l=this.options.duration,easing:c=this.options.easing,lerp:f=this.options.lerp,onStart:d,onComplete:p,force:m=!1,programmatic:g=!0,userData:_}={}){if(!((this.isStopped||this.isLocked)&&!m)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let v;if(typeof r=="string"?v=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(v=r),v){if(this.options.wrapper!==window){const E=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?E.left:E.top}const y=v.getBoundingClientRect();r=(this.isHorizontal?y.left:y.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?g&&(this.targetScroll=this.animatedScroll=this.scroll):r=sv(0,r,this.limit),r===this.targetScroll){d==null||d(this),p==null||p(this);return}if(this.userData=_??{},i){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p==null||p(this),this.userData={};return}g||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:l,easing:c,lerp:f,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",d==null||d(this)},onUpdate:(v,y)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),g&&(this.targetScroll=v),y||this.emit(),y&&(this.reset(),this.emit(),p==null||p(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?cM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const mM=.1,gM=120;let ea=null;function _M(){return ea=new pM({lerp:mM,autoRaf:!0}),()=>{ea==null||ea.destroy(),ea=null}}function vM(){return parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0}function ov(r,t=0){const i=r?document.getElementById(r):null;if(r&&!i){t<gM&&requestAnimationFrame(()=>{ov(r,t+1)});return}if(ea){ea.resize(),i?ea.scrollTo(i,{offset:-vM()}):ea.scrollTo(0,{immediate:!0});return}i?i.scrollIntoView():scrollTo(0,0)}function xM(){Tt.useEffect(()=>{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)return _M()},[])}function yr({href:r=ia.links.instagram,...t}){return nt.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",...t})}const sr={weekday:0,hour:6,minute:30,utcOffsetMinutes:330,durationMinutes:120},ta=6e4,rc=24*60*ta;function B0(r=new Date){const t=sr.utcOffsetMinutes*ta,i=new Date(r.getTime()+t),s=Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),l=(sr.weekday-i.getUTCDay()+7)%7;let c=s+l*rc+(sr.hour*60+sr.minute)*ta-t;const f=c+sr.durationMinutes*ta;r.getTime()>=f&&(c+=7*rc);const d=r.getTime()>=c&&r.getTime()<c+sr.durationMinutes*ta,p=Math.max(c-r.getTime(),0);return{start:new Date(c),live:d,remaining:{days:Math.floor(p/rc),hours:Math.floor(p%rc/(60*ta)),minutes:Math.floor(p%(60*ta)/ta),seconds:Math.floor(p%ta/1e3)}}}function SM(r){return r.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",timeZone:"Asia/Kolkata"})}function Vo(...r){return r.filter(Boolean).join(" ")}const yM=1e3,MM=r=>String(r).padStart(2,"0");function EM({tone:r="dark"}){const{countdown:t}=ia,[i,s]=Tt.useState(()=>B0());Tt.useEffect(()=>{const g=setInterval(()=>{s(B0())},yM);return()=>{clearInterval(g)}},[]);const l=`${SM(i.start)}, ${t.time}, ${t.city}`;if(i.live)return nt.jsxs("div",{className:Vo("countdown",r!=="dark"&&`countdown-${r}`),children:[nt.jsx("p",{className:"countdown-live",children:t.liveText}),nt.jsx("p",{className:"countdown-when",children:l})]});const{days:c,hours:f,minutes:d,seconds:p}=i.remaining,m=[[c,t.units.days],[f,t.units.hours],[d,t.units.minutes],[p,t.units.seconds]];return nt.jsxs("div",{className:Vo("countdown",r!=="dark"&&`countdown-${r}`),children:[nt.jsx("dl",{className:"countdown-clock","aria-label":`${t.label} ${l}`,children:m.map(([g,_])=>nt.jsxs("div",{className:"countdown-cell",children:[nt.jsx("dt",{children:_}),nt.jsx("dd",{"aria-hidden":"true",children:MM(g).split("").map((v,y)=>nt.jsx("span",{className:"digit",children:v},`${String(y)}-${v}`))})]},_))}),nt.jsx("p",{className:"countdown-when",children:l})]})}const ah={meta:{title:"Joshh Run Club, run with us in Jaipur",description:"Joshh Run Club, Jaipur's youth-led running community. 70+ runs hosted, 15,000+ signups, all paces welcome."},masthead:{brand:"Joshh Club",cta:"Join the crew"},hero:{title:"Run with us.",next:"Next run",mark:["JOSHH","RUN","CLUB"],labels:[`Jaipur, Rajasthan
26.9124° N, 75.7873° E`,`Every Sunday
6:30 AM start`,`70+ runs hosted
All paces welcome`,`15,000+ signups
Youth-led community`],reel:[{src:"/photos/joshh-01.jpg",alt:""},{src:"/photos/joshh-26.jpg",alt:""},{src:"/photos/joshh-66.jpg",alt:""},{src:"/photos/joshh-57.jpg",alt:"The Joshh crew gathered behind the club banner"},{src:"/photos/joshh-75.jpg",alt:""},{src:"/photos/joshh-81.jpg",alt:""},{src:"/photos/joshh-84.jpg",alt:""}]},route:{label:"On this route",unit:"km"},chapters:[{id:"start",label:"Start",km:"0.0",indent:0},{id:"story",label:"Story",km:"0.8",indent:1},{id:"runs",label:"Runs",km:"1.7",indent:1},{id:"founders",label:"Founders",km:"2.6",indent:0},{id:"crew",label:"Crew",km:"3.5",indent:1},{id:"faq",label:"First run",km:"4.3",indent:2},{id:"join",label:"Join",km:"5.0",indent:0}],story:{word:"Joshh",engraving:{src:"/photos/joshh-53.jpg",alt:"The crew warming up at Patrika Gate, Jaipur"},doodles:["shoe","coffee","stopwatch","pulse","sun"]},runs:{title:"Somewhere new, every week.",text:"Heritage forts, coffee raves, Hyrox sims. Newest first."},crew:{title:"Faces from the road.",photos:[{src:"/photos/joshh-01.jpg",alt:"Joshh runners with race medals"},{src:"/photos/joshh-26.jpg",alt:"The crew running past old Jaipur shopfronts"},{src:"/photos/joshh-66.jpg",alt:"Joshh crowd selfie"},{src:"/photos/joshh-75.jpg",alt:"A pack of runners on the road"},{src:"/photos/joshh-81.jpg",alt:"Tug of war after the run"},{src:"/photos/joshh-84.jpg",alt:"Runners on a quiet Jaipur road at dawn"},{src:"/photos/joshh-36.jpg",alt:"A runner smiling mid-stride"}]},join:{title:"Come as you are.",text:"DM @joshhrunclub for the next meeting point.",cta:"Message us on Instagram"},footer:{crowd:"/images/jaipur-run-footer-silhouette.png",contact:"Contact",find:"Find us",place:"Jaipur, Rajasthan",when:"Sundays, 6:30 AM",follow:"Follow",instagram:"Instagram",rights:"© 2026 Joshh Run Club"}},oc={intro:{reelLabel:"Past runs"},wall:{more:"More on Instagram"},viewPost:"See it on Instagram",runs:[{date:"2026-11-01",title:"Run for Clean Air",place:"Jaipur",detail:"With Red Tape",photo:{src:"/photos/joshh-06.jpg",alt:"Poster for Run for Clean Air with Red Tape"}},{date:"2026-10-18",title:"Sutra Coffee run",place:"JLN Marg, Jaipur",detail:"With Sutra Coffee and Milk Lab, 6:30 AM",photo:{src:"/photos/joshh-14.jpg",alt:"Poster for the Sutra Coffee run on JLN Marg"}},{date:"2026-10-04",title:"Run and Rave",place:"Jaipur",detail:"With Red Bull F1",photo:{src:"/photos/joshh-22.jpg",alt:"Poster for Run and Rave with the Red Bull F1 car"}},{date:"2026-09-27",title:"Run for the Gold",place:"Gold's Gym, Vaishali Nagar",detail:"6:30 AM",photo:{src:"/photos/joshh-25.jpg",alt:"Poster for Run for the Gold at Gold's Gym"}},{date:"2026-09-12",title:"Ladakh shakeout run",place:"Leh Market, Ladakh",detail:"With COROS, 2 to 3 km",photo:{src:"/photos/joshh-28.jpg",alt:"Poster for the Ladakh shakeout run in Leh"}},{date:"2026-08-30",title:"Heritage Run and Coffee Rave",place:"Amber Fort, Jaipur",detail:"With Jaipur Boating, 6 AM",photo:{src:"/photos/joshh-33.jpg",alt:"Poster for the Heritage Run at Amber Fort"}},{date:"2026-08-02",title:"Friendship Day Rave",place:"Jaipur",detail:"Run, games and a DJ set",photo:{src:"/photos/joshh-48.jpg",alt:"Poster for the Friendship Day run and rave"}},{date:"2026-07-26",title:"Run for Frame",place:"C-Scheme, Jaipur",detail:"With Lenskart, 5 km, 6 AM",photo:{src:"/photos/joshh-51.jpg",alt:"Poster for Run for Frame with Lenskart"}},{date:"2026-07-05",title:"Run and Breathe",place:"Jaipur",detail:"With Breathe Coffee",photo:{src:"/photos/joshh-59.jpg",alt:"Poster for Run and Breathe with Breathe Coffee"}},{date:"2026-06-28",title:"Hyrox simulation",place:"Sports Park Turf, Mansarovar",detail:"70+ athletes",photo:{src:"/photos/joshh-62.jpg",alt:"Poster for the Hyrox simulation"}},{date:"2026-06-07",title:"Coffee Rave",place:"Jaipur",detail:"6 AM",photo:{src:"/photos/joshh-69.jpg",alt:"Poster for the Joshh Coffee Rave"}}]},lc={lead:{title:`Here miles turn
into memories.`,text:"Jaipur's youth-led running community, started by four friends. Running should feel like belonging, not pressure."},faq:{title:"First run? You're in.",items:[{q:"I'm a beginner. Can I join?",a:"Yes. All paces are welcome. Start with what feels comfortable, walk when you need to, and let the crew know it's your first time."},{q:"When and where do you run?",a:"Every Sunday at 6:30 AM in Jaipur. Check @joshhrunclub or send us a DM for the meeting point and route before heading out."},{q:"How do I join the next run?",a:"Head to @joshhrunclub on Instagram. That's where you'll find run announcements and can ask about joining the next Sunday run."},{q:"What should I bring?",a:"Comfortable running shoes, breathable clothes, and water. A club tee isn't required, come as you are."}]}},TM=[{name:"Founder name",role:"Co-founder",bio:"Short bio to come.",photo:null},{name:"Founder name",role:"Co-founder",bio:"Short bio to come.",photo:null},{name:"Founder name",role:"Co-founder",bio:"Short bio to come.",photo:null}],cc={title:`Friends first.
Then a run club.`,text:"Runners, lifters and hybrid athletes who wanted a place where anyone could show up and move together.",photoPending:"Photo to come",people:TM},bM={[-2]:"is-tl",0:"is-main",2:"is-br"};function AM({reel:r,mark:t,labels:i}){const s=Math.floor(r.length/2);return nt.jsxs("div",{className:"intro",children:[nt.jsx("i",{className:"intro-line is-v is-l"}),nt.jsx("i",{className:"intro-line is-v is-r"}),nt.jsx("i",{className:"intro-line is-h is-t"}),nt.jsx("i",{className:"intro-line is-h is-b"}),["tl","tr","bl","br"].map((l,c)=>nt.jsx("span",{className:`intro-dot is-${l}`,"aria-hidden":"true",children:nt.jsx("small",{children:i[c]})},l)),nt.jsx("p",{className:"intro-mark","aria-hidden":"true",children:t.map(l=>nt.jsx("span",{children:l},l))}),r.map((l,c)=>{const f=c-s;return nt.jsx("img",{className:`intro-photo ${bM[f]??"is-gone"}`,src:l.src,alt:l.alt,style:{"--k":f,"--ak":Math.abs(f)}},l.src)})]})}const RM=900,I0=4;function wM({photo:r,className:t,ink:i=!1}){const s=Tt.useRef(null);return Tt.useEffect(()=>{const l=s.current,c=l==null?void 0:l.getContext("2d",{willReadFrequently:!0});if(!l||!c)return;const f=new Image;f.src=r.src,f.onload=()=>{const d=Math.min(1,RM/Math.max(f.width,f.height)),p=Math.round(f.width*d),m=Math.round(f.height*d);l.width=p,l.height=m,c.drawImage(f,0,0,p,m);const g=c.getImageData(0,0,p,m).data,_=new Float32Array(p*m);for(let E=0;E<p*m;E++)_[E]=(g[E*4]*.3+g[E*4+1]*.59+g[E*4+2]*.11)/255;const v=c.createImageData(p,m),y=v.data;for(let E=1;E<m-1;E++)for(let T=1;T<p-1;T++){const x=E*p+T,S=_[x-p+1]+2*_[x+1]+_[x+p+1]-_[x-p-1]-2*_[x-1]-_[x+p-1],N=_[x+p-1]+2*_[x+p]+_[x+p+1]-_[x-p-1]-2*_[x-p]-_[x-p+1],L=Math.min(1,Math.hypot(S,N)*2.2),D=_[x],G=(T+E)%I0===0&&D>.35?D*.55:0,H=(T-E+m)%(I0*2)===0&&D>.65?.35:0,B=Math.max(L>.18?L:0,G,H);y[x*4]=i?28:244,y[x*4+1]=i?28:241,y[x*4+2]=i?31:234,y[x*4+3]=B*255}c.putImageData(v,0,0)}},[r.src,i]),nt.jsx("canvas",{className:t,ref:s,role:"img","aria-label":r.alt})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="170",CM=0,F0=1,DM=2,lv=1,UM=2,Ri=3,Xa=0,Nn=1,na=2,Ga=0,Er=1,H0=2,G0=3,V0=4,LM=5,xs=100,NM=101,OM=102,PM=103,zM=104,BM=200,IM=201,FM=202,HM=203,Wh=204,qh=205,GM=206,VM=207,kM=208,XM=209,WM=210,qM=211,jM=212,YM=213,ZM=214,jh=0,Yh=1,Zh=2,Ar=3,Kh=4,Qh=5,Jh=6,$h=7,cv=0,KM=1,QM=2,Va=0,JM=1,$M=2,tE=3,uv=4,eE=5,nE=6,iE=7,fv=300,Rr=301,wr=302,td=303,ed=304,Wc=306,nd=1e3,ys=1001,id=1002,xi=1003,aE=1004,uc=1005,Ci=1006,sh=1007,Ms=1008,oa=1009,hv=1010,dv=1011,Wo=1012,Bd=1013,Ts=1014,aa=1015,Zo=1016,Id=1017,Fd=1018,Cr=1020,pv=35902,mv=1021,gv=1022,vi=1023,_v=1024,vv=1025,Tr=1026,Dr=1027,xv=1028,Hd=1029,Sv=1030,Gd=1031,Vd=1033,Oc=33776,Pc=33777,zc=33778,Bc=33779,ad=35840,sd=35841,rd=35842,od=35843,ld=36196,cd=37492,ud=37496,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,xd=37816,Sd=37817,yd=37818,Md=37819,Ed=37820,Td=37821,Ic=36492,bd=36494,Ad=36495,yv=36283,Rd=36284,wd=36285,Cd=36286,sE=3200,rE=3201,Mv=0,oE=1,Fa="",jn="srgb",Nr="srgb-linear",qc="linear",Be="srgb",rr=7680,k0=519,lE=512,cE=513,uE=514,Ev=515,fE=516,hE=517,dE=518,pE=519,X0=35044,W0="300 es",sa=2e3,Hc=2001;class Or{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=Math.PI/180,Dd=180/Math.PI;function Ko(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]).toLowerCase()}function In(r,t,i){return Math.max(t,Math.min(i,r))}function mE(r,t){return(r%t+t)%t}function oh(r,t,i){return(1-i)*r+i*t}function No(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(In(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,i,s,l,c,f,d,p,m){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m)}set(t,i,s,l,c,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],g=s[4],_=s[7],v=s[2],y=s[5],E=s[8],T=l[0],x=l[3],S=l[6],N=l[1],L=l[4],D=l[7],G=l[2],H=l[5],B=l[8];return c[0]=f*T+d*N+p*G,c[3]=f*x+d*L+p*H,c[6]=f*S+d*D+p*B,c[1]=m*T+g*N+_*G,c[4]=m*x+g*L+_*H,c[7]=m*S+g*D+_*B,c[2]=v*T+y*N+E*G,c[5]=v*x+y*L+E*H,c[8]=v*S+y*D+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*d*m-s*c*g+s*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*f-d*m,v=d*p-g*c,y=m*c-f*p,E=i*_+s*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*m-g*s)*T,t[2]=(d*s-l*f)*T,t[3]=v*T,t[4]=(g*i-l*p)*T,t[5]=(l*c-d*i)*T,t[6]=y*T,t[7]=(s*p-m*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(lh.makeScale(t,i)),this}rotate(t){return this.premultiply(lh.makeRotation(-t)),this}translate(t,i){return this.premultiply(lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new ue;function Tv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Gc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gE(){const r=Gc("canvas");return r.style.display="block",r}const q0={};function Fo(r){r in q0||(q0[r]=!0,console.warn(r))}function _E(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function vE(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xE(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Te={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===Be&&(r.r=ra(r.r),r.g=ra(r.g),r.b=ra(r.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Be&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fa?qc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,i){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const j0=[.64,.33,.3,.6,.15,.06],Y0=[.2126,.7152,.0722],Z0=[.3127,.329],K0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Nr]:{primaries:j0,whitePoint:Z0,transfer:qc,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:Y0,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:j0,whitePoint:Z0,transfer:Be,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:Y0,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let or;class SE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{or===void 0&&(or=Gc("canvas")),or.width=t.width,or.height=t.height;const s=or.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=or}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ra(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ra(i[s]/255)*255):i[s]=ra(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yE=0;class bv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Ko(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(ch(l[f].image)):c.push(ch(l[f]))}else c=ch(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?SE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ME=0;class An extends Or{constructor(t=An.DEFAULT_IMAGE,i=An.DEFAULT_MAPPING,s=ys,l=ys,c=Ci,f=Ms,d=vi,p=oa,m=An.DEFAULT_ANISOTROPY,g=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Ko(),this.name="",this.source=new bv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nd:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nd:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=fv;An.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,i=0,s=0,l=1){Ie.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],y=p[5],E=p[9],T=p[2],x=p[6],S=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+x)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,D=(y+1)/2,G=(S+1)/2,H=(g+v)/4,B=(_+T)/4,q=(E+x)/4;return L>D&&L>G?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=H/s,c=B/s):D>G?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=H/l,c=q/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=B/c,l=q/c),this.set(s,l,c,i),this}let N=Math.sqrt((x-E)*(x-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(x-E)/N,this.y=(_-T)/N,this.z=(v-g)/N,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EE extends Or{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ie(0,0,t,i),this.scissorTest=!1,this.viewport=new Ie(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new An(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new bv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends EE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Av extends An{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TE extends An{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3];const v=c[f+0],y=c[f+1],E=c[f+2],T=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=v,t[i+1]=y,t[i+2]=E,t[i+3]=T;return}if(_!==T||p!==v||m!==y||g!==E){let x=1-d;const S=p*v+m*y+g*E+_*T,N=S>=0?1:-1,L=1-S*S;if(L>Number.EPSILON){const G=Math.sqrt(L),H=Math.atan2(G,S*N);x=Math.sin(x*H)/G,d=Math.sin(d*H)/G}const D=d*N;if(p=p*x+v*D,m=m*x+y*D,g=g*x+E*D,_=_*x+T*D,x===1-d){const G=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=G,m*=G,g*=G,_*=G}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=c[f],v=c[f+1],y=c[f+2],E=c[f+3];return t[i]=d*E+g*_+p*y-m*v,t[i+1]=p*E+g*v+m*_-d*y,t[i+2]=m*E+g*y+d*v-p*_,t[i+3]=g*E-d*_-p*v-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),_=d(c/2),v=p(s/2),y=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=v*g*_+m*y*E,this._y=m*y*_-v*g*E,this._z=m*g*E+v*y*_,this._w=m*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+m*y*E,this._y=m*y*_-v*g*E,this._z=m*g*E-v*y*_,this._w=m*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-m*y*E,this._y=m*y*_+v*g*E,this._z=m*g*E+v*y*_,this._w=m*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-m*y*E,this._y=m*y*_+v*g*E,this._z=m*g*E-v*y*_,this._w=m*g*_+v*y*E;break;case"YZX":this._x=v*g*_+m*y*E,this._y=m*y*_+v*g*E,this._z=m*g*E-v*y*_,this._w=m*g*_-v*y*E;break;case"XZY":this._x=v*g*_-m*y*E,this._y=m*y*_-v*g*E,this._z=m*g*E+v*y*_,this._w=m*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],v=s+d+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-m)*y,this._z=(f-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+m)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(c-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(f-l)/y,this._x=(c+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(In(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-s*m,this._z=c*g+f*m+s*p-l*d,this._w=f*g-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=f*_+this._w*v,this._x=s*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(J0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(J0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+p*m+f*_-d*g,this.y=s+p*g+d*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return uh.copy(this).projectOnVector(t),this.sub(uh)}reflect(t){return this.sub(uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(In(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new $,J0=new Qo;class Jo{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,pi):pi.fromBufferAttribute(c,f),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),hc.subVectors(this.max,Oo),lr.subVectors(t.a,Oo),cr.subVectors(t.b,Oo),ur.subVectors(t.c,Oo),Na.subVectors(cr,lr),Oa.subVectors(ur,cr),fs.subVectors(lr,ur);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-fs.z,fs.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,fs.z,0,-fs.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-fs.y,fs.x,0];return!fh(i,lr,cr,ur,hc)||(i=[1,0,0,0,1,0,0,0,1],!fh(i,lr,cr,ur,hc))?!1:(dc.crossVectors(Na,Oa),i=[dc.x,dc.y,dc.z],fh(i,lr,cr,ur,hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new $,new $,new $,new $,new $,new $,new $,new $],pi=new $,fc=new Jo,lr=new $,cr=new $,ur=new $,Na=new $,Oa=new $,fs=new $,Oo=new $,hc=new $,dc=new $,hs=new $;function fh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){hs.fromArray(r,c);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),p=t.dot(hs),m=i.dot(hs),g=s.dot(hs);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const bE=new Jo,Po=new $,hh=new $;class kd{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):bE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Po,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(hh)),this.expandByPoint(Po.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new $,dh=new $,pc=new $,Pa=new $,ph=new $,mc=new $,mh=new $;class Rv{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){dh.copy(t).add(i).multiplyScalar(.5),pc.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(dh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(pc),d=Pa.dot(this.direction),p=-Pa.dot(pc),m=Pa.lengthSq(),g=Math.abs(1-f*f);let _,v,y,E;if(g>0)if(_=f*p-d,v=f*d-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,y=_*(_+f*v+2*d)+v*(f*_+v+2*p)+m}else v=c,_=Math.max(0,-(f*v+d)),y=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(f*v+d)),y=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-f*c+d)),v=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+m):(_=Math.max(0,-(f*c+d)),v=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+m);else v=f>0?-c:c,_=Math.max(0,-(f*v+d)),y=-_*_+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(dh).addScaledVector(pc,v),y}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,s,l,c){ph.subVectors(i,t),mc.subVectors(s,t),mh.crossVectors(ph,mc);let f=this.direction.dot(mh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Pa.subVectors(this.origin,t);const p=d*this.direction.dot(mc.crossVectors(Pa,mc));if(p<0)return null;const m=d*this.direction.dot(ph.cross(Pa));if(m<0||p+m>f)return null;const g=-d*Pa.dot(mh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,i,s,l,c,f,d,p,m,g,_,v,y,E,T,x){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m,g,_,v,y,E,T,x)}set(t,i,s,l,c,f,d,p,m,g,_,v,y,E,T,x){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=d,S[13]=p,S[2]=m,S[6]=g,S[10]=_,S[14]=v,S[3]=y,S[7]=E,S[11]=T,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),c=1/fr.setFromMatrixColumn(t,1).length(),f=1/fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,y=f*_,E=d*g,T=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=y+E*m,i[5]=v-T*m,i[9]=-d*p,i[2]=T-v*m,i[6]=E+y*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,y=p*_,E=m*g,T=m*_;i[0]=v+T*d,i[4]=E*d-y,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=y*d-E,i[6]=T+v*d,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,y=p*_,E=m*g,T=m*_;i[0]=v-T*d,i[4]=-f*_,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*g,i[9]=T-v*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,y=f*_,E=d*g,T=d*_;i[0]=p*g,i[4]=E*m-y,i[8]=v*m+T,i[1]=p*_,i[5]=T*m+v,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,y=f*m,E=d*p,T=d*m;i[0]=p*g,i[4]=T-v*_,i[8]=E*_+y,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=y*_+E,i[10]=v-T*_}else if(t.order==="XZY"){const v=f*p,y=f*m,E=d*p,T=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=v*_+T,i[5]=f*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=d*g,i[10]=T*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AE,t,RE)}lookAt(t,i,s){const l=this.elements;return Wn.subVectors(t,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),za.crossVectors(s,Wn),za.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),za.crossVectors(s,Wn)),za.normalize(),gc.crossVectors(Wn,za),l[0]=za.x,l[4]=gc.x,l[8]=Wn.x,l[1]=za.y,l[5]=gc.y,l[9]=Wn.y,l[2]=za.z,l[6]=gc.z,l[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],g=s[1],_=s[5],v=s[9],y=s[13],E=s[2],T=s[6],x=s[10],S=s[14],N=s[3],L=s[7],D=s[11],G=s[15],H=l[0],B=l[4],q=l[8],R=l[12],b=l[1],I=l[5],lt=l[9],tt=l[13],ft=l[2],Q=l[6],z=l[10],et=l[14],X=l[3],ht=l[7],U=l[11],it=l[15];return c[0]=f*H+d*b+p*ft+m*X,c[4]=f*B+d*I+p*Q+m*ht,c[8]=f*q+d*lt+p*z+m*U,c[12]=f*R+d*tt+p*et+m*it,c[1]=g*H+_*b+v*ft+y*X,c[5]=g*B+_*I+v*Q+y*ht,c[9]=g*q+_*lt+v*z+y*U,c[13]=g*R+_*tt+v*et+y*it,c[2]=E*H+T*b+x*ft+S*X,c[6]=E*B+T*I+x*Q+S*ht,c[10]=E*q+T*lt+x*z+S*U,c[14]=E*R+T*tt+x*et+S*it,c[3]=N*H+L*b+D*ft+G*X,c[7]=N*B+L*I+D*Q+G*ht,c[11]=N*q+L*lt+D*z+G*U,c[15]=N*R+L*tt+D*et+G*it,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],T=t[7],x=t[11],S=t[15];return E*(+c*p*_-l*m*_-c*d*v+s*m*v+l*d*y-s*p*y)+T*(+i*p*y-i*m*v+c*f*v-l*f*y+l*m*g-c*p*g)+x*(+i*m*_-i*d*y-c*f*_+s*f*y+c*d*g-s*m*g)+S*(-l*d*g-i*p*_+i*d*v+l*f*_-s*f*v+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],T=t[13],x=t[14],S=t[15],N=_*x*m-T*v*m+T*p*y-d*x*y-_*p*S+d*v*S,L=E*v*m-g*x*m-E*p*y+f*x*y+g*p*S-f*v*S,D=g*T*m-E*_*m+E*d*y-f*T*y-g*d*S+f*_*S,G=E*_*p-g*T*p-E*d*v+f*T*v+g*d*x-f*_*x,H=i*N+s*L+l*D+c*G;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=N*B,t[1]=(T*v*c-_*x*c-T*l*y+s*x*y+_*l*S-s*v*S)*B,t[2]=(d*x*c-T*p*c+T*l*m-s*x*m-d*l*S+s*p*S)*B,t[3]=(_*p*c-d*v*c-_*l*m+s*v*m+d*l*y-s*p*y)*B,t[4]=L*B,t[5]=(g*x*c-E*v*c+E*l*y-i*x*y-g*l*S+i*v*S)*B,t[6]=(E*p*c-f*x*c-E*l*m+i*x*m+f*l*S-i*p*S)*B,t[7]=(f*v*c-g*p*c+g*l*m-i*v*m-f*l*y+i*p*y)*B,t[8]=D*B,t[9]=(E*_*c-g*T*c-E*s*y+i*T*y+g*s*S-i*_*S)*B,t[10]=(f*T*c-E*d*c+E*s*m-i*T*m-f*s*S+i*d*S)*B,t[11]=(g*d*c-f*_*c-g*s*m+i*_*m+f*s*y-i*d*y)*B,t[12]=G*B,t[13]=(g*T*l-E*_*l+E*s*v-i*T*v-g*s*x+i*_*x)*B,t[14]=(E*d*l-f*T*l-E*s*p+i*T*p+f*s*x-i*d*x)*B,t[15]=(f*_*l-g*d*l+g*s*p-i*_*p-f*s*v+i*d*v)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,p=t.z,m=c*f,g=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,_=d+d,v=c*m,y=c*g,E=c*_,T=f*g,x=f*_,S=d*_,N=p*m,L=p*g,D=p*_,G=s.x,H=s.y,B=s.z;return l[0]=(1-(T+S))*G,l[1]=(y+D)*G,l[2]=(E-L)*G,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(v+S))*H,l[6]=(x+N)*H,l[7]=0,l[8]=(E+L)*B,l[9]=(x-N)*B,l[10]=(1-(v+T))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=fr.set(l[0],l[1],l[2]).length();const f=fr.set(l[4],l[5],l[6]).length(),d=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],mi.copy(this);const m=1/c,g=1/f,_=1/d;return mi.elements[0]*=m,mi.elements[1]*=m,mi.elements[2]*=m,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=_,mi.elements[9]*=_,mi.elements[10]*=_,i.setFromRotationMatrix(mi),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=sa){const p=this.elements,m=2*c/(i-t),g=2*c/(s-l),_=(i+t)/(i-t),v=(s+l)/(s-l);let y,E;if(d===sa)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Hc)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=sa){const p=this.elements,m=1/(i-t),g=1/(s-l),_=1/(f-c),v=(i+t)*m,y=(s+l)*g;let E,T;if(d===sa)E=(f+c)*_,T=-2*_;else if(d===Hc)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const fr=new $,mi=new ke,AE=new $(0,0,0),RE=new $(1,1,1),za=new $,gc=new $,Wn=new $,$0=new ke,t_=new Qo;class Ui{constructor(t=0,i=0,s=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(In(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-In(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(In(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-In(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(In(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-In(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return $0.makeRotationFromQuaternion(t),this.setFromRotationMatrix($0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return t_.setFromEuler(this),this.setFromQuaternion(t_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wE=0;const e_=new $,hr=new Qo,Qi=new ke,_c=new $,zo=new $,CE=new $,DE=new Qo,n_=new $(1,0,0),i_=new $(0,1,0),a_=new $(0,0,1),s_={type:"added"},UE={type:"removed"},dr={type:"childadded",child:null},gh={type:"childremoved",child:null};class Rn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new $,i=new Ui,s=new Qo,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ke},normalMatrix:{value:new ue}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(n_,t)}rotateY(t){return this.rotateOnAxis(i_,t)}rotateZ(t){return this.rotateOnAxis(a_,t)}translateOnAxis(t,i){return e_.copy(t).applyQuaternion(this.quaternion),this.position.add(e_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(n_,t)}translateY(t){return this.translateOnAxis(i_,t)}translateZ(t){return this.translateOnAxis(a_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?_c.copy(t):_c.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(zo,_c,this.up):Qi.lookAt(_c,zo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(Qi),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s_),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(UE),gh.child=t,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s_),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,CE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,DE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new $(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new $,Ji=new $,_h=new $,$i=new $,pr=new $,mr=new $,r_=new $,vh=new $,xh=new $,Sh=new $,yh=new Ie,Mh=new Ie,Eh=new Ie;class _i{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),gi.subVectors(t,i),l.cross(gi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){gi.subVectors(l,i),Ji.subVectors(s,i),_h.subVectors(t,i);const f=gi.dot(gi),d=gi.dot(Ji),p=gi.dot(_h),m=Ji.dot(Ji),g=Ji.dot(_h),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(m*p-d*g)*v,E=(f*g-d*p)*v;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,s,l,c,f,d,p){return this.getBarycoord(t,i,s,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,$i.x),p.addScaledVector(f,$i.y),p.addScaledVector(d,$i.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return yh.setScalar(0),Mh.setScalar(0),Eh.setScalar(0),yh.fromBufferAttribute(t,i),Mh.fromBufferAttribute(t,s),Eh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(yh,c.x),f.addScaledVector(Mh,c.y),f.addScaledVector(Eh,c.z),f}static isFrontFacing(t,i,s,l){return gi.subVectors(s,i),Ji.subVectors(t,i),gi.cross(Ji).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),gi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;pr.subVectors(l,s),mr.subVectors(c,s),vh.subVectors(t,s);const p=pr.dot(vh),m=mr.dot(vh);if(p<=0&&m<=0)return i.copy(s);xh.subVectors(t,l);const g=pr.dot(xh),_=mr.dot(xh);if(g>=0&&_<=g)return i.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(pr,f);Sh.subVectors(t,c);const y=pr.dot(Sh),E=mr.dot(Sh);if(E>=0&&y<=E)return i.copy(c);const T=y*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(mr,d);const x=g*E-y*_;if(x<=0&&_-g>=0&&y-E>=0)return r_.subVectors(c,l),d=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(r_,d);const S=1/(x+T+v);return f=T*S,d=v*S,i.copy(s).addScaledVector(pr,f).addScaledVector(mr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Th(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ce{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=mE(t,1),i=In(i,0,1),s=In(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Th(f,c,t+1/3),this.g=Th(f,c,t),this.b=Th(f,c,t-1/3)}return Te.toWorkingColorSpace(this,l),this}setStyle(t,i=jn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=jn){const s=wv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return Te.fromWorkingColorSpace(bn.copy(this),t),Math.round(In(bn.r*255,0,255))*65536+Math.round(In(bn.g*255,0,255))*256+Math.round(In(bn.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.fromWorkingColorSpace(bn.copy(this),i);const s=bn.r,l=bn.g,c=bn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=jn){Te.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,l=bn.b;return t!==jn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(vc);const s=oh(Ba.h,vc.h,i),l=oh(Ba.s,vc.s,i),c=oh(Ba.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ce;Ce.NAMES=wv;let LE=0;class Pr extends Or{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Ko(),this.name="",this.blending=Er,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Wh&&(s.blendSrc=this.blendSrc),this.blendDst!==qh&&(s.blendDst=this.blendDst),this.blendEquation!==xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wd extends Pr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new $,xc=new be;class Di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=X0,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(t),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==X0&&(t.usage=this.usage),t}}class Cv extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Dv extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Zn extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let NE=0;const li=new ke,bh=new Rn,gr=new $,qn=new Jo,Bo=new Jo,gn=new $;class la extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tv(t)?Dv:Cv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,s){return li.makeTranslation(t,i,s),this.applyMatrix4(li),this}scale(t,i,s){return li.makeScale(t,i,s),this.applyMatrix4(li),this}lookAt(t){return bh.lookAt(t),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Zn(s,3))}else{for(let s=0,l=i.count;s<l;s++){const c=t[s];i.setXYZ(s,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];qn.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(qn.min,Bo.min),qn.expandByPoint(gn),gn.addVectors(qn.max,Bo.max),qn.expandByPoint(gn)):(qn.expandByPoint(Bo.min),qn.expandByPoint(Bo.max))}qn.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)gn.fromBufferAttribute(d,m),p&&(gr.fromBufferAttribute(t,m),gn.add(gr)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<s.count;q++)d[q]=new $,p[q]=new $;const m=new $,g=new $,_=new $,v=new be,y=new be,E=new be,T=new $,x=new $;function S(q,R,b){m.fromBufferAttribute(s,q),g.fromBufferAttribute(s,R),_.fromBufferAttribute(s,b),v.fromBufferAttribute(c,q),y.fromBufferAttribute(c,R),E.fromBufferAttribute(c,b),g.sub(m),_.sub(m),y.sub(v),E.sub(v);const I=1/(y.x*E.y-E.x*y.y);isFinite(I)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(I),x.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(I),d[q].add(T),d[R].add(T),d[b].add(T),p[q].add(x),p[R].add(x),p[b].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let q=0,R=N.length;q<R;++q){const b=N[q],I=b.start,lt=b.count;for(let tt=I,ft=I+lt;tt<ft;tt+=3)S(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const L=new $,D=new $,G=new $,H=new $;function B(q){G.fromBufferAttribute(l,q),H.copy(G);const R=d[q];L.copy(R),L.sub(G.multiplyScalar(G.dot(R))).normalize(),D.crossVectors(H,R);const I=D.dot(p[q])<0?-1:1;f.setXYZW(q,L.x,L.y,L.z,I)}for(let q=0,R=N.length;q<R;++q){const b=N[q],I=b.start,lt=b.count;for(let tt=I,ft=I+lt;tt<ft;tt+=3)B(t.getX(tt+0)),B(t.getX(tt+1)),B(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new $,c=new $,f=new $,d=new $,p=new $,m=new $,g=new $,_=new $;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),T=t.getX(v+1),x=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,x),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,x),d.add(g),p.add(g),m.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,v=new m.constructor(p.length*g);let y=0,E=0;for(let T=0,x=p.length;T<x;T++){d.isInterleavedBufferAttribute?y=p[T]*d.data.stride+d.offset:y=p[T]*g;for(let S=0;S<g;S++)v[E++]=m[y++]}return new Di(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new la,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const v=m[g],y=t(v,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const y=m[_];g.push(y.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o_=new ke,ds=new Rv,Sc=new kd,l_=new $,yc=new $,Mc=new $,Ec=new $,Ah=new $,Tc=new $,c_=new $,bc=new $;class Ee extends Rn{constructor(t=new la,i=new Wd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Tc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(Ah.fromBufferAttribute(_,t),f?Tc.addScaledVector(Ah,g):Tc.addScaledVector(Ah.sub(i),g))}i.add(Tc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),ds.copy(t.ray).recast(t.near),!(Sc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Sc,l_)===null||ds.origin.distanceToSquared(l_)>(t.far-t.near)**2))&&(o_.copy(c).invert(),ds.copy(t.ray).applyMatrix4(o_),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const x=v[E],S=f[x.materialIndex],N=Math.max(x.start,y.start),L=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let D=N,G=L;D<G;D+=3){const H=d.getX(D),B=d.getX(D+1),q=d.getX(D+2);l=Ac(this,S,t,s,m,g,_,H,B,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let x=E,S=T;x<S;x+=3){const N=d.getX(x),L=d.getX(x+1),D=d.getX(x+2);l=Ac(this,f,t,s,m,g,_,N,L,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const x=v[E],S=f[x.materialIndex],N=Math.max(x.start,y.start),L=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));for(let D=N,G=L;D<G;D+=3){const H=D,B=D+1,q=D+2;l=Ac(this,S,t,s,m,g,_,H,B,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let x=E,S=T;x<S;x+=3){const N=x,L=x+1,D=x+2;l=Ac(this,f,t,s,m,g,_,N,L,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function OE(r,t,i,s,l,c,f,d){let p;if(t.side===Nn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,t.side===Xa,d),p===null)return null;bc.copy(d),bc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(bc);return m<i.near||m>i.far?null:{distance:m,point:bc.clone(),object:r}}function Ac(r,t,i,s,l,c,f,d,p,m){r.getVertexPosition(d,yc),r.getVertexPosition(p,Mc),r.getVertexPosition(m,Ec);const g=OE(r,t,i,s,yc,Mc,Ec,c_);if(g){const _=new $;_i.getBarycoord(c_,yc,Mc,Ec,_),l&&(g.uv=_i.getInterpolatedAttribute(l,d,p,m,_,new be)),c&&(g.uv1=_i.getInterpolatedAttribute(c,d,p,m,_,new be)),f&&(g.normal=_i.getInterpolatedAttribute(f,d,p,m,_,new $),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new $,materialIndex:0};_i.getNormal(yc,Mc,Ec,v.normal),g.face=v,g.barycoord=_}return g}class Si extends la{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Zn(m,3)),this.setAttribute("normal",new Zn(g,3)),this.setAttribute("uv",new Zn(_,2));function E(T,x,S,N,L,D,G,H,B,q,R){const b=D/B,I=G/q,lt=D/2,tt=G/2,ft=H/2,Q=B+1,z=q+1;let et=0,X=0;const ht=new $;for(let U=0;U<z;U++){const it=U*I-tt;for(let At=0;At<Q;At++){const _t=At*b-lt;ht[T]=_t*N,ht[x]=it*L,ht[S]=ft,m.push(ht.x,ht.y,ht.z),ht[T]=0,ht[x]=0,ht[S]=H>0?1:-1,g.push(ht.x,ht.y,ht.z),_.push(At/B),_.push(1-U/q),et+=1}}for(let U=0;U<q;U++)for(let it=0;it<B;it++){const At=v+it+Q*U,_t=v+it+Q*(U+1),F=v+(it+1)+Q*(U+1),ut=v+(it+1)+Q*U;p.push(At,_t,ut),p.push(_t,F,ut),X+=6}d.addGroup(y,X,R),y+=X,v+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ur(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ln(r){const t={};for(let i=0;i<r.length;i++){const s=Ur(r[i]);for(const l in s)t[l]=s[l]}return t}function PE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Uv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const zE={clone:Ur,merge:Ln};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Pr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=IE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=PE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Lv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new $,u_=new be,f_=new be;class Yn extends Lv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Dd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z)}getViewSize(t,i){return this.getViewBounds(t,u_,f_),i.subVectors(f_,u_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,vr=1;class FE extends Rn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yn(_r,vr,t,i);l.layers=this.layers,this.add(l);const c=new Yn(_r,vr,t,i);c.layers=this.layers,this.add(c);const f=new Yn(_r,vr,t,i);f.layers=this.layers,this.add(f);const d=new Yn(_r,vr,t,i);d.layers=this.layers,this.add(d);const p=new Yn(_r,vr,t,i);p.layers=this.layers,this.add(p);const m=new Yn(_r,vr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Nv extends An{constructor(t,i,s,l,c,f,d,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:Rr,super(t,i,s,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class HE extends bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Nv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ci}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Si(5,5,5),c=new Wa({name:"CubemapFromEquirect",uniforms:Ur(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Nn,blending:Ga});c.uniforms.tEquirect.value=i;const f=new Ee(l,c),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=Ci),new FE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}const Rh=new $,GE=new $,VE=new ue;class _s{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Rh.subVectors(s,i).cross(GE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Rh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||VE.getNormalMatrix(t),l=this.coplanarPoint(Rh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new kd,Rc=new $;class qd{constructor(t=new _s,i=new _s,s=new _s,l=new _s,c=new _s,f=new _s){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa){const s=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],v=l[7],y=l[8],E=l[9],T=l[10],x=l[11],S=l[12],N=l[13],L=l[14],D=l[15];if(s[0].setComponents(p-c,v-m,x-y,D-S).normalize(),s[1].setComponents(p+c,v+m,x+y,D+S).normalize(),s[2].setComponents(p+f,v+g,x+E,D+N).normalize(),s[3].setComponents(p-f,v-g,x-E,D-N).normalize(),s[4].setComponents(p-d,v-_,x-T,D-L).normalize(),i===sa)s[5].setComponents(p+d,v+_,x+T,D+L).normalize();else if(i===Hc)s[5].setComponents(d,_,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?t.max.x:t.min.x,Rc.y=l.normal.y>0?t.max.y:t.min.y,Rc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ov(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function kE(r){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,p,m){const g=p.array,_=p.updateRanges;if(r.bindBuffer(m,d),_.length===0)r.bufferSubData(m,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];r.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}class $o extends la{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,_=t/d,v=i/p,y=[],E=[],T=[],x=[];for(let S=0;S<g;S++){const N=S*v-f;for(let L=0;L<m;L++){const D=L*_-c;E.push(D,-N,0),T.push(0,0,1),x.push(L/d),x.push(1-S/p)}}for(let S=0;S<p;S++)for(let N=0;N<d;N++){const L=N+m*S,D=N+m*(S+1),G=N+1+m*(S+1),H=N+1+m*S;y.push(L,D,H),y.push(D,G,H)}this.setIndex(y),this.setAttribute("position",new Zn(E,3)),this.setAttribute("normal",new Zn(T,3)),this.setAttribute("uv",new Zn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",yT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$T=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ub=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:XE,alphahash_pars_fragment:WE,alphamap_fragment:qE,alphamap_pars_fragment:jE,alphatest_fragment:YE,alphatest_pars_fragment:ZE,aomap_fragment:KE,aomap_pars_fragment:QE,batching_pars_vertex:JE,batching_vertex:$E,begin_vertex:tT,beginnormal_vertex:eT,bsdfs:nT,iridescence_fragment:iT,bumpmap_pars_fragment:aT,clipping_planes_fragment:sT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:lT,color_fragment:cT,color_pars_fragment:uT,color_pars_vertex:fT,color_vertex:hT,common:dT,cube_uv_reflection_fragment:pT,defaultnormal_vertex:mT,displacementmap_pars_vertex:gT,displacementmap_vertex:_T,emissivemap_fragment:vT,emissivemap_pars_fragment:xT,colorspace_fragment:ST,colorspace_pars_fragment:yT,envmap_fragment:MT,envmap_common_pars_fragment:ET,envmap_pars_fragment:TT,envmap_pars_vertex:bT,envmap_physical_pars_fragment:zT,envmap_vertex:AT,fog_vertex:RT,fog_pars_vertex:wT,fog_fragment:CT,fog_pars_fragment:DT,gradientmap_pars_fragment:UT,lightmap_pars_fragment:LT,lights_lambert_fragment:NT,lights_lambert_pars_fragment:OT,lights_pars_begin:PT,lights_toon_fragment:BT,lights_toon_pars_fragment:IT,lights_phong_fragment:FT,lights_phong_pars_fragment:HT,lights_physical_fragment:GT,lights_physical_pars_fragment:VT,lights_fragment_begin:kT,lights_fragment_maps:XT,lights_fragment_end:WT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:jT,logdepthbuf_pars_vertex:YT,logdepthbuf_vertex:ZT,map_fragment:KT,map_pars_fragment:QT,map_particle_fragment:JT,map_particle_pars_fragment:$T,metalnessmap_fragment:t1,metalnessmap_pars_fragment:e1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:a1,morphtarget_pars_vertex:s1,morphtarget_vertex:r1,normal_fragment_begin:o1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:f1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:d1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:_1,packing:v1,premultiplied_alpha_fragment:x1,project_vertex:S1,dithering_fragment:y1,dithering_pars_fragment:M1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:T1,shadowmap_pars_fragment:b1,shadowmap_pars_vertex:A1,shadowmap_vertex:R1,shadowmask_pars_fragment:w1,skinbase_vertex:C1,skinning_pars_vertex:D1,skinning_vertex:U1,skinnormal_vertex:L1,specularmap_fragment:N1,specularmap_pars_fragment:O1,tonemapping_fragment:P1,tonemapping_pars_fragment:z1,transmission_fragment:B1,transmission_pars_fragment:I1,uv_pars_fragment:F1,uv_pars_vertex:H1,uv_vertex:G1,worldpos_vertex:V1,background_vert:k1,background_frag:X1,backgroundCube_vert:W1,backgroundCube_frag:q1,cube_vert:j1,cube_frag:Y1,depth_vert:Z1,depth_frag:K1,distanceRGBA_vert:Q1,distanceRGBA_frag:J1,equirect_vert:$1,equirect_frag:tb,linedashed_vert:eb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:ab,meshlambert_vert:sb,meshlambert_frag:rb,meshmatcap_vert:ob,meshmatcap_frag:lb,meshnormal_vert:cb,meshnormal_frag:ub,meshphong_vert:fb,meshphong_frag:hb,meshphysical_vert:db,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:_b,points_frag:vb,shadow_vert:xb,shadow_frag:Sb,sprite_vert:yb,sprite_frag:Mb},Nt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},wi={basic:{uniforms:Ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Ln([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Ln([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Ln([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Ln([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Ln([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Ln([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Ln([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Ln([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Ln([Nt.common,Nt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Ln([Nt.lights,Nt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};wi.physical={uniforms:Ln([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const wc={r:0,b:0,g:0},ms=new Ui,Eb=new ke;function Tb(r,t,i,s,l,c,f){const d=new Ce(0);let p=c===!0?0:1,m,g,_=null,v=0,y=null;function E(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?i:t).get(L)),L}function T(N){let L=!1;const D=E(N);D===null?S(d,p):D&&D.isColor&&(S(D,1),L=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(N,L){const D=E(L);D&&(D.isCubeTexture||D.mapping===Wc)?(g===void 0&&(g=new Ee(new Si(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Ur(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,H,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ms.copy(L.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(ms)),g.material.toneMapped=Te.getTransfer(D.colorSpace)!==Be,(_!==D||v!==D.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=D,v=D.version,y=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ee(new $o(2,2),new Wa({name:"BackgroundMaterial",uniforms:Ur(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Te.getTransfer(D.colorSpace)!==Be,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,v=D.version,y=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function S(N,L){N.getRGB(wc,Uv(r)),s.buffers.color.setClear(wc.r,wc.g,wc.b,L,f)}return{getClearColor:function(){return d},setClearColor:function(N,L=1){d.set(N),p=L,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,S(d,p)},render:T,addToRenderList:x}}function bb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function d(b,I,lt,tt,ft){let Q=!1;const z=_(tt,lt,I);c!==z&&(c=z,m(c.object)),Q=y(b,tt,lt,ft),Q&&E(b,tt,lt,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(Q||f)&&(f=!1,D(b,I,lt,tt),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return r.createVertexArray()}function m(b){return r.bindVertexArray(b)}function g(b){return r.deleteVertexArray(b)}function _(b,I,lt){const tt=lt.wireframe===!0;let ft=s[b.id];ft===void 0&&(ft={},s[b.id]=ft);let Q=ft[I.id];Q===void 0&&(Q={},ft[I.id]=Q);let z=Q[tt];return z===void 0&&(z=v(p()),Q[tt]=z),z}function v(b){const I=[],lt=[],tt=[];for(let ft=0;ft<i;ft++)I[ft]=0,lt[ft]=0,tt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:lt,attributeDivisors:tt,object:b,attributes:{},index:null}}function y(b,I,lt,tt){const ft=c.attributes,Q=I.attributes;let z=0;const et=lt.getAttributes();for(const X in et)if(et[X].location>=0){const U=ft[X];let it=Q[X];if(it===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),U===void 0||U.attribute!==it||it&&U.data!==it.data)return!0;z++}return c.attributesNum!==z||c.index!==tt}function E(b,I,lt,tt){const ft={},Q=I.attributes;let z=0;const et=lt.getAttributes();for(const X in et)if(et[X].location>=0){let U=Q[X];U===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(U=b.instanceColor));const it={};it.attribute=U,U&&U.data&&(it.data=U.data),ft[X]=it,z++}c.attributes=ft,c.attributesNum=z,c.index=tt}function T(){const b=c.newAttributes;for(let I=0,lt=b.length;I<lt;I++)b[I]=0}function x(b){S(b,0)}function S(b,I){const lt=c.newAttributes,tt=c.enabledAttributes,ft=c.attributeDivisors;lt[b]=1,tt[b]===0&&(r.enableVertexAttribArray(b),tt[b]=1),ft[b]!==I&&(r.vertexAttribDivisor(b,I),ft[b]=I)}function N(){const b=c.newAttributes,I=c.enabledAttributes;for(let lt=0,tt=I.length;lt<tt;lt++)I[lt]!==b[lt]&&(r.disableVertexAttribArray(lt),I[lt]=0)}function L(b,I,lt,tt,ft,Q,z){z===!0?r.vertexAttribIPointer(b,I,lt,ft,Q):r.vertexAttribPointer(b,I,lt,tt,ft,Q)}function D(b,I,lt,tt){T();const ft=tt.attributes,Q=lt.getAttributes(),z=I.defaultAttributeValues;for(const et in Q){const X=Q[et];if(X.location>=0){let ht=ft[et];if(ht===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),ht!==void 0){const U=ht.normalized,it=ht.itemSize,At=t.get(ht);if(At===void 0)continue;const _t=At.buffer,F=At.type,ut=At.bytesPerElement,yt=F===r.INT||F===r.UNSIGNED_INT||ht.gpuType===Bd;if(ht.isInterleavedBufferAttribute){const Et=ht.data,Ct=Et.stride,Pt=ht.offset;if(Et.isInstancedInterleavedBuffer){for(let Ht=0;Ht<X.locationSize;Ht++)S(X.location+Ht,Et.meshPerAttribute);b.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Ht=0;Ht<X.locationSize;Ht++)x(X.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let Ht=0;Ht<X.locationSize;Ht++)L(X.location+Ht,it/X.locationSize,F,U,Ct*ut,(Pt+it/X.locationSize*Ht)*ut,yt)}else{if(ht.isInstancedBufferAttribute){for(let Et=0;Et<X.locationSize;Et++)S(X.location+Et,ht.meshPerAttribute);b.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Et=0;Et<X.locationSize;Et++)x(X.location+Et);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let Et=0;Et<X.locationSize;Et++)L(X.location+Et,it/X.locationSize,F,U,it*ut,it/X.locationSize*Et*ut,yt)}}else if(z!==void 0){const U=z[et];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(X.location,U);break;case 3:r.vertexAttrib3fv(X.location,U);break;case 4:r.vertexAttrib4fv(X.location,U);break;default:r.vertexAttrib1fv(X.location,U)}}}}N()}function G(){q();for(const b in s){const I=s[b];for(const lt in I){const tt=I[lt];for(const ft in tt)g(tt[ft].object),delete tt[ft];delete I[lt]}delete s[b]}}function H(b){if(s[b.id]===void 0)return;const I=s[b.id];for(const lt in I){const tt=I[lt];for(const ft in tt)g(tt[ft].object),delete tt[ft];delete I[lt]}delete s[b.id]}function B(b){for(const I in s){const lt=s[I];if(lt[b.id]===void 0)continue;const tt=lt[b.id];for(const ft in tt)g(tt[ft].object),delete tt[ft];delete lt[b.id]}}function q(){R(),f=!0,c!==l&&(c=l,m(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:R,dispose:G,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:x,disableUnusedAttributes:N}}function Ab(r,t,i){let s;function l(m){s=m}function c(m,g){r.drawArrays(s,m,g),i.update(g,s,1)}function f(m,g,_){_!==0&&(r.drawArraysInstanced(s,m,g,_),i.update(g,s,_))}function d(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,s,1)}function p(m,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Rb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==vi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const q=B===Zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==oa&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==aa&&!q)}function p(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:G,maxSamples:H}}function wb(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new _s,d=new ue,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||l;return l=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,S=r.get(_);if(!l||E===null||E.length===0||c&&!x)c?g(null):m();else{const N=c?0:s,L=N*4;let D=S.clippingState||null;p.value=D,D=g(E,v,L,y);for(let G=0;G!==L;++G)D[G]=i[G];S.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,y,E){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=p.value,E!==!0||x===null){const S=y+T*4,N=v.matrixWorldInverse;d.getNormalMatrix(N),(x===null||x.length<S)&&(x=new Float32Array(S));for(let L=0,D=y;L!==T;++L,D+=4)f.copy(_[L]).applyMatrix4(N,d),f.normal.toArray(x,D),x[D+3]=f.constant}p.value=x,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,x}}function Cb(r){let t=new WeakMap;function i(f,d){return d===td?f.mapping=Rr:d===ed&&(f.mapping=wr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===td||d===ed)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new HE(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}class Pv extends Lv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Mr=4,h_=[.125,.215,.35,.446,.526,.582],Ss=20,wh=new Pv,d_=new Ce;let Ch=null,Dh=0,Uh=0,Lh=!1;const vs=(1+Math.sqrt(5))/2,xr=1/vs,p_=[new $(-vs,xr,0),new $(vs,xr,0),new $(-xr,0,vs),new $(xr,0,vs),new $(0,vs,-xr),new $(0,vs,xr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Ud{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=__(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,Dh,Uh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Cc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Zo,format:vi,colorSpace:Nr,depthBuffer:!1},l=m_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Db(c)),this._blurMaterial=Ub(c,t,i)}return l}_compileMaterial(t){const i=new Ee(this._lodPlanes[0],t);this._renderer.compile(i,wh)}_sceneToCubeUV(t,i,s,l){const d=new Yn(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(d_),g.toneMapping=Va,g.autoClear=!1;const y=new Wd({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),E=new Ee(new Si,y);let T=!1;const x=t.background;x?x.isColor&&(y.color.copy(x),t.background=null,T=!0):(y.color.copy(d_),T=!0);for(let S=0;S<6;S++){const N=S%3;N===0?(d.up.set(0,p[S],0),d.lookAt(m[S],0,0)):N===1?(d.up.set(0,0,p[S]),d.lookAt(0,m[S],0)):(d.up.set(0,p[S],0),d.lookAt(0,0,m[S]));const L=this._cubeSize;Cc(l,N*L,S>2?L:0,L,L),g.setRenderTarget(l),T&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=_,t.background=x}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Rr||t.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=__()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Ee(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Cc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,wh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=p_[(l-c-1)%p_.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ee(this._lodPlanes[l],m),v=m.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ss-1),T=c/E,x=isFinite(c)?1+Math.floor(g*T):Ss;x>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ss}`);const S=[];let N=0;for(let B=0;B<Ss;++B){const q=B/T,R=Math.exp(-q*q/2);S.push(R),B===0?N+=R:B<x&&(N+=2*R)}for(let B=0;B<S.length;B++)S[B]=S[B]/N;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=S,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const D=this._sizeLods[l],G=3*D*(l>L-Mr?l-L+Mr:0),H=4*(this._cubeSize-D);Cc(i,G,H,3*D,2*D),p.setRenderTarget(i),p.render(_,wh)}}function Db(r){const t=[],i=[],s=[];let l=r;const c=r-Mr+1+h_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>r-Mr?p=h_[f-r+Mr-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,x=2,S=1,N=new Float32Array(T*E*y),L=new Float32Array(x*E*y),D=new Float32Array(S*E*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,q=H>2?0:-1,R=[B,q,0,B+2/3,q,0,B+2/3,q+1,0,B,q,0,B+2/3,q+1,0,B,q+1,0];N.set(R,T*E*H),L.set(v,x*E*H);const b=[H,H,H,H,H,H];D.set(b,S*E*H)}const G=new la;G.setAttribute("position",new Di(N,T)),G.setAttribute("uv",new Di(L,x)),G.setAttribute("faceIndex",new Di(D,S)),t.push(G),l>Mr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function m_(r,t,i){const s=new bs(r,t,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Ub(r,t,i){const s=new Float32Array(Ss),l=new $(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function g_(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function __(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===td||p===ed,g=p===Rr||p===wr;if(m||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new Ud(r)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Ud(r)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Nb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Ob(r,t,i,s){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);for(const E in v.morphAttributes){const T=v.morphAttributes[E];for(let x=0,S=T.length;x<S;x++)t.remove(T[x])}v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const E in v)t.update(v[E],r.ARRAY_BUFFER);const y=_.morphAttributes;for(const E in y){const T=y[E];for(let x=0,S=T.length;x<S;x++)t.update(T[x],r.ARRAY_BUFFER)}}function m(_){const v=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let L=0,D=N.length;L<D;L+=3){const G=N[L+0],H=N[L+1],B=N[L+2];v.push(G,H,H,B,B,G)}}else if(E!==void 0){const N=E.array;T=E.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const G=L+0,H=L+1,B=L+2;v.push(G,H,H,B,B,G)}}else return;const x=new(Tv(v)?Dv:Cv)(v,1);x.version=T;const S=c.get(_);S&&t.remove(S),c.set(_,x)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function Pb(r,t,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function p(v,y){r.drawElements(s,y,c,v*f),i.update(y,s,1)}function m(v,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,v*f,E),i.update(y,s,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let x=0;for(let S=0;S<E;S++)x+=y[S];i.update(x,s,1)}function _(v,y,E,T){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v.length;S++)m(v[S]/f,y[S],T[S]);else{x.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,T,0,E);let S=0;for(let N=0;N<E;N++)S+=y[N]*T[N];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function zb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Bb(r,t,i){const s=new WeakMap,l=new Ie;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(d);if(v===void 0||v.count!==_){let b=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",b)};var y=b;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),x===!0&&(D=3);let G=d.attributes.position.count*D,H=1;G>t.maxTextureSize&&(H=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const B=new Float32Array(G*H*4*_),q=new Av(B,G,H,_);q.type=aa,q.needsUpdate=!0;const R=D*4;for(let I=0;I<_;I++){const lt=S[I],tt=N[I],ft=L[I],Q=G*H*4*I;for(let z=0;z<lt.count;z++){const et=z*R;E===!0&&(l.fromBufferAttribute(lt,z),B[Q+et+0]=l.x,B[Q+et+1]=l.y,B[Q+et+2]=l.z,B[Q+et+3]=0),T===!0&&(l.fromBufferAttribute(tt,z),B[Q+et+4]=l.x,B[Q+et+5]=l.y,B[Q+et+6]=l.z,B[Q+et+7]=0),x===!0&&(l.fromBufferAttribute(ft,z),B[Q+et+8]=l.x,B[Q+et+9]=l.y,B[Q+et+10]=l.z,B[Q+et+11]=ft.itemSize===4?l.w:1)}}v={count:_,texture:q,size:new be(G,H)},s.set(d,v),d.addEventListener("dispose",b)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<m.length;x++)E+=m[x];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function Ib(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return _}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}class zv extends An{constructor(t,i,s,l,c,f,d,p,m,g=Tr){if(g!==Tr&&g!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Tr&&(s=Ts),s===void 0&&g===Dr&&(s=Cr),super(null,l,c,f,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:xi,this.minFilter=p!==void 0?p:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Bv=new An,v_=new zv(1,1),Iv=new Av,Fv=new TE,Hv=new Nv,x_=[],S_=[],y_=new Float32Array(16),M_=new Float32Array(9),E_=new Float32Array(4);function zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=x_[l];if(c===void 0&&(c=new Float32Array(l),x_[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function cn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function un(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function jc(r,t){let i=S_[t];i===void 0&&(i=new Int32Array(t),S_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Fb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Hb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;r.uniform2fv(this.addr,t),un(i,t)}}function Gb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;r.uniform3fv(this.addr,t),un(i,t)}}function Vb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;r.uniform4fv(this.addr,t),un(i,t)}}function kb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(cn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(cn(i,s))return;E_.set(s),r.uniformMatrix2fv(this.addr,!1,E_),un(i,s)}}function Xb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(cn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(cn(i,s))return;M_.set(s),r.uniformMatrix3fv(this.addr,!1,M_),un(i,s)}}function Wb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(cn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(cn(i,s))return;y_.set(s),r.uniformMatrix4fv(this.addr,!1,y_),un(i,s)}}function qb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function jb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;r.uniform2iv(this.addr,t),un(i,t)}}function Yb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;r.uniform3iv(this.addr,t),un(i,t)}}function Zb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;r.uniform4iv(this.addr,t),un(i,t)}}function Kb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Qb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;r.uniform2uiv(this.addr,t),un(i,t)}}function Jb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;r.uniform3uiv(this.addr,t),un(i,t)}}function $b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;r.uniform4uiv(this.addr,t),un(i,t)}}function tA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(v_.compareFunction=Ev,c=v_):c=Bv,i.setTexture2D(t||c,l)}function eA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Fv,l)}function nA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Hv,l)}function iA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Iv,l)}function aA(r){switch(r){case 5126:return Fb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return kb;case 35675:return Xb;case 35676:return Wb;case 5124:case 35670:return qb;case 35667:case 35671:return jb;case 35668:case 35672:return Yb;case 35669:case 35673:return Zb;case 5125:return Kb;case 36294:return Qb;case 36295:return Jb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}function sA(r,t){r.uniform1fv(this.addr,t)}function rA(r,t){const i=zr(t,this.size,2);r.uniform2fv(this.addr,i)}function oA(r,t){const i=zr(t,this.size,3);r.uniform3fv(this.addr,i)}function lA(r,t){const i=zr(t,this.size,4);r.uniform4fv(this.addr,i)}function cA(r,t){const i=zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function uA(r,t){const i=zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function fA(r,t){const i=zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function hA(r,t){r.uniform1iv(this.addr,t)}function dA(r,t){r.uniform2iv(this.addr,t)}function pA(r,t){r.uniform3iv(this.addr,t)}function mA(r,t){r.uniform4iv(this.addr,t)}function gA(r,t){r.uniform1uiv(this.addr,t)}function _A(r,t){r.uniform2uiv(this.addr,t)}function vA(r,t){r.uniform3uiv(this.addr,t)}function xA(r,t){r.uniform4uiv(this.addr,t)}function SA(r,t,i){const s=this.cache,l=t.length,c=jc(i,l);cn(s,c)||(r.uniform1iv(this.addr,c),un(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Bv,c[f])}function yA(r,t,i){const s=this.cache,l=t.length,c=jc(i,l);cn(s,c)||(r.uniform1iv(this.addr,c),un(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Fv,c[f])}function MA(r,t,i){const s=this.cache,l=t.length,c=jc(i,l);cn(s,c)||(r.uniform1iv(this.addr,c),un(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Hv,c[f])}function EA(r,t,i){const s=this.cache,l=t.length,c=jc(i,l);cn(s,c)||(r.uniform1iv(this.addr,c),un(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Iv,c[f])}function TA(r){switch(r){case 5126:return sA;case 35664:return rA;case 35665:return oA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return fA;case 5124:case 35670:return hA;case 35667:case 35671:return dA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return _A;case 36295:return vA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return EA}}class bA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=aA(i.type)}}class AA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=TA(i.type)}}class RA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function T_(r,t){r.seq.push(t),r.map[t.id]=t}function wA(r,t,i){const s=r.name,l=s.length;for(Nh.lastIndex=0;;){const c=Nh.exec(s),f=Nh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){T_(i,m===void 0?new bA(d,r,t):new AA(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new RA(d),T_(i,_)),i=_}}}class Fc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);wA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function b_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const CA=37297;let DA=0;function UA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const A_=new ue;function LA(r){Te._getMatrix(A_,Te.workingColorSpace,r);const t=`mat3( ${A_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case qc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function R_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+UA(r.getShaderSource(t),f)}else return l}function NA(r,t){const i=LA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function OA(r,t){let i;switch(t){case JM:i="Linear";break;case $M:i="Reinhard";break;case tE:i="Cineon";break;case uv:i="ACESFilmic";break;case nE:i="AgX";break;case iE:i="Neutral";break;case eE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new $;function PA(){Te.getLuminanceCoefficients(Dc);const r=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function BA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function IA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Ho(r){return r!==""}function w_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function C_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(r){return r.replace(FA,GA)}const HA=new Map;function GA(r,t){let i=fe[t];if(i===void 0){const s=HA.get(t);if(s!==void 0)i=fe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ld(i)}const VA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(r){return r.replace(VA,kA)}function kA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function U_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function XA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===lv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===UM?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function WA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case wr:t="ENVMAP_TYPE_CUBE";break;case Wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function jA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cv:t="ENVMAP_BLENDING_MULTIPLY";break;case KM:t="ENVMAP_BLENDING_MIX";break;case QM:t="ENVMAP_BLENDING_ADD";break}return t}function YA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function ZA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=XA(i),m=WA(i),g=qA(i),_=jA(i),v=YA(i),y=zA(i),E=BA(c),T=l.createProgram();let x,S,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),S.length>0&&(S+=`
`)):(x=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),S=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?fe.tonemapping_pars_fragment:"",i.toneMapping!==Va?OA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,NA("linearToOutputTexel",i.outputColorSpace),PA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),f=Ld(f),f=w_(f,i),f=C_(f,i),d=Ld(d),d=w_(d,i),d=C_(d,i),f=D_(f),d=D_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",i.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=N+x+f,D=N+S+d,G=b_(l,l.VERTEX_SHADER,L),H=b_(l,l.FRAGMENT_SHADER,D);l.attachShader(T,G),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(I){if(r.debug.checkShaderErrors){const lt=l.getProgramInfoLog(T).trim(),tt=l.getShaderInfoLog(G).trim(),ft=l.getShaderInfoLog(H).trim();let Q=!0,z=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,G,H);else{const et=R_(l,G,"vertex"),X=R_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+lt+`
`+et+`
`+X)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(tt===""||ft==="")&&(z=!1);z&&(I.diagnostics={runnable:Q,programLog:lt,vertexShader:{log:tt,prefix:x},fragmentShader:{log:ft,prefix:S}})}l.deleteShader(G),l.deleteShader(H),q=new Fc(l,T),R=IA(l,T)}let q;this.getUniforms=function(){return q===void 0&&B(this),q};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(T,CA)),b},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=H,this}let KA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new JA(t),i.set(t,s)),s}}class JA{constructor(t){this.id=KA++,this.code=t,this.usedTimes=0}}function $A(r,t,i,s,l,c,f){const d=new Xd,p=new QA,m=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return m.add(R),R===0?"uv":`uv${R}`}function x(R,b,I,lt,tt){const ft=lt.fog,Q=tt.geometry,z=R.isMeshStandardMaterial?lt.environment:null,et=(R.isMeshStandardMaterial?i:t).get(R.envMap||z),X=et&&et.mapping===Wc?et.image.height:null,ht=E[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const U=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,it=U!==void 0?U.length:0;let At=0;Q.morphAttributes.position!==void 0&&(At=1),Q.morphAttributes.normal!==void 0&&(At=2),Q.morphAttributes.color!==void 0&&(At=3);let _t,F,ut,yt;if(ht){const Ae=wi[ht];_t=Ae.vertexShader,F=Ae.fragmentShader}else _t=R.vertexShader,F=R.fragmentShader,p.update(R),ut=p.getVertexShaderID(R),yt=p.getFragmentShaderID(R);const Et=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),Pt=tt.isInstancedMesh===!0,Ht=tt.isBatchedMesh===!0,_e=!!R.map,ae=!!R.matcap,Me=!!et,j=!!R.aoMap,Ke=!!R.lightMap,le=!!R.bumpMap,de=!!R.normalMap,Zt=!!R.displacementMap,Ue=!!R.emissiveMap,Kt=!!R.metalnessMap,O=!!R.roughnessMap,A=R.anisotropy>0,at=R.clearcoat>0,mt=R.dispersion>0,Mt=R.iridescence>0,gt=R.sheen>0,Wt=R.transmission>0,Ut=A&&!!R.anisotropyMap,Bt=at&&!!R.clearcoatMap,ge=at&&!!R.clearcoatNormalMap,wt=at&&!!R.clearcoatRoughnessMap,It=Mt&&!!R.iridescenceMap,Qt=Mt&&!!R.iridescenceThicknessMap,qt=gt&&!!R.sheenColorMap,Ft=gt&&!!R.sheenRoughnessMap,re=!!R.specularMap,Jt=!!R.specularColorMap,Ne=!!R.specularIntensityMap,W=Wt&&!!R.transmissionMap,Ot=Wt&&!!R.thicknessMap,ct=!!R.gradientMap,xt=!!R.alphaMap,Dt=R.alphaTest>0,Lt=!!R.alphaHash,ie=!!R.extensions;let Ve=Va;R.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ve=r.toneMapping);const nn={shaderID:ht,shaderType:R.type,shaderName:R.name,vertexShader:_t,fragmentShader:F,defines:R.defines,customVertexShaderID:ut,customFragmentShaderID:yt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&tt._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&tt.instanceColor!==null,instancingMorph:Pt&&tt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Et===null?r.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Nr,alphaToCoverage:!!R.alphaToCoverage,map:_e,matcap:ae,envMap:Me,envMapMode:Me&&et.mapping,envMapCubeUVHeight:X,aoMap:j,lightMap:Ke,bumpMap:le,normalMap:de,displacementMap:v&&Zt,emissiveMap:Ue,normalMapObjectSpace:de&&R.normalMapType===oE,normalMapTangentSpace:de&&R.normalMapType===Mv,metalnessMap:Kt,roughnessMap:O,anisotropy:A,anisotropyMap:Ut,clearcoat:at,clearcoatMap:Bt,clearcoatNormalMap:ge,clearcoatRoughnessMap:wt,dispersion:mt,iridescence:Mt,iridescenceMap:It,iridescenceThicknessMap:Qt,sheen:gt,sheenColorMap:qt,sheenRoughnessMap:Ft,specularMap:re,specularColorMap:Jt,specularIntensityMap:Ne,transmission:Wt,transmissionMap:W,thicknessMap:Ot,gradientMap:ct,opaque:R.transparent===!1&&R.blending===Er&&R.alphaToCoverage===!1,alphaMap:xt,alphaTest:Dt,alphaHash:Lt,combine:R.combine,mapUv:_e&&T(R.map.channel),aoMapUv:j&&T(R.aoMap.channel),lightMapUv:Ke&&T(R.lightMap.channel),bumpMapUv:le&&T(R.bumpMap.channel),normalMapUv:de&&T(R.normalMap.channel),displacementMapUv:Zt&&T(R.displacementMap.channel),emissiveMapUv:Ue&&T(R.emissiveMap.channel),metalnessMapUv:Kt&&T(R.metalnessMap.channel),roughnessMapUv:O&&T(R.roughnessMap.channel),anisotropyMapUv:Ut&&T(R.anisotropyMap.channel),clearcoatMapUv:Bt&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:ge&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&T(R.sheenRoughnessMap.channel),specularMapUv:re&&T(R.specularMap.channel),specularColorMapUv:Jt&&T(R.specularColorMap.channel),specularIntensityMapUv:Ne&&T(R.specularIntensityMap.channel),transmissionMapUv:W&&T(R.transmissionMap.channel),thicknessMapUv:Ot&&T(R.thicknessMap.channel),alphaMapUv:xt&&T(R.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(de||A),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!Q.attributes.uv&&(_e||xt),fog:!!ft,useFog:R.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ct,skinning:tt.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:At,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ve,decodeVideoTexture:_e&&R.map.isVideoTexture===!0&&Te.getTransfer(R.map.colorSpace)===Be,decodeVideoTextureEmissive:Ue&&R.emissiveMap.isVideoTexture===!0&&Te.getTransfer(R.emissiveMap.colorSpace)===Be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===na,flipSided:R.side===Nn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:ie&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&R.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return nn.vertexUv1s=m.has(1),nn.vertexUv2s=m.has(2),nn.vertexUv3s=m.has(3),m.clear(),nn}function S(R){const b=[];if(R.shaderID?b.push(R.shaderID):(b.push(R.customVertexShaderID),b.push(R.customFragmentShaderID)),R.defines!==void 0)for(const I in R.defines)b.push(I),b.push(R.defines[I]);return R.isRawShaderMaterial===!1&&(N(b,R),L(b,R),b.push(r.outputColorSpace)),b.push(R.customProgramCacheKey),b.join()}function N(R,b){R.push(b.precision),R.push(b.outputColorSpace),R.push(b.envMapMode),R.push(b.envMapCubeUVHeight),R.push(b.mapUv),R.push(b.alphaMapUv),R.push(b.lightMapUv),R.push(b.aoMapUv),R.push(b.bumpMapUv),R.push(b.normalMapUv),R.push(b.displacementMapUv),R.push(b.emissiveMapUv),R.push(b.metalnessMapUv),R.push(b.roughnessMapUv),R.push(b.anisotropyMapUv),R.push(b.clearcoatMapUv),R.push(b.clearcoatNormalMapUv),R.push(b.clearcoatRoughnessMapUv),R.push(b.iridescenceMapUv),R.push(b.iridescenceThicknessMapUv),R.push(b.sheenColorMapUv),R.push(b.sheenRoughnessMapUv),R.push(b.specularMapUv),R.push(b.specularColorMapUv),R.push(b.specularIntensityMapUv),R.push(b.transmissionMapUv),R.push(b.thicknessMapUv),R.push(b.combine),R.push(b.fogExp2),R.push(b.sizeAttenuation),R.push(b.morphTargetsCount),R.push(b.morphAttributeCount),R.push(b.numDirLights),R.push(b.numPointLights),R.push(b.numSpotLights),R.push(b.numSpotLightMaps),R.push(b.numHemiLights),R.push(b.numRectAreaLights),R.push(b.numDirLightShadows),R.push(b.numPointLightShadows),R.push(b.numSpotLightShadows),R.push(b.numSpotLightShadowsWithMaps),R.push(b.numLightProbes),R.push(b.shadowMapType),R.push(b.toneMapping),R.push(b.numClippingPlanes),R.push(b.numClipIntersection),R.push(b.depthPacking)}function L(R,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),R.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),R.push(d.mask)}function D(R){const b=E[R.type];let I;if(b){const lt=wi[b];I=zE.clone(lt.uniforms)}else I=R.uniforms;return I}function G(R,b){let I;for(let lt=0,tt=g.length;lt<tt;lt++){const ft=g[lt];if(ft.cacheKey===b){I=ft,++I.usedTimes;break}}return I===void 0&&(I=new ZA(r,b,R,c),g.push(I)),I}function H(R){if(--R.usedTimes===0){const b=g.indexOf(R);g[b]=g[g.length-1],g.pop(),R.destroy()}}function B(R){p.remove(R)}function q(){p.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:D,acquireProgram:G,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:q}}function tR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function eR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function L_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function N_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,v,y,E,T,x){let S=r[t];return S===void 0?(S={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:x},r[t]=S):(S.id=_.id,S.object=_,S.geometry=v,S.material=y,S.groupOrder=E,S.renderOrder=_.renderOrder,S.z=T,S.group=x),t++,S}function d(_,v,y,E,T,x){const S=f(_,v,y,E,T,x);y.transmission>0?s.push(S):y.transparent===!0?l.push(S):i.push(S)}function p(_,v,y,E,T,x){const S=f(_,v,y,E,T,x);y.transmission>0?s.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function m(_,v){i.length>1&&i.sort(_||eR),s.length>1&&s.sort(v||L_),l.length>1&&l.sort(v||L_)}function g(){for(let _=t,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function nR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new N_,r.set(s,[f])):l>=c.length?(f=new N_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function iR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new Ce};break;case"SpotLight":i={position:new $,direction:new $,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=i,i}}}function aR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let sR=0;function rR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function oR(r){const t=new iR,i=aR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new $);const l=new $,c=new ke,f=new ke;function d(m){let g=0,_=0,v=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let y=0,E=0,T=0,x=0,S=0,N=0,L=0,D=0,G=0,H=0,B=0;m.sort(rR);for(let R=0,b=m.length;R<b;R++){const I=m[R],lt=I.color,tt=I.intensity,ft=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=lt.r*tt,_+=lt.g*tt,v+=lt.b*tt;else if(I.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(I.sh.coefficients[z],tt);B++}else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,X=i.get(I);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,s.directionalShadow[y]=X,s.directionalShadowMap[y]=Q,s.directionalShadowMatrix[y]=I.shadow.matrix,N++}s.directional[y]=z,y++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(lt).multiplyScalar(tt),z.distance=ft,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,s.spot[T]=z;const et=I.shadow;if(I.map&&(s.spotLightMap[G]=I.map,G++,et.updateMatrices(I),I.castShadow&&H++),s.spotLightMatrix[T]=et.matrix,I.castShadow){const X=i.get(I);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,s.spotShadow[T]=X,s.spotShadowMap[T]=Q,D++}T++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(lt).multiplyScalar(tt),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),s.rectArea[x]=z,x++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const et=I.shadow,X=i.get(I);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,X.shadowCameraNear=et.camera.near,X.shadowCameraFar=et.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=Q,s.pointShadowMatrix[E]=I.shadow.matrix,L++}s.point[E]=z,E++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(tt),z.groundColor.copy(I.groundColor).multiplyScalar(tt),s.hemi[S]=z,S++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const q=s.hash;(q.directionalLength!==y||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==x||q.hemiLength!==S||q.numDirectionalShadows!==N||q.numPointShadows!==L||q.numSpotShadows!==D||q.numSpotMaps!==G||q.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=x,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+G-H,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,q.directionalLength=y,q.pointLength=E,q.spotLength=T,q.rectAreaLength=x,q.hemiLength=S,q.numDirectionalShadows=N,q.numPointShadows=L,q.numSpotShadows=D,q.numSpotMaps=G,q.numLightProbes=B,s.version=sR++)}function p(m,g){let _=0,v=0,y=0,E=0,T=0;const x=g.matrixWorldInverse;for(let S=0,N=m.length;S<N;S++){const L=m[S];if(L.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),_++}else if(L.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),y++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),f.identity(),c.copy(L.matrixWorld),c.premultiply(x),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),v++}else if(L.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(x),T++}}}return{setup:d,setupView:p,state:s}}function O_(r){const t=new oR(r),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function lR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new O_(r),t.set(l,[d])):c>=f.length?(d=new O_(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}class cR extends Pr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uR extends Pr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dR(r,t,i){let s=new qd;const l=new be,c=new be,f=new Ie,d=new cR({depthPacking:rE}),p=new uR,m={},g=i.maxTextureSize,_={[Xa]:Nn,[Nn]:Xa,[na]:na},v=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:fR,fragmentShader:hR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new la;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ee(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lv;let S=this.type;this.render=function(H,B,q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;const R=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),lt=r.state;lt.setBlending(Ga),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const tt=S!==Ri&&this.type===Ri,ft=S===Ri&&this.type!==Ri;for(let Q=0,z=H.length;Q<z;Q++){const et=H[Q],X=et.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ht=X.getFrameExtents();if(l.multiply(ht),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ht.x),l.x=c.x*ht.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ht.y),l.y=c.y*ht.y,X.mapSize.y=c.y)),X.map===null||tt===!0||ft===!0){const it=this.type!==Ri?{minFilter:xi,magFilter:xi}:{};X.map!==null&&X.map.dispose(),X.map=new bs(l.x,l.y,it),X.map.texture.name=et.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const U=X.getViewportCount();for(let it=0;it<U;it++){const At=X.getViewport(it);f.set(c.x*At.x,c.y*At.y,c.x*At.z,c.y*At.w),lt.viewport(f),X.updateMatrices(et,it),s=X.getFrustum(),D(B,q,X.camera,et,this.type)}X.isPointLightShadow!==!0&&this.type===Ri&&N(X,q),X.needsUpdate=!1}S=this.type,x.needsUpdate=!1,r.setRenderTarget(R,b,I)};function N(H,B){const q=t.update(T);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new bs(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(B,null,q,v,T,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(B,null,q,y,T,null)}function L(H,B,q,R){let b=null;const I=q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)b=I;else if(b=q.isPointLight===!0?p:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const lt=b.uuid,tt=B.uuid;let ft=m[lt];ft===void 0&&(ft={},m[lt]=ft);let Q=ft[tt];Q===void 0&&(Q=b.clone(),ft[tt]=Q,B.addEventListener("dispose",G)),b=Q}if(b.visible=B.visible,b.wireframe=B.wireframe,R===Ri?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:_[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const lt=r.properties.get(b);lt.light=q}return b}function D(H,B,q,R,b){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&b===Ri)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,H.matrixWorld);const tt=t.update(H),ft=H.material;if(Array.isArray(ft)){const Q=tt.groups;for(let z=0,et=Q.length;z<et;z++){const X=Q[z],ht=ft[X.materialIndex];if(ht&&ht.visible){const U=L(H,ht,R,b);H.onBeforeShadow(r,H,B,q,tt,U,X),r.renderBufferDirect(q,null,tt,U,H,X),H.onAfterShadow(r,H,B,q,tt,U,X)}}}else if(ft.visible){const Q=L(H,ft,R,b);H.onBeforeShadow(r,H,B,q,tt,Q,null),r.renderBufferDirect(q,null,tt,Q,H,null),H.onAfterShadow(r,H,B,q,tt,Q,null)}}const lt=H.children;for(let tt=0,ft=lt.length;tt<ft;tt++)D(lt[tt],B,q,R,b)}function G(H){H.target.removeEventListener("dispose",G);for(const q in m){const R=m[q],b=H.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}const pR={[jh]:Yh,[Zh]:Jh,[Kh]:$h,[Ar]:Qh,[Yh]:jh,[Jh]:Zh,[$h]:Kh,[Qh]:Ar};function mR(r,t){function i(){let W=!1;const Ot=new Ie;let ct=null;const xt=new Ie(0,0,0,0);return{setMask:function(Dt){ct!==Dt&&!W&&(r.colorMask(Dt,Dt,Dt,Dt),ct=Dt)},setLocked:function(Dt){W=Dt},setClear:function(Dt,Lt,ie,Ve,nn){nn===!0&&(Dt*=Ve,Lt*=Ve,ie*=Ve),Ot.set(Dt,Lt,ie,Ve),xt.equals(Ot)===!1&&(r.clearColor(Dt,Lt,ie,Ve),xt.copy(Ot))},reset:function(){W=!1,ct=null,xt.set(-1,0,0,0)}}}function s(){let W=!1,Ot=!1,ct=null,xt=null,Dt=null;return{setReversed:function(Lt){if(Ot!==Lt){const ie=t.get("EXT_clip_control");Ot?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);const Ve=Dt;Dt=null,this.setClear(Ve)}Ot=Lt},getReversed:function(){return Ot},setTest:function(Lt){Lt?Et(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(Lt){ct!==Lt&&!W&&(r.depthMask(Lt),ct=Lt)},setFunc:function(Lt){if(Ot&&(Lt=pR[Lt]),xt!==Lt){switch(Lt){case jh:r.depthFunc(r.NEVER);break;case Yh:r.depthFunc(r.ALWAYS);break;case Zh:r.depthFunc(r.LESS);break;case Ar:r.depthFunc(r.LEQUAL);break;case Kh:r.depthFunc(r.EQUAL);break;case Qh:r.depthFunc(r.GEQUAL);break;case Jh:r.depthFunc(r.GREATER);break;case $h:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xt=Lt}},setLocked:function(Lt){W=Lt},setClear:function(Lt){Dt!==Lt&&(Ot&&(Lt=1-Lt),r.clearDepth(Lt),Dt=Lt)},reset:function(){W=!1,ct=null,xt=null,Dt=null,Ot=!1}}}function l(){let W=!1,Ot=null,ct=null,xt=null,Dt=null,Lt=null,ie=null,Ve=null,nn=null;return{setTest:function(Ae){W||(Ae?Et(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Ae){Ot!==Ae&&!W&&(r.stencilMask(Ae),Ot=Ae)},setFunc:function(Ae,wn,Cn){(ct!==Ae||xt!==wn||Dt!==Cn)&&(r.stencilFunc(Ae,wn,Cn),ct=Ae,xt=wn,Dt=Cn)},setOp:function(Ae,wn,Cn){(Lt!==Ae||ie!==wn||Ve!==Cn)&&(r.stencilOp(Ae,wn,Cn),Lt=Ae,ie=wn,Ve=Cn)},setLocked:function(Ae){W=Ae},setClear:function(Ae){nn!==Ae&&(r.clearStencil(Ae),nn=Ae)},reset:function(){W=!1,Ot=null,ct=null,xt=null,Dt=null,Lt=null,ie=null,Ve=null,nn=null}}}const c=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,T=!1,x=null,S=null,N=null,L=null,D=null,G=null,H=null,B=new Ce(0,0,0),q=0,R=!1,b=null,I=null,lt=null,tt=null,ft=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,et=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=et>=2);let ht=null,U={};const it=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),_t=new Ie().fromArray(it),F=new Ie().fromArray(At);function ut(W,Ot,ct,xt){const Dt=new Uint8Array(4),Lt=r.createTexture();r.bindTexture(W,Lt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<ct;ie++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,xt,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(Ot+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return Lt}const yt={};yt[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),yt[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),yt[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Et(r.DEPTH_TEST),f.setFunc(Ar),le(!1),de(F0),Et(r.CULL_FACE),j(Ga);function Et(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Ct(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Pt(W,Ot){return _[W]!==Ot?(r.bindFramebuffer(W,Ot),_[W]=Ot,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ot),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Ht(W,Ot){let ct=y,xt=!1;if(W){ct=v.get(Ot),ct===void 0&&(ct=[],v.set(Ot,ct));const Dt=W.textures;if(ct.length!==Dt.length||ct[0]!==r.COLOR_ATTACHMENT0){for(let Lt=0,ie=Dt.length;Lt<ie;Lt++)ct[Lt]=r.COLOR_ATTACHMENT0+Lt;ct.length=Dt.length,xt=!0}}else ct[0]!==r.BACK&&(ct[0]=r.BACK,xt=!0);xt&&r.drawBuffers(ct)}function _e(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const ae={[xs]:r.FUNC_ADD,[NM]:r.FUNC_SUBTRACT,[OM]:r.FUNC_REVERSE_SUBTRACT};ae[PM]=r.MIN,ae[zM]=r.MAX;const Me={[BM]:r.ZERO,[IM]:r.ONE,[FM]:r.SRC_COLOR,[Wh]:r.SRC_ALPHA,[WM]:r.SRC_ALPHA_SATURATE,[kM]:r.DST_COLOR,[GM]:r.DST_ALPHA,[HM]:r.ONE_MINUS_SRC_COLOR,[qh]:r.ONE_MINUS_SRC_ALPHA,[XM]:r.ONE_MINUS_DST_COLOR,[VM]:r.ONE_MINUS_DST_ALPHA,[qM]:r.CONSTANT_COLOR,[jM]:r.ONE_MINUS_CONSTANT_COLOR,[YM]:r.CONSTANT_ALPHA,[ZM]:r.ONE_MINUS_CONSTANT_ALPHA};function j(W,Ot,ct,xt,Dt,Lt,ie,Ve,nn,Ae){if(W===Ga){T===!0&&(Ct(r.BLEND),T=!1);return}if(T===!1&&(Et(r.BLEND),T=!0),W!==LM){if(W!==x||Ae!==R){if((S!==xs||D!==xs)&&(r.blendEquation(r.FUNC_ADD),S=xs,D=xs),Ae)switch(W){case Er:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case H0:r.blendFunc(r.ONE,r.ONE);break;case G0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case V0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Er:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case H0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case G0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case V0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}N=null,L=null,G=null,H=null,B.set(0,0,0),q=0,x=W,R=Ae}return}Dt=Dt||Ot,Lt=Lt||ct,ie=ie||xt,(Ot!==S||Dt!==D)&&(r.blendEquationSeparate(ae[Ot],ae[Dt]),S=Ot,D=Dt),(ct!==N||xt!==L||Lt!==G||ie!==H)&&(r.blendFuncSeparate(Me[ct],Me[xt],Me[Lt],Me[ie]),N=ct,L=xt,G=Lt,H=ie),(Ve.equals(B)===!1||nn!==q)&&(r.blendColor(Ve.r,Ve.g,Ve.b,nn),B.copy(Ve),q=nn),x=W,R=!1}function Ke(W,Ot){W.side===na?Ct(r.CULL_FACE):Et(r.CULL_FACE);let ct=W.side===Nn;Ot&&(ct=!ct),le(ct),W.blending===Er&&W.transparent===!1?j(Ga):j(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const xt=W.stencilWrite;d.setTest(xt),xt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ue(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Et(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(W){b!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),b=W)}function de(W){W!==CM?(Et(r.CULL_FACE),W!==I&&(W===F0?r.cullFace(r.BACK):W===DM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),I=W}function Zt(W){W!==lt&&(z&&r.lineWidth(W),lt=W)}function Ue(W,Ot,ct){W?(Et(r.POLYGON_OFFSET_FILL),(tt!==Ot||ft!==ct)&&(r.polygonOffset(Ot,ct),tt=Ot,ft=ct)):Ct(r.POLYGON_OFFSET_FILL)}function Kt(W){W?Et(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function O(W){W===void 0&&(W=r.TEXTURE0+Q-1),ht!==W&&(r.activeTexture(W),ht=W)}function A(W,Ot,ct){ct===void 0&&(ht===null?ct=r.TEXTURE0+Q-1:ct=ht);let xt=U[ct];xt===void 0&&(xt={type:void 0,texture:void 0},U[ct]=xt),(xt.type!==W||xt.texture!==Ot)&&(ht!==ct&&(r.activeTexture(ct),ht=ct),r.bindTexture(W,Ot||yt[W]),xt.type=W,xt.texture=Ot)}function at(){const W=U[ht];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function mt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qt(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(W){_t.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Ft(W){F.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),F.copy(W))}function re(W,Ot){let ct=m.get(Ot);ct===void 0&&(ct=new WeakMap,m.set(Ot,ct));let xt=ct.get(W);xt===void 0&&(xt=r.getUniformBlockIndex(Ot,W.name),ct.set(W,xt))}function Jt(W,Ot){const xt=m.get(Ot).get(W);p.get(Ot)!==xt&&(r.uniformBlockBinding(Ot,xt,W.__bindingPointIndex),p.set(Ot,xt))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ht=null,U={},_={},v=new WeakMap,y=[],E=null,T=!1,x=null,S=null,N=null,L=null,D=null,G=null,H=null,B=new Ce(0,0,0),q=0,R=!1,b=null,I=null,lt=null,tt=null,ft=null,_t.set(0,0,r.canvas.width,r.canvas.height),F.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Et,disable:Ct,bindFramebuffer:Pt,drawBuffers:Ht,useProgram:_e,setBlending:j,setMaterial:Ke,setFlipSided:le,setCullFace:de,setLineWidth:Zt,setPolygonOffset:Ue,setScissorTest:Kt,activeTexture:O,bindTexture:A,unbindTexture:at,compressedTexImage2D:mt,compressedTexImage3D:Mt,texImage2D:It,texImage3D:Qt,updateUBOMapping:re,uniformBlockBinding:Jt,texStorage2D:ge,texStorage3D:wt,texSubImage2D:gt,texSubImage3D:Wt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Bt,scissor:qt,viewport:Ft,reset:Ne}}function P_(r,t,i,s){const l=gR(s);switch(i){case mv:return r*t;case _v:return r*t;case vv:return r*t*2;case xv:return r*t/l.components*l.byteLength;case Hd:return r*t/l.components*l.byteLength;case Sv:return r*t*2/l.components*l.byteLength;case Gd:return r*t*2/l.components*l.byteLength;case gv:return r*t*3/l.components*l.byteLength;case vi:return r*t*4/l.components*l.byteLength;case Vd:return r*t*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zc:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sd:case od:return Math.max(r,16)*Math.max(t,8)/4;case ad:case rd:return Math.max(r,8)*Math.max(t,8)/2;case ld:case cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case pd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case md:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case gd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case vd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case yd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Md:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Td:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ic:case bd:case Ad:return Math.ceil(r/4)*Math.ceil(t/4)*16;case yv:case Rd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case wd:case Cd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gR(r){switch(r){case oa:case hv:return{byteLength:1,components:1};case Wo:case dv:case Zo:return{byteLength:2,components:1};case Id:case Fd:return{byteLength:2,components:4};case Ts:case Bd:case aa:return{byteLength:4,components:1};case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function _R(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new be,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,A){return y?new OffscreenCanvas(O,A):Gc("canvas")}function T(O,A,at){let mt=1;const Mt=Kt(O);if((Mt.width>at||Mt.height>at)&&(mt=at/Math.max(Mt.width,Mt.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const gt=Math.floor(mt*Mt.width),Wt=Math.floor(mt*Mt.height);_===void 0&&(_=E(gt,Wt));const Ut=A?E(gt,Wt):_;return Ut.width=gt,Ut.height=Wt,Ut.getContext("2d").drawImage(O,0,0,gt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+Wt+")."),Ut}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),O;return O}function x(O){return O.generateMipmaps}function S(O){r.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,A,at,mt,Mt=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let gt=A;if(A===r.RED&&(at===r.FLOAT&&(gt=r.R32F),at===r.HALF_FLOAT&&(gt=r.R16F),at===r.UNSIGNED_BYTE&&(gt=r.R8)),A===r.RED_INTEGER&&(at===r.UNSIGNED_BYTE&&(gt=r.R8UI),at===r.UNSIGNED_SHORT&&(gt=r.R16UI),at===r.UNSIGNED_INT&&(gt=r.R32UI),at===r.BYTE&&(gt=r.R8I),at===r.SHORT&&(gt=r.R16I),at===r.INT&&(gt=r.R32I)),A===r.RG&&(at===r.FLOAT&&(gt=r.RG32F),at===r.HALF_FLOAT&&(gt=r.RG16F),at===r.UNSIGNED_BYTE&&(gt=r.RG8)),A===r.RG_INTEGER&&(at===r.UNSIGNED_BYTE&&(gt=r.RG8UI),at===r.UNSIGNED_SHORT&&(gt=r.RG16UI),at===r.UNSIGNED_INT&&(gt=r.RG32UI),at===r.BYTE&&(gt=r.RG8I),at===r.SHORT&&(gt=r.RG16I),at===r.INT&&(gt=r.RG32I)),A===r.RGB_INTEGER&&(at===r.UNSIGNED_BYTE&&(gt=r.RGB8UI),at===r.UNSIGNED_SHORT&&(gt=r.RGB16UI),at===r.UNSIGNED_INT&&(gt=r.RGB32UI),at===r.BYTE&&(gt=r.RGB8I),at===r.SHORT&&(gt=r.RGB16I),at===r.INT&&(gt=r.RGB32I)),A===r.RGBA_INTEGER&&(at===r.UNSIGNED_BYTE&&(gt=r.RGBA8UI),at===r.UNSIGNED_SHORT&&(gt=r.RGBA16UI),at===r.UNSIGNED_INT&&(gt=r.RGBA32UI),at===r.BYTE&&(gt=r.RGBA8I),at===r.SHORT&&(gt=r.RGBA16I),at===r.INT&&(gt=r.RGBA32I)),A===r.RGB&&at===r.UNSIGNED_INT_5_9_9_9_REV&&(gt=r.RGB9_E5),A===r.RGBA){const Wt=Mt?qc:Te.getTransfer(mt);at===r.FLOAT&&(gt=r.RGBA32F),at===r.HALF_FLOAT&&(gt=r.RGBA16F),at===r.UNSIGNED_BYTE&&(gt=Wt===Be?r.SRGB8_ALPHA8:r.RGBA8),at===r.UNSIGNED_SHORT_4_4_4_4&&(gt=r.RGBA4),at===r.UNSIGNED_SHORT_5_5_5_1&&(gt=r.RGB5_A1)}return(gt===r.R16F||gt===r.R32F||gt===r.RG16F||gt===r.RG32F||gt===r.RGBA16F||gt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function D(O,A){let at;return O?A===null||A===Ts||A===Cr?at=r.DEPTH24_STENCIL8:A===aa?at=r.DEPTH32F_STENCIL8:A===Wo&&(at=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ts||A===Cr?at=r.DEPTH_COMPONENT24:A===aa?at=r.DEPTH_COMPONENT32F:A===Wo&&(at=r.DEPTH_COMPONENT16),at}function G(O,A){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==xi&&O.minFilter!==Ci?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function H(O){const A=O.target;A.removeEventListener("dispose",H),q(A),A.isVideoTexture&&g.delete(A)}function B(O){const A=O.target;A.removeEventListener("dispose",B),b(A)}function q(O){const A=s.get(O);if(A.__webglInit===void 0)return;const at=O.source,mt=v.get(at);if(mt){const Mt=mt[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&R(O),Object.keys(mt).length===0&&v.delete(at)}s.remove(O)}function R(O){const A=s.get(O);r.deleteTexture(A.__webglTexture);const at=O.source,mt=v.get(at);delete mt[A.__cacheKey],f.memory.textures--}function b(O){const A=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(A.__webglFramebuffer[mt]))for(let Mt=0;Mt<A.__webglFramebuffer[mt].length;Mt++)r.deleteFramebuffer(A.__webglFramebuffer[mt][Mt]);else r.deleteFramebuffer(A.__webglFramebuffer[mt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[mt])}else{if(Array.isArray(A.__webglFramebuffer))for(let mt=0;mt<A.__webglFramebuffer.length;mt++)r.deleteFramebuffer(A.__webglFramebuffer[mt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let mt=0;mt<A.__webglColorRenderbuffer.length;mt++)A.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[mt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=O.textures;for(let mt=0,Mt=at.length;mt<Mt;mt++){const gt=s.get(at[mt]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),f.memory.textures--),s.remove(at[mt])}s.remove(O)}let I=0;function lt(){I=0}function tt(){const O=I;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),I+=1,O}function ft(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function Q(O,A){const at=s.get(O);if(O.isVideoTexture&&Zt(O),O.isRenderTargetTexture===!1&&O.version>0&&at.__version!==O.version){const mt=O.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(at,O,A);return}}i.bindTexture(r.TEXTURE_2D,at.__webglTexture,r.TEXTURE0+A)}function z(O,A){const at=s.get(O);if(O.version>0&&at.__version!==O.version){F(at,O,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,at.__webglTexture,r.TEXTURE0+A)}function et(O,A){const at=s.get(O);if(O.version>0&&at.__version!==O.version){F(at,O,A);return}i.bindTexture(r.TEXTURE_3D,at.__webglTexture,r.TEXTURE0+A)}function X(O,A){const at=s.get(O);if(O.version>0&&at.__version!==O.version){ut(at,O,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,at.__webglTexture,r.TEXTURE0+A)}const ht={[nd]:r.REPEAT,[ys]:r.CLAMP_TO_EDGE,[id]:r.MIRRORED_REPEAT},U={[xi]:r.NEAREST,[aE]:r.NEAREST_MIPMAP_NEAREST,[uc]:r.NEAREST_MIPMAP_LINEAR,[Ci]:r.LINEAR,[sh]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},it={[lE]:r.NEVER,[pE]:r.ALWAYS,[cE]:r.LESS,[Ev]:r.LEQUAL,[uE]:r.EQUAL,[dE]:r.GEQUAL,[fE]:r.GREATER,[hE]:r.NOTEQUAL};function At(O,A){if(A.type===aa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ci||A.magFilter===sh||A.magFilter===uc||A.magFilter===Ms||A.minFilter===Ci||A.minFilter===sh||A.minFilter===uc||A.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,ht[A.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,ht[A.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,ht[A.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,U[A.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,U[A.minFilter]),A.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,it[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xi||A.minFilter!==uc&&A.minFilter!==Ms||A.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function _t(O,A){let at=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",H));const mt=A.source;let Mt=v.get(mt);Mt===void 0&&(Mt={},v.set(mt,Mt));const gt=ft(A);if(gt!==O.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,at=!0),Mt[gt].usedTimes++;const Wt=Mt[O.__cacheKey];Wt!==void 0&&(Mt[O.__cacheKey].usedTimes--,Wt.usedTimes===0&&R(A)),O.__cacheKey=gt,O.__webglTexture=Mt[gt].texture}return at}function F(O,A,at){let mt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=r.TEXTURE_3D);const Mt=_t(O,A),gt=A.source;i.bindTexture(mt,O.__webglTexture,r.TEXTURE0+at);const Wt=s.get(gt);if(gt.version!==Wt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+at);const Ut=Te.getPrimaries(Te.workingColorSpace),Bt=A.colorSpace===Fa?null:Te.getPrimaries(A.colorSpace),ge=A.colorSpace===Fa||Ut===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let wt=T(A.image,!1,l.maxTextureSize);wt=Ue(A,wt);const It=c.convert(A.format,A.colorSpace),Qt=c.convert(A.type);let qt=L(A.internalFormat,It,Qt,A.colorSpace,A.isVideoTexture);At(mt,A);let Ft;const re=A.mipmaps,Jt=A.isVideoTexture!==!0,Ne=Wt.__version===void 0||Mt===!0,W=gt.dataReady,Ot=G(A,wt);if(A.isDepthTexture)qt=D(A.format===Dr,A.type),Ne&&(Jt?i.texStorage2D(r.TEXTURE_2D,1,qt,wt.width,wt.height):i.texImage2D(r.TEXTURE_2D,0,qt,wt.width,wt.height,0,It,Qt,null));else if(A.isDataTexture)if(re.length>0){Jt&&Ne&&i.texStorage2D(r.TEXTURE_2D,Ot,qt,re[0].width,re[0].height);for(let ct=0,xt=re.length;ct<xt;ct++)Ft=re[ct],Jt?W&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Ft.width,Ft.height,It,Qt,Ft.data):i.texImage2D(r.TEXTURE_2D,ct,qt,Ft.width,Ft.height,0,It,Qt,Ft.data);A.generateMipmaps=!1}else Jt?(Ne&&i.texStorage2D(r.TEXTURE_2D,Ot,qt,wt.width,wt.height),W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt.width,wt.height,It,Qt,wt.data)):i.texImage2D(r.TEXTURE_2D,0,qt,wt.width,wt.height,0,It,Qt,wt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Jt&&Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,qt,re[0].width,re[0].height,wt.depth);for(let ct=0,xt=re.length;ct<xt;ct++)if(Ft=re[ct],A.format!==vi)if(It!==null)if(Jt){if(W)if(A.layerUpdates.size>0){const Dt=P_(Ft.width,Ft.height,A.format,A.type);for(const Lt of A.layerUpdates){const ie=Ft.data.subarray(Lt*Dt/Ft.data.BYTES_PER_ELEMENT,(Lt+1)*Dt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,Lt,Ft.width,Ft.height,1,It,ie)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Ft.width,Ft.height,wt.depth,It,Ft.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,qt,Ft.width,Ft.height,wt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Ft.width,Ft.height,wt.depth,It,Qt,Ft.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ct,qt,Ft.width,Ft.height,wt.depth,0,It,Qt,Ft.data)}else{Jt&&Ne&&i.texStorage2D(r.TEXTURE_2D,Ot,qt,re[0].width,re[0].height);for(let ct=0,xt=re.length;ct<xt;ct++)Ft=re[ct],A.format!==vi?It!==null?Jt?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,Ft.width,Ft.height,It,Ft.data):i.compressedTexImage2D(r.TEXTURE_2D,ct,qt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?W&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Ft.width,Ft.height,It,Qt,Ft.data):i.texImage2D(r.TEXTURE_2D,ct,qt,Ft.width,Ft.height,0,It,Qt,Ft.data)}else if(A.isDataArrayTexture)if(Jt){if(Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,qt,wt.width,wt.height,wt.depth),W)if(A.layerUpdates.size>0){const ct=P_(wt.width,wt.height,A.format,A.type);for(const xt of A.layerUpdates){const Dt=wt.data.subarray(xt*ct/wt.data.BYTES_PER_ELEMENT,(xt+1)*ct/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,wt.width,wt.height,1,It,Qt,Dt)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,It,Qt,wt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,qt,wt.width,wt.height,wt.depth,0,It,Qt,wt.data);else if(A.isData3DTexture)Jt?(Ne&&i.texStorage3D(r.TEXTURE_3D,Ot,qt,wt.width,wt.height,wt.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,It,Qt,wt.data)):i.texImage3D(r.TEXTURE_3D,0,qt,wt.width,wt.height,wt.depth,0,It,Qt,wt.data);else if(A.isFramebufferTexture){if(Ne)if(Jt)i.texStorage2D(r.TEXTURE_2D,Ot,qt,wt.width,wt.height);else{let ct=wt.width,xt=wt.height;for(let Dt=0;Dt<Ot;Dt++)i.texImage2D(r.TEXTURE_2D,Dt,qt,ct,xt,0,It,Qt,null),ct>>=1,xt>>=1}}else if(re.length>0){if(Jt&&Ne){const ct=Kt(re[0]);i.texStorage2D(r.TEXTURE_2D,Ot,qt,ct.width,ct.height)}for(let ct=0,xt=re.length;ct<xt;ct++)Ft=re[ct],Jt?W&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,It,Qt,Ft):i.texImage2D(r.TEXTURE_2D,ct,qt,It,Qt,Ft);A.generateMipmaps=!1}else if(Jt){if(Ne){const ct=Kt(wt);i.texStorage2D(r.TEXTURE_2D,Ot,qt,ct.width,ct.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,It,Qt,wt)}else i.texImage2D(r.TEXTURE_2D,0,qt,It,Qt,wt);x(A)&&S(mt),Wt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ut(O,A,at){if(A.image.length!==6)return;const mt=_t(O,A),Mt=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+at);const gt=s.get(Mt);if(Mt.version!==gt.__version||mt===!0){i.activeTexture(r.TEXTURE0+at);const Wt=Te.getPrimaries(Te.workingColorSpace),Ut=A.colorSpace===Fa?null:Te.getPrimaries(A.colorSpace),Bt=A.colorSpace===Fa||Wt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const ge=A.isCompressedTexture||A.image[0].isCompressedTexture,wt=A.image[0]&&A.image[0].isDataTexture,It=[];for(let xt=0;xt<6;xt++)!ge&&!wt?It[xt]=T(A.image[xt],!0,l.maxCubemapSize):It[xt]=wt?A.image[xt].image:A.image[xt],It[xt]=Ue(A,It[xt]);const Qt=It[0],qt=c.convert(A.format,A.colorSpace),Ft=c.convert(A.type),re=L(A.internalFormat,qt,Ft,A.colorSpace),Jt=A.isVideoTexture!==!0,Ne=gt.__version===void 0||mt===!0,W=Mt.dataReady;let Ot=G(A,Qt);At(r.TEXTURE_CUBE_MAP,A);let ct;if(ge){Jt&&Ne&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,re,Qt.width,Qt.height);for(let xt=0;xt<6;xt++){ct=It[xt].mipmaps;for(let Dt=0;Dt<ct.length;Dt++){const Lt=ct[Dt];A.format!==vi?qt!==null?Jt?W&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,Lt.width,Lt.height,qt,Lt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,re,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,Lt.width,Lt.height,qt,Ft,Lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,re,Lt.width,Lt.height,0,qt,Ft,Lt.data)}}}else{if(ct=A.mipmaps,Jt&&Ne){ct.length>0&&Ot++;const xt=Kt(It[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,re,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(wt){Jt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,It[xt].width,It[xt].height,qt,Ft,It[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,It[xt].width,It[xt].height,0,qt,Ft,It[xt].data);for(let Dt=0;Dt<ct.length;Dt++){const ie=ct[Dt].image[xt].image;Jt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,ie.width,ie.height,qt,Ft,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,re,ie.width,ie.height,0,qt,Ft,ie.data)}}else{Jt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,qt,Ft,It[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,qt,Ft,It[xt]);for(let Dt=0;Dt<ct.length;Dt++){const Lt=ct[Dt];Jt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,qt,Ft,Lt.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,re,qt,Ft,Lt.image[xt])}}}x(A)&&S(r.TEXTURE_CUBE_MAP),gt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function yt(O,A,at,mt,Mt,gt){const Wt=c.convert(at.format,at.colorSpace),Ut=c.convert(at.type),Bt=L(at.internalFormat,Wt,Ut,at.colorSpace),ge=s.get(A),wt=s.get(at);if(wt.__renderTarget=A,!ge.__hasExternalTextures){const It=Math.max(1,A.width>>gt),Qt=Math.max(1,A.height>>gt);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,gt,Bt,It,Qt,A.depth,0,Wt,Ut,null):i.texImage2D(Mt,gt,Bt,It,Qt,0,Wt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),de(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,Mt,wt.__webglTexture,0,le(A)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,Mt,wt.__webglTexture,gt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(O,A,at){if(r.bindRenderbuffer(r.RENDERBUFFER,O),A.depthBuffer){const mt=A.depthTexture,Mt=mt&&mt.isDepthTexture?mt.type:null,gt=D(A.stencilBuffer,Mt),Wt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=le(A);de(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,gt,A.width,A.height):at?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,gt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,gt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Wt,r.RENDERBUFFER,O)}else{const mt=A.textures;for(let Mt=0;Mt<mt.length;Mt++){const gt=mt[Mt],Wt=c.convert(gt.format,gt.colorSpace),Ut=c.convert(gt.type),Bt=L(gt.internalFormat,Wt,Ut,gt.colorSpace),ge=le(A);at&&de(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Bt,A.width,A.height):de(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,Bt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(A.depthTexture);mt.__renderTarget=A,(!mt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q(A.depthTexture,0);const Mt=mt.__webglTexture,gt=le(A);if(A.depthTexture.format===Tr)de(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0,gt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===Dr)de(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0,gt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Pt(O){const A=s.get(O),at=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),mt){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,mt.removeEventListener("dispose",Mt)};mt.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=mt}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Ct(A.__webglFramebuffer,O)}else if(at){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]===void 0)A.__webglDepthbuffer[mt]=r.createRenderbuffer(),Et(A.__webglDepthbuffer[mt],O,!1);else{const Mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,gt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Et(A.__webglDepthbuffer,O,!1);else{const mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,Mt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(O,A,at){const mt=s.get(O);A!==void 0&&yt(mt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),at!==void 0&&Pt(O)}function _e(O){const A=O.texture,at=s.get(O),mt=s.get(A);O.addEventListener("dispose",B);const Mt=O.textures,gt=O.isWebGLCubeRenderTarget===!0,Wt=Mt.length>1;if(Wt||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=A.version,f.memory.textures++),gt){at.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[Ut]=[];for(let Bt=0;Bt<A.mipmaps.length;Bt++)at.__webglFramebuffer[Ut][Bt]=r.createFramebuffer()}else at.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)at.__webglFramebuffer[Ut]=r.createFramebuffer()}else at.__webglFramebuffer=r.createFramebuffer();if(Wt)for(let Ut=0,Bt=Mt.length;Ut<Bt;Ut++){const ge=s.get(Mt[Ut]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&de(O)===!1){at.__webglMultisampledFramebuffer=r.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Mt.length;Ut++){const Bt=Mt[Ut];at.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,at.__webglColorRenderbuffer[Ut]);const ge=c.convert(Bt.format,Bt.colorSpace),wt=c.convert(Bt.type),It=L(Bt.internalFormat,ge,wt,Bt.colorSpace,O.isXRRenderTarget===!0),Qt=le(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,It,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,at.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(at.__webglDepthRenderbuffer=r.createRenderbuffer(),Et(at.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(gt){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),At(r.TEXTURE_CUBE_MAP,A);for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)yt(at.__webglFramebuffer[Ut][Bt],O,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Bt);else yt(at.__webglFramebuffer[Ut],O,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);x(A)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Ut=0,Bt=Mt.length;Ut<Bt;Ut++){const ge=Mt[Ut],wt=s.get(ge);i.bindTexture(r.TEXTURE_2D,wt.__webglTexture),At(r.TEXTURE_2D,ge),yt(at.__webglFramebuffer,O,ge,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,0),x(ge)&&S(r.TEXTURE_2D)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),At(Ut,A),A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)yt(at.__webglFramebuffer[Bt],O,A,r.COLOR_ATTACHMENT0,Ut,Bt);else yt(at.__webglFramebuffer,O,A,r.COLOR_ATTACHMENT0,Ut,0);x(A)&&S(Ut),i.unbindTexture()}O.depthBuffer&&Pt(O)}function ae(O){const A=O.textures;for(let at=0,mt=A.length;at<mt;at++){const Mt=A[at];if(x(Mt)){const gt=N(O),Wt=s.get(Mt).__webglTexture;i.bindTexture(gt,Wt),S(gt),i.unbindTexture()}}}const Me=[],j=[];function Ke(O){if(O.samples>0){if(de(O)===!1){const A=O.textures,at=O.width,mt=O.height;let Mt=r.COLOR_BUFFER_BIT;const gt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Wt=s.get(O),Ut=A.length>1;if(Ut)for(let Bt=0;Bt<A.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[Bt]);const ge=s.get(A[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,at,mt,0,0,at,mt,Mt,r.NEAREST),p===!0&&(Me.length=0,j.length=0,Me.push(r.COLOR_ATTACHMENT0+Bt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Me.push(gt),j.push(gt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,j)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let Bt=0;Bt<A.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[Bt]);const ge=s.get(A[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const A=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function le(O){return Math.min(l.maxSamples,O.samples)}function de(O){const A=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Zt(O){const A=f.render.frame;g.get(O)!==A&&(g.set(O,A),O.update())}function Ue(O,A){const at=O.colorSpace,mt=O.format,Mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||at!==Nr&&at!==Fa&&(Te.getTransfer(at)===Be?(mt!==vi||Mt!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function Kt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=tt,this.resetTextureUnits=lt,this.setTexture2D=Q,this.setTexture2DArray=z,this.setTexture3D=et,this.setTextureCube=X,this.rebindTextures=Ht,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=de}function vR(r,t){function i(s,l=Fa){let c;const f=Te.getTransfer(l);if(s===oa)return r.UNSIGNED_BYTE;if(s===Id)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===pv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===hv)return r.BYTE;if(s===dv)return r.SHORT;if(s===Wo)return r.UNSIGNED_SHORT;if(s===Bd)return r.INT;if(s===Ts)return r.UNSIGNED_INT;if(s===aa)return r.FLOAT;if(s===Zo)return r.HALF_FLOAT;if(s===mv)return r.ALPHA;if(s===gv)return r.RGB;if(s===vi)return r.RGBA;if(s===_v)return r.LUMINANCE;if(s===vv)return r.LUMINANCE_ALPHA;if(s===Tr)return r.DEPTH_COMPONENT;if(s===Dr)return r.DEPTH_STENCIL;if(s===xv)return r.RED;if(s===Hd)return r.RED_INTEGER;if(s===Sv)return r.RG;if(s===Gd)return r.RG_INTEGER;if(s===Vd)return r.RGBA_INTEGER;if(s===Oc||s===Pc||s===zc||s===Bc)if(f===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ad||s===sd||s===rd||s===od)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ld||s===cd||s===ud)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ld||s===cd)return f===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ud)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===yd||s===Md||s===Ed||s===Td)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===fd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===md)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_d)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Md)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ed)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Td)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ic||s===bd||s===Ad)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ic)return f===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ad)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yv||s===Rd||s===wd||s===Cd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ic)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Rd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class xR extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Go extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SR={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const x=i.getJointPose(T,s),S=this._getHandJoint(m,T);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;m.inputState.pinching&&v>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(SR)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Go;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ER{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new An,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wa({vertexShader:yR,fragmentShader:MR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ee(new $o(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TR extends Or{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,v=null,y=null,E=null;const T=new ER,x=i.getContextAttributes();let S=null,N=null;const L=[],D=[],G=new be;let H=null;const B=new Yn;B.viewport=new Ie;const q=new Yn;q.viewport=new Ie;const R=[B,q],b=new xR;let I=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let ut=L[F];return ut===void 0&&(ut=new Oh,L[F]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(F){let ut=L[F];return ut===void 0&&(ut=new Oh,L[F]=ut),ut.getGripSpace()},this.getHand=function(F){let ut=L[F];return ut===void 0&&(ut=new Oh,L[F]=ut),ut.getHandSpace()};function tt(F){const ut=D.indexOf(F.inputSource);if(ut===-1)return;const yt=L[ut];yt!==void 0&&(yt.update(F.inputSource,F.frame,m||f),yt.dispatchEvent({type:F.type,data:F.inputSource}))}function ft(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",Q);for(let F=0;F<L.length;F++){const ut=D[F];ut!==null&&(D[F]=null,L[F].disconnect(ut))}I=null,lt=null,T.reset(),t.setRenderTarget(S),y=null,v=null,_=null,l=null,N=null,_t.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){c=F,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){d=F,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(F){m=F},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(F){if(l=F,l!==null){if(S=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(G),l.renderState.layers===void 0){const ut={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new bs(y.framebufferWidth,y.framebufferHeight,{format:vi,type:oa,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ut=null,yt=null,Et=null;x.depth&&(Et=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=x.stencil?Dr:Tr,yt=x.stencil?Cr:Ts);const Ct={colorFormat:i.RGBA8,depthFormat:Et,scaleFactor:c};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(Ct),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new bs(v.textureWidth,v.textureHeight,{format:vi,type:oa,depthTexture:new zv(v.textureWidth,v.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),_t.setContext(l),_t.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function Q(F){for(let ut=0;ut<F.removed.length;ut++){const yt=F.removed[ut],Et=D.indexOf(yt);Et>=0&&(D[Et]=null,L[Et].disconnect(yt))}for(let ut=0;ut<F.added.length;ut++){const yt=F.added[ut];let Et=D.indexOf(yt);if(Et===-1){for(let Pt=0;Pt<L.length;Pt++)if(Pt>=D.length){D.push(yt),Et=Pt;break}else if(D[Pt]===null){D[Pt]=yt,Et=Pt;break}if(Et===-1)break}const Ct=L[Et];Ct&&Ct.connect(yt)}}const z=new $,et=new $;function X(F,ut,yt){z.setFromMatrixPosition(ut.matrixWorld),et.setFromMatrixPosition(yt.matrixWorld);const Et=z.distanceTo(et),Ct=ut.projectionMatrix.elements,Pt=yt.projectionMatrix.elements,Ht=Ct[14]/(Ct[10]-1),_e=Ct[14]/(Ct[10]+1),ae=(Ct[9]+1)/Ct[5],Me=(Ct[9]-1)/Ct[5],j=(Ct[8]-1)/Ct[0],Ke=(Pt[8]+1)/Pt[0],le=Ht*j,de=Ht*Ke,Zt=Et/(-j+Ke),Ue=Zt*-j;if(ut.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ue),F.translateZ(Zt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Ct[10]===-1)F.projectionMatrix.copy(ut.projectionMatrix),F.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Kt=Ht+Zt,O=_e+Zt,A=le-Ue,at=de+(Et-Ue),mt=ae*_e/O*Kt,Mt=Me*_e/O*Kt;F.projectionMatrix.makePerspective(A,at,mt,Mt,Kt,O),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ht(F,ut){ut===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(ut.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(l===null)return;let ut=F.near,yt=F.far;T.texture!==null&&(T.depthNear>0&&(ut=T.depthNear),T.depthFar>0&&(yt=T.depthFar)),b.near=q.near=B.near=ut,b.far=q.far=B.far=yt,(I!==b.near||lt!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,lt=b.far),B.layers.mask=F.layers.mask|2,q.layers.mask=F.layers.mask|4,b.layers.mask=B.layers.mask|q.layers.mask;const Et=F.parent,Ct=b.cameras;ht(b,Et);for(let Pt=0;Pt<Ct.length;Pt++)ht(Ct[Pt],Et);Ct.length===2?X(b,B,q):b.projectionMatrix.copy(B.projectionMatrix),U(F,b,Et)};function U(F,ut,yt){yt===null?F.matrix.copy(ut.matrixWorld):(F.matrix.copy(yt.matrixWorld),F.matrix.invert(),F.matrix.multiply(ut.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(ut.projectionMatrix),F.projectionMatrixInverse.copy(ut.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Dd*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(F){p=F,v!==null&&(v.fixedFoveation=F),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=F)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(b)};let it=null;function At(F,ut){if(g=ut.getViewerPose(m||f),E=ut,g!==null){const yt=g.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Et=!1;yt.length!==b.cameras.length&&(b.cameras.length=0,Et=!0);for(let Pt=0;Pt<yt.length;Pt++){const Ht=yt[Pt];let _e=null;if(y!==null)_e=y.getViewport(Ht);else{const Me=_.getViewSubImage(v,Ht);_e=Me.viewport,Pt===0&&(t.setRenderTargetTextures(N,Me.colorTexture,v.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(N))}let ae=R[Pt];ae===void 0&&(ae=new Yn,ae.layers.enable(Pt),ae.viewport=new Ie,R[Pt]=ae),ae.matrix.fromArray(Ht.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ht.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(_e.x,_e.y,_e.width,_e.height),Pt===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Et===!0&&b.cameras.push(ae)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Pt=_.getDepthInformation(yt[0]);Pt&&Pt.isValid&&Pt.texture&&T.init(t,Pt,l.renderState)}}for(let yt=0;yt<L.length;yt++){const Et=D[yt],Ct=L[yt];Et!==null&&Ct!==void 0&&Ct.update(Et,ut,m||f)}it&&it(F,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),E=null}const _t=new Ov;_t.setAnimationLoop(At),this.setAnimationLoop=function(F){it=F},this.dispose=function(){}}}const gs=new Ui,bR=new ke;function AR(r,t){function i(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function s(x,S){S.color.getRGB(x.fogColor.value,Uv(r)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function l(x,S,N,L,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(x,S):S.isMeshToonMaterial?(c(x,S),_(x,S)):S.isMeshPhongMaterial?(c(x,S),g(x,S)):S.isMeshStandardMaterial?(c(x,S),v(x,S),S.isMeshPhysicalMaterial&&y(x,S,D)):S.isMeshMatcapMaterial?(c(x,S),E(x,S)):S.isMeshDepthMaterial?c(x,S):S.isMeshDistanceMaterial?(c(x,S),T(x,S)):S.isMeshNormalMaterial?c(x,S):S.isLineBasicMaterial?(f(x,S),S.isLineDashedMaterial&&d(x,S)):S.isPointsMaterial?p(x,S,N,L):S.isSpriteMaterial?m(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,i(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Nn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,i(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Nn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,i(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,i(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const N=t.get(S),L=N.envMap,D=N.envMapRotation;L&&(x.envMap.value=L,gs.copy(D),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),x.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(gs)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,x.aoMapTransform))}function f(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform))}function d(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function p(x,S,N,L){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*N,x.scale.value=L*.5,S.map&&(x.map.value=S.map,i(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function m(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function g(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function v(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,N){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Nn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function T(x,S){const N=t.get(S).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function RR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const D=L.program;s.uniformBlockBinding(N,D)}function m(N,L){let D=l[N.id];D===void 0&&(E(N),D=g(N),l[N.id]=D,N.addEventListener("dispose",x));const G=L.program;s.updateUBOMapping(N,G);const H=t.render.frame;c[N.id]!==H&&(v(N),c[N.id]=H)}function g(N){const L=_();N.__bindingPointIndex=L;const D=r.createBuffer(),G=N.__size,H=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,G,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function _(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=l[N.id],D=N.uniforms,G=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,B=D.length;H<B;H++){const q=Array.isArray(D[H])?D[H]:[D[H]];for(let R=0,b=q.length;R<b;R++){const I=q[R];if(y(I,H,R,G)===!0){const lt=I.__offset,tt=Array.isArray(I.value)?I.value:[I.value];let ft=0;for(let Q=0;Q<tt.length;Q++){const z=tt[Q],et=T(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,lt+ft,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,ft),ft+=et.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,lt,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(N,L,D,G){const H=N.value,B=L+"_"+D;if(G[B]===void 0)return typeof H=="number"||typeof H=="boolean"?G[B]=H:G[B]=H.clone(),!0;{const q=G[B];if(typeof H=="number"||typeof H=="boolean"){if(q!==H)return G[B]=H,!0}else if(q.equals(H)===!1)return q.copy(H),!0}return!1}function E(N){const L=N.uniforms;let D=0;const G=16;for(let B=0,q=L.length;B<q;B++){const R=Array.isArray(L[B])?L[B]:[L[B]];for(let b=0,I=R.length;b<I;b++){const lt=R[b],tt=Array.isArray(lt.value)?lt.value:[lt.value];for(let ft=0,Q=tt.length;ft<Q;ft++){const z=tt[ft],et=T(z),X=D%G,ht=X%et.boundary,U=X+ht;D+=ht,U!==0&&G-U<et.storage&&(D+=G-U),lt.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=et.storage}}}const H=D%G;return H>0&&(D+=G-H),N.__size=D,N.__cache={},this}function T(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function x(N){const L=N.target;L.removeEventListener("dispose",x);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:p,update:m,dispose:S}}class wR{constructor(t={}){const{canvas:i=gE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),T=new Int32Array(4);let x=null,S=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Va,this.toneMappingExposure=1;const D=this;let G=!1,H=0,B=0,q=null,R=-1,b=null;const I=new Ie,lt=new Ie;let tt=null;const ft=new Ce(0);let Q=0,z=i.width,et=i.height,X=1,ht=null,U=null;const it=new Ie(0,0,z,et),At=new Ie(0,0,z,et);let _t=!1;const F=new qd;let ut=!1,yt=!1;const Et=new ke,Ct=new ke,Pt=new $,Ht=new Ie,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Me(){return q===null?X:1}let j=s;function Ke(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zd}`),i.addEventListener("webglcontextlost",xt,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),j===null){const Z="webgl2";if(j=Ke(Z,C),j===null)throw Ke(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let le,de,Zt,Ue,Kt,O,A,at,mt,Mt,gt,Wt,Ut,Bt,ge,wt,It,Qt,qt,Ft,re,Jt,Ne,W;function Ot(){le=new Nb(j),le.init(),Jt=new vR(j,le),de=new Rb(j,le,t,Jt),Zt=new mR(j,le),de.reverseDepthBuffer&&v&&Zt.buffers.depth.setReversed(!0),Ue=new zb(j),Kt=new tR,O=new _R(j,le,Zt,Kt,de,Jt,Ue),A=new Cb(D),at=new Lb(D),mt=new kE(j),Ne=new bb(j,mt),Mt=new Ob(j,mt,Ue,Ne),gt=new Ib(j,Mt,mt,Ue),qt=new Bb(j,de,O),wt=new wb(Kt),Wt=new $A(D,A,at,le,de,Ne,wt),Ut=new AR(D,Kt),Bt=new nR,ge=new lR(le),Qt=new Tb(D,A,at,Zt,gt,y,p),It=new dR(D,gt,de),W=new RR(j,Ue,de,Zt),Ft=new Ab(j,le,Ue),re=new Pb(j,le,Ue),Ue.programs=Wt.programs,D.capabilities=de,D.extensions=le,D.properties=Kt,D.renderLists=Bt,D.shadowMap=It,D.state=Zt,D.info=Ue}Ot();const ct=new TR(D,j);this.xr=ct,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(z,et,!1))},this.getSize=function(C){return C.set(z,et)},this.setSize=function(C,Z,st=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,et=Z,i.width=Math.floor(C*X),i.height=Math.floor(Z*X),st===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(z*X,et*X).floor()},this.setDrawingBufferSize=function(C,Z,st){z=C,et=Z,X=st,i.width=Math.floor(C*st),i.height=Math.floor(Z*st),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,Z,st,ot){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,Z,st,ot),Zt.viewport(I.copy(it).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(At)},this.setScissor=function(C,Z,st,ot){C.isVector4?At.set(C.x,C.y,C.z,C.w):At.set(C,Z,st,ot),Zt.scissor(lt.copy(At).multiplyScalar(X).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(C){Zt.setScissorTest(_t=C)},this.setOpaqueSort=function(C){ht=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(C=!0,Z=!0,st=!0){let ot=0;if(C){let Y=!1;if(q!==null){const bt=q.texture.format;Y=bt===Vd||bt===Gd||bt===Hd}if(Y){const bt=q.texture.type,Rt=bt===oa||bt===Ts||bt===Wo||bt===Cr||bt===Id||bt===Fd,Vt=Qt.getClearColor(),kt=Qt.getClearAlpha(),te=Vt.r,ne=Vt.g,zt=Vt.b;Rt?(E[0]=te,E[1]=ne,E[2]=zt,E[3]=kt,j.clearBufferuiv(j.COLOR,0,E)):(T[0]=te,T[1]=ne,T[2]=zt,T[3]=kt,j.clearBufferiv(j.COLOR,0,T))}else ot|=j.COLOR_BUFFER_BIT}Z&&(ot|=j.DEPTH_BUFFER_BIT),st&&(ot|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xt,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Bt.dispose(),ge.dispose(),Kt.dispose(),A.dispose(),at.dispose(),gt.dispose(),Ne.dispose(),W.dispose(),Wt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",tl),ct.removeEventListener("sessionend",Br),yi.stop()};function xt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const C=Ue.autoReset,Z=It.enabled,st=It.autoUpdate,ot=It.needsUpdate,Y=It.type;Ot(),Ue.autoReset=C,It.enabled=Z,It.autoUpdate=st,It.needsUpdate=ot,It.type=Y}function Lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const Z=C.target;Z.removeEventListener("dispose",ie),Ve(Z)}function Ve(C){nn(C),Kt.remove(C)}function nn(C){const Z=Kt.get(C).programs;Z!==void 0&&(Z.forEach(function(st){Wt.releaseProgram(st)}),C.isShaderMaterial&&Wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,st,ot,Y,bt){Z===null&&(Z=_e);const Rt=Y.isMesh&&Y.matrixWorld.determinant()<0,Vt=Yc(C,Z,st,ot,Y);Zt.setMaterial(ot,Rt);let kt=st.index,te=1;if(ot.wireframe===!0){if(kt=Mt.getWireframeAttribute(st),kt===void 0)return;te=2}const ne=st.drawRange,zt=st.attributes.position;let Se=ne.start*te,Le=(ne.start+ne.count)*te;bt!==null&&(Se=Math.max(Se,bt.start*te),Le=Math.min(Le,(bt.start+bt.count)*te)),kt!==null?(Se=Math.max(Se,0),Le=Math.min(Le,kt.count)):zt!=null&&(Se=Math.max(Se,0),Le=Math.min(Le,zt.count));const Oe=Le-Se;if(Oe<0||Oe===1/0)return;Ne.setup(Y,ot,Vt,st,kt);let Sn,ve=Ft;if(kt!==null&&(Sn=mt.get(kt),ve=re,ve.setIndex(Sn)),Y.isMesh)ot.wireframe===!0?(Zt.setLineWidth(ot.wireframeLinewidth*Me()),ve.setMode(j.LINES)):ve.setMode(j.TRIANGLES);else if(Y.isLine){let Xt=ot.linewidth;Xt===void 0&&(Xt=1),Zt.setLineWidth(Xt*Me()),Y.isLineSegments?ve.setMode(j.LINES):Y.isLineLoop?ve.setMode(j.LINE_LOOP):ve.setMode(j.LINE_STRIP)}else Y.isPoints?ve.setMode(j.POINTS):Y.isSprite&&ve.setMode(j.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ve.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ve.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xt=Y._multiDrawStarts,rn=Y._multiDrawCounts,oe=Y._multiDrawCount,On=kt?mt.get(kt).bytesPerElement:1,ca=Kt.get(ot).currentProgram.getUniforms();for(let fn=0;fn<oe;fn++)ca.setValue(j,"_gl_DrawID",fn),ve.render(Xt[fn]/On,rn[fn])}else if(Y.isInstancedMesh)ve.renderInstances(Se,Oe,Y.count);else if(st.isInstancedBufferGeometry){const Xt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,rn=Math.min(st.instanceCount,Xt);ve.renderInstances(Se,Oe,rn)}else ve.render(Se,Oe)};function Ae(C,Z,st){C.transparent===!0&&C.side===na&&C.forceSinglePass===!1?(C.side=Nn,C.needsUpdate=!0,sn(C,Z,st),C.side=Xa,C.needsUpdate=!0,sn(C,Z,st),C.side=na):sn(C,Z,st)}this.compile=function(C,Z,st=null){st===null&&(st=C),S=ge.get(st),S.init(Z),L.push(S),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Z.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),C!==st&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Z.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights();const ot=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const bt=Y.material;if(bt)if(Array.isArray(bt))for(let Rt=0;Rt<bt.length;Rt++){const Vt=bt[Rt];Ae(Vt,st,Y),ot.add(Vt)}else Ae(bt,st,Y),ot.add(bt)}),L.pop(),S=null,ot},this.compileAsync=function(C,Z,st=null){const ot=this.compile(C,Z,st);return new Promise(Y=>{function bt(){if(ot.forEach(function(Rt){Kt.get(Rt).currentProgram.isReady()&&ot.delete(Rt)}),ot.size===0){Y(C);return}setTimeout(bt,10)}le.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let wn=null;function Cn(C){wn&&wn(C)}function tl(){yi.stop()}function Br(){yi.start()}const yi=new Ov;yi.setAnimationLoop(Cn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(C){wn=C,ct.setAnimationLoop(C),C===null?yi.stop():yi.start()},ct.addEventListener("sessionstart",tl),ct.addEventListener("sessionend",Br),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Z),Z=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,Z,q),S=ge.get(C,L.length),S.init(Z),L.push(S),Ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,ut=wt.init(this.clippingPlanes,yt),x=Bt.get(C,N.length),x.init(),N.push(x),ct.enabled===!0&&ct.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&Rs(bt,Z,-1/0,D.sortObjects)}Rs(C,Z,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(ht,U),ae=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ae&&Qt.addToRenderList(x,C),this.info.render.frame++,ut===!0&&wt.beginShadows();const st=S.state.shadowsArray;It.render(st,C,Z),ut===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=x.opaque,Y=x.transmissive;if(S.setupLights(),Z.isArrayCamera){const bt=Z.cameras;if(Y.length>0)for(let Rt=0,Vt=bt.length;Rt<Vt;Rt++){const kt=bt[Rt];el(ot,Y,C,kt)}ae&&Qt.render(C);for(let Rt=0,Vt=bt.length;Rt<Vt;Rt++){const kt=bt[Rt];Ir(x,C,kt,kt.viewport)}}else Y.length>0&&el(ot,Y,C,Z),ae&&Qt.render(C),Ir(x,C,Z);q!==null&&(O.updateMultisampleRenderTarget(q),O.updateRenderTargetMipmap(q)),C.isScene===!0&&C.onAfterRender(D,C,Z),Ne.resetDefaultState(),R=-1,b=null,L.pop(),L.length>0?(S=L[L.length-1],ut===!0&&wt.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function Rs(C,Z,st,ot){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||F.intersectsSprite(C)){ot&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const Rt=gt.update(C),Vt=C.material;Vt.visible&&x.push(C,Rt,Vt,st,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||F.intersectsObject(C))){const Rt=gt.update(C),Vt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ht.copy(Rt.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Vt)){const kt=Rt.groups;for(let te=0,ne=kt.length;te<ne;te++){const zt=kt[te],Se=Vt[zt.materialIndex];Se&&Se.visible&&x.push(C,Rt,Se,st,Ht.z,zt)}}else Vt.visible&&x.push(C,Rt,Vt,st,Ht.z,null)}}const bt=C.children;for(let Rt=0,Vt=bt.length;Rt<Vt;Rt++)Rs(bt[Rt],Z,st,ot)}function Ir(C,Z,st,ot){const Y=C.opaque,bt=C.transmissive,Rt=C.transparent;S.setupLightsView(st),ut===!0&&wt.setGlobalState(D.clippingPlanes,st),ot&&Zt.viewport(I.copy(ot)),Y.length>0&&Fn(Y,Z,st),bt.length>0&&Fn(bt,Z,st),Rt.length>0&&Fn(Rt,Z,st),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function el(C,Z,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[ot.id]===void 0&&(S.state.transmissionRenderTarget[ot.id]=new bs(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Zo:oa,minFilter:Ms,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const bt=S.state.transmissionRenderTarget[ot.id],Rt=ot.viewport||I;bt.setSize(Rt.z,Rt.w);const Vt=D.getRenderTarget();D.setRenderTarget(bt),D.getClearColor(ft),Q=D.getClearAlpha(),Q<1&&D.setClearColor(16777215,.5),D.clear(),ae&&Qt.render(st);const kt=D.toneMapping;D.toneMapping=Va;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),S.setupLightsView(ot),ut===!0&&wt.setGlobalState(D.clippingPlanes,ot),Fn(C,st,ot),O.updateMultisampleRenderTarget(bt),O.updateRenderTargetMipmap(bt),le.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let zt=0,Se=Z.length;zt<Se;zt++){const Le=Z[zt],Oe=Le.object,Sn=Le.geometry,ve=Le.material,Xt=Le.group;if(ve.side===na&&Oe.layers.test(ot.layers)){const rn=ve.side;ve.side=Nn,ve.needsUpdate=!0,an(Oe,st,ot,Sn,ve,Xt),ve.side=rn,ve.needsUpdate=!0,ne=!0}}ne===!0&&(O.updateMultisampleRenderTarget(bt),O.updateRenderTargetMipmap(bt))}D.setRenderTarget(Vt),D.setClearColor(ft,Q),te!==void 0&&(ot.viewport=te),D.toneMapping=kt}function Fn(C,Z,st){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let Y=0,bt=C.length;Y<bt;Y++){const Rt=C[Y],Vt=Rt.object,kt=Rt.geometry,te=ot===null?Rt.material:ot,ne=Rt.group;Vt.layers.test(st.layers)&&an(Vt,Z,st,kt,te,ne)}}function an(C,Z,st,ot,Y,bt){C.onBeforeRender(D,Z,st,ot,Y,bt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(D,Z,st,ot,C,bt),Y.transparent===!0&&Y.side===na&&Y.forceSinglePass===!1?(Y.side=Nn,Y.needsUpdate=!0,D.renderBufferDirect(st,Z,ot,Y,C,bt),Y.side=Xa,Y.needsUpdate=!0,D.renderBufferDirect(st,Z,ot,Y,C,bt),Y.side=na):D.renderBufferDirect(st,Z,ot,Y,C,bt),C.onAfterRender(D,Z,st,ot,Y,bt)}function sn(C,Z,st){Z.isScene!==!0&&(Z=_e);const ot=Kt.get(C),Y=S.state.lights,bt=S.state.shadowsArray,Rt=Y.state.version,Vt=Wt.getParameters(C,Y.state,bt,Z,st),kt=Wt.getProgramCacheKey(Vt);let te=ot.programs;ot.environment=C.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(C.isMeshStandardMaterial?at:A).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,te===void 0&&(C.addEventListener("dispose",ie),te=new Map,ot.programs=te);let ne=te.get(kt);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===Rt)return ws(C,Vt),ne}else Vt.uniforms=Wt.getUniforms(C),C.onBeforeCompile(Vt,D),ne=Wt.acquireProgram(Vt,kt),te.set(kt,ne),ot.uniforms=Vt.uniforms;const zt=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=wt.uniform),ws(C,Vt),ot.needsLights=nl(C),ot.lightsStateVersion=Rt,ot.needsLights&&(zt.ambientLightColor.value=Y.state.ambient,zt.lightProbe.value=Y.state.probe,zt.directionalLights.value=Y.state.directional,zt.directionalLightShadows.value=Y.state.directionalShadow,zt.spotLights.value=Y.state.spot,zt.spotLightShadows.value=Y.state.spotShadow,zt.rectAreaLights.value=Y.state.rectArea,zt.ltc_1.value=Y.state.rectAreaLTC1,zt.ltc_2.value=Y.state.rectAreaLTC2,zt.pointLights.value=Y.state.point,zt.pointLightShadows.value=Y.state.pointShadow,zt.hemisphereLights.value=Y.state.hemi,zt.directionalShadowMap.value=Y.state.directionalShadowMap,zt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,zt.spotShadowMap.value=Y.state.spotShadowMap,zt.spotLightMatrix.value=Y.state.spotLightMatrix,zt.spotLightMap.value=Y.state.spotLightMap,zt.pointShadowMap.value=Y.state.pointShadowMap,zt.pointShadowMatrix.value=Y.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function Li(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Fc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function ws(C,Z){const st=Kt.get(C);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function Yc(C,Z,st,ot,Y){Z.isScene!==!0&&(Z=_e),O.resetTextureUnits();const bt=Z.fog,Rt=ot.isMeshStandardMaterial?Z.environment:null,Vt=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Nr,kt=(ot.isMeshStandardMaterial?at:A).get(ot.envMap||Rt),te=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ne=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),zt=!!st.morphAttributes.position,Se=!!st.morphAttributes.normal,Le=!!st.morphAttributes.color;let Oe=Va;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Oe=D.toneMapping);const Sn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ve=Sn!==void 0?Sn.length:0,Xt=Kt.get(ot),rn=S.state.lights;if(ut===!0&&(yt===!0||C!==b)){const yn=C===b&&ot.id===R;wt.setState(ot,C,yn)}let oe=!1;ot.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==rn.state.version||Xt.outputColorSpace!==Vt||Y.isBatchedMesh&&Xt.batching===!1||!Y.isBatchedMesh&&Xt.batching===!0||Y.isBatchedMesh&&Xt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xt.instancing===!1||!Y.isInstancedMesh&&Xt.instancing===!0||Y.isSkinnedMesh&&Xt.skinning===!1||!Y.isSkinnedMesh&&Xt.skinning===!0||Y.isInstancedMesh&&Xt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xt.instancingMorph===!1&&Y.morphTexture!==null||Xt.envMap!==kt||ot.fog===!0&&Xt.fog!==bt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==wt.numPlanes||Xt.numIntersection!==wt.numIntersection)||Xt.vertexAlphas!==te||Xt.vertexTangents!==ne||Xt.morphTargets!==zt||Xt.morphNormals!==Se||Xt.morphColors!==Le||Xt.toneMapping!==Oe||Xt.morphTargetsCount!==ve)&&(oe=!0):(oe=!0,Xt.__version=ot.version);let On=Xt.currentProgram;oe===!0&&(On=sn(ot,Z,Y));let ca=!1,fn=!1,ua=!1;const De=On.getUniforms(),Kn=Xt.uniforms;if(Zt.useProgram(On.program)&&(ca=!0,fn=!0,ua=!0),ot.id!==R&&(R=ot.id,fn=!0),ca||b!==C){Zt.buffers.depth.getReversed()?(Et.copy(C.projectionMatrix),vE(Et),xE(Et),De.setValue(j,"projectionMatrix",Et)):De.setValue(j,"projectionMatrix",C.projectionMatrix),De.setValue(j,"viewMatrix",C.matrixWorldInverse);const ci=De.map.cameraPosition;ci!==void 0&&ci.setValue(j,Pt.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&De.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&De.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,fn=!0,ua=!0)}if(Y.isSkinnedMesh){De.setOptional(j,Y,"bindMatrix"),De.setOptional(j,Y,"bindMatrixInverse");const yn=Y.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),De.setValue(j,"boneTexture",yn.boneTexture,O))}Y.isBatchedMesh&&(De.setOptional(j,Y,"batchingTexture"),De.setValue(j,"batchingTexture",Y._matricesTexture,O),De.setOptional(j,Y,"batchingIdTexture"),De.setValue(j,"batchingIdTexture",Y._indirectTexture,O),De.setOptional(j,Y,"batchingColorTexture"),Y._colorsTexture!==null&&De.setValue(j,"batchingColorTexture",Y._colorsTexture,O));const hn=st.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&qt.update(Y,st,On),(fn||Xt.receiveShadow!==Y.receiveShadow)&&(Xt.receiveShadow=Y.receiveShadow,De.setValue(j,"receiveShadow",Y.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Kn.envMap.value=kt,Kn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(Kn.envMapIntensity.value=Z.environmentIntensity),fn&&(De.setValue(j,"toneMappingExposure",D.toneMappingExposure),Xt.needsLights&&Zc(Kn,ua),bt&&ot.fog===!0&&Ut.refreshFogUniforms(Kn,bt),Ut.refreshMaterialUniforms(Kn,ot,X,et,S.state.transmissionRenderTarget[C.id]),Fc.upload(j,Li(Xt),Kn,O)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Fc.upload(j,Li(Xt),Kn,O),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&De.setValue(j,"center",Y.center),De.setValue(j,"modelViewMatrix",Y.modelViewMatrix),De.setValue(j,"normalMatrix",Y.normalMatrix),De.setValue(j,"modelMatrix",Y.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const yn=ot.uniformsGroups;for(let ci=0,Qn=yn.length;ci<Qn;ci++){const Ni=yn[ci];W.update(Ni,On),W.bind(Ni,On)}}return On}function Zc(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function nl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,Z,st){Kt.get(C.texture).__webglTexture=Z,Kt.get(C.depthTexture).__webglTexture=st;const ot=Kt.get(C);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=st===void 0,ot.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Z){const st=Kt.get(C);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,st=0){q=C,H=Z,B=st;let ot=!0,Y=null,bt=!1,Rt=!1;if(C){const kt=Kt.get(C);if(kt.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(j.FRAMEBUFFER,null),ot=!1;else if(kt.__webglFramebuffer===void 0)O.setupRenderTarget(C);else if(kt.__hasExternalTextures)O.rebindTextures(C,Kt.get(C.texture).__webglTexture,Kt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const zt=C.depthTexture;if(kt.__boundDepthTexture!==zt){if(zt!==null&&Kt.has(zt)&&(C.width!==zt.image.width||C.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(C)}}const te=C.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Rt=!0);const ne=Kt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[Z])?Y=ne[Z][st]:Y=ne[Z],bt=!0):C.samples>0&&O.useMultisampledRTT(C)===!1?Y=Kt.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?Y=ne[st]:Y=ne,I.copy(C.viewport),lt.copy(C.scissor),tt=C.scissorTest}else I.copy(it).multiplyScalar(X).floor(),lt.copy(At).multiplyScalar(X).floor(),tt=_t;if(Zt.bindFramebuffer(j.FRAMEBUFFER,Y)&&ot&&Zt.drawBuffers(C,Y),Zt.viewport(I),Zt.scissor(lt),Zt.setScissorTest(tt),bt){const kt=Kt.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,kt.__webglTexture,st)}else if(Rt){const kt=Kt.get(C.texture),te=Z||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,kt.__webglTexture,st||0,te)}R=-1},this.readRenderTargetPixels=function(C,Z,st,ot,Y,bt,Rt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(Vt=Vt[Rt]),Vt){Zt.bindFramebuffer(j.FRAMEBUFFER,Vt);try{const kt=C.texture,te=kt.format,ne=kt.type;if(!de.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-Y&&j.readPixels(Z,st,ot,Y,Jt.convert(te),Jt.convert(ne),bt)}finally{const kt=q!==null?Kt.get(q).__webglFramebuffer:null;Zt.bindFramebuffer(j.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,st,ot,Y,bt,Rt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(Vt=Vt[Rt]),Vt){const kt=C.texture,te=kt.format,ne=kt.type;if(!de.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-Y){Zt.bindFramebuffer(j.FRAMEBUFFER,Vt);const zt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,zt),j.bufferData(j.PIXEL_PACK_BUFFER,bt.byteLength,j.STREAM_READ),j.readPixels(Z,st,ot,Y,Jt.convert(te),Jt.convert(ne),0);const Se=q!==null?Kt.get(q).__webglFramebuffer:null;Zt.bindFramebuffer(j.FRAMEBUFFER,Se);const Le=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await _E(j,Le,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,zt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,bt),j.deleteBuffer(zt),j.deleteSync(Le),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Z=null,st=0){C.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,C=arguments[1]);const ot=Math.pow(2,-st),Y=Math.floor(C.image.width*ot),bt=Math.floor(C.image.height*ot),Rt=Z!==null?Z.x:0,Vt=Z!==null?Z.y:0;O.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,st,0,0,Rt,Vt,Y,bt),Zt.unbindTexture()},this.copyTextureToTexture=function(C,Z,st=null,ot=null,Y=0){C.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,C=arguments[1],Z=arguments[2],Y=arguments[3]||0,st=null);let bt,Rt,Vt,kt,te,ne,zt,Se,Le;const Oe=C.isCompressedTexture?C.mipmaps[Y]:C.image;st!==null?(bt=st.max.x-st.min.x,Rt=st.max.y-st.min.y,Vt=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,te=st.min.y,ne=st.isBox3?st.min.z:0):(bt=Oe.width,Rt=Oe.height,Vt=Oe.depth||1,kt=0,te=0,ne=0),ot!==null?(zt=ot.x,Se=ot.y,Le=ot.z):(zt=0,Se=0,Le=0);const Sn=Jt.convert(Z.format),ve=Jt.convert(Z.type);let Xt;Z.isData3DTexture?(O.setTexture3D(Z,0),Xt=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(O.setTexture2DArray(Z,0),Xt=j.TEXTURE_2D_ARRAY):(O.setTexture2D(Z,0),Xt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);const rn=j.getParameter(j.UNPACK_ROW_LENGTH),oe=j.getParameter(j.UNPACK_IMAGE_HEIGHT),On=j.getParameter(j.UNPACK_SKIP_PIXELS),ca=j.getParameter(j.UNPACK_SKIP_ROWS),fn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Oe.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Oe.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,kt),j.pixelStorei(j.UNPACK_SKIP_ROWS,te),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ne);const ua=C.isDataArrayTexture||C.isData3DTexture,De=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Kn=Kt.get(C),hn=Kt.get(Z),yn=Kt.get(Kn.__renderTarget),ci=Kt.get(hn.__renderTarget);Zt.bindFramebuffer(j.READ_FRAMEBUFFER,yn.__webglFramebuffer),Zt.bindFramebuffer(j.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Qn=0;Qn<Vt;Qn++)ua&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Kt.get(C).__webglTexture,Y,ne+Qn),C.isDepthTexture?(De&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Kt.get(Z).__webglTexture,Y,Le+Qn),j.blitFramebuffer(kt,te,bt,Rt,zt,Se,bt,Rt,j.DEPTH_BUFFER_BIT,j.NEAREST)):De?j.copyTexSubImage3D(Xt,Y,zt,Se,Le+Qn,kt,te,bt,Rt):j.copyTexSubImage2D(Xt,Y,zt,Se,Le+Qn,kt,te,bt,Rt);Zt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else De?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(Xt,Y,zt,Se,Le,bt,Rt,Vt,Sn,ve,Oe.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(Xt,Y,zt,Se,Le,bt,Rt,Vt,Sn,Oe.data):j.texSubImage3D(Xt,Y,zt,Se,Le,bt,Rt,Vt,Sn,ve,Oe):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Y,zt,Se,bt,Rt,Sn,ve,Oe.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Y,zt,Se,Oe.width,Oe.height,Sn,Oe.data):j.texSubImage2D(j.TEXTURE_2D,Y,zt,Se,bt,Rt,Sn,ve,Oe);j.pixelStorei(j.UNPACK_ROW_LENGTH,rn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,oe),j.pixelStorei(j.UNPACK_SKIP_PIXELS,On),j.pixelStorei(j.UNPACK_SKIP_ROWS,ca),j.pixelStorei(j.UNPACK_SKIP_IMAGES,fn),Y===0&&Z.generateMipmaps&&j.generateMipmap(Xt),Zt.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,st=null,ot=null,Y=0){return C.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,ot=arguments[1]||null,C=arguments[2],Z=arguments[3],Y=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,st,ot,Y)},this.initRenderTarget=function(C){Kt.get(C).__webglFramebuffer===void 0&&O.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),Zt.unbindTexture()},this.resetState=function(){H=0,B=0,q=null,Zt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}class Gv extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class CR extends An{constructor(t,i,s,l,c,f,d,p,m){super(t,i,s,l,c,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qo extends la{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],y=[];let E=0;const T=[],x=s/2;let S=0;N(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Zn(_,3)),this.setAttribute("normal",new Zn(v,3)),this.setAttribute("uv",new Zn(y,2));function N(){const D=new $,G=new $;let H=0;const B=(i-t)/s;for(let q=0;q<=c;q++){const R=[],b=q/c,I=b*(i-t)+t;for(let lt=0;lt<=l;lt++){const tt=lt/l,ft=tt*p+d,Q=Math.sin(ft),z=Math.cos(ft);G.x=I*Q,G.y=-b*s+x,G.z=I*z,_.push(G.x,G.y,G.z),D.set(Q,B,z).normalize(),v.push(D.x,D.y,D.z),y.push(tt,1-b),R.push(E++)}T.push(R)}for(let q=0;q<l;q++)for(let R=0;R<c;R++){const b=T[R][q],I=T[R+1][q],lt=T[R+1][q+1],tt=T[R][q+1];(t>0||R!==0)&&(g.push(b,I,tt),H+=3),(i>0||R!==c-1)&&(g.push(I,lt,tt),H+=3)}m.addGroup(S,H,0),S+=H}function L(D){const G=E,H=new be,B=new $;let q=0;const R=D===!0?t:i,b=D===!0?1:-1;for(let lt=1;lt<=l;lt++)_.push(0,x*b,0),v.push(0,b,0),y.push(.5,.5),E++;const I=E;for(let lt=0;lt<=l;lt++){const ft=lt/l*p+d,Q=Math.cos(ft),z=Math.sin(ft);B.x=R*z,B.y=x*b,B.z=R*Q,_.push(B.x,B.y,B.z),v.push(0,b,0),H.x=Q*.5+.5,H.y=z*.5*b+.5,y.push(H.x,H.y),E++}for(let lt=0;lt<l;lt++){const tt=G+lt,ft=I+lt;D===!0?g.push(ft,ft+1,tt):g.push(ft+1,ft,tt),q+=3}m.addGroup(S,q,D===!0?1:2),S+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yd extends la{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],d=[],p=[],m=[],g=new $,_=new $,v=new $;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const T=E/l*c,x=y/s*Math.PI*2;_.x=(t+i*Math.cos(x))*Math.cos(T),_.y=(t+i*Math.cos(x))*Math.sin(T),_.z=i*Math.sin(x),d.push(_.x,_.y,_.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),v.subVectors(_,g).normalize(),p.push(v.x,v.y,v.z),m.push(E/l),m.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const T=(l+1)*y+E-1,x=(l+1)*(y-1)+E-1,S=(l+1)*(y-1)+E,N=(l+1)*y+E;f.push(T,x,N),f.push(x,S,N)}this.setIndex(f),this.setAttribute("position",new Zn(d,3)),this.setAttribute("normal",new Zn(p,3)),this.setAttribute("uv",new Zn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yd(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class DR extends Pr{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ka extends Pr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mv,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zd extends Rn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ph=new ke,z_=new $,B_=new $;class Vv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;z_.setFromMatrixPosition(t.matrixWorld),i.position.copy(z_),B_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(B_),i.updateMatrixWorld(),Ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const I_=new ke,Io=new $,zh=new $;class UR extends Vv{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Io.setFromMatrixPosition(t.matrixWorld),s.position.copy(Io),zh.copy(s.position),zh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(zh),s.updateMatrixWorld(),l.makeTranslation(-Io.x,-Io.y,-Io.z),I_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(I_)}}class LR extends Zd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new UR}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class NR extends Vv{constructor(){super(new Pv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class OR extends Zd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new NR}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class PR extends Zd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const F_=new ke;class zR{constructor(t,i,s=0,l=1/0){this.ray=new Rv(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Xd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return F_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(F_),this}intersectObject(t,i=!0,s=[]){return Nd(t,this,s,i),s.sort(H_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Nd(t[l],this,s,i);return s.sort(H_),s}}function H_(r,t){return r.distance-t.distance}function Nd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Nd(c[f],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);class BR extends Gv{constructor(){super();const t=new Si;t.deleteAttribute("uv");const i=new ka({side:Nn}),s=new ka,l=new LR(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Ee(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new Ee(t,s);f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-.195,0),f.scale.set(2.328,7.905,4.651),this.add(f);const d=new Ee(t,s);d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),this.add(d);const p=new Ee(t,s);p.position.set(6.167,.857,7.803),p.rotation.set(0,.561,0),p.scale.set(3.927,6.285,3.687),this.add(p);const m=new Ee(t,s);m.position.set(-2.017,.018,6.124),m.rotation.set(0,.333,0),m.scale.set(2.002,4.566,2.064),this.add(m);const g=new Ee(t,s);g.position.set(2.291,-.756,-2.621),g.rotation.set(0,-.286,0),g.scale.set(1.546,1.552,1.496),this.add(g);const _=new Ee(t,s);_.position.set(-2.193,-.369,-5.547),_.rotation.set(0,.516,0),_.scale.set(3.875,3.487,2.986),this.add(_);const v=new Ee(t,Sr(50));v.position.set(-16.116,14.37,8.208),v.scale.set(.1,2.428,2.739),this.add(v);const y=new Ee(t,Sr(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);const E=new Ee(t,Sr(17));E.position.set(14.904,12.198,-1.832),E.scale.set(.15,4.265,6.331),this.add(E);const T=new Ee(t,Sr(43));T.position.set(-.462,8.89,14.52),T.scale.set(4.38,5.441,.088),this.add(T);const x=new Ee(t,Sr(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const S=new Ee(t,Sr(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Sr(r){const t=new Wd;return t.color.setScalar(r),t}const Vc=.9,kv=1.2,Bh=1.42,IR=.34,FR=12158295,Xv=15263978,HR=2763310;function Ih(r,t,i){const s=document.createElement("canvas");s.width=720,s.height=960;const l=s.getContext("2d");if(!l)return new An;if(l.fillStyle="#ffffff",l.fillRect(0,0,720,960),i){const f=Math.max(640/i.width,700/i.height);l.save(),l.beginPath(),l.rect(40,40,640,700),l.clip(),l.drawImage(i,360-i.width*f/2,390-i.height*f/2,i.width*f,i.height*f),l.restore()}else l.fillStyle="#cfd2c3",l.fillRect(40,40,640,700),l.fillStyle="#5c5f55",l.font="32px Arial, sans-serif",l.textAlign="center",l.fillText(t,360,400);l.textAlign="left",l.fillStyle="#1c1c1f",l.font='700 52px "Helvetica Neue", Helvetica, Arial, sans-serif',l.fillText(r.name,44,826),l.fillStyle="#8a8a8a",l.font="32px Arial, sans-serif",l.fillText(r.role,44,880);const c=new CR(s);return c.colorSpace=jn,c.anisotropy=8,c}function GR(r){const t=new Go,i=new ka({color:Xv,metalness:1,roughness:.18}),s=new Ee(new Yd(.075,.009,12,40,Math.PI*1.35),i);s.rotation.z=-Math.PI*.2,s.position.y=.02;const l=new Ee(new qo(.009,.009,.12,12),i);l.position.y=-.1;const c=new Ee(new Si(Vc+.12,.07,.05),new ka({color:FR,roughness:.55}));c.position.y=-.19;const f=new ka({color:HR,metalness:.6,roughness:.35}),d=[-1,1].map(p=>{const m=new Ee(new Si(.09,.12,.035),f);return m.position.set(p*(Vc/2-.08),-.27,.012),m});return r.position.y=-.24-kv/2,r.castShadow=!0,t.add(s,l,c,...d,r),t.traverse(p=>{p instanceof Ee&&(p.castShadow=!0)}),t}function VR({people:r,pending:t}){const i=Tt.useRef(null),[s,l]=Tt.useState(0),c=Tt.useRef(0);Tt.useEffect(()=>{c.current=s},[s]),Tt.useEffect(()=>{const d=i.current;if(!d)return;const p=matchMedia("(prefers-reduced-motion: reduce)").matches,m=new wR({antialias:!0,alpha:!0});m.setPixelRatio(Math.min(devicePixelRatio,2)),m.toneMapping=uv,m.shadowMap.enabled=!0,m.shadowMap.type=Ri,d.appendChild(m.domElement);const g=new Gv,_=new Ud(m);g.environment=_.fromScene(new BR,.04).texture;const v=new OR(16774374,2.4);v.position.set(-1.5,3,5),v.castShadow=!0,v.shadow.mapSize.set(2048,2048),v.shadow.radius=14,v.shadow.blurSamples=16,Object.assign(v.shadow.camera,{left:-9,right:9,top:5,bottom:-6}),v.shadow.bias=-6e-4,g.add(v,new PR(16777215,.5));const y=new Yn(28,1,.1,50);y.position.set(0,-.6,5.2);const E=new DR({opacity:.11});E.onBeforeCompile=Q=>{Q.vertexShader=`varying vec2 vFade;
`+Q.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vFade = uv;`),Q.fragmentShader=`varying vec2 vFade;
`+Q.fragmentShader.replace("opacity * ( 1.0 - getShadowMask() )","opacity * ( 1.0 - getShadowMask() ) * smoothstep( 0.5, 0.15, distance( vFade, vec2( 0.5 ) ) )")};const T=new Ee(new $o(9,5),E);T.position.y=-.9,T.position.z=-.9,T.receiveShadow=!0,g.add(T);const x=new ka({color:Xv,metalness:1,roughness:.12}),S=new Ee(new qo(.035,.035,4.2,32),x);S.rotation.z=Math.PI/2,S.castShadow=!0,g.add(S),[-1,1].forEach(Q=>{const z=new Ee(new qo(.06,.06,.05,32),x);z.rotation.z=Math.PI/2,z.position.x=Q*2.12;const et=new Ee(new Si(.04,.04,.9),x);et.position.set(Q*2.12,0,-.45);const X=new Ee(new Si(.1,.22,.02),x);X.position.set(Q*2.12,0,-.9),g.add(z,et,X)});const N=r.map(Q=>{const z=new ka({map:Ih(Q,t,null),roughness:.6}),et=new ka({color:16053490,roughness:.7}),X=new Ee(new Si(Vc,kv,.012),[et,et,et,et,z,et]);if(Q.photo){const ht=new Image;ht.onload=()=>{z.map=Ih(Q,t,ht),z.needsUpdate=!0},ht.src=Q.photo.src}return X}),L=N.map(Q=>{const z=GR(Q);return g.add(z),{g:z,x:0,ry:Bh,sway:0,swayV:0}});document.fonts.ready.then(()=>{N.forEach((Q,z)=>{const et=Q.material;r[z].photo||(et[4].map=Ih(r[z],t,null),et[4].needsUpdate=!0)})});const D=()=>{const Q=d.clientWidth,z=d.clientHeight;m.setSize(Q,z),y.aspect=Q/z,y.position.z=Q<600?7.4:5.2,y.updateProjectionMatrix()},G=new zR,H=new be,B=Q=>{const z=m.domElement.getBoundingClientRect();H.set((Q.clientX-z.left)/z.width*2-1,-((Q.clientY-z.top)/z.height)*2+1),G.setFromCamera(H,y);const et=G.intersectObjects(N).at(0);return et?N.findIndex(X=>X===et.object):-1},q=Q=>{const z=B(Q);m.domElement.style.cursor=z>=0?"pointer":"",Q.pointerType==="mouse"&&z>=0&&z!==c.current&&l(z)},R=Q=>{const z=B(Q);z>=0&&l(z)};m.domElement.addEventListener("pointermove",q),m.domElement.addEventListener("pointerdown",R);let b=-1,I=0;const lt={on:!1},tt=()=>{const Q=c.current;Q!==b&&(L.forEach((ht,U)=>{(U===Q||U===b)&&(ht.swayV+=U===Q?.05:-.035)}),b=Q);const z=L.map((ht,U)=>U===Q?Vc+.5:IR);let X=-z.reduce((ht,U)=>ht+U,0)/2;L.forEach((ht,U)=>{const it=X+z[U]/2;X+=z[U];const At=U===Q?0:U<Q?Bh:-Bh,_t=p?1:.11;ht.x+=(it-ht.x)*_t,ht.ry+=(At-ht.ry)*_t,ht.swayV+=-ht.sway*.06-ht.swayV*.08,ht.sway+=ht.swayV,ht.g.position.set(ht.x,0,0),ht.g.rotation.set(0,ht.ry,p?0:ht.sway)}),m.render(g,y),lt.on&&(I=requestAnimationFrame(tt))},ft=new IntersectionObserver(([Q])=>{lt.on=Q.isIntersecting,cancelAnimationFrame(I),lt.on&&(I=requestAnimationFrame(tt))});return ft.observe(d),D(),tt(),addEventListener("resize",D),()=>{cancelAnimationFrame(I),ft.disconnect(),removeEventListener("resize",D),m.dispose(),_.dispose(),d.removeChild(m.domElement)}},[r,t]);const f=r[s];return nt.jsxs("div",{className:"rack",children:[nt.jsx("div",{className:"rack-stage",ref:i,"aria-hidden":"true"}),nt.jsxs("div",{className:"rack-story","aria-live":"polite",children:[nt.jsx("div",{className:"rack-pick",role:"group",children:r.map((d,p)=>nt.jsx("button",{type:"button","aria-pressed":p===s,onClick:()=>{l(p)},children:d.name},p))}),nt.jsxs("article",{className:"rack-text",children:[nt.jsx("p",{className:"kicker",children:f.role}),nt.jsx("h3",{children:f.name}),nt.jsx("p",{children:f.bio})]},s)]})]})}const kR=160,XR={duration:420,easing:"cubic-bezier(.22,1,.36,1)"},WR={ArrowDown:r=>r+1,ArrowUp:r=>r-1,Home:()=>0,End:(r,t)=>t};function qR({items:r}){const[t,i]=Tt.useState(0),[s,l]=Tt.useState({i:-1,top:0}),c=Tt.useId(),f=Tt.useRef(null),d=Tt.useRef(new Map),p=Tt.useRef(0),m=_=>{var y,E;d.current.clear(),(y=f.current)==null||y.querySelectorAll(".faq-q, .faq-a:not(.is-leaving)").forEach(T=>{d.current.set(T,T.getBoundingClientRect().top)});const v=(E=f.current)==null?void 0:E.querySelector(".faq-a:not(.is-leaving)");clearTimeout(p.current),l({i:t,top:(v==null?void 0:v.offsetTop)??0}),p.current=window.setTimeout(()=>{l({i:-1,top:0})},kR),i(t===_?-1:_)};Tt.useLayoutEffect(()=>{matchMedia("(prefers-reduced-motion: reduce)").matches||(d.current.forEach((_,v)=>{if(!v.isConnected||v.classList.contains("is-leaving"))return;const y=_-v.getBoundingClientRect().top;Math.abs(y)>.5&&v.animate([{transform:`translateY(${String(y)}px)`},{transform:"none"}],XR)}),d.current.clear())},[t]);const g=_=>{const v=WR[_.key],y=_.target;if(!v||!y.matches(".faq-q"))return;const E=[..._.currentTarget.querySelectorAll(".faq-q")];_.preventDefault(),E[(v(E.indexOf(y),E.length-1)+E.length)%E.length].focus()};return nt.jsx("div",{className:"faq-list",ref:f,onKeyDown:g,children:r.map((_,v)=>nt.jsxs("div",{className:"faq-item",children:[nt.jsx("button",{id:`${c}-q${String(v)}`,type:"button",className:"faq-q","aria-expanded":t===v,"aria-controls":t===v?`${c}-a${String(v)}`:void 0,onClick:()=>{m(v)},children:_.q}),(t===v||s.i===v)&&nt.jsxs("div",{className:t===v?"faq-a":"faq-a is-leaving",style:t===v?void 0:{top:s.top},id:t===v?`${c}-a${String(v)}`:void 0,role:"region","aria-labelledby":`${c}-q${String(v)}`,children:[nt.jsx("p",{children:_.a}),nt.jsx("img",{src:ia.images.logo.src,alt:""})]})]},_.q))})}const jR=4200,Fh=3,G_=[1,.82,.66,.52],YR=14,ZR=16,KR=r=>new Date(r).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});function QR({runs:r,label:t,cta:i}){const[s,l]=Tt.useState(0),[c,f]=Tt.useState(!1),[d,p]=Tt.useState(1200),m=Tt.useRef(null),g=r.length;Tt.useEffect(()=>{const x=m.current;if(!x)return;const S=new ResizeObserver(([N])=>{p(N.contentRect.width)});return S.observe(x),()=>{S.disconnect()}},[]),Tt.useEffect(()=>{if(c||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const x=setInterval(()=>{l(S=>(S+1)%g)},jR);return()=>{clearInterval(x)}},[c,g]);const _=d<700,v=_?Math.min(d*.62,300):Math.min(d*.4,640),y=_?v*1.45:v*.56,E=x=>({w:y*.72*G_[x],h:y*.86*G_[x]}),T=x=>{let S=v/2;for(let N=1;N<=x;N++)S+=YR+(N===1?E(1).w/2:E(N-1).w/2+E(N).w/2);return S-(_?E(x).w*.55:0)};return nt.jsxs("div",{className:"reel",ref:m,onMouseEnter:()=>{f(!0)},onMouseLeave:()=>{f(!1)},onFocus:()=>{f(!0)},onBlur:()=>{f(!1)},children:[nt.jsx("ul",{className:"reel-track",style:{height:y},children:r.map((x,S)=>{let N=(S-s+g)%g;N>g/2&&(N-=g);const L=Math.abs(N),D=N===0,G=L<=Fh&&(D||T(L)+E(L).w/2<=d/2-ZR),H=D?{w:v,h:y}:E(Math.min(L,Fh)),B={width:H.w,height:H.h,transform:`translate(calc(-50% + ${String(D?0:Math.sign(N)*T(Math.min(L,Fh)))}px), -50%)`,zIndex:10-L,opacity:G?1:0,pointerEvents:G?void 0:"none"};return nt.jsxs("li",{className:D?"reel-card is-active":"reel-card",style:B,"aria-hidden":!G,onClick:()=>{l(S)},children:[nt.jsxs("div",{className:"reel-info","aria-hidden":!D,children:[nt.jsx("p",{className:"reel-date",children:KR(x.date)}),nt.jsx("h3",{children:x.title}),nt.jsx("p",{children:x.detail}),nt.jsx("div",{className:"reel-meta",children:nt.jsx("span",{children:x.place})}),nt.jsx(yr,{className:"reel-link",tabIndex:D?0:-1,children:i})]}),nt.jsx("img",{src:x.photo.src,alt:x.photo.alt,loading:"lazy",draggable:!1})]},x.date)})}),nt.jsx("div",{className:"reel-dots",role:"group","aria-label":t,children:r.map((x,S)=>nt.jsx("button",{type:"button","aria-label":x.title,"aria-current":S===s,onClick:()=>{l(S)}},x.date))})]})}const JR={shoe:"M6 30c2-1 5-1 7-4l3-8c1-2 3-2 4 0 2 3 5 4 9 4l6 1c5 1 8 4 8 7v2H6z M6 34h37 M20 22l2 3 M24 21l2 3 M28 22l1 2",coffee:"M10 18h24v10a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10z M34 21h3a4 4 0 0 1 0 8h-3 M8 42h30 M17 13c-2-2 2-4 0-6 M23 13c-2-2 2-4 0-6 M29 13c-2-2 2-4 0-6",stopwatch:"M24 44a16 16 0 1 0 0-32 16 16 0 0 0 0 32z M24 12V7 M20 6h8 M24 28l6-7 M37 14l3-3",pulse:"M4 26h10l4-10 6 20 5-14 3 4h12",sun:"M14 34a10 10 0 0 1 20 0 M6 34h36 M24 14v6 M12 20l4 4 M36 20l-4 4 M10 40h28"},V_=[[38,18,5],[90,22,4],[40,74,6],[88,68,5],[64,90,5]];function $R({kinds:r}){return nt.jsxs("div",{className:"doodles","aria-hidden":"true",children:[nt.jsx("svg",{width:"0",height:"0",children:nt.jsxs("filter",{id:"doodle-wobble",children:[nt.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.04",numOctaves:2,seed:6}),nt.jsx("feDisplacementMap",{in:"SourceGraphic",scale:2.4})]})}),r.map((t,i)=>{const[s,l,c]=V_[i%V_.length];return nt.jsx("svg",{className:"doodle",viewBox:"0 0 48 48",style:{"--x":`${String(s)}%`,"--y":`${String(l)}%`,"--size":c,"--rot":`${String(i*37%50-25)}deg`,"--speed":i%4+1},children:nt.jsx("path",{d:JR[t]})},t)})]})}const Uc=36,Hh=16,Gh=8,tw=36,Vh=22,ew=26,Lc=4,k_=.3,X_="(max-width: 900px)";function nw({chapters:r,label:t,unit:i}){const[s,l]=Tt.useState(()=>matchMedia(X_).matches),[c,f]=Tt.useState(innerWidth),[d,p]=Tt.useState(0),[m,g]=Tt.useState(!1),[_,v]=Tt.useState(!1),y=Tt.useRef(0),E=Tt.useRef(0),T=Tt.useRef(null);Tt.useEffect(()=>{const _t=matchMedia(X_),F=()=>{var Et;l(_t.matches),f(((Et=T.current)==null?void 0:Et.clientWidth)??innerWidth)},ut=()=>{var Me;E.current=0;const Et=innerHeight/2,Ct=r.map(j=>{var Ke;return((Ke=document.getElementById(j.id))==null?void 0:Ke.getBoundingClientRect().top)??0}),Pt=Math.max(0,Ct.filter(j=>j<=Et).length-1),Ht=Pt+1<Ct.length?(Et-Ct[Pt])/(Ct[Pt+1]-Ct[Pt]):0;g(((Me=document.getElementById(r[Pt].id))==null?void 0:Me.classList.contains("is-paper"))??!1);const ae=innerHeight+scrollY>=document.documentElement.scrollHeight-2?r.length-1:Math.min(r.length-1,Pt+Math.max(0,Math.min(1,Ht)));Math.abs(ae-y.current)>.002&&v(ae<y.current),y.current=ae,p(ae)},yt=()=>{E.current||(E.current=requestAnimationFrame(ut))};return ut(),F(),_t.addEventListener("change",F),addEventListener("scroll",yt,{passive:!0}),addEventListener("resize",F),()=>{_t.removeEventListener("change",F),removeEventListener("scroll",yt),removeEventListener("resize",F),cancelAnimationFrame(E.current)}},[r]);const x=s?(c-Gh*2-ew)/(r.length-1):Uc,S=(_t,F)=>s?[Gh+_t,Vh+F]:[tw+F,Uc/2+_t],N=r.map((_t,F)=>S(F*x,_t.indent*(s?Lc:Hh))),L=[N[0]],D=[0];for(let _t=1;_t<r.length;_t++){const F=r[_t-1].indent*(s?Lc:Hh),ut=r[_t].indent*(s?Lc:Hh);L.push(S((_t-1+k_)*x,F),S((_t-k_)*x,ut),N[_t]),D.push(L.length-1)}const G=L.map((_t,F)=>F?Math.hypot(L[F][0]-L[F-1][0],L[F][1]-L[F-1][1]):0);for(let _t=1;_t<G.length;_t++)G[_t]+=G[_t-1];const H=G[G.length-1],B=Math.floor(d),q=Math.min(B+1,r.length-1),R=G[D[B]]+(G[D[q]]-G[D[B]])*(d-B);let b=1;for(;b<G.length-1&&G[b]<R;)b++;const[I,lt]=L[b-1],[tt,ft]=L[b],Q=G[b]===G[b-1]?0:(R-G[b-1])/(G[b]-G[b-1]),z=I+(tt-I)*Q,et=lt+(ft-lt)*Q,X=Math.atan2(ft-lt,tt-I)*180/Math.PI-90+(_?180:0),ht=L.map(([_t,F],ut)=>`${ut?"L":"M"}${_t} ${F}`).join(" "),U=Math.floor(d+.02),it=r[U],At=s?{height:Vh+Gh+Lc*2}:{height:r.length*Uc};return nt.jsxs("nav",{className:Vo("route",s&&"is-flat",m&&"on-paper"),"aria-label":t,children:[s?nt.jsxs("p",{className:"route-now",children:[nt.jsx("b",{children:it.km})," ",i," ",nt.jsx("span",{children:it.label})]}):nt.jsx("p",{className:"route-title",children:t}),nt.jsxs("div",{className:"route-map",ref:T,style:At,children:[nt.jsxs("svg",{className:"route-path","aria-hidden":"true",children:[nt.jsx("path",{d:ht}),nt.jsx("path",{className:"route-done",d:ht,style:{strokeDasharray:`${R} ${H}`}}),N.map(([_t,F],ut)=>nt.jsxs("g",{className:Vo("route-mark",ut<=d&&"is-passed",!s&&"is-left"),transform:`translate(${_t} ${F})`,children:[nt.jsx("line",{className:"route-pole",x1:0,y1:0,x2:0,y2:-Vh}),nt.jsxs("g",{className:"route-flag",children:[nt.jsx("path",{d:s?"M0 0 H26 L22 5 L26 10 H0 Z":"M0 0 H-26 L-22 5 L-26 10 H0 Z"}),nt.jsx("text",{x:s?11:-12,y:7.6,children:r[ut].km})]}),nt.jsx("circle",{r:4})]},r[ut].id))]}),nt.jsx("svg",{className:"route-arrow",viewBox:"0 0 16 18",style:{transform:`translate(${z-6}px, ${et-7}px) rotate(${X}deg)`},"aria-hidden":"true",children:nt.jsx("path",{d:"M1 1 L8 17 L15 1 L8 5 Z"})}),r.map((_t,F)=>nt.jsx("a",{href:`#${_t.id}`,className:Vo(F===U&&"is-active",F<d&&"is-passed"),style:s?{left:N[F][0]-14,top:N[F][1]-14}:{top:F*Uc,left:N[F][0]+18},"aria-current":F===U?"location":void 0,"aria-label":_t.label,children:!s&&_t.label},_t.id))]})]})}function iw(){sM(ah.meta.title,ah.meta.description),xM();const{hash:r}=Xc();Tt.useEffect(()=>{r&&ov(r.slice(1))},[r]);const{masthead:t,hero:i,story:s,runs:l,crew:c,join:f,footer:d,chapters:p,route:m}=ah;return Tt.useEffect(()=>{const g=[...document.querySelectorAll("[data-progress]")];let _=0;const v=()=>{for(const E of g){const T=E.getBoundingClientRect(),x=Math.min(1,Math.max(0,(innerHeight-T.top)/(T.height+innerHeight)));E.style.setProperty("--p",x.toFixed(4))}_=0},y=()=>{_||(_=requestAnimationFrame(v))};return v(),addEventListener("scroll",y,{passive:!0}),addEventListener("resize",y),()=>{removeEventListener("scroll",y),removeEventListener("resize",y),cancelAnimationFrame(_)}},[]),nt.jsxs("div",{className:"edition",children:[nt.jsxs("header",{className:"masthead",children:[nt.jsxs("a",{href:`#${p[0].id}`,className:"masthead-brand","aria-label":ia.brand.homeLabel,children:[nt.jsx("img",{src:ia.images.logo.src,alt:""}),t.brand]}),nt.jsx(yr,{className:"masthead-cta",children:t.cta})]}),nt.jsx(nw,{chapters:p,label:m.label,unit:m.unit}),nt.jsxs("section",{className:"start is-paper",id:"start","aria-labelledby":"start-title",children:[nt.jsx(AM,{reel:i.reel,mark:i.mark,labels:i.labels}),nt.jsx("h1",{id:"start-title",className:"start-title",children:i.title}),nt.jsxs("div",{className:"start-next",children:[nt.jsx("p",{children:i.next}),nt.jsx("i",{className:"start-line","aria-hidden":"true"}),nt.jsx(EM,{})]})]}),nt.jsxs("section",{className:"sky",id:"story","data-progress":!0,children:[nt.jsx("i",{className:"sky-guide is-l","aria-hidden":"true"}),nt.jsx("i",{className:"sky-guide is-r","aria-hidden":"true"}),nt.jsx($R,{kinds:s.doodles}),nt.jsx(wM,{photo:s.engraving,className:"engraving"}),nt.jsxs("div",{className:"sky-copy",children:[nt.jsx("h2",{className:"heading",children:lc.lead.title}),nt.jsx("p",{children:lc.lead.text})]}),nt.jsx("p",{className:"sky-word","aria-hidden":"true",children:s.word})]}),nt.jsx("section",{className:"paper is-paper runs",id:"runs","data-progress":!0,children:nt.jsxs("div",{className:"runs-stage",children:[nt.jsxs("div",{className:"chapter-head",children:[nt.jsx("h2",{className:"heading",children:l.title}),nt.jsx(yr,{className:"icon-link","aria-label":oc.wall.more,children:nt.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[nt.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5"}),nt.jsx("circle",{cx:"12",cy:"12",r:"4.2"}),nt.jsx("circle",{className:"is-dot",cx:"17.3",cy:"6.7",r:"1.1"})]})}),nt.jsx("p",{children:l.text})]}),nt.jsx(QR,{runs:oc.runs,label:oc.intro.reelLabel,cta:oc.viewPost})]})}),nt.jsxs("section",{className:"paper is-paper crew-founders",id:"founders",children:[nt.jsxs("div",{className:"chapter-head",children:[nt.jsx("h2",{className:"heading",children:cc.title}),nt.jsx("p",{children:cc.text})]}),nt.jsx(VR,{people:cc.people,pending:cc.photoPending})]}),nt.jsxs("section",{className:"crew",id:"crew","data-progress":!0,children:[nt.jsx("div",{className:"chapter-head",children:nt.jsx("h2",{className:"heading",children:c.title})}),nt.jsx("ul",{className:"crew-strip",children:c.photos.map(g=>nt.jsx("li",{children:nt.jsx("img",{src:g.src,alt:g.alt,loading:"lazy"})},g.src))})]}),nt.jsxs("section",{className:"paper is-paper faq",id:"faq",children:[nt.jsx("div",{className:"chapter-head",children:nt.jsx("h2",{className:"heading",children:lc.faq.title})}),nt.jsx(qR,{items:lc.faq.items})]}),nt.jsxs("footer",{className:"foot",id:"join",children:[nt.jsxs("div",{className:"foot-sky",children:[nt.jsxs("div",{className:"foot-join",children:[nt.jsxs("div",{children:[nt.jsx("h2",{className:"heading",children:f.title}),nt.jsx("p",{children:f.text})]}),nt.jsx(yr,{className:"masthead-cta is-big",children:f.cta})]}),nt.jsx("img",{className:"foot-landscape",src:d.crowd,alt:"",loading:"lazy","aria-hidden":"true"})]}),nt.jsxs("div",{className:"foot-band",children:[nt.jsxs("div",{className:"foot-info",children:[nt.jsx("p",{children:nt.jsx("b",{children:ia.brand.name})}),nt.jsxs("p",{children:[nt.jsx("span",{children:d.contact}),nt.jsx(yr,{children:ia.brand.handle})]}),nt.jsxs("p",{children:[nt.jsx("span",{children:d.find}),d.place,nt.jsx("br",{}),d.when]}),nt.jsxs("p",{children:[nt.jsx("span",{children:d.follow}),nt.jsx(yr,{children:d.instagram})]})]}),nt.jsx("p",{className:"foot-rights",children:d.rights})]})]})]})}function aw(){return nt.jsxs(eM,{children:[nt.jsx(Nc,{index:!0,element:nt.jsx(iw,{})}),ia.redirects.map(r=>nt.jsx(Nc,{path:r.from,element:nt.jsx(L0,{to:r.to,replace:!0})},r.from)),nt.jsx(Nc,{path:"*",element:nt.jsx(L0,{to:ia.links.home,replace:!0})})]})}const Wv=document.getElementById("root");if(!Wv)throw new Error("Missing #root element");cy.createRoot(Wv).render(nt.jsx(Tt.StrictMode,{children:nt.jsx(aM,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:nt.jsx(aw,{})})}));
