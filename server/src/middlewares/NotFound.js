import StatusCode from '../configurations/StatusCode.js'

export const NotFound = (request, response, next) => {
	const error = new Error(`Not found: ${request.originalUrl}`)
	response.status(StatusCode.NOT_FOUND)
	next(error)
}
