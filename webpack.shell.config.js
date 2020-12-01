const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const shell = {
  entry: [
    "./shell/main",
  ],
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist/shell"),
    port: 5000
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
  resolve: {
    extensions: [ '.ts', '.js' ],
  },  
  output: {
    publicPath: "http://localhost:5000/",
    uniqueName: 'shell',
    path: path.join(__dirname, "dist/shell"),
    filename: '[name].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remoteType: 'var',
      library: { 
        type: "var",
        name: "shell"
      },
      remotes: {
        catalog: "catalog",
        layout: "layout"
      },
    }),
    new HtmlWebpackPlugin({
      template: "./shell/public/index.html"
    })
  ]
};

module.exports = shell;