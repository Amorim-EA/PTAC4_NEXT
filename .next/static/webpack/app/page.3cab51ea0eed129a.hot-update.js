"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_handlerAcess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/handlerAcess */ \"(app-pages-browser)/./src/app/functions/handlerAcess.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Login() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const { push, refresh } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handlerLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const userAuth = await (0,_functions_handlerAcess__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user);\n            if (userAuth.token === undefined) {\n                toast.error(\"Senha ou Email incorretos!\");\n            }\n            if (userAuth.token) {\n                toast.error(\"Login efetuado com sucesso!\");\n            }\n            await (0,_functions_handlerAcess__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user);\n        } catch (e) {\n            refresh();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\PTAC4_NEXT\\\\src\\\\app\\\\page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handlerLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"E-mail\",\n                        type: \"email\",\n                        onChange: (e)=>{\n                            setUser({\n                                ...user,\n                                email: e.target.value\n                            });\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\PTAC4_NEXT\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Senha\",\n                        type: \"password\",\n                        onChange: (e)=>{\n                            setUser({\n                                ...user,\n                                password: e.target.value\n                            });\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\PTAC4_NEXT\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Entrar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\PTAC4_NEXT\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\PTAC4_NEXT\\\\src\\\\app\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\PTAC4_NEXT\\\\src\\\\app\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\laboratorio\\\\Downloads\\\\PTAC4_NEXT\\\\src\\\\app\\\\page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"0uvQgAHo742mrs9WtyoKmc1vlUc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNpQztBQUN1QjtBQUNaO0FBQ0k7QUFDRDtBQUVoQyxTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO1FBQy9CTyxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR1IsMERBQVNBO0lBRW5DLE1BQU1TLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWIsbUVBQWdCQSxDQUFDSTtZQUN4QyxJQUFHUyxTQUFTQyxLQUFLLEtBQUtDLFdBQVU7Z0JBQzlCQyxNQUFNQyxLQUFLLENBQUM7WUFDZDtZQUNBLElBQUdKLFNBQVNDLEtBQUssRUFBQztnQkFDaEJFLE1BQU1DLEtBQUssQ0FBQztZQUNkO1lBQ0EsTUFBTWpCLG1FQUFnQkEsQ0FBQ0k7UUFDekIsRUFBRSxVQUFNO1lBQ05LO1FBQ0Y7SUFDRjtJQUNBLHFCQUNFLDhEQUFDUzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVWDs7a0NBQ2QsOERBQUNZO3dCQUNDQyxhQUFZO3dCQUNaQyxNQUFLO3dCQUNMQyxVQUFVLENBQUNkOzRCQUFRTixRQUFRO2dDQUFFLEdBQUdELElBQUk7Z0NBQUVFLE9BQU9LLEVBQUVlLE1BQU0sQ0FBQ0MsS0FBSzs0QkFBQzt3QkFBRzs7Ozs7O2tDQUVqRSw4REFBQ0w7d0JBQ0NDLGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xDLFVBQVUsQ0FBQ2Q7NEJBQVFOLFFBQVE7Z0NBQUUsR0FBR0QsSUFBSTtnQ0FBRUcsVUFBVUksRUFBRWUsTUFBTSxDQUFDQyxLQUFLOzRCQUFDO3dCQUFHOzs7Ozs7a0NBRXBFLDhEQUFDQztrQ0FBTzs7Ozs7Ozs7Ozs7OzBCQUVWLDhEQUFDMUIsMERBQWNBOzs7Ozs7Ozs7OztBQUdyQjtHQXpDd0JDOztRQUtJRixzREFBU0E7OztLQUxiRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGhhbmRsZXJBY2Vzc1VzZXIgZnJvbSBcIi4vZnVuY3Rpb25zL2hhbmRsZXJBY2Vzc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgcHVzaCwgcmVmcmVzaCB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJMb2dpbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyQXV0aCA9IGF3YWl0IGhhbmRsZXJBY2Vzc1VzZXIodXNlcik7XHJcbiAgICAgIGlmKHVzZXJBdXRoLnRva2VuID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiU2VuaGEgb3UgRW1haWwgaW5jb3JyZXRvcyFcIilcclxuICAgICAgfVxyXG4gICAgICBpZih1c2VyQXV0aC50b2tlbil7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJMb2dpbiBlZmV0dWFkbyBjb20gc3VjZXNzbyFcIilcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBoYW5kbGVyQWNlc3NVc2VyKHVzZXIpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJlZnJlc2goKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVyTG9naW59PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0UtbWFpbCdcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0VXNlcih7IC4uLnVzZXIsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KSB9fT5cclxuICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbmhhJ1xyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0VXNlcih7IC4uLnVzZXIsIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KSB9fT5cclxuICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgIDxidXR0b24+RW50cmFyPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaGFuZGxlckFjZXNzVXNlciIsInVzZVJvdXRlciIsIlRvYXN0Q29udGFpbmVyIiwiTG9naW4iLCJ1c2VyIiwic2V0VXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwdXNoIiwicmVmcmVzaCIsImhhbmRsZXJMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJBdXRoIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJ0b2FzdCIsImVycm9yIiwiZGl2IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});