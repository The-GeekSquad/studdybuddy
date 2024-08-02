/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stopwatch.js":
/*!**************************!*\
  !*** ./src/stopwatch.js ***!
  \**************************/
/***/ (() => {

eval("let [seconds, minutes, hours] = [0, 0, 0];\nlet displayTime = document.getElementById(\"displayTime\");\nlet timer = null;\n\nvar files = [\n    '../assets/ticks/1.wav',\n    '../assets/ticks/2.wav',\n    '../assets/ticks/3.wav',\n    '../assets/ticks/4.wav',\n    '../assets/ticks/5.wav',\n    '../assets/ticks/6.wav',\n    '../assets/ticks/7.wav',\n    '../assets/ticks/8.wav',\n    '../assets/ticks/9.wav',\n    '../assets/ticks/10.wav'\n];\n\nfunction stopwatch(){\n    seconds++;\n    if(seconds == 60){\n        seconds = 0;\n        minutes++;\n        if(minutes == 60){\n            minutes = 0;\n            hours++;\n        }\n    }\n    let h = hours < 10 ? \"0\" + hours : hours;\n    let m = minutes < 10 ? \"0\" + minutes : minutes;\n    let s = seconds < 10 ? \"0\" + seconds : seconds;\n    displayTime.innerHTML = h + \":\" + m + \":\" + s;\n}\n\nfunction watchStart(){\n    if (timer !== null) {\n        clearInterval(timer);\n    }\n    timer = setInterval(stopwatch, 1000);\n}\n\nfunction watchStop(){\n    clearInterval(timer);\n    timer = null;\n}\n\nfunction resetWatch(){\n    clearInterval(timer);\n    [seconds, minutes, hours] = [0, 0, 0];\n    displayTime.innerHTML = \"00:00:00\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcHdhdGNoLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGR5YnVkZHkvLi9zcmMvc3RvcHdhdGNoLmpzP2Y1NWQiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IFtzZWNvbmRzLCBtaW51dGVzLCBob3Vyc10gPSBbMCwgMCwgMF07XG5sZXQgZGlzcGxheVRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlUaW1lXCIpO1xubGV0IHRpbWVyID0gbnVsbDtcblxudmFyIGZpbGVzID0gW1xuICAgICcuLi9hc3NldHMvdGlja3MvMS53YXYnLFxuICAgICcuLi9hc3NldHMvdGlja3MvMi53YXYnLFxuICAgICcuLi9hc3NldHMvdGlja3MvMy53YXYnLFxuICAgICcuLi9hc3NldHMvdGlja3MvNC53YXYnLFxuICAgICcuLi9hc3NldHMvdGlja3MvNS53YXYnLFxuICAgICcuLi9hc3NldHMvdGlja3MvNi53YXYnLFxuICAgICcuLi9hc3NldHMvdGlja3MvNy53YXYnLFxuICAgICcuLi9hc3NldHMvdGlja3MvOC53YXYnLFxuICAgICcuLi9hc3NldHMvdGlja3MvOS53YXYnLFxuICAgICcuLi9hc3NldHMvdGlja3MvMTAud2F2J1xuXTtcblxuZnVuY3Rpb24gc3RvcHdhdGNoKCl7XG4gICAgc2Vjb25kcysrO1xuICAgIGlmKHNlY29uZHMgPT0gNjApe1xuICAgICAgICBzZWNvbmRzID0gMDtcbiAgICAgICAgbWludXRlcysrO1xuICAgICAgICBpZihtaW51dGVzID09IDYwKXtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSAwO1xuICAgICAgICAgICAgaG91cnMrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaCA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XG4gICAgbGV0IG0gPSBtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgIGxldCBzID0gc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcztcbiAgICBkaXNwbGF5VGltZS5pbm5lckhUTUwgPSBoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzO1xufVxuXG5mdW5jdGlvbiB3YXRjaFN0YXJ0KCl7XG4gICAgaWYgKHRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH1cbiAgICB0aW1lciA9IHNldEludGVydmFsKHN0b3B3YXRjaCwgMTAwMCk7XG59XG5cbmZ1bmN0aW9uIHdhdGNoU3RvcCgpe1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIHRpbWVyID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVzZXRXYXRjaCgpe1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIFtzZWNvbmRzLCBtaW51dGVzLCBob3Vyc10gPSBbMCwgMCwgMF07XG4gICAgZGlzcGxheVRpbWUuaW5uZXJIVE1MID0gXCIwMDowMDowMFwiO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/stopwatch.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/stopwatch.js"]();
/******/ 	
/******/ })()
;