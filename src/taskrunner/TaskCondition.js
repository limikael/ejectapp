/**
 * Check that a condition is fulfilled before and after a task.
 */
function TaskCondition() {
}

/**
 * Check.
 */
TaskCondition.prototype.check=function() {
	throw new Error("abstract");
}

module.exports=TaskCondition;