var drawLives = (function (Module){

	livesPrivate = function() {
		canvasContext.font = "20px TimesNewRoman";
		canvasContext.fillStyle = "#000";
		canvasContext.fillText("Lives left: " +livesLeft, canvas.width - 110, 20);
	}

	Module.lives = function() {
		livesPrivate();
	}

	return Module;

})(Module || {});