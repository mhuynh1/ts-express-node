const fs = require("fs");
const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");

const nodeModules = {};
fs.readdirSync("node_modules")
  .filter(x => {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(mod => {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  mode: "none",
  entry: "./server/server.ts",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "server.js"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx'
      // extension will be handled by 'ts-loader'
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  target: "node",
  externals: nodeModules,
  plugins: [new NodemonPlugin()]
};
