'use strict';

const requireFromString = require('require-from-string');
const rollup = require('rollup');
const test = require('tape');

function runTest(description, main) {
  test(description, t => {
    t.equal(main.name, 'arrayHasDuplicates', 'should have a function name.');

    t.strictEqual(
      main(new Array(3).fill('a')),
      true,
      'should return true when the array has duplicated values.'
    );

    t.strictEqual(
      main(['0', 0, null, undefined, false]),
      false,
      'should return false when the array doesn\'t have any duplicated values.'
    );

    t.strictEqual(
      main(new Array(1000).fill(['a'])),
      true,
      'should compare values with the strict equal operator.'
    );

    t.strictEqual(
      main([, , , undefined]), // eslint-disable-line
      false,
      'should ignore empty array elements.'
    );

    t.strictEqual(
      main([]),
      false,
      'should return false when the array is empty.'
    );

    t.throws(
      () => main(new Set([0, 1, 2])),
      /^TypeError.*is not an array\. Expected an array to check if it includes duplicated values or not\./,
      'should throw a type error when the first argument is not an array.'
    );

    t.throws(
      () => main(),
      /^TypeError.*undefined is not an array\. /,
      'should throw a type error when it takes no arguments.'
    );

    t.end();
  });
}

runTest('require(\'array-has-duplicates\')', require('.'));

global.window = {};
require('./' + require('./bower.json').main);

runTest('window.arrayHasDuplicates', global.window.arrayHasDuplicates);

rollup.rollup({entry: require('./package.json')['jsnext:main']}).then(bundle => {
  runTest('Module exports', requireFromString(bundle.generate({format: 'cjs'}).code));
});
