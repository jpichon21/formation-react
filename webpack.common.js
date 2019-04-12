const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
 entry: {
 main: './src/index.js'
 },
 module: {
 rules: [
 { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
 { test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader'] },
 { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/, use: ['file-loader'] }
 ]
 },
 resolve: {
 extensions: ['*', '.js', '.jsx']
 },
 plugins: [
 new webpack.ProvidePlugin({
 'React': 'react'
 }),
 new HTMLPlugin({
 title: 'MyApp',
 hash: true,
 template: 'src/index.html'
 })
 ]
}