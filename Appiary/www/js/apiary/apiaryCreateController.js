angular.module('apiary.apiary')

.controller('ApiaryCreateCtrl', ['$scope', '$stateParams', 'ApiaryMockDataService', '$ionicHistory', function ($scope, $stateParams, ApiaryMockDataService, $ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
        //initialization
        $scope.apiary = {};
    });

    $scope.createApiary = function () {
        var apiary = $scope.apiary;
        if ($scope.apiary) {
            apiary = ApiaryMockDataService.CreateMockApiary(apiary);
            $ionicHistory.goBack();
        }
    };


    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
}]);