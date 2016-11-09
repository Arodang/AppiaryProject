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
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	module.exports = __webpack_require__(30);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Ionic Starter App

	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	// 'starter.controllers' is found in controllers.js
	angular.module('starter', ['ionic', 'starter.controllers', 'apiary.apiaryList', 'apiary.apiary', 'apiary.hive', 'apiary.box', 'apiary.frame', 'apiary.inspection', 'apiary.mock', 'apiary.common', 'apiary.login', 'apiary.authentication', 'ngCordova', 'ngCordovaOauth', 'ngStorage', 'ion-datetime-picker']).run(function ($ionicPlatform, AuthenticationService, $rootScope, $state) {
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
																	// User isn�t authenticated
																	$state.go("app.login");
																	event.preventDefault();
													}
									});
					});
	}).config(function ($stateProvider, $urlRouterProvider) {
					$stateProvider.state('app', {
									url: '/app',
									abstract: true,
									templateUrl: 'templates/menu.html',
									controller: 'MenuCtrl',
									data: { authRequired: false }
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
					}).state('app.inspectionBoxes', {
									url: '/inspection/boxes/:hiveId',
									data: { authRequired: true },
									views: {
													'menuContent': {
																	templateUrl: 'templates/inspection/inspectionBoxes.html',
																	controller: 'InspectionBoxesCtrl'
													}
									}
					}).state('app.inspectionBox', {
									url: '/inspection/box/:boxId',
									data: { authRequired: true },
									views: {
													'menuContent': {
																	templateUrl: 'templates/inspection/inspectionBox.html',
																	controller: 'InspectionBoxCtrl'
													}
									}
					}).state('app.inspectionActions', {
									url: '/inspection/actions',
									data: { authRequired: true },
									views: {
													'menuContent': {
																	templateUrl: 'templates/inspection/inspectionActions.html',
																	controller: 'InspectionActionsCtrl'
													}
									}
					}).state('app.inspectionConclusion', {
									url: '/inspection/conclusion',
									data: { authRequired: true },
									views: {
													'menuContent': {
																	templateUrl: 'templates/inspection/inspectionConclusion.html',
																	controller: 'InspectionConclusionCtrl'
													}
									}
					});
					// if none of the above states are matched, use this as the fallback
					$urlRouterProvider.otherwise(function ($injector) {
									var authService = $injector.get("AuthenticationService");
									return authService.IsAuthenticated() ? '/app/apiaryList' : '/app/login';
					});
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	angular.module('starter.controllers', []).controller('MenuCtrl', function ($scope, $ionicModal, $timeout, AuthenticationService) {
	    $scope.isAuthenticated = AuthenticationService.IsAuthenticated();

	    $scope.logout = function () {
	        AuthenticationService.LogOut();
	        //If URL link doesn't call this properly, try $state.go('app.login')
	    };
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	angular.module('apiary.apiaryList', []).controller('ApiaryListCtrl', ['$scope', '$timeout', 'ApiaryMockDataService', function ($scope, $timeout, ApiaryMockDataService) {

	    $scope.apiaryList = [];
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;
	    $scope.lastCreatedApiaryName = "";

	    $scope.$on('$ionicView.enter', function (e) {
	        $scope.apiaryList = ApiaryMockDataService.GetApiaryList();
	        $scope.lastCreatedApiaryName = ApiaryMockDataService.GetLastCreatedApiary();
	        setTimeout(function () {
	            $scope.$apply(function () {
	                $scope.lastCreatedApiaryName = "";
	            });
	        }, 3000);
	    });

	    $scope.deleteItem = function (apiaryId) {
	        if (ApiaryMockDataService.GetApiary(apiaryId)) {
	            console.log("Removed apiary #" + apiaryId);
	        } else {
	            console.log("Failed to remove apiary #" + apiaryId);
	        }
	    };
	}]);

/***/ },
/* 4 */
/***/ function(module, exports) {

	angular.module('apiary.apiary', []).controller('ApiaryCtrl', ['$scope', '$stateParams', 'ApiaryMockDataService', 'HiveMockDataService', function ($scope, $stateParams, ApiaryMockDataService, HiveMockDataService) {
	    $scope.hiveList = [];
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;
	    $scope.lastCreatedHiveName = "";

	    $scope.$on('$ionicView.enter', function (e) {
	        var apiary = ApiaryMockDataService.GetApiary($stateParams.apiaryId);

	        $scope.apiary = apiary;

	        $scope.hiveList = HiveMockDataService.GetHiveList();
	        $scope.lastCreatedHiveName = HiveMockDataService.GetLastCreatedHive();
	        setTimeout(function () {
	            $scope.$apply(function () {
	                $scope.lastCreatedHiveName = "";
	            });
	        }, 3000);
	    });

	    $scope.deleteItem = function (hiveId) {
	        if (HiveMockDataService.GetHive(hiveId)) {
	            console.log("Removed hive #" + hiveId);
	        } else {
	            console.log("Failed to remove hive #" + hiveId);
	        }
	    };
	}]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('apiary.apiary').controller('ApiaryCreateCtrl', ['$scope', '$stateParams', 'ApiaryMockDataService', '$ionicHistory', function ($scope, $stateParams, ApiaryMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        //initialization
	        $scope.apiary = {};
	    });

	    $scope.createApiary = function () {
	        var apiary = $scope.apiary;
	        if ($scope.apiary) {
	            apiary = ApiaryMockDataService.GetApiary(apiary);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 6 */
/***/ function(module, exports) {

	angular.module('apiary.apiary').controller('ApiaryEditCtrl', ['$scope', '$stateParams', 'ApiaryMockDataService', '$ionicHistory', function ($scope, $stateParams, ApiaryMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        var apiary = ApiaryMockDataService.GetApiary($stateParams.apiaryId);

	        $scope.apiary = apiary;
	    });

	    $scope.saveApiary = function () {
	        var apiary = $scope.apiary;
	        if ($scope.apiary) {
	            apiary = ApiaryMockDataService.EditApiary(apiary);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 7 */
/***/ function(module, exports) {

	angular.module('apiary.mock', []).factory('ApiaryMockDataService', ['Polyfill', function (Polyfill) {
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
	        var index = Polyfill.GetIndexById(apiaryList, id);
	        return apiaryList[index];
	    };

	    var deleteMockApiary = function (id) {
	        var index = Polyfill.GetIndexById(apiaryList, id);
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

	    var editMockApiary = function (apiary) {
	        for (var i = 0; i < apiaryList.length; i++) {
	            if (apiaryList[i].id == apiary.id) {
	                apiaryList[i] = apiary;
	                break;
	            }
	        }
	    };

	    var getLastCreatedApiary = function () {
	        var toReturn = lastCreatedApiary;
	        lastCreatedApiary = "";
	        return toReturn;
	    };

	    return {
	        GetApiaryList: getMockApiaryList,
	        GetApiary: getMockApiary,
	        DeleteApiary: deleteMockApiary,
	        CreateApiary: createMockApiary,
	        GetLastCreatedApiary: getLastCreatedApiary,
	        EditApiary: editMockApiary
	    };
	}]);

/***/ },
/* 8 */
/***/ function(module, exports) {

	angular.module('apiary.mock').factory('HiveMockDataService', ['Polyfill', function (Polyfill) {
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
	        var index = Polyfill.GetIndexById(hiveList, id);
	        return hiveList[index];
	    };

	    var deleteMockHive = function (id) {
	        var index = Polyfill.GetIndexById(hiveList, id);
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

	    var editMockHive = function (hive) {
	        for (var i = 0; i < hiveList.length; i++) {
	            if (hiveList[i].id == hive.id) {
	                hiveList[i] = hive;
	                break;
	            }
	        }
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
	        GetHiveList: getMockHiveList,
	        GetHive: getMockHive,
	        DeleteHive: deleteMockHive,
	        CreateHive: createMockHive,
	        GetLastCreatedHive: getLastCreatedHive,
	        GetHiveTypes: getHiveTypes,
	        EditHive: editMockHive
	    };
	}]);

/***/ },
/* 9 */
/***/ function(module, exports) {

	angular.module('apiary.mock').factory('BoxMockDataService', ['Polyfill', function (Polyfill) {
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
	        var index = Polyfill.GetIndexById(boxList, id);
	        return boxList[index];
	    };

	    var deleteMockBox = function (id) {
	        var index = Polyfill.GetIndexById(boxList, id);
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

	    var editMockBox = function (box) {
	        for (var i = 0; i < boxList.length; i++) {
	            if (boxList[i].id == box.id) {
	                boxList[i] = box;
	                break;
	            }
	        }
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
	        GetBoxList: getMockBoxList,
	        GetBox: getMockBox,
	        DeleteBox: deleteMockBox,
	        CreateBox: createMockBox,
	        GetLastCreatedBox: getLastCreatedBox,
	        GetBoxTypes: getBoxTypes,
	        EditBox: editMockBox
	    };
	}]);

/***/ },
/* 10 */
/***/ function(module, exports) {

	angular.module('apiary.mock').factory('FrameMockDataService', ['Polyfill', function (Polyfill) {
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
	        var index = Polyfill.GetIndexById(frameList, id);
	        return frameList[index];
	    };

	    var deleteMockFrame = function (id) {
	        var index = Polyfill.GetIndexById(frameList, id);
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

	    var editMockFrame = function (frame) {
	        for (var i = 0; i < frameList.length; i++) {
	            if (frameList[i].id == frame.id) {
	                frameList[i] = frame;
	                break;
	            }
	        }
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
	        GetFrameList: getMockFrameList,
	        GetFrame: getMockFrame,
	        DeleteFrame: deleteMockFrame,
	        CreateFrame: createMockFrame,
	        GetLastCreatedFrame: getLastCreatedFrame,
	        EditFrame: editMockFrame
	    };
	}]);

/***/ },
/* 11 */
/***/ function(module, exports) {

	angular.module('apiary.mock').factory('InspectionMockDataService', ['AuthenticationService', function (AuthenticationService) {
	    var currentInspection = {};

	    function resetInspection() {
	        currentInspection = {
	            inspection: {},
	            hiveId: 0,
	            boxInspections: {},
	            inspectionActions: {},
	            inspectionConclusion: {}
	        };
	    };

	    var saveInspection = function (inspection) {
	        currentInspection.inspection = inspection;
	        currentInspection.hiveId = inspection.hiveId;
	    };

	    var saveInspectionBox = function (boxInspection) {
	        currentInspection.boxInspections[boxInspection.boxId] = boxInspection;
	    };

	    var saveInspectionActions = function (inspectionActions) {
	        currentInspection.inspectionActions = inspectionActions;
	    };

	    var saveInspectionConclusion = function (inspectionConclusion) {
	        currentInspection.inspectionConclusion = inspectionConclusion;
	        saveInspectionToServer();
	    };

	    var getHiveId = function () {
	        return currentInspection.hiveId;
	    };

	    function saveInspectionToServer() {
	        console.log("Current Inspection: ");
	        console.log(JSON.stringify(currentInspection));

	        //Happy path, assume user exists and is authenticated since we were able to load this page
	        var user = AuthenticationService.GetUserAndAccessToken();

	        var inspectionStart = currentInspection.inspection;

	        var boxInspections = [];
	        Object.keys(currentInspection.boxInspections).forEach(function (key, index) {
	            boxInspections.push(currentInspection.boxInspections[key]);
	        });

	        var inspection = {
	            inspectionStart: currentInspection.inspection,
	            inspectionActions: currentInspection.inspectionActions,
	            inspectionConclusion: currentInspection.inspectionConclusion,
	            boxInspections: boxInspections,
	            UserId: user.userId,
	            AccessToken: user.accessToken
	        };

	        console.log("Formatted Inspection: ");
	        console.log(JSON.stringify(inspection));

	        //Save inspection to server
	        //Clear current inspection
	        resetInspection();
	    };

	    resetInspection();

	    return {
	        SaveInspection: saveInspection,
	        SaveInspectionBox: saveInspectionBox,
	        SaveInspectionActions: saveInspectionActions,
	        SaveInspectionConclusion: saveInspectionConclusion,
	        GetHiveId: getHiveId
	    };
	}]);

/***/ },
/* 12 */
/***/ function(module, exports) {

	angular.module('apiary.hive', []).controller('HiveCtrl', ['$scope', '$stateParams', 'HiveMockDataService', 'BoxMockDataService', function ($scope, $stateParams, HiveMockDataService, BoxMockDataService) {
	    $scope.boxList = [];
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;
	    $scope.lastCreatedBoxName = "";

	    $scope.$on('$ionicView.enter', function (e) {
	        var hive = HiveMockDataService.GetHive($stateParams.hiveId);

	        $scope.hive = hive;

	        $scope.boxList = BoxMockDataService.GetBoxList();
	        $scope.lastCreatedBoxName = BoxMockDataService.GetLastCreatedBox();
	        setTimeout(function () {
	            $scope.$apply(function () {
	                $scope.lastCreatedBoxName = "";
	            });
	        }, 3000);
	    });

	    $scope.deleteItem = function (boxId) {
	        if (BoxMockDataService.GetBox(boxId)) {
	            console.log("Removed box #" + boxId);
	        } else {
	            console.log("Failed to remove box #" + boxId);
	        }
	    };
	}]);

/***/ },
/* 13 */
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
	            hive = HiveMockDataService.GetHive(hive);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 14 */
/***/ function(module, exports) {

	angular.module('apiary.hive').controller('HiveEditCtrl', ['$scope', '$stateParams', 'HiveMockDataService', '$ionicHistory', function ($scope, $stateParams, HiveMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        var hive = HiveMockDataService.GetHive($stateParams.hiveId);

	        $scope.hive = hive;
	    });

	    $scope.saveHive = function () {
	        var hive = $scope.hive;
	        if ($scope.hive) {
	            hive = HiveMockDataService.EditHive(hive);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 15 */
/***/ function(module, exports) {

	angular.module('apiary.box', []).controller('BoxCtrl', ['$scope', '$stateParams', 'BoxMockDataService', 'FrameMockDataService', function ($scope, $stateParams, BoxMockDataService, FrameMockDataService) {
	    $scope.frameList = [];
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;
	    $scope.lastCreatedFrameName = "";

	    $scope.$on('$ionicView.enter', function (e) {
	        var box = BoxMockDataService.GetBox($stateParams.boxId);

	        $scope.box = box;

	        $scope.frameList = FrameMockDataService.GetFrameList();
	        $scope.lastCreatedFrameName = FrameMockDataService.GetLastCreatedFrame();
	        setTimeout(function () {
	            $scope.$apply(function () {
	                $scope.lastCreatedFrameName = "";
	            });
	        }, 3000);
	    });

	    $scope.deleteItem = function (frameId) {
	        if (FrameMockDataService.GetFrame(frameId)) {
	            console.log("Removed frame #" + frameId);
	        } else {
	            console.log("Failed to remove frame #" + frameId);
	        }
	    };
	}]);

/***/ },
/* 16 */
/***/ function(module, exports) {

	angular.module('apiary.box').controller('BoxCreateCtrl', ['$scope', '$stateParams', 'BoxMockDataService', '$ionicHistory', function ($scope, $stateParams, BoxMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        //initialization
	        $scope.box = {};
	        $scope.boxTypeOptions = BoxMockDataService.GetBoxTypes();
	    });

	    $scope.createBox = function () {
	        var box = $scope.box;
	        if ($scope.box) {
	            box = BoxMockDataService.GetBox(box);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 17 */
/***/ function(module, exports) {

	angular.module('apiary.box').controller('BoxEditCtrl', ['$scope', '$stateParams', 'BoxMockDataService', '$ionicHistory', function ($scope, $stateParams, BoxMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        var box = BoxMockDataService.GetBox($stateParams.boxId);

	        $scope.box = box;
	    });

	    $scope.saveBox = function () {
	        var box = $scope.box;
	        if ($scope.box) {
	            box = BoxMockDataService.EditBox(box);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 18 */
/***/ function(module, exports) {

	angular.module('apiary.frame', []).controller('FrameCtrl', ['$scope', '$stateParams', 'FrameMockDataService', function ($scope, $stateParams, FrameMockDataService) {
	    $scope.shouldShowDelete = false;
	    $scope.listCanSwipe = false;

	    $scope.$on('$ionicView.enter', function (e) {
	        var frame = FrameMockDataService.GetFrame($stateParams.frameId);

	        $scope.frame = frame;
	    });
	}]);

/***/ },
/* 19 */
/***/ function(module, exports) {

	angular.module('apiary.frame').controller('FrameCreateCtrl', ['$scope', '$stateParams', 'FrameMockDataService', function ($scope, $stateParams, FrameMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        //initialization
	        $scope.frame = {};
	    });

	    $scope.createFrame = function () {
	        var frame = $scope.frame;
	        if ($scope.frame) {
	            frame = FrameMockDataService.GetFrame(frame);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 20 */
/***/ function(module, exports) {

	angular.module('apiary.frame').controller('FrameEditCtrl', ['$scope', '$stateParams', 'FrameMockDataService', '$ionicHistory', function ($scope, $stateParams, FrameMockDataService, $ionicHistory) {
	    $scope.$on('$ionicView.enter', function (e) {
	        var frame = FrameMockDataService.GetFrame($stateParams.frameId);

	        $scope.frame = frame;
	    });

	    $scope.saveFrame = function () {
	        var frame = $scope.frame;
	        if ($scope.frame) {
	            frame = FrameMockDataService.EditFrame(frame);
	            $ionicHistory.goBack();
	        }
	    };

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 21 */
/***/ function(module, exports) {

	angular.module('apiary.common', []).constant('LoginAuths', {
	    'google': {
	        'clientId': '1062484540187-9vkejq16ec2ladmu7cn0gk0cesj7dfla.apps.googleusercontent.com',
	        'clientSecret': 'iV3LwUqsaXlfddN5JbM_c7U5'
	    },
	    'facebook': {
	        'clientId': '159318631179311',
	        'clientSecret': '982a3518aae3df5ecb6eebb8ccaf0514'
	    }
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	angular.module('apiary.common').factory('Polyfill', function () {
	    //array.findIndex doesn't work on older versions of android
	    var getIndexById = function (array, id) {
	        for (var i = 0; i < array.length; i++) {
	            if (array[i].id == id) {
	                return i;
	            }
	        }
	        return -1;
	    };

	    return {
	        GetIndexById: getIndexById
	    };
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	angular.module('apiary.database', [])
	//.factory('DatabaseTest', function () {
	//    document.addEventListener('deviceready', function () {
	//        console.log("TESTING SQL?");
	//        window.sqlitePlugin.echoTest(function () {
	//            console.log('ECHO test OK');
	//        });

	//        window.sqlitePlugin.selfTest(function () {
	//            console.log('SELF test OK');
	//        });

	//        var db = window.sqlitePlugin.openDatabase({ name: 'test.db', location: 'default' });
	//        db.transaction(function (tr) {
	//            tr.executeSql("SELECT upper('Test string') AS upperString", [], function (tr, rs) {
	//                console.log('Got upperString result: ' + rs.rows.item(0).upperString);
	//            });
	//        });

	//        db.transaction(function (tr) {
	//            tr.executeSql('SELECT upper(?) AS upperString', ['Test string'], function (tr, rs) {
	//                console.log('Got upperString result: ' + rs.rows.item(0).upperString);
	//            });
	//        });
	//    });
	//    return true;
	//})
	;

/***/ },
/* 24 */
/***/ function(module, exports) {

	angular.module('apiary.login', []).controller('LoginCtrl', ['$scope', 'AuthenticationService', function ($scope, AuthenticationService) {
	    $scope.$on('$ionicView.enter', function (e) {
	        $scope.facebookLogin = function () {
	            AuthenticationService.FacebookSignIn();
	        };

	        $scope.googleLogin = function () {
	            AuthenticationService.GoogleSignIn();
	        };
	    });
	}]);

/***/ },
/* 25 */
/***/ function(module, exports) {

	angular.module('apiary.authentication', []).factory('AuthenticationService', ['$http', '$cordovaOauth', 'LoginAuths', '$localStorage', '$state', function ($http, $cordovaOauth, LoginAuths, $localStorage, $state) {
	    var signIn = {};

	    var googleSignIn = function () {
	        $cordovaOauth.google(LoginAuths.google.clientId, ["profile", "email"]).then(function (result) {
	            console.log("Google Response Object -> " + JSON.stringify(result));
	            signIn.accessToken = result.access_token;
	            $http.get("https://www.googleapis.com/plus/v1/people/me", { params: { access_token: signIn.accessToken } }).then(function (result) {
	                console.log("Google profile result ", result);
	                signIn.name = result.data.displayName;
	                for (var i = 0; i < result.data.emails.length; i++) {
	                    if (result.data.emails[i].type == "account") {
	                        signIn.email = result.data.emails[i].value;
	                        break;
	                    }
	                }
	                signIn.id = result.data.id;

	                $localStorage.userProfile = signIn;
	                console.log("Google profile info: ", JSON.stringify(signIn));

	                $state.go("app.apiaryList");
	            }, function (error) {
	                alert("There was a problem getting your profile.  Check the logs for details.");
	                console.log(error);
	            });
	        }, function (error) {
	            console.log("Error -> " + error);
	        });
	    };

	    var facebookSignIn = function () {
	        $cordovaOauth.facebook(LoginAuths.facebook.clientId, ["email"]).then(function (result) {
	            console.log("Facebook Response Object -> " + JSON.stringify(result));
	            signIn.accessToken = result.access_token;
	            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: signIn.accessToken, fields: "id,name,email", format: "json" } }).then(function (result) {
	                signIn.name = result.data.name;
	                signIn.id = result.data.id;
	                signIn.email = result.data.email;

	                $localStorage.userProfile = signIn;
	                console.log("Facebook profile info: ", JSON.stringify(signIn));

	                $state.go("app.apiaryList");
	            }, function (error) {
	                alert("There was a problem getting your profile.  Check the logs for details.");
	                console.log(error);
	            });
	        }, function (error) {
	            console.log("Error -> " + error);
	        });
	    };

	    var logOut = function () {
	        $localStorage.userProfile = undefined;
	    };

	    var isAuthenticated = function () {
	        if (!!$localStorage.userProfile) {
	            console.log("Authentication check, profile: ", $localStorage.userProfile);
	            return true;
	        }
	        return false;
	    };

	    var getUserAndAccessToken = function () {
	        if (isAuthenticated()) {
	            return {
	                accessToken: $localStorage.userProfile.appiaryAccessToken,
	                userId: $localStorage.userProfile.appiaryUserId
	            };
	        }
	    };

	    return {
	        FacebookSignIn: facebookSignIn,
	        GoogleSignIn: googleSignIn,
	        LogOut: logOut,
	        IsAuthenticated: isAuthenticated,
	        GetUserAndAccessToken: getUserAndAccessToken
	    };
	}]);

/***/ },
/* 26 */
/***/ function(module, exports) {

	angular.module('apiary.inspection', ['ion-datetime-picker']).controller('InspectionCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', 'InspectionMockDataService', function ($scope, $stateParams, $state, $ionicHistory, InspectionMockDataService) {
	    $scope.$on('$ionicView.enter', function (e) {
	        $scope.hiveId = $stateParams.hiveId;
	        $scope.inspection = {
	            datetimeValue: Date.now(),
	            temperature: "",
	            traffic: "None",
	            weather: {},
	            purpose: "",
	            hiveId: $scope.hiveId
	        };

	        $scope.trafficOptions = ["High", "Medium", "Low", "None"];
	    });

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };

	    $scope.continue = function () {
	        //todo: add call to inspection mock data service to save inspection
	        //todo: navigate to next page (boxes)
	        console.log("Inspection at continue ", $scope.inspection);
	        InspectionMockDataService.SaveInspection($scope.inspection);
	        $state.go('app.inspectionBoxes', { "hiveId": $scope.hiveId });
	    };
	}]);

/***/ },
/* 27 */
/***/ function(module, exports) {

	angular.module('apiary.inspection').controller('InspectionBoxesCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', 'HiveMockDataService', 'BoxMockDataService', function ($scope, $stateParams, $state, $ionicHistory, HiveMockDataService, BoxMockDataService) {
	    $scope.$on('$ionicView.enter', function (e) {
	        $scope.hive = HiveMockDataService.GetHive($stateParams.hiveId);
	        $scope.boxList = BoxMockDataService.GetBoxList($stateParams.hiveId);
	    });

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };

	    $scope.continue = function () {
	        //todo: add call to inspection mock data service to save inspection
	        //todo: navigate to next page (boxes)
	        console.log("Inspection at continue from box list");
	        $state.go('app.inspectionActions');
	    };
	}]);

/***/ },
/* 28 */
/***/ function(module, exports) {

	angular.module('apiary.inspection').controller('InspectionBoxCtrl', ['$scope', '$stateParams', '$ionicHistory', 'InspectionMockDataService', 'BoxMockDataService', function ($scope, $stateParams, $ionicHistory, InspectionMockDataService, BoxMockDataService) {
	    $scope.$on('$ionicView.enter', function (e) {
	        var box = BoxMockDataService.GetBox($stateParams.boxId);
	        $scope.box = box;
	        $scope.inspectionBox = {
	            boxId: $scope.box.id
	        };
	        $scope.amountOptions = ["None", "Low", "Medium", "High"];
	    });

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };

	    $scope.continue = function () {
	        //todo: add call to inspection mock data service to save inspection
	        //todo: navigate to next page (boxes)
	        console.log("Inspection at continue from box ");
	        InspectionMockDataService.SaveInspectionBox($scope.inspectionBox);
	        $ionicHistory.goBack();
	    };
	}]);

/***/ },
/* 29 */
/***/ function(module, exports) {

	angular.module('apiary.inspection').controller('InspectionActionsCtrl', ['$scope', '$state', '$ionicHistory', 'InspectionMockDataService', function ($scope, $state, $ionicHistory, InspectionMockDataService) {
	    $scope.$on('$ionicView.enter', function (e) {
	        $scope.inspectionActions = {};
	    });

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };

	    $scope.continue = function () {
	        //todo: add call to inspection mock data service to save inspection
	        //todo: navigate to next page (conclusion)
	        console.log("Inspection at continue from actions");
	        InspectionMockDataService.SaveInspectionActions($scope.inspectionActions);
	        $state.go('app.inspectionConclusion');
	    };
	}]);

/***/ },
/* 30 */
/***/ function(module, exports) {

	angular.module('apiary.inspection').controller('InspectionConclusionCtrl', ['$scope', '$state', '$ionicHistory', 'InspectionMockDataService', function ($scope, $state, $ionicHistory, InspectionMockDataService) {
	    $scope.$on('$ionicView.enter', function (e) {
	        $scope.inspectionConclusion = {};

	        $scope.tempermentOptions = ["Calm", "Nervous", "Aggressive"];
	        $scope.droneCountOptions = ["Low (<30)", "Average (30-100)", "High (>100)"];
	        $scope.amountOptions = ["None", "Low", "Medium", "High"];
	        $scope.pestOptions = ["None", "Ants", "Mites", "Mice", "Wax Moths", "Hive Beetles", "Other"];
	        $scope.broodPatternOptions = ["Uniform", "Spotty", "Random", "None"];
	        $scope.queenAgeOptions = ["0", "1", "2", "3", "4", "5", "6"];
	        $scope.diseasesOptions = ["None", "Chalkbrood", "Deformed Wing", "AFB", "EFB", "Other"];
	        $scope.hiveConditionOptions = ["Normal", "Brace Comb", "Excessive Propolis", "Normal Odor", "Foul Odor", "Equipment Damage"];
	    });

	    $scope.goBack = function () {
	        $ionicHistory.goBack();
	    };

	    $scope.continue = function () {
	        //todo: add call to inspection mock data service to save inspection
	        //todo: navigate to hive
	        console.log("Inspection at continue from box list ");
	        InspectionMockDataService.SaveInspectionConclusion($scope.inspectionConclusion);
	        $state.go('app.hive', { "hiveId": InspectionMockDataService.GetHiveId() });
	    };
	}]);

/***/ }
/******/ ]);