const common = require
('./webpack.common.js'
)
const merge = require
('webpack-merge'
)
const path = require
('path'
)
const webpack = require
('webpack'
)
const CleanWebpackPlugin = require
('clean-webpack-plugin'
)
const UglifyJSPlugin = require
('uglifyjs-webpack-plugin'
)
module.exports = merge(common, {
 mode: 'production'
,
 output: {
 path: path.join(__dirname, 'dist'),
 publicPath: '/'
,
 filename: '[name].[chunkhash].js'
 },
 devtool: 'source-map'
,
 plugins: [
 new CleanWebpackPlugin(['dist']),
 new webpack.DefinePlugin({
 'process.env.NODE_ENV': JSON.stringify('production'
)
 }),
 new UglifyJSPlugin({
 sourceMap: true
 })
 ]
})