/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Ionic Starter App

	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	// 'starter.controllers' is found in controllers.js
	angular.module('starter', ['ionic', 'starter.controllers']).run(function ($ionicPlatform) {
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
	}).config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('app', {
	        url: '/app',
	        abstract: true,
	        templateUrl: 'templates/menu.html',
	        controller: 'AppCtrl'
	    }).state('app.search', {
	        url: '/search',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/search.html'
	            }
	        }
	    }).state('app.browse', {
	        url: '/browse',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/browse.html'
	            }
	        }
	    }).state('app.playlists', {
	        url: '/playlists',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/playlists.html',
	                controller: 'PlaylistsCtrl'
	            }
	        }
	    }).state('app.single', {
	        url: '/playlists/:playlistId',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/playlist.html',
	                controller: 'PlaylistCtrl'
	            }
	        }
	    }).state('app.apiaryList', {
	        url: '/apiaryList',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/apiaryList/apiaryList.html',
	                controller: 'ApiaryListCtrl'
	            }
	        }
	    });
	    // if none of the above states are matched, use this as the fallback
	    $urlRouterProvider.otherwise('/app/playlists');
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	angular.module('starter.controllers', []).controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

	  // With the new view caching in Ionic, Controllers are only called
	  // when they are recreated or on app start, instead of every page change.
	  // To listen for when this page is active (for example, to refresh data),
	  // listen for the $ionicView.enter event:
	  //$scope.$on('$ionicView.enter', function(e) {
	  //});

	  // Form data for the login modal
	  $scope.loginData = {};
	  //test
	  // Create the login modal that we will use later
	  $ionicModal.fromTemplateUrl('templates/login.html', {
	    scope: $scope
	  }).then(function (modal) {
	    $scope.modal = modal;
	  });

	  // Triggered in the login modal to close it
	  $scope.closeLogin = function () {
	    $scope.modal.hide();
	  };

	  // Open the login modal
	  $scope.login = function () {
	    $scope.modal.show();
	  };

	  // Perform the login action when the user submits the login form
	  $scope.doLogin = function () {
	    console.log('Doing login', $scope.loginData);

	    // Simulate a login delay. Remove this and replace with your login
	    // code if using a login system
	    $timeout(function () {
	      $scope.closeLogin();
	    }, 1000);
	  };
	}).controller('PlaylistsCtrl', function ($scope) {
	  $scope.playlists = [{ title: 'Reggae', id: 1 }, { title: 'Chill', id: 2 }, { title: 'Dubstep', id: 3 }, { title: 'Indie', id: 4 }, { title: 'Rap', id: 5 }, { title: 'Cowbell', id: 6 }];
	}).controller('PlaylistCtrl', function ($scope, $stateParams) {});

/***/ },
/* 3 */
/***/ function(module, exports) {

	angular.module('starter.controllers').controller('ApiaryListCtrl', function ($scope, $ionicModal, $timeout) {

	  //test//
	});

/***/ }
/******/ ]);