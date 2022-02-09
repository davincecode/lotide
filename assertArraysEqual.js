const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = (arr1, arr2) => {

  let result1 = [];
  let result2 = [];


  for (let items of arr1) {
    result1 += items;

  }
  for (let items of arr2) {
    result2 += items;

  }

  if (result1 === result2) {
    return true;
  } else {
    return false;
  }

};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));