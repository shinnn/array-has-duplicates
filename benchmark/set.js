'use strict';

function returnTrue() {
  return true;
}

function fn(arr) {
  arr = arr.filter(returnTrue);
  return arr.length !== 0 && arr.length !== new Set(arr).size;
}

require('./run')(fn, 'Set');
