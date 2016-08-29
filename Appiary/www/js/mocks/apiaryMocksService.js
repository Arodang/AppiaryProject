angular.module('apiary.mock', [])

.factory('ApiaryMockDataService', function () {
    var apiaryList = [];

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

    generateMockApiaryList(8);

    var getMockApiaryList = function () {
        return apiaryList;
    };

    var getMockApiary = function (id) {
        return apiaryList[id-1];
    };

    return {
        GetMockApiaryList: getMockApiaryList,
        GetMockApiary : getMockApiary
    }
});
