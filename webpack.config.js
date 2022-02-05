const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//плагин очищающий директорию «dist» при каждой сборке проекта
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // установил настройки для режима разработки.
  // Для продакшна следует использовать MiniCssExtractPlugin вместо style-loader,
  // который экспортирует минифицированный CSS
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"), // шаблон. index.html из папки src
      filename: "index.html", // название выходного файла
    }),
    // применять изменения только при горячей перезагрузке
    // new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // CSS, PostCSS, Sass
      {
        test: /\.scss$/,
        // добавляем 4 загрузчика.
        // Загрузчики используются вебпаком справа налево,
        // так что последним должен быть sass-loader,
        // затем PostCSS, затем CSS и style-loader,
        // который применяет скомпилированные стили к элементам DOM
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },

      // изображения. url-loader
      // {
      //   test: /\.(jpg|png|gif)$/,
      //   include: /images/,
      //   loader: "url",
      // },
    ],
  },
};
