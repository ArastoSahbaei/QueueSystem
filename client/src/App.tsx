import { GetInQueue } from "./GetInQueue"
import { QueueController } from "./QueueController"

export const App = () => {
	return (
		<div>
			<h1>Queue System</h1>
			<GetInQueue />
			<QueueController />
		</div>
	)
}
