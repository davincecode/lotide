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

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

