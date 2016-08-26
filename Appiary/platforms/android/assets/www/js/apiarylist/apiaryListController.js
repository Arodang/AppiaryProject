angular.module('apiary.apiaryList', [])

.controller('ApiaryListCtrl', function ($scope, $ionicModal, $timeout, ApiaryListMockDataService) {
    function generateAddressNumber() {
        var min = 10;
        var max = 500;
        return Math.floor(Math.random() * (max - min) + min);
    };

    var generateMockApiaryList = function (numToGenerate) {
        var apiaryList = [];
        if (!numToGenerate) {
            numToGenerate = 5;
        }
        for (var i = 1; i <= numToGenerate; i++) {
            var apiary = {};
            apiary.id = i;
            apiary.name = "Apiary #" + i;
            apiary.address = generateAddressNumber() + " Gleason Circle, Rochester, NY 14623";
            apiary.description = "A healthy apiary with hives in it.";
            apiaryList.push(apiary);
        };
        return apiaryList;
    };


    //ApiaryListMockDataService.GenerateMockApiaryList();
    $scope.$on('$ionicView.enter', function (e) {
        $scope.apiaryList = generateMockApiaryList(30);
    });
})

.factory('ApiaryListMockDataService', function () {
    function generateAddressNumber() {
        var min = 10;
        var max = 500;
        return Math.floor(Math.random() * (max - min) + min);
    };

    var generateMockApiaryList = function (numToGenerate) {
        var apiaryList = [];
        for (var i = 1; i <= numToGenerate; i++) {
            var apiary = {};
            apiary.id = i;
            apiary.name = "Apiary #" + i;
            apiary.address = generateAddressNumber() + " Gleason Circle, Rochester, NY 14623";
            apiary.description = "A healthy apiary with hives in it.";
        };
    };
    return {
        GenerateMockApiaryList : generateMockApiaryList
    }
});
