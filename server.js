const http = require('http');

http.createServer(function(req, res) {
   if (req.url === "/OK") {
        res.writeHead(200, "Inbound 'OK' request being processed...");
        res.end();

    } else if (req.url === "/Not Found") {
        res.writeHead(404, "Sorry this is not found");
        res.end();

    } else if (req.url === "/Bad Request") {
        res.writeHead(400, "Sorry this is a bad request");
        res.end();

    } else if (req.url === "/Created") {
        res.writeHead(201, "A new resource has been created");
        res.end();

    } else if (req.url === "/Forbidden") {
        res.writeHead(403, "Access Denied");
        res.end();

    } else if (req.url === "/Found") {
        res.writeHead(302, "Sorry this has been temporarily moved");
        res.end();

    } else if (req.url === "/Gateway-Timeout") {
        res.writeHead(504, "Gateway received bad response");
        res.end();

    } else if (req.url === "/Internal-Server-Error") {
        res.writeHead(500, "Server is having trouble handling request");
        res.end();

    } else if (req.url === "/Moved-Permanently") {
        res.writeHead(301, "Sorry this resource has been permanently moved");
        res.end();

    } else if (req.url === "/Unauthorized") {
        res.writeHead(401, "must be authenticated for access to this resource");
        res.end();
    }

}).listen(3000, function() {
    console.log("I hear you, just tell me what you need on port 3000");
});
