angular.module('apiary.frame')

.controller('FrameEditCtrl', ['$scope', '$stateParams', 'FrameMockDataService', '$ionicHistory', function ($scope, $stateParams, FrameMockDataService, $ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
        var frame = FrameMockDataService.GetMockFrame($stateParams.frameId);

        $scope.frame = frame;
    });

    $scope.saveFrame = function () {
        var frame = $scope.frame;
        if ($scope.frame) {
            frame = FrameMockDataService.EditMockFrame(frame);
            $ionicHistory.goBack();
        }
    };


    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
}]);