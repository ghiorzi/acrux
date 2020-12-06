const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const catalog =  {
  entry: "./catalog/main",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist/catalog"),
    port: 3000
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
      publicPath: "http://localhost:3000/",
      uniqueName: 'catalog',
      path: path.join(__dirname, "dist/catalog"),
      filename: '[name].js'
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ],
  },  
  plugins: [
    new ModuleFederationPlugin({
      name: "catalog",
      library: { 
        type: "var",
        name: "catalog"
      },
      filename: "catalog.js",
      exposes: {
        "./page": "./catalog/src/features/catalog-page"
      },
    }),
    new HtmlWebpackPlugin({
      template: "./catalog/public/index.html"
    }),
  ]    
};

module.exports = catalog;