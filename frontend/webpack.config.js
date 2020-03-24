const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:5000'
            }
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, "src/"),
            loader: 'babel-loader',
            options: {
                presets: ["@babel/env", "@babel/react"],
                plugins: ["@babel/plugin-proposal-object-rest-spread"]
            }
        },{
            test: /\.scss$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, "src/"),
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    },
    output: {
        path: path.join(__dirname, 'build/'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Card Land',
          template: 'public/index.html',
        })
    ],
    mode: "development"
}   