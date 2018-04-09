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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/sass-extract-loader/index.js!./_bootstrap-config.scss":
/*!********************************************************************!*\
  !*** ../node_modules/sass-extract-loader!./_bootstrap-config.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"global\":{\"$grid-columns\":{\"type\":\"SassNumber\",\"value\":12,\"unit\":\"\",\"sources\":[\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\"],\"declarations\":[{\"expression\":\"12 !default\",\"flags\":{\"default\":true,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":6,\"column\":1}}]},\"$grid-gutter-widths\":{\"type\":\"SassMap\",\"value\":{\"xs\":{\"type\":\"SassNumber\",\"value\":20,\"unit\":\"px\"},\"md\":{\"type\":\"SassNumber\",\"value\":30,\"unit\":\"px\"},\"lg\":{\"type\":\"SassNumber\",\"value\":40,\"unit\":\"px\"}},\"sources\":[\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\"],\"declarations\":[{\"expression\":\"(\\n  xs: 20px,\\n  md: 30px,\\n  lg: 40px\\n) !default\",\"flags\":{\"default\":true,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":8,\"column\":1}}]},\"$grid-breakpoints\":{\"type\":\"SassMap\",\"value\":{\"xs\":{\"type\":\"SassNumber\",\"value\":0,\"unit\":\"\"},\"sm\":{\"type\":\"SassNumber\",\"value\":420,\"unit\":\"px\"},\"md\":{\"type\":\"SassNumber\",\"value\":740,\"unit\":\"px\"},\"lg\":{\"type\":\"SassNumber\",\"value\":992,\"unit\":\"px\"},\"xl\":{\"type\":\"SassNumber\",\"value\":1400,\"unit\":\"px\"},\"xxl\":{\"type\":\"SassNumber\",\"value\":1672,\"unit\":\"px\"}},\"sources\":[\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\"],\"declarations\":[{\"expression\":\"(\\n  xs: 0,\\n  sm: 420px,   iPhone 6/7plus portrait has 414x736\\n  md: 740px,   iPhone 6plus horizontal has 736, all tablets start with 768.\\n  lg: 992px,\\n  xl: 1400px,\\n  xxl: 1672px  1520px with margin 5% on each side\\n) !default\",\"flags\":{\"default\":true,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":18,\"column\":1}}]},\"$container-max-widths\":{\"type\":\"SassMap\",\"value\":{\"xs\":{\"type\":\"SassNumber\",\"value\":100,\"unit\":\"%\"},\"md\":{\"type\":\"SassNumber\",\"value\":90,\"unit\":\"%\"},\"xxl\":{\"type\":\"SassNumber\",\"value\":1520,\"unit\":\"px\"}},\"sources\":[\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\"],\"declarations\":[{\"expression\":\"(\\n  xs: 100,\\n  md: 90,\\n  xxl: 1520px\\n) !default\",\"flags\":{\"default\":true,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":28,\"column\":1}}]},\"$container-standard-margins\":{\"type\":\"SassMap\",\"value\":{\"xs\":{\"type\":\"SassNumber\",\"value\":20,\"unit\":\"px\"},\"md\":{\"type\":\"SassNumber\",\"value\":5,\"unit\":\"%\"},\"max\":{\"type\":\"SassString\",\"value\":\"auto\"}},\"sources\":[\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\"],\"declarations\":[{\"expression\":\"(\\n  xs: 20px,\\n  md: 5,\\n  max: auto\\n) !default\",\"flags\":{\"default\":true,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":35,\"column\":1}}]},\"$v\":{\"type\":\"SassString\",\"value\":\"export(\\\"javascript/config/container-standard-margins.json\\\", (xs: 20px, md: 5%, max: auto))\",\"sources\":[\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\"],\"declarations\":[{\"expression\":\"export('javascript/config/grid-breakpoints.json', $grid-breakpoints)\",\"flags\":{\"default\":false,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":41,\"column\":1}},{\"expression\":\"export('javascript/config/grid-columns.json', $grid-columns)\",\"flags\":{\"default\":false,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":42,\"column\":1}},{\"expression\":\"export('javascript/config/grid-gutter-widths.json', $grid-gutter-widths)\",\"flags\":{\"default\":false,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":43,\"column\":1}},{\"expression\":\"export('javascript/config/container-max-widths.json', $container-max-widths)\",\"flags\":{\"default\":false,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":44,\"column\":1}},{\"expression\":\"export('javascript/config/container-standard-margins.json', $container-standard-margins)\",\"flags\":{\"default\":false,\"global\":false},\"in\":\"/Users/qunabu/Desktop/localhost/ss-grid/examples/_bootstrap-config.scss\",\"position\":{\"line\":45,\"column\":1}}]}}};\n\n//# sourceURL=webpack:///./_bootstrap-config.scss?../node_modules/sass-extract-loader");

/***/ }),

