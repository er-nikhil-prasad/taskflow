// This function decides what to send back for each address.
// Node will call it for every request, with the request (req) and the response (res).
function handleRequest(req, res) {
  // req.url is the address the visitor asked for, like "/" or "/about".
  // '===' checks that two values are exactly equal.
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else {
    // 404 means "not found". Real servers say this for unknown addresses.
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
}

// Share this one function with other files.
module.exports = handleRequest;