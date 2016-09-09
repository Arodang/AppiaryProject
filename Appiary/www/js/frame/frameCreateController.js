angular.module('apiary.frame')

.controller('FrameCreateCtrl', function ($scope, $stateParams, FrameMockDataService, $ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
        //initialization
        $scope.frame = {};
    });

    $scope.createFrame = function () {
        var frame = $scope.frame;
        if ($scope.frame) {
            frame = FrameMockDataService.CreateMockFrame(frame);
            $ionicHistory.goBack();
        }
    };


    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
});