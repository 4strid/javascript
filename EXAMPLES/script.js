/* events and basic DOM manipulation */
document.addEventListener('keydown', function (evt) {
	console.log('keydown')
	console.log(evt)
})

document.addEventListener('keypress', function (evt) {
	console.log('keypress')
	console.log(evt)
})

//document.addEventListener('mousemove', function (evt) {
	//console.log('mousemove')
	//console.log(evt)
//})

document.querySelector('button').addEventListener('click', evt => {
	document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
})

const container = document.querySelector('.container')

container.addEventListener('click', evt => {
	// evt.target is what actually triggered the event
	console.log(evt.target)
	// we check to see if it was a multiplier button
	if (evt.target.className === 'multiplier') {
		// create the new button
		const newMultiplierButton = document.createElement('button')
		// create the text for the new button
		const textNode = document.createTextNode('MULTIPLY ME')
		// set the class name
		newMultiplierButton.className = 'multiplier'
		// attach the text to the button
		newMultiplierButton.appendChild(textNode)
		// attach the button to the container
		container.appendChild(newMultiplierButton)
	}
	// we check to see if it is a destroyer button
	if (evt.target.className === 'destroyer') {
		while (container.firstChild) {
			container.removeChild(container.firstChild)
		}
	}
})
