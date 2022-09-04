const express = require("express")
const cors = require("cors")
const path = require("path")

const config = require("./config")

const app = express()

// CORS
app.use(cors())

//
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'public')))

// write your api endpoints here
app.use("/", function(req, res, next) {
    res.status(200)
    res.send({
        success: true,
        msg: "Boilerplate api",
    })
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404)
    res.send({
        success: false,
        msg: "Not found",
    })
})

// error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
})

app.listen(config.server.port, function() {
    console.log("Server running at port", config.server.port)
})