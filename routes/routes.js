var express = require('express');
var router = express.Router();

var controllers = require('.././controllers');

router.get('/', controllers.homecontroller.index);

router.get('/notes', controllers.notescontroller.getNotes);

module.exports = router;