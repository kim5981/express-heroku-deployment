const express = require("express")
const quotes = require("./quotes")

const server = express()

server.get("/", (req, res) => {
    res.send("<h1>kim was here</h1>")
})

server.get("/node-env", (req, res) => {
    res.json({ NODE_ENV: process.env.NODE_ENV })
})

// get a random theory
server.get("/quote", (req, res) => {
    let randIdx = Math.floor(Math.random() * quotes.length)
    res.send(`<h1> ^ↀᴥↀ^ <br> cat says : ${quotes[randIdx]} </h1>`)
})

module.exports = server