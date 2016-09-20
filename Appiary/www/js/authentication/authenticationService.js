angular.module('apiary.authentication', [])
.factory('AuthenticationService', ['$http', '$cordovaOauth', 'LoginAuths', '$localStorage', function ($http, $cordovaOauth, LoginAuths, $localStorage) {
    var signIn = {
    };

    var googleSignIn = function () {
        $cordovaOauth.google(LoginAuths.google.clientId, ["profile", "email"]).then(function (result) {
            console.log("Google Response Object -> " + JSON.stringify(result));
            signIn.accessToken = result.access_token;
            $http.get("https://www.googleapis.com/plus/v1/people/me", { params: { access_token: signIn.accessToken } }).then(function (result) {
                signIn.name = result.data.displayname;
                for (var i = 0; i < result.data.emails.length; i++) {
                    if (result.data.emails[i].type == "account") {
                        signIn.email = result.data.emails[i].value;
                        break;
                    }
                }
                signIn.id = result.data.id;

                $localStorage.userProfile = signIn;
                console.log("Google profile info: ", JSON.stringify(signIn));
            }, function (error) {
                alert("There was a problem getting your profile.  Check the logs for details.");
                console.log(error);
            });

        }, function (error) {
            console.log("Error -> " + error);
        });
    };

    var facebookSignIn = function () {
        $cordovaOauth.facebook(LoginAuths.facebook.clientId, ["email"]).then(function (result) {
            console.log("Facebook Response Object -> " + JSON.stringify(result));
            signIn.accessToken = result.access_token;
            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: signIn.accessToken, fields: "id,name,email", format: "json" } }).then(function (result) {
                signIn.name = result.data.name;
                signIn.id = result.data.id;
                signIn.email = result.data.email;

                $localStorage.userProfile = signIn;
                console.log("Facebook profile info: ", JSON.stringify(signIn));
            }, function (error) {
                alert("There was a problem getting your profile.  Check the logs for details.");
                console.log(error);
            });
        }, function (error) {
            console.log("Error -> " + error);
        });
    };


    var logOut = function () {
        $localStorage.userProfile = undefined;
    };

    var isAuthenticated = function () {
        if (!!$localStorage.userProfile) {
            return true;
        }
        return false;
    };



    return {
        FacebookSignIn: facebookSignIn,
        GoogleSignIn: googleSignIn,
        LogOut: logOut,
        IsAuthenticated: isAuthenticated
    };
}]);