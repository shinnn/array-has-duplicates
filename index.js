'use strict';

var appendType = require('append-type');

/*!
 * array-has-duplicates | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-has-duplicates
*/

function is(x) {
	return Object.is(this, x);
}

function isAlradyFound(val) {
	if (this.some(is, val)) {
		return true;
	}

	this.push(val);

	return false;
}

module.exports = function arrayHasDuplicates(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an Array to check if it includes duplicated values, but got ' + appendType(arr) + '.');
	}

	var foundValues = [];

	return arr.some(isAlradyFound, foundValues);
}
