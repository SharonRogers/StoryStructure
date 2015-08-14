app.service('setStateService', function() {
	newState: function(key) {
		var callback = listeners[key]
			for (i = 0; i < callback.length; i++) {
				callback[i](newValue);
			}
		var listeners = { };
			register: function(ksy, callback) {
				if (    ) {
					listeners[key] = [];
				} else
					listeners[key].push(callback);
				}
			}
	}
})