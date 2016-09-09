angular.module('apiary.hive', [])

.controller('HiveCtrl', function ($scope, $stateParams, HiveMockDataService, BoxMockDataService) {
    $scope.hiveList = [];
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = false;
    $scope.lastCreatedHiveName = "";

    $scope.$on('$ionicView.enter', function (e) {
        var hive = HiveMockDataService.GetMockHive($stateParams.hiveId);

        $scope.hive = hive;

        $scope.boxList = BoxMockDataService.GetMockBoxList();
        $scope.lastCreatedBoxName = BoxMockDataService.GetLastCreatedBox();
        $scope.$apply();
        setTimeout(function () {
            $scope.lastCreatedHiveName = "";
            $scope.$apply();
        }, 3000)


        $scope.deleteItem = function (hiveId) {
            if (HiveMockDataService.DeleteMockHive(hiveId)) {
                console.log("Removed hive #" + hiveId);
            }
            else {
                console.log("Failed to remove hive #" + hiveId);
            }
        }
    });

});