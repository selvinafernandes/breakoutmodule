var drawBall = (function (Module) {

	Module.ball = function() {
		canvasContext.beginPath();
		canvasContext.arc(xAxis, yAxis, ballRadius, 0, Math.PI*2);
		canvasContext.fillStyle = 'rgb(128,128,128)';
		canvasContext.fill();
		canvasContext.closePath();
	}
	 
	return Module;

})(Module || {});