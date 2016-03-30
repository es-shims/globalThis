'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimSystemAndGlobal() {
	var polyfill = getPolyfill();
	define(
		polyfill,
		{ System: {} },
		{ System: function () { return typeof System !== 'object'; } }
	);
	if (System.global !== polyfill) {
		if (define.supportsDescriptors) {
			Object.defineProperty(System, 'global', {
				configurable: true,
				enumerable: false,
				value: polyfill,
				writable: false
			});
		} else {
			System.global = polyfill;
		}
	}
	return polyfill;
};
