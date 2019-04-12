const webpack = require
('webpack'
)
const common = require
('./webpack.common.js'
)
const merge = require
('webpack-merge'
)
const path = require
('path'
)//source map = permet de lier une instruction à une ligne dans le fichier source (le navigateur peut afficher le code source et non le code transpilé) = outil pour débug
module.exports = merge(common, {
 devtool: 'inline-source-map'
,
 mode: 'development'
,//on rajoute le module d'auto reload
 plugins: [
 new webpack.HotModuleReplacementPlugin()
 ],
 output: {
 path: path.join(__dirname, 'public'),
 publicPath: '/'
,
 filename: '[name].[hash].js'
 },
 devServer: {
 contentBase: './public'
,
 hot: true
 }
})
