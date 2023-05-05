const http = require('http')

const server = http.createServer(function(req, res){
    if (req.url=='/') {
        res.end('<p>Bentornato nella mia Home Page <b>caro visitatore</b></p>')
        
    }
});

server.listen(3000);