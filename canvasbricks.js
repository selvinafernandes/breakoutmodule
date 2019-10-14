var canvasBricks = (function() {
	const brickWidth = 75;
	const brickHeight = 20;
	const brickPadding = 10;
	const brickOffsetTop = 30;
	const brickOffsetLeft = 30;
	var totalScore = 0;

	var _create = function(canvas, canvasContext, rowCount, columnCount, bricks) {
		for (var column = 0; column < columnCount; column++) {
			for (var row = 0; row < rowCount; row++) {
				if (bricks[column][row].status == 1) {
					var brickX = column * (brickWidth + brickPadding) + brickOffsetLeft;
					var brickY = row * (brickHeight + brickPadding) + brickOffsetTop;
					bricks[column][row].xAxis = brickX;
					bricks[column][row].yAxis = brickY;
					canvasContext.beginPath();
					canvasContext.rect(brickX, brickY, brickWidth, brickHeight);
					canvasContext.fillStyle = 'rgb(128,128,128)';
					canvasContext.fill();
					canvasContext.closePath();
				}
			}
		}
	};

	var _collision = function(rowCount, columnCount, bricks) {
		for (var column = 0; column < columnCount; column++) {
			for (var row = 0; row < rowCount; row++) {
				var brickNumber = bricks[column][row];
				if (brickNumber.status == 1) {
					if (
						xAxis > brickNumber.xAxis &&
						xAxis < brickNumber.xAxis + brickWidth &&
						yAxis > brickNumber.yAxis &&
						yAxis < brickNumber.yAxis + brickHeight
					) {
						dy = -dy;
						brickNumber.status = 0;
						totalScore++;
						if (totalScore == rowCount * columnCount) {
							alert('Stop wasting your time, your totalscore is' + totalScore);
							document.location.reload();
						}
					}
				}
			}
		}
	};

	var _createScore = function() {
		canvasContext.font = '20px TimesNewRoman';
		canvasContext.fillStyle = '#000';
		canvasContext.fillText('Score is:' + totalScore, 8, 20);
	};

	var Create = function(canvas, canvasContext, rowCount, columnCount, bricks) {
		_create(canvas, canvasContext, rowCount, columnCount, bricks);
	};

	var CreateScore = function(canvas, canvasContext) {
		_createScore(canvas, canvasContext);
	};

	var Collision = function(rowCount, columnCount, bricks) {
		_collision(rowCount, columnCount, bricks);
	};

	return {
		Create: Create,
		CreateScore: CreateScore,
		Collision: Collision
	};
})();
