// modules
const express = require('express')
const app = express()

// port
const PORT = process.env.PORT || 3000

// route
app.use('/api', require('./routes/api'))

// listening
app.listen(PORT)
console.log(`The server is working on localhost:${PORT}`)