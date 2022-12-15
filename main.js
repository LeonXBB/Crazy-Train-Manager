import esMain from 'es-main';
import http from 'http'

function Main() {
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("");
  }).listen(8080);
}

if (esMain(import.meta)) {
  Main();
}