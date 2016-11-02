angular.module('apiary.inspection', ['ion-datetime-picker'])

.controller('InspectionCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', 'InspectionMockDataService', function ($scope, $stateParams, $state, $ionicHistory, InspectionMockDataService) {
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
        InspectionMockDataService.SaveInspection($scope.inspection);
        $state.go('app.inspectionBoxes', { "hiveId": $scope.hiveId });
    };
}]);