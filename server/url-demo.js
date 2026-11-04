// Load Node's built-in web tool.
const http = require("http");

// This demo uses door 3001, so it will not clash with your real server on 3000.
const PORT = 3001;

const server = http.createServer((req, res) => {
  // req.url holds the address part the visitor asked for, like "/" or "/about".
  // console.log prints it in your terminal, so you can see it.
  console.log("Visitor asked for:", req.url);

  res.writeHead(200, { "Content-Type": "text/plain" });

  // We send the address back, so you also see it in the browser.
  res.end("You asked for: " + req.url);
});

server.listen(PORT, () => {
  console.log(`Demo is running at http://localhost:${PORT}`);
});