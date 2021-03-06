
var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
    devtool: 'eval',
    mode: 'development',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Player One',
            template: 'public/index.html',
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'html-loader',
          },
          {
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }]
    }
}