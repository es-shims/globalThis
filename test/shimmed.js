'use strict';

var systemGlobal = require('../');
systemGlobal.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(typeof global, 'object', 'global is an object');
	t.equal('global' in global, true, 'global is in global');

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(global, 'global'), 'global.global is not enumerable');
		et.end();
	});

	t.test('writability', { skip: !defineProperties.supportsDescriptors }, function (wt) {
		var desc = Object.getOwnPropertyDescriptor(global, 'global');
		wt.equal(desc.writable, false, 'global.global is not writable');
		wt.end();
	});

	runTests(global.global, t);

	t.end();
});
