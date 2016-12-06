angular.module('apiary.authentication', [])
.factory('AuthenticationService', ['$http', '$cordovaOauth', 'LoginAuths', '$localStorage', '$state', 'APIServer', function ($http, $cordovaOauth, LoginAuths, $localStorage, $state, APIServer) {
    var signIn = {
    };
    var apiPath = APIServer.url + "users/";

    var googleSignIn = function () {

    };

    var googleCreate = function () {

    };

    function googleAuth(serverOption) {
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

                    //Make call to appiary api to log in
                    var url = apiPath + serverOption;

                    var data = {
                        'name': signIn.name,
                        'profileid': signIn.id,
                        'email': signIn.email
                    };

                    $http.post(url, data).success(function (data) {
                        $localStorage.userProfile.userId = data.UserId;
                        $localStorage.userProfile.accessToken = data.AccessToken;
                        $state.go("app.apiaryList");
                    }).error(function (data, error) {
                        console.log("Error signing in ", data, "\n", error);
                        alert("There was an error communicating with server.");
                        logOut();
                    });


                }).error(function (data, error) {
                    //alert("There was a problem getting your profile.  Check the logs for details.");
                    console.log("Data: ", data, "\nError: ", error);
                    logOut();
                });

        }, function (error) {
            console.log("Error -> " + error);
        });
    };

    function facebookAuth(serverOption) {
        $cordovaOauth.facebook(LoginAuths.facebook.clientId, ["email"]).then(function (result) {
            console.log("Facebook Response Object -> " + JSON.stringify(result));
            signIn.accessToken = result.access_token;
            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: signIn.accessToken, fields: "id,name,email", format: "json" } }).success(function (data) {
                console.log("FB login success result ", data);
                signIn.name = data.name;
                signIn.id = data.id;
                signIn.email = data.email;

                $localStorage.userProfile = signIn;
                console.log("Facebook profile info: ", JSON.stringify(signIn));

                //Make call to appiary api to log in
                var url = apiPath + serverOption;

                var data = {
                    'name': signIn.name,
                    'profileid': signIn.id,
                    'email': signIn.email
                };

                $http.post(url, data).success(function (data) {
                    $localStorage.userProfile.userId = data.UserId;
                    $localStorage.userProfile.accessToken = data.AccessToken;
                    $state.go("app.apiaryList");
                }).error(function (data, error) {
                    console.log("Error signing in ", data, "\n", error);
                    alert("There was an error communicating with server.");
                    logOut();
                });

                return true;
            }).error(function (data, error) {
                //alert("There was a problem getting your profile.  Check the logs for details.");
                console.log("Data: ", data, "\nError: ", error);
                logOut();
                return false;
            });
        }, function (error) {
            console.log("Error -> " + error);
            return false;
        });
    }

    var facebookSignIn = function () {
        facebookAuth("login");
    };

    var facebookCreate = function () {
        facebookAuth("create");
    };



    var logOut = function () {
        var url = apiPath + "logout/" + $localStorage.userProfile.userId + "/" + $localStorage.userProfile.accessToken;
        $http.get(url);
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

    //Add in GoogleCreate: googleCreate,
    return {
        FacebookSignIn: facebookSignIn,
        GoogleSignIn: googleSignIn,
        FacebookCreate: facebookCreate,
        GoogleCreate: googleCreate,
        LogOut: logOut,
        IsAuthenticated: isAuthenticated,
        GetUserAndAccessToken: getUserAndAccessToken
    };
}]);