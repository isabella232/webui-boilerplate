const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    compress: true,
    port: 9002
  },
  entry: {
    bundle: path.join(path.join(__dirname, 'src'), 'brave_feature')
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.json'],
    alias: {
      'brave-ui': path.resolve(__dirname, 'node_modules/brave-ui/src')
    },
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
      path.join(__dirname, 'assets')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'brave_feature.html'),
      filename: path.join(__dirname, 'dist', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=13000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|ico|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }]
  },
  node: {
    fs: 'empty'
  }
}
