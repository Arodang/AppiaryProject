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
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	module.exports = __webpack_require__(17);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Ionic Starter App

	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	// 'starter.controllers' is found in controllers.js
	angular.module('starter', ['ionic', 'starter.controllers', 'apiary.apiaryList', 'apiary.apiary', 'apiary.hive', 'apiary.box', 'apiary.frame', 'apiary.mock', 'apiary.common', 'apiary.database']).run(function ($ionicPlatform) {
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
	    }).state('app.apiary', {
	        url: '/apiary/details/:apiaryId',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/apiary/apiary.html',
	                controller: 'ApiaryCtrl'
	            }
	        }
	    }).state('app.apiaryCreate', {
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
	    }).state('app.hiveCreate', {
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
	    }).state('app.boxCreate', {
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
	    }).state('app.frameCreate', {
	        url: '/frame/create',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/frame/frameCreate.html',
	                controller: 'FrameCreateCtrl'
	            }
	        }
	    });
	    // if none of the above states are matched, use this as the fallback
	    $urlRouterProvider.otherwise('/app/apiaryList');
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

	angular.module('apiary.apiaryList', []).controller('ApiaryListCtrl', function ($scope, $ionicModal, $timeout, ApiaryMockDataService) {

	    $scope.apiaryList = [];
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;
	    $scope.lastCreatedApiaryName = "";

	    $scope.$on('$ionicView.enter', function (e) {
	        $scope.apiaryList = ApiaryMockDataService.GetMockApiaryList();
	        $scope.lastCreatedApiaryName = ApiaryMockDataService.GetLastCreatedApiary();
	        setTimeout(function () {
	            $scope.$apply(function () {
	                $scope.lastCreatedApiaryName = "";
	            });
	        }, 3000);
	    });

	    $scope.deleteItem = function (apiaryId) {
	        if (ApiaryMockDataService.DeleteMockApiary(apiaryId)) {
	            console.log("Removed apiary #" + apiaryId);
	        } else {
	            console.log("Failed to remove apiary #" + apiaryId);
	        }
	    };
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	angular.module('apiary.apiary', []).controller('ApiaryCtrl', function ($scope, $stateParams, ApiaryMockDataService, HiveMockDataService) {
	    $scope.hiveList = [];
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;
	    $scope.lastCreatedHiveName = "";

	    $scope.$on('$ionicView.enter', function (e) {
	        var apiary = ApiaryMockDataService.GetMockApiary($stateParams.apiaryId);

	        $scope.apiary = apiary;

	        $scope.hiveList = HiveMockDataService.GetMockHiveList();
	        $scope.lastCreatedHiveName = HiveMockDataService.GetLastCreatedHive();
	        setTimeout(function () {
	            $scope.$apply(function () {
	                $scope.lastCreatedHiveName = "";
	            });
	        }, 3000);
	    });

	    $scope.deleteItem = function (hiveId) {
	        if (HiveMockDataService.DeleteMockHive(hiveId)) {
	            console.log("Removed hive #" + hiveId);
	        } else {
	            console.log("Failed to remove hive #" + hiveId);
	        }
	    };
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('apiary.apiary').controller('ApiaryCreateCtrl', function ($scope, $stateParams, ApiaryMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        //initialization
	        $scope.apiary = {};
	    });

	    $scope.createApiary = function () {
	        var apiary = $scope.apiary;
	        if ($scope.apiary) {
	            apiary = ApiaryMockDataService.CreateMockApiary(apiary);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	angular.module('apiary.mock', []).factory('ApiaryMockDataService', function (DatabaseTest) {
	    var apiaryList = [];
	    var lastCreatedApiary = "";

	    function generateAddressNumber() {
	        var min = 10;
	        var max = 500;
	        return Math.floor(Math.random() * (max - min) + min);
	    };

	    function generateMockApiaryList(numToGenerate) {
	        if (!numToGenerate) {
	            numToGenerate = 5;
	        }
	        for (var i = 1; i <= numToGenerate; i++) {
	            var apiary = {};
	            apiary.id = i;
	            apiary.name = "Apiary #" + i;
	            apiary.address = generateAddressNumber() + " Gleason Circle, Rochester, NY 14623";
	            apiary.description = "A healthy apiary with hives in it.";
	            apiaryList.push(apiary);
	        };
	    };

	    var getMockApiaryList = function () {
	        if (apiaryList.length == 0) {
	            generateMockApiaryList(15);
	        }
	        return apiaryList;
	    };

	    var getMockApiary = function (id) {
	        if (apiaryList.length == 0) {
	            generateMockApiaryList(15);
	        }
	        var index = apiaryList.findIndex(x => x.id == id);
	        return apiaryList[index];
	    };

	    var deleteMockApiary = function (id) {
	        var index = apiaryList.findIndex(x => x.id == id);
	        if (apiaryList.length == 0 || index == -1) {
	            return false;
	        }

	        apiaryList.splice(index, 1);
	        return true;
	    };

	    var createMockApiary = function (apiary) {
	        var maxId = 0;
	        for (var i = 0; i < apiaryList.length; i++) {
	            if (apiaryList[i].id > maxId) {
	                maxId = apiaryList[i].id;
	            }
	        }
	        apiary.id = maxId + 1;
	        apiaryList.push(apiary);
	        lastCreatedApiary = apiary.name;
	        return apiary;
	    };

	    var getLastCreatedApiary = function () {
	        var toReturn = lastCreatedApiary;
	        lastCreatedApiary = "";
	        return toReturn;
	    };

	    return {
	        GetMockApiaryList: getMockApiaryList,
	        GetMockApiary: getMockApiary,
	        DeleteMockApiary: deleteMockApiary,
	        CreateMockApiary: createMockApiary,
	        GetLastCreatedApiary: getLastCreatedApiary
	    };
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	angular.module('apiary.mock').factory('HiveMockDataService', function () {
	    var hiveList = [];
	    var lastCreatedHive = "";
	    var hiveTypes = ["Nuc", "Langstroth 10 Frame", "Langstrong 8 Frame", "Top Bar", "Warre", "National Standard"];

	    function generateHiveType() {
	        var min = 0;
	        var max = 5;
	        var rand = Math.floor(Math.random() * (max - min) + min);
	        return hiveTypes[rand];
	    };

	    function generateMockHiveList(numToGenerate) {
	        if (!numToGenerate) {
	            numToGenerate = 5;
	        }
	        for (var i = 1; i <= numToGenerate; i++) {
	            var hive = {};
	            hive.id = i;
	            hive.name = "Hive #" + i;
	            hive.hiveType = generateHiveType();
	            hive.position = "On the cement pad.";
	            hiveList.push(hive);
	        };
	    };

	    var getMockHiveList = function () {
	        if (hiveList.length == 0) {
	            generateMockHiveList(15);
	        }
	        return hiveList;
	    };

	    var getMockHive = function (id) {
	        if (hiveList.length == 0) {
	            generateMockHiveList(15);
	        }
	        var index = hiveList.findIndex(x => x.id == id);
	        return hiveList[index];
	    };

	    var deleteMockHive = function (id) {
	        var index = hiveList.findIndex(x => x.id == id);
	        if (hiveList.length == 0 || index == -1) {
	            return false;
	        }

	        hiveList.splice(index, 1);
	        return true;
	    };

	    var createMockHive = function (hive) {
	        var maxId = 0;
	        for (var i = 0; i < hiveList.length; i++) {
	            if (hiveList[i].id > maxId) {
	                maxId = hiveList[i].id;
	            }
	        }
	        hive.id = maxId + 1;
	        hiveList.push(hive);
	        lastCreatedHive = hive.name;
	        return hive;
	    };

	    var getLastCreatedHive = function () {
	        var toReturn = lastCreatedHive;
	        lastCreatedHive = "";
	        return toReturn;
	    };

	    var getHiveTypes = function () {
	        return hiveTypes;
	    };

	    return {
	        GetMockHiveList: getMockHiveList,
	        GetMockHive: getMockHive,
	        DeleteMockHive: deleteMockHive,
	        CreateMockHive: createMockHive,
	        GetLastCreatedHive: getLastCreatedHive,
	        GetHiveTypes: getHiveTypes
	    };
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	angular.module('apiary.mock').factory('BoxMockDataService', function () {
	    var boxList = [];
	    var lastCreatedBox = "";
	    var boxTypes = ["Shallow", "Medium", "Deep", "Feeder"];

	    function generateBoxType() {
	        var min = 0;
	        var max = 4;
	        var rand = Math.floor(Math.random() * (max - min) + min);
	        return boxTypes[rand];
	    };

	    function generateMockBoxList(numToGenerate) {
	        if (!numToGenerate) {
	            numToGenerate = 5;
	        }
	        for (var i = 1; i <= numToGenerate; i++) {
	            var box = {};
	            box.id = i;
	            box.name = "Box #" + i;
	            box.boxType = generateBoxType();
	            box.position = "Bottom 1";
	            boxList.push(box);
	        };
	    };

	    var getMockBoxList = function () {
	        if (boxList.length == 0) {
	            generateMockBoxList(15);
	        }
	        return boxList;
	    };

	    var getMockBox = function (id) {
	        if (boxList.length == 0) {
	            generateMockBoxList(15);
	        }
	        var index = boxList.findIndex(x => x.id == id);
	        return boxList[index];
	    };

	    var deleteMockBox = function (id) {
	        var index = boxList.findIndex(x => x.id == id);
	        if (boxList.length == 0 || index == -1) {
	            return false;
	        }

	        boxList.splice(index, 1);
	        return true;
	    };

	    var createMockBox = function (box) {
	        var maxId = 0;
	        for (var i = 0; i < boxList.length; i++) {
	            if (boxList[i].id > maxId) {
	                maxId = boxList[i].id;
	            }
	        }
	        box.id = maxId + 1;
	        boxList.push(box);
	        lastCreatedBox = box.name;
	        return box;
	    };

	    var getLastCreatedBox = function () {
	        var toReturn = lastCreatedBox;
	        lastCreatedBox = "";
	        return toReturn;
	    };

	    var getBoxTypes = function () {
	        return boxTypes;
	    };

	    return {
	        GetMockBoxList: getMockBoxList,
	        GetMockBox: getMockBox,
	        DeleteMockBox: deleteMockBox,
	        CreateMockBox: createMockBox,
	        GetLastCreatedBox: getLastCreatedBox,
	        GetBoxTypes: getBoxTypes
	    };
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	angular.module('apiary.mock').factory('FrameMockDataService', function () {
	    var frameList = [];
	    var lastCreatedFrame = "";

	    function generateMockFrameList(numToGenerate) {
	        if (!numToGenerate) {
	            numToGenerate = 5;
	        }
	        for (var i = 1; i <= numToGenerate; i++) {
	            var frame = {};
	            frame.id = i;
	            frame.position = i;
	            frame.isHaveFoundation = true;
	            frame.isFoundationPlastic = false;
	            frameList.push(frame);
	        };
	    };

	    var getMockFrameList = function () {
	        if (frameList.length == 0) {
	            generateMockFrameList(15);
	        }
	        return frameList;
	    };

	    var getMockFrame = function (id) {
	        if (frameList.length == 0) {
	            generateMockFrameList(15);
	        }
	        var index = frameList.findIndex(x => x.id == id);
	        return frameList[index];
	    };

	    var deleteMockFrame = function (id) {
	        var index = frameList.findIndex(x => x.id == id);
	        if (frameList.length == 0 || index == -1) {
	            return false;
	        }

	        frameList.splice(index, 1);
	        return true;
	    };

	    var createMockFrame = function (frame) {
	        var maxId = 0;
	        for (var i = 0; i < frameList.length; i++) {
	            if (frameList[i].id > maxId) {
	                maxId = frameList[i].id;
	            }
	        }
	        frame.id = maxId + 1;
	        frameList.push(frame);
	        lastCreatedFrame = frame.name;
	        return frame;
	    };

	    var getLastCreatedFrame = function () {
	        var toReturn = lastCreatedFrame;
	        lastCreatedFrame = "";
	        return toReturn;
	    };

	    var getFrameTypes = function () {
	        return frameTypes;
	    };

	    return {
	        GetMockFrameList: getMockFrameList,
	        GetMockFrame: getMockFrame,
	        DeleteMockFrame: deleteMockFrame,
	        CreateMockFrame: createMockFrame,
	        GetLastCreatedFrame: getLastCreatedFrame
	    };
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	angular.module('apiary.hive', []).controller('HiveCtrl', function ($scope, $stateParams, HiveMockDataService, BoxMockDataService) {
	    $scope.boxList = [];
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;
	    $scope.lastCreatedBoxName = "";

	    $scope.$on('$ionicView.enter', function (e) {
	        var hive = HiveMockDataService.GetMockHive($stateParams.hiveId);

	        $scope.hive = hive;

	        $scope.boxList = BoxMockDataService.GetMockBoxList();
	        $scope.lastCreatedBoxName = BoxMockDataService.GetLastCreatedBox();
	        setTimeout(function () {
	            $scope.$apply(function () {
	                $scope.lastCreatedBoxName = "";
	            });
	        }, 3000);
	    });

	    $scope.deleteItem = function (boxId) {
	        if (BoxMockDataService.DeleteMockBox(boxId)) {
	            console.log("Removed box #" + boxId);
	        } else {
	            console.log("Failed to remove box #" + boxId);
	        }
	    };
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	angular.module('apiary.hive').controller('HiveCreateCtrl', ['$scope', '$stateParams', 'HiveMockDataService', '$ionicHistory', function ($scope, $stateParams, HiveMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        //initialization
	        $scope.hive = {};
	        $scope.hiveTypeOptions = HiveMockDataService.GetHiveTypes();
	    });

	    $scope.createHive = function () {
	        var hive = $scope.hive;
	        if ($scope.hive) {
	            hive = HiveMockDataService.CreateMockHive(hive);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 12 */
/***/ function(module, exports) {

	angular.module('apiary.box', []).controller('BoxCtrl', function ($scope, $stateParams, BoxMockDataService, FrameMockDataService) {
	    $scope.frameList = [];
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;
	    $scope.lastCreatedFrameName = "";

	    $scope.$on('$ionicView.enter', function (e) {
	        var box = BoxMockDataService.GetMockBox($stateParams.boxId);

	        $scope.box = box;

	        $scope.frameList = FrameMockDataService.GetMockFrameList();
	        $scope.lastCreatedFrameName = FrameMockDataService.GetLastCreatedFrame();
	        setTimeout(function () {
	            $scope.$apply(function () {
	                $scope.lastCreatedFrameName = "";
	            });
	        }, 3000);
	    });

	    $scope.deleteItem = function (frameId) {
	        if (FrameMockDataService.DeleteMockFrame(frameId)) {
	            console.log("Removed frame #" + frameId);
	        } else {
	            console.log("Failed to remove frame #" + frameId);
	        }
	    };
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	angular.module('apiary.box').controller('BoxCreateCtrl', function ($scope, $stateParams, BoxMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        //initialization
	        $scope.box = {};
	        $scope.boxTypeOptions = BoxMockDataService.GetBoxTypes();
	    });

	    $scope.createBox = function () {
	        var box = $scope.box;
	        if ($scope.box) {
	            box = BoxMockDataService.CreateMockBox(box);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	angular.module('apiary.frame', []).controller('FrameCtrl', function ($scope, $stateParams, FrameMockDataService) {
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;

	    $scope.$on('$ionicView.enter', function (e) {
	        var frame = FrameMockDataService.GetMockFrame($stateParams.frameId);

	        $scope.frame = frame;
	    });
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	angular.module('apiary.frame').controller('FrameCreateCtrl', function ($scope, $stateParams, FrameMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        //initialization
	        $scope.frame = {};
	    });

	    $scope.createFrame = function () {
	        var frame = $scope.frame;
	        if ($scope.frame) {
	            frame = FrameMockDataService.CreateMockFrame(frame);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	angular.module('apiary.common', []).constant('googleLogin', {
	    'clientId': '1062484540187-9vkejq16ec2ladmu7cn0gk0cesj7dfla.apps.googleusercontent.com',
	    'clientSecret': 'iV3LwUqsaXlfddN5JbM_c7U5',
	    'redirectURL': 'http://localhost/appiary/www'
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	angular.module('apiary.database', []).factory('DatabaseTest', function () {
	    document.addEventListener('deviceready', function () {
	        console.log("TESTING SQL?");
	        window.sqlitePlugin.echoTest(function () {
	            console.log('ECHO test OK');
	        });

	        window.sqlitePlugin.selfTest(function () {
	            console.log('SELF test OK');
	        });

	        var db = window.sqlitePlugin.openDatabase({ name: 'test.db', location: 'default' });
	        db.transaction(function (tr) {
	            tr.executeSql("SELECT upper('Test string') AS upperString", [], function (tr, rs) {
	                console.log('Got upperString result: ' + rs.rows.item(0).upperString);
	            });
	        });

	        db.transaction(function (tr) {
	            tr.executeSql('SELECT upper(?) AS upperString', ['Test string'], function (tr, rs) {
	                console.log('Got upperString result: ' + rs.rows.item(0).upperString);
	            });
	        });
	    });
	    return true;
	});

/***/ }
/******/ ]);