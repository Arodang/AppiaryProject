angular.module('apiary.login', [])

.controller('LoginCtrl', ['$scope', '$cordovaOauth', 'LoginAuths', function ($scope, $cordovaOauth, LoginAuths) {
    $scope.$on('$ionicView.enter', function (e) {
        $scope.facebookLogin = function () {
            document.addEventListener("deviceready", function () {
                $cordovaOauth.facebook(LoginAuths.facebook.clientId, ["email"]).then(function (result) {
                    console.log("Response Object -> " + JSON.stringify(result));
                }, function (error) {
                    console.log("Error -> " + error);
                });
            }, false);
        };

        $scope.googleLogin = function () {
            document.addEventListener("deviceready", function () {
                $cordovaOauth.google(LoginAuths.google.clientId, ["email"]).then(function (result) {
                    console.log("Response Object -> " + JSON.stringify(result));
                }, function (error) {
                    console.log("Error -> " + error);
                });
            }, false);
        };
    });
}]);