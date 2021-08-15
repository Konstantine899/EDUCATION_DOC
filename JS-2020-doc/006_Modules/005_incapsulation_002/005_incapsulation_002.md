# Инкапсуляция

Поговорим про инкапсуляцию в модулях. Базовую структуру смотри в проекте.

**pakage.json**

```json
{
  "name": "incaps-w-mod",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "autoprefixer": "^9.6.1",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.6",
    "babel-polyfill": "^6.26.0",
    "css-loader": "^3.1.0",
    "file-loader": "^4.1.0",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.8.0",
    "postcss-loader": "^3.0.0",
    "precss": "^4.0.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.39.1",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.7.2"
  },
  "dependencies": {
    "axios": "^0.19.0",
    "bootstrap": "^4.3.1"
  }
}
```

**webpack.config.js**

```js
const path = require("path");
const autoprefixer = require("autoprefixer");
const precss = require("precss");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Итак,  чтобы вебпак начал свою работу, нужно указать главный (основной) файл, который будет включать в себя все другие необходимые файлы (модули).
  entry: {
    polyfill: "babel-polyfill",
    app: "./js/app.js",
  },
  // Также webpack рекомендует явно указывать, в какой директории находятся исходные файлы проекта (ресурсы). Для этого следует использовать свойство context:
  context: path.resolve(__dirname, "src"),
  devServer: {
    publicPath: "/",
    port: 9000,
    contentBase: path.join(process.cwd(), "dist"),
    host: "localhost",
    historyApiFallback: true,
    noInfo: false,
    stats: "minimal",
    hot: true,
  },
  module: {
    // Для того, чтобы трансформировать файл, используются специальные утилиты - загрузчики (loaders).
    //Для любых настроек модуля вебпак используется поле module.
    //Массив rules  внутри объекта module определяет список правил для загрузчиков.
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",

            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [precss, autoprefixer],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  // Вебпак плагины используются для настройки процесса сборки.
  //Например, плагин для минификации кода (во время сборки код подвергается очистке и минификации).
  //Или плагин для сборки html страницы и css кода (скрипты вставляются в html, куски css собираются в один файл).
  plugins: [
    new MiniCssExtractPlugin({ filename: "./style.css" }),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  // Кроме entry, мы можем указать поле, куда (в какой файл) собирать конечный результат. Это свойство задаётся с помощью поля output.
  //По умолчанию, весь результирующий код собирается в папку dist.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  mode: "development",
};
```

Так же есть папка **js** **css** котрые находяться в **src** и корневой в этой папке **index.html**.

Мы можем за счет того что модули скрывают свое содержимое и за счет того что мы можем экспортировать только те функции которые будут использоваться этим модулем. Мы можем так же добиться приватности тех или иных данных т.е. у нас может быть в модуле какие-то данные т.е. это какой-то объект

```js
// modules.js
let data = {
  name: "Denis",
};
```

И мы можем наружу экспортировать только те функции т.е. те интерфейсы которые мы хотим что бы использовали снаружи и к ним небыло доступа, к данным внутри этого модуля небыло доступа.

```js
// modules.js
let data = {
  name: "Denis",
};

export function getData() {
  return data;
}
```

Таким образом экспортируя что-то либо через export либо **export** **default**. Мы разбиваем как бы на уровни доступа к тем или иным данным нашего модуля, недавая при этоп напрямую влиять на наши данные.

Далее импортирую нужные мне функции.

```js
// app.js
import { getData } from "./module";

console.log(getData());
```

Импортирую **import { getData } from './module';** и потом использую эти данные снаружи **console.log(getData());**

При этом у меня не будет прямого доступа к

```js
// modules.js
let data = {
  name: "Denis",
};
```

Будет только внешний интерфейс

```js
export function getData() {
  return data;
}
```

Если мы например хотим использовать какие-то классы, а на ружу экспортировать экземпляр этого класса, то мы так же можем этого добиться.

```js
const symbol = Symbol();

export default class User {
  constructor(firstName) {
    this[symbol] = firstName;
  }

  getFirstName() {
    return this[symbol];
  }
}
```

Создаю класс **User** у которого в конструкторе будет приниматься **firstName**.

Создаю вне класса **const symbol = Symbol();** их может быть много.

И я могу внутри конструктора через **this[symbol] = firstName;** Это наше скрытое свойство приватное которое мы хотим что бы ни как не переопределяли.

И дальше я могу создать метод **getFirstName** который зная о существовании **symbol** может вернуть **return this[symbol];** нужное нам свойство наружу. И дальше мы можем либо экспортировать этот класс **export default class User**, либо отдельно экспортировать инстанс этого класса, но тем не менее у нас за счет опять же замыкания и того что модуль скрывает содержимое и того что экспортируется к этому имеется доступ снаружи, то мы за счет этого symbol скрываем те или иные свойства у нашего класса.

Но опять же это будет зависить от того что вы разрабатываете и в процессе разработки будет зависить как ваши модули отдельные влияют на данные и стоит ли сокрывать доступ к тем или иным данным. Обычно этого делать не приходится т.е. чаще всего вы этого релизовывать не будуте т.е. у вас будут базовые **export** которые как бы уже за счет модулей вы закроете доступ к тем или иным данным, а за счет отдельных функций далите доступ к ним. Но тем не менее вы должны знать о различных вариациях и способах определения приватных свойств. Поэтому мы их и рассматриваем.

