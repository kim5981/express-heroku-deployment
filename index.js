
//imports
require("dotenv").config();
const express = require("express")
const cors = require("cors")

const server = express()

const PORT = process.env.PORT || 9000

//middleware
server.use(express.json())
server.use(cors())

//endpoints
server.get("/api/hello", (req, res) => {
    res.json({
        message: "success"
    })
})

server.use("*", (req, res) => {
    res.send("<h1>kim was here</h1>")
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, () => {
    console.log(`hello from ${PORT}`)
})