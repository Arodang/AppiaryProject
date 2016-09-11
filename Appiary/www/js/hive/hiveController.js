angular.module('apiary.hive', [])

.controller('HiveCtrl', ['$scope', '$stateParams', 'HiveMockDataService', 'BoxMockDataService', function ($scope, $stateParams, HiveMockDataService, BoxMockDataService) {
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
        }
        else {
            console.log("Failed to remove box #" + boxId);
        }
    };

}]);