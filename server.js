const http = require('http');

const server = http.createServer((request, response)=>{
  response.write('sup');
  response.end();
});

server.listen(3000);