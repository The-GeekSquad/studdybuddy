const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/index.js',
        'header': './src/header.js',
        'loginSignUpPasswordReset': './src/loginSignUpPasswordReset.js',
        'flashcardCreator': './src/flashcardCreator.js',
        'flashcardManager': './src/flashcardManager.js',
        'flashcardReview': './src/flashcardReview.js',
        'flashcardQuiz': './src/flashcardQuiz.js',
        'xpbar': './src/xpbar.js'
    },
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '.env')
        }),
    ]
}