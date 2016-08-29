angular.module('apiary.apiary', [])

.controller('ApiaryCtrl', function ($scope, $stateParams, ApiaryMockDataService) {
    $scope.$on('$ionicView.enter', function (e) {
        var apiary = ApiaryMockDataService.GetMockApiary($stateParams.apiaryId);

        $scope.apiaryName = apiary.name;
    });

});