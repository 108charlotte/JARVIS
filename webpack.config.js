const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: {
    firebase_init: './src/firebase-init.js',
    chatbot: './src/chatbot.js',
  }, 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ], 
  mode: 'development',           // Change to 'production' when ready
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true,
    hot: true
  }
};
