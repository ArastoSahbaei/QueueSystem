import dotenv from 'dotenv'
import StatusCode from '../configurations/StatusCode.js'

dotenv.config()
const { ENVIROMENT } = process.env

export const ErrorHandler = (error, request, response, next) => {
	const statuscode = (response.statusCode === StatusCode.OK)
		? StatusCode.INTERNAL_SERVER_ERROR
		: response.statusCode
	response.status(statuscode)
	response.json({
		statuscode: statuscode,
		message: ENVIROMENT === 'PRODUCTION' ? '🚫' : error.message,
		stacktrace: ENVIROMENT === 'PRODUCTION' ? '🚫' : error.stack,
	})
}