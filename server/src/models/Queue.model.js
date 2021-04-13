import mongoose from 'mongoose'
const { Schema } = mongoose

const queueSchema = Schema({
	name: { type: String },
	clientQueueNumber: { type: Number },
	currentQueueNumber: { type: Number }
})

const QueueModel = mongoose.model('queue', queueSchema)
export default QueueModel