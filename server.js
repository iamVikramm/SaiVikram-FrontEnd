const express = require("express")
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const posts=[{
    "name":"vik"
}]

app.get("/posts",(req,res)=>{
    res.json(posts)
})

app.post("./login",(req,res)=>{
    //Authenticate user
})

app.listen(8080);