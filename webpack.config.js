const path = require('path');

const config = {
  mode:"development",
  context: path.resolve(__dirname, 'tests'),  
  entry: {
    // removing 'src' directory from entry point, since 'context' is taking care of that
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'tests'),
    filename: './[name].bundle.js'
  },
  target: 'web',
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};

module.exports = config;