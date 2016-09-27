#system.global <sup>[![Version Badge][npm-version-svg]][npm-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][npm-url]

[![browser support][testling-png]][testling-url]

An ECMAScript spec-compliant polyfill/shim for `global`. Invoke its "shim" method to shim `global` if it is unavailable.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec proposal](https://github.com/tc39/proposal-global).

Most common usage:
```js
var global = require('system.global')(); // returns native method if compliant
	/* or */
var global = require('system.global/polyfill')(); // returns native method if compliant
```

## Example

```js
var assert = require('assert');

// the below function is not CSP-compliant, but reliably gets the
// global object in sloppy mode in every engine.
var getGlobal = Function('return this');

assert.equal(global, getGlobal());
```

```js
/* when `global` is not present */
var shimmedGlobal = require('system.global').shim();
	/* or */
var shimmedGlobal = require('system.global/shim')();

assert.equal(shimmedGlobal, global);
assert.equal(shimmedGlobal, getGlobal());
```

```js
/* when `global` is present */
var shimmedGlobal = require('system.global').shim();

assert.equal(shimmedGlobal, global);
assert.equal(shimmedGlobal, getGlobal());
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[npm-url]: https://npmjs.org/package/system.global
[npm-version-svg]: http://versionbadg.es/ljharb/System.global.svg
[travis-svg]: https://travis-ci.org/ljharb/System.global.svg
[travis-url]: https://travis-ci.org/ljharb/System.global
[deps-svg]: https://david-dm.org/ljharb/System.global.svg?theme=shields.io
[deps-url]: https://david-dm.org/ljharb/System.global
[dev-deps-svg]: https://david-dm.org/ljharb/System.global/dev-status.svg?theme=shields.io
[dev-deps-url]: https://david-dm.org/ljharb/System.global#info=devDependencies
[testling-png]: https://ci.testling.com/ljharb/System.global.png
[testling-url]: https://ci.testling.com/ljharb/System.global
[npm-badge-png]: https://nodei.co/npm/system.global.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/system.global.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/system.global.svg
[downloads-url]: http://npm-stat.com/charts.html?package=system.global
