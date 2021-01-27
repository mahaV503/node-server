const http = require("http");

//console.log(serV)

const serVble = (incomingReq, outputMsg)=>{
    
    outputMsg.end('welcome to the server');
    
};

const serV = http.createServer(serVble);
serV.listen(80);