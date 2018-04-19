
const DEFAULTS = {
    "container-max-widths" :{
        "xs": "100%",
        "md": "90%",
        "xxl": "1520px"
    },
    "container-standard-margins":{
        "xs": "20px",
        "md": "5%",
        "max": "auto"
    },
    "grid-breakpoints":{
        "xs": 0,
        "sm": "420px",
        "md": "740px",
        "lg": "992px",
        "xl": "1400px",
        "xxl": "1672px"
    },
    "grid-columns":12,
    "grid-gutter-widths":{
        "xs": "20px",
        "md": "30px",
        "lg": "40px"
      }
};

/**
 * Class representing a Grid Helper.
 *
 */

class Grid {

  /* gets string, returns number */

  

  _parseVar(value) {

    if (typeof value == 'string' && value.indexOf('px')!= -1) {
      return parseFloat(value);
    }

    if (typeof value == 'string' && value.indexOf('%')!= -1) {
      return parseFloat(value) / 100;
    }

    return value;
    
  }

  _getValesFromSassLoader(_v) {
    if (_v.type == "SassMap") {
        let values = {};
        for (let key in _v.value) {
            let value = _v.value[key];
            values[key] = `${value.value}${value.unit}`;
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

  constructor(options = null) {
  
    this._cache = {};

    this._breakpoints = ['xs','sm','md','lg','xl','xxl'];


    if (options && options.global) { // object from `sass-extract-loader`
        let _o = options.global;

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

    for (i=0 ; i< this._breakpoints.length; i++) {
      name = this._breakpoints[i];
      value = this.config['grid-gutter-widths'][name] ? this.config['grid-gutter-widths'][name] : this._parseVar(value);
      this.config['calculated-grid-gutter-widths'][name] =  this._parseVar(value);
    }

    value = 0;
    for (i=0 ; i< this._breakpoints.length; i++) {
      name = this._breakpoints[i];
      value = this.config['container-max-widths'][name] ? this.config['container-max-widths'][name] : value;
      this.config['calculated-container-max-widths'][name] =  this._parseVar(value);
    }


    this.colClass="col-xs-1 col-sm-1 col-md-1";
    this.colStyle = [
      'background:rgba(255,0,0,0.1); height:100%;',
      'background:rgba(0,0,255,0.1); height:100%;',
      '1px solid rgba(0,0,0,0.2)'
    ];

    this.onStage=false;
  }

  /** 
   * TODO add description
   */

  attach() {
    this.once = true;
    let self = this;
    window.addEventListener('keydown', function(e) {
      var tagName =  e.target.tagName.toLowerCase();
      if (e.key === 'g' && tagName != 'input' && tagName != 'textarea' ) {
        self.toggleGrid();
      }

      if (e.key === 'f' && tagName != 'input' && tagName != 'textarea' ) {
        self.toggleGrid(true);
      }
    });
  }

  /** 
   * TODO add description
   */

  get currentBreakPoint() {
    var breakpoint = '';
    var w = document.body.clientWidth;

    if (this._cache['breapoint_'+w]) {
      return this._cache['breapoint_'+w];
    }

    var breakpoints = this.config["grid-breakpoints"];

    for(var key in this.config["grid-breakpoints"]) {
      var _b = this._parseVar(breakpoints[key]);
      if (w >= _b) {
        breakpoint = key;
      }
    }

    this._cache['breapoint_'+w] = breakpoint;
    return breakpoint;

  }
  /** 
   * TODO add description
   */
  get containerWidth() {
    
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
  get containerWidthFull() {
    
    var windowWidth = window.innerWidth;
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
  get columns() {
    return this.config["grid-columns"];
    
  }
  /** 
   * TODO add description
   */
  get gutterWidth() {
    
    var windowWidth = document.body.clientWidth;
    var currentBreakpoint = this.currentBreakPoint;

    var gutterWidth = this._parseVar(this.config['calculated-grid-gutter-widths'][currentBreakpoint]);

    return gutterWidth;

  }
  /** 
   * TODO add description
   */
  get gutterWidthFull() {
    
    var windowWidth = window.innerWidth;
    var currentBreakpoint = this.currentBreakPoint;

    var gutterWidth = this._parseVar(this.config['calculated-grid-gutter-widths'][currentBreakpoint]);

    return gutterWidth;

  }
  /** 
   * TODO add description
   */
  get columnWidth() {
    
    return (this.containerWidth / this.columns) - (1 * this.gutterWidth);

  }
  /** 
   * TODO add description
   */
  get columnWidthFull() {
    
    return (this.containerWidthFull / this.columns) - (1 * this.gutterWidthFull);

  }
  /** 
   * TODO add description
   */
  toggleGrid(fluid = false) {
    if (this.onStage) {
      document.querySelector('.grid-helper').parentNode.removeChild(document.querySelector('.grid-helper'));
    } else {
      let html = "<div class='grid-helper' style='z-index: 999; width:100%; height: 100%; position:fixed; left:0; top:0;'>";
      html += "<div class='"+(fluid ? "container-fluid" : "container")+"' style='height:100%;'>";
      html += "<div class='row' style='height:100%;'>";
      for (let i = 1; i <= this.columns; i++) {
        let border_style = i == 1 ?  `border-right: ${this.colStyle[2]} ;border-left: ${this.colStyle[2]}` : `border-right: ${this.colStyle[2]}`;
        html += `<div class=' ${this.colClass} ' style=' ${border_style} '><div class='column' style=' ${this.colStyle[i % 2]} '></div></div>`;
      }
      html += "</div></div></div>";
      document.body.insertAdjacentHTML('beforeend', html);
    }
    this.onStage = !this.onStage;
  }

}

export default Grid;
module.exports = Grid;
