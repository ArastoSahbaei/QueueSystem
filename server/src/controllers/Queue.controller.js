import QueueModel from '../models/Queue.model.js'

const getQueueNumber = async (request, response) => {
	const product = new QueueModel({
		queueNumber: request.body.queueNumber
	})

	try {
		const databaseResponse = await product.save()
		response.status(200).send(databaseResponse)
	} catch (error) {
		response.status(500).send({ message: error.message })
	}
}

export default {
	getQueueNumber
}