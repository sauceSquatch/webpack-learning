/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');

image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');

bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0bd576997866bcd211f5fde65ee0aff4.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);

console.log(total);

/***/ }
/******/ ]);