(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tweetnacl");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tweetnacl__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tweetnacl__);


const overheadLength = __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default.a.box.publicKeyLength + __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default.a.box.overheadLength;
/* harmony export (immutable) */ __webpack_exports__["a"] = overheadLength;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nonce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tweetnacl__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tweetnacl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blakejs_blake2b__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blakejs_blake2b___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_blakejs_blake2b__);



function nonce(pk1, pk2){
	var state = __WEBPACK_IMPORTED_MODULE_1_blakejs_blake2b___default.a.blake2bInit(__WEBPACK_IMPORTED_MODULE_0_tweetnacl___default.a.box.nonceLength, null);
	__WEBPACK_IMPORTED_MODULE_1_blakejs_blake2b___default.a.blake2bUpdate(state, pk1);
	__WEBPACK_IMPORTED_MODULE_1_blakejs_blake2b___default.a.blake2bUpdate(state, pk2);
	return __WEBPACK_IMPORTED_MODULE_1_blakejs_blake2b___default.a.blake2bFinal(state);
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_consts__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "overheadLength", function() { return __WEBPACK_IMPORTED_MODULE_0__src_consts__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_seal__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_open__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "seal", function() { return __WEBPACK_IMPORTED_MODULE_1__src_seal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return __WEBPACK_IMPORTED_MODULE_2__src_open__["a"]; });








/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = seal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tweetnacl__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tweetnacl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nonce__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);





function seal(m, pk){
	var c = new Uint8Array(__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* overheadLength */] + m.length);

	var ek = __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default.a.box.keyPair();
	c.set(ek.publicKey);

	var nonce = Object(__WEBPACK_IMPORTED_MODULE_1__nonce__["a" /* default */])(ek.publicKey, pk);
	var boxed = __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default.a.box(m, nonce, pk, ek.secretKey);
	c.set(boxed, ek.publicKey.length);

	Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* zero */])(ek.secretKey);

	return c;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("blakejs/blake2b");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zero;
function zero(buf){
	for(var i = 0; i < buf.length; i++){
		buf[i] = 0;
	}
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = open;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tweetnacl__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tweetnacl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nonce__ = __webpack_require__(2);



function open(c, pk, sk){
	var epk = c.subarray(0, __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default.a.box.publicKeyLength);
	var nonce = Object(__WEBPACK_IMPORTED_MODULE_1__nonce__["a" /* default */])(epk, pk);

	var boxData = c.subarray(__WEBPACK_IMPORTED_MODULE_0_tweetnacl___default.a.box.publicKeyLength);
	return __WEBPACK_IMPORTED_MODULE_0_tweetnacl___default.a.box.open(boxData, nonce, epk, sk);
};


/***/ })
/******/ ]);
});