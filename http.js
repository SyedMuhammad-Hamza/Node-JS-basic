 const http = require('http');

 const server = http.createServer((req,res) =>{
    if(req.url ==='/'){
        res.write('Assalamualikum World');
        res.end();
        console.log('New connection...');
    }
//ROUTE
//for returning array of JSON objects
if(req.url === '/api/courses'){
    res.write(JSON.stringify([1,2,3]));
    res.end();
}
 });

//  server.on('connection', (socket) => {
//     
//  });

 server.listen(3000);
 console.log('Listening to port 3000...');