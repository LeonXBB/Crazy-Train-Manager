import esMain from 'es-main';
import http from 'http'
import * as dotenv from "dotenv";

function Main() {
  
  dotenv.config({debug: true, path: "server.env"});
  
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("");
  }).listen(process.env.PORT);
}

if (esMain(import.meta)) {
  Main();
}
