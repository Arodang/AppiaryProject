angular.module('apiary.inspection', ['ion-datetime-picker'])

.controller('InspectionCtrl', ['$scope', '$stateParams', '$ionicHistory', 'HiveMockDataService', function ($scope, $stateParams, $ionicHistory, HiveMockDataService) {
    $scope.$on('$ionicView.enter', function (e) {
        $scope.hiveId = $stateParams.hiveId;
        $scope.inspection = {
            datetimeValue: Date.now(),
            temperature: "",
            traffic: "None",
            weather: {},
            purpose: "",
            hiveId: $scope.hiveId
        };

        $scope.trafficOptions = ["High", "Medium", "Low", "None"];
    });

    $scope.goBack = function () {
        $ionicHistory.goBack();
    };

    $scope.continue = function () {
        //todo: add call to inspection mock data service to save inspection
        //todo: navigate to next page (boxes)
        console.log("Inspection at continue ", $scope.inspection);

    };
}]);