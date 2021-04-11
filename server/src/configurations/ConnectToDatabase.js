import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DEV_DATABASE_URL, PROD_DATABASE_URL, ENVIROMENT } = process.env

export const ConnectToDatabase = async () => {
	const DATABASE_URL = ENVIROMENT === 'DEVELOPMENT' ? DEV_DATABASE_URL : PROD_DATABASE_URL
	try {
		await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
		console.log('✔️  SUCESSFULLY CONNECTED TO DATABASE..')
	} catch (error) {
		console.log('❌  ERROR OCCURED WHILE TRYING TO CONNECT TO THE DATABASE..')
		process.exit()
	}
}