// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
    'starter.controllers',
    'apiary.apiaryList',
    'apiary.apiary',
    'apiary.hive',
    'apiary.box',
    'apiary.frame',
    'apiary.mock'
])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })

    //APIARY
    .state('app.apiaryList', {
        url: '/apiaryList',
        views: {
            'menuContent': {
                templateUrl: 'templates/apiaryList/apiaryList.html',
                controller: 'ApiaryListCtrl'
            }
        }
    })
    .state('app.apiary', {
        url: '/apiary/details/:apiaryId',
        views: {
            'menuContent': {
                templateUrl: 'templates/apiary/apiary.html',
                controller: 'ApiaryCtrl'
            }
        }
    })
    .state('app.apiaryCreate', {
        url: '/apiary/create',
        views: {
            'menuContent': {
                templateUrl: 'templates/apiary/apiaryCreate.html',
                controller: 'ApiaryCreateCtrl'
            }
        }
    })

    //HIVE
    .state('app.hive', {
        url: '/hive/details/:hiveId',
        views: {
            'menuContent': {
                templateUrl: 'templates/hive/hive.html',
                controller: 'HiveCtrl'
            }
        }
    })
    .state('app.hiveCreate', {
        url: '/hive/create',
        views: {
            'menuContent': {
                templateUrl: 'templates/hive/hiveCreate.html',
                controller: 'HiveCreateCtrl'
            }
        }
    })

    //BOX
    .state('app.box', {
        url: '/box/details/:boxId',
        views: {
            'menuContent': {
                templateUrl: 'templates/box/box.html',
                controller: 'BoxCtrl'
            }
        }
    })
    .state('app.boxCreate', {
        url: '/box/create',
        views: {
            'menuContent': {
                templateUrl: 'templates/box/boxCreate.html',
                controller: 'BoxCreateCtrl'
            }
        }
    })

    //FRAME
    .state('app.frame', {
        url: '/frame/details/:frameId',
        views: {
            'menuContent': {
                templateUrl: 'templates/frame/frame.html',
                controller: 'FrameCtrl'
            }
        }
    })
    .state('app.frameCreate', {
        url: '/frame/create',
        views: {
            'menuContent': {
                templateUrl: 'templates/frame/frameCreate.html',
                controller: 'FrameCreateCtrl'
            }
        }
    })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/apiaryList');
});
