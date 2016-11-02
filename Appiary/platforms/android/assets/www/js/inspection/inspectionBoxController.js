angular.module('apiary.inspection')

.controller('InspectionBoxCtrl', ['$scope', '$stateParams', '$ionicHistory', 'InspectionMockDataService', 'BoxMockDataService',
    function ($scope, $stateParams, $ionicHistory, InspectionMockDataService, BoxMockDataService) {
        $scope.$on('$ionicView.enter', function (e) {
            var box = BoxMockDataService.GetBox($stateParams.boxId);
            $scope.box = box;
            $scope.inspectionBox = {
                boxId : $scope.box.id
            };
            $scope.amountOptions = ["None", "Low", "Medium", "High"];
        });

        $scope.goBack = function () {
            $ionicHistory.goBack();
        };

        $scope.continue = function () {
            //todo: add call to inspection mock data service to save inspection
            //todo: navigate to next page (boxes)
            console.log("Inspection at continue from box ");
            InspectionMockDataService.SaveInspectionBox($scope.inspectionBox);
            $ionicHistory.goBack();
        };
    }]);