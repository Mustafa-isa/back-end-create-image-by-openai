const express =  require('express')
const dotenv= require("dotenv").config()
const RouterOpenAi = require("./api/Router")

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT
app.use('/openai' ,RouterOpenAi)

app.listen(port ,()=>{console.log("server runing")})