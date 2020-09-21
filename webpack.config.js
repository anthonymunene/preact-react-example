const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
//config

module.exports = {

    externals: {
      'react': 'React',
      'react-dom' : 'ReactDOM'
    },
    entry: {
        'app': path.join(__dirname, 'index.js'),
    },
    optimization: {
        moduleIds: 'named',
        noEmitOnErrors: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'app-vendor',
                    chunks: 'all',
                },
            },
        },
    },
    resolve: {
        alias: {
            "react": "preact/compat",
            "react-dom": "preact/compat",
          }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        path: path.join(__dirname, '../public'),
        filename: '[name].[hash:4].js',
        chunkFilename: '[name]-chunk.[hash:4].js'
    },
    plugins: [
        // new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',

            inject: true,
            minify: {
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyJS: false
            }
        }),
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
        open: true
      }
};
