var FunctionUtil = require("../utils/FunctionUtil");
var CheckFileCondition = require("../taskrunner/CheckFileCondition");
var Task = require("../taskrunner/Task");
var request = require("request");
var fs = require("fs");
var child_process = require('child_process');

/**
 * A task to be run.
 */
function JobTask(label) {
	Task.call(this, label);

	this.expectedReturnCode = 0;
	this.output="";
}

FunctionUtil.extend(JobTask, Task);

/**
 * Set source.
 */
JobTask.prototype.setCommand = function(value) {
	this.command = value;
}

/**
 * Set dest.
 */
JobTask.prototype.setDir = function(value) {
	this.dir = value;
}

/**
 * Set expected return code.
 */
JobTask.prototype.setExpectedReturnCode = function(value) {
	this.expectedReturnCode = value;
}

/**
 * Start the task.
 */
JobTask.prototype.start = function() {
	this.originalCwd = process.cwd();

	if (this.dir)
		process.chdir(this.dir);

	this.process = child_process.spawn(this.command, []);
	this.process.on("close", this.onProcessClose.bind(this));
	this.process.on("error", this.onProcessError.bind(this));

	this.process.stdout.on("data",this.onProcessOutput.bind(this));
	this.process.stderr.on("data",this.onProcessOutput.bind(this));
}

/**
 * Writer finish.
 */
JobTask.prototype.onProcessClose = function(res) {
	process.chdir(this.originalCwd);

	if (res != this.expectedReturnCode)
		throw new Error("Unexpected return code");

	this.notifyComplete();
}

/**
 * Child process output.
 * @method onChildProcessOutput
 * @private
 */
JobTask.prototype.onProcessOutput=function(data) {
	this.output+=data;
}

/**
 * Process error.
 */
JobTask.prototype.onProcessError=function() {
	throw new Error("Error running sub process");
}

module.exports = JobTask;