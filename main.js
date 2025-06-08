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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: \"Germania One\", system-ui;\n}\n\nbody {\n  background-color: #eeefe0;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  margin: 0;\n}\n\n#content {\n  flex: 1;\n}\n\nnav {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 60px;\n  width: 100%;\n}\n\nbutton {\n  padding: 10px 20px;\n  font-family: \"Germania One\", cursive;\n  font-size: 1rem;\n  background-color: #b9d4aa;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\nbutton:hover {\n  background-color: #73946b;\n  color: white;\n  transform: scale(1.05);\n  cursor: pointer;\n}\n\n.nameAndDesc {\n  display: flex;\n  justify-content: center;\n  max-width: 70vw;\n  margin: 0 auto;\n  text-align: center;\n  gap: 20px;\n}\n\n.imgBig {\n  width: 100%;\n  box-sizing: border-box;\n}\n\nh1 {\n  font-size: 130px;\n}\n\nh3 {\n  font-size: 30px;\n  padding-bottom: 20px;\n}\n\np {\n  padding-bottom: 30px;\n}\n\n.yourBowls {\n  padding: 5px;\n  margin-left: 3px;\n}\n\n.line {\n  width: 100%;\n  height: 2px;\n  background-color: black;\n}\n\n.ramenMenu {\n  display: grid;\n  gap: 70px;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  margin: 15px;\n  margin-top: 20px;\n  padding-bottom: 40px;\n}\n\n.ramenMenu p {\n  margin-top: 20px;\n  font-size: large;\n  text-align: center;\n}\n\n.ramenMenu img {\n  width: 100%;\n  height: 350px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.lowerPart {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.lowerPart img {\n  width: 50%;\n  height: 800px;\n  object-fit: cover;\n}\n\n.lowerPart p {\n  font-size: 20px;\n  margin: 20px;\n}\n\n.lowerPart img {\n  flex: 1;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n  max-width: 100%;\n  height: auto;\n  object-fit: cover;\n\n  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%),\n    linear-gradient(to right, transparent 0%, black 20%);\n  -webkit-mask-composite: destination-in;\n  mask-image: linear-gradient(to bottom, transparent 0%, black 20%),\n    linear-gradient(to right, transparent 0%, black 20%);\n  mask-composite: intersect;\n}\n\n@media (max-width: 768px) {\n  .lowerPart {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .lowerPart img {\n    width: 100%;\n    height: 500px;\n    object-fit: cover;\n  }\n\n  .ramenMenu {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .ramenMenu img {\n    width: 100%;\n    height: 400px;\n    object-fit: cover;\n    border-radius: 10px;\n  }\n}\n\nfooter {\n  background-color: #c0d3b1;\n  height: 130px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 30px;\n}\n\n#h2forcontact {\n  font-size: 40px;\n  margin: 30px 0 30px 0;\n}\n\n.contactUsContainer {\n  text-align: center;\n  margin: 30px 0 30px 0;\n  padding: 20px 0 20px 0;\n  width: 100%;\n  background-color: #c0d3b1;\n\n  gap: 20px;\n}\n\ninput {\n  width: 200px;\n  height: 25px;\n  padding: 15px;\n  border-radius: 10px;\n  border: none;\n}\n\ntextarea {\n  width: 200px;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n}\n\n.contact-submit-btn {\n  background-color: #73946b;\n  color: white;\n  cursor: pointer;\n  margin-top: 20px;\n  height: 30px;\n  padding: 8px;\n  font-size: 13px;\n  transition: all 0.4s ease;\n}\n\n.contact-submit-btn:hover {\n  transform: scale(1.03);\n}\n\n.contactForm {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n\n.menuPage {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: auto;\n  gap: 20px;\n  padding: 40px;\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.menuItemTitle {\n  padding: 0 0 30px 0;\n}\n\n.ramenGrid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n  height: 100%;\n}\n\n.ramenGrid > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.ramenGrid img {\n  width: 100%;\n  border-radius: 10px;\n  object-fit: cover;\n  aspect-ratio: 1/1;\n  margin-bottom: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.ramenGrid img:hover {\n  background-color: #73946b;\n  color: white;\n  transform: scale(1.05);\n  cursor: pointer;\n}\n\n@media (max-width: 865px) {\n  .ramenGrid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/delicious-food-table.jpg":
/*!*********************************************!*\
  !*** ./src/images/delicious-food-table.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/delicious-food-table.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/delicious-food-table.jpg?");

/***/ }),

