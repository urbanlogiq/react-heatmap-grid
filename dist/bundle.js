/*! For license information please see bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-sequence"]=t():e["react-sequence"]=t()}(self,(function(){return(()=>{var e={418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,u,l=o(e),c=1;c<arguments.length;c++){for(var s in a=Object(arguments[c]))r.call(a,s)&&(l[s]=a[s]);if(t){u=t(a);for(var f=0;f<u.length;f++)n.call(a,u[f])&&(l[u[f]]=a[u[f]])}}return l}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},408:(e,t,r)=>{"use strict";var n=r(418),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,u=60110,l=60112;t.Suspense=60113;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),u=f("react.context"),l=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}function m(){}function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var g=v.prototype=new m;g.constructor=v,n(g,h.prototype),g.isPureReactComponent=!0;var x={current:null},O=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,r){var n,i={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,n)&&!_.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];i.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===i[n]&&(i[n]=l[n]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return a=a(l=e),e=""===n?"."+w(l,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),S(a,t,r,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+w(u=e[c],c);l+=S(u,t,r,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(u=e.next()).done;)l+=S(u=u.value,t,r,s=n+w(u,c++),a);else if("object"===u)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function k(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var q={current:null};function C(){var e=q.current;if(null===e)throw Error(y(321));return e}var T={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:k,forEach:function(e,t,r){k(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return k(e,(function(){t++})),t},toArray:function(e){return k(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error(y(143));return e}},t.Component=h,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var i=n({},e.props),a=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)O.call(t,s)&&!_.hasOwnProperty(s)&&(i[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=L,t.createFactory=function(e){var t=L.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return C().useCallback(e,t)},t.useContext=function(e,t){return C().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return C().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return C().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return C().useLayoutEffect(e,t)},t.useMemo=function(e,t){return C().useMemo(e,t)},t.useReducer=function(e,t,r){return C().useReducer(e,t,r)},t.useRef=function(e){return C().useRef(e)},t.useState=function(e){return C().useState(e)},t.version="17.0.2"},294:(e,t,r)=>{"use strict";e.exports=r(408)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>d});var e=r(294),t=r(697),o=r.n(t),i=function(t){var r=t.children,n=t.width;return e.createElement("div",{style:{flex:"0 0 ".concat(n,"px")}}," ",r," ")};i.defaultProps={children:" "},i.propTypes={children:o().oneOfType([o().string,o().element]),width:o().number.isRequired};const a=i;function u(t){var r=t.labels,n=t.width,o=t.labelsVisibility,i=t.squares,u=t.height,l=t.yWidth;return e.createElement("div",{style:{display:"flex"}},e.createElement(a,{width:l}),r.map((function(t,r){return e.createElement("div",{key:r,style:{flex:i?"none":1,textAlign:"center",width:i?"".concat(u+1,"px"):n,visibility:o&&!o[r]?"hidden":"visible"}},t)})))}u.propTypes={labels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,labelsVisibility:o().arrayOf(o().bool),width:o().number.isRequired,squares:o().bool,height:o().number},u.defaultProps={labelsVisibility:null,squares:!1,height:30};const l=u;function c(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(t){for(var r=t.xLabels,n=t.yLabels,o=t.data,i=(t.xLabelWidth,t.yLabelWidth),u=t.background,l=t.height,s=t.yLabelTextAlign,f=t.unit,p=t.displayYLabels,y=t.onClick,d=t.cursor,b=t.squares,h=t.cellRender,m=t.cellStyle,v=t.title,g=o.reduce((function(e,t){return[].concat(c(t),c(e))}),[]),x=1/0,O=-1/0,_=0;_<g.length;_++)g[_]<x&&(x=g[_]),g[_]>O&&(O=g[_]);return e.createElement("div",null,n.map((function(t,n){return e.createElement("div",{key:n,style:{display:"flex"}},e.createElement(a,{width:i},e.createElement("div",{style:{position:"absolute",textAlign:s,paddingRight:"5px",paddingTop:"".concat(l/3.7,"px"),width:"".concat(i,"px")}},p&&t)),r.map((function(r,i){var a=o[n][i],c=Object.assign({cursor:"".concat(d),margin:"1px 1px 0 0",height:l,width:b?"".concat(l,"px"):void 0,flex:b?"none":1,textAlign:"center"},m(u,a,x,O,o,i,n));return e.createElement("div",{onClick:y.bind(void 0,i,n),title:v(a,f,i,n),key:"".concat(i,"_").concat(n),style:c},e.createElement("div",{style:{paddingTop:"".concat(l/3.7,"px")}},h(a,r,t)))})))})))};f.propTypes={xLabels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,yLabels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,data:o().arrayOf(o().array).isRequired,background:o().string.isRequired,height:o().number.isRequired,xLabelWidth:o().number.isRequired,yLabelWidth:o().number.isRequired,yLabelTextAlign:o().string.isRequired,unit:o().string.isRequired,displayYLabels:o().bool,onClick:o().func,cursor:o().string,squares:o().bool,cellRender:o().func.isRequired,cellStyle:o().func.isRequired,title:o().func},f.defaultProps={displayYLabels:!0,cursor:"",onClick:function(){},squares:!1,title:function(e,t){return(e||0===e)&&"".concat(e," ").concat(t)}};const p=f;function y(t){var r=t.xLabels,n=t.yLabels,o=t.data,i=t.background,a=t.height,u=t.xLabelWidth,c=t.yLabelWidth,s=t.xLabelsLocation,f=t.yLabelTextAlign,y=t.xLabelsVisibility,d=t.unit,b=t.displayYLabels,h=t.onClick,m=t.squares,v=t.cellRender,g=t.cellStyle,x=t.title,O="";void 0!==h&&(O="pointer");var _=e.createElement(l,{labels:r,width:u,labelsVisibility:y,height:a,squares:m,yWidth:c});return e.createElement("div",null,"top"===s&&_,e.createElement(p,{xLabels:r,yLabels:n,data:o,background:i,height:a,xLabelWidth:u,yLabelWidth:c,yLabelTextAlign:f,unit:d,xLabelsLocation:s,displayYLabels:b,onClick:h,cursor:O,squares:m,cellRender:v,cellStyle:g,title:x}),"bottom"===s&&_)}y.propTypes={xLabels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,yLabels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,data:o().arrayOf(o().array).isRequired,background:o().string,height:o().number,xLabelWidth:o().number,yLabelWidth:o().number,xLabelsLocation:o().oneOf(["top","bottom"]),xLabelsVisibility:o().arrayOf(o().bool),yLabelTextAlign:o().string,displayYLabels:o().bool,unit:o().string,onClick:o().func,squares:o().bool,cellRender:o().func,cellStyle:o().func,title:o().func},y.defaultProps={background:"#329fff",height:30,xLabelWidth:60,yLabelWidth:40,yLabelTextAlign:"right",unit:"",xLabelsLocation:"top",xLabelsVisibility:null,displayYLabels:!0,onClick:void 0,squares:!1,cellRender:function(){return null},cellStyle:function(e,t,r,n){return{background:e,opacity:(t-r)/(n-r)||0}}};const d=y})(),n})()}));
//# sourceMappingURL=bundle.js.map