
import Grid from "./../src/grid";

const config = require('sass-extract-loader!./_bootstrap-config.scss');


let grid = new Grid(config);
grid.attach();
grid.toggle();

console.log(config, grid.config);


window.__grid = grid;
