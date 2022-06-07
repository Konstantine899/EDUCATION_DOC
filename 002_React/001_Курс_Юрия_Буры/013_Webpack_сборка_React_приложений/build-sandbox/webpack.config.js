//Импортирую плагины
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {
  //Устанавливаю mode значение по умолчанию
  const { mode = "development" } = env;

  // Переменные содержащие значение из командной строки
  const isProd = mode === "production";
  const isDev = mode === "development";

  //Функция выбора style лоудеров в зависимости от режима
  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : "style-loader",
      "css-loader",
    ];
  };

  // Функция getPlugins, функция выбора плагинов в зависимости от режима
  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: "Hello World",
        buildTime: new Date().toString(),
        template: "public/index.html",
      }),
    ];
    //Если запускается production режим, то добавляю плагины в конец массива
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: "main-[hash:8].css",
        })
      );
    }
    //результирующий массив с плагинами
    return plugins;
  };

  return {
    //Режим запуска конфигурации
    mode: isProd ? "production" : isDev && "development",

    //Название главного js файла
    output: {
      filename: isProd ? "main-[hash:8].js" : undefined,
    },

    // Лоудеры
    module: {
      rules: [
        // Обработка JS
        {
          test: /\.(js)$/,
          //до обработки js файлов указываю исключение в поле exclude то что не нежно обрабатывать
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        // Загрузка картинок
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
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
        // Загрузка шрифтов
        {
          test: /\.(ttf|otf|eot|woof|woof2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]",
              },
            },
          ],
        },
        // Загрузка css
        {
          test: /\.css$/,
          use: getStyleLoaders(),
        },
        // Загрузка sass/scss
        {
          test: /\.(s[ac]ss)$/,
          use: [...getStyleLoaders(), "sass-loader"],
        },
      ],
    },
    //Плагины
    plugins: getPlugins(),
    //Конфигурация webpack-dev-server
    devServer: {
      open: true,
      port: 3000,
    },
  };
};
