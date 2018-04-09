# ss-components
Straight forward JavaScript grid. A helper for Boostrap 4 Grid, Draws columns on DOM, calculates cols, containers and gutters without DOM.

## to install 

`npm i ss-grid -s`

## Example 

See `tests` folder

```javascript
import Components from "ss-components";

// standard components
import SideMenu from "./js/components/SideMenu.js";
import Title from "./js/components/Title.js";

// diagram components types 
import BarDiagram from './js/components/BarDiagram.js';

// register components
Components.register('side-menu', SideMenu);
Components.register('tooltip', Tooltip);

// register diagrams
Components.register('BarDiagram', BarDiagram);

//attaching all components
Components.attach();
```

## API Documentation

[Documentation](docs/grid.md)
