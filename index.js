//imports
require("dotenv").config();

const server = require("./api/server")

const PORT = process.env.PORT || 9000

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, () => {
    console.log(`hello from ${PORT}`)
})