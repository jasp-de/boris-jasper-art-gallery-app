"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ArtPiecePreview.js":
/*!***************************************!*\
  !*** ./components/ArtPiecePreview.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPiecePreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ArtPiecePreview(param) {\n    let { pieces } = param;\n    console.log(pieces);\n    if (!pieces) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n            lineNumber: 5,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: pieces.map((piece)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: piece.imageSource,\n                        alt: piece.name\n                    }, void 0, false, {\n                        fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: piece.name\n                    }, void 0, false, {\n                        fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: piece.artist\n                    }, void 0, false, {\n                        fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, piece.slug, true, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = ArtPiecePreview;\nvar _c;\n$RefreshReg$(_c, \"ArtPiecePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlUHJldmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsZ0JBQWdCLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtJQUN0Q0MsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLElBQUksQ0FBQ0EsUUFBUTtRQUNYLHFCQUFPLDhEQUFDRztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0VKLE9BQU9LLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFBSUMsS0FBS0gsTUFBTUksV0FBVzt3QkFBRUMsS0FBS0wsTUFBTU0sSUFBSTs7Ozs7O2tDQUM1Qyw4REFBQ1Q7a0NBQUdHLE1BQU1NLElBQUk7Ozs7OztrQ0FDZCw4REFBQ1Q7a0NBQUdHLE1BQU1PLE1BQU07Ozs7Ozs7ZUFIVFAsTUFBTVEsSUFBSTs7Ozs7Ozs7OztBQVEzQjtLQWxCd0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0UGllY2VQcmV2aWV3LmpzP2FhNWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0UGllY2VQcmV2aWV3KHsgcGllY2VzIH0pIHtcbiAgY29uc29sZS5sb2cocGllY2VzKTtcblxuICBpZiAoIXBpZWNlcykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3BpZWNlcy5tYXAoKHBpZWNlKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3BpZWNlLnNsdWd9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwaWVjZS5pbWFnZVNvdXJjZX0gYWx0PXtwaWVjZS5uYW1lfSAvPlxuICAgICAgICAgIDxwPntwaWVjZS5uYW1lfTwvcD5cbiAgICAgICAgICA8cD57cGllY2UuYXJ0aXN0fTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXJ0UGllY2VQcmV2aWV3IiwicGllY2VzIiwiY29uc29sZSIsImxvZyIsInAiLCJ1bCIsIm1hcCIsInBpZWNlIiwibGkiLCJpbWciLCJzcmMiLCJpbWFnZVNvdXJjZSIsImFsdCIsIm5hbWUiLCJhcnRpc3QiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArtPiecePreview.js\n"));

/***/ }),

/***/ "./components/ArtPieces.js":
/*!*********************************!*\
  !*** ./components/ArtPieces.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPieces; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ArtPiecePreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArtPiecePreview */ \"./components/ArtPiecePreview.js\");\n\n\nfunction ArtPieces(param) {\n    let { pieces } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArtPiecePreview__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        pieces: pieces\n    }, void 0, false, {\n        fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/components/ArtPieces.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n_c = ArtPieces;\nvar _c;\n$RefreshReg$(_c, \"ArtPieces\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRDtBQUVqQyxTQUFTQyxVQUFVLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtJQUNoQyxxQkFBTyw4REFBQ0Ysd0RBQWVBO1FBQUNFLFFBQVFBOzs7Ozs7QUFDbEM7S0FGd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0UGllY2VzLmpzPzJmMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFydFBpZWNlUHJldmlldyBmcm9tIFwiLi9BcnRQaWVjZVByZXZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0UGllY2VzKHsgcGllY2VzIH0pIHtcbiAgcmV0dXJuIDxBcnRQaWVjZVByZXZpZXcgcGllY2VzPXtwaWVjZXN9IC8+O1xufVxuIl0sIm5hbWVzIjpbIkFydFBpZWNlUHJldmlldyIsIkFydFBpZWNlcyIsInBpZWNlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ArtPieces.js\n"));

/***/ }),

