require("dotenv").config()
const express = require("express")
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

//posts
const posts = [
    {
      username: 'vik',
      title: 'Post 1'
    },
    {
      username: 'elonmusk',
      title: 'Post 2'
    }
  ]

//getting posts only if logged in
app.get("/posts",authenticateToken,(req,res)=>{
    res.json(posts.filter(post => post.username === req.user.name))
})

//logging in
app.post("/login",(req,res)=>{
    //Authenticate user
    const username = req.body.username;
    const user = {name:username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken})

})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    //If there is no token
    if (token == null) {
        return res.sendStatus(401)
    }
    else{
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, user) => {
            //If the token is invalid
            if (err) return res.sendStatus(403)
            //if Token is valid
            req.user = user
            next()
        })
    }
  }

app.listen(6080);