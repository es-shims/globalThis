'use strict';

var systemGlobal = require('../');
systemGlobal.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(typeof System, 'object', 'System is an object');
	t.equal('global' in System, true, 'global is in System');

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(System, 'global'), 'System.global is not enumerable');
		et.end();
	});

	t.test('writability', { skip: !defineProperties.supportsDescriptors }, function (wt) {
		var desc = Object.getOwnPropertyDescriptor(System, 'global');
		wt.equal(desc.writable, false, 'System.global is not writable');
		wt.end();
	});

	runTests(System.global, t);

	t.end();
});
