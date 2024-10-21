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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPiecePreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ArtPiecePreview(param) {\n    let { pieces } = param;\n    if (!pieces) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n            lineNumber: 7,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#f9f9f9\",\n            width: \"20px\",\n            height: \"20px\",\n            margin: \"0 5px\",\n            borderRadius: \"50%\",\n            alignItems: \"center\"\n        },\n        children: pieces.map((param)=>/*#__PURE__*/ {\n            let { slug, imageSource, name, artist } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        slug: slug,\n                        href: \"/art-pieces/\".concat(slug),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageSource,\n                            alt: name,\n                            width: \"400px\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: artist\n                    }, void 0, false, {\n                        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, slug, true, {\n                fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jasper/jdf/spiced/boris-jasper-art-gallery-app/components/ArtPiecePreview.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = ArtPiecePreview;\nvar _c;\n$RefreshReg$(_c, \"ArtPiecePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlUHJldmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0E7QUFDSTtBQUVsQixTQUFTRyxnQkFBZ0IsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWO0lBQ3RDLElBQUksQ0FBQ0EsUUFBUTtRQUNYLHFCQUFPLDhEQUFDQztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0M7UUFDQ0MsT0FBTztZQUNMQyxpQkFBaUI7WUFDakJDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxRQUFRO1lBQ1JDLGNBQWM7WUFDZEMsWUFBWTtRQUNkO2tCQUVDVCxPQUFPVSxHQUFHLENBQUM7Z0JBQUMsRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFO21CQUM5Qyw4REFBQ1o7O2tDQUNDLDhEQUFDTixrREFBSUE7d0JBQUNlLE1BQU1BO3dCQUFNSSxNQUFNLGVBQW9CLE9BQUxKO2tDQUNyQyw0RUFBQ0s7NEJBQUlDLEtBQUtMOzRCQUFhTSxLQUFLTDs0QkFBTVIsT0FBTTs7Ozs7Ozs7Ozs7a0NBRTFDLDhEQUFDSjtrQ0FBR1k7Ozs7OztrQ0FDSiw4REFBQ1o7a0NBQUdhOzs7Ozs7O2VBTElIOzs7OztRQU1MOzs7Ozs7QUFJYjtLQTNCd0JaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0UGllY2VQcmV2aWV3LmpzP2FhNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0UGllY2VQcmV2aWV3KHsgcGllY2VzIH0pIHtcbiAgaWYgKCFwaWVjZXMpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjlmOWY5XCIsXG4gICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgbWFyZ2luOiBcIjAgNXB4XCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAge3BpZWNlcy5tYXAoKHsgc2x1ZywgaW1hZ2VTb3VyY2UsIG5hbWUsIGFydGlzdCB9KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzbHVnfT5cbiAgICAgICAgICA8TGluayBzbHVnPXtzbHVnfSBocmVmPXtgL2FydC1waWVjZXMvJHtzbHVnfWB9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlU291cmNlfSBhbHQ9e25hbWV9IHdpZHRoPVwiNDAwcHhcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgPHA+e2FydGlzdH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJSb3V0ZXIiLCJBcnRQaWVjZVByZXZpZXciLCJwaWVjZXMiLCJwIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJtYXAiLCJzbHVnIiwiaW1hZ2VTb3VyY2UiLCJuYW1lIiwiYXJ0aXN0IiwiaHJlZiIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ArtPiecePreview.js\n"));

/***/ })

});