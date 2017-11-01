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

})();

