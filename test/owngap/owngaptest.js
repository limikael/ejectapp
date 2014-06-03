console.log("*********** owngap test...");

setBackgroundColor(1.0, 1.0, 0.0);

var canvas = document.createElement("canvas");
window.ownGapCanvas.width = 1280;
window.ownGapCanvas.height = 720;

var context = canvas.getContext("2d");

var image = new Image();
var rot = 0;
var posX = 400;
var posY = 300;
image.onload = function () {
	function animate() {
		requestAnimationFrame(animate.bind(this));

		context.fillStyle="#FF0000";
		context.fillRect(20,20,150,100);

		//context.drawImage(image, posX, posY);
		context.globalAlpha = 0.5;
		context.drawImage(image, 430, 430);
		context.save();
		context.globalAlpha = 0.3;
		context.translate(400,300);
		context.rotate(rot);
		rot += 0.01;
		if (rot >= Math.PI*2) {
			rot = 0;
		}
		context.drawImage(image, -64, -128);
		//context.translate(-64,-128);
		//context.translate(464,428);
		context.globalAlpha = 1.0;
		context.restore();
	}

	requestAnimationFrame(animate.bind(this));
};
image.src = "media/starship.png";

/*setTimeout(function() {
	function animate(p) {
		console.log("animate.......");
		context.fillStyle = '#ff0000';
		context.fillRect(0, 0, 200, 200);
	}

	requestAnimationFrame(animate);

	console.log("timeout, starting anim......");
},100);*/
