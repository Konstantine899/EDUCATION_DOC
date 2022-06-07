const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'), // то где храняться все файлы связанные со сборкой
  mode: 'development',
  entry: './index.js', // путь считается от src
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'app'), // складываю все файлы
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'app'),
    open: true,
    compress: true, // происходит сжатие
    hot: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd, // в production режиме убираю пробелы.
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // исключение для обработки
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./img/${filename('[ext]')}`,
            },
          },
        ],
      },
      {
        test: /\.(?:|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./fonts/${filename('[ext]')}`,
            },
          },
        ],
      },
    ],
  },
};
