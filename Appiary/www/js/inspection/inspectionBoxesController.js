angular.module('apiary.inspection')

.controller('InspectionBoxesCtrl', ['$scope', '$stateParams', '$ionicHistory', 'HiveMockDataService', 'BoxMockDataService',
    function ($scope, $stateParams, $ionicHistory, HiveMockDataService, BoxMockDataService) {
        $scope.$on('$ionicView.enter', function (e) {
            var hive = HiveMockDataService.GetHive($stateParams.hiveId);
            var boxes = BoxMockDataService.GetBoxList();
            $scope.boxList = boxes;
        });

        $scope.goBack = function () {
            $ionicHistory.goBack();
        };

        $scope.continue = function () {
            //todo: add call to inspection mock data service to save inspection
            //todo: navigate to next page (boxes)
            console.log("Inspection at continue from box list ");
        };
    }]);