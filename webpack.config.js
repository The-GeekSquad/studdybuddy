const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/index.js',
        'header': './src/header.js',
        'loginSignUpPasswordReset': './src/loginSignUpPasswordReset.js',
        'flashcardCreator': './src/flashcardCreator.js',
        'flashcardManager': './src/flashcardManager.js',
        'flashcardReview': './src/flashcardReview.js'
    },
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};