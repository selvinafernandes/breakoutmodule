
var drawPaddle = (function (Module) {

	Module.paddle = function(){
		canvasContext.beginPath();
		canvasContext.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
		canvasContext.fillStyle = 'rgb(128,128,128)';
		canvasContext.fill();
		canvasContext.closePath();
	}
	return Module;

})(Module || {});