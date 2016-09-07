angular.module('apiary.mock')

.factory('HiveMockDataService', function () {
    var hiveList = [];
    var lastCreatedHive = "";

    function generateAddressNumber() {
        var min = 10;
        var max = 500;
        return Math.floor(Math.random() * (max - min) + min);
    };

    function generateMockHiveList(numToGenerate) {
        if (!numToGenerate) {
            numToGenerate = 5;
        }
        for (var i = 1; i <= numToGenerate; i++) {
            var hive = {};
            hive.id = i;
            hive.name = "Hive #" + i;
            hive.address = generateAddressNumber() + " Gleason Circle, Rochester, NY 14623";
            hive.description = "A healthy hive with hives in it.";
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
        var index = hiveList.findIndex(x => x.id == id);
        return hiveList[index];
    };

    var deleteMockHive = function (id) {
        var index = hiveList.findIndex(x => x.id == id);
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

    var getLastCreatedHive = function () {
        var toReturn = lastCreatedHive;
        lastCreatedHive = "";
        return toReturn;
    };

    return {
        GetMockHiveList: getMockHiveList,
        GetMockHive: getMockHive,
        DeleteMockHive: deleteMockHive,
        CreateMockHive: createMockHive,
        GetLastCreatedHive: getLastCreatedHive
    }
});
