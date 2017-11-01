var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(window.config.serverPort, window.config.serverURL, function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Listening at "+window.config.serverURL+":"+window.config.serverPort);
});