var FunctionUtil = require("./FunctionUtil");
var Thenable = require("./Thenable");
var EventDispatcher = require("./EventDispatcher");
var fs = require("fs");
var http = require("http");
var https = require("https");
var url = require("url");
var path = require("path");

/**
 * Downloads a saves a file.
 * @class FileDownloader
 */
function FileDownloader() {
	Thenable.call(this);

	this.redirects=0;
}

FunctionUtil.extend(FileDownloader, Thenable);

/**
 * Set url.
 */
FileDownloader.prototype.setUrl=function(downloadUrl) {
	this.downloadUrl=downloadUrl;

	if (!this.fileName)
		this.fileName=path.basename(this.downloadUrl);
}

/**
 * Set file name.
 */
FileDownloader.prototype.setTarget=function(fileName) {
	this.fileName=fileName;
}

/**
 * Do the download.
 */
FileDownloader.prototype.download = function() {
	if (!this.downloadUrl)
		throw new Error("No url provided");

	if (!this.fileName)
		throw new Error("No target file name");

	//console.log(this.downloadUrl);

	var urlComponents=url.parse(this.downloadUrl);

	switch (urlComponents.protocol) {
		case "http:":
			this.request=http.get(this.downloadUrl,this.onResponse.bind(this));
			break;

		case "https:":
			this.request=https.get(this.downloadUrl,this.onResponse.bind(this));
			break;

		default:
			throw new Error("Unknown protocol: "+urlComponents.protocol);
	}

	return this;
}

/**
 * Got response, start download
 * @private
 */
FileDownloader.prototype.onResponse=function(response) {
	var scope=this;

	switch (response.statusCode) {
		case 200:
			//console.log("will download: "+response.headers["content-length"]);

			this.file=fs.createWriteStream(this.fileName);
			this.file.on("finish",this.onFileFinish.bind(this));

			response.pipe(this.file);
			break;

		case 301:
		case 302:
			this.redirects++;

			if (this.redirects>10)
				throw new Error("Redirect loop.");

			this.downloadUrl=response.headers.location;
			this.request.abort();

			this.download();
			break;

		case 404:
			this.notifyError("404 Not found");
			break;

		default:
			throw new Error("Unknown http status: "+response.statusCode);
			break;
	}
}

/**
 * Finish.
 * @private
 */
FileDownloader.prototype.onFileFinish=function() {
	this.file.close(this.onFileClosed.bind(this));
}

/**
 * @private
 */
FileDownloader.prototype.onFileClosed=function() {
	this.notifySuccess();
}

module.exports = FileDownloader;