"use strict";

module.exports = {
    entry: {
        app: ["./www/js/app",
            "./www/js/controllers",
            "./www/js/apiarylist/apiaryListController",
            "./www/js/apiary/apiaryController",
            "./www/js/apiary/apiaryCreateController",
            './www/js/mocks/apiaryMocksService',
            './www/js/mocks/hiveMocksService',
            './www/js/mocks/boxMocksService',
            './www/js/mocks/frameMocksService',
            './www/js/hive/hiveController',
            './www/js/hive/hiveCreateController',
            './www/js/box/boxController',
            './www/js/box/boxCreateController',
            './www/js/frame/frameController',
            './www/js/frame/frameCreateController',
            './www/js/common/constants',
            './www/js/localdatabase/databaseTest'
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