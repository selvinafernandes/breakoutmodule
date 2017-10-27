'use strict';
var canvas = document.querySelector('.myCanvas');
	var canvasContext = canvas.getContext('2d');
	var xAxis = canvas.width / 2;
	var yAxis = canvas.height - 50;
	var dx = 2;
	var dy = -2; 
	var paddleHeight = 20;
	var paddleWidth = 75;
	var paddleX = (canvas.width - paddleWidth ) / 2;
	var rightPressed = false;
	var leftPressed = false;
	var rowCount = 3;
	var columnCount = 5;
	var brickWidth = 75;
	var brickHeight = 20;
	var brickPadding = 10;
	var brickOffsetTop = 30;
	var brickOffsetLeft = 30;
	var bricks = [];
	var totalScore = 0;
	var livesLeft = 4;
	var ballRadius = 10;

var Module = (function () {
	
	for(var column=0; column < columnCount; column++) {
	    bricks[column] = [];
	    for(var row=0; row < rowCount; row++) {
	        bricks[column][row] = { x: 0, y: 0 ,status:1};
	    }
	}
	var draw = function() {
		canvasContext.clearRect(0,0, canvas.width, canvas.height);
		paddleKeypress.keypress();
		drawBall.ball();
		drawPaddle.paddle();
		drawBricks.dBricks();
		detectCollision.collision();
		drawScore.score();
		drawLives.lives();
	
		if (xAxis + dx > canvas.width - ballRadius || xAxis + dx < ballRadius) {
			dx = -dx;
		}

		if (yAxis + dy < ballRadius) {
			dy = -dy;
		} else if (yAxis + dy > canvas.height - ballRadius) {
			if (xAxis > paddleX && xAxis < paddleX + paddleWidth) {
				if (yAxis = yAxis - paddleHeight) {
					dy = -dy;
				}
			} else {
				livesLeft --;
				if(!livesLeft) {
					alert("Game Over");
					document.location.reload();
				}else{
					xAxis = canvas.width / 2;
					yAxis = canvas.height - 50;
					dx = 2;
					dy = -2; 
					paddleX = (canvas.width - paddleWidth ) / 2;
				}
			}
		}

		if (rightPressed && (paddleX < canvas.width - paddleWidth)) {
			paddleX += 5;
		} else if (leftPressed && (paddleX > 0)) {
			paddleX -= 5;
		}

		xAxis += dx;
		yAxis += dy;
	}
	return {
		draw:draw
	}
})();

setInterval(Module.draw,10);