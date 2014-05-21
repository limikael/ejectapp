var FunctionUtil = require("./FunctionUtil");
var Thenable = require("./Thenable");
var EventDispatcher = require("./EventDispatcher");
var fs = require("fs");
var http = require("http");
var https = require("https");

/**
 * Downloads a saves a file.
 * @class FileDownloader
 */
function FileDownloader() {
	this.redirects=0;
}

FunctionUtil.extend(FileDownloader, EventDispatcher);

/**
 * Set url.
 */
FileDownloader.prototype.setUrl=function(url) {
	this.url=url;
}

/**
 * Set file name.
 */
FileDownloader.prototype.setTargetFileName=function(fileName) {
	this.fileName=fileName;
}

/**
 * Do the download.
 */
FileDownloader.prototype.download = function() {
	this.request=https.get(this.url,this.onResponse.bind(this));
}

FileDownloader.prototype.onResponse=function(response) {
	var scope=this;

	switch (response.statusCode) {
		case 200:
			this.file=fs.createWriteStream(this.fileName);
			response.pipe(this.file);
			scope.file.on("finish",function() {
				scope.file.close(scope.handleFinished);
			});
			break;

		case 302:
			this.redirects++;

			if (this.redirects>10)
				throw new Error("Redirect loop.");

			this.url=response.headers.location;
			this.request.abort();

			this.download();
			break;

		default:
			throw new Error("Unknown http status: "+response.statusCode);
			break;
	}
}

FileDownloader.prototype.handleFinished=function() {
	console.log("downloaded");
}

module.exports = FileDownloader;