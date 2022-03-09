const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ujjan</title>
  
  
  
  
  </head>
  
  <body>
      <h1 style="color: blue;">This is my first home page</h1>
      <h2 style="color: yellow;">I WILL CREATE MY OWN WEB PAGE</h2>
      <p style="font-family:'Courier New', Courier, monospace;">Hello this is my home page for clients.</p>
      <p style="text-align: center">Hello this is my home page for clients.</p>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});