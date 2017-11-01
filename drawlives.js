var drawLives = (function (){

	var livesPrivate = function() {
		canvasContext.font = "20px TimesNewRoman";
		canvasContext.fillStyle = "#000";
		canvasContext.fillText("Lives left: " +livesLeft, canvas.width - 110, 20);
	}

	var lives = function() {
		livesPrivate();
	}

	return {
		lives:lives
	}

})();