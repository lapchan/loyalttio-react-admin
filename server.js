var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const config = window.config;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(config.serverPort, config.serverURL, function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Listening at "+config.serverURL+":"+config.serverPort);
});