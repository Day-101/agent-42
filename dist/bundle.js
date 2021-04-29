/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  console.log(\"Home\");\n};\n\n\n\n//# sourceURL=webpack://agent-0042/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nvar apikey = \"?key=\" + \"8030fb91a84743b19b0294b2a31dcc88\";\n\nvar PageDetail = function PageDetail(argument) {\n  console.log(\"PageDetail\");\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    hideWelcome();\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument + apikey;\n      console.log(finalURL);\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var background_image = response.background_image,\n            name = response.name,\n            rating = response.rating,\n            rating_top = response.rating_top,\n            ratings = response.ratings,\n            description = response.description,\n            released = response.released,\n            developers = response.developers,\n            platforms = response.platforms,\n            publishers = response.publishers,\n            genres = response.genres,\n            tags = response.tags,\n            stores = response.stores,\n            website = response.website;\n        var rate = layoutRate(rating, rating_top, ratings);\n        var devs = eachNameList(developers);\n        var plats = platList(platforms);\n        var publis = eachNameList(publishers);\n        var genre = eachNameList(genres);\n        var tag = eachTagList(tags);\n        var store = storeList(stores);\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"div.background\").innerHTML += '<img src=\"' + background_image + '\">';\n        articleDOM.querySelector(\"div.background\").innerHTML += '<div class=\"website\"><a href=\"' + website + '\">Check Website </a><div id=\"triangle-code\"></div></div>';\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"div.rating\").innerHTML = rate;\n        articleDOM.querySelector(\"div.description\").innerHTML = '<h2>About</h2>' + description;\n        articleDOM.querySelector(\"div.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"div.developers ul\").innerHTML = devs;\n        articleDOM.querySelector(\"div.platforms ul\").innerHTML = plats;\n        articleDOM.querySelector(\"div.publishers ul\").innerHTML = publis;\n        articleDOM.querySelector(\"div.genres ul\").innerHTML = genre;\n        articleDOM.querySelector(\"div.tags span\").innerHTML = tag;\n        articleDOM.querySelector(\"div.stores ul\").innerHTML = store;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var layoutRate = function layoutRate(rating, rating_top, ratings) {\n    return rating + \"/\" + rating_top + \" - \" + ratings.length + \" votes\";\n  };\n\n  var eachNameList = function eachNameList(list) {\n    var str = \"\";\n\n    if (list) {\n      list.forEach(function (item) {\n        str += '<li>' + item.name + '</li>';\n      });\n    }\n\n    return str;\n  };\n\n  var platList = function platList(list) {\n    var str = \"\";\n\n    if (list) {\n      list.forEach(function (item) {\n        str += '<li>' + item.platform.name + '</li>';\n      });\n    }\n\n    return str;\n  };\n\n  var eachTagList = function eachTagList(list) {\n    var str = \"\";\n\n    if (list) {\n      list.forEach(function (item) {\n        str += item.name + ', ';\n      });\n    }\n\n    return '<p>' + str + '</p>';\n  };\n\n  var storeList = function storeList(list) {\n    var str = \"\";\n\n    if (list) {\n      list.forEach(function (item) {\n        str += '<li>' + item.store.name + '<img src=\"src/images/logos/' + item.store.slug + '.svg\">' + '</li>';\n      });\n    }\n\n    return str;\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n        <div class=\\\"article-header\\\">\\n          <div class=\\\"background\\\">\\n            \\n          </div>\\n        </div>\\n        <div class=\\\"title-section\\\">\\n          <h1 class=\\\"title\\\"></h1>\\n          <div class=\\\"rating\\\"></div>\\n        </div>\\n        <div class=\\\"description\\\"></div>\\n        <div class=\\\"spec\\\">\\n          <div class=\\\"release-date\\\"><h2>Release date :</h2> <span></span></div>\\n          <div class=\\\"developers\\\"><h2>Developer :</h2> <ul></ul></div>\\n          <div class=\\\"platforms\\\"><h2>Platforms :</h2> <ul></ul></div>\\n          <div class=\\\"publishers\\\"><h2>Publisher :</h2> <ul></ul></div>\\n          <div class=\\\"genres\\\"><h2>Genre :</h2> <ul></ul></div>\\n          <div class=\\\"tags\\\"><h2>Tags :</h2> <span></span></div>\\n        </div>\\n        <div class=\\\"stores\\\">\\n          <h3>BUY</h3>\\n          <ul></ul>\\n        </div>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  var hideWelcome = function hideWelcome() {\n    var welcome = document.querySelector('#welcome');\n    welcome.style.display = \"none\";\n  };\n\n  var showWelcome = function showWelcome() {\n    var welcome = document.querySelector('#welcome');\n    welcome.style.display = \"block\";\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://agent-0042/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nvar apikey = \"?key=\" + \"8030fb91a84743b19b0294b2a31dcc88\";\n\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  argument = document.querySelector('input').value;\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url + apikey;\n\n      if (argument) {\n        finalURL = url + apikey + \"&search=\" + cleanedArgument;\n        hideWelcome();\n        console.log(finalURL);\n      } else {\n        finalURL = url + apikey + \"&dates=2021-04-30,2022-12-31\"; // revoir pour insérer une variable à la date du jour\n\n        console.log(finalURL);\n        showWelcome();\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        console.log(response);\n        response.results.forEach(function (article) {\n          // console.log(argument);\n          articles += \"\\n              <div class=\\\"cardGame\\\">\\n                <a href=\\\"#pagedetail/\".concat(article.id, \"\\\">\\n                  <div class=\\\"card-img\\\">\\n                    <img src=\\\"\").concat(article.background_image, \"\\\">\\n                  </div>\\n                </a>\\n                <a href=\\\"#pagedetail/\").concat(article.id, \"\\\"><h1>\").concat(article.name, \"</h1></a>\\n                <span></span>\\n                <div class=\\\"logos-stores\\\">\\n                  \").concat(storeSlug(article.stores), \"\\n                </div>\\n              </div>\\n              \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  var storeSlug = function storeSlug(stores) {\n    // ajouter une vérification de doublon\n    var str = \"\";\n\n    if (stores) {\n      stores.forEach(function (s) {\n        str += '<img class=\"stores-logos\" src=\"src/images/logos/' + s.store.slug + '.svg\">'; // console.log(s.store.slug);\n      });\n    }\n\n    return str;\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\"><span id=\\\"loading\\\">LOADING</span></div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  var clean = function clean() {\n    var form = document.querySelector('form');\n    form.reset();\n  };\n\n  var hideWelcome = function hideWelcome() {\n    var welcome = document.querySelector('#welcome');\n    welcome.style.display = \"none\";\n  };\n\n  var showWelcome = function showWelcome() {\n    var welcome = document.querySelector('#welcome');\n    welcome.style.display = \"block\";\n  };\n\n  render();\n  clean();\n  return false;\n};\n\n\n\n//# sourceURL=webpack://agent-0042/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n\n\n // import { PageDetail } from \"./PageDetail\";\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nvar searchButton = document.querySelector(\"a#search\");\nsearchButton.addEventListener('click', _PageList__WEBPACK_IMPORTED_MODULE_2__.PageList); // searchButton.onclick = PageList;\n\nvar brand = document.querySelector(\"a#brand\");\nbrand.addEventListener('click', _PageList__WEBPACK_IMPORTED_MODULE_2__.PageList); // brand.onclick = PageList;\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack://agent-0042/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  \"\": _PageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  pagelist: _PageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  pagedetail: _PageDetail__WEBPACK_IMPORTED_MODULE_2__.PageDetail\n};\n\n\n//# sourceURL=webpack://agent-0042/./src/js/routes.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://agent-0042/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://agent-0042/./node_modules/css-loader/dist/runtime/api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;