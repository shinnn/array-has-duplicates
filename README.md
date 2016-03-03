# array-has-duplicates

[![NPM version](https://img.shields.io/npm/v/array-has-duplicates.svg)](https://www.npmjs.com/package/array-has-duplicates)
[![Bower version](https://img.shields.io/bower/v/array-has-duplicates.svg)](https://github.com/shinnn/array-has-duplicates/releases)
[![Build Status](https://travis-ci.org/shinnn/array-has-duplicates.svg?branch=master)](https://travis-ci.org/shinnn/array-has-duplicates)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-has-duplicates.svg)](https://coveralls.io/r/shinnn/array-has-duplicates)
[![devDependency Status](https://david-dm.org/shinnn/array-has-duplicates/dev-status.svg)](https://david-dm.org/shinnn/array-has-duplicates#info=devDependencies)

Check if an [array](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4) includes duplicated values or not

```javascript
arrayHasDuplicates([1, 2, 3, 4, 5]); //=> false
arrayHasDuplicates([1, 2, 3, 4, 5, 1]); //=> true
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install array-has-duplicates
```

#### [bower](http://bower.io/)

```
bower install array-has-duplicates
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/array-has-duplicates/master/browser.js)

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

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[strictequal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_strict_equality_()
