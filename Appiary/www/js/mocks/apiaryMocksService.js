angular.module('apiary.mock', [])

.factory('ApiaryMockDataService', ['Polyfill', function (Polyfill) {
    var apiaryList = [];
    var lastCreatedApiary = "";

    function generateAddressNumber() {
        var min = 10;
        var max = 500;
        return Math.floor(Math.random() * (max - min) + min);
    };

    function generateMockApiaryList(numToGenerate) {
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
    };



    var getMockApiaryList = function () {
        if (apiaryList.length == 0) {
            generateMockApiaryList(15);
        }
        return apiaryList;
    };

    var getMockApiary = function (id) {
        if (apiaryList.length == 0) {
            generateMockApiaryList(15);
        }
        var index = Polyfill.GetIndexById(apiaryList, id);
        return apiaryList[index];
    };

    var deleteMockApiary = function (id) {
        var index = Polyfill.GetIndexById(apiaryList, id);
        if (apiaryList.length == 0 || index == -1) {
            return false;
        }

        apiaryList.splice(index, 1);
        return true;
    };

    var createMockApiary = function (apiary) {
        var maxId = 0;
        for (var i = 0; i < apiaryList.length; i++) {
            if (apiaryList[i].id > maxId) {
                maxId = apiaryList[i].id;
            }
        }
        apiary.id = maxId + 1;
        apiaryList.push(apiary);
        lastCreatedApiary = apiary.name;
        return apiary;
    };

    var editMockApiary = function (apiary) {
        for (var i = 0; i < apiaryList.length; i++) {
            if (apiaryList[i].id == apiary.id) {
                apiaryList[i] = apiary;
                break;
            }
        }
    }

    var getLastCreatedApiary = function () {
        var toReturn = lastCreatedApiary;
        lastCreatedApiary = "";
        return toReturn;
    };

    return {
        GetApiaryList: getMockApiaryList,
        GetApiary: getMockApiary,
        DeleteApiary: deleteMockApiary,
        CreateApiary: createMockApiary,
        GetLastCreatedApiary: getLastCreatedApiary,
        EditApiary: editMockApiary
    }
}]);
