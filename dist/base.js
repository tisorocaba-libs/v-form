/*!
 * v-form 1.0.1 - v-form
 * base
 * 
 * Developers:
 * 
 * 		Victor Bastos <victorwpbastos@gmail.com>
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["v-base"]=t():e["v-base"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=41)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={created:function(){this.correctIEQuirks()},methods:{correctIEQuirks:function(){!function(e){-1!==navigator.userAgent.indexOf("MSIE 9")&&e.addEventListener("selectionchange",function(){var t=e.activeElement;if(t&&("TEXTAREA"===t.tagName||"INPUT"===t.tagName)){var n=e.createEvent("CustomEvent");n.initCustomEvent("input",!0,!0,{}),t.dispatchEvent(n)}})}(document)}}}},41:function(e,t,n){e.exports=n(1)}})});