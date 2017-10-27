var drawScore = (function drawScore(Module){

	Module.score = function() {
		canvasContext.font = "20px TimesNewRoman";
		canvasContext.fillStyle = "#000";
		canvasContext.fillText("Score is:" +totalScore, 8, 20);
	}

	return Module;

})(Module || {});