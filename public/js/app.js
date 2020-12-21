/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\resources\\js\\bootstrap.js: Unexpected token (9:8)\n\n\u001b[0m \u001b[90m  7 | \u001b[39m\u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39mwindow\u001b[33m.\u001b[39m \u001b[33m=\u001b[39m require(\u001b[32m''\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39mwindow\u001b[33m.\u001b[39m\u001b[33m.\u001b[39mdefaults\u001b[33m.\u001b[39mheaders\u001b[33m.\u001b[39mcommon[\u001b[32m'X-Requested-With'\u001b[39m] \u001b[33m=\u001b[39m \u001b[32m'XMLHttpRequest'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[0m\n    at Parser._raise (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Parser.raiseWithData (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Parser.raise (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Parser.unexpected (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:9101:16)\n    at Parser.parseIdentifierName (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:11344:18)\n    at Parser.parseIdentifier (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:11317:23)\n    at Parser.parseMaybePrivateName (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:10645:19)\n    at Parser.parseMember (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:10208:63)\n    at Parser.parseSubscript (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:10196:19)\n    at Parser.parseSubscripts (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:10167:19)\n    at Parser.parseExprSubscripts (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:10156:17)\n    at Parser.parseUpdate (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Parser.parseMaybeUnary (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Parser.parseExprOps (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Parser.parseMaybeConditional (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Parser.parseMaybeAssign (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at Parser.parseExpressionBase (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:9871:23)\n    at C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:9865:39\n    at Parser.allowInAnd (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:11541:16)\n    at Parser.parseExpression (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:9865:17)\n    at Parser.parseStatementContent (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:11807:23)\n    at Parser.parseStatement (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Parser.parseBlockBody (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Parser.parseTopLevel (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:11607:10)\n    at Parser.parse (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:13415:10)\n    at parse (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\parser\\lib\\index.js:13468:38)\n    at parser (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (C:\\MAMP\\htdocs\\esercitazioni-backend\\3_dicembre\\7_laravel-primi-passi\\node_modules\\gensync\\index.js:261:32)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\esercitazioni-backend\3_dicembre\7_laravel-primi-passi\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\esercitazioni-backend\3_dicembre\7_laravel-primi-passi\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });