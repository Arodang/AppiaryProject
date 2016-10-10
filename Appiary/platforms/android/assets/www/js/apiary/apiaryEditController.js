angular.module('apiary.apiary')

.controller('ApiaryEditCtrl', ['$scope', '$stateParams', 'ApiaryMockDataService', '$ionicHistory', function ($scope, $stateParams, ApiaryMockDataService, $ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
        var apiary = ApiaryMockDataService.GetMockApiary($stateParams.apiaryId);

        $scope.apiary = apiary;
    });

    $scope.saveApiary = function () {
        var apiary = $scope.apiary;
        if ($scope.apiary) {
            apiary = ApiaryMockDataService.EditMockApiary(apiary);
            $ionicHistory.goBack();
        }
    };


    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
}]);