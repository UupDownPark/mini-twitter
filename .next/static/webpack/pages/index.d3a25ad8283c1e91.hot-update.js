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

/***/ "./pages/create-log.tsx":
/*!******************************!*\
  !*** ./pages/create-log.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Createlog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Createlog() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var goLogin = function() {\n        router.push({\n            pathname: \"/log-in\"\n        }, \"/log-in\");\n    };\n    var goCreate = function() {\n        router.push({\n            pathname: \"/create-account\"\n        }, \"/create-account\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-zinc-200 h-[50%] w-[90%] justify-center items-center rounded-2xl shadow-2xl m-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"h-12 w-[120px] bg-zinc-500 rounded-xl m-3\",\n                onClick: goLogin,\n                children: \"\\uB85C\\uADF8\\uC778\"\n            }, void 0, false, {\n                fileName: \"/Users/sanghapark/Desktop/work/nextjs-prisma-typescript-tailwind-blueprint (1)/pages/create-log.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"h-12 w-[120px] bg-zinc-500 rounded-xl m-3\",\n                onClick: goCreate,\n                children: \"\\uACC4\\uC815\\uC0DD\\uC131\"\n            }, void 0, false, {\n                fileName: \"/Users/sanghapark/Desktop/work/nextjs-prisma-typescript-tailwind-blueprint (1)/pages/create-log.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sanghapark/Desktop/work/nextjs-prisma-typescript-tailwind-blueprint (1)/pages/create-log.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\n_s(Createlog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Createlog;\nvar _c;\n$RefreshReg$(_c, \"Createlog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtbG9nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXdDOztBQUV6QixTQUFTQyxTQUFTLEdBQUc7O0lBQ2xDLElBQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBRTtJQUMxQixJQUFNRyxPQUFPLEdBQUcsV0FBTTtRQUNwQkQsTUFBTSxDQUFDRSxJQUFJLENBQUM7WUFBRUMsUUFBUSxFQUFFLFNBQVM7U0FBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2pEO0lBQ0QsSUFBTUMsUUFBUSxHQUFHLFdBQU07UUFDckJKLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDO1lBQUVDLFFBQVEsRUFBRSxpQkFBaUI7U0FBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDakU7SUFDRCxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsb0ZBQXFGOzswQkFDbEcsOERBQUNDLFFBQU07Z0JBQ0xELFNBQVMsRUFBQywyQ0FBMkM7Z0JBQ3JERSxPQUFPLEVBQUVQLE9BQU87MEJBQ2pCLG9CQUVEOzs7OztvQkFBUzswQkFDVCw4REFBQ00sUUFBTTtnQkFDTEQsU0FBUyxFQUFDLDJDQUEyQztnQkFDckRFLE9BQU8sRUFBRUosUUFBUTswQkFDbEIsMEJBRUQ7Ozs7O29CQUFTOzs7Ozs7WUFDTCxDQUNOO0NBQ0g7R0F4QnVCTCxTQUFTOztRQUNoQkQsa0RBQVM7OztBQURGQyxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS1sb2cudHN4P2E3MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZWxvZygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGdvTG9naW4gPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goeyBwYXRobmFtZTogXCIvbG9nLWluXCIgfSwgXCIvbG9nLWluXCIpO1xuICB9O1xuICBjb25zdCBnb0NyZWF0ZSA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiBcIi9jcmVhdGUtYWNjb3VudFwiIH0sIFwiL2NyZWF0ZS1hY2NvdW50XCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctemluYy0yMDAgaC1bNTAlXSB3LVs5MCVdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLTJ4bCAgc2hhZG93LTJ4bCBtLTRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiaC0xMiB3LVsxMjBweF0gYmctemluYy01MDAgcm91bmRlZC14bCBtLTNcIlxuICAgICAgICBvbkNsaWNrPXtnb0xvZ2lufVxuICAgICAgPlxuICAgICAgICDroZzqt7jsnbhcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctWzEyMHB4XSBiZy16aW5jLTUwMCByb3VuZGVkLXhsIG0tM1wiXG4gICAgICAgIG9uQ2xpY2s9e2dvQ3JlYXRlfVxuICAgICAgPlxuICAgICAgICDqs4TsoJXsg53shLFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNyZWF0ZWxvZyIsInJvdXRlciIsImdvTG9naW4iLCJwdXNoIiwicGF0aG5hbWUiLCJnb0NyZWF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create-log.tsx\n");

/***/ })

});