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

module.exports = findMedian;
