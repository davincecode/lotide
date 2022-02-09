const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  }
};



const _ = require('lodash');

const without = (arr1, arr2) => {

  const result = _.without(arr1, ...arr2);
  return result;

};

console.log(assertEqual(without([1, 2, 3], [3]), false));    // => should PASS
console.log(assertEqual(without([1, 2, 3], [3, 2, 1]), true));    // => should Fail
console.log(assertEqual(without(["1", "2", "3"], ["1", "2", "3"]), true));    // => should PASS
console.log(assertEqual(without(["1", "2", "3"], ["1", "2", 3]), true));    // => should Fail

