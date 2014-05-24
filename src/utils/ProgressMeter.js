/**
 * Progress meter.
 */
function ProgressMeter(message) {
	this.message=message;
}

/**
 * Start.
 */
ProgressMeter.prototype.start=function() {
	process.stdout.write(this.message+": ");
	process.stdout.write("\r");
}

/**
 * Set progressable.
 */
ProgressMeter.prototype.setProgressable=function(value) {
	this.progressable=value;
	this.progressable.on("progress",this.onProgressableProgress.bind(this));
}

/**
 *
 */
ProgressMeter.prototype.onProgressableProgress=function() {
	process.stdout.write(this.message+": ");

	process.stdout.write(this.progressable.getProgress()+"%     ");
	process.stdout.write("\r");
}

/**
 * Done.
 */
ProgressMeter.prototype.done=function() {
	process.stdout.write(this.message+": ");
	process.stdout.write("OK     ");

	console.log("");
}

module.exports=ProgressMeter;