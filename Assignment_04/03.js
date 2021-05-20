var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('1501815 Kyuwon Lee'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //th

require('./request')();