angular.module('apiary.common')
.factory('Polyfill', function () {
    //array.findIndex doesn't work on older versions of android
    var getIndexById = function (array, id) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].id == id) {
                return i;
            }
        }
        return -1;
    };

    return {
        GetIndexById: getIndexById
    };
});