﻿angular.module('apiary.apiary', [])

.controller('ApiaryCtrl', ['$scope', '$stateParams', 'ApiaryMockDataService', 'HiveMockDataService', function ($scope, $stateParams, ApiaryMockDataService, HiveMockDataService) {
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
        }
        else {
            console.log("Failed to remove hive #" + hiveId);
        }
    }

}]);