// required packages
require("dotenv").config()
const express = require("express")
const ejsLayouts = require("express-ejs-layouts")

// config express app/middlewares
const app = express()
app.set("view engine", "ejs")
const PORT = process.env.PORT || 3000
app.use(ejsLayouts)

// route definitions
app.get("/", (req, res) => {
    res.render("home.ejs")
})
// listen on a port
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})