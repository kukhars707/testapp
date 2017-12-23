var mysql = require('mysql');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');

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

        db.query('INSERT INTO users SET ?', user, function (err, result) {
           if(err) {res.sendStatus(500)}
           else{
               res.json({
                   status:true,
                   data: result
               });
               bcrypt.hash(user.password, 10, function (err) {
                   if(err){res.sendStatus(500)}
                   else{
                       res.sendStatus(201);
                   }
               });
           }
        });
    }

}