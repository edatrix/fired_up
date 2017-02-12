var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: './js/main.js',
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      { 
        test: /\.hbs$/, 
        loader: "handlebars-template-loader"
      },
    ],
  },  
};