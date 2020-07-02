const http = require('http');

const server = http.createServer(( req, res ) => {
  console.log(req.url, req.method, req.headers);
  
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head>
        <title>IMS</title>
      </head>
      <body>
        <h1>The best things in life start with Mau.</h1>
      </body>
    </html>
  `);
  res.end();
});

server.listen(7505);
