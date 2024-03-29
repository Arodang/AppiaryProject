﻿angular.module('apiary.hive')

.controller('HiveCreateCtrl', ['$scope', '$stateParams', 'HiveMockDataService', '$ionicHistory', function ($scope, $stateParams, HiveMockDataService, $ionicHistory) {
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