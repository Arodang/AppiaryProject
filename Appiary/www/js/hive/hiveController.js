angular.module('apiary.hive', [])

.controller('HiveCtrl', ['$scope', '$stateParams', 'HiveMockDataService', 'BoxMockDataService', function ($scope, $stateParams, HiveMockDataService, BoxMockDataService) {
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
        }
        else {
            console.log("Failed to remove box #" + boxId);
        }
    };

}]);