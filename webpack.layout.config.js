const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const layout =  {
  entry: "./layout/main",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist/layout"),
    port: 3002
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', 
            options: {
              importLoaders: 1,
            }
          },
        ],
    },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },        
    ],
  },    
  output: {
      publicPath: "http://localhost:3002/",
      uniqueName: 'layout',
      path: path.join(__dirname, "dist/layout"),
      filename: '[name].js'
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ],
  },  
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "layout",
      library: { 
        type: "var",
        name: "layout"
      },
      filename: "layout.js",
      exposes: {
        "./page": "./layout/src/layout-page"
      },
      remotes: {
        checkout: "checkout"
      },
    }),
    new HtmlWebpackPlugin({
      template: "./layout/public/index.html"
    }),
  ]    
};

module.exports = layout;