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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/hook/useImmerLocalStorageState */ \"./lib/hook/useImmerLocalStorageState.js\");\n/* harmony import */ var _components_ArtPieces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ArtPieces */ \"./components/ArtPieces.js\");\n/* harmony import */ var _components_Spotlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Spotlight */ \"./components/Spotlight.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction HomePage() {\n    _s();\n    const [artPiecesInfo, updateArtPiecesInfo] = (0,_lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_2__.useImmerLocalStorageState)(\"artPiecesInfo\", {\n        defaultValue: []\n    });\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://example-apis.vercel.app/api/art\", fetcher);\n    console.log(\"data:\", data);\n    function spotlightRandom() {\n        return Math.floor(Math.random() * 11);\n    }\n    console.log(spotlightRandom());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello from Next.jspr\"\n            }, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spotlight__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtPieces__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pieces: data\n            }, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"ezi7qjAMX5HC8JHZpYSuYCO/OnI=\", false, function() {\n    return [\n        _lib_hook_useImmerLocalStorageState__WEBPACK_IMPORTED_MODULE_2__.useImmerLocalStorageState,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDeUQ7QUFDbkM7QUFDQTtBQUUvQyxNQUFNSSxVQUFVLENBQUNDLE1BQVFDLE1BQU1ELEtBQUtFLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBRTNDLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGVBQWVDLG9CQUFvQixHQUFHWCw4RkFBeUJBLENBQ3BFLGlCQUNBO1FBQUVZLGNBQWMsRUFBRTtJQUFDO0lBR3JCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR2YsK0NBQU1BLENBQzNCLDJDQUNESTtJQUdGWSxRQUFRQyxHQUFHLENBQUMsU0FBU0g7SUFDckIsU0FBU0k7UUFDUCxPQUFPQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztJQUNwQztJQUNBTCxRQUFRQyxHQUFHLENBQUNDO0lBQ1oscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ3BCLDZEQUFTQTs7Ozs7MEJBQ1YsOERBQUNELDZEQUFTQTtnQkFBQ3NCLFFBQVFWOzs7Ozs7Ozs7Ozs7QUFHekI7R0F2QndCSjs7UUFDdUJULDBGQUF5QkE7UUFLOUNELDJDQUFNQTs7O0tBTlJVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyB1c2VJbW1lckxvY2FsU3RvcmFnZVN0YXRlIH0gZnJvbSBcIi4uL2xpYi9ob29rL3VzZUltbWVyTG9jYWxTdG9yYWdlU3RhdGVcIjtcbmltcG9ydCBBcnRQaWVjZXMgZnJvbSBcIkAvY29tcG9uZW50cy9BcnRQaWVjZXNcIjtcbmltcG9ydCBTcG90bGlnaHQgZnJvbSBcIkAvY29tcG9uZW50cy9TcG90bGlnaHRcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFthcnRQaWVjZXNJbmZvLCB1cGRhdGVBcnRQaWVjZXNJbmZvXSA9IHVzZUltbWVyTG9jYWxTdG9yYWdlU3RhdGUoXG4gICAgXCJhcnRQaWVjZXNJbmZvXCIsXG4gICAgeyBkZWZhdWx0VmFsdWU6IFtdIH1cbiAgKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgYGh0dHBzOi8vZXhhbXBsZS1hcGlzLnZlcmNlbC5hcHAvYXBpL2FydGAsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGNvbnNvbGUubG9nKFwiZGF0YTpcIiwgZGF0YSk7XG4gIGZ1bmN0aW9uIHNwb3RsaWdodFJhbmRvbSgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICB9XG4gIGNvbnNvbGUubG9nKHNwb3RsaWdodFJhbmRvbSgpKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhlbGxvIGZyb20gTmV4dC5qc3ByPC9oMT5cbiAgICAgIDxTcG90bGlnaHQgLz5cbiAgICAgIDxBcnRQaWVjZXMgcGllY2VzPXtkYXRhfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsInVzZUltbWVyTG9jYWxTdG9yYWdlU3RhdGUiLCJBcnRQaWVjZXMiLCJTcG90bGlnaHQiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkhvbWVQYWdlIiwiYXJ0UGllY2VzSW5mbyIsInVwZGF0ZUFydFBpZWNlc0luZm8iLCJkZWZhdWx0VmFsdWUiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3BvdGxpZ2h0UmFuZG9tIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGl2IiwiaDEiLCJwaWVjZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});