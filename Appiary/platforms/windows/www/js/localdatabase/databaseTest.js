angular.module('apiary.database', [])
    .factory('DatabaseTest', function () {
        document.addEventListener('deviceready', function () {
            window.sqlitePlugin.echoTest(function () {
                console.log('ECHO test OK');
            });
        });

        document.addEventListener('deviceready', function () {
            window.sqlitePlugin.selfTest(function () {
                console.log('SELF test OK');
            });
        });

        document.addEventListener('deviceready', function () {
            var db = window.sqlitePlugin.openDatabase({ name: 'test.db', location: 'default' });
            db.transaction(function (tr) {
                tr.executeSql("SELECT upper('Test string') AS upperString", [], function (tr, rs) {
                    console.log('Got upperString result: ' + rs.rows.item(0).upperString);
                });
            });
        });

        document.addEventListener('deviceready', function () {
            var db = window.sqlitePlugin.openDatabase({ name: 'test.db', location: 'default' });
            db.transaction(function (tr) {
                tr.executeSql('SELECT upper(?) AS upperString', ['Test string'], function (tr, rs) {
                    console.log('Got upperString result: ' + rs.rows.item(0).upperString);
                });
            });
        });

        return true;
    });