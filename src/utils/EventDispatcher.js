/**
 * An event dispatcher base class that can function both in actionscript style
 * or jquery style.
 *
 * @class EventDispatcher
 */
function EventDispatcher() {
	this.listenerMap={};
}

/**
 * Add event listener.
 *
 * @method addEventListener
 * @param eventType The event to listen for.
 * @param listener The callback to call when an event is triggered.
 * @param [scope] The scope used when calling the callback.
 * @internal
 */
EventDispatcher.prototype.addEventListener=function(eventType, listener, scope) {
	if (!eventType)
		throw new Error("Event type required for event dispatcher");

	if (!listener)
		throw new Error("Listener required for event dispatcher");

	this.removeEventListener(eventType,listener,scope);

	if (!this.listenerMap.hasOwnProperty(eventType))
		this.listenerMap[eventType]=[];

	this.listenerMap[eventType].push({
		listener: listener,
		scope: scope
	});
}

/**
 * Remove event listener.
 * The listener will only be removed if both the listener callback as well
 * as the scope matches.
 * @method removeEventListener
 * @param eventType The event to stop listening for.
 * @param listener The callback to remove.
 * @param [scope] The scope used when registering the callback.
 * @internal
 */
EventDispatcher.prototype.removeEventListener=function(eventType, listener, scope) {
	if (!this.listenerMap.hasOwnProperty(eventType))
		return;

	var listeners=this.listenerMap[eventType];

	for (var i=0; i<listeners.length; i++) {
		var listenerObj=listeners[i];

		if (listener==listenerObj.listener && scope==listenerObj.scope) {
			listeners.splice(i,1);
			i--;
		}
	}
}

/**
 * Dispatch event.
 * @method dispatchEvent
 * @param event The event to dispatch.
 * @internal
 */
EventDispatcher.prototype.dispatchEvent=function(event) {
	if (typeof event=="string") {
		event={
			type: event
		};
	}

	if (!this.listenerMap.hasOwnProperty(event.type))
		return;

	for (var i in this.listenerMap[event.type]) {
		var listenerObj=this.listenerMap[event.type][i];

		listenerObj.listener.call(listenerObj.scope,event);
	}
}

/**
 * Add an event listener that will be called when something happens.
 * @method on
 */
EventDispatcher.prototype.on=EventDispatcher.prototype.addEventListener;

/**
 * Remove event listener previously added with on.
 * @method off
 */
EventDispatcher.prototype.off=EventDispatcher.prototype.removeEventListener;

/**
 * An alias for 
 * {{#crossLink "EventDispatcher/dispatchEvent"}}dispatchEvent{{/crossLink}}
 * @method trigger
 * @internal
 */
EventDispatcher.prototype.trigger=EventDispatcher.prototype.dispatchEvent;

module.exports=EventDispatcher;
