'use strict';

function returnTrue() {
  return true;
}

function fn(arr) {
  arr = arr.filter(returnTrue);
  return arr.length !== 0 && arr.length !== Array.from(new Set(arr)).length;
}

require('./run')(fn, 'Set + Array.from()');
