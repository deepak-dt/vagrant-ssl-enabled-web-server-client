var http = require('http');
var https = require('https');
var fs = require("fs");
//var express = require('express');

var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

// Create a service (the app object is just a callback).
//var app = express();

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  //response.writeHead(200);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var hostname = require('os').hostname();
  response.end("/*******  Hello World from ' + hostname + ' !  ******/\n Read this text...dont sleep!!!\n Some applications run as multiple instances in a cluster, for availability and scale, and require shared knowledge of cluster membership and state. This state is not persistent but may need to be kept up to date if cluster membership changes In clustered applications, each cluster member will need to know about other members and their roles. Most modern clustered applications require initial bootstrapping with a seed set of members, typically their IP addresses and ports, and then are able to dynamically manage membership and changes. However, some clustered services may require a manual update and restart when membership information changes need to be propagated. Container-native orchestration systems should be able to handle both of these cases. For example, Kubernetes recently introduced a feature called a PetSet for managing a stateful cluster. Nirmata supports staged orchestration with reservations for clustered systems, where container placement is pre-calculated, and all cluster members are injected with unique identities and cluster state. Other Types of State? As we work with customers to containerize their applications, we’ve come across all sorts of interesting situations. For example, one application read the local MAC address and used it as a way to uniquely identify itself! Obviously, this scheme falls apart if the container gets restarted and gets a different MAC address. Luckily, Docker now allows specifying the container MAC address. For such outliers, you will need to make sure your orchestration system has the flexibility to specify custom settings when running the container. Summary In this post, we discussed what application state is, the different types of application states you are likely to encounter. We also covered how each type of state can be managed in a containerized environment. In most cases, several options are available to choose from. So, although containers are ephemeral, the application state does not need to be! My goal for this post was to show that stateful applications can be containerized. So, how did I do? We would love to hear your feedback and experiences, or if you have any questions I can help answer. Explore all of Nirmata for free at: https://try.nirmata.io/ Grab a copy of our free eBook: Containerizing Traditional Applications");
};

// Create an HTTP service.
//http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
//https.createServer(options, app).listen(443);

var www = https.createServer(options, handleRequest);
www.listen(8080);
