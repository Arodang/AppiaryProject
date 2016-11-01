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
    };

    var saveInspectionBox = function (boxInspection) {
        currentInspection.boxInspections[boxInspection.boxId] = boxInspection;
    };

    var saveInspectionActions = function (inspectionActions) {
        currentInspection.inspectionActions = inspectionActions;
    };

    var saveInspectionConclusion = function (inspectionConclusion) {
        currentInspection.inspectionConclusion = inspectionConclusion;
    };

    function saveInspectionToServer() {
        //Save inspection to server
        //Clear current inspection
    };

    resetInspection();

    return {
        SaveInspection: saveInspection,
        SaveInspectionBox: saveInspectionBox,
        SaveInspectionActions: saveInspectionActions,
        SaveInspectionConclusion: saveInspectionConclusion
    };
}]);