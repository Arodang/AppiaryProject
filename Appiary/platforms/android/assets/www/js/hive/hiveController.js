﻿angular.module('apiary.hive', [])

.controller('HiveCtrl', function ($scope, $stateParams, HiveMockDataService, BoxMockDataService) {
    $scope.boxList = [];
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = false;
    $scope.lastCreatedBoxName = "";

    $scope.$on('$ionicView.enter', function (e) {
        var hive = HiveMockDataService.GetMockHive($stateParams.hiveId);

        $scope.hive = hive;

        $scope.boxList = BoxMockDataService.GetMockBoxList();
        $scope.lastCreatedBoxName = BoxMockDataService.GetLastCreatedBox();
        $scope.$apply();
        setTimeout(function () {
            $scope.lastCreatedBoxName = "";
            $scope.$apply();
        }, 3000)


        $scope.deleteItem = function (boxId) {
            if (BoxMockDataService.DeleteMockBox(boxId)) {
                console.log("Removed box #" + boxId);
            }
            else {
                console.log("Failed to remove box #" + boxId);
            }
        }
    });

});