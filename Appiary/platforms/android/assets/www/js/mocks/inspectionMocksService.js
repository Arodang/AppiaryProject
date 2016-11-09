angular.module('apiary.mock')
.factory('InspectionMockDataService', ['AuthenticationService', function (AuthenticationService) {
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

        //Happy path, assume user exists and is authenticated since we were able to load this page
        var user = AuthenticationService.GetUserAndAccessToken();

        var inspectionStart = currentInspection.inspection;

        var boxInspections = [];
        Object.keys(currentInspection.boxInspections)
            .forEach(function (key, index) {
                boxInspections.push(currentInspection.boxInspections[key]);
        });

        var inspection = {
            inspectionStart: currentInspection.inspection,
            inspectionActions: currentInspection.inspectionActions,
            inspectionConclusion: currentInspection.inspectionConclusion,
            boxInspections: boxInspections,
            UserId: user.userId,
            AccessToken: user.accessToken
        };

        console.log("Formatted Inspection: ");
        console.log(JSON.stringify(inspection));


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