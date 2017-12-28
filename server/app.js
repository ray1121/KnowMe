import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import errorHandler from 'errorhandler'
import logger from 'morgan'
import session from 'express-session'
import bodyParser from 'body-parser'

import api from './api'
import routes from './routes'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)
app.use(logger('dev'))
app.use(session({ resave: true,
  saveUninitialized: true,
  secret: 'rayissohandsome' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Import API Routes
app.use('/api', api)
// 将应用实例传入自定义路由中
routes(app)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// error handling middleware should be loaded after the loading the routes
if (app.get('env') === 'development') {
  app.use(errorHandler())
}

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
