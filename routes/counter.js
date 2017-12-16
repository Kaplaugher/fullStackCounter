var express = require('express');

var router = express.Router();

var counter = 5;

router.get('/', function(req, res) {
  res.json({counter: counter});
});

router.post('/add', function(req, res) {
  counter++
  res.json({counter: counter});
});

router.post('/subtract', function(req, res) {
  counter--
  res.json({counter: counter});
});

module.exports = router;