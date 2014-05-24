var FiberFileDownloader = require("../../src/utils/FiberFileDownloader");
var FileUtil = require("../../src/utils/FileUtil");
var Fiber = require("fibers");
var fs = require("fs");

describe("FiberFileDownloader",function() {
	it("can download a file",function(done) {
		Fiber(function() {
			FileUtil.rmForceSync("hello.txt");

			var f=new FiberFileDownloader();
			f.setUrl("https://openvpn.net/index.php/about-menu/about-us.html");
			f.setTarget("hello.txt");

			f.download();

			expect(fs.existsSync("hello.txt")).toBe(true);
			FileUtil.rmForceSync("hello.txt");

			done();
		}).run();
	});	
})