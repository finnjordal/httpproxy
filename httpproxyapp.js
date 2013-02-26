var http = require('http')
  //, https= require('https')
  , fs= require('fs')
  , httpProxy = require('http-proxy');

var httpOptions = {
  hostnameOnly: true,
  router: {
	  'vejret.jordal.dk': '127.0.0.1:3000',
    'jordal.dk': '127.0.0.1:3000'
  }
}

/* var httpsOptions = {
  hostnameOnly: true,
  router: {
    'nh.oiorest.dk': '127.0.0.1:2000',
    'kvik.oiorest.dk': '127.0.0.1:2000'
  },
  https: {
    key: fs.readFileSync('../certificate/privateKey.pem', 'utf8'),
    cert: fs.readFileSync('../certificate/publicCert.pem', 'utf8')
  }
}; */

var httpPort= 9000;
var proxyServer = httpProxy.createServer(httpOptions).listen(httpPort);
console.log(" Http proxy server listening on port %d", httpPort);

/*var httpsPort= 8000;
var proxyServer = httpProxy.createServer(httpsOptions).listen(httpsPort);
console.log(" Https proxy server listening on port %d", httpsPort); */