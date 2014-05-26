#!/usr/bin/env node

var Fiber = require("fibers");
var FileUtil = require("./utils/FileUtil");
var TaskRunner = require("./taskrunner/TaskRunner");
var DownloadFileTask = require("./tasks/DownloadFileTask");
var ExtractArchiveTask = require("./tasks/ExtractArchiveTask");

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

		task=new ExtractArchiveTask("Extracting Ejecta-X");
		task.setSrc(__dirname + "/../content/Ejecta-X-v0.8.0.zip");
		task.setDest(__dirname + "/../content/Ejecta-X-v0.8.0");
		runner.addTask(task);

		task=new DownloadFileTask("Downloading Android NDK");
		task.setSrc("http://dl.google.com/android/ndk/android-ndk-r9d-darwin-x86_64.tar.bz2");
		task.setDest(__dirname+"/../content/android-ndk-r9d-darwin-x86_64.tar.bz2");
		runner.addTask(task);

		task=new ExtractArchiveTask("Extracting Android NDK");
		task.setSrc(__dirname + "/../content/android-ndk-r9d-darwin-x86_64.tar.bz2");
		task.setDest(__dirname + "/../content/android-ndk-r9d-darwin-x86_64");
		runner.addTask(task);

		task=new DownloadFileTask("Downloading Android SDK");
		task.setSrc("http://dl.google.com/android/adt/22.6.2/adt-bundle-mac-x86_64-20140321.zip");
		task.setDest(__dirname + "/../content/adt-bundle-mac-x86_64-20140321.zip");
		runner.addTask(task);

		task=new ExtractArchiveTask("Extracting Android SDK");
		task.setSrc(__dirname + "/../content/adt-bundle-mac-x86_64-20140321.zip");
		task.setDest(__dirname + "/../content/adt-bundle-mac-x86_64-20140321");
		runner.addTask(task);

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