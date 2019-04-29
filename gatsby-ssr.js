const React = require(`react`)
console.log(`\n\n\nGATSBY SSR\n\n\n`)

exports.onRenderBody = ({ setPostBodyComponents }) => {
	console.log(`\n\n\nONRENDERBODY\n\n\n`)
	process.exit(0)
	setPostBodyComponents([
		<link
			key='leafletCss'
			href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.css'
			rel='stylesheet'
			type='text/css'
		/>,
	])
}