'use strict';

var webpack = require('webpack'),
    path = require('path'),
    APP = __dirname + '/app',
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  context: APP,
  devServer: {
    port: 3000
  },
  entry: {
    app: ['./coffee/app.coffee'],
    vendor: [
      'angular',
      'angular-ui-router',
      'angular-ui-bootstrap'
    ]
  },
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(scss|sass)$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.coffee$/,
        loader: 'ng-annotate!coffee'
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=fonts/[name].[ext]"
      },
      {
        test: /\.(pug|jade)$/,
        loader: "pug"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new HtmlWebpackPlugin({
      template: './pug/index.pug'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3000',
      browser: 'Google Chrome'
    })
  ]
};

module.exports = config;
