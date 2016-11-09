angular.module('apiary.mock')
.factory('InspectionMockDataService', [function () {
    var currentInspection = {};

    function resetInspection() {
        currentInspection = {
            inspection: {},
            hiveId: 0,
            boxInspections: {},
            inspectionActions: {},
            inspectionConclusion: {}
        }
    };

    var saveInspection = function (inspection) {
        currentInspection.inspection = inspection;
        currentInspection.hiveId = inspection.hiveId;
    };

    var saveInspectionBox = function (boxInspection) {
        currentInspection.boxInspections[boxInspection.boxId] = boxInspection;
    };

    var saveInspectionActions = function (inspectionActions) {
        currentInspection.inspectionActions = inspectionActions;

    };

    var saveInspectionConclusion = function (inspectionConclusion) {
        currentInspection.inspectionConclusion = inspectionConclusion;
        saveInspectionToServer();
    };

    var getHiveId = function () {
        return currentInspection.hiveId;
    };

    function saveInspectionToServer() {
        console.log("Current Inspection: ");
        console.log(JSON.stringify(currentInspection));

        //Save inspection to server
        //Clear current inspection
        resetInspection();
    };

    resetInspection();

    return {
        SaveInspection: saveInspection,
        SaveInspectionBox: saveInspectionBox,
        SaveInspectionActions: saveInspectionActions,
        SaveInspectionConclusion: saveInspectionConclusion,
        GetHiveId: getHiveId
    };
}]);