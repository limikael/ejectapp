#!/usr/bin/env node

var Fiber = require("fibers");
var FiberFileDownloader = require("./utils/FiberFileDownloader");
var FileUtil = require("./utils/FileUtil");
var ProgressMeter = require("./utils/ProgressMeter");

/*
 * Set things up.
 */
function setup() {
	Fiber(function() {
		FileUtil.ensureDirectorySync(__dirname + "/../content");

		var runner=new TaskRunner("Enable target: android");
		var task;

		task=new DownloadTask("Downloading Ejecta-X");
		task.setUrl("https://github.com/Wizcorp/Ejecta-X/archive/v0.8.0.zip");
		task.setTarget(__dirname + "/../content/Ejecta-X-v0.8.0.zip");
		runner.addTask(task);

		runner.run();


		t=new DownloadTask();
		t.

		var f = new FiberFileDownloader();
		f.setUrl("https://github.com/Wizcorp/Ejecta-X/archive/v0.8.0.zip");
		f.setTarget(__dirname + "/../content/Ejecta-X-v0.8.0.zip");

		var p = new ProgressMeter("Downloading Ejecta-X");
		p.setProgressable(f);
		p.start();

		f.download();
		p.done();

		var f=new FiberFileDownloader();
		switch (process.platform) {
			case "darwin":
				f.setUrl("http://dl.google.com/android/ndk/android-ndk-r9d-darwin-x86_64.tar.bz2");
				break;

			default:
				throw new Error("Target cannot build on the host system: "+process.platform);
				break;
		};

		f.setTarget(__dirname + "/../content/android-ndk-r9d.tar.bz2");

		var p = new ProgressMeter("Downloading Android NDK");
		p.setProgressable(f);
		p.start();

		f.download();
		p.done();

		var f=new FiberFileDownloader();
		switch (process.platform) {
			case "darwin":
				f.setUrl("http://dl.google.com/android/adt/22.6.2/adt-bundle-mac-x86_64-20140321.zip");
				break;

			default:
				throw new Error("Target cannot build on the host system: "+process.platform);
				break;
		};

		f.setTarget(__dirname + "/../content/adt-bundle.zip");

		var p = new ProgressMeter("Downloading Android SDK");
		p.setProgressable(f);
		p.start();

		f.download();
		p.done();

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