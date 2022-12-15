function Main() {
  var http = require('http');

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("");
  }).listen(8080);
}

if (require.main === module) {
  Main();
}