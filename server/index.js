// 'require' loads a built-in Node tool. 'http' lets Node talk over the web.
const http = require("http");

// A port is a numbered door on your computer. Our server listens at door 3000.
const {PORT} = require("./config.js");
const handleRequest = require("./handler.js");

// createServer takes a function. Node calls it EVERY time someone sends a request.
// 'req' is the request: what the visitor asked for.
// 'res' is the response: what we send back.
// '(req, res) => { ... }' is an arrow function, a short way to write a function.
const server = http.createServer(handleRequest);

// listen starts the server. The function inside runs once, when the server is ready.
// The backticks `...` with ${PORT} put the value of PORT inside the text.
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});