const React = require(`react`)

console.log(`\n\n\nPLUGIN SSR\n\n\n`)
exports.onRenderBody = ({ setPreBodyComponents }) => {
	console.log(`\n\n\nPLUGIN ONRENDERBODY\n\n\n`)
	setPreBodyComponents([
		<div key='test'>TEST</div>,
	])
}