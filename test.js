'use strict';

const arrayHasDuplicates = require('.');
const test = require('tape');

test('arrayHasDuplicates()', t => {
	t.equal(
		arrayHasDuplicates(new Array(3).fill('a')),
		true,
		'should return true when the array has duplicated values.'
	);

	t.equal(
		arrayHasDuplicates(['0', 0, null, undefined, false]),
		false,
		'should return false when the array doesn\'t have any duplicated values.'
	);

	t.equal(
		arrayHasDuplicates(new Array(1000).fill(['a'])),
		true,
		'should compare values with the strict equal operator.'
	);

	t.equal(
		arrayHasDuplicates([, , , undefined]), // eslint-disable-line no-sparse-arrays
		false,
		'should ignore empty array elements.'
	);

	t.equal(
		arrayHasDuplicates([]),
		false,
		'should return false when the array is empty.'
	);

	t.throws(
		() => arrayHasDuplicates(new Set([0, 1, 2])),
		/^TypeError.*is not an array\. Expected an array to check if it includes duplicated values or not\./u,
		'should throw a type error when the first argument is not an array.'
	);

	t.throws(
		() => arrayHasDuplicates(),
		/^TypeError.*undefined is not an array\. /u,
		'should throw a type error when it takes no arguments.'
	);

	t.end();
});
