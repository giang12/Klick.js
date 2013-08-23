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
//polyfill CustomEvent IE
(function () {
    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.CustomEvent.prototype;

    window.CustomEvent = CustomEvent;
})();

var Klick = (function () {

    var options = {
        timeout: 250,
        waitStillClickEnd: false
    };


    var event;
    var timer;
    var privateVars = {
        left: "leftClick",
        right: "rightClick",
        middle: "middleClick",
        isRunning: true
    };
    var query = [];

    function _init(e) {
        clearTimeout(timer);
        _fixWhich(e);
        switch (e.which) {
        case 1: //left
            query.push(privateVars.left);
            break;
        case 2: //middle
            query.push(privateVars.middle);
            break;
        case 3: //right
            query.push(privateVars.right);
            break;
        default:
            break;
        }
        event = new CustomEvent(
            _queryToString(query), {
                detail: {},
                bubbles: true,
                cancelable: true
            }
        );

        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        var target = e.target || e.srcElement;
        if (options.waitStillClickEnd) {
            timer = setTimeout(function () {
                query.length = 0;
                target.dispatchEvent(event);
            }, options.timeout);
        } else {
            timer = setTimeout(function () {
                query.length = 0;
            }, options.timeout);
            target.dispatchEvent(event);
        }
    }

    function _queryToString(arg) {
        var temp = [];
        var string = "";
        for (var x = 0; x < arg.length; x++) {
            if (arg[x] !== temp[0] && temp.length > 0) {
                string = string === "" ? (temp[0] + "*" + temp.length) : (string + "+" + temp[0] + "*" + temp.length);
                temp.length = 0;
            }
            temp.push(arg[x]);
        }
        if (temp.length > 0) {
            string = string === "" ? (temp[0] + "*" + temp.length) : (string + "+" + temp[0] + "*" + temp.length);
        }
        return string;
    }

    function _fixWhich(e) {
        if (!e.which && e.button) {
            if (e.button & 1) e.which = 1; // Left
            else if (e.button & 4) e.which = 2; // Middle
            else if (e.button & 2) e.which = 3; // Right
        }
    }

    function config(opts) {
        if (typeof (opts) === 'undefined') return;
        options.timeout = typeof (opts.timeout) === 'number' ? opts.timeout : options.timeout;
        options.waitStillClickEnd = typeof (opts.waitStillClickEnd) === 'boolean' ? opts.waitStillClickEnd : options.waitStillClickEnd;
    }

    function start(opts) {
        stop();
        config(opts);
        document.addEventListener("click", _init);
        privateVars.isRunning = true;
    }

    function stop() {
        document.removeEventListener("click", _init);
        privateVars.isRunning = false;
    }

    function isRunning() {
        return privateVars.isRunning;
    }

    start();

    this.config = config;
    this.start = start;
    this.stop = stop;
    this.isRunning = isRunning;
    return this;
})();