const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: './front/src/index.html',
  filename:'./index.html'
})

module.exports = {
  mode: 'development',
  entry: './front/src/index.js',
  output: {
    filename: "bundle.js",
    path: __dirname + '/back/src/public'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',

      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          'css-loader',
        ],
      },
    ]
  },
  devtool: 'source-map',
  plugins: [htmlPlugin]
}
