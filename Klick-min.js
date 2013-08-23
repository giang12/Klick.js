/* ========================================================================
 * Klick: Klick.js v1.0.0
 * http://giang.is/Klick.v1/Klick.js
 * http://giang.is/Klick.v1/Klick-min.js
 * https://github.com/giang12/Klick.js
 * ========================================================================
 * Author: Giang Nguyen.
 * http://giang.is
 * 
 * Copyright 2013 Giang Nguyen
 * Released under the MIT license.
 * https://github.com/giang12/Klick.js/blob/master/LICENSE
 * http://en.wikipedia.org/wiki/MIT_License
 * ======================================================================== */

(function(){function c(c,d){d=d||{bubbles:!1,cancelable:!1,detail:void 0};var h=document.createEvent("CustomEvent");h.initCustomEvent(c,d.bubbles,d.cancelable,d.detail);return h}c.prototype=window.CustomEvent.prototype;window.CustomEvent=c})();
var Klick=function(){function c(a){clearTimeout(k);d(a);switch(a.which){case 1:f.push(g.left);break;case 2:f.push(g.middle);break;case 3:f.push(g.right)}l=new CustomEvent(p(f),{detail:{},bubbles:!0,cancelable:!0});a.preventDefault?a.preventDefault():a.returnValue=!1;var b=a.target||a.srcElement;e.waitStillClickEnd?k=setTimeout(function(){f.length=0;b.dispatchEvent(l)},e.timeout):(k=setTimeout(function(){f.length=0},e.timeout),b.dispatchEvent(l))}function p(a){for(var b=[],c="",d=0;d<a.length;d++)a[d]!==
b[0]&&0<b.length&&(c=""===c?b[0]+"*"+b.length:c+"+"+b[0]+"*"+b.length,b.length=0),b.push(a[d]);0<b.length&&(c=""===c?b[0]+"*"+b.length:c+"+"+b[0]+"*"+b.length);return c}function d(a){!a.which&&a.button&&(a.button&1?a.which=1:a.button&4?a.which=2:a.button&2&&(a.which=3))}function h(a){"undefined"!==typeof a&&(e.timeout="number"===typeof a.timeout?a.timeout:e.timeout,e.waitStillClickEnd="boolean"===typeof a.waitStillClickEnd?a.waitStillClickEnd:e.waitStillClickEnd)}function m(a){n();h(a);document.addEventListener("click",
c);g.isRunning=!0}function n(){document.removeEventListener("click",c);g.isRunning=!1}var e={timeout:250,waitStillClickEnd:!1},l,k,g={left:"leftClick",right:"rightClick",middle:"middleClick",isRunning:!0},f=[];m();this.config=h;this.start=m;this.stop=n;this.isRunning=function(){return g.isRunning};return this}();