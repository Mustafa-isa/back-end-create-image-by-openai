const express = require("express")
const Router = express.Router()
const funcOpenAi = require("./openai")
Router.post("/" ,funcOpenAi)
module.exports = Router