const mysql = require('mysql');
const bcrypt = require('bcrypt');
const salt = 10;

module.exports = {

    addUser: function (req, res, next) {

        var config = require('../database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        bcrypt.hash(user.password, salt, function (err, hash) {
            if(err){res.sendStatus(500)}
            else{
                user.password = hash;
                db.query('INSERT INTO users SET ?', user, function (err, result) {
                    if(err) {
                        res.sendStatus(400);
                        console.log(err);
                    }
                    else{
                        res.sendStatus(201);
                        console.log(result);
                    }
                });
            }
        });
    }

}