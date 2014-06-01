#!/usr/bin/env node

var minimist = require("minimist");
var AndroidPackager = require("./packagers/AndroidPackager");

/*
 * Print help.
 */
function usage() {
	console.log("Usage: ejectapp [options] <inputfile.js>");
	console.log("");
	console.log("Options:");
	console.log("");
	console.log("  --output=<file>    Specify output file.");
	console.log("  --name=<name>      Specify app name.");
	console.log("  --package=<name>   Specify app package.");
	console.log("");
	process.exit();
}

var options = {
	boolean: [],
	string: ["output", "name", "package"]
}

var argv = minimist(process.argv.slice(2), options);

if (argv._.length != 1)
	usage();

for (key in argv) {
	if (key != "_" && options.string.indexOf(key) < 0 && options.boolean.indexOf(key) < 0)
		usage();
}

var packager = new AndroidPackager(argv._[0]);

if (argv.output)
	packager.setOutput(argv.output);

if (argv.name)
	packager.setAppName(argv.name);

if (argv.package)
	packager.setPackageName(argv.package);

packager.build();