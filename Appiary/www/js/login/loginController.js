angular.module('apiary.login', [])

.controller('LoginCtrl', ['$scope', 'AuthenticationService', function ($scope, AuthenticationService) {
    $scope.$on('$ionicView.enter', function (e) {
        $scope.facebookLogin = function () {
            AuthenticationService.FacebookSignIn();
        };

        $scope.googleLogin = function () {
            AuthenticationService.GoogleSignIn();
        };
    });
}]);