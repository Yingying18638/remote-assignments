const express=require("express");
const bodyParser=require("body-parser");
const cookieParser= require("cookie-parser");
const app=express();
app.use(bodyParser.urlencoded({ extended: false})); //使用middleware
app.use(cookieParser());
app.set("view engine", "pug");

app.get("/",(req,res)=>{
    res.send("hihi,server")
})
app.get("/myName",(req,res)=>{
    const name=req.cookies.yourname
    res.render("app",{name})
    
})
app.post("/trackName",(req,res)=>{
    res.cookie("yourname", req.body.yourname)
    res.redirect("/myName")
    // console.log(req.body.yourname)
})
app.get("/delcookie",(req,res)=>{
    res.clearCookie("name")
    res.send('Cookie cleared')
})

app.listen(3000, ()=>{
    console.log('The application is running on localhost:3000!')
})