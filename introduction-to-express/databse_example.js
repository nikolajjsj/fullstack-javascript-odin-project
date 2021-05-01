//this works with older versions of  mongodb version ~ 2.2.33
const mongoClient = require('mongodb').mongoClient;

mongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
  if (err) throw err;

  db.collection('mammals').find().toArray(function(err, result) {
    if (err) throw err;

    console.log(result);
  });
});

//for mongodb version 3.0 and up
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', function(err, client) {
  if (err) throw err;

  let db = client.db('animals');

  db.collection('mammals').find().toArray(function(err, result) {
    if (err) throw err;

    console.log(result);
    client.close();
  });
});
