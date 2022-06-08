window.onload = function () {
	var canvas = document.getElementById("ukr");
	var context = canvas.getContext("2d");

	var x = 0;
	function draw() {
		context.beginPath();
		context.rect(x, 0, 50, 200);
		context.fillStyle = "blue";
		context.fill();
		context.beginPath();
		context.rect(x, 200, 50, 200);
		context.fillStyle = "yellow";
		context.fill();

		x += 10;
		if (x >= 600) {
			x = -100;
		}
	}
	setInterval(draw, 50);
}