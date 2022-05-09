const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // импортируем плагины для html и css

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
console.log(mode + " mode");

//указ-ем, что файл конф-ции явл-ся отдельным модулем, который мы эксп-ем наружу
module.exports = {
  mode: mode,
  entry: {
    // ключи scripts и user - этоимена выходных файлов, которые скомпилируются в папку dist
    // index.js, user.js - пути к исх файлам в папке src
    // scripts: "./src/index.js",
    //     user: "./src/user.js",
  },
  output: {
    // добавляем хеш к названиям файлов js
    filename: "[name].[contenthash].js",
    // чтобы изобр-я из папки src сохранялись в отдельную папку в dist. Исодное назв-е изобр-я: хеш.расширение query-параметр
    assetModuleFilename: "assets/[hash][ext][query]",
    //чтобы при каждой компиляции папка dist очищалась и в неё добавлялись новые файлы
    clean: true,
  },
  devServer: {
    //опции открытия браузера и перезагрузки страницы при изменениях
    open: true,
    static: {
      directory: "./src",
      watch: true,
    },
  },
  //чтобы видеть карты  стилей в девтулсе браузера
  devtool: "source-map",
  //чтобы код из библиотеки jquery не попадал в каждый js-файл, применим оптимизацию. Код jquery быдет вынесен в отдельный файл и импортирован в каждый файл раздела entry
  //   optimization: {
  // включается в работу  splitChunkPlugin, который отвечает за дробление файлов
  //     splitChunks: {
  //       chunks: "all",
  //     },
  //   },
  plugins: [
    //плагины - это классы, поэтому объявляем экземпляры классов
    new MiniCssExtractPlugin({
      //доб-ем хеш к имени файла чтобы при каждой сборке назв-е файла было разное и новые стили грузились с сервера на клиент
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", //./src/index.pug если используем pug
    }),
  ],
  module: {
    rules: [
      //настройка лоадеров
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        //проверяет наличие в папке src файлов sass/scss/css. Если находит, передаёт их лоадерам
        test: /\.(sa|sc|c)ss$/,
        use: [
          // style-loader напрямую встраивает стили в head dom-дерева. MiniCssExtractPlugin.loader извлекает стили в отдельный файл папки dist
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    // в него по умолчанию включён postcss - autoprefixer, который добавляет стилям префиксы для поддержки более старых браузеров
                    // ориентируется на browserslist из package.json
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        //передает найденные изобр-я в папке src модулю ресурсов
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        //шрифты
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      //   {
      //     // шаблонизатор pug
      // npm i --save-dev pug pug-loader
      //     test: /\.pug$/,
      //     loader: "pug-loader",
      //     exclude: /(node_modules|bower_components)/,
      //   },
      {
        //поиск всех js-файлов и передача их на обработку бабель-лоадеру
        test: /\.m?js$/,
        // исключает папку node_modules из проверки
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //     presets: ['@babel/preset-env']
          // }
        },
      },
    ],
  },
};

// npm i jquery bootstrap @popperjs/core
// @popperjs/core - библиотека, позволяющая размещать всплывающие окна над элементами бутстрапа
