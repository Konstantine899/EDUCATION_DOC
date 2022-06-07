module.exports = {
  mode: "development",
  module: {
    rules: [{ test: /\.(png|jpg)$/, use: [{ loader: "file-loader" }] }],
  },
};
