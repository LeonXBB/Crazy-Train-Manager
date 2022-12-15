import http_module from 'http';

let mock_server = http_module.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end("");
});

export default mock_server;
