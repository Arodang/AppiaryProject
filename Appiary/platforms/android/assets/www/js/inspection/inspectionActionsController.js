angular.module('apiary.inspection')

.controller('InspectionActionsCtrl', ['$scope', '$state', '$ionicHistory', 'InspectionMockDataService',
    function ($scope, $state, $ionicHistory, InspectionMockDataService) {
        $scope.$on('$ionicView.enter', function (e) {
            $scope.inspectionActions = {};
        });

        $scope.goBack = function () {
            $ionicHistory.goBack();
        };

        $scope.continue = function () {
            //todo: add call to inspection mock data service to save inspection
            //todo: navigate to next page (conclusion)
            console.log("Inspection at continue from actions");
            InspectionMockDataService.SaveInspectionActions($scope.inspectionActions);
            $state.go('app.inspectionConclusion');
        };
    }]);