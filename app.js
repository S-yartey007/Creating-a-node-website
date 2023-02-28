const http = require('http');
const fs = require('fs');
const port = 5000;



const server = http.createServer((req,res)=> {
    let url = req.url;
    switch(url) {
        case '/':
            res.writeHead(200, {'ContentType': 'text/html'});
            fs.readFile('./index.html',(err,data) => {
                if(err) throw err;
                res.end(data);
            }); 
           
            break;
        case '/about':
            res.writeHead(200, {'ContentType': 'text/html'});
            fs.readFile('./about.html',(err,data) => {
                if(err) throw err;
                res.end(data);
            });
            break;
        case '/contact':
            res.writeHead(200, {'ContentType': 'text/html'});
            fs.readFile('./contact-me.html',(err,data) => {
                if(err) throw err;
                res.end(data);
            });
            break;
            default:
            res.writeHead(404, {'ContentType': 'text/html'});
            fs.readFile('./404.html', (err,data) => {
                if(err) throw err;
                res.end(data);
            });
            break;
    }
    
    

})
server.listen(port, () => {
    console.log("Server running at: " + port);
})

