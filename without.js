/* eslint-disable space-before-function-paren */
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const _ = require("lodash");

const without = (arr1, arr2) => {
  const result = _.without(arr1, ...arr2);
  return result;
};

assertEqual(without([1, 2, 3], [3]), false);
