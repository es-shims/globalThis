'use strict';

module.exports = function getPolyfill() {
	if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
		return require('./implementation');
	}
	return global;
};
