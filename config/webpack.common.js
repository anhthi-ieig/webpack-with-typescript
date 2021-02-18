const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//
// ────────────────────────────────────────────────── I ──────────
//   :::::: R U L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

const processTypescript = {
    test: /\.tsx?$/,
    use: ['ts-loader', 'babel-loader'],
    exclude: /node_modules/
};

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: P L U G I N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

const buildIndexHtml = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html'),
});


module.exports = {
    entry: path.resolve(__dirname, '../src/render.tsx'),
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    module: {
        rules: [
            processTypescript,
        ]
    },
    plugins: [
        buildIndexHtml,
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}