const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {  

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Set-Cookie', ['amumu = OP; httponly', 'loldungub = master; Secure']);
  res.end('큰돌, 그는 신인가?!\n'); 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});