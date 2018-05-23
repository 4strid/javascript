const canvas = document.querySelector('canvas')
const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height
const ctx = canvas.getContext('2d')

ctx.fillRect(50, 50, 100, 100)

let lastTime = null

function clearScreen () {
	ctx.fillStyle = '#ffffff'
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

const SQUARE_WIDTH = 100
let direction = 'right'
let squarePosition = 0

function updateSquare (elapsed) {
	if (direction === 'right') {
		squarePosition += 0.05 * elapsed
	}
	if (direction === 'left') {
		squarePosition -= 0.05 * elapsed
	}
	if (squarePosition >= CANVAS_WIDTH - SQUARE_WIDTH) {
		direction = 'left'
	}
	if (squarePosition <= 0) {
		direction = 'right'
	}
}

function drawSquare () {
	// set fillstyle to red
	ctx.fillStyle = '#ff0000'
	// draw the square
	ctx.fillRect(squarePosition, 50, SQUARE_WIDTH, SQUARE_WIDTH)
}

// this is the function that will run 60 times per second
function tick (time) {
	// figure out how much time has passed between the two frames
	const elapsed = lastTime ? time - lastTime : 0
	// set lastTime to new time
	lastTime = time

	clearScreen()

	updateSquare(elapsed)

	drawSquare()

	// recurse: ask for another animation frame
	window.requestAnimationFrame(tick)
}

// start up the engine
window.requestAnimationFrame(tick)
