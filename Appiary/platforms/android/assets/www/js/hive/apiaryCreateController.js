angular.module('apiary.hive', [])

.controller('HiveCreateCtrl', function ($scope, $stateParams, HiveMockDataService, $ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
        //initialization
        $scope.hive = {};
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
});