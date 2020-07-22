// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n * {\n    box-sizing: border-box;\n  }\n *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n    padding: 0;\n  }\n  ul,\n  ol {\n    list-style: none;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n    #html {\n        background: #ffe600;\n    }\n    #pikachu {\n        position: absolute;\n        width: 420px;\n        height: 235px;\n        left: 50%;\n        top: 50%;\n        -webkit-transform: translateY(-50%) translateX(-50%);\n        -moz-transform: translateY(-50%) translateX(-50%);\n        -ms-transform: translateY(-50%) translateX(-50%);\n        transform: translateY(-50%) translateX(-50%);\n    }\n    .eye {\n        width: 57px;\n        height: 57px;\n        border: 3px solid black;\n        background: #2e2e2e;\n        border-radius: 100%;\n        position: absolute;\n        margin-left: 60px;\n    }\n    .eye:after {\n        width: 25px;\n        height: 25px;\n        border: 3px solid black;\n        background: #fff;\n        content: \"\";\n        display: block;\n        position: absolute;\n        border-radius: 100%;\n        margin-left: 7px;\n        margin-top: -2px;\n    }\n    .eye.right {\n        right: 60px;\n    }\n    .nose {\n        position: absolute;\n        margin: 30px calc(50% - 11px);\n        margin-top: 38px;\n        width: 0;\n        height: 0;\n        z-index: 1; /* Thanks for the solution to @440design */\n        border-top: 9px solid black;\n        border-left: 11px solid transparent;\n        border-right: 11px solid transparent;\n        box-shadow: 0 -1px 0 black;\n    }\n    .nose:before {\n        content: \"\";\n        display: block;\n        position: absolute;\n        width: 22px;\n        height: 5px;\n        background: black;\n        border-top-left-radius: 11px 5px;\n        border-top-right-radius: 11px 5px;\n        margin-top: -14px;\n        margin-left: -11px;\n    }\n    .nose:hover {\n        -webkit-animation: nose 0.23s infinite linear;\n        -moz-animation: nose 0.23s infinite;\n        -ms-animation: nose 0.23s infinite;\n        animation: nose 0.23s infinite linear;\n    }\n    .ridiculousMouth {\n        position: absolute;\n        width: 228px;\n        height: 180px;\n        margin-top: 65px;\n        margin-left: calc(50% - 118px);\n        overflow: hidden;\n    }\n    .ridiculousMouth:after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        width: 80px;\n        height: 25px;\n        background: #ffe600;\n        border: 3px solid black;\n        border-top: none;\n        border-left: none;\n        right: 25px;\n        top: -5px;\n        -webkit-transform: rotate(25deg);\n        -moz-transform: rotate(25deg);\n        -ms-transform: rotate(25deg);\n        transform: rotate(25deg);\n        border-bottom-right-radius: 60px 30px;\n        box-shadow: 0 -10px 0 #ffe600, -5px -3px 0 #ffe600;\n    }\n    .ridiculousMouth:before {\n        content: \"\";\n        display: block;\n        position: absolute;\n        width: 80px;\n        height: 25px;\n        background: #ffe600;\n        border: 3px solid black;\n        border-top: none;\n        border-right: none;\n        left: 35px;\n        top: -5px;\n        -webkit-transform: rotate(-25deg);\n        -moz-transform: rotate(-25deg);\n        -ms-transform: rotate(-25deg);\n        transform: rotate(-25deg);\n        border-bottom-left-radius: 60px 30px;\n        box-shadow: 0 -10px 0 #ffe600, 5px -3px 0 #ffe600;\n        z-index: 1;\n    }\n    .ridiculousMouth > div {\n        position: absolute;\n        background: #ff485f;\n        width: 228px;\n        height: 800px;\n        border: 4px solid black;\n        border-bottom-left-radius: 118px 800px;\n        border-bottom-right-radius: 118px 800px;\n        margin-top: -637px;\n        overflow: hidden;\n    }\n    .ridiculousMouth > div:after {\n        content: \"\";\n        position: absolute;\n        display: block;\n        width: 130px;\n        height: 100px;\n        box-shadow: 0 -70px 0 #9b000a;\n        bottom: 35px;\n        margin-left: 49px;\n        border-top-left-radius: 100%;\n        border-top-right-radius: 100%;\n    }\n    .cheek {\n        width: 82px;\n        height: 82px;\n        border: 3px solid black;\n        border-radius: 100%;\n        position: absolute;\n        margin-top: 110px;\n        background: #f00;\n    }\n    .cheek.right {\n        right: 0;\n    }\n\n    @-webkit-keyframes nose {\n        0% {\n        -webkit-transform: rotate(0deg);\n        }\n        33% {\n        -webkit-transform: rotate(-5deg);\n        }\n        67% {\n        -webkit-transform: rotate(5deg);\n        }\n        100% {\n        -webkit-transform: rotate(0deg);\n        }\n    }\n    @-moz-keyframes nose {\n        0% {\n        -moz-transform: rotate(0deg);\n        }\n        33% {\n        -moz-transform: rotate(-5deg);\n        }\n        67% {\n        -moz-transform: rotate(5deg);\n        }\n        100% {\n        -moz-transform: rotate(0deg);\n        }\n    }\n    @-ms-keyframes nose {\n        0% {\n        -ms-transform: rotate(0deg);\n        }\n        33% {\n        -ms-transform: rotate(-5deg);\n        }\n        67% {\n        -ms-transform: rotate(5deg);\n        }\n        100% {\n        -ms-transform: rotate(0deg);\n        }\n    }\n    @keyframes nose {\n        0% {\n        transform: rotate(0deg);\n        }\n        33% {\n        transform: rotate(-5deg);\n        }\n        67% {\n        transform: rotate(5deg);\n        }\n        100% {\n        transform: rotate(0deg);\n        }\n    }\n\n    ";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 30,
  id: undefined,
  events: {
    "#btnStop": "clear",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    write.innerText = _css.default.substr(0, player.n);
    output.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n === _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    write.innerText = _css.default.substr(0, player.n);
    output.innerHTML = _css.default.substr(0, player.n);
    write.scrollTop = write.scrollHeight;
  },
  play: function play() {
    return player.id = setInterval(player.run, player.time);
  },
  clear: function clear() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.time = 300;
    player.clear();
    player.play();
  },
  normal: function normal() {
    player.time = 30;
    player.clear();
    player.play();
  },
  fast: function fast() {
    player.time = 3;
    player.clear();
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.3a1138b2.js.map