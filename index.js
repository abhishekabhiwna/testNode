const express = require("express");

const app = express();


app.get("/",(req,res)=>{
    res.send ("Hey")
})


app.get("/users",(req,res)=>{
    res.send ("Hey from users")
})

app.listen(8080,()=>{
    console.log("Listening on port 8000")
})