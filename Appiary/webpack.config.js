"use strict";

module.exports = {
    entry: {
        app: ["./www/js/app", "./www/js/controllers",
            "./www/js/apiarylist/apiaryListController",
            "./www/js/common/goClickDirective",
            "./www/js/apiary/apiaryController",
            './www/js/mocks/apiaryMocksService'
        ]
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