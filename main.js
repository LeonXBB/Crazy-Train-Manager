import esMain from 'es-main';

import * as dotenv from "dotenv";

import { MongoClient } from 'mongodb';
import http from 'http'


function Main() {
  
  dotenv.config({debug: true, path: "server.env"});
  
  var dbURL = "mongodb://localhost:27017/ctm_db";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.close();
  });
  
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("");
  }).listen(process.env.PORT);
}

if (esMain(import.meta)) {
  Main();
}
