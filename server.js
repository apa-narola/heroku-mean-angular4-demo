//Install express server
const express = require('express');
const path = require('path');
var http = require('http');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist'));


/*app.get('/*', function(req,res) {
    
res.sendFile(path.join('/dist/index.html'));
});*/

app.get('/*', function(req, res) {
    res.sendFile('./dist/index.html');
});

//app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')) ) ;

// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);

//Set Port
const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));