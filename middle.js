const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const findMedian = (numArray) => {
  let accumulator = [];

  //Split the array in half
  let middle = Math.floor(numArray.length / 2);
  // console.log(middle);

  //find the median
  if (!(numArray.length >= 3)) {
    return accumulator;
  }
  //check if it's odd. odd will output 2 middle variables.
  if (numArray.length % 2 === 0) {
    accumulator.push(numArray[middle - 1]);
    console.log(accumulator);
    accumulator.push(numArray[middle]);
    console.log(accumulator);
    return accumulator;
  } else {
    accumulator.push(numArray[middle]);
    console.log(accumulator);
    return accumulator;
  }
};

assertArraysEqual(findMedian([1]), []); // => []
assertArraysEqual(findMedian([1, 2]), []); // => []

assertArraysEqual(findMedian([1, 2, 3]), [2]); // => [2]
assertArraysEqual(findMedian([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(findMedian([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(findMedian([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
