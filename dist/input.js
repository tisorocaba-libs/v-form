/*!
 * v-form 1.0.1 - v-form
 * v-input
 * 
 * Developers:
 * 
 * 		Victor Bastos <victorwpbastos@gmail.com>
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["v-input"]=t():e["v-input"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=46)}({0:function(e,t){e.exports=function(e,t,n,o,r){var s,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,i=e.default);var a="function"==typeof i?i.options:i;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},a._ssrRegister=c):n&&(c=n),c){var l=a.functional,f=l?a.render:a.beforeCreate;l?a.render=function(e,t){return c.call(t),f(e,t)}:a.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:i,options:a}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={created:function(){this.correctIEQuirks()},methods:{correctIEQuirks:function(){!function(e){-1!==navigator.userAgent.indexOf("MSIE 9")&&e.addEventListener("selectionchange",function(){var t=e.activeElement;if(t&&("TEXTAREA"===t.tagName||"INPUT"===t.tagName)){var n=e.createEvent("CustomEvent");n.initCustomEvent("input",!0,!0,{}),t.dispatchEvent(n)}})}(document)}}}},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={mixins:[r.default],props:{value:{default:""}},data:function(){return{lastPosition:0,preventCursorJump:!1}},methods:{emitInput:function(e){var t=this;this.$emit("input",e.target.value),e instanceof InputEvent&&(this.lastPosition=e.target.selectionEnd,e.target.value.length>this.lastPosition?this.preventCursorJump=!0:this.lastPosition++,setTimeout(function(){-1===navigator.userAgent.indexOf("MSIE 9")&&(t.preventCursorJump?t.$el.selectionStart=t.$el.selectionEnd=t.lastPosition:t.$el.selectionStart=t.$el.selectionEnd=e.target.value.length)}))}}}},23:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.value},on:{input:e.emitInput}})},staticRenderFns:[]},e.exports.render._withStripped=!0},46:function(e,t,n){e.exports=n(7)},7:function(e,t,n){var o=n(0)(n(22),n(23),null,null,null);o.options.__file="C:\\Users\\vbastos\\Desktop\\tisorocaba-libs\\v-form\\src\\input.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] input.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports}})});