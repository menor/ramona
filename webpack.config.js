const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event;


const PATHS = {
  src: path.join(__dirname, 'src', 'js'),
  build: path.join(__dirname, 'build')
};

const common = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    src: PATHS.src
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'app.js'
  }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      devtool: 'eval-source-map',

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      progress: true,
      hot: true,
      inline: true,
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './src/assets/index.html',
        favicon: './src/assets/favicon.ico'
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
