"use strict";

module.exports = {
    entry: {
        app: "./www/js/app.js",
        controllers: "./www/js/controllers.js"
    },
    output: {
        filename: "bundle.js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    }
};