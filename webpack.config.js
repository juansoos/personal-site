const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const tinyPngWebpackPlugin = require('tinypng-webpack-plugin');
const webpack = require('webpack');


module.exports = env => {
  const plugins = [
    new ExtractTextPlugin("css/[name].css"),
  ];

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin([
        'dist'
      ],{
        root: __dirname,
      }),
    )
  }

  return {
    entry: {
      home: path.resolve(__dirname, 'src/entries/home.jsx'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              },
            ]
          })
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                fallback: 'file-loader',
                name: "images/[name].[hash].[ext]",
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins
  }
}