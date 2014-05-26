/**
 * String util.
 */
function StringUtil() {}

/**
 * Ends with.
 */
StringUtil.endsWith = function(str, suffix) {
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

module.exports = StringUtil;