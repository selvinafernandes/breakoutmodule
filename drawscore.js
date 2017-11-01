var score = (function (){
	var totalScore = 0;
	var drawScore = function() {
		canvasContext.font = "20px TimesNewRoman";
		canvasContext.fillStyle = "#000";
		canvasContext.fillText("Score is:" +totalScore, 8, 20);
		
	}
	var getScore = function (){
		return totalScore;
	}
	return {
		drawScore:drawScore,
		getScore:getScore
	}
})();
