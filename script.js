var server = require('http');

server.createServer(engine).listen(3000);

function engine(request, response) {

  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hello world! Hello world!');

}