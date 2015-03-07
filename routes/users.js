var express = require('express');
var router = express.Router();
var db = require('../app').db;

/* GET users listing. */
router.get('/', function(req, res, next) {
	db.collection('users').find().toArray(function (err, items) {
		res.json(items);
	});
});

/* Create a new user. */
router.post('/', function(req, res, next) {
	console.log(req.body);
	res.send(req.body);
	//db.users.insert({name: req.})
});

module.exports = router;
