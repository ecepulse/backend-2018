/**
 * Created by rahul_ram on 10/28/17.
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server',
        'bootstrap-loader',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader?browsers=last 3 versions',
                    'sass-loader?outputStyle=expanded'
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports-loader?jQuery=jquery'
            }
            //TODO: Probably should add modules for production for deployed code
            ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //TODO: Build a cleaner plugin
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:3000'
        }
    }
};