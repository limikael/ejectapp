/**
 * Function utils.
 * @class FunctionUtil
 * @static
 * @internal
 */
function FunctionUtil() {
}

/**
 * Extend a class. Don't forget to call super.
 * @method extend
 * @param target The class that extends another class.
 * @param base The class that is extended.
 *
 * @example
 *   <pre><code>
 *     function MyClass() {
 *       BaseClass.call(this);
 *     }
 *
 *     FunctionUtil.extend(MyClass,BaseClass);
 *   </code></pre>
 */
FunctionUtil.extend=function(target, base) {
	target.prototype=Object.create(base.prototype);
	target.prototype.constructor=target;
//	target.prototype.super=base.prototype;
}

/**
 * Create delegate function.
 * @method createDelegate
 */
FunctionUtil.createDelegate=function(func, scope) {
	return function() {
		func.apply(scope,arguments);
	};
}

module.exports=FunctionUtil;
