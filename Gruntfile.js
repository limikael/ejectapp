var FiberJob=require("fiberjob");
var Fiber=require("fibers");

module.exports=function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json")
	});

	function test() {
		var done=this.async();

		Fiber(function() {
			var job=FiberJob("./node_modules/.bin/jasmine-node");

			job.arg("--forceexit");
			job.arg("--captureExceptions");

			job.arg("test");

			job.expect(0).show().run();
		}).run();
	}

	grunt.registerTask("test",test);
}