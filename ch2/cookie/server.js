const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {  

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Set-Cookie', ['breakfast = aaaaa; httponly', 'denner = chicken22222123; Secure']);
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});