const path = require("path");

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: {
      type: "commonjs2",
    },
    clean: false,
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    dotenv: "commonjs dotenv",
    jsdom: "commonjs jsdom",
  },
};
