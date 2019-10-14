var canvasElements = (function() {
	const ballRadius = 10;
	const paddleHeight = 20;
	const paddleWidth = 75;
	var livesLeft = 4;
	var paddleX = (canvas.width - paddleWidth) / 2;
	var rightPressed = false;
	var leftPressed = false;

	var _createBall = function(canvas, canvasContext) {
		canvasContext.beginPath();
		canvasContext.arc(xAxis, yAxis, ballRadius, 0, Math.PI * 2);
		canvasContext.fillStyle = 'rgb(128,128,128)';
		canvasContext.fill();
		canvasContext.closePath();
	};

	var _createPaddle = function(canvas, canvasContext) {
		canvasContext.beginPath();
		canvasContext.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
		canvasContext.fillStyle = 'rgb(128,128,128)';
		canvasContext.fill();
		canvasContext.closePath();
	};

	var _createLives = function(canvas, canvasContext) {
		canvasContext.font = '20px TimesNewRoman';
		canvasContext.fillStyle = '#000';
		canvasContext.fillText('Lives left: ' + livesLeft, canvas.width - 110, 20);
	};

	var _moveBall = function(canvas, canvasContext) {
		if (xAxis + dx > canvas.width - ballRadius || xAxis + dx < ballRadius) {
			dx = -dx;
		}

		if (yAxis + dy < ballRadius) {
			dy = -dy;
		} else if (yAxis + dy > canvas.height - ballRadius) {
			if (xAxis > paddleX && xAxis < paddleX + paddleWidth) {
				if ((yAxis = yAxis - paddleHeight)) {
					dy = -dy;
				}
			} else {
				livesLeft--;
				if (!livesLeft) {
					alert('Game Over');
					document.location.reload();
				} else {
					xAxis = canvas.width / 2;
					yAxis = canvas.height - 50;
					dx = 2;``
					dy = -2;
					paddleX = (canvas.width - paddleWidth) / 2;
				}
			}
		}

		xAxis += dx;
		yAxis += dy;
	};

	var _movePaddle = function(canvas, canvasContext) {
		document.addEventListener(
			'keydown',
			function(e) {
				if (e.keyCode == 37) {
					leftPressed = true;
				} else if (e.keyCode == 39) {
					rightPressed = true;
				}
			},
			false
		);

		document.addEventListener(
			'keyup',
			function(e) {
				if (e.keyCode == 37) {
					leftPressed = false;
				} else if (e.keyCode == 39) {
					rightPressed = false;
				}
			},
			false
		);

		if (rightPressed && paddleX < canvas.width - paddleWidth) {
			paddleX += 5;
		} else if (leftPressed && paddleX > 0) {
			paddleX -= 5;
		}
	};

	var Create = function(canvas, canvasContext) {
		if (canvas && canvasContext) {
			_createPaddle(canvas, canvasContext);
			_createBall(canvas, canvasContext);
			_createLives(canvas, canvasContext);
		}
	};

	var Move = function(canvas, canvasContext) {
		if (canvas && canvasContext) {
			_moveBall(canvas, canvasContext);
			_movePaddle(canvas, canvasContext);
		}
	};

	return {
		Create: Create,
		Move: Move
	};
})();
