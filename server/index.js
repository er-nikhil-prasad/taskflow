// 'require' loads a built-in Node tool. 'http' lets Node talk over the web.
const http = require("http");

// A port is a numbered door on your computer. Our server listens at door 3000.
const PORT = 3000;

// createServer takes a function. Node calls it EVERY time someone sends a request.
// 'req' is the request: what the visitor asked for.
// 'res' is the response: what we send back.
// '(req, res) => { ... }' is an arrow function, a short way to write a function.
const server = http.createServer((req, res) => {
  // 200 is the status code for "OK".
  // Content-Type tells the browser what kind of data we are sending (plain text).
  res.writeHead(200, { "Content-Type": "text/plain" });

  // end() sends the message and finishes the response.
  res.end("Hello from my first Node server!");
});

// listen starts the server. The function inside runs once, when the server is ready.
// The backticks `...` with ${PORT} put the value of PORT inside the text.
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});