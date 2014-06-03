var Fiber = require("fibers");
var FiberJob = require("fiberjob");
var temp = require("temp");
var StringUtil = require("../utils/StringUtil");
var path = require("path");
var FileUtil = require("../utils/FileUtil");
var et = require("elementtree");
var fs = require("fs");
var wrench = require("wrench");

/**
 * Android packager.
 */
function AndroidPackager(mainSourceFileName) {
	this.mainSourceFileName = mainSourceFileName;

	if (!StringUtil.endsWith(this.mainSourceFileName, ".js"))
		throw new Error("Input file shoud be a .js file");

	this.outputFileName = path.basename(this.mainSourceFileName, ".js") + ".apk";
	this.appName = path.basename(this.mainSourceFileName, ".js");

	var id = path.basename(this.mainSourceFileName, ".js");
	id = id.toLowerCase();
	id = id.replace(" ", "");

	this.packageName = "com.impactjs." + id;
	this.resourceFiles = [];
}

/**
 * Set output file name.
 */
AndroidPackager.prototype.setOutput = function(value) {
	this.outputFileName = value;

	if (!StringUtil.endsWith(this.outputFileName, ".apk"))
		throw new Error("Output needs to end with .apk");
}

/**
 * Set app name.
 */
AndroidPackager.prototype.setAppName = function(value) {
	this.appName = value;
}

/**
 * Set package.
 */
AndroidPackager.prototype.setPackageName = function(value) {
	this.packageName = value;
}

/**
 * Add a resource.
 */
AndroidPackager.prototype.addResource = function(resourceFile) {
	this.resourceFiles.push(resourceFile);
}

/**
 * Process files.
 */
AndroidPackager.prototype.processFiles = function() {
	var sourceBaseName = path.basename(this.mainSourceFileName);

	fs.unlinkSync(this.workDir + "/assets/www/index.js");
	FileUtil.copySync(this.mainSourceFileName, this.workDir + "/assets/www/" + sourceBaseName);

	var r;

	for (r in this.resourceFiles) {
		var resourceFile = this.resourceFiles[r];

		if (fs.statSync(resourceFile).isDirectory())
			throw new Error("resource directories is not yet supported");

		var resourceBaseName = path.basename(resourceFile);

		FileUtil.copySync(resourceFile, this.workDir + "/assets/www/" + resourceBaseName);
	}
}

/**
 * Transform string resources for project.
 */
AndroidPackager.prototype.transformStrings = function() {
	var tree = et.parse(fs.readFileSync(this.workDir + "/res/values/strings.xml").toString());
	var strings = tree.findall("string");

	for (var i = 0; i < strings.length; i++) {
		var stringEl = strings[i];

		switch (stringEl.get("name")) {
			case "app_name":
				stringEl.text = this.appName;
				break;

			case "js_entry_file":
				stringEl.text = path.basename(this.mainSourceFileName);
				break;
		}
	}

	//console.log(tree.write());

	fs.writeFileSync(this.workDir + "/res/values/strings.xml", tree.write());

	tree = et.parse(fs.readFileSync(this.workDir + "/AndroidManifest.xml").toString());
	tree.getroot().set("package", this.packageName);
	fs.writeFileSync(this.workDir + "/AndroidManifest.xml", tree.write());
}

/**
 * Ensure the debug key exists, by creating it if it does not.
 */
AndroidPackager.prototype.ensureDebugKeyExists = function() {
	var homeDir = FileUtil.getUserHomeDir();

	if (!fs.existsSync(homeDir + "/.android/debug.keystore")) {
		wrench.mkdirSyncRecursive(homeDir + "/.android", 0755);

		FiberJob("keytool")
			.arg("-genkey")
			.arg("-keystore", homeDir + "/.android/debug.keystore")
			.arg("-alias", "androiddebugkey")
			.arg("-storepass", "android")
			.arg("-keypass", "android")
			.arg("-keyalg", "RSA")
			.arg("-validity", "14000")
			.arg("-dname", "CN=Android Debug, OU=Android, O=Unknown, L=Unknown, ST=Unknown, C=US")
			.arg("-noprompt")
			.expect(0).run();
	}
}

/**
 * Sign application.
 */
AndroidPackager.prototype.signApp = function() {
	this.ensureDebugKeyExists();

	FiberJob("jarsigner")
		.arg("-keystore", FileUtil.getUserHomeDir() + "/.android/debug.keystore")
		.arg("-storepass", "android")
		.arg(this.absoluteOutputFileName)
		.arg("androiddebugkey")
		.expect(0).run();
}

/**
 * Do the work.
 */
AndroidPackager.prototype.build = function() {
	Fiber(function() {
		temp.track();
		this.workDir = temp.mkdirSync();
		//console.log("work dir: "+this.workDir);

		var job = FiberJob(__dirname + "/../../extern/apktool1.5.2/apktool");
		job.arg("d", "--no-src", "-f");
		job.arg(__dirname + "/../../projectors/AndroidProjector.apk");
		job.arg(this.workDir);
		job.expect(0).run();

		this.processFiles();
		this.transformStrings();

		this.absoluteOutputFileName = path.resolve(this.outputFileName);
		FileUtil.rmForceSync(this.absoluteOutputFileName);

		var job = FiberJob(__dirname + "/../../extern/apktool1.5.2/apktool");
		job.arg("b");
		job.arg(this.workDir);
		job.arg(this.absoluteOutputFileName);
		job.expect(0).run();

		this.signApp();
	}.bind(this)).run();
}

module.exports = AndroidPackager;