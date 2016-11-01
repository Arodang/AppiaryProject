angular.module('apiary.frame', [])

.controller('FrameCtrl', ['$scope', '$stateParams', 'FrameMockDataService', function ($scope, $stateParams, FrameMockDataService) {
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = false;

    $scope.$on('$ionicView.enter', function (e) {
        var frame = FrameMockDataService.GetFrame($stateParams.frameId);

        $scope.frame = frame;
    });
}]);