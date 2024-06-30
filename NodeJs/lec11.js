// synchronous and asynchronous file system
const fs=require("fs");
//Asynchronous
console.log(fs);    //every file method have both syn and asyn
fs.readFile(__dirname+"/notes.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});

//Synchronous
try{
    const data=fs.readFileSync(__dirname+"/notes.txt","utf8");
    console.log(data);
}catch(e){
    console.log(e);
}

console.log("File ended successfully");

