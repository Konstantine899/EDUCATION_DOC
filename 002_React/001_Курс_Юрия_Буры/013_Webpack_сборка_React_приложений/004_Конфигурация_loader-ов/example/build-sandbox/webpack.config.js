module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name]-[sha1:hash:7].[ext]",
            },
          },
        ],
      },
    ],
  },
};
