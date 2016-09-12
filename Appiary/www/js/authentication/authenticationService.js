angular.module('apiary.authentication', [])
.factory('AuthenticationService', ['$http', '$cordovaOauth', 'LoginAuths', function ($http, $cordovaOauth, LoginAuths) {
    var signIn = {
    };

    var googleSignIn = function () {
        $cordovaOauth.google(LoginAuths.google.clientId, ["email", "profile"]).then(function (result) {
            console.log("Google Response Object -> " + JSON.stringify(result));
            signIn.isGoogle = true;
            signIn.accessToken = result.access_token;

            $http.get("https://www.googleapis.com/plus/v1/people/me", { params: { access_token: signIn.accessToken } }).then(function (result) {
                signIn.profileData = result.data;
                console.log(signIn.profileData)
            }, function (error) {
                alert("There was a problem getting your profile.  Check the logs for details.");
                console.log(error)
            });

        }, function (error) {
            console.log("Error -> " + error);
        });
    };

    var facebookSignIn = function () {
        $cordovaOauth.facebook(LoginAuths.facebook.clientId, ["email"]).then(function (result) {
            signIn.isFacebook = true;
            signIn.accessToken = result.access_token;

            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: signIn.accessToken, fields: "id,name,email", format: "json" }}).then(function(result) {

                signIn.profileData = result.data;
                console.log(signIn.profileData)
            }, function (error) {
                alert("There was a problem getting your profile.  Check the logs for details.");
                console.log(error)
            });
            console.log("Response Object -> " + JSON.stringify(result));
        }, function (error) {
            console.log("Error -> " + error);
        });
    };

    var refreshGoogleToken = function () {
    };

    var refreshFacebookToken = function () {
    };

    var logOut = function () {

    };

    var isUserLoggedIn = function () {
    };



    return {
        FacebookSignIn: facebookSignIn,
        GoogleSignIn: googleSignIn,
        RefreshGoogleToken: refreshGoogleToken,
        RefreshFacebookToken: refreshFacebookToken,
        LogOut: logOut,
        IsUserLoggedIn: isUserLoggedIn
    };
}]);