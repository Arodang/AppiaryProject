angular.module('apiary.box')

.controller('BoxEditCtrl', ['$scope', '$stateParams', 'BoxMockDataService', '$ionicHistory', function ($scope, $stateParams, BoxMockDataService, $ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
        var box = BoxMockDataService.GetBox($stateParams.boxId);

        $scope.box = box;
    });

    $scope.saveBox = function () {
        var box = $scope.box;
        if ($scope.box) {
            box = BoxMockDataService.EditBox(box);
            $ionicHistory.goBack();
        }
    };


    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
}]);