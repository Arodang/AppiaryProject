angular.module('apiary.inspection')

.controller('InspectionBoxesCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', 'HiveMockDataService', 'BoxMockDataService',
    function ($scope, $stateParams, $state, $ionicHistory, HiveMockDataService, BoxMockDataService) {
        $scope.$on('$ionicView.enter', function (e) {
            $scope.hive = HiveMockDataService.GetHive($stateParams.hiveId);
            $scope.boxList = BoxMockDataService.GetBoxList($stateParams.hiveId);
        });

        $scope.goBack = function () {
            $ionicHistory.goBack();
        };

        $scope.continue = function () {
            //todo: add call to inspection mock data service to save inspection
            //todo: navigate to next page (boxes)
            console.log("Inspection at continue from box list");
            $state.go('app.inspectionActions');
        };
    }]);