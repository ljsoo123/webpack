const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");
module.exports = {
  entry: "./src/index.js", //웹팩 빌드할 파일
  output: {
    //정보를 통해 웹팩 빌드 파일 생성
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
  },
  mode: "none", //웹팩 옵션
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", //이 파일을 읽는다
      filename: "index.html", //output으로 출력할 파일
    }),
    new dotenv(),
  ],
};
