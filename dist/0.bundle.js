(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./build/react_rust_wasm.js":
/*!**********************************!*\
  !*** ./build/react_rust_wasm.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react_rust_wasm_bg = __webpack_require__(/*! ./react_rust_wasm_bg.js */ \"./build/react_rust_wasm_bg.js\");\n\nObject.keys(_react_rust_wasm_bg).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _react_rust_wasm_bg[key];\n    }\n  });\n});\n\nvar _react_rust_wasm_bg2 = __webpack_require__(/*! ./react_rust_wasm_bg.wasm */ \"./build/react_rust_wasm_bg.wasm\");\n\nvar wasm = _interopRequireWildcard(_react_rust_wasm_bg2);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n//# sourceURL=webpack:///./build/react_rust_wasm.js?");

/***/ }),

/***/ "./build/react_rust_wasm_bg.js":
/*!*************************************!*\
  !*** ./build/react_rust_wasm_bg.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.big_computation = big_computation;\nexports.__wbg_alert_42c5391edfd46cdc = __wbg_alert_42c5391edfd46cdc;\n\nvar _react_rust_wasm_bg = __webpack_require__(/*! ./react_rust_wasm_bg.wasm */ \"./build/react_rust_wasm_bg.wasm\");\n\nvar wasm = _interopRequireWildcard(_react_rust_wasm_bg);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nvar cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nvar cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction big_computation() {\n    wasm.big_computation();\n}\n\nfunction __wbg_alert_42c5391edfd46cdc(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./build/react_rust_wasm_bg.js?");

/***/ }),

/***/ "./build/react_rust_wasm_bg.wasm":
/*!***************************************!*\
  !*** ./build/react_rust_wasm_bg.wasm ***!
  \***************************************/
/*! exports provided: memory, big_computation */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./react_rust_wasm_bg.js */ \"./build/react_rust_wasm_bg.js\");\n/* harmony import */ var m0_default = /*#__PURE__*/__webpack_require__.n(m0);\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./build/react_rust_wasm_bg.wasm?");

/***/ })

}]);