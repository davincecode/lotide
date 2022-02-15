const _ = require("lodash");

const without = (array1, array2) => {
  const result = _.without(array1, ...array2);
  // console.log(typeof result, typeof array1);

  return result;
};

// console.log(without(([1, 2, 3], [3]), [1, 2]));

module.exports = without;
