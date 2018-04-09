"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULTS = {
  "container-max-widths": {
    "xs": "100%",
    "md": "90%",
    "xxl": "1520px"
  },
  "container-standard-margins": {
    "xs": "20px",
    "md": "5%",
    "max": "auto"
  },
  "grid-breakpoints": {
    "xs": 0,
    "sm": "420px",
    "md": "740px",
    "lg": "992px",
    "xl": "1400px",
    "xxl": "1672px"
  },
  "grid-columns": 12,
  "grid-gutter-widths": {
    "xs": "20px",
    "md": "30px",
    "lg": "40px"
  }
};

/**
 * Class representing a Grid Helper.
 *
 */

var Grid = function () {
  _createClass(Grid, [{
    key: "_parseVar",


    /* gets string, returns number */

    value: function _parseVar(value) {

      if (typeof value == 'string' && value.indexOf('px') != -1) {
        return parseFloat(value);
      }

      if (typeof value == 'string' && value.indexOf('%') != -1) {
        return parseFloat(value) / 100;
      }

      return value;
    }
  }, {
    key: "_getValesFromSassLoader",
    value: function _getValesFromSassLoader(_v) {
      if (_v.type == "SassMap") {
        var values = {};
        for (var key in _v.value) {
          var _value = _v.value[key];
          values[key] = "" + _value.value + _value.unit;
        }
        return values;
      } else if (_v.type == "SassString" || _v.type == "SassNumber") {
        return _v.value;
      }
    }

    /**
       * Create a Grid Helper.
       * @param {object} options are either options that extends DEFAUTLS or sass file loaded with `sass-extract-loader` webpack plugin
       * @example 
       * 
       * import Grid from "./../src/grid";
       * 
       * const config = require('sass-extract-loader!./_bootstrap-config.scss');
        * let grid = new Grid(config);
       * grid.attach();
       * grid.toggle();
       */

  }]);

  function Grid() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Grid);

    this._cache = {};

    this._breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

    if (options && options.global) {
      // object from `sass-extract-loader`
      var _o = options.global;

      options = {};

      if (_o['$container-max-widths']) options['container-max-widths'] = this._getValesFromSassLoader(_o['$container-max-widths']);
      if (_o['$container-standard-margins']) options['container-standard-margins'] = this._getValesFromSassLoader(_o['$container-standard-margins']);
      if (_o['$grid-breakpoints']) options['grid-breakpoints'] = this._getValesFromSassLoader(_o['$grid-breakpoints']);
      if (_o['$grid-columns']) options['grid-columns'] = this._getValesFromSassLoader(_o['$grid-columns']);
      if (_o['$grid-gutter-widths']) options['grid-gutter-widths'] = this._getValesFromSassLoader(_o['$grid-gutter-widths']);
    }

    this.config = Object.assign(DEFAULTS, options);

    this.config['calculated-grid-gutter-widths'] = {};
    this.config['calculated-container-max-widths'] = {};

    var value = 0;
    var i;
    var name;

    for (i = 0; i < this._breakpoints.length; i++) {
      name = this._breakpoints[i];
      value = this.config['grid-gutter-widths'][name] ? this.config['grid-gutter-widths'][name] : this._parseVar(value);
      this.config['calculated-grid-gutter-widths'][name] = this._parseVar(value);
    }

    value = 0;
    for (i = 0; i < this._breakpoints.length; i++) {
      name = this._breakpoints[i];
      value = this.config['container-max-widths'][name] ? this.config['container-max-widths'][name] : value;
      this.config['calculated-container-max-widths'][name] = this._parseVar(value);
    }

    this.colClass = "col-xs-1 col-sm-1 col-md-1";
    this.colStyle = ['background:rgba(255,0,0,0.1); height:100%;', 'background:rgba(0,0,255,0.1); height:100%;', '1px solid rgba(0,0,0,0.2)'];

    this.onStage = false;
  }

  /** 
   * TODO add description
   */

  _createClass(Grid, [{
    key: "attach",
    value: function attach() {
      var self = this;
      window.addEventListener('keydown', function (e) {
        var tagName = e.target.tagName.toLowerCase();
        if (e.key === 'g' && tagName != 'input' && tagName != 'textarea') {
          self.toggle();
        }
      });
    }
  }, {
    key: "toggle",


    /** 
    * TODO add description
    */

    value: function toggle() {
      if (this.onStage) {
        document.querySelector('.grid-helper').parentNode.removeChild(document.querySelector('.grid-helper'));
      } else {
        var html = "<div class='grid-helper' style='z-index: 999; width:100%; height: 100%; position:fixed; left:0; top:0;'>";
        html += "<div class='container' style='height:100%;'>";
        html += "<div class='row' style='height:100%;'>";
        for (var _i = 1; _i <= this.columns; _i++) {
          var border_style = _i == 1 ? "border-right: " + this.colStyle[2] + " ;border-left: " + this.colStyle[2] : "border-right: " + this.colStyle[2];
          html += "<div class=' " + this.colClass + " ' style=' " + border_style + " '><div class='column' style=' " + this.colStyle[_i % 2] + " '></div></div>";
        }
        html += "</div></div></div>";
        document.body.insertAdjacentHTML('beforeend', html);
      }
      this.onStage = !this.onStage;
    }
  }, {
    key: "currentBreakPoint",
    get: function get() {
      var breakpoint = '';
      var w = document.body.clientWidth;

      if (this._cache['breapoint_' + w]) {
        return this._cache['breapoint_' + w];
      }

      var breakpoints = this.config["grid-breakpoints"];

      for (var key in this.config["grid-breakpoints"]) {
        var _b = this._parseVar(breakpoints[key]);
        if (w >= _b) {
          breakpoint = key;
        }
      }

      this._cache['breapoint_' + w] = breakpoint;
      return breakpoint;
    }

    /** 
    * TODO add description
    */

  }, {
    key: "containerWidth",
    get: function get() {

      var windowWidth = document.body.clientWidth;
      var currentBreakpoint = this.currentBreakPoint;
      var maxWidth = this._parseVar(this.config['calculated-container-max-widths'][currentBreakpoint]);

      if (maxWidth <= 1) {
        //percentage 
        return windowWidth * maxWidth;
      } else {
        if (windowWidth < maxWidth) {
          return windowWidth;
        }
        return maxWidth;
      }
    }

    /** 
    * TODO add description
    */

  }, {
    key: "columns",
    get: function get() {
      return this.config["grid-columns"];
    }

    /** 
    * TODO add description
    */

  }, {
    key: "gutterWidth",
    get: function get() {

      var windowWidth = document.body.clientWidth;
      var currentBreakpoint = this.currentBreakPoint;

      var gutterWidth = this._parseVar(this.config['calculated-grid-gutter-widths'][currentBreakpoint]);

      return gutterWidth;
    }

    /** 
    * TODO add description
    */

  }, {
    key: "columnWidth",
    get: function get() {

      return this.containerWidth / this.columns - 1 * this.gutterWidth;
    }
  }]);

  return Grid;
}();

exports.default = Grid;

module.exports = Grid;

//# sourceMappingURL=grid.js.map