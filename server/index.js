// 'require' loads a built-in Node tool. 'http' lets Node talk over the web.
const http = require("http");

const { PORT } = require("./config.js");
const handleRequest = require("./handler.js");

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
