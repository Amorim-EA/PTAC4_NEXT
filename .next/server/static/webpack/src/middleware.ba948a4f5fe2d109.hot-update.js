"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _app_functions_validateToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/functions/validateToken */ \"(middleware)/./src/app/functions/validateToken.js\");\n\"server\";\n\n\nconst middleware = (request)=>{\n    const token = request.cookies.get(\"token\")?.value;\n    const urlLogin = new URL(\"/\", request.url);\n    const urlDashboard = new URL(\"/pages/dashboard\", request.url);\n    const isTokenValidated = (0,_app_functions_validateToken__WEBPACK_IMPORTED_MODULE_1__.validateToken)(token);\n    if (!isTokenValidated || !token) {\n        if (request.nextUrl.pathname === \"/pages/dashboard\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(urlLogin);\n        }\n    }\n    if (isTokenValidated || token) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(urlDashboard);\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n};\nconst config = {\n    matcher: [\n        \"/\",\n        \"/pages/dashboard\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQzJDO0FBQ21CO0FBRXZELE1BQU1FLGFBQWEsQ0FBQ0M7SUFFdkIsTUFBTUMsUUFBUUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVUM7SUFDNUMsTUFBTUMsV0FBVyxJQUFJQyxJQUFJLEtBQUtOLFFBQVFPLEdBQUc7SUFDekMsTUFBTUMsZUFBZSxJQUFJRixJQUFJLG9CQUFvQk4sUUFBUU8sR0FBRztJQUM1RCxNQUFNRSxtQkFBbUJYLDJFQUFhQSxDQUFDRztJQUV2QyxJQUFJLENBQUNRLG9CQUFvQixDQUFDUixPQUFPO1FBQzdCLElBQUlELFFBQVFVLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLG9CQUFvQjtZQUNqRCxPQUFPZCxrRkFBWUEsQ0FBQ2UsUUFBUSxDQUFDUDtRQUNqQztJQUNKO0lBRUEsSUFBSUksb0JBQW9CUixPQUFPO1FBQ3ZCLE9BQU9KLGtGQUFZQSxDQUFDZSxRQUFRLENBQUNKO0lBQ3JDO0lBQ0QsT0FBT1gsa0ZBQVlBLENBQUNnQixJQUFJO0FBQzNCLEVBQUU7QUFDSyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO1FBQUM7UUFBSztLQUFtQjtBQUN0QyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLmpzP2E0OWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3NlcnZlcidcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlVG9rZW4gfSBmcm9tIFwiLi9hcHAvZnVuY3Rpb25zL3ZhbGlkYXRlVG9rZW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtaWRkbGV3YXJlID0gKHJlcXVlc3QpID0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Rva2VuJyk/LnZhbHVlO1xyXG4gICAgY29uc3QgdXJsTG9naW4gPSBuZXcgVVJMKCcvJywgcmVxdWVzdC51cmwpO1xyXG4gICAgY29uc3QgdXJsRGFzaGJvYXJkID0gbmV3IFVSTCgnL3BhZ2VzL2Rhc2hib2FyZCcsIHJlcXVlc3QudXJsKVxyXG4gICAgY29uc3QgaXNUb2tlblZhbGlkYXRlZCA9IHZhbGlkYXRlVG9rZW4odG9rZW4pO1xyXG5cclxuICAgIGlmICghaXNUb2tlblZhbGlkYXRlZCB8fCAhdG9rZW4pIHtcclxuICAgICAgICBpZiAocmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSAnL3BhZ2VzL2Rhc2hib2FyZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdCh1cmxMb2dpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1Rva2VuVmFsaWRhdGVkIHx8IHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QodXJsRGFzaGJvYXJkKTtcclxuICAgIH1cclxuICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtYXRjaGVyOiBbJy8nLCAnL3BhZ2VzL2Rhc2hib2FyZCddXHJcbn07Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInZhbGlkYXRlVG9rZW4iLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwidXJsTG9naW4iLCJVUkwiLCJ1cmwiLCJ1cmxEYXNoYm9hcmQiLCJpc1Rva2VuVmFsaWRhdGVkIiwibmV4dFVybCIsInBhdGhuYW1lIiwicmVkaXJlY3QiLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});