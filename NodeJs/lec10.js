// File system module in js

const fs=require("fs");
// fs.readFile(__dirname+"/notes.txt","utf8",(err,data)=>{
//   if(err) throw err;
// console.log(data);
// });

//to delete the file
// fs.unlink(__dirname+"/notes.txt",(err,data)=>{
//     if(err) throw err;
//     console.log("File deleted"+data);
// });

const http=require("http");
const server=http.createServer(function(req,response){

    fs.readFile(__dirname+"/notes.txt","utf8",(err,data)=>{
        response.writeHead(200,{"content-type":"text/plain"}); 
        response.write(data);
        response.end();
      });
}).listen(3000,()=>console.log("Server running on port 3000"));