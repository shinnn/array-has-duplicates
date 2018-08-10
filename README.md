# array-has-duplicates

[![npm version](https://img.shields.io/npm/v/array-has-duplicates.svg)](https://www.npmjs.com/package/array-has-duplicates)
[![Build Status](https://travis-ci.org/shinnn/array-has-duplicates.svg?branch=master)](https://travis-ci.org/shinnn/array-has-duplicates)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-has-duplicates.svg)](https://coveralls.io/github/shinnn/array-has-duplicates)

Check if an [array](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4) includes duplicated values or not

```javascript
arrayHasDuplicates([1, 2, 3, 4, 5]); //=> false
arrayHasDuplicates([1, 2, 3, 4, 5, 1]); //=> true
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install array-has-duplicates
```

## API

### arrayHasDuplicates(*array*)

*array*: `Array`  
Return: `Boolean`

It returns `true` if the array includes at least one pair of duplicated values, otherwise returns `false`.

*"Duplicated"* means a value is [strictly equal (`===`)][strictequal] to the other value.

```javascript
arrayHasDuplicates([3, 3, 3]); //=> true
arrayHasDuplicates([3, '3', [3]]); //=> false
```

Also it ignores all the empty indexes.

```javascript
arrayHasDuplicates([, , , undefined]); //=> false
```

## License

Copyright (c) 2016 - 2018 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[strictequal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_strict_equality_()
