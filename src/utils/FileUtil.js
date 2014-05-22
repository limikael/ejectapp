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

module.exports=FileUtil;