/***/ "./src/images/noodles.jpg":
/*!********************************!*\
  !*** ./src/images/noodles.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/noodles.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/noodles.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl1.jpg":
/*!***********************************!*\
  !*** ./src/images/ramenBowl1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl1.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl10.jpg":
/*!************************************!*\
  !*** ./src/images/ramenBowl10.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl10.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl10.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl11.jpg":
/*!************************************!*\
  !*** ./src/images/ramenBowl11.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl11.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl11.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl12.jpg":
/*!************************************!*\
  !*** ./src/images/ramenBowl12.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl12.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl12.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl2.jpg":
/*!***********************************!*\
  !*** ./src/images/ramenBowl2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl2.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl3.jpg":
/*!***********************************!*\
  !*** ./src/images/ramenBowl3.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl3.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl4.jpg":
/*!***********************************!*\
  !*** ./src/images/ramenBowl4.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl4.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl5.jpg":
/*!***********************************!*\
  !*** ./src/images/ramenBowl5.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl5.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl6.jpg":
/*!***********************************!*\
  !*** ./src/images/ramenBowl6.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl6.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl7.jpg":
/*!***********************************!*\
  !*** ./src/images/ramenBowl7.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl7.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl8.jpg":
/*!***********************************!*\
  !*** ./src/images/ramenBowl8.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl8.jpg?");

/***/ }),

/***/ "./src/images/ramenBowl9.jpg":
/*!***********************************!*\
  !*** ./src/images/ramenBowl9.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ramenBowl9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenBowl9.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _loadHomePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHomePage.js */ \"./src/loadHomePage.js\");\n/* harmony import */ var _loadMenuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenuPage.js */ \"./src/loadMenuPage.js\");\n/* harmony import */ var _loadContactPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadContactPage.js */ \"./src/loadContactPage.js\");\n\n\n\n\n\ndocument.getElementById(\"btnHome\").addEventListener(\"click\", _loadHomePage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ndocument.getElementById(\"btnMenu\").addEventListener(\"click\", _loadMenuPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ndocument\n  .getElementById(\"btnContact\")\n  .addEventListener(\"click\", _loadContactPage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n(0,_loadHomePage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadContactPage.js":
