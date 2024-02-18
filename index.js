const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = './';

  if (req.url === '/') {
    filePath += 'index.html';
  } else if (req.url === '/about') {
    filePath += 'about.html';
  } else if (req.url === '/contact-me') {
    filePath += 'contact-me.html';
  } else {
    filePath += '404.html';
  }

  const absolutePath = path.resolve(filePath);

  fs.readFile(absolutePath, 'utf8', (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
