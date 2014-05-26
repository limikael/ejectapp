var request = require("request");
var progress = require('progress-stream');
var fs = require("fs");

process.nextTick=setImmediate;

var str = progress({
	time: 100
});

str.on("progress", function(progress) {
	process.stdout.write("\rprogress: " + Math.round(progress.percentage) + "%");
});

var r=request("https://github.com/Wizcorp/Ejecta-X/archive/v0.8.0.zip");
var writer=fs.createWriteStream(__dirname + "/testdownload.zip");

r.pipe(str).pipe(writer);

