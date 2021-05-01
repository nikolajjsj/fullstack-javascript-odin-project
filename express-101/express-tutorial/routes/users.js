var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('You\'re so cool');

  // or with pug:
  //res.render('cool', { title: 'Express' });
});

module.exports = router;
