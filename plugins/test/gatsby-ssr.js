const React = require('react')

console.log(`\n\n\nGATSBY SSR\n\n\n`)
exports.onRenderBody = ({ setPreBodyComponents }) => {
	console.log(`\n\n\nONRENDERBODY\n\n\n`)
	setPreBodyComponents([
		<div key='test'>TEST</div>,
	])
}