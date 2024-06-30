const express=require("express");
const app=express();
console.log(app);   // print all the package

app.get("/",(request,response)=>{
    response.send("Hello world");
});


app.get("/users",(request,response)=>{
    response.send("Users Data accessed");
})
app.listen(3000,()=>console.log("Server running on port 3000"));