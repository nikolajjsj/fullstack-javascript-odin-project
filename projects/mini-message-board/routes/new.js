var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

/* POST users listing. */
router.post('/new', function(req, res, next) {
  const author = req.body.author;
  const message = req.body.message;

  // Push the new message to the messages array
  messages.push({
    text: message,
    user: author,
    added: new Date(),
  });

  // Then redirect the user to the index page;
  res.redirect('/');
});

module.exports = router;
