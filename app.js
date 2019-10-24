require('dotenv').config() // import environment variables.

const express = require('express') // express middleware.
const morgan = require('morgan') // logging.
const morganConfig = require('./config/morgan.config') // logging config.
const compression = require('compression') // gzip response body compression.
const helmet = require('helmet') // secure http headers.

var app = express()

// binding application-level middleware to an instance of the app
app.use(morgan(morganConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(compression()) 

// cofigure cors options.
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type Host')
  next()
})

// application api routes.
require('./routes/index/v1/index.controller')(app)

// global error api error handler.
app.use((err, req, res, next) => {
  if (err) {
    morgan.debug(`[Error] ${err}`)
    morgan.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
    res.status(err.status || 500).json({ message: 'Internal service error.' })
  }
  next()
})

module.exports = app
