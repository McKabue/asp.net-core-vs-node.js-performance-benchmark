const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  setTimeout(() => {
    fs.readFile("data.json", "utf8", (err, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write(data);
      res.end();
    });
  }, 2000);
}).listen(1234);