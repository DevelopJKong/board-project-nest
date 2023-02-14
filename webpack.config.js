const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const BASE_JS = './src/public/views/client/ts/';
const BASE_CSS = './src/public/views/client/scss/';

module.exports = {
  entry: {
    main: BASE_JS + 'main.ts',
    login: BASE_JS + 'login.ts',
    style: BASE_CSS + 'styles.scss',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'assets'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // 역순으로 적어주는 이유는 webpack이 역순으로 실행하기 때문이다
        exclude: /node_modules/,
      },
    ],
  },
};
