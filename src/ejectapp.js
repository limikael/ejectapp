#!/usr/bin/env node

/*
 * Set things up.
 */
function setup() {
//	FiberFileDownloader

	console.log("Downloading and setting up build environment...");
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
