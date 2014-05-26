var Thenable = require("../utils/Thenable");
var FunctionUtil = require("../utils/FunctionUtil");

/**
 * Run some tasks.
 */
function TaskRunner(label) {
	Thenable.call(this);

	this.label = label;

	this.tasks = [];
}

FunctionUtil.extend(TaskRunner, Thenable);

/**
 * Add task to be run.
 */
TaskRunner.prototype.addTask = function(task) {
	this.tasks.push(task);
}

/**
 *
 */
TaskRunner.prototype.runNextTask = function() {
	if (this.taskIndex >= this.tasks.length) {
		console.log();
		console.log(Array(this.label.length+1).join("-"));

		this.notifySuccess();
		return;
	}

	var task = this.tasks[this.taskIndex];
	this.taskIndex++;

	task.run().then(this.runNextTask.bind(this));
}

/**
 * Run the added tasks.
 */
TaskRunner.prototype.run = function() {
	this.taskIndex = 0;

	console.log(this.label);
	console.log(Array(this.label.length+1).join("-"));
	console.log();

	this.runNextTask();
}

module.exports = TaskRunner;