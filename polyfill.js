'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof System !== 'object' || !System.global || System.global.Math !== Math || System.global.Array !== Array) {
		return implementation;
	}
	return System.global;
};
