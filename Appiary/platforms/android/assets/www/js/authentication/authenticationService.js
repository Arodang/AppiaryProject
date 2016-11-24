angular.module('apiary.authentication', [])
.factory('AuthenticationService', ['$http', '$cordovaOauth', 'LoginAuths', '$localStorage', '$state', function ($http, $cordovaOauth, LoginAuths, $localStorage, $state) {
    var signIn = {
    };

    var googleSignIn = function () {
        $cordovaOauth.google(LoginAuths.google.clientId, ["profile", "email"]).then(function (result) {
            console.log("Google Response Object -> " + JSON.stringify(result));
            signIn.accessToken = result.access_token;
            $http.get("https://www.googleapis.com/plus/v1/people/me", { params: { access_token: signIn.accessToken } })
                .success(function (data) {
                    console.log("Google profile result ", data);
                    signIn.name = data.displayName;
                    for (var i = 0; i < data.emails.length; i++) {
                        if (data.emails[i].type == "account") {
                            signIn.email = data.emails[i].value;
                            break;
                        }
                    }
                    signIn.id = data.id;

                    $localStorage.userProfile = signIn;
                    console.log("Google profile info: ", JSON.stringify(signIn));

                    $state.go("app.apiaryList");
                }).error(function (data, error) {
                    //alert("There was a problem getting your profile.  Check the logs for details.");
                    console.log("Data: ", data, "\nError: ", error);
                });

        }, function (error) {
            console.log("Error -> " + error);
        });
    };

    var facebookSignIn = function () {
        $cordovaOauth.facebook(LoginAuths.facebook.clientId, ["email"]).then(function (result) {
            console.log("Facebook Response Object -> " + JSON.stringify(result));
            signIn.accessToken = result.access_token;
            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: signIn.accessToken, fields: "id,name,email", format: "json" } })
                .success(function (data) {
                    console.log("FB login success result ", data);
                    signIn.name = data.name;
                    signIn.id = data.id;
                    signIn.email = data.email;

                    $localStorage.userProfile = signIn;
                    console.log("Facebook profile info: ", JSON.stringify(signIn));

                    $state.go("app.apiaryList");
                }).error(function (data, error) {
                    //alert("There was a problem getting your profile.  Check the logs for details.");
                    console.log("Data: ", data, "\nError: ", error);
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
            console.log("Authentication check, profile: ", $localStorage.userProfile);
            return true;
        }
        return false;
    };

    var getUserAndAccessToken = function () {
        if (isAuthenticated()) {
            return {
                accessToken: $localStorage.userProfile.appiaryAccessToken,
                userId: $localStorage.userProfile.appiaryUserId
            }
        }
    };


    $http.get("http://google.com")
        .success(function (result) {
            console.log("Success: ", result);
        })
        .error(function (data, error) {
            console.log("ERror: ", data, "\n", error);
        });


    return {
        FacebookSignIn: facebookSignIn,
        GoogleSignIn: googleSignIn,
        LogOut: logOut,
        IsAuthenticated: isAuthenticated,
        GetUserAndAccessToken: getUserAndAccessToken
    };
}]);