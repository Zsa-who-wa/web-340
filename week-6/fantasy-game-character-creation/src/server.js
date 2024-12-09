const http = require('http');
const url = require('url');

let character = null;

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const { pathname, query } = parseUrl;
  
  if (req.method === 'POST' && pathname === '/create') {
    character = {
      class: query.class,
      gender: query.gender,
      funFact: query.funFact,
    };
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Character created');
  } else if (req.method === 'POST' && pathname === '/confirm') {
    if (character) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Character creation confirmed');
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('No character to confirmed');
    }
  } else if (req.method === 'GET' && pathname === '/view') {
    if (character) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('No character found');
    }
   } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
   }
  });
  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  module.exports = server;