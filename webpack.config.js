const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const autoprefixer = require('autoprefixer');

module.exports = {

  devtool: 'source-map',

  entry: {
    app: [
      path.join(__dirname, './client/index.js'),
    ],
    //vendor: ['react', 'react-dom']
  },

  output: {
    path: path.join(__dirname, '/public/dist/'),
    filename: '[name].js',
    publicPath: './',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.json',],
    modules: ['client', 'node_modules']
  },

  module: {

    loaders: [
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
          ]
        })
      },
      {
        test: /\.json$/,
        use: [{
          loader: 'json-loader',
        }]
      },
    ],

  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      warnings: false,
    }),

    new ExtractTextPlugin("styles.css"),

    new HtmlWebpackPlugin({
      template: 'client/index.template.html',
      inject: 'body',
      filename: 'index.html'
    }),

  ],
};

/*
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      */



