/*!
 * array-has-duplicates | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-has-duplicates
*/
import appendType from 'append-type';

function removeEmptyArrayElement() {
	return true;
}

var hasSet = typeof Set === 'function';

export default function arrayHasDuplicates(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an Array to check if it includes duplicated values, but got ' + appendType(arr) + '.');
	}

	arr = arr.filter(removeEmptyArrayElement);

	if (arr.length < 300 || !hasSet) {
		var len = arr.length;

		while (len--) {
			if (arr.indexOf(arr[len]) !== len) {
				return true;
			}
		}

		return false;
	}

	return arr.length !== 0 && arr.length !== new Set(arr).size;
}
