var FunctionUtil = require("../utils/FunctionUtil");
var Task = require("../taskrunner/Task");
var request = require("request");
var fs = require("fs");

/**
 * A task to be run.
 */
function DownloadFileTask(label) {
	Task.call(this, label);
}

FunctionUtil.extend(DownloadFileTask, Task);

/**
 * Set source.
 */
DownloadFileTask.prototype.setSrc = function(value) {
	this.src = value;
}

/**
 * Set dest.
 */
DownloadFileTask.prototype.setDest = function(value) {
	this.dest = value;
}

/**
 * Start the task.
 */
DownloadFileTask.prototype.start = function() {
	this.request = request(this.src);
	this.writer = fs.createWriteStream(this.dest);
	this.request.pipe(this.progressStream).pipe(this.writer);

	this.writer.on("finish", this.onWriterFinish.bind(this));
}

DownloadFileTask.prototype.onWriterFinish = function() {
	this.writer.close(this.notifyComplete.bind(this));
}

module.exports = DownloadFileTask;