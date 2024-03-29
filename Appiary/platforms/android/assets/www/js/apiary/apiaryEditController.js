﻿angular.module('apiary.apiary')

.controller('ApiaryEditCtrl', ['$scope', '$stateParams', 'ApiaryMockDataService', '$ionicHistory', function ($scope, $stateParams, ApiaryMockDataService, $ionicHistory) {
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