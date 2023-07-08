var express=require('express');
var app=express();
app.get("",(req,res)=>{
    res.send("hello world")
})
app.use(express.static('public'))
app.use(express.static('src'))
app.listen(8080,()=>{console.log("server running")})