'use strict';

var appendType = require('append-type');

/*!
 * array-has-duplicates | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-has-duplicates
*/

var objectIs = Object.is || function objectIs(x, y) {
	if (x === y) {
		return x !== 0 || 1 / x === 1 / y;
	}

	return x !== x && y !== y; // eslint-disable-line no-self-compare
};

function is(x) {
	return objectIs(this, x);
}

function isAlradyFound(val) {
	if (this.some(is, val)) {
		return true;
	}

	this.push(val);

	return false;
}

function arrayHasDuplicates(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an Array to check if it includes duplicated values, but got ' + appendType(arr) + '.');
	}

	var foundValues = [];

	return arr.some(isAlradyFound, foundValues);
}

module.exports = arrayHasDuplicates;
