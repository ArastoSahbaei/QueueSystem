import express from 'express'
import morgan from 'morgan'
import { ConnectToDatabase } from './src/configurations/ConnectToDatabase.js'
import { ConnectToPort } from './src/configurations/ConnectToPort.js'
import QueueRoutes from './src/routes/Queue.routes.js'
import { NotFound } from './src/middlewares/NotFound.js'
import { ErrorHandler } from './src/middlewares/ErrorHandler.js'

const application = express()
application.use(express.json())
application.use(morgan('common'))
QueueRoutes.routes(application)

application.use(NotFound)
application.use(ErrorHandler)

ConnectToDatabase()
ConnectToPort(application)