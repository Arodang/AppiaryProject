"use strict";

module.exports = {
    entry: {
        app: ["./www/js/app",
            "./www/js/controllers",
            "./www/js/apiarylist/apiaryListController",
            "./www/js/apiary/apiaryController",
            "./www/js/apiary/apiaryCreateController",
            './www/js/mocks/apiaryMocksService',
            './www/js/mocks/hiveMocksService'
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