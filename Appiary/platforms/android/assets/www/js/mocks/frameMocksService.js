﻿angular.module('apiary.mock')

.factory('FrameMockDataService', function () {
    var frameList = [];
    var lastCreatedFrame = "";

    function generateMockFrameList(numToGenerate) {
        if (!numToGenerate) {
            numToGenerate = 5;
        }
        for (var i = 1; i <= numToGenerate; i++) {
            var frame = {};
            frame.id = i;
            frame.position = i;
            frame.isHaveFoundation = true;
            frame.isFoundationPlastic = false;
            frameList.push(frame);
        };
    };

    var getMockFrameList = function () {
        if (frameList.length == 0) {
            generateMockFrameList(15);
        }
        return frameList;
    };

    var getMockFrame = function (id) {
        if (frameList.length == 0) {
            generateMockFrameList(15);
        }
        var index = frameList.findIndex(x => x.id == id);
        return frameList[index];
    };

    var deleteMockFrame = function (id) {
        var index = frameList.findIndex(x => x.id == id);
        if (frameList.length == 0 || index == -1) {
            return false;
        }

        frameList.splice(index, 1);
        return true;
    };

    var createMockFrame = function (frame) {
        var maxId = 0;
        for (var i = 0; i < frameList.length; i++) {
            if (frameList[i].id > maxId) {
                maxId = frameList[i].id;
            }
        }
        frame.id = maxId + 1;
        frameList.push(frame);
        lastCreatedFrame = frame.name;
        return frame;
    };

    var getLastCreatedFrame = function () {
        var toReturn = lastCreatedFrame;
        lastCreatedFrame = "";
        return toReturn;
    };

    var getFrameTypes = function () {
        return frameTypes;
    }

    return {
        GetMockFrameList: getMockFrameList,
        GetMockFrame: getMockFrame,
        DeleteMockFrame: deleteMockFrame,
        CreateMockFrame: createMockFrame,
        GetLastCreatedFrame: getLastCreatedFrame,
    }
});
