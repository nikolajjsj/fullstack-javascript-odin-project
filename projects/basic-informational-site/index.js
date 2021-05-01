var http = require('http');
var fs = require('fs');

const server = http.createServer(function (req, res) {
  function returnPage(filename) {
    return fs.readFile(filename, function (err, data) {
      if (err) {
        console.log(err);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('404 Not Found');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }

  switch (req.url) {
    case '/':
      return returnPage('./index.html');
    case '/about':
      return returnPage('./about.html');
    case '/contact-me':
      return returnPage('./contact-me.html');
    default:
      return returnPage('./404.html');
  }
});

server.listen(8080, () => {
  console.log("You're connected!");
});
