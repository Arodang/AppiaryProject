angular.module('apiary.box', [])

.controller('BoxCtrl', function ($scope, $stateParams, BoxMockDataService, FrameMockDataService) {
    $scope.frameList = [];
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = false;
    $scope.lastCreatedFrameName = "";

    $scope.$on('$ionicView.enter', function (e) {
        var box = BoxMockDataService.GetMockBox($stateParams.boxId);

        $scope.box = box;

        $scope.frameList = FrameMockDataService.GetMockFrameList();
        $scope.lastCreatedFrameName = FrameMockDataService.GetLastCreatedFrame();
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.lastCreatedFrameName = "";
            });
        }, 3000);
    });

    $scope.deleteItem = function (frameId) {
        if (FrameMockDataService.DeleteMockFrame(frameId)) {
            console.log("Removed frame #" + frameId);
        }
        else {
            console.log("Failed to remove frame #" + frameId);
        }
    };

});