var fs = require("fs");
var wrench = require("wrench");

/**
 * File utilities.
 */
function FileUtil() {
}

/**
 * Hard unconditional remove.
 */
FileUtil.rmForceSync = function(fileName) {
	if (fs.existsSync(fileName)) {
		var stat = fs.statSync(fileName);

		if (stat.isDirectory())
			wrench.rmdirSyncRecursive(fileName);

		else
			fs.unlinkSync(fileName);
	}

	if (fs.existsSync(fileName))
		throw new Error("Unable to remove " + fileName);
}

/**
 * Ensure directory exists.
 */
FileUtil.ensureDirectorySync = function(dirName) {
	if (!fs.existsSync(dirName))
		fs.mkdirSync(dirName);
}

/**
 * Copy file.
 */
FileUtil.copySync = function(source, dest) {
	if (!fs.existsSync(source))
		throw new Error("File does not exist: "+source);

	fs.writeFileSync(dest, fs.readFileSync(source));	

	if (!fs.existsSync(source))
		throw new Error("Unable to write: "+dest);
}

/**
 * Get home directory.
 */
FileUtil.getUserHomeDir = function() {
	return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

module.exports=FileUtil;