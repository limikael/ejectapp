var FileDownloader=require("../../src/utils/FileDownloader");
var FileUtil=require("../../src/utils/FileUtil");
var fs=require("fs");

describe("FileDownloader",function() {

	it("fails if there is no url",function() {
		var f=new FileDownloader();

		expect(function() {
			f.download();
		}).toThrow();
	});

	it("can download a file over http",function(done) {
		var f=new FileDownloader();

		FileUtil.rmForceSync("5MB.zip");

		f.setUrl("http://download.thinkbroadband.com/5MB.zip");
		f.download().then(
			function() {
				expect(fs.existsSync("5MB.zip")).toBe(true);
				FileUtil.rmForceSync("5MB.zip");
				done();
			},

			function() {
				expect("error").not.toBe("error");
				done();
			}
		);
	});

	it("can download a file over https",function(done) {
		var f=new FileDownloader();
		f.setUrl("https://openvpn.net/index.php/about-menu/about-us.html");

		FileUtil.rmForceSync("about-us.html");

		f.download().then(
			function() {
				expect(fs.existsSync("about-us.html")).toBe(true);
				FileUtil.rmForceSync("about-us.html");
				done();
			},

			function() {
				expect("error").not.toBe("error");
				done();
			}
		);
	});

	it("can set a target file name",function(done) {
		var f=new FileDownloader();
		f.setUrl("https://openvpn.net/index.php/about-menu/about-us.html");
		f.setTarget("hello.txt");

		FileUtil.rmForceSync("hello.txt");

		f.download().then(
			function() {
				expect(fs.existsSync("hello.txt")).toBe(true);
				FileUtil.rmForceSync("hello.txt");
				done();
			},

			function() {
				expect("error").not.toBe("error");
				done();
			}
		);
	});

	it("can report an error if the file doesn't exist",function(done) {
		var f=new FileDownloader();
		f.setUrl("http://www.dn.se/a_file_that_doesnt_exist.html");

		f.download().then(
			function() {
				expect("error").not.toBe("error");
				done();
			},

			function() {
				done();
			}
		);
	});

	it("can check progress",function() {

	});
});