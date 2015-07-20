//http://stackoverflow.com/questions/25341597/how-can-khan-academy-computer-programs-be-run-offline-or-on-my-own-website
//http://stackoverflow.com/a/25341598/1154693
function khanProcessing( programFunction, canvasElement ) 
{
	var canvas = canvasElement;
	var processing = new Processing(canvas, function(processing) {
		processing.size(400, 400);
		processing.background(0xFFF);

		var mouseIsPressed = false;
		processing.mouseIsPressed = mouseIsPressed;
		
		processing.mousePressed = function () { mouseIsPressed = true; processing.mouseIsPressed = mouseIsPressed; };
		processing.mouseReleased = function () { mouseIsPressed = false; processing.mouseIsPressed = mouseIsPressed; };

		var keyIsPressed = false;
		processing.keyPressed = function () { keyIsPressed = true; };
		processing.keyReleased = function () { keyIsPressed = false; };

		function getImage(s) {
			var url = "https://www.kasandbox.org/programming-images/" + s + ".png";
			processing.externals.sketch.imageCache.add(url);
			return processing.loadImage(url);
		}
		processing.getImage = getImage;

		with (processing) {
//-----------------------------
// INSERT YOUR KHAN ACADEMY PROGRAM BELOW
//-----------------------------

programFunction(processing);

//-----------------------------
// END OF YOUR KHAN ACADEMY PROGRAM
//-----------------------------
		}
		if (typeof draw !== 'undefined') processing.draw = draw;
	});
};