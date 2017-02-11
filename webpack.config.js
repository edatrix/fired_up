var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$/,
        loader: 'file-loader?name=[name]-[hash].[ext]',
      },
      {
        test: /\.gif$|\.jpg$|\.png$/,
        loader: 'file-loader?name=[name]-[hash].[ext]',
      },
      {
        test: /\.svg?$/,
        loader: 'file-loader?name=[name]-[hash].[ext]',
      },
      {
        test: /\.scss$/,
        loader: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-template-loader',
      },
    ],
  },
};