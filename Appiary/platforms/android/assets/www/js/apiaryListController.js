angular.module('appiary.apiaryList', [])

.controller('ApiaryListCtrl', function ($scope, ApiaryListFakeDataSvc) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.hiveData = ApiaryListFakeDataSvc.MockData();
})

.factory('ApiaryListFakeDataSvc', function () {
    var service = {};

    service.MockData = function () {
        return {
            hives : ["hello", "test", "third test"]
        }
    };

    return service;
});