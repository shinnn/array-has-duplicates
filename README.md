# array-has-duplicates

[![npm version](https://img.shields.io/npm/v/array-has-duplicates.svg)](https://www.npmjs.com/package/array-has-duplicates)
[![Build Status](https://travis-ci.com/shinnn/array-has-duplicates.svg?branch=master)](https://travis-ci.com/shinnn/array-has-duplicates)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-has-duplicates.svg)](https://coveralls.io/github/shinnn/array-has-duplicates)

Check if an `Array` includes duplicated values or not

```javascript
arrayHasDuplicates([1, 2, 3, 4, 5]); //=> false
arrayHasDuplicates([1, 2, 3, 4, 5, 1]); //=> true
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install array-has-duplicates
```

## API

### arrayHasDuplicates(*array*)

*array*: `Array<any>`  
Return: `boolean`

It returns `true` if the array includes at least one pair of duplicated values, otherwise returns `false`.

```javascript
arrayHasDuplicates([3, 3, 3]); //=> true
arrayHasDuplicates([3, '3', [3]]); //=> false
```

*"Duplicated"* means a value is identical to another value in the ECMAScript [same-value equality](https://developer.mozilla.org/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality) level.

```javascript
arrayHasDuplicates([0, -0]); //=> false
```

Note that it ignores all empty indexes.

```javascript
arrayHasDuplicates([, undefined]);
//=> false, though array[0] and array[1] are both `undefined`
```

## Tips

When the difference between `-0` and `+0` is not important, there is no need to use this module and the [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) constructor serves the purpose.

```javascript
function arrayHasDuplicatesLoose(arr) {
  return arr.length !== new Set(arr).size;
}
```

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
