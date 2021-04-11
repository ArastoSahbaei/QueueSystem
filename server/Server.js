import express from 'express'
import morgan from 'morgan'
import { ConnectToDatabase } from './src/configurations/ConnectToDatabase.js'
import { ConnectToPort } from './src/configurations/ConnectToPort.js'

const application = express()
application.use(morgan('common'))

ConnectToDatabase()
ConnectToPort(application)