/***/ "../src/grid.js":
/*!**********************!*\
  !*** ../src/grid.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DEFAULTS = {\n  \"container-max-widths\": {\n    \"xs\": \"100%\",\n    \"md\": \"90%\",\n    \"xxl\": \"1520px\"\n  },\n  \"container-standard-margins\": {\n    \"xs\": \"20px\",\n    \"md\": \"5%\",\n    \"max\": \"auto\"\n  },\n  \"grid-breakpoints\": {\n    \"xs\": 0,\n    \"sm\": \"420px\",\n    \"md\": \"740px\",\n    \"lg\": \"992px\",\n    \"xl\": \"1400px\",\n    \"xxl\": \"1672px\"\n  },\n  \"grid-columns\": 12,\n  \"grid-gutter-widths\": {\n    \"xs\": \"20px\",\n    \"md\": \"30px\",\n    \"lg\": \"40px\"\n  }\n};\n\n/**\n * Class representing a Grid Helper.\n *\n */\n\nvar Grid = function () {\n  _createClass(Grid, [{\n    key: \"_parseVar\",\n\n\n    /* gets string, returns number */\n\n    value: function _parseVar(value) {\n\n      if (typeof value == 'string' && value.indexOf('px') != -1) {\n        return parseFloat(value);\n      }\n\n      if (typeof value == 'string' && value.indexOf('%') != -1) {\n        return parseFloat(value) / 100;\n      }\n\n      return value;\n    }\n  }, {\n    key: \"_getValesFromSassLoader\",\n    value: function _getValesFromSassLoader(_v) {\n      if (_v.type == \"SassMap\") {\n        var values = {};\n        for (var key in _v.value) {\n          var _value = _v.value[key];\n          values[key] = \"\" + _value.value + _value.unit;\n        }\n        return values;\n      } else if (_v.type == \"SassString\" || _v.type == \"SassNumber\") {\n        return _v.value;\n      }\n    }\n\n    /**\n       * Create a Grid Helper.\n       * @param {object} options are either options that extends DEFAUTLS or sass file loaded with `sass-extract-loader` webpack plugin\n       * @example \n       * \n       * import Grid from \"./../src/grid\";\n       * \n       * const config = require('sass-extract-loader!./_bootstrap-config.scss');\n        * let grid = new Grid(config);\n       * grid.attach();\n       * grid.toggle();\n       */\n\n  }]);\n\n  function Grid() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n    _classCallCheck(this, Grid);\n\n    this._cache = {};\n\n    this._breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];\n\n    if (options && options.global) {\n      // object from `sass-extract-loader`\n      var _o = options.global;\n\n      options = {};\n\n      if (_o['$container-max-widths']) options['container-max-widths'] = this._getValesFromSassLoader(_o['$container-max-widths']);\n      if (_o['$container-standard-margins']) options['container-standard-margins'] = this._getValesFromSassLoader(_o['$container-standard-margins']);\n      if (_o['$grid-breakpoints']) options['grid-breakpoints'] = this._getValesFromSassLoader(_o['$grid-breakpoints']);\n      if (_o['$grid-columns']) options['grid-columns'] = this._getValesFromSassLoader(_o['$grid-columns']);\n      if (_o['$grid-gutter-widths']) options['grid-gutter-widths'] = this._getValesFromSassLoader(_o['$grid-gutter-widths']);\n    }\n\n    this.config = Object.assign(DEFAULTS, options);\n\n    this.config['calculated-grid-gutter-widths'] = {};\n    this.config['calculated-container-max-widths'] = {};\n\n    var value = 0;\n    var i;\n    var name;\n\n    for (i = 0; i < this._breakpoints.length; i++) {\n      name = this._breakpoints[i];\n      value = this.config['grid-gutter-widths'][name] ? this.config['grid-gutter-widths'][name] : this._parseVar(value);\n      this.config['calculated-grid-gutter-widths'][name] = this._parseVar(value);\n    }\n\n    value = 0;\n    for (i = 0; i < this._breakpoints.length; i++) {\n      name = this._breakpoints[i];\n      value = this.config['container-max-widths'][name] ? this.config['container-max-widths'][name] : value;\n      this.config['calculated-container-max-widths'][name] = this._parseVar(value);\n    }\n\n    this.colClass = \"col-xs-1 col-sm-1 col-md-1\";\n    this.colStyle = ['background:rgba(255,0,0,0.1); height:100%;', 'background:rgba(0,0,255,0.1); height:100%;', '1px solid rgba(0,0,0,0.2)'];\n\n    this.onStage = false;\n  }\n\n  /** \n   * TODO add description\n   */\n\n  _createClass(Grid, [{\n    key: \"attach\",\n    value: function attach() {\n      var self = this;\n      window.addEventListener('keydown', function (e) {\n        var tagName = e.target.tagName.toLowerCase();\n        if (e.key === 'g' && tagName != 'input' && tagName != 'textarea') {\n          self.toggle();\n        }\n      });\n    }\n  }, {\n    key: \"toggle\",\n\n\n    /** \n    * TODO add description\n    */\n\n    value: function toggle() {\n      if (this.onStage) {\n        document.querySelector('.grid-helper').parentNode.removeChild(document.querySelector('.grid-helper'));\n      } else {\n        var html = \"<div class='grid-helper' style='z-index: 999; width:100%; height: 100%; position:fixed; left:0; top:0;'>\";\n        html += \"<div class='container' style='height:100%;'>\";\n        html += \"<div class='row' style='height:100%;'>\";\n        for (var _i = 1; _i <= this.columns; _i++) {\n          var border_style = _i == 1 ? \"border-right: \" + this.colStyle[2] + \" ;border-left: \" + this.colStyle[2] : \"border-right: \" + this.colStyle[2];\n          html += \"<div class=' \" + this.colClass + \" ' style=' \" + border_style + \" '><div class='column' style=' \" + this.colStyle[_i % 2] + \" '></div></div>\";\n        }\n        html += \"</div></div></div>\";\n        document.body.insertAdjacentHTML('beforeend', html);\n      }\n      this.onStage = !this.onStage;\n    }\n  }, {\n    key: \"currentBreakPoint\",\n    get: function get() {\n      var breakpoint = '';\n      var w = document.body.clientWidth;\n\n      if (this._cache['breapoint_' + w]) {\n        return this._cache['breapoint_' + w];\n      }\n\n      var breakpoints = this.config[\"grid-breakpoints\"];\n\n      for (var key in this.config[\"grid-breakpoints\"]) {\n        var _b = this._parseVar(breakpoints[key]);\n        if (w >= _b) {\n          breakpoint = key;\n        }\n      }\n\n      this._cache['breapoint_' + w] = breakpoint;\n      return breakpoint;\n    }\n\n    /** \n    * TODO add description\n    */\n\n  }, {\n    key: \"containerWidth\",\n    get: function get() {\n\n      var windowWidth = document.body.clientWidth;\n      var currentBreakpoint = this.currentBreakPoint;\n      var maxWidth = this._parseVar(this.config['calculated-container-max-widths'][currentBreakpoint]);\n\n      if (maxWidth <= 1) {\n        //percentage \n        return windowWidth * maxWidth;\n      } else {\n        if (windowWidth < maxWidth) {\n          return windowWidth;\n        }\n        return maxWidth;\n      }\n    }\n\n    /** \n    * TODO add description\n    */\n\n  }, {\n    key: \"columns\",\n    get: function get() {\n      return this.config[\"grid-columns\"];\n    }\n\n    /** \n    * TODO add description\n    */\n\n  }, {\n    key: \"gutterWidth\",\n    get: function get() {\n\n      var windowWidth = document.body.clientWidth;\n      var currentBreakpoint = this.currentBreakPoint;\n\n      var gutterWidth = this._parseVar(this.config['calculated-grid-gutter-widths'][currentBreakpoint]);\n\n      return gutterWidth;\n    }\n\n    /** \n    * TODO add description\n    */\n\n  }, {\n    key: \"columnWidth\",\n    get: function get() {\n\n      return this.containerWidth / this.columns - 1 * this.gutterWidth;\n    }\n  }]);\n\n  return Grid;\n}();\n\nexports.default = Grid;\n\nmodule.exports = Grid;\n\n//# sourceURL=webpack:///../src/grid.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../src/grid */ \"../src/grid.js\");\n/* harmony import */ var _src_grid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_grid__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst config = __webpack_require__(/*! sass-extract-loader!./_bootstrap-config.scss */ \"../node_modules/sass-extract-loader/index.js!./_bootstrap-config.scss\");\n\nlet grid = new _src_grid__WEBPACK_IMPORTED_MODULE_0___default.a(config);\ngrid.attach(); // attaches grid to DOM\ngrid.toggle(); // show/hide grid helper \n\nconsole.log(grid.columns);\nconsole.log(grid.containerWidth);\nconsole.log(grid.gutterWidth);\nconsole.log(grid.columnWidth);\n\n\nwindow.__grid = grid;\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ });