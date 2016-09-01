angular.module('apiary.apiaryList', [])

.controller('ApiaryListCtrl', function ($scope, $ionicModal, $timeout, ApiaryMockDataService) {

    $scope.apiaryList = [];
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = false;

    $scope.$on('$ionicView.enter', function (e) {
        $scope.apiaryList = ApiaryMockDataService.GetMockApiaryList();
    });

    $scope.deleteItem = function (apiaryId) {
        if (ApiaryMockDataService.DeleteMockApiary(apiaryId)) {
            console.log("Removed apiary #" + apiaryId);
        }
        else {
            console.log("Failed to remove apiary #" + apiaryId);
        }
    }
});
