'use strict';

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;

var runTests = require('./tests');

test('native', function (t) {
	t.equal(typeof System, 'object', 'System is an object');
	t.equal(global in System, true, 'global is in System');

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(System, 'global'), 'System.global is not enumerable');
		et.end();
	});

	runTests(System.global, t);

	t.end();
});
