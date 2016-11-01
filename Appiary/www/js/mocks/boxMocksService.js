angular.module('apiary.mock')

.factory('BoxMockDataService', ['Polyfill', function (Polyfill) {
    var boxList = [];
    var lastCreatedBox = "";
    var boxTypes = ["Shallow", "Medium", "Deep", "Feeder"];

    function generateBoxType() {
        var min = 0;
        var max = 4;
        var rand = Math.floor(Math.random() * (max - min) + min);
        return boxTypes[rand];
    };

    function generateMockBoxList(numToGenerate) {
        if (!numToGenerate) {
            numToGenerate = 5;
        }
        for (var i = 1; i <= numToGenerate; i++) {
            var box = {};
            box.id = i;
            box.name = "Box #" + i;
            box.boxType = generateBoxType();
            box.position = "Bottom 1";
            boxList.push(box);
        };
    };

    var getMockBoxList = function () {
        if (boxList.length == 0) {
            generateMockBoxList(15);
        }
        return boxList;
    };

    var getMockBox = function (id) {
        if (boxList.length == 0) {
            generateMockBoxList(15);
        }
        var index = Polyfill.GetIndexById(boxList, id);
        return boxList[index];
    };

    var deleteMockBox = function (id) {
        var index = Polyfill.GetIndexById(boxList, id);
        if (boxList.length == 0 || index == -1) {
            return false;
        }

        boxList.splice(index, 1);
        return true;
    };

    var createMockBox = function (box) {
        var maxId = 0;
        for (var i = 0; i < boxList.length; i++) {
            if (boxList[i].id > maxId) {
                maxId = boxList[i].id;
            }
        }
        box.id = maxId + 1;
        boxList.push(box);
        lastCreatedBox = box.name;
        return box;
    };

    var editMockBox = function (box) {
        for (var i = 0; i < boxList.length; i++) {
            if (boxList[i].id == box.id) {
                boxList[i] = box;
                break;
            }
        }
    }

    var getLastCreatedBox = function () {
        var toReturn = lastCreatedBox;
        lastCreatedBox = "";
        return toReturn;
    };

    var getBoxTypes = function () {
        return boxTypes;
    }

    return {
        GetBoxList: getMockBoxList,
        GetBox: getMockBox,
        DeleteBox: deleteMockBox,
        CreateBox: createMockBox,
        GetLastCreatedBox: getLastCreatedBox,
        GetBoxTypes: getBoxTypes,
        EditBox: editMockBox
    }
}]);
