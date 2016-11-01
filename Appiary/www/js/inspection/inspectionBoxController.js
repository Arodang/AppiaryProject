angular.module('apiary.inspection')

.controller('InspectionBoxCtrl', ['$scope', '$stateParams', '$ionicHistory', 'HiveMockDataService', 'BoxMockDataService',
    function ($scope, $stateParams, $ionicHistory, HiveMockDataService, BoxMockDataService) {
        $scope.$on('$ionicView.enter', function (e) {
            var box = BoxMockDataService.GetBox($stateParams.boxId);
            $scope.box = box;
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