angular.module('apiary.apiaryList', [])

.controller('ApiaryListCtrl', ['$scope', '$timeout', 'ApiaryMockDataService', function ($scope, $timeout, ApiaryMockDataService) {

    $scope.apiaryList = [];
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = false;
    $scope.lastCreatedApiaryName = "";

    $scope.$on('$ionicView.enter', function (e) {
        $scope.apiaryList = ApiaryMockDataService.GetMockApiaryList();
        $scope.lastCreatedApiaryName = ApiaryMockDataService.GetLastCreatedApiary();
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.lastCreatedApiaryName = "";
            });
        }, 3000);
    });

    $scope.deleteItem = function (apiaryId) {
        if (ApiaryMockDataService.DeleteMockApiary(apiaryId)) {
            console.log("Removed apiary #" + apiaryId);
        }
        else {
            console.log("Failed to remove apiary #" + apiaryId);
        }
    }
}]);