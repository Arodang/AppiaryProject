angular.module('apiary.box')

.controller('BoxCreateCtrl', function ($scope, $stateParams, BoxMockDataService, $ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
        //initialization
        $scope.box = {};
    });

    $scope.createBox = function () {
        var box = $scope.box;
        if ($scope.box) {
            box = BoxMockDataService.CreateMockBox(box);
            $ionicHistory.goBack();
        }
    };


    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
});