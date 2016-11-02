"use strict";

module.exports = {
    entry: {
        app: ["./www/js/app",
            "./www/js/controllers",
            "./www/js/apiarylist/apiaryListController",
            "./www/js/apiary/apiaryController",
            "./www/js/apiary/apiaryCreateController",
            './www/js/apiary/apiaryEditController',
            './www/js/mocks/apiaryMocksService',
            './www/js/mocks/hiveMocksService',
            './www/js/mocks/boxMocksService',
            './www/js/mocks/frameMocksService',
            './www/js/mocks/inspectionMocksService',
            './www/js/hive/hiveController',
            './www/js/hive/hiveCreateController',
            './www/js/hive/hiveEditController',
            './www/js/box/boxController',
            './www/js/box/boxCreateController',
            './www/js/box/boxEditController',
            './www/js/frame/frameController',
            './www/js/frame/frameCreateController',
            './www/js/frame/frameEditController',
            './www/js/common/constants',
            './www/js/common/polyfill',
            './www/js/localdatabase/databaseTest',
            './www/js/login/loginController',
            './www/js/authentication/authenticationService',
            './www/js/inspection/inspectionController',
            './www/js/inspection/inspectionBoxesController',
            './www/js/inspection/inspectionBoxController',
            './www/js/inspection/inspectionActionsController',
            './www/js/inspection/inspectionConclusionController'
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