var mysql = require('mysql');

module.exports = {

    getNotes: function (req, res, next) {
        var config = require('../database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var groups = [];

        db.query('SELECT * FROM `tasks` JOIN `groups` oN `tasks`.`groups_id` = `groups`.`group_id`', function (err, rows, fields) {
            if (err) throw err;
            //TODO REMOVE TWO WHILE
            rows.forEach(function (value, key) {
                groups[value.group_id] = {
                    group_id: value.group_id,
                    group_name: value.group_name,
                    notes: []
                };
            });

            rows.forEach(function (value, keyt) {
                groups[value.group_id].notes.push({
                    id:value.task_id,
                    name:value.task_name,
                    desc:value.task_desc
                });
            });



            db.end();

            //groups = rows;

            res.send(groups.splice(rows[0].groups_id));
        });

    }

}