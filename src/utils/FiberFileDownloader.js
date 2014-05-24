var FunctionUtil = require("./FunctionUtil");
var FileDownloader = require("./FileDownloader");
var EventDispatcher = require("./EventDispatcher");
var Fiber = require("fibers");

/**
 * Fiber file downloader
 * @class Download file synchronously in a fiber.
 */
function FiberFileDownloader() {
	EventDispatcher.call(this);
	this.fileDownloader=new FileDownloader();
}

FunctionUtil.extend(FiberFileDownloader,EventDispatcher);

/**
 * Set url.
 */
FiberFileDownloader.prototype.setUrl=function(value) {
	this.fileDownloader.setUrl(value);
}

/**
 * Set target.
 */
FiberFileDownloader.prototype.setTarget=function(value) {
	this.fileDownloader.setTarget(value);
}

/**
 * Download.
 */
FiberFileDownloader.prototype.download=function() {
	this.fiber = Fiber.current;

	this.fileDownloader.on("progress",this.onFileDownloaderProgress.bind(this));

	this.fileDownloader.download().then(
		this.onFileDownloaderComplete.bind(this),
		this.onFileDownloaderError.bind(this)
	);

	Fiber.yield();
}

/**
 * Progress.
 */
FiberFileDownloader.prototype.onFileDownloaderProgress=function() {
	this.trigger("progress");
}

/**
 * Download.
 */
FiberFileDownloader.prototype.onFileDownloaderComplete=function() {
	this.fiber.run();
}

/**
 * Error.
 */
FiberFileDownloader.prototype.onFileDownloaderError=function(e) {
	throw new Error(e);

	this.fiber.run();
}

/**
 * Get progress.
 */
FiberFileDownloader.prototype.getProgress=function() {
	return this.fileDownloader.getProgress();
}

module.exports=FiberFileDownloader;