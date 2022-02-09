const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays([1,2,3],[1,2,3]));

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));    // => should PASS
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true));    // => should Fail
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));    // => should PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true));    // => should Fail