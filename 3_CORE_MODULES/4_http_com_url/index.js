const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if(!name) {
    
  } else {
    
  }



});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
