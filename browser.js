/*!
 * array-has-duplicates | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-has-duplicates
*/
(function() {
  'use strict';

  function removeEmptyArrayElement() {
    return true;
  }

  var hasES2015features = typeof Set === 'function' && typeof Array.from === 'function';

  window.arrayHasDuplicates = function arrayHasDuplicates(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError(
        String(arr) +
        ' is not an array. Expected an array to check if it includes duplicated values or not.'
      );
    }

    arr = arr.filter(removeEmptyArrayElement);

    if (arr.length < 300 || !hasES2015features) {
      var len = arr.length;

      while (len--) {
        if (arr.indexOf(arr[len]) !== len) {
          return true;
        }
      }

      return false;
    }

    return arr.length !== 0 && arr.length !== Array.from(new Set(arr)).length;
  };
})();
