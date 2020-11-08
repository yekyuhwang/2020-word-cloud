"use strict";
const path = require("path");

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  output: {
    path: path.resolve(__dirname, "./bulid"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        loaders: "babel-loader",
      },
    ],
  },
  plugins: [],

  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3333,
  },
  devtool: "eval-source-map",
};
