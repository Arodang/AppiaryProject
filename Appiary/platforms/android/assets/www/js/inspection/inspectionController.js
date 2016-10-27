angular.module('apiary.inspection', ['ion-datetime-picker'])

.controller('InspectionCtrl', ['$scope', '$stateParams', '$ionicHistory', 'HiveMockDataService', function ($scope, $stateParams, $ionicHistory, HiveMockDataService) {
    $scope.$on('$ionicView.enter', function (e) {
        var hive = HiveMockDataService.GetMockHive($stateParams.hiveId);
        $scope.inspection = {
            datetimeValue: Date.now(),
            hive: {},
            temperature: "",
            traffic: "None",
            weather: {},
            purpose: ""
        };
        $scope.inspection.hive = hive;

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