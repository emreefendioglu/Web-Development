const http = require('http');
const fs = require('fs');


const requestListener = function (req, res) {
    res.writeHead(200);
    if(req.url == "/data.json") {
        const json = fs.readFileSync("./data.json");
        res.end(json.toString());
    } else {
        const index = fs.readFileSync("./index.html");
        res.end(index.toString());
    }
}

const server = http.createServer(requestListener);
server.listen(8080);