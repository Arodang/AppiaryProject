angular.module('apiary.mock')

.factory('HiveMockDataService', ['Polyfill', function (Polyfill) {
    var hiveList = [];
    var lastCreatedHive = "";
    var hiveTypes = ["Nuc", "Langstroth 10 Frame", "Langstrong 8 Frame", "Top Bar", "Warre", "National Standard"]

    function generateHiveType() {
        var min = 0;
        var max = 5;
        var rand = Math.floor(Math.random() * (max - min) + min);
        return hiveTypes[rand];
    };

    function generateMockHiveList(numToGenerate) {
        if (!numToGenerate) {
            numToGenerate = 5;
        }
        for (var i = 1; i <= numToGenerate; i++) {
            var hive = {};
            hive.id = i;
            hive.name = "Hive #" + i;
            hive.hiveType = generateHiveType();
            hive.position = "On the cement pad.";
            hiveList.push(hive);
        };
    };

    var getMockHiveList = function () {
        if (hiveList.length == 0) {
            generateMockHiveList(15);
        }
        return hiveList;
    };

    var getMockHive = function (id) {
        if (hiveList.length == 0) {
            generateMockHiveList(15);
        }
        var index = Polyfill.GetIndexById(hiveList, id);
        return hiveList[index];
    };

    var deleteMockHive = function (id) {
        var index = Polyfill.GetIndexById(hiveList, id);
        if (hiveList.length == 0 || index == -1) {
            return false;
        }

        hiveList.splice(index, 1);
        return true;
    };

    var createMockHive = function (hive) {
        var maxId = 0;
        for (var i = 0; i < hiveList.length; i++) {
            if (hiveList[i].id > maxId) {
                maxId = hiveList[i].id;
            }
        }
        hive.id = maxId + 1;
        hiveList.push(hive);
        lastCreatedHive = hive.name;
        return hive;
    };

    var editMockHive = function (hive) {
        for (var i = 0; i < hiveList.length; i++) {
            if (hiveList[i].id == hive.id) {
                hiveList[i] = hive;
                break;
            }
        }
    }

    var getLastCreatedHive = function () {
        var toReturn = lastCreatedHive;
        lastCreatedHive = "";
        return toReturn;
    };

    var getHiveTypes = function () {
        return hiveTypes;
    }

    return {
        GetHiveList: getMockHiveList,
        GetHive: getMockHive,
        DeleteHive: deleteMockHive,
        CreateHive: createMockHive,
        GetLastCreatedHive: getLastCreatedHive,
        GetHiveTypes: getHiveTypes,
        EditHive: editMockHive
    }
}]);