/***/ "./components/Spotlight.js":
/*!*********************************!*\
  !*** ./components/Spotlight.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Spotlight; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Spotlight(param) {\n    let { image, artist } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: image.imageSource,\n                alt: artist.artist\n            }, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/components/Spotlight.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: artist.artist\n            }, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/components/Spotlight.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Spotlight;\nvar _c;\n$RefreshReg$(_c, \"Spotlight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nwb3RsaWdodC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsVUFBVSxLQUFpQjtRQUFqQixFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFqQjtJQUNoQyxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxLQUFLSCxNQUFNSSxXQUFXO2dCQUFFQyxLQUFLSixPQUFPQSxNQUFNOzs7Ozs7MEJBQy9DLDhEQUFDSzswQkFBR0wsT0FBT0EsTUFBTTs7Ozs7Ozs7QUFHdkI7S0FQd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3BvdGxpZ2h0LmpzPzQ1NGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BvdGxpZ2h0KHsgaW1hZ2UsIGFydGlzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZS5pbWFnZVNvdXJjZX0gYWx0PXthcnRpc3QuYXJ0aXN0fSAvPlxuICAgICAgPHA+e2FydGlzdC5hcnRpc3R9PC9wPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNwb3RsaWdodCIsImltYWdlIiwiYXJ0aXN0IiwiaW1nIiwic3JjIiwiaW1hZ2VTb3VyY2UiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Spotlight.js\n"));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_ArtPieces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ArtPieces */ \"./components/ArtPieces.js\");\n/* harmony import */ var _components_Spotlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Spotlight */ \"./components/Spotlight.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://example-apis.vercel.app/api/art\", fetcher);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error fetching data!\"\n        }, void 0, false, {\n            fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n            lineNumber: 16,\n            columnNumber: 12\n        }, this);\n    }\n    let randomValueSpotlight;\n    console.log(\"data:\", data);\n    function spotlightRandom() {\n        randomValueSpotlight = Math.floor(Math.random() * data.length);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spotlight__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                artist: data[randomValueSpotlight],\n                image: data[randomValueSpotlight]\n            }, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtPieces__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pieces: data\n            }, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNYO0FBQ3NCO0FBQ0E7QUFDL0MsTUFBTUksVUFBVSxDQUFDQyxNQUFRQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUMzQyxTQUFTQyxJQUFJLEtBQXdCO1FBQXhCLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQXhCOztJQUMxQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdiLCtDQUFNQSxDQUMzQiwyQ0FDREc7SUFFRixJQUFJLENBQUNTLE1BQU07UUFDVCxxQkFBTyw4REFBQ0U7c0JBQUk7Ozs7OztJQUNkO0lBRUEsSUFBSUQsT0FBTztRQUNULHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2Q7SUFDQSxJQUFJQztJQUNKQyxRQUFRQyxHQUFHLENBQUMsU0FBU0w7SUFDckIsU0FBU007UUFDUEgsdUJBQXVCSSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS1QsS0FBS1UsTUFBTTtJQUMvRDtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ3BCLDZEQUFTQTtnQkFDUnFCLFFBQVFYLElBQUksQ0FBQ0cscUJBQXFCO2dCQUNsQ1MsT0FBT1osSUFBSSxDQUFDRyxxQkFBcUI7Ozs7OzswQkFFbkMsOERBQUNkLDZEQUFTQTtnQkFBQ3dCLFFBQVFiOzs7Ozs7MEJBQ25CLDhEQUFDYiwrQ0FBV0E7Ozs7OzBCQUNaLDhEQUFDVztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QjtHQTVCd0JGOztRQUNFVCwyQ0FBTUE7OztLQURSUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IEFydFBpZWNlcyBmcm9tIFwiQC9jb21wb25lbnRzL0FydFBpZWNlc1wiO1xuaW1wb3J0IFNwb3RsaWdodCBmcm9tIFwiQC9jb21wb25lbnRzL1Nwb3RsaWdodFwiO1xuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIGBodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnRgLFxuICAgIGZldGNoZXJcbiAgKTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yIGZldGNoaW5nIGRhdGEhPC9kaXY+O1xuICB9XG4gIGxldCByYW5kb21WYWx1ZVNwb3RsaWdodDtcbiAgY29uc29sZS5sb2coXCJkYXRhOlwiLCBkYXRhKTtcbiAgZnVuY3Rpb24gc3BvdGxpZ2h0UmFuZG9tKCkge1xuICAgIHJhbmRvbVZhbHVlU3BvdGxpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5sZW5ndGgpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTcG90bGlnaHRcbiAgICAgICAgYXJ0aXN0PXtkYXRhW3JhbmRvbVZhbHVlU3BvdGxpZ2h0XX1cbiAgICAgICAgaW1hZ2U9e2RhdGFbcmFuZG9tVmFsdWVTcG90bGlnaHRdfVxuICAgICAgLz5cbiAgICAgIDxBcnRQaWVjZXMgcGllY2VzPXtkYXRhfSAvPlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJ1c2VTV1IiLCJBcnRQaWVjZXMiLCJTcG90bGlnaHQiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRhdGEiLCJlcnJvciIsImRpdiIsInJhbmRvbVZhbHVlU3BvdGxpZ2h0IiwiY29uc29sZSIsImxvZyIsInNwb3RsaWdodFJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImFydGlzdCIsImltYWdlIiwicGllY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});