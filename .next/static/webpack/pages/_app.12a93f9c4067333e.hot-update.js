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

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer/Footer */ \"./components/Footer/Footer.js\");\n/* harmony import */ var _NavBar_NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBar/NavigationBar */ \"./components/NavBar/NavigationBar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar layoutStyle = {\n    display: 'flex',\n    flexDirection: 'column',\n    height: '100%',\n    width: '100%'\n};\nvar contentStyle = {\n    flex: 1,\n    display: 'flex',\n    flexDirection: 'column'\n};\nfunction Layout(param) {\n    var children = param.children;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"layout\",\n        style: layoutStyle,\n        __source: {\n            fileName: \"/Users/hectoragudelo/Documents/Repositories/AntidoteRestaurant/components/Layout/Layout.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavBar_NavigationBar__WEBPACK_IMPORTED_MODULE_2__.NavigationBar, {\n                __source: {\n                    fileName: \"/Users/hectoragudelo/Documents/Repositories/AntidoteRestaurant/components/Layout/Layout.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"content\",\n                style: contentStyle,\n                __source: {\n                    fileName: \"/Users/hectoragudelo/Documents/Repositories/AntidoteRestaurant/components/Layout/Layout.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: children\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {\n                __source: {\n                    fileName: \"/Users/hectoragudelo/Documents/Repositories/AntidoteRestaurant/components/Layout/Layout.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNjO0FBRXZELEdBQUssQ0FBQ0UsV0FBVyxHQUFHLENBQUM7SUFDbkJDLE9BQU8sRUFBRSxDQUFNO0lBQ2ZDLGFBQWEsRUFBRSxDQUFRO0lBQ3ZCQyxNQUFNLEVBQUUsQ0FBTTtJQUNkQyxLQUFLLEVBQUUsQ0FBTTtBQUNmLENBQUM7QUFFRCxHQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ3BCQyxJQUFJLEVBQUUsQ0FBQztJQUNQTCxPQUFPLEVBQUUsQ0FBTTtJQUNmQyxhQUFhLEVBQUUsQ0FBUTtBQUN6QixDQUFDO0FBRWMsUUFBUSxDQUFDSyxNQUFNLENBQUMsS0FBWSxFQUFFLENBQUM7UUFBYkMsUUFBUSxHQUFWLEtBQVksQ0FBVkEsUUFBUTtJQUN2QyxNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFRO1FBQUNDLEtBQUssRUFBRVgsV0FBVzs7Ozs7Ozs7aUZBQ3ZDRCxnRUFBYTs7Ozs7Ozs7aUZBQ2JVLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFTO2dCQUFDQyxLQUFLLEVBQUVOLFlBQVk7Ozs7Ozs7MEJBQUdHLFFBQVE7O2lGQUN0RFYsa0RBQU07Ozs7Ozs7Ozs7QUFHYixDQUFDO0tBUnVCUyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcz8wYzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkJhciB9IGZyb20gJy4uL05hdkJhci9OYXZpZ2F0aW9uQmFyJztcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3aWR0aDogJzEwMCUnLFxufTtcblxuY29uc3QgY29udGVudFN0eWxlID0ge1xuICBmbGV4OiAxLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQnIHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICA8TmF2aWdhdGlvbkJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnIHN0eWxlPXtjb250ZW50U3R5bGV9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJOYXZpZ2F0aW9uQmFyIiwibGF5b3V0U3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImhlaWdodCIsIndpZHRoIiwiY29udGVudFN0eWxlIiwiZmxleCIsIkxheW91dCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout/Layout.js\n");

/***/ })

});