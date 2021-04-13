import mongoose from 'mongoose'
const { Schema } = mongoose

const queueSchema = Schema({
	queueNumber: {
		type: String
	}
})

const QueueModel = mongoose.model('queue', queueSchema)
export default QueueModel