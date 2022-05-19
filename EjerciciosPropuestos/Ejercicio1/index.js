const http = require("http");
const PORT = 4000;
const server = http.createServer((request, response) => {
  console.log(request.url);
  response.end("Hola mundo");
});

server.listen(PORT);
console.log("Listening on: http://localhost:"+PORT);