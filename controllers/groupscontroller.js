var mysql = require('mysql');

module.exports = {

    getGroups: function (req, res, next) {
        var config = require('../database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var groups = [];

        db.query('SELECT * FROM `groups`', function (err, rows, fields) {
           if(err) throw err;

           db.end();

           groups = rows;

           res.json(groups);

        });

    }

}