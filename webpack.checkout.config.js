const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const checkout =  {
  entry: "./checkout/client/main",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist/checkout"),
    port: 3001
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
      publicPath: "http://localhost:3001/",
      uniqueName: 'checkout',
      path: path.join(__dirname, "dist/checkout"),
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
      name: "checkout",
      library: { 
        type: "var",
        name: "checkout"
      },
      filename: "checkout.js",
      exposes: {
        "./basket": "./checkout/client/src/basket/checkout-basket"
      },
    }),
    new HtmlWebpackPlugin({
      template: "./checkout/client/public/index.html"
    }),
  ]    
};

module.exports = checkout;