var http = require('http'),
    httpProxy = require('http-proxy');

var options = {
  hostnameOnly: true,
  router: {
    'nh.oiorest.dk': '127.0.0.1:3000',
    'domaintwo.net': '127.0.0.1:9001',
    'domainthree.org': '127.0.0.1:9002'
  }
}

var port= 9000;
var proxyServer = httpProxy.createServer(options).listen(port);
console.log("Proxy server listening on port %d", port);