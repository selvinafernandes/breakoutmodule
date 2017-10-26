'use strict';

var module = (function() {

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

	var destroyBricks = (function() {

		var destroy = function() {
			for(var column=0; column < columnCount; column++) {
			    bricks[column] = [];
			    for(var row=0; row < rowCount; row++) {
			        bricks[column][row] = { x: 0, y: 0 ,status:1};
			    }
			}
		}
		return {
			destroy:destroy
		}

	}());

	var paddleKeypress = (function() {

		var keypress = function() {
			document.addEventListener('keydown', function(e) {
				if(e.keyCode == 37 ) {
					leftPressed = true;
				} else if (e.keyCode == 39) {
					rightPressed = true;
				}
			},false);


			document.addEventListener('keyup', function(e) {
				if(e.keyCode == 37) {
					leftPressed = false;
				} else if (e.keyCode == 39) {
					rightPressed = false;
				}
			},false);
		}
		return {
			keypress:keypress
		}

	}());

	var drawBall = (function () {

		var ball = function() {
			canvasContext.beginPath();
			canvasContext.arc(xAxis, yAxis, ballRadius, 0, Math.PI*2);
			canvasContext.fillStyle = 'rgb(128,128,128)';
			canvasContext.fill();
			canvasContext.closePath();
		}
		return {
			ball:ball
		}

	}());

	var drawPaddle = (function () {

		var paddle = function(){
			canvasContext.beginPath();
			canvasContext.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
			canvasContext.fillStyle = 'rgb(128,128,128)';
			canvasContext.fill();
			canvasContext.closePath();
		}
		return {
			paddle:paddle
		}

	}());

	var drawBricks = (function () {

		var dBricks = function() {
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

	}());

	var detectCollision = (function () {

		var collision = function() {
			for (var column = 0;column < columnCount ; column++){
				for( var row = 0; row < rowCount; row++){
					var brickNumber = bricks[column][row];
					if(brickNumber.status == 1) {
						if (xAxis > brickNumber.xAxis && xAxis < brickNumber.xAxis + brickWidth && yAxis > brickNumber.yAxis && yAxis < brickNumber.yAxis + brickHeight) {
							dy = -dy;
							brickNumber.status = 0;
							totalScore++;
							if(totalScore == rowCount*columnCount){
								alert("Stop wasting your time, your totalscore is" +totalScore);
								document.location.reload();
							}
						}
					}		
				}
			}
		}

		return {
			collision:collision
		}

	}());

	var drawScore = (function drawScore(){

		var score = function() {
			canvasContext.font = "20px TimesNewRoman";
			canvasContext.fillStyle = "#000";
			canvasContext.fillText("Score is:" +totalScore, 8, 20);
		}

		return {
			score:score
		}

	}());

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
			lives: lives
		}

	}());


	var draw = (function () {

		var finalDraw = function() {
			canvasContext.clearRect(0,0, canvas.width, canvas.height);
			drawBricks.dBricks();
			drawBall.ball();
			drawPaddle.paddle();
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
			finalDraw:finalDraw,
		}
	
	}());

	setInterval(draw.finalDraw,10);
	paddleKeypress.keypress();
	destroyBricks.destroy();

}());

