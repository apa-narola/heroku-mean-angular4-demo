//Install express server
const express = require('express');
const path = require('path');
var http = require('http');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

//Set Port
const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));