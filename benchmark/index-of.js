'use strict';

function returnTrue() {
	return true;
}

function fn(arr) {
	arr = arr.filter(returnTrue);

	let len = arr.length;

	while (len--) {
		if (arr.indexOf(arr[len]) !== len) {
			return true;
		}
	}

	return false;
}

require('./run')(fn, 'indexOf()');
