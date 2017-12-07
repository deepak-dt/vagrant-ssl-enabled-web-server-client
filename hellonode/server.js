var http = require('http');
const crypto = require('crypto'),
  fs = require("fs");

var privateKey = fs.readFileSync('server.key').toString();
var certificate = fs.readFileSync('server.crt').toString();

var credentials = crypto.createCredentials({key: privateKey, cert: certificate});

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  //response.writeHead(200);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var hostname = require('os').hostname();
  response.end('/*******  Hello World from ' + hostname + ' !  ******/\n');
};
var www = http.createServer(handleRequest);
www.setSecure(credentials);
www.addListener("request", handleRequest);
www.listen(8080);
