#!/usr/bin/env node

var Fiber = require("fibers");
var FileUtil = require("./utils/FileUtil");
var TaskRunner = require("./taskrunner/TaskRunner");
var DownloadFileTask = require("./tasks/DownloadFileTask");

/*
 * Set things up.
 */
function setup() {
	Fiber(function() {
		FileUtil.ensureDirectorySync(__dirname + "/../content");

		var runner=new TaskRunner("Enable target: android");
		var task;

		task=new DownloadFileTask("Downloading Ejecta-X");
		task.setSrc("https://github.com/Wizcorp/Ejecta-X/archive/v0.8.0.zip");
		task.setDest(__dirname + "/../content/Ejecta-X-v0.8.0.zip");
		runner.addTask(task);

/*		task=new ExtractTask("Extracting Ejecta-X");
		task.setSrc(__dirname + "/../content/Ejecta-X-v0.8.0.zip");
		task.setDest(__dirname + "/../content/Ejecta-X");
		runner.addTask(task);*/

		runner.run();
	}).run();
}

/*
 * Print help.
 */
function help() {
	console.log("Usage: ejectapp <command>");
	console.log("");
	console.log("Commands:");
	console.log("");
	console.log("  build - Build project in current directory.");
	console.log("  status - Check environment status.");
	console.log("  setup - Setup the environment.");
	console.log("");
}

switch (process.argv[2]) {

	case "setup":
		setup();
		break;

	default:
		help();
		break;
}