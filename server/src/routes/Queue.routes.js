import QueueController from '../controllers/Queue.controller.js'

const routes = application => {
	application.post('/queue', QueueController.getQueueNumber)
}

export default { routes }