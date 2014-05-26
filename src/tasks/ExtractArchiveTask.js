var FunctionUtil = require("../utils/FunctionUtil");
var CheckFileCondition = require("../taskrunner/CheckFileCondition");
var Task = require("../taskrunner/Task");
var request = require("request");
var fs = require("fs");
var unzip = require("unzip");
var BunzipStream = require("../utils/BunzipStream");
var untar = require('untar');
var StringUtil = require("../utils/StringUtil");
var child_prcess = require('child_process');
var FileUtil = require("../utils/FileUtil");
var child_process = require("child_process");

if (setImmediate)
	process.nextTick = setImmediate;

/**
 * A task to be run.
 */
function ExtractArchiveTask(label) {
	Task.call(this, label);
}

FunctionUtil.extend(ExtractArchiveTask, Task);

/**
 * Set source.
 */
ExtractArchiveTask.prototype.setSrc = function(value) {
	this.src = value;
}

/**
 * Set dest.
 */
ExtractArchiveTask.prototype.setDest = function(value) {
	this.dest = value;

	this.condition = new CheckFileCondition(this.dest);
}

/**
 * Start the task.
 */
ExtractArchiveTask.prototype.start = function() {
	if (StringUtil.endsWith(this.src, ".zip")) {
		this.reader = fs.createReadStream(this.src);
		this.extracter = unzip.Extract({
			path: this.dest
		});

		var stat = fs.statSync(this.src);
		this.progressStream.setLength(stat.size);

		this.reader.pipe(this.progressStream).pipe(this.extracter);

		this.extracter.on("finish", this.onWriterFinish.bind(this));
	} else if (StringUtil.endsWith(this.src, ".tar.bz2")) {
		FileUtil.ensureDirectorySync(this.dest);

		this.reader = fs.createReadStream(this.src);
		this.process = child_process.spawn("tar", ["-xzC", this.dest]);
		this.process.on("close", this.onProcessClose.bind(this));

		var stat = fs.statSync(this.src);
		this.progressStream.setLength(stat.size);

		this.reader.pipe(this.progressStream).pipe(this.process.stdin);
	} else
		throw new Error("Unknown archive format.");
}

/**
 * Writer finish.
 */
ExtractArchiveTask.prototype.onWriterFinish = function() {
	this.notifyComplete();
}

/**
 * Process exit.
 */
ExtractArchiveTask.prototype.onProcessClose = function(res) {
	if (res !== 0)
		throw new Error("Error extracting: " + res);

	this.notifyComplete();
}

module.exports = ExtractArchiveTask;