const http = require('http');
const fs = require('fs');
const port = 8080;


const server = http.createServer((req,res) => {

 res.writeHead(200, {'Content-Type':'text/html'})
 fs.readFile('index.html', (error, data) => {
    
    if(error) {
        res.writeHead(404, {'Content-Type': 'text/html'})
        fs.readFile('404.html', (error,data) => {
            if(error) throw error;
            res.write(data);
        })
    } else {
        res.write(data)
    }
    res.end();

 })
})

server.listen(port, (error) => {
    if(error) throw error;

    console.log("server running at:" + port);
})