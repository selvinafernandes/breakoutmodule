var drawBricks = (function () {

	dBricks = function() {
		for (var column = 0;column < columnCount ; column++){
			for( var row = 0; row < rowCount; row++){
				if(bricks[column][row].status == 1) {
					var brickX = (column * (brickWidth + brickPadding)) + brickOffsetLeft;
					var brickY = (row * (brickHeight + brickPadding)) + brickOffsetTop;
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
	}
	return {
		dBricks:dBricks
	}

})();