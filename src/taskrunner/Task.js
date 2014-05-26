var progress = require('progress-stream');
var Thenable = require("../utils/Thenable");
var FunctionUtil = require("../utils/FunctionUtil");

/**
 * A task to be run.
 */
function Task(label) {
	Thenable.call(this);

	this.label = label;
}

FunctionUtil.extend(Task, Thenable);

/**
 * Progress stream progress.
 */
Task.prototype.onProgressStreamProgress = function(progress) {
	this.taskMessage(Math.round(progress.percentage) + "%");
}

/**
 * Print task message.
 */
Task.prototype.taskMessage = function(m) {
	m = m.toString();

	var numSpaces = 8 - m.length;

	var leftSpaces = Array(Math.ceil(numSpaces / 2)).join(" ");
	var rightSpaces = Array(Math.floor(numSpaces / 2)).join(" ");

	process.stdout.write("  [" + leftSpaces + m + rightSpaces + "]  " + this.label + "\r");
}

/**
 * Run the task.
 */
Task.prototype.run = function() {
	if (this.condition) {
		if (this.condition.check()) {
			this.taskMessage("skip");
			console.log("");
			this.notifySuccess();
			return this;
		}
	}

	this.progressStream = progress();

	this.progressStream.on("progress", this.onProgressStreamProgress.bind(this));

	this.taskMessage("");

	this.start();

	return this;
}

/**
 * Complete.
 */
Task.prototype.notifyComplete = function() {
	if (this.condition) {
		if (!this.condition.check()) {
			this.taskMessage("FAIL");

			throw new Error("Task failed!!!")
			return;
		}
	}

	this.taskMessage("OK");
	console.log("");

	this.notifySuccess();
}

module.exports = Task;
