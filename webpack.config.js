//Konfiguracja Webpack
const path = require("path");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./js/script.jsx",
    output: {
        path: path.resolve("js"),
        filename: "out.js"
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 8999
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },  {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader','sass-loader']
            })
        },{
            test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
            use:{
                loader: 'url-loader'
            }
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../css/style.css',
            disable: false,
            allChunks: true
        })
    ]
}