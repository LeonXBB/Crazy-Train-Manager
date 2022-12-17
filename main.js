import { MongoClient } from 'mongodb';

var http = require('http');

var dbURL = "mongodb://localhost:27017/ctm_db"
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.close();
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("");
}).listen(8080);