var unzip=require("unzip");
var fs=require("fs");
var fstream=require("fstream");
var progress = require('progress-stream');

//var writer=unzip.Extract({path: __dirname+"/testextract"});

process.nextTick=setImmediate;

var arcname=__dirname+"/adt-bundle.zip";

var readStream=fs.createReadStream(arcname);

var stat=fs.statSync(arcname);

console.log("Downloading: "+stat.size);

var str = progress({
    time: 100,
    length: stat.size
});

readStream.pipe(str).pipe(unzip.Extract({path: __dirname+"/testextract"}));

str.on("progress",function(progress) {
	process.stdout.write("\rprogress: "+Math.round(progress.percentage)+"%");
});

/*var readStream = fs.createReadStream(__dirname+"/Ejecta-X-v0.8.0.zip");
var writeStream = fstream.Writer(__dirname+"/testextract");

readStream
  .pipe(unzip.Parse())
  .pipe(writeStream)*/