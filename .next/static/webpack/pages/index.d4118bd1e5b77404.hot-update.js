"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ArtPiecePreview.js":
/*!***************************************!*\
  !*** ./components/ArtPiecePreview.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPiecePreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ArtPiecePreview(param) {\n    let { pieces } = param;\n    console.log(pieces);\n    if (!pieces) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n            lineNumber: 8,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: pieces.map((piece)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: piece.imageSource,\n                        alt: piece.name\n                    }, void 0, false, {\n                        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/art-pieces/\".concat(slug),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: piece.name\n                    }, void 0, false, {\n                        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: piece.artist\n                    }, void 0, false, {\n                        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, piece.slug, true, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = ArtPiecePreview;\nvar _c;\n$RefreshReg$(_c, \"ArtPiecePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlUHJldmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNBO0FBRWQsU0FBU0UsZ0JBQWdCLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtJQUN0Q0MsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLElBQUksQ0FBQ0EsUUFBUTtRQUNYLHFCQUFPLDhEQUFDRztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0VKLE9BQU9LLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFBSUMsS0FBS0gsTUFBTUksV0FBVzt3QkFBRUMsS0FBS0wsTUFBTU0sSUFBSTs7Ozs7O2tDQUM1Qyw4REFBQ2Ysa0RBQUlBO3dCQUFDZ0IsTUFBTSxlQUFvQixPQUFMQztrQ0FBU0M7Ozs7OztrQ0FDcEMsOERBQUNaO2tDQUFHRyxNQUFNTSxJQUFJOzs7Ozs7a0NBQ2QsOERBQUNUO2tDQUFHRyxNQUFNVSxNQUFNOzs7Ozs7O2VBSlRWLE1BQU1RLElBQUk7Ozs7Ozs7Ozs7QUFTM0I7S0FuQndCZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydFBpZWNlUHJldmlldy5qcz9hYTVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0UGllY2VQcmV2aWV3KHsgcGllY2VzIH0pIHtcbiAgY29uc29sZS5sb2cocGllY2VzKTtcblxuICBpZiAoIXBpZWNlcykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3BpZWNlcy5tYXAoKHBpZWNlKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3BpZWNlLnNsdWd9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwaWVjZS5pbWFnZVNvdXJjZX0gYWx0PXtwaWVjZS5uYW1lfSAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0LXBpZWNlcy8ke3NsdWd9YH0+e3RpdGxlfTwvTGluaz5cbiAgICAgICAgICA8cD57cGllY2UubmFtZX08L3A+XG4gICAgICAgICAgPHA+e3BpZWNlLmFydGlzdH08L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiQXJ0UGllY2VQcmV2aWV3IiwicGllY2VzIiwiY29uc29sZSIsImxvZyIsInAiLCJ1bCIsIm1hcCIsInBpZWNlIiwibGkiLCJpbWciLCJzcmMiLCJpbWFnZVNvdXJjZSIsImFsdCIsIm5hbWUiLCJocmVmIiwic2x1ZyIsInRpdGxlIiwiYXJ0aXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArtPiecePreview.js\n"));

/***/ })

});