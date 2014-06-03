var script = document.createElement('script');
script.src = 'pixi.js';

script.onload=function() {
	console.log("pixi loaded... PIXI="+PIXI);

	var view;

	if (window.canvas)
		view=window.canvas;

	console.log("view="+view);

//	this.renderer=new PIXI.WebGLRenderer(window.innerWidth,window.innerHeight,view);
	var renderer=new PIXI.autoDetectRenderer(window.innerWidth,window.innerHeight,view);

	console.log("renderer="+renderer);
}

document.body.appendChild(script);

//ej.require("pixi.js");

//console.log("pixi loaded...");

if (window.canvas)
	window.canvas.getContext("2d");
