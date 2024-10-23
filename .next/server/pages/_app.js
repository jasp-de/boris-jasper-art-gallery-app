"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/hook/useImmerLocalStorageState.js":
/*!***********************************************!*\
  !*** ./lib/hook/useImmerLocalStorageState.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useImmerLocalStorageState: () => (/* binding */ useImmerLocalStorageState)\n/* harmony export */ });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-local-storage-state */ \"use-local-storage-state\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_0__, use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__]);\n([immer__WEBPACK_IMPORTED_MODULE_0__, use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction useImmerLocalStorageState(key, options) {\n    const [value, setValue] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(key, {\n        ...options,\n        defaultValue: (0,immer__WEBPACK_IMPORTED_MODULE_0__.freeze)(options.defaultValue)\n    });\n    return [\n        value,\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((updater)=>{\n            if (typeof updater === \"function\") setValue((0,immer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(updater));\n            else setValue((0,immer__WEBPACK_IMPORTED_MODULE_0__.freeze)(updater));\n        }, [\n            setValue\n        ])\n    ];\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaG9vay91c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0o7QUFDdUI7QUFFcEQsU0FBU0ksMEJBQTBCQyxHQUFHLEVBQUVDLE9BQU87SUFDcEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLG1FQUFvQkEsQ0FBQ0UsS0FBSztRQUNsRCxHQUFHQyxPQUFPO1FBQ1ZHLGNBQWNSLDZDQUFNQSxDQUFDSyxRQUFRRyxZQUFZO0lBQzNDO0lBRUEsT0FBTztRQUNMRjtRQUNBTCxrREFBV0EsQ0FDVCxDQUFDUTtZQUNDLElBQUksT0FBT0EsWUFBWSxZQUFZRixTQUFTUixpREFBT0EsQ0FBQ1U7aUJBQy9DRixTQUFTUCw2Q0FBTUEsQ0FBQ1M7UUFDdkIsR0FDQTtZQUFDRjtTQUFTO0tBRWI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1nYWxsZXJ5LWFwcC8uL2xpYi9ob29rL3VzZUltbWVyTG9jYWxTdG9yYWdlU3RhdGUuanM/NzI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSwgeyBmcmVlemUgfSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSBcInVzZS1sb2NhbC1zdG9yYWdlLXN0YXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlKGtleSwgb3B0aW9ucykge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZUxvY2FsU3RvcmFnZVN0YXRlKGtleSwge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgZGVmYXVsdFZhbHVlOiBmcmVlemUob3B0aW9ucy5kZWZhdWx0VmFsdWUpLFxuICB9KTtcblxuICByZXR1cm4gW1xuICAgIHZhbHVlLFxuICAgIHVzZUNhbGxiYWNrKFxuICAgICAgKHVwZGF0ZXIpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB1cGRhdGVyID09PSBcImZ1bmN0aW9uXCIpIHNldFZhbHVlKHByb2R1Y2UodXBkYXRlcikpO1xuICAgICAgICBlbHNlIHNldFZhbHVlKGZyZWV6ZSh1cGRhdGVyKSk7XG4gICAgICB9LFxuICAgICAgW3NldFZhbHVlXVxuICAgICksXG4gIF07XG59XG4iXSwibmFtZXMiOlsicHJvZHVjZSIsImZyZWV6ZSIsInVzZUNhbGxiYWNrIiwidXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJ1c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlIiwia2V5Iiwib3B0aW9ucyIsInZhbHVlIiwic2V0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJ1cGRhdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/hook/useImmerLocalStorageState.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hook/useImmerLocalStorageState */ \"./lib/hook/useImmerLocalStorageState.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_3__]);\n([swr__WEBPACK_IMPORTED_MODULE_2__, _lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction App({ Component, pageProps }) {\n    const [artPiecesInfo, updateArtPiecesInfo] = (0,_lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_3__.useImmerLocalStorageState)(\"artPiecesInfo\", {\n        defaultValue: []\n    });\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`https://example-apis.vercel.app/api/art`, fetcher);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            randomValueSpotlight !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spotlight, {\n                artist: data[randomValueSpotlight],\n                image: data[randomValueSpotlight]\n            }, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArtPieces, {\n                pieces: data\n            }, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDWDtBQUN5RDtBQUVsRixNQUFNRyxVQUFVLENBQUNDLE1BQVFDLE1BQU1ELEtBQUtFLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBRTNDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQsTUFBTSxDQUFDQyxlQUFlQyxvQkFBb0IsR0FBR1gsOEZBQXlCQSxDQUNwRSxpQkFDQTtRQUFFWSxjQUFjLEVBQUU7SUFBQztJQUdyQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdmLCtDQUFNQSxDQUM1QixDQUFDLHVDQUF1QyxDQUFDLEVBQ3pDRTtJQUdGLHFCQUNFOztZQUNHYyx5QkFBeUIsc0JBQ3hCLDhEQUFDQztnQkFDQ0MsUUFBUUosSUFBSSxDQUFDRSxxQkFBcUI7Z0JBQ2xDRyxPQUFPTCxJQUFJLENBQUNFLHFCQUFxQjs7Ozs7OzBCQUdyQyw4REFBQ0k7Z0JBQVVDLFFBQVFQOzs7Ozs7MEJBQ25CLDhEQUFDZiwrQ0FBV0E7Ozs7OzBCQUNaLDhEQUFDVTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1nYWxsZXJ5LWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyB1c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlIH0gZnJvbSBcIi4uL2xpYi9ob29rL3VzZUltbWVyTG9jYWxTdG9yYWdlU3RhdGVcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbYXJ0UGllY2VzSW5mbywgdXBkYXRlQXJ0UGllY2VzSW5mb10gPSB1c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlKFxuICAgIFwiYXJ0UGllY2VzSW5mb1wiLFxuICAgIHsgZGVmYXVsdFZhbHVlOiBbXSB9XG4gICk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIGBodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnRgLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmFuZG9tVmFsdWVTcG90bGlnaHQgIT09IG51bGwgJiYgKFxuICAgICAgICA8U3BvdGxpZ2h0XG4gICAgICAgICAgYXJ0aXN0PXtkYXRhW3JhbmRvbVZhbHVlU3BvdGxpZ2h0XX1cbiAgICAgICAgICBpbWFnZT17ZGF0YVtyYW5kb21WYWx1ZVNwb3RsaWdodF19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPEFydFBpZWNlcyBwaWVjZXM9e2RhdGF9IC8+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsInVzZVNXUiIsInVzZUltbWVyTG9jYWxTdG9yYWdlU3RhdGUiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFydFBpZWNlc0luZm8iLCJ1cGRhdGVBcnRQaWVjZXNJbmZvIiwiZGVmYXVsdFZhbHVlIiwiZGF0YSIsImVycm9yIiwicmFuZG9tVmFsdWVTcG90bGlnaHQiLCJTcG90bGlnaHQiLCJhcnRpc3QiLCJpbWFnZSIsIkFydFBpZWNlcyIsInBpZWNlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles.js":
/*!*******************!*\
  !*** ./styles.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\n    \"*,*::before,*::after{box-sizing:border-box;}body{margin:0;font-family:system-ui;margin:30px;}img{display:block;}\"\n]));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRXRELGlFQUFlQSxvRUFBaUJBOztJQWdCOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnQtZ2FsbGVyeS1hcHAvLi9zdHlsZXMuanM/NmE3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgIG1hcmdpbjogMzBweDtcbiAgfVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmA7XG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ ((module) => {

module.exports = import("immer");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ "use-local-storage-state":
/*!******************************************!*\
  !*** external "use-local-storage-state" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("use-local-storage-state");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();