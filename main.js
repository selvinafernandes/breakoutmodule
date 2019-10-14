'use strict';
var canvas = document.querySelector('.myCanvas');
var canvasContext = canvas.getContext('2d');
var xAxis = canvas.width / 2;
var yAxis = canvas.height - 50;
var dx = 2;
var dy = -2;

var Module = (function() {
	var bricks = [];
	var rowCount = 5;
	var columnCount = 5;

	for (var column = 0; column < columnCount; column++) {
		bricks[column] = [];
		for (var row = 0; row < rowCount; row++) {
			bricks[column][row] = { x: 0, y: 0, status: 1 };
		}
	}

	var draw = function() {
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
		canvasElements.Create(canvas, canvasContext);
		canvasElements.Move(canvas, canvasContext);
		canvasBricks.Create(canvas, canvasContext, rowCount, columnCount, bricks);
		canvasBricks.CreateScore(canvas, canvasContext);
		canvasBricks.Collision(rowCount, columnCount, bricks);
	};

	return {
		draw: draw
	};
})();

setInterval(Module.draw, 10);
