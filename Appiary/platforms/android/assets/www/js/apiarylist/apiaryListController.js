angular.module('apiary.apiaryList', [])

.controller('ApiaryListCtrl', function ($scope, $ionicModal, $timeout, ApiaryMockDataService) {

    $scope.$on('$ionicView.enter', function (e) {
        $scope.apiaryList = ApiaryMockDataService.GetMockApiaryList();
    });
});
