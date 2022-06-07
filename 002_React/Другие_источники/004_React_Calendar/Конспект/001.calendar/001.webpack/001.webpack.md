# webpack babel react каркас приложения

В папке **src** все что нужно для разработки.

конфигурационные файлы.

```json
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --mode production",
    "dev": "cross-env NODE_ENV=development webpack --mode development",
    "start": "cross-env NODE_ENV=development webpack serve --mode development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.12.17",
    "@babel/core": "^7.12.17",
    "@babel/plugin-proposal-class-properties": "^7.12.13",
    "@babel/preset-env": "^7.12.17",
    "@babel/preset-react": "^7.12.13",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^3.0.0",
    "cross-env": "^7.0.3",
    "css-loader": "^5.0.2",
    "file-loader": "^6.2.0",
    "html-loader": "^2.0.0",
    "html-webpack-plugin": "^5.1.0",
    "mini-css-extract-plugin": "^1.3.7",
    "node-sass": "^5.0.0",
    "sass-loader": "^11.0.1",
    "webpack": "^5.22.0",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "core-js": "^3.9.0",
    "normalize.css": "^8.0.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  }
}
```

**webpack.config.js**

```js
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
  entry: './js/index.js', // путь считается от src
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
```

**.babelrc**

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 3.8, // Указываю версию библиотеки
        "useBuiltIns": "usage", // это означает то что babel попытается найти те места в коде которые используют новые функции языка и подключить только нужные polyfills
        "debug": true, // вывод потдерживаемых браузеров
        "modules": false, // запрет трансформации import
        "targets": {
          "chrome": "58",
          "ie": "11"
        }
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```
