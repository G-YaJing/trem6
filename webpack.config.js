const path = require('path');
const webpack = require('webpack');
const ExtTextWebPlugin = require('extract-text-webpack-plugin');
const ExtCssPlugin = new ExtTextWebPlugin('style.css');
const extSassPlugin = new ExtTextWebPlugin('scss.css');
const htmlWeb = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const Uglifyjs = require('uglifyjs-webpack-plugin');
let config = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/main.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[hash].js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtCssPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader"]
            })
        }, {
            test: /\.js$/,
            include: /src/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }]
        }, {
            test: /\.sass$/,
            use: extSassPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }, {
            test: /\.(png|gif|jpg|svg)/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 6000
                }
            }]
        }, {
            test: /\.(eot|ttf|woff|woff2)/,
            use: ["url-loader"]
        }, {
            test: /\.vue/,
            loader: "vue-loader"
        }]
    },
    devServer: {
        port: 9000,
        open: true,
        hot: true,
        host: "localhost"
    },
    plugins: [
        new htmlWeb({
            template: path.resolve(__dirname, './index.html'),
            filename: "index.html"
        }),
        new cleanPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new Uglifyjs(),
        extSassPlugin,
        ExtCssPlugin
    ],
    resolve: {
        extensions: ['.js', '.css', '.scss', '.png'],
        alias: {
            "@": path.resolve(__dirname, './src'),
            "@css": path.resolve(__dirname, './src/css'),
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    devtool: "source-map"
}
module.exports = config;