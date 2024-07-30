const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/index.js',
        'header': './src/header.js',
        'music': './src/music.js',
        'stopwatch': './src/stopwatch.js',
        'loginSignUpPasswordReset': './src/loginSignUpPasswordReset.js'
    },
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};