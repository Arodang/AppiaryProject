angular.module('apiary.hive')

.controller('HiveEditCtrl', ['$scope', '$stateParams', 'HiveMockDataService', '$ionicHistory', function ($scope, $stateParams, HiveMockDataService, $ionicHistory) {
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