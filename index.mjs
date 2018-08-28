/*!
 * array-has-duplicates | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-has-duplicates
*/
import appendType from 'append-type';

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

export default function arrayHasDuplicates(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an Array to check if it includes duplicated values, but got ' + appendType(arr) + '.');
	}

	var foundValues = [];

	return arr.some(isAlradyFound, foundValues);
}