/*!********************************!*\
  !*** ./src/loadContactPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"contactUsContainer\");\n\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = \"Contact Us\";\n  h2.id = \"h2forcontact\";\n\n  const form = document.createElement(\"form\");\n  form.classList.add(\"contactForm\");\n\n  const nameLabel = document.createElement(\"label\");\n  nameLabel.textContent = \"Name:\";\n  const name = document.createElement(\"input\");\n  name.type = \"text\";\n  name.required = true;\n  name.placeholder = \"Your Name\";\n\n  const emailLabel = document.createElement(\"label\");\n  emailLabel.textContent = \"E-mail:\";\n  const email = document.createElement(\"input\");\n  email.type = \"email\";\n  email.required = true;\n  email.placeholder = \"Your Email\";\n\n  const phoneLabel = document.createElement(\"label\");\n  phoneLabel.textContent = \"Phone:\";\n  const phone = document.createElement(\"input\");\n  phone.type = \"tel\";\n  phone.required = true;\n  phone.placeholder = \"Your Phone Number\";\n\n  const messageLabel = document.createElement(\"label\");\n  messageLabel.textContent = \"Message:\";\n  const message = document.createElement(\"textarea\");\n  message.required = true;\n  message.placeholder = \"Your Message\";\n\n  const submitBtn = document.createElement(\"input\");\n  submitBtn.type = \"submit\";\n  submitBtn.value = \"Send Message\";\n  submitBtn.classList.add(\"contact-submit-btn\");\n\n  container.appendChild(h2);\n\n  form.append(\n    nameLabel,\n    name,\n    emailLabel,\n    email,\n    phoneLabel,\n    phone,\n    messageLabel,\n    message,\n    submitBtn\n  );\n\n  container.appendChild(form);\n  content.appendChild(container);\n\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    alert(\"Form sent!\");\n  });\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadContactPage.js?");

/***/ }),

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _images_noodles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/noodles.jpg */ \"./src/images/noodles.jpg\");\n/* harmony import */ var _images_ramenBowl1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ramenBowl1.jpg */ \"./src/images/ramenBowl1.jpg\");\n/* harmony import */ var _images_ramenBowl2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ramenBowl2.jpg */ \"./src/images/ramenBowl2.jpg\");\n/* harmony import */ var _images_ramenBowl3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ramenBowl3.jpg */ \"./src/images/ramenBowl3.jpg\");\n/* harmony import */ var _images_delicious_food_table_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/delicious-food-table.jpg */ \"./src/images/delicious-food-table.jpg\");\n\n\n\n\n\n\nfunction loadHomePage() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n\n  const header = document.createElement(\"h1\");\n  header.textContent = \"RAMEN\";\n  header.classList.add(\"nameAndDesc\");\n  content.appendChild(header);\n\n  const header2 = document.createElement(\"h3\");\n  header2.textContent = \"OUR BEST RECIPES\";\n  header2.classList.add(\"nameAndDesc\");\n  content.appendChild(header2);\n\n  const restaurantDescription = document.createElement(\"p\");\n  restaurantDescription.textContent =\n    \"We craft authentic, soul-warming ramen that transports you straight to the bustling streets of Tokyo or the cozy izakayas of Kyoto. Every bowl is a labor of love, simmered for hours to perfection—from our rich, creamy tonkotsu broth to our savory miso-infused creations.\";\n  restaurantDescription.classList.add(\"nameAndDesc\");\n  content.appendChild(restaurantDescription);\n\n  const headerImage = document.createElement(\"img\");\n  headerImage.src = _images_noodles_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  headerImage.alt = \"Ramen\";\n  headerImage.classList.add(\"imgBig\");\n  content.appendChild(headerImage);\n\n  const yourBowls = document.createElement(\"h3\");\n  yourBowls.textContent = \"YOUR BOWLS +\";\n  yourBowls.classList.add(\"yourBowls\");\n  content.appendChild(yourBowls);\n\n  const line = document.createElement(\"div\");\n  line.classList.add(\"line\");\n  content.appendChild(line);\n\n  const ramenImgContainer = document.createElement(\"div\");\n  ramenImgContainer.classList.add(\"ramenMenu\");\n\n  const ramenType1 = document.createElement(\"div\");\n  const imgRamen1 = document.createElement(\"img\");\n  imgRamen1.src = _images_ramenBowl1_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  const ramenPrice1 = document.createElement(\"p\");\n  ramenPrice1.textContent = \"Pork Miso Ramen — $16.99\";\n\n  ramenType1.appendChild(imgRamen1);\n  ramenType1.appendChild(ramenPrice1);\n\n  const ramenType2 = document.createElement(\"div\");\n  const imgRamen2 = document.createElement(\"img\");\n  imgRamen2.src = _images_ramenBowl2_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  const ramenPrice2 = document.createElement(\"p\");\n  ramenPrice2.textContent = \"Pork Original Ramen — $15.99\";\n  ramenType2.appendChild(imgRamen2);\n  ramenType2.appendChild(ramenPrice2);\n\n  const ramenType3 = document.createElement(\"div\");\n  const imgRamen3 = document.createElement(\"img\");\n  imgRamen3.src = _images_ramenBowl3_jpg__WEBPACK_IMPORTED_MODULE_3__;\n  const ramenPrice3 = document.createElement(\"p\");\n  ramenPrice3.textContent = \"Pork Shoyu Ramen — $15.99\";\n  ramenType3.appendChild(imgRamen3);\n  ramenType3.appendChild(ramenPrice3);\n\n  ramenImgContainer.appendChild(ramenType1);\n  ramenImgContainer.appendChild(ramenType2);\n  ramenImgContainer.appendChild(ramenType3);\n\n  content.appendChild(ramenImgContainer);\n\n  const lowerPartContainer = document.createElement(\"div\");\n  lowerPartContainer.classList.add(\"lowerPart\");\n\n  const textDiv = document.createElement(\"div\");\n  textDiv.classList.add(\"text-side\");\n\n  const paragraph1 = document.createElement(\"p\");\n  paragraph1.textContent = \"Experience the warmth of Japan in every bowl.\";\n\n  const paragraph2 = document.createElement(\"p\");\n  paragraph2.textContent =\n    \"Our ramen is made with time-honored techniques and premium ingredients. Whether you're a fan of rich tonkotsu or light shoyu, our chefs pour heart and soul into every serving.\";\n\n  const paragraph3 = document.createElement(\"p\");\n  paragraph3.textContent =\n    \"Visit us to discover the perfect bowl that feels like home.\";\n\n  textDiv.appendChild(paragraph1);\n  textDiv.appendChild(paragraph2);\n  textDiv.appendChild(paragraph3);\n\n  lowerPartContainer.appendChild(textDiv);\n\n  const imgLower = document.createElement(\"img\");\n  imgLower.src = _images_delicious_food_table_jpg__WEBPACK_IMPORTED_MODULE_4__;\n  imgLower.alt = \"Ramen\";\n  lowerPartContainer.appendChild(imgLower);\n\n  content.appendChild(lowerPartContainer);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadHomePage.js?");

/***/ }),

