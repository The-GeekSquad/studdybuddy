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

eval("let [seconds, minutes, hours] = [0, 0, 0];\nlet displayTime = document.getElementById(\"displayTime\");\nlet timer = null;\n\nfunction stopwatch(){\n    seconds++;\n    if(seconds == 60){\n        seconds = 0;\n        minutes++;\n        if(minutes == 60){\n            minutes = 0;\n            hours++;\n        }\n    }\n    let h = hours < 10 ? \"0\" + hours : hours;\n    let m = minutes < 10 ? \"0\" + minutes : minutes;\n    let s = seconds < 10 ? \"0\" + seconds : seconds;\n    displayTime.innerHTML = h + \":\" + m + \":\" + s;\n}\n\nfunction watchStart(){\n    if (timer !== null) {\n        clearInterval(timer);\n    }\n    timer = setInterval(stopwatch, 1000);\n    document.querySelector('.study').play(); // Play music\n}\n\nfunction watchStop(){\n    clearInterval(timer);\n    timer = null;\n    document.querySelector('.study').pause(); // Pause music\n}\n\nfunction resetWatch(){\n    clearInterval(timer);\n    [seconds, minutes, hours] = [0, 0, 0];\n    displayTime.innerHTML = \"00:00:00\";\n    document.querySelector('.study').pause();\n    document.querySelector('.study').currentTime = 0; // Reset music\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcHdhdGNoLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWRkeWJ1ZGR5Ly4vc3JjL3N0b3B3YXRjaC5qcz9mNTVkIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBbc2Vjb25kcywgbWludXRlcywgaG91cnNdID0gWzAsIDAsIDBdO1xubGV0IGRpc3BsYXlUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5VGltZVwiKTtcbmxldCB0aW1lciA9IG51bGw7XG5cbmZ1bmN0aW9uIHN0b3B3YXRjaCgpe1xuICAgIHNlY29uZHMrKztcbiAgICBpZihzZWNvbmRzID09IDYwKXtcbiAgICAgICAgc2Vjb25kcyA9IDA7XG4gICAgICAgIG1pbnV0ZXMrKztcbiAgICAgICAgaWYobWludXRlcyA9PSA2MCl7XG4gICAgICAgICAgICBtaW51dGVzID0gMDtcbiAgICAgICAgICAgIGhvdXJzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGggPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xuICAgIGxldCBtID0gbWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICBsZXQgcyA9IHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHM7XG4gICAgZGlzcGxheVRpbWUuaW5uZXJIVE1MID0gaCArIFwiOlwiICsgbSArIFwiOlwiICsgcztcbn1cblxuZnVuY3Rpb24gd2F0Y2hTdGFydCgpe1xuICAgIGlmICh0aW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB9XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbChzdG9wd2F0Y2gsIDEwMDApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHVkeScpLnBsYXkoKTsgLy8gUGxheSBtdXNpY1xufVxuXG5mdW5jdGlvbiB3YXRjaFN0b3AoKXtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB0aW1lciA9IG51bGw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0dWR5JykucGF1c2UoKTsgLy8gUGF1c2UgbXVzaWNcbn1cblxuZnVuY3Rpb24gcmVzZXRXYXRjaCgpe1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIFtzZWNvbmRzLCBtaW51dGVzLCBob3Vyc10gPSBbMCwgMCwgMF07XG4gICAgZGlzcGxheVRpbWUuaW5uZXJIVE1MID0gXCIwMDowMDowMFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHVkeScpLnBhdXNlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0dWR5JykuY3VycmVudFRpbWUgPSAwOyAvLyBSZXNldCBtdXNpY1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/stopwatch.js\n");

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