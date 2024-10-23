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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useImmerLocalStorageState: () => (/* binding */ useImmerLocalStorageState)\n/* harmony export */ });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-local-storage-state */ \"use-local-storage-state\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_0__, use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__]);\n([immer__WEBPACK_IMPORTED_MODULE_0__, use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction useImmerLocalStorageState(key, options) {\n    const [value, setValue] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(key, {\n        ...options,\n        defaultValue: (0,immer__WEBPACK_IMPORTED_MODULE_0__.freeze)(options.defaultValue)\n    });\n    return [\n        value,\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((updater)=>{\n            if (typeof updater === \"function\") setValue((0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(updater));\n            else setValue((0,immer__WEBPACK_IMPORTED_MODULE_0__.freeze)(updater));\n        }, [\n            setValue\n        ])\n    ];\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaG9vay91c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0o7QUFDdUI7QUFFcEQsU0FBU0ksMEJBQTBCQyxHQUFHLEVBQUVDLE9BQU87SUFDcEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLG1FQUFvQkEsQ0FBQ0UsS0FBSztRQUNsRCxHQUFHQyxPQUFPO1FBQ1ZHLGNBQWNSLDZDQUFNQSxDQUFDSyxRQUFRRyxZQUFZO0lBQzNDO0lBRUEsT0FBTztRQUNMRjtRQUNBTCxrREFBV0EsQ0FDVCxDQUFDUTtZQUNDLElBQUksT0FBT0EsWUFBWSxZQUFZRixTQUFTUiw4Q0FBT0EsQ0FBQ1U7aUJBQy9DRixTQUFTUCw2Q0FBTUEsQ0FBQ1M7UUFDdkIsR0FDQTtZQUFDRjtTQUFTO0tBRWI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1nYWxsZXJ5LWFwcC8uL2xpYi9ob29rL3VzZUltbWVyTG9jYWxTdG9yYWdlU3RhdGUuanM/NzI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9kdWNlLCBmcmVlemUgfSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSBcInVzZS1sb2NhbC1zdG9yYWdlLXN0YXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlKGtleSwgb3B0aW9ucykge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZUxvY2FsU3RvcmFnZVN0YXRlKGtleSwge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgZGVmYXVsdFZhbHVlOiBmcmVlemUob3B0aW9ucy5kZWZhdWx0VmFsdWUpLFxuICB9KTtcblxuICByZXR1cm4gW1xuICAgIHZhbHVlLFxuICAgIHVzZUNhbGxiYWNrKFxuICAgICAgKHVwZGF0ZXIpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB1cGRhdGVyID09PSBcImZ1bmN0aW9uXCIpIHNldFZhbHVlKHByb2R1Y2UodXBkYXRlcikpO1xuICAgICAgICBlbHNlIHNldFZhbHVlKGZyZWV6ZSh1cGRhdGVyKSk7XG4gICAgICB9LFxuICAgICAgW3NldFZhbHVlXVxuICAgICksXG4gIF07XG59XG4iXSwibmFtZXMiOlsicHJvZHVjZSIsImZyZWV6ZSIsInVzZUNhbGxiYWNrIiwidXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJ1c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlIiwia2V5Iiwib3B0aW9ucyIsInZhbHVlIiwic2V0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJ1cGRhdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/hook/useImmerLocalStorageState.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hook/useImmerLocalStorageState */ \"./lib/hook/useImmerLocalStorageState.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_4__]);\n([swr__WEBPACK_IMPORTED_MODULE_2__, _lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction App({ Component, pageProps }) {\n    const [artPiecesInfo, updateArtPiecesInfo] = (0,_lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_4__.useImmerLocalStorageState)(\"artPiecesInfo\", {\n        defaultValue: []\n    });\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`https://example-apis.vercel.app/api/art`, fetcher);\n    const handleFavorites = (slug)=>{\n        updateArtPiecesInfo((draft)=>{\n            const index = draft.findIndex((piece)=>piece.slug === slug);\n            if (index !== -1) {\n                draft[index].isFavorite = !draft[index].isFavorite;\n            } else {\n                draft.push({\n                    slug,\n                    isFavorite: true\n                });\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                data: data,\n                artPiecesInfo: artPiecesInfo,\n                handleFavorites: handleFavorites\n            }, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNYO0FBQ21CO0FBQ3NDO0FBRWxGLE1BQU1LLFVBQVUsQ0FBQ0MsTUFBUUMsTUFBTUQsS0FBS0UsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7QUFFM0MsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxNQUFNLENBQUNDLGVBQWVDLG9CQUFvQixHQUFHWCw4RkFBeUJBLENBQ3BFLGlCQUNBO1FBQUVZLGNBQWMsRUFBRTtJQUFDO0lBR3JCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR2pCLCtDQUFNQSxDQUM1QixDQUFDLHVDQUF1QyxDQUFDLEVBQ3pDSTtJQUdGLE1BQU1jLGtCQUFrQixDQUFDQztRQUN2Qkwsb0JBQW9CLENBQUNNO1lBQ25CLE1BQU1DLFFBQVFELE1BQU1FLFNBQVMsQ0FBQyxDQUFDQyxRQUFVQSxNQUFNSixJQUFJLEtBQUtBO1lBQ3hELElBQUlFLFVBQVUsQ0FBQyxHQUFHO2dCQUNoQkQsS0FBSyxDQUFDQyxNQUFNLENBQUNHLFVBQVUsR0FBRyxDQUFDSixLQUFLLENBQUNDLE1BQU0sQ0FBQ0csVUFBVTtZQUNwRCxPQUFPO2dCQUNMSixNQUFNSyxJQUFJLENBQUM7b0JBQUVOO29CQUFNSyxZQUFZO2dCQUFLO1lBQ3RDO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3pCLCtDQUFXQTs7Ozs7MEJBQ1osOERBQUNZO2dCQUNFLEdBQUdDLFNBQVM7Z0JBQ2JJLE1BQU1BO2dCQUNOSCxlQUFlQTtnQkFDZkssaUJBQWlCQTs7Ozs7Ozs7QUFJekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnQtZ2FsbGVyeS1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW1tZXJMb2NhbFN0b3JhZ2VTdGF0ZSB9IGZyb20gXCIuLi9saWIvaG9vay91c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2FydFBpZWNlc0luZm8sIHVwZGF0ZUFydFBpZWNlc0luZm9dID0gdXNlSW1tZXJMb2NhbFN0b3JhZ2VTdGF0ZShcbiAgICBcImFydFBpZWNlc0luZm9cIixcbiAgICB7IGRlZmF1bHRWYWx1ZTogW10gfVxuICApO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICBgaHR0cHM6Ly9leGFtcGxlLWFwaXMudmVyY2VsLmFwcC9hcGkvYXJ0YCxcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRmF2b3JpdGVzID0gKHNsdWcpID0+IHtcbiAgICB1cGRhdGVBcnRQaWVjZXNJbmZvKChkcmFmdCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBkcmFmdC5maW5kSW5kZXgoKHBpZWNlKSA9PiBwaWVjZS5zbHVnID09PSBzbHVnKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgZHJhZnRbaW5kZXhdLmlzRmF2b3JpdGUgPSAhZHJhZnRbaW5kZXhdLmlzRmF2b3JpdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFmdC5wdXNoKHsgc2x1ZywgaXNGYXZvcml0ZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgYXJ0UGllY2VzSW5mbz17YXJ0UGllY2VzSW5mb31cbiAgICAgICAgaGFuZGxlRmF2b3JpdGVzPXtoYW5kbGVGYXZvcml0ZXN9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwidXNlU1dSIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcnRQaWVjZXNJbmZvIiwidXBkYXRlQXJ0UGllY2VzSW5mbyIsImRlZmF1bHRWYWx1ZSIsImRhdGEiLCJlcnJvciIsImhhbmRsZUZhdm9yaXRlcyIsInNsdWciLCJkcmFmdCIsImluZGV4IiwiZmluZEluZGV4IiwicGllY2UiLCJpc0Zhdm9yaXRlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles.js":
/*!*******************!*\
  !*** ./styles.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\n    \"*,*::before,*::after{box-sizing:border-box;}body{margin:0;font-family:'Arial',sans-serif;background-color:#fff;}h1,h2{text-align:center;color:#1a1a1a;}img{max-width:100%;height:auto;display:block;}button{background-color:#4a90e2;color:white;border:none;padding:10px 15px;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease;}@media (min-width:768px){body{max-width:1200px;margin:0 auto;padding:20px;}}\"\n]));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRXRELGlFQUFlQSxvRUFBaUJBOztJQTBDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnQtZ2FsbGVyeS1hcHAvLi9zdHlsZXMuanM/NmE3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gIH1cblxuICBoMSwgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzFhMWExYTtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhOTBlMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgYm9keSB7XG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles.js\n");

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