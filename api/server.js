const express = require("express")
const theories = require("./conspiracyTheories")
const server = express()

server.get("/", (req, res) => {
    res.send("<h1>kim was here</h1>")
})

server.get("/theories", (req, res) => {
    let randIdx = Math.floor(Math.random() * theories.length)
    res.send(`<h1> ${theories(randIdx)} </h1>`)
})

module.exports = server