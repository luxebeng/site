const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/sync',
      }
    ]
  },
  experiments: {
    syncWebAssembly: true
  },
  entry: "./index.js",
  mode: "development",
};
