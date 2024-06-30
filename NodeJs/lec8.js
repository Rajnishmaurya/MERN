// http module

const http=require("http");
const server=http.createServer(function(request,response){
   response.writeHead(200,{"content-type":"text/html"}); 
   response.write("<h1>NodeJs tutorial running</h1>");
   response.end();
}).listen(3000,()=>console.log("Server running on port 3000"));