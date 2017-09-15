const path = require('path');
const createBabelConfig = require('./babelrc');
const nodeExternals = require('webpack-node-externals');

const webpack = require('webpack');
const MinifierPlugin = webpack.optimize.UglifyJsPlugin;

const PRODUCTION = process.env.NODE_ENV === 'production';

const filterFalsy = (arr) => arr.filter(e => e);

const createPlugins = ({ server } = {}) => filterFalsy([
  PRODUCTION && new MinifierPlugin(),

  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),

  server && new webpack.BannerPlugin({
    banner: 'require("source-map-support").install();',
    raw: true,
    entryOnly: false,
  }),
]);

const createModule = ({ server } = {}) => ({
  rules: [
    {
      test: /\.js$/,
      include: path.resolve('./src'),
      loader: 'babel-loader',
      query: createBabelConfig(server),
    }
  ]
});

const createExternals = ({ server } = {}) => filterFalsy([
  server && nodeExternals({
    whitelist: PRODUCTION ? [ 'react', 'react-dom/server' ] : []
  })
]);

const createDevTool = ({ server } = {}) =>
  PRODUCTION || server ? 'source-map' : 'cheap-module-eval-source-map';

const createBase = (options) => ({
  module: createModule(options),
  externals: createExternals(options),
  plugins: createPlugins(options),
  devtool: createDevTool(options),
});

const clientConfig = Object.assign({
  target: 'web',
  entry: path.resolve('./src/client.js'),
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  }
}, createBase({ server: false }));

const serverConfig = Object.assign({
  target: 'node',
  entry: path.resolve('./src/server.js'),
  output: {
    path: path.resolve('./dist'),
    filename: 'server.js',
  },
  node: {
    __dirname: true
  }
}, createBase({ server: true }));

module.exports = [
  clientConfig,
  serverConfig
];
