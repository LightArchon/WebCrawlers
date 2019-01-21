//vue.config.js
module.exports = {
  //选项
  publicPath: "./",
  outputDir: "../Server/dist",
  devServer: {
    proxy: {
      "/apis": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  }
};
