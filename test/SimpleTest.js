var context = canvas.getContext("2d");

var percent=0;
var percentDelta=.01;

function animate() {
	requestAnimationFrame(animate);

	var w = window.innerWidth;
	var h = window.innerHeight;

	context.fillStyle = '#ff0000';
	context.fillRect( 0, 0, w*percent, h );

	context.fillStyle = '#0000ff';
	context.fillRect( w*percent, 0, w*(1-percent), h );

	percent+=percentDelta;

	if (percent>1)
		percentDelta=-.01;

	if (percent<0)
		percentDelta=.01;
}

animate();
