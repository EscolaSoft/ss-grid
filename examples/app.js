
import Grid from "./../src/grid";

const config = require('sass-extract-loader!./_bootstrap-config.scss');

let grid = new Grid(config);
grid.attach(); // attaches grid to DOM
grid.toggle(); // show/hide grid helper 

console.log(grid.columns);
console.log(grid.containerWidth);
console.log(grid.gutterWidth);
console.log(grid.columnWidth);


window.__grid = grid; // this is just for test purposes
