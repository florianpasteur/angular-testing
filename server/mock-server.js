const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
  const mockFile = `${__dirname}/data/${req.url}.json`;

  console.log(mockFile);

  if (fs.existsSync(mockFile)) {
    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.end(JSON.stringify({data: require(mockFile)}));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'} );
    res.end('No resources for this endpoint');
  }
}

const server = http.createServer(requestListener);
server.listen(7559);
