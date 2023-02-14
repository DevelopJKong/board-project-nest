/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/views/client/ts/login.ts":
/*!*********************************************!*\
  !*** ./src/public/views/client/ts/login.ts ***!
  \*********************************************/
/***/ (() => {

eval("const loginBtn = document.getElementById('login');\r\nloginBtn.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    const username = document.getElementById('username')\r\n        .value;\r\n    const password = document.getElementById('password')\r\n        .value;\r\n    const data = { username, password };\r\n    fetch('/login', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(data),\r\n    })\r\n        .then((res) => res.json())\r\n        .then((data) => {\r\n        if (data.success) {\r\n            window.location.href = '/dashboard';\r\n        }\r\n        else {\r\n            alert(data.message);\r\n        }\r\n    })\r\n        .catch((err) => console.log(err));\r\n});\r\n\n\n//# sourceURL=webpack://board-project-nest/./src/public/views/client/ts/login.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/public/views/client/ts/login.ts"]();
/******/ 	
/******/ })()
;