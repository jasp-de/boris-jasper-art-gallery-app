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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_ArtPieces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ArtPieces */ \"./components/ArtPieces.js\");\n/* harmony import */ var _components_Spotlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Spotlight */ \"./components/Spotlight.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://example-apis.vercel.app/api/art\", fetcher);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error fetching data!\"\n        }, void 0, false, {\n            fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n            lineNumber: 16,\n            columnNumber: 12\n        }, this);\n    }\n    let randomValueSpotlight;\n    console.log(\"data:\", data);\n    function spotlightRandom() {\n        randomValueSpotlight = Math.floor(Math.random() * data.length);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtPieces__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pieces: data\n            }, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/root/spiced-bootcamp/boris-jasper-art-gallery-app/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNYO0FBQ3NCO0FBQ0E7QUFDL0MsTUFBTUksVUFBVSxDQUFDQyxNQUFRQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUMzQyxTQUFTQyxJQUFJLEtBQXdCO1FBQXhCLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQXhCOztJQUMxQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdiLCtDQUFNQSxDQUMzQiwyQ0FDREc7SUFFRixJQUFJLENBQUNTLE1BQU07UUFDVCxxQkFBTyw4REFBQ0U7c0JBQUk7Ozs7OztJQUNkO0lBRUEsSUFBSUQsT0FBTztRQUNULHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2Q7SUFDQSxJQUFJQztJQUNKQyxRQUFRQyxHQUFHLENBQUMsU0FBU0w7SUFDckIsU0FBU007UUFDUEgsdUJBQXVCSSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS1QsS0FBS1UsTUFBTTtJQUMvRDtJQUNBLHFCQUNFOzswQkFLRSw4REFBQ3JCLDZEQUFTQTtnQkFBQ3NCLFFBQVFYOzs7Ozs7MEJBQ25CLDhEQUFDYiwrQ0FBV0E7Ozs7OzBCQUNaLDhEQUFDVztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QjtHQTVCd0JGOztRQUNFVCwyQ0FBTUE7OztLQURSUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IEFydFBpZWNlcyBmcm9tIFwiQC9jb21wb25lbnRzL0FydFBpZWNlc1wiO1xuaW1wb3J0IFNwb3RsaWdodCBmcm9tIFwiQC9jb21wb25lbnRzL1Nwb3RsaWdodFwiO1xuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIGBodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnRgLFxuICAgIGZldGNoZXJcbiAgKTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yIGZldGNoaW5nIGRhdGEhPC9kaXY+O1xuICB9XG4gIGxldCByYW5kb21WYWx1ZVNwb3RsaWdodDtcbiAgY29uc29sZS5sb2coXCJkYXRhOlwiLCBkYXRhKTtcbiAgZnVuY3Rpb24gc3BvdGxpZ2h0UmFuZG9tKCkge1xuICAgIHJhbmRvbVZhbHVlU3BvdGxpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5sZW5ndGgpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8U3BvdGxpZ2h0XG4gICAgICAgIGFydGlzdD17ZGF0YVtyYW5kb21WYWx1ZVNwb3RsaWdodF19XG4gICAgICAgIGltYWdlPXtkYXRhW3JhbmRvbVZhbHVlU3BvdGxpZ2h0XX1cbiAgICAgIC8+ICovfVxuICAgICAgPEFydFBpZWNlcyBwaWVjZXM9e2RhdGF9IC8+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsInVzZVNXUiIsIkFydFBpZWNlcyIsIlNwb3RsaWdodCIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGF0YSIsImVycm9yIiwiZGl2IiwicmFuZG9tVmFsdWVTcG90bGlnaHQiLCJjb25zb2xlIiwibG9nIiwic3BvdGxpZ2h0UmFuZG9tIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicGllY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});