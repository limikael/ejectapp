var ctx =canvas.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;

ctx.fillStyle = '#ff0000';
ctx.fillRect( 0, 0, w/2, h );

ctx.fillStyle = '#0000ff';
ctx.fillRect( w/2, 0, w/2, h );
