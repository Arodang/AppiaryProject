angular.module('starter.controllers', [])

.controller('MenuCtrl', function ($scope, $ionicModal, $timeout, AuthenticationService) {
    $scope.isAuthenticated = AuthenticationService.IsAuthenticated();

    $scope.logout = function () {
        AuthenticationService.LogOut();
        //If URL link doesn't call this properly, try $state.go('app.login')
    };
});
