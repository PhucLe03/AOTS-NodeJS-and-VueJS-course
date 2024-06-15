const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()
const app = express()
const port = 3000

app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, UnifiedTopilogy: true })
    .then(() => console.log("Connected to database"))
    .catch((error) => console.error("Connection error:", error));
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })

const rentRoute = require("./routes/rentRoute.js")
app.use("/api/", rentRoute)

const roomRoute = require("./routes/roomRoute.js")
app.use("/api/", roomRoute)

const serviceRoute = require("./routes/serviceRoute.js")
app.use("/api/", serviceRoute)