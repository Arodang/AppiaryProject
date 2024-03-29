﻿angular.module('apiary.box')

.controller('BoxCreateCtrl', ['$scope', '$stateParams', 'BoxMockDataService', '$ionicHistory', function ($scope, $stateParams, BoxMockDataService, $ionicHistory) {
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