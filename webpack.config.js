const path = require("path");

module.exports = {
  entry: "./src/test.js", //웹팩 빌드할 파일
  output: {
    //정보를 통해 웹팩 빌드 파일 생성
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
  },
  mode: "none", //웹팩 옵션
};
