"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/log-in",{

/***/ "./pages/log-in.tsx":
/*!**************************!*\
  !*** ./pages/log-in.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    var ref, ref1, ref2;\n    _s();\n    var ref3 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)(), register = ref3.register, watch = ref3.watch, handleSubmit = ref3.handleSubmit, errors1 = ref3.formState.errors;\n    var onValid = function(data) {\n        console.log(\"im valid\");\n    };\n    var onInvalid = function(errors) {\n        console.log(errors);\n    };\n    console.log(watch());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-gray-400 justify-center items-center p-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"bg-white rounded-2xl p-5 flex flex-col\",\n            onSubmit: handleSubmit(onValid, onInvalid),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                    className: \"border-2 border-indigo-300 rounded-xl\"\n                }, register(\"username\", {\n                    required: \"\\uC720\\uC800\\uC774\\uB984\\uC774 \\uD544\\uC694\\uD569\\uB2C8\\uB2E4!!\",\n                    minLength: {\n                        message: \"\\uC720\\uC800\\uC774\\uB984\\uC740 5\\uAE00\\uC790 \\uC774\\uC0C1\\uC774\\uC5EC\\uC57C\\uD569\\uB2C8\\uB2E4.\",\n                        value: 5\n                    }\n                }), {\n                    type: \"text\",\n                    placeholder: \"Username\"\n                }), void 0, false, {\n                    fileName: \"/Users/sanghapark/Desktop/work/nextjs-prisma-typescript-tailwind-blueprint (1)/pages/log-in.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                (ref = errors1.username) === null || ref === void 0 ? void 0 : ref.message,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                    className: \"border-2 border-indigo-300 rounded-xl my-3\"\n                }, register(\"email\", {\n                    required: \"\\uB124\\uC774\\uBC84 \\uD639\\uC740 \\uC9C0\\uBA54\\uC77C \\uC774\\uBA54\\uC77C\\uC774 \\uD544\\uC694\\uD569\\uB2C8\\uB2E4!!\",\n                    validate: {\n                        notGoodemail: function(value) {\n                            return value.includes(\"@gmail.com\" || 0) || \"\\uC720\\uD6A8\\uD55C \\uC774\\uBA54\\uC77C\\uC774 \\uC544\\uB2D9\\uB2C8\\uB2E4!!\";\n                        }\n                    }\n                }), {\n                    type: \"email\",\n                    placeholder: \"Email\"\n                }), void 0, false, {\n                    fileName: \"/Users/sanghapark/Desktop/work/nextjs-prisma-typescript-tailwind-blueprint (1)/pages/log-in.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                (ref1 = errors1.email) === null || ref1 === void 0 ? void 0 : ref1.message,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                    className: \"border-2 border-indigo-300 rounded-xl my-3 \"\n                }, register(\"password\", {\n                    required: \"\\uBE44\\uBC00\\uBC88\\uD638\\uAC00 \\uD544\\uC694\\uD569\\uB2C8\\uB2E4!!\"\n                }), {\n                    type: \"password\",\n                    placeholder: \"Password\"\n                }), void 0, false, {\n                    fileName: \"/Users/sanghapark/Desktop/work/nextjs-prisma-typescript-tailwind-blueprint (1)/pages/log-in.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                (ref2 = errors1.password) === null || ref2 === void 0 ? void 0 : ref2.message,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"create account\"\n                }, void 0, false, {\n                    fileName: \"/Users/sanghapark/Desktop/work/nextjs-prisma-typescript-tailwind-blueprint (1)/pages/log-in.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sanghapark/Desktop/work/nextjs-prisma-typescript-tailwind-blueprint (1)/pages/log-in.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sanghapark/Desktop/work/nextjs-prisma-typescript-tailwind-blueprint (1)/pages/log-in.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(Login, \"EhZwRdQivXlLLshoz+KntJftoLo=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0E3RHVCbkIsS0FBSzs7UUFNdkJELG9EQUFPOzs7QUFOV0MsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2ctaW4udHN4PzMwZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRFcnJvcnMsIHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmludGVyZmFjZSBMb2dpbkZvcm0ge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICB3YXRjaCxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybTxMb2dpbkZvcm0+KCk7XG4gIGNvbnN0IG9uVmFsaWQgPSAoZGF0YTogTG9naW5Gb3JtKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJpbSB2YWxpZFwiKTtcbiAgfTtcbiAgY29uc3Qgb25JbnZhbGlkID0gKGVycm9yczogRmllbGRFcnJvcnMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICB9O1xuICBjb25zb2xlLmxvZyh3YXRjaCgpKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBiZy1ncmF5LTQwMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0xMFwiPlxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgcC01IGZsZXggZmxleC1jb2xcIlxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQsIG9uSW52YWxpZCl9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1pbmRpZ28tMzAwIHJvdW5kZWQteGxcIlxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcInVzZXJuYW1lXCIsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIuycoOyggOydtOumhOydtCDtlYTsmpTtlanri4jri6QhIVwiLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwi7Jyg7KCA7J2066aE7J2AIDXquIDsnpAg7J207IOB7J207Jes7JW87ZWp64uI64ukLlwiLFxuICAgICAgICAgICAgICB2YWx1ZTogNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAge2Vycm9ycy51c2VybmFtZT8ubWVzc2FnZX1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWluZGlnby0zMDAgcm91bmRlZC14bCBteS0zXCJcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCLrhKTsnbTrsoQg7Zi57J2AIOyngOuplOydvCDsnbTrqZTsnbzsnbQg7ZWE7JqU7ZWp64uI64ukISFcIixcbiAgICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgIG5vdEdvb2RlbWFpbDogKHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwiQGdtYWlsLmNvbVwiIHx8IFwiQG5hdmVyLmNvbVwiKSB8fFxuICAgICAgICAgICAgICAgIFwi7Jyg7Zqo7ZWcIOydtOuplOydvOydtCDslYTri5nri4jri6QhIVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAge2Vycm9ycy5lbWFpbD8ubWVzc2FnZX1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWluZGlnby0zMDAgcm91bmRlZC14bCBteS0zXG4gICAgICAgICAgXCJcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCLruYTrsIDrsojtmLjqsIAg7ZWE7JqU7ZWp64uI64ukISFcIixcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAge2Vycm9ycy5wYXNzd29yZD8ubWVzc2FnZX1cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImNyZWF0ZSBhY2NvdW50XCI+PC9pbnB1dD5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiTG9naW4iLCJlcnJvcnMiLCJyZWdpc3RlciIsIndhdGNoIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwib25WYWxpZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib25JbnZhbGlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInVzZXJuYW1lIiwidmFsaWRhdGUiLCJub3RHb29kZW1haWwiLCJpbmNsdWRlcyIsImVtYWlsIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/log-in.tsx\n");

/***/ })

});