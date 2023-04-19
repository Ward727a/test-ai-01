const path = require('path');

const web = {
  target: 'web',
  entry: {
    'index': './src/index.ts',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      'gpu.js': path.resolve(__dirname, 'node_modules/gpu.js/dist/gpu-browser.js'),
    },
    extensions: ['.ts'],
  },
  output: {
    filename: 'index-browser.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};

const node = {
  ...web,
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  }
};

module.exports = [web, node];