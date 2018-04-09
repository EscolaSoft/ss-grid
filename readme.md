# ss-components
Straight forward JavaScript grid. A helper for Boostrap 4 Grid, Draws columns on DOM, calculates cols, containers and gutters without DOM.

## to install 

`npm i ss-grid -s`

## Example 

See `tests` folder

```javascript

import Grid from "ss-grid";

const config = require('sass-extract-loader!./_bootstrap-config.scss');

let grid = new Grid(config);
grid.attach(); // attaches grid to DOM
grid.toggle(); // show/hide grid helper 

console.log(grid.columns);
console.log(grid.containerWidth);
console.log(grid.gutterWidth);
console.log(grid.columnWidth);


window.__grid = grid; // this is just for test purposes

```

## API Documentation

[Documentation](docs/grid.md)
