angular.module('apiary.inspection')

.controller('InspectionConclusionCtrl', ['$scope', '$state', '$ionicHistory', 'InspectionMockDataService',
    function ($scope, $state, $ionicHistory, InspectionMockDataService) {
        $scope.$on('$ionicView.enter', function (e) {
            $scope.inspectionConclusion = {};

            $scope.tempermentOptions = ["Calm", "Nervous", "Aggressive"];
            $scope.droneCountOptions = ["Low (<30)", "Average (30-100)", "High (>100)"];
            $scope.amountOptions = ["None", "Low", "Medium", "High"];
            $scope.pestOptions = ["None", "Ants", "Mites", "Mice", "Wax Moths", "Hive Beetles", "Other"];
            $scope.broodPatternOptions = ["Uniform", "Spotty", "Random", "None"];
            $scope.queenAgeOptions = ["0", "1", "2", "3", "4", "5", "6"];
            $scope.diseasesOptions = ["None", "Chalkbrood", "Deformed Wing", "AFB", "EFB", "Other"];
            $scope.hiveConditionOptions = ["Normal", "Brace Comb", "Excessive Propolis", "Normal Odor", "Foul Odor", "Equipment Damage"];
        });

        $scope.goBack = function () {
            $ionicHistory.goBack();
        };

        $scope.continue = function () {
            //todo: add call to inspection mock data service to save inspection
            //todo: navigate to hive
            console.log("Inspection at continue from box list ");
            InspectionMockDataService.SaveInspectionConclusion($scope.inspectionConclusion);
            $state.go('app.hive', { "hiveId": InspectionMockDataService.GetHiveId() })
        };
    }]);