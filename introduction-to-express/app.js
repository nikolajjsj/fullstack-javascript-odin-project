const express = require('express');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));
const PORT = 3000;

const wiki = require('./wiki.js');
app.use('/wiki', wiki);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
