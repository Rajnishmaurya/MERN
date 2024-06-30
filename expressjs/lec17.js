//Basic routing


const express=require("express");
const app=express();
console.log(app);   // print all the package
app.use(express.static('public'));

app.get("/",(request,response)=>{
    response.sendFile(__dirname + '/public/index.html');
});


app.get("/users",(request,response)=>{
    response.send("Users Data accessed");
})

app.post("/users/profile",(request,response)=>{
    response.send("Profile Data accessed");
})

app.listen(3000,()=>console.log("Server running on port 3000"));