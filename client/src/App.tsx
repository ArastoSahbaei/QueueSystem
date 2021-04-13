import QRCode from "react-qr-code";

export const App = () => {
	return (
		<div>
			<h1>Queue System</h1>
			<QRCode value="klicka på länken för att få en köplapp till systembolaget: https://www.youtube.com" />
		</div>
	)
}
