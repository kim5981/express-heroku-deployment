const express = require("express")

const server = express()

server.use("*", (req, res) => {
    res.send("<h1>kim was here</h1>")
})

server.get("/api/hello", (req, res) => {
    res.json({
        message: "success"
    })
})

module.exports = server