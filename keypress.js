var paddleKeypress = (function(Module) {

	Module.keypress = function(){
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
	return Module;

})(Module || {});

