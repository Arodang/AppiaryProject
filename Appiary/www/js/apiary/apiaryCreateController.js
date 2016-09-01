angular.module('apiary.apiary')

.controller('ApiaryCreateCtrl', function ($scope, $stateParams, ApiaryMockDataService, $ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
        //initialization
    });

    $scope.createApiary = function () {
        var apiary = $scope.apiary;
        apiary = ApiaryMockDataService.createMockApiary(apiary);

        if (apiary.id > 0) {
            //Add param to apiaryList to show created card
        }
    };

    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
});