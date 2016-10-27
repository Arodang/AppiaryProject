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
    'apiary.inspection',
    'apiary.mock',
    'apiary.common',
    'apiary.login',
    'apiary.authentication',
    'ngCordova',
    'ngCordovaOauth',
    'ngStorage',
    'ion-datetime-picker'
])

.run(function ($ionicPlatform, AuthenticationService, $rootScope, $state) {
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

        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            if (toState.data.authRequired && !AuthenticationService.IsAuthenticated()) {
                // User isn’t authenticated
                $state.go("app.login");
                event.preventDefault();
            }
        });
    });

})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl',
        data: { authRequired: false },
    })

    //LOGIN
    .state('app.login', {
        url: '/login',
        data: { authRequired: false },
        views: {
            'menuContent': {
                templateUrl: 'templates/login/login.html',
                controller: 'LoginCtrl'
            }
        }
    })

	//APIARY
	.state('app.apiaryList', {
	    url: '/apiaryList',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/apiarylist/apiaryList.html',
	            controller: 'ApiaryListCtrl'
	        }
	    }
	}).state('app.apiary', {
	    url: '/apiary/details/:apiaryId',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/apiary/apiary.html',
	            controller: 'ApiaryCtrl'
	        }
	    }
	}).state('app.apiaryCreate', {
	    url: '/apiary/create',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/apiary/apiaryCreate.html',
	            controller: 'ApiaryCreateCtrl'
	        }
	    }
	}).state('app.apiaryEdit', {
	    url: '/apiary/edit/:apiaryId',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/apiary/apiaryEdit.html',
	            controller: 'ApiaryEditCtrl'
	        }
	    }
	})

	//HIVE
	.state('app.hive', {
	    url: '/hive/details/:hiveId',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/hive/hive.html',
	            controller: 'HiveCtrl'
	        }
	    }
	}).state('app.hiveCreate', {
	    url: '/hive/create',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/hive/hiveCreate.html',
	            controller: 'HiveCreateCtrl'
	        }
	    }
	}).state('app.hiveEdit', {
	    url: '/hive/edit/:hiveId',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/hive/hiveEdit.html',
	            controller: 'HiveEditCtrl'
	        }
	    }
	})

	//BOX
	.state('app.box', {
	    url: '/box/details/:boxId',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/box/box.html',
	            controller: 'BoxCtrl'
	        }
	    }
	}).state('app.boxCreate', {
	    url: '/box/create',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/box/boxCreate.html',
	            controller: 'BoxCreateCtrl'
	        }
	    }
	}).state('app.boxEdit', {
	    url: '/box/edit/:boxId',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/box/boxEdit.html',
	            controller: 'BoxEditCtrl'
	        }
	    }
	})

	//FRAME
	.state('app.frame', {
	    url: '/frame/details/:frameId',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/frame/frame.html',
	            controller: 'FrameCtrl'
	        }
	    }
	}).state('app.frameCreate', {
	    url: '/frame/create',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/frame/frameCreate.html',
	            controller: 'FrameCreateCtrl'
	        }
	    }
	}).state('app.frameEdit', {
	    url: '/frame/edit/:frameId',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/frame/frameEdit.html',
	            controller: 'FrameEditCtrl'
	        }
	    }
	})

    //INSPECTION
    .state('app.inspection', {
	    url: '/inspection/:hiveId',
	    data: { authRequired: true },
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/inspection/inspection.html',
	            controller: 'InspectionCtrl'
	        }
	    }
	})


    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise(function ($injector) {
        var authService = $injector.get("AuthenticationService");
        return authService.IsAuthenticated() ? '/app/apiaryList' : '/app/login';
    });
});
