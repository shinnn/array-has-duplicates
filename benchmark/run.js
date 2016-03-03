'use strict';

const assert = require('assert');

const chalk = require('chalk');
const filledArray = require('filled-array');

const duplicatedArray = filledArray('value', 300);
const serialArray = filledArray(index => index, 300);
const largeSerialArray = filledArray(index => index, 1000);

module.exports = function runBench(fn, suiteName) {
  function loop(caseFn, fixtureName) {
    console.time(fixtureName);

    let i = 500;

    while (i--) {
      caseFn();
    }

    console.timeEnd(fixtureName);
  }

  console.log(chalk.cyan(suiteName));

  loop(
    () => assert.strictEqual(fn([]), false),
    'empty array                        '
  );
  loop(
    () => assert.strictEqual(fn([1, 2, 1]), true),
    'small array                        '
  );
  loop(
    () => assert.strictEqual(fn([, , , undefined]), false), // eslint-disable-line
    'small array with empty indexes     '
  );
  loop(
    () => assert.strictEqual(fn([1, 2, {}, [], 1]), true),
    'small array with objects           '
  );
  loop(
    () => assert.strictEqual(fn(duplicatedArray), true),
    'large array                        '
  );
  loop(
    () => assert.strictEqual(fn(serialArray), false),
    'large array (no duplicates)        '
  );
  loop(
    () => assert.strictEqual(fn(largeSerialArray), false),
    'really large array (no duplicates) '
  );

  console.log();
};