/***/ "./src/loadMenuPage.js":
/*!*****************************!*\
  !*** ./src/loadMenuPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _images_ramenBowl1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ramenBowl1.jpg */ \"./src/images/ramenBowl1.jpg\");\n/* harmony import */ var _images_ramenBowl2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ramenBowl2.jpg */ \"./src/images/ramenBowl2.jpg\");\n/* harmony import */ var _images_ramenBowl3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ramenBowl3.jpg */ \"./src/images/ramenBowl3.jpg\");\n/* harmony import */ var _images_ramenBowl4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ramenBowl4.jpg */ \"./src/images/ramenBowl4.jpg\");\n/* harmony import */ var _images_ramenBowl5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/ramenBowl5.jpg */ \"./src/images/ramenBowl5.jpg\");\n/* harmony import */ var _images_ramenBowl6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/ramenBowl6.jpg */ \"./src/images/ramenBowl6.jpg\");\n/* harmony import */ var _images_ramenBowl7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/ramenBowl7.jpg */ \"./src/images/ramenBowl7.jpg\");\n/* harmony import */ var _images_ramenBowl8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/ramenBowl8.jpg */ \"./src/images/ramenBowl8.jpg\");\n/* harmony import */ var _images_ramenBowl9_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/ramenBowl9.jpg */ \"./src/images/ramenBowl9.jpg\");\n/* harmony import */ var _images_ramenBowl10_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/ramenBowl10.jpg */ \"./src/images/ramenBowl10.jpg\");\n/* harmony import */ var _images_ramenBowl11_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/ramenBowl11.jpg */ \"./src/images/ramenBowl11.jpg\");\n/* harmony import */ var _images_ramenBowl12_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/ramenBowl12.jpg */ \"./src/images/ramenBowl12.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction loadMenuPage() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n\n  const menuPage = document.createElement(\"div\");\n  menuPage.classList.add(\"menuPage\");\n\n  const title1 = document.createElement(\"h2\");\n  title1.textContent = \"Pork\";\n\n  const ramenGrid1 = document.createElement(\"div\");\n  ramenGrid1.classList.add(\"ramenGrid\");\n  title1.classList.add(\"menuItemTitle\");\n\n  ramenGrid1.append(\n    createMenuItem(_images_ramenBowl1_jpg__WEBPACK_IMPORTED_MODULE_0__, \"Pork Miso Ramen — $16.99\"),\n    createMenuItem(_images_ramenBowl2_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Pork Original Ramen — $15.99\"),\n    createMenuItem(_images_ramenBowl3_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Pork Shoyu Ramen — $15.99\"),\n    createMenuItem(_images_ramenBowl4_jpg__WEBPACK_IMPORTED_MODULE_3__, \"Pork Spicy Ramen — $16.99\")\n  );\n\n  const ramenGrid2 = document.createElement(\"div\");\n  ramenGrid2.classList.add(\"ramenGrid\");\n\n  const title2 = document.createElement(\"h2\");\n  title2.textContent = \"Beef\";\n  title2.classList.add(\"menuItemTitle\");\n\n  ramenGrid2.append(\n    createMenuItem(_images_ramenBowl5_jpg__WEBPACK_IMPORTED_MODULE_4__, \"Beef Shoyu Ramen — $16.99\"),\n    createMenuItem(_images_ramenBowl6_jpg__WEBPACK_IMPORTED_MODULE_5__, \"Beef Original Ramen— $15.99\"),\n    createMenuItem(_images_ramenBowl7_jpg__WEBPACK_IMPORTED_MODULE_6__, \"Beef Miso Ramen — $15.99\"),\n    createMenuItem(_images_ramenBowl8_jpg__WEBPACK_IMPORTED_MODULE_7__, \"Beef Spicy Ramen — $16.99\")\n  );\n\n  const ramenGrid3 = document.createElement(\"div\");\n  ramenGrid3.classList.add(\"ramenGrid\");\n\n  const title3 = document.createElement(\"h2\");\n  title3.textContent = \"Chicken\";\n  title3.classList.add(\"menuItemTitle\");\n\n  ramenGrid3.append(\n    createMenuItem(_images_ramenBowl9_jpg__WEBPACK_IMPORTED_MODULE_8__, \"Chicken Miso Ramen — $16.99\"),\n    createMenuItem(_images_ramenBowl10_jpg__WEBPACK_IMPORTED_MODULE_9__, \"Chicken Origin Ramen — $15.99\"),\n    createMenuItem(_images_ramenBowl11_jpg__WEBPACK_IMPORTED_MODULE_10__, \"Chicken Shoyu Ramen — $15.99\"),\n    createMenuItem(_images_ramenBowl12_jpg__WEBPACK_IMPORTED_MODULE_11__, \"Chicken Spicy Ramen — $16.99\")\n  );\n\n  menuPage.append(title1, ramenGrid1, title2, ramenGrid2, title3, ramenGrid3);\n  content.appendChild(menuPage);\n}\n\nfunction createMenuItem(imageSrc, name) {\n  const item = document.createElement(\"div\");\n  const image = document.createElement(\"img\");\n  image.src = imageSrc;\n  const price = document.createElement(\"p\");\n  price.textContent = name;\n\n  item.append(image, price);\n  return item;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadMenuPage.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;