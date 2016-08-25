"use strict";

module.exports = {
    entry: {
        app: ["./www/js/app", "./www/js/controllers", "./www/js/apiarylist/apiaryListController"]
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