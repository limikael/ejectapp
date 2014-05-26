var FunctionUtil = require("../utils/FunctionUtil");
var TaskCondition = require("./TaskCondition");
var fs = require("fs");

/**
 * Check that a file is in place.
 */
function CheckFileCondition(fileName) {
	TaskCondition.call(this);

	this.fileName = fileName;
}

FunctionUtil.extend(CheckFileCondition, TaskCondition);

/**
 * Check.
 */
TaskCondition.prototype.check = function() {
	return fs.existsSync(this.fileName)
}

module.exports=CheckFileCondition;