var FiberJob = require("fiberjob");
var Fiber = require("fibers");
var FileUtil = require("./src/utils/FileUtil");
var wrench = require("wrench");
var fs = require("fs");

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json")
	});

	function getPaths() {
		var paths = require("./paths");

		return paths;
	}

	function androidDeps() {
		var done = this.async();

		Fiber(function() {
			var paths = getPaths();

			FileUtil.rmForceSync("extern/Ejecta-X/project/android/libs");
			FileUtil.rmForceSync("extern/Ejecta-X/project/android/assets/www/shaders");

			var job = FiberJob(paths.android_ndk_dir + "/ndk-build");
			job.chdir("extern/Ejecta-X/project/android");
			job.show().expect(0).run();

			wrench.mkdirSyncRecursive("androidprojector/assets/www/")

			FileUtil.rmForceSync("androidprojector/libs");
			FileUtil.rmForceSync("androidprojector/assets/www/shaders");

			wrench.copyDirSyncRecursive("extern/Ejecta-X/project/android/libs", "androidprojector/libs");
			wrench.copyDirSyncRecursive("extern/Ejecta-X/project/android/assets/www/shaders", "androidprojector/assets/www/shaders");

			wrench.copyDirSyncRecursive("extern/Ejecta-X/project/android/src/com/impactjs/ejecta", "androidprojector/src/com/impactjs/ejecta");
			FileUtil.rmForceSync("androidprojector/src/com/impactjs/ejecta/sample");

			done();
		}).run();
	}

	function androidProjector() {
		var done = this.async();

		Fiber(function() {
			var paths = getPaths();

			var propertiesContent =
				"# Automatically generated by grunt script.\n" +
				"sdk.dir=" + paths.android_sdk_dir + "\n";

			fs.writeFileSync("androidprojector/local.properties", propertiesContent);

			FileUtil.rmForceSync("androidprojector/bin/EjectApp-release-unsigned.apk");

			var job = FiberJob("ant")
			job.chdir("androidprojector");
			job.arg("release");
			job.show().expect(0).run();

			FileUtil.copySync("androidprojector/bin/EjectApp-release-unsigned.apk", "projectors/AndroidProjector.apk");

			done();
		}).run();
	}

	grunt.registerTask("android-deps", androidDeps);
	grunt.registerTask("android-projector", androidProjector);
}