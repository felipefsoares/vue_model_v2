"use strict";
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      //NOTE: I could install vue-style-loader lib and create here a rule here to filter all css and create a global css file
      {
        test: /\.vue$/,
        use: "vue-loader"
        // options: {
        //   loaders: {
        //     scss: "vue-style-loader!css-loader!sass-loader",
        //     sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
        //   }
        // }
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    // new webpack.ProvidePlugin({
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, "static/img"),
    //     to: path.resolve(__dirname, "dist/static/img"),
    //     toType: "dir"
    //   }
    // ]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    })
  ]
};
