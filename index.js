// redirect.js
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(301, {
    Location: "https://blal2.pythonanywhere.com"
  });
  res.end();
});

server.listen(process.env.PORT || 3000);