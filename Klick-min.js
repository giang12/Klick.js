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

var Klick=function(){function h(a){clearTimeout(f);n(a);switch(a.which){case 1:d.push(e.left);break;case 2:d.push(e.middle);break;case 3:d.push(e.right)}g=new CustomEvent(p(d),{detail:{},bubbles:!0,cancelable:!0});a.preventDefault?a.preventDefault():a.returnValue=!1;var b=a.target||a.srcElement;c.waitStillClickEnd?f=setTimeout(function(){d.length=0;b.dispatchEvent(g)},c.timeout):(f=setTimeout(function(){d.length=0},c.timeout),b.dispatchEvent(g))}function p(a){for(var b=[],c="",d=0;d<a.length;d++)a[d]!==
b[0]&&0<b.length&&(c=""===c?b[0]+"*"+b.length:c+"+"+b[0]+"*"+b.length,b.length=0),b.push(a[d]);0<b.length&&(c=""===c?b[0]+"*"+b.length:c+"+"+b[0]+"*"+b.length);return c}function n(a){!a.which&&a.button&&(a.button&1?a.which=1:a.button&4?a.which=2:a.button&2&&(a.which=3))}function k(a){"undefined"!==typeof a&&(c.timeout="number"===typeof a.timeout?a.timeout:c.timeout,c.waitStillClickEnd="boolean"===typeof a.waitStillClickEnd?a.waitStillClickEnd:c.waitStillClickEnd)}function l(a){m();k(a);document.addEventListener("click",
h);e.isRunning=!0}function m(){document.removeEventListener("click",h);e.isRunning=!1}var c={timeout:250,waitStillClickEnd:!1},g,f,e={left:"leftClick",right:"rightClick",middle:"middleClick",isRunning:!0},d=[];l();this.config=k;this.start=l;this.stop=m;this.isRunning=function(){return e.isRunning};return this}();