"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/art-pieces/[slug]",{

/***/ "./components/ArtPieceDetails.js":
/*!***************************************!*\
  !*** ./components/ArtPieceDetails.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPieceDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ArtPieceDetails(param) {\n    let { PieceData } = param;\n    const { imageSource, name, year, artist, genre, colors } = PieceData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: \"BACK\"\n            }, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPieceDetails.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imageSource,\n                alt: name,\n                width: \"400px\"\n            }, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPieceDetails.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    name,\n                    \" - \",\n                    year\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPieceDetails.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: artist\n            }, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPieceDetails.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Genre: \",\n                    genre\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPieceDetails.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Colors:\",\n                        colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    backgroundColor: color,\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    display: \"inline-block\",\n                                    margin: \"0 5px\",\n                                    borderRadius: \"50%\",\n                                    alignItems: \"center\"\n                                },\n                                children: \" \"\n                            }, color, false, {\n                                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPieceDetails.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPieceDetails.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPieceDetails.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPieceDetails.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = ArtPieceDetails;\nvar _c;\n$RefreshReg$(_c, \"ArtPieceDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlRGV0YWlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFFZCxTQUFTQyxnQkFBZ0IsS0FBYTtRQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiO0lBQ3RDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHTjtJQUUzRCxxQkFDRSw4REFBQ087OzBCQUNDLDhEQUFDVCxrREFBSUE7Z0JBQUNVLE1BQUs7MEJBQUk7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQUlDLEtBQUtUO2dCQUFhVSxLQUFLVDtnQkFBTVUsT0FBTTs7Ozs7OzBCQUN4Qyw4REFBQ0M7O29CQUNFWDtvQkFBSztvQkFBSUM7Ozs7Ozs7MEJBRVosOERBQUNVOzBCQUFHVDs7Ozs7OzBCQUNKLDhEQUFDUzs7b0JBQUU7b0JBQVFSOzs7Ozs7OzBCQUVYLDhEQUFDRTswQkFDQyw0RUFBQ007O3dCQUFFO3dCQUVBUCxPQUFPUSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNSO2dDQUVDUyxPQUFPO29DQUNMQyxpQkFBaUJGO29DQUNqQkgsT0FBTztvQ0FDUE0sUUFBUTtvQ0FDUkMsU0FBUztvQ0FDVEMsUUFBUTtvQ0FDUkMsY0FBYztvQ0FDZEMsWUFBWTtnQ0FDZDswQ0FFQzsrQkFYSVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQm5CO0tBcEN3QmhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0UGllY2VEZXRhaWxzLmpzPzhjMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRQaWVjZURldGFpbHMoeyBQaWVjZURhdGEgfSkge1xuICBjb25zdCB7IGltYWdlU291cmNlLCBuYW1lLCB5ZWFyLCBhcnRpc3QsIGdlbnJlLCBjb2xvcnMgfSA9IFBpZWNlRGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluayBocmVmPVwiL1wiPkJBQ0s8L0xpbms+XG4gICAgICA8aW1nIHNyYz17aW1hZ2VTb3VyY2V9IGFsdD17bmFtZX0gd2lkdGg9XCI0MDBweFwiIC8+XG4gICAgICA8cD5cbiAgICAgICAge25hbWV9IC0ge3llYXJ9XG4gICAgICA8L3A+XG4gICAgICA8cD57YXJ0aXN0fTwvcD5cbiAgICAgIDxwPkdlbnJlOiB7Z2VucmV9PC9wPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb2xvcnM6XG4gICAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17Y29sb3J9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDVweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkFydFBpZWNlRGV0YWlscyIsIlBpZWNlRGF0YSIsImltYWdlU291cmNlIiwibmFtZSIsInllYXIiLCJhcnRpc3QiLCJnZW5yZSIsImNvbG9ycyIsImRpdiIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInAiLCJtYXAiLCJjb2xvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiZGlzcGxheSIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ArtPieceDetails.js\n"));

/***/ })